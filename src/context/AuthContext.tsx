import React, {useEffect, useReducer} from 'react';
import {
  writeInStorage,
  readFromStorage,
  removeFromStorage,
} from '../utils/localStorage';
import {CustomLoginError, loginApi, logoutApi} from '../mockApi/login';
import {LocalStorageConstants} from '../constants/Constants';

interface User {
  username: string;
  password: string;
}

interface ContextValues {
  login: ({username, password}: User) => void;
  logout: () => void;
  error: string;
  loading: boolean;
  userIsLoggedIn?: boolean;
  user?: User;
}

export const AuthContext = React.createContext<ContextValues>({
  user: undefined,
  login: () => {},
  logout: () => {},
  error: '',
  loading: false,
  userIsLoggedIn: false,
});

type ReducerState = {
  userIsLoggedIn: boolean;
  loading: boolean;
  error: string;
  user?: User;
};

const INITIAL_STATE: ReducerState = {
  userIsLoggedIn: false,
  loading: false,
  error: '',
  user: undefined,
};

enum ActionEnum {
  LOGIN_IN_PROGRESS = 'LOGIN_IN_PROGRESS',
  LOGIN_SUCCESS = 'LOGIN_SUCCES',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  RESET_STATE = 'RESET_STATE',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE = 'LOGOUT_FAILURE',
  LOADING = 'LOADING',
}

type Action =
  | {
      type: ActionEnum.LOGIN_IN_PROGRESS;
      payload: {
        loading: boolean;
        error: '';
        userIsLoggedIn: false;
        user: undefined;
      };
    }
  | {
      type: ActionEnum.LOGIN_SUCCESS;
      payload: {
        loading: false;
        error: '';
        user: User;
        userIsLoggedIn: true;
      };
    }
  | {
      type: ActionEnum.LOGIN_FAILURE;
      payload: {
        loading: false;
        error: string;
        user: undefined;
        userIsLoggedIn: false;
      };
    }
  | {
      type: ActionEnum.RESET_STATE | ActionEnum.LOGOUT_SUCCESS;
      payload: {
        loading: false;
        error: '';
        userIsLoggedIn: false;
        user: undefined;
      };
    }
  | {
      type: ActionEnum.LOGOUT_FAILURE;
      payload: {
        loading: false;
        error: string;
        userIsLoggedIn: true;
      };
    }
  | {
      type: ActionEnum.LOADING;
      payload: {
        loading: boolean;
        error: string;
        userIsLoggedIn: boolean;
      };
    };

const reducer = (state: ReducerState, action: Action) => {
  if (action.type === ActionEnum.LOGIN_IN_PROGRESS) {
    return {
      loading: action.payload.loading,
      error: action.payload.error,
      userIsLoggedIn: action.payload.userIsLoggedIn,
    };
  }
  if (action.type === ActionEnum.LOGIN_SUCCESS) {
    return {
      loading: action.payload.loading,
      error: action.payload.error,
      user: action.payload.user,
      userIsLoggedIn: action.payload.userIsLoggedIn,
    };
  }
  if (action.type === ActionEnum.LOGIN_FAILURE) {
    return {
      loading: action.payload.loading,
      error: action.payload.error,
      user: action.payload.user,
      userIsLoggedIn: action.payload.userIsLoggedIn,
    };
  }
  if (
    action.type === ActionEnum.RESET_STATE ||
    action.type === ActionEnum.LOGOUT_SUCCESS
  ) {
    return {
      loading: action.payload.loading,
      error: action.payload.error,
      user: action.payload.user,
      userIsLoggedIn: action.payload.userIsLoggedIn,
    };
  }
  if (action.type === ActionEnum.LOGOUT_FAILURE) {
    return {
      ...state,
      loading: action.payload.loading,
      error: action.payload.error,
      userIsLoggedIn: action.payload.userIsLoggedIn,
    };
  }
  if (action.type === ActionEnum.LOADING) {
    return {
      ...state,
      loading: action.payload.loading,
      error: action.payload.error,
      userIsLoggedIn: action.payload.userIsLoggedIn,
    };
  }

  return state;
};

export const AuthContextsConstructor = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({
      type: ActionEnum.LOADING,
      payload: {
        loading: true,
        userIsLoggedIn: false,
        error: '',
      },
    });
    const timeout = setTimeout(() => {
      if (readFromStorage(LocalStorageConstants.AccessToken)) {
        dispatch({
          type: ActionEnum.LOGIN_SUCCESS,
          payload: {
            user: {username: 'domasna', password: 'domasna'},
            userIsLoggedIn: true,
            loading: false,
            error: '',
          },
        });
      } else {
        dispatch({
          type: ActionEnum.LOGIN_FAILURE,
          payload: {
            loading: false,
            userIsLoggedIn: false,
            error: '',
            user: undefined,
          },
        });
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const login = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    dispatch({
      type: ActionEnum.LOGIN_IN_PROGRESS,
      payload: {
        loading: true,
        error: '',
        userIsLoggedIn: false,
        user: undefined,
      },
    });
    try {
      const result = await loginApi({username, password});
      writeInStorage(LocalStorageConstants.AccessToken, result.accessToken);
      writeInStorage(LocalStorageConstants.RefreshToken, result.refreshToken);
      dispatch({
        type: ActionEnum.LOGIN_SUCCESS,
        payload: {
          loading: false,
          user: {username, password},
          userIsLoggedIn: true,
          error: '',
        },
      });
    } catch (err: any) {
      dispatch({
        type: ActionEnum.LOGIN_FAILURE,
        payload: {
          loading: false,
          error: (err as CustomLoginError)?.message,
          userIsLoggedIn: false,
          user: undefined,
        },
      });
    }
  };

  const logout = async () => {
    dispatch({
      type: ActionEnum.LOADING,
      payload: {
        error: '',
        loading: true,
        userIsLoggedIn: false,
      },
    });
    try {
      const accessToken = readFromStorage(LocalStorageConstants.AccessToken);
      await logoutApi({accessToken});
      removeFromStorage(LocalStorageConstants.AccessToken);
      removeFromStorage(LocalStorageConstants.RefreshToken);
      dispatch({
        type: ActionEnum.LOGOUT_SUCCESS,
        payload: {
          loading: false,
          user: undefined,
          userIsLoggedIn: false,
          error: '',
        },
      });
    } catch (err: any) {
      dispatch({
        type: ActionEnum.LOGOUT_FAILURE,
        payload: {
          error: err?.message,
          loading: false,
          userIsLoggedIn: true,
        },
      });
    } finally {
      dispatch({
        type: ActionEnum.LOADING,
        payload: {
          error: '',
          loading: false,
          userIsLoggedIn: false,
        },
      });
    }
  };

  //homework
  // export const getUserApi = ({}) => {
  //#1 domasna napravi mockApi slicno na toa za login sto ke vraka nekoj mock user
  // }

  // export const registerMockApi =({}) => {
  //#2 da se napravi register page na koj ke vnesuvame podatoci i istite ke gi zacuvame vo local storage. Userot mora da e avtomatski logiran
  // }

  //#3 logout button

  //#4 na registriraniot user treba da mu napravime dizajn za profilot kade sto moze da smeniime password

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        login,
        error: state.error,
        loading: state.loading,
        userIsLoggedIn: state.userIsLoggedIn,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
