import {readFromStorage, removeFromStorage, writeInStorage} from '../utils/localStorage';
import {LocalStorageConstants} from '../constants/Constants';

export class CustomLoginError extends Error {
  status;
  constructor(message: string, status: number) {
    super();
    this.message = message;
    this.status = status;
  }
}

const someError = new CustomLoginError('Check your credentials', 404);

export const loginApi = ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<{
  accessToken: string;
  refreshToken: string;
  username: string;
  password: string;
}> => {
  return new Promise((resolve, reject) => {
    if (username === 'primer@primer.com' && password === 'pas123') {
      resolve({
        accessToken: LocalStorageConstants.AccessToken,
        refreshToken: LocalStorageConstants.RefreshToken,
        username: username,
        password: password,
      });
    } else {
      reject(someError);
    }
  });
};

export const logoutApi = ({
  accessToken,
}: {
  accessToken: string | null;
}): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (accessToken) {
      resolve(true);
    } else {
      reject('You are not logged out');
    }
  });
};

export const getUser = ({accessToken}: {accessToken: string}) => {
  if (accessToken) {
    const loginUsername = readFromStorage(LocalStorageConstants.LoginUsername);
    const loginPassword = readFromStorage(LocalStorageConstants.LoginPassword);
    const registerUsername = readFromStorage(
      LocalStorageConstants.RegisterUsername
    );
    const registerPassword = readFromStorage(
      LocalStorageConstants.RegisterPassword
    );
    return {
      username: loginUsername ? loginUsername : registerUsername,
      password: loginPassword ? loginPassword : registerPassword,
    };
  } else {
    return 'You are not logged In';
  }
};

export const registerApi = ({
  registerUsername,
  registerPassword,
  registerEmail,
}: {
  registerUsername: string;
  registerPassword: string;
  registerEmail: string;
}): Promise<{
  accessToken: string;
  refreshToken: string;
  registerUsername: string;
  registerPassword: string;
  registerEmail: string;
}> => {
  return new Promise((resolve, reject) => {
    resolve({
      accessToken: LocalStorageConstants.AccessToken,
      refreshToken: LocalStorageConstants.RefreshToken,
      registerUsername: registerUsername,
      registerPassword: registerPassword,
      registerEmail: registerEmail,
    });

    reject(someError);
  });
};

export const changePassword = (password: string) => {
  const oldLoginPassword = readFromStorage(LocalStorageConstants.LoginPassword);
  const oldRegisterPassword = readFromStorage(LocalStorageConstants.RegisterPassword);
  if(oldLoginPassword || oldRegisterPassword ){
    removeFromStorage(LocalStorageConstants.LoginPassword)
    removeFromStorage(LocalStorageConstants.RegisterPassword)
    writeInStorage(LocalStorageConstants.NewPassword, password)
    alert('Successfully changed password')
  }else{
    return 'You can not change password'
  }
}