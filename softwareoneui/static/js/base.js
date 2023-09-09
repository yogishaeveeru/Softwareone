$.ajaxSetup({
    global: true,
    beforeSend: function (request) {
        request.setRequestHeader('Authorization', 'Bearer ' + getAccessToken());
    },
});
