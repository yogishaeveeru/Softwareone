'use strict';
if (!sessionStorage.getItem('nextUrl')) {
    let accessToken = localStorage.getItem('accessToken');
    let refreshToken = localStorage.getItem('refreshToken');
    // Either the refresh or access token is not expired then don't load the login page and redirect to the main page configured
    if (!(((accessToken && checkExpiry(accessToken)) || (refreshToken && checkExpiry(refreshToken))))) {
        sessionStorage.setItem('nextUrl',CURRENT_URL);
        window.location.replace(LOGIN_URL+`?next=${CURRENT_URL}`)
    }
}
