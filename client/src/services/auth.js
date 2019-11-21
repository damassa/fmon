export const TOKEN_KEY = 't';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token, id) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem('id', id);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};