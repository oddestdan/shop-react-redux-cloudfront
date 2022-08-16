import { useState, useEffect } from 'react';

export const LS_AUTH_TOKEN = 'auth_token';

export const useBasicAuthorization = () => {
  const [token, setToken] = useState<string | null>();

  useEffect(() => {
    const lsAuthToken = localStorage.getItem(LS_AUTH_TOKEN);
    setToken(lsAuthToken);
  }, []);

  return token;
};
