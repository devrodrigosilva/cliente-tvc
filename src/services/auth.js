export const TOKEN_KEY = '@tvc/token';
export const ID_KEY = '@tvc/userId';
export const USER_TYPE_KEY = '@tvc/userType';
export const USER_NAME_KEY = '@tvc/userName';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const setId = (id) => {
  localStorage.setItem(ID_KEY, id);
};

export const setUserType = (userType) => {
  localStorage.setItem(USER_TYPE_KEY, userType);
};

export const setUserName = (userName) => {
  localStorage.setItem(USER_NAME_KEY, userName);
};

export const logout = () => {
  localStorage.clear(TOKEN_KEY);
  localStorage.clear(ID_KEY);
  localStorage.clear(USER_TYPE_KEY);
  localStorage.clear(USER_NAME_KEY);
};
