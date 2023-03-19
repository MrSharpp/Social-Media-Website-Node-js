import * as jwt from 'jwt-simple';

const SECRET = '6y8jg1M7ZsA3kbYbO0_-GLMvPKU_m7vAL-RDP_DWmjU';

export function decode<T>(token: string | null): T | null {
  try {
    if (!token) return null;
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
}