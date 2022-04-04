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
}): Promise<{accessToken: string; refreshToken: string}> => {
  return new Promise((resolve, reject) => {
    if (username === 'primer@primer.com' && password === 'pas123') {
      resolve({
        accessToken: LocalStorageConstants.AccessToken,
        refreshToken: LocalStorageConstants.RefreshToken,
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

export const getUserApi = ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<{username: string | undefined; password: string | undefined}> => {
  return new Promise((resolve, reject) => {
    resolve({
      username: username,
      password: password,
    });
    reject('there is no username and password');
  });
};
