'use strict';
$('#login-form').submit(function (event) {
    submitFormData({
        // formValidation: loginFormValidation,
        submitEvent: event,
        apiEndPoint: ONE_APP_APIS.login,
        authRequired: false,
        onSuccess: function (jsonResponse) {
            if (jsonResponse.access && jsonResponse.refresh) {
                localStorage.setItem('accessToken', jsonResponse.access);
                localStorage.setItem('refreshToken', jsonResponse.refresh);
            }
            let nextUrl = sessionStorage.getItem('nextUrl');
            sessionStorage.removeItem('nextUrl');
            if (nextUrl) {
                window.location.href = nextUrl;
            } else {
                window.location.href = MAIN_PAGE_URL;
            }
        },
    });
});
