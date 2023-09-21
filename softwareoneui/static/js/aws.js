
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
        if (isEmpty) {
            toastr.error("Please fill in all fields.");
        } else {
                $.ajax({
                    data: data,
                    type: 'POST',
                    url:  S_ONE_APIS.customers,
                }).done(function (data) {
                    $("#regForm").trigger('reset');
                    toastr.success("Registered successfully")
                })
    }
    });
    
});