import React, {useEffect, useReducer} from 'react';
import {
  writeInStorage,
  readFromStorage,
  removeFromStorage,
} from '../utils/localStorage';
import {
  CustomLoginError,
  getUser,
  loginApi,
  logoutApi,
  registerApi,
} from '../mockApi/login';
import {LocalStorageConstants} from '../constants/Constants';

interface User {
  username: string;
  password: string;
}

interface RegisterUser {
  registerUsername: string;
  registerPassword: string;
  registerEmail: string;
}

interface ContextValues {
  login: ({username, password}: User) => void;
  logout: () => void;
  registerUser: ({
    registerUsername,
    registerPassword,
    registerEmail,
  }: RegisterUser) => void;
  error: string;
  loading: boolean;
  userIsLoggedIn?: boolean;
  user?: User;
  registeredUser?: RegisterUser;
  userIsRegistered?: boolean;
}

export const AuthContext = React.createContext<ContextValues>({
  user: undefined,
  login: () => {},
  logout: () => {},
  registerUser: () => {},
  error: '',
  loading: false,
  userIsLoggedIn: false,
  userIsRegistered: false,
  registeredUser: undefined,
});

type ReducerState = {
  userIsLoggedIn: boolean;
  loading: boolean;
  error: string;
  user?: User;
  userIsRegistered?: boolean;
  registeredUser?: RegisterUser;
};

const INITIAL_STATE: ReducerState = {
  userIsLoggedIn: false,
  loading: false,
  error: '',
  user: undefined,
  userIsRegistered: false,
  registeredUser: undefined,
};

enum ActionEnum {
  LOGIN_IN_PROGRESS = 'LOGIN_IN_PROGRESS',
  LOGIN_SUCCESS = 'LOGIN_SUCCES',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  RESET_STATE = 'RESET_STATE',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE = 'LOGOUT_FAILURE',
  LOADING = 'LOADING',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAILURE = 'REGISTER_FAILURE',
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
        user: User | any;
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
        userIsLoggedIn: false;
      };
    }
  | {
      type: ActionEnum.REGISTER_SUCCESS;
      payload: {
        loading: boolean;
        error: string;
        userIsRegistered: boolean;
        userIsLoggedIn: boolean;
        registeredUser: RegisterUser | any;
      };
    }
  | {
      type: ActionEnum.REGISTER_FAILURE;
      payload: {
        loading: boolean;
        error: string;
        userIsRegistered: boolean;
        userIsLoggedIn: boolean;
        registeredUser: undefined;
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
  if (action.type === ActionEnum.REGISTER_SUCCESS) {
    return {
      loading: action.payload.loading,
      error: action.payload.error,
      userIsLoggedIn: action.payload.userIsLoggedIn,
      userIsRegistered: action.payload.userIsRegistered,
      registeredUser: action.payload.registeredUser,
    };
  }
  if (action.type === ActionEnum.REGISTER_FAILURE) {
    return {
      loading: action.payload.loading,
      error: action.payload.error,
      userIsLoggedIn: action.payload.userIsLoggedIn,
      userIsRegistered: action.payload.userIsRegistered,
      registeredUser: action.payload.registeredUser,
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
      const accessToken = readFromStorage(LocalStorageConstants.AccessToken);
      if (accessToken) {
        const checkUser = getUser({accessToken});
        dispatch({
          type: ActionEnum.LOGIN_SUCCESS,
          payload: {
            user: checkUser,
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
      writeInStorage(LocalStorageConstants.LoginUsername, result.username);
      writeInStorage(LocalStorageConstants.LoginPassword, result.password);
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
      removeFromStorage(LocalStorageConstants.LoginUsername);
      removeFromStorage(LocalStorageConstants.LoginPassword);
      removeFromStorage(LocalStorageConstants.RegisterUsername);
      removeFromStorage(LocalStorageConstants.RegisterPassword);
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

  const registerUser = async ({
    registerUsername,
    registerPassword,
    registerEmail,
  }: {
    registerUsername: string;
    registerPassword: string;
    registerEmail: string;
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
      const result = await registerApi({
        registerUsername,
        registerPassword,
        registerEmail,
      });
      writeInStorage(LocalStorageConstants.AccessToken, result.accessToken);
      writeInStorage(LocalStorageConstants.RefreshToken, result.refreshToken);
      writeInStorage(
        LocalStorageConstants.RegisterUsername,
        result.registerUsername
      );
      writeInStorage(
        LocalStorageConstants.RegisterPassword,
        result.registerPassword
      );
      writeInStorage('email', result.registerEmail);
      dispatch({
        type: ActionEnum.REGISTER_SUCCESS,
        payload: {
          loading: false,
          registeredUser: {registerUsername, registerPassword, registerEmail},
          userIsLoggedIn: true,
          userIsRegistered: true,
          error: '',
        },
      });
    } catch (err: any) {
      dispatch({
        type: ActionEnum.REGISTER_FAILURE,
        payload: {
          loading: false,
          error: (err as CustomLoginError)?.message,
          userIsLoggedIn: false,
          userIsRegistered: false,
          registeredUser: undefined,
        },
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        registeredUser: state.registeredUser,
        login,
        error: state.error,
        loading: state.loading,
        userIsLoggedIn: state.userIsLoggedIn,
        logout,
        registerUser,
        userIsRegistered: state.userIsRegistered,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
