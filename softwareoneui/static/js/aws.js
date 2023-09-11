// $('#regBtn').on('click', function () {

// })

$(document).ready(function() {
    $("#regForm").submit(function(event) {
        event.preventDefault();
        let inputs = $(this).find("input");
        let isEmpty = false;
        let data = {}
        inputs.each(function() {
            if ($(this).val() === "") {
                isEmpty = true;
                return false; 
            }
            data[$(this).attr("name")]=$(this).val()
        });
        console.log("data",data)
        if (isEmpty) {
            toastr.error("Please fill in all fields.");
        } else {
                $.ajax({
                    data: data,
                    type: 'POST',
                    url: ONE_APP_BASE_URL + ONE_APP_APIS.customers,
                }).done(function (data) {
                    toastr.success("Registered successfully")
                })
    }
    });
    
});