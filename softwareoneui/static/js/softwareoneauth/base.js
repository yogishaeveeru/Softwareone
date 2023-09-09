const ONE_APP_APIS = {
    login: '/auth/token',
    verifyAuthToken: '/auth/token/verify',
    forgetPassword: '/auth/password/forget',
    resetPassword: '/auth/password/reset',
    userProfile: '/auth/profile',
    users: '/auth/users',
    refreshToken: '/auth/token/refresh',
    customers: '/api/customers',
    buckets: '/api/customers/{customer}/get-buckets',
    bucket_files: '/api/customers/{customer}/get-files'
}
const statusCodeErrors = {
    401: 'You are not authorized to make this request',
    400: 'Please send valid data',
    403: 'You do not have permission to make this request',
    500: 'Internal Server Error Occured. We are working on to fix this issue',
};
const redirectToLoginPage = function (nextUrl) {
    if (nextUrl) {
        sessionStorage.setItem('nextUrl', nextUrl);
    }
    window.location.replace(LOGIN_URL);
};

const parseJwt = function (token) {
    return JSON.parse(window.atob(token.split('.')[1]));
};

const checkExpiry = function (token) {
    const tokenExpirytime = parseJwt(token).exp;
    const currentTime = new Date().getTime() / 1000;
    if (tokenExpirytime > currentTime) {
        // not expired
        return true;
    }
    // expired
    return false;
};

const requestRefreshTokens = function () {
    let refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken == null || refreshToken == undefined) {
        redirectToLoginPage();
    }
    $.ajax({
        url: ONE_APP_BASE_URL + ONE_APP_APIS.refreshToken,
        data: {refresh: refreshToken},
        type: 'POST',
        beforeSend: null,
        async: false,
        success: function (jsonResponse) {
            localStorage.setItem('accessToken', jsonResponse.access);
            if (jsonResponse.refresh) {
                localStorage.setItem('refreshToken', jsonResponse.refresh);
            }
        },
        error: function () {
            redirectToLoginPage(CURRENT_URL);
        },
    });
};

const getAccessToken = function () {
    let accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        redirectToLoginPage(CURRENT_URL);
    }
    if (!checkExpiry(accessToken)) {
        requestRefreshTokens();
    }
    return localStorage.getItem('accessToken');
};

$.ajaxSetup({
    global: true,
    beforeSend: function (request) {
        request.setRequestHeader('Authorization', 'Bearer ' + getAccessToken());
    },
});

const objectifyForm = function (form, extraFormData, nullFields, excludeHiddenInputs) {
    //serialize data function
    let formObject = {};
    let serializedForm;
    if (extraFormData) {
        formObject = {...extraFormData};
    }
    const formCheckboxes = [];
    // Handle unchecked checkboxes
    $(form)
        .find('input[type=checkbox]')
        .each(function () {
            formObject[this.name] = this.checked;
            formCheckboxes.push(this.name);
        });

    if (excludeHiddenInputs) {
        serializedForm = $(form).find(':input:not(:hidden)').serializeArray();
    } else {
        serializedForm = $(form).serializeArray();
    }
    serializedForm.forEach(function (formElement) {
        if (formObject[formElement.name] && !formCheckboxes.includes(formElement.name)) {
            if (!formObject[formElement.name].push) {
                formObject[formElement.name] = [formObject[formElement.name]];
            }
            formObject[formElement.name].push(formElement.value);
        } else {
            if (nullFields && nullFields.includes(formElement.name) && formElement.value === '') {
                formObject[formElement.name] = null;
            } else {
                formObject[formElement.name] = formElement.value;
            }
        }
    });
    return formObject;
};

const submitFormData = function (opts) {
    opts.submitEvent.preventDefault();
    // opts.formValidation.validate().then(function (validity) {
        // if (validity == 'Valid') {
            const submitButton = $(opts.submitEvent.target).find(':submit');
            // Show loading indication
            // Disable button to avoid multiple click
            submitButton.prop('disabled', true);
            submitButton.attr('data-kt-indicator', 'on');
            const AJAX_OPTIONS = {
                url: ONE_APP_BASE_URL + opts.apiEndPoint,
                data: JSON.stringify(
                    objectifyForm(opts.submitEvent.target, opts.extraData, opts.nullFields, opts.excludeHiddenInputs),
                ),
                type: opts.method || 'POST',
                contentType: 'application/json',
                dataType: 'json',
            };
            if (opts.authRequired === false) {
                AJAX_OPTIONS.beforeSend = null;
            }
            $.ajax(AJAX_OPTIONS)
                .done(opts.onSuccess)
                .fail(function (jqXHR) {
                    submitButton.prop('disabled', false);
                    submitButton.attr('data-kt-indicator', 'off');
                    let errorMsg = getErrorMsg(jqXHR.responseJSON);
                    if (!errorMsg) {
                        errorMsg = statusCodeErrors[jqXHR.status];
                    }
                    toastr.error(errorMsg);
                });
        // }
    // });
};

const performUserLogout = function () {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = LOGIN_URL;
};

const setProfile = function(){
    let user = JSON.parse(localStorage.getItem("user"))
    if (!user){
    $.ajax({
        url: ONE_APP_BASE_URL + ONE_APP_APIS.userProfile,
        success: function (user) {
            user=user
            localStorage.setItem('user', JSON.stringify(user));
            $("#userfirstname").text(user.first_name)
        },
        error: function (jqXHR) {
            toastr.error(jqXHR.responseJSON);
        },
    });
    }else{
        $("#userfirstname").text(user.first_name)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('logoutBtn')) {
        document.getElementById('logoutBtn').onclick = performUserLogout;
    }
    toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: true,
        progressBar: false,
        positionClass: 'toastr-top-right',
        preventDuplicates: true,
        onclick: null,
        showDuration: '300',
        hideDuration: '1000',
        timeOut: '5000',
        extendedTimeOut: '1000',
        showEasing: 'swing',
        hideEasing: 'linear',
        showMethod: 'fadeIn',
        hideMethod: 'fadeOut',
    };
    let messages = sessionStorage.getItem('messages');
    if (messages) {
        sessionStorage.removeItem('messages');
        messages = JSON.parse(messages);
        messages.forEach(function (msg) {
            toastr[msg.type](msg.content);
        });
    }
})

let format = function (str, data) {
    return str.replace(/{([^{}]+)}/g, function (_, val) {
        let prop = data;
        val.split('.').forEach(function (key) {
            prop = prop[key];
        });

        return prop;
    });
};

String.prototype.format = function (data) {
    return format(this, data);
};
