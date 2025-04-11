/**
 * Get cookie in de client through document
 */
export const getCookieAuth = () => {
    const cookiesString = document.cookie;
    const cookiePairs = cookiesString.split(';');
    const tokenPair = cookiePairs.find((c) => c.trim().startsWith('access_token='));
    if (tokenPair) return tokenPair.split('=')[1];
    return undefined;
  };
  
  export const AuthenticatedCookies = Object.freeze({
    ACCESS: 'access_token',
    REFRESH: 'refresh_token',
  } as const);
  
  export const AuthenticatedRoles = Object.freeze({
    CLIENT: 'client',
    ADMIN: 'administrador',
    USER: 'user',
  } as const);
  