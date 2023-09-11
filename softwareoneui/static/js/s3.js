let customer;
let buckets_api;
let buttonName;
OneAppSelect2({
    api: ONE_APP_APIS.customers,
    elementSelector: '#customer',
    placeholder: 'Select a Customer',
    textField: "username"
});
$("#action-buttons").hide()
$("#create_bucket_div").hide()
$("#uplaod_file_div").hide()
$("#download_file_div").hide()
$("#customer").change(function() {
    customer = $(this).val();
    if(customer){
        $("#action-buttons").show()
    }else{
        $("#action-buttons").hide()
        $("#create_bucket_div").hide()
        $("#uplaod_file_div").hide()
        $("#download_file_div").hide()
        $(".b").css("color", "");
    } 
    buckets_api=ONE_APP_APIS.buckets.format({customer});

})
$(".b").click(function() {
    buttonName = $(this).attr("name");
    console.log("button",buttonName)
    $(".b").css("color", "");
    $(this).css("color", "blue");  
    $("#create_bucket_div").hide()
    $("#uplaod_file_div").hide()
    $("#download_file_div").hide() 
    $("#" + buttonName).show();
    if (buttonName=="uplaod_file_div"){
        OneAppSelect2({
            api: buckets_api,
            elementSelector: '#selectBucketUpload',
            placeholder: "Select a bucket",
        });
    }else if(buttonName=="download_file_div") {
            OneAppSelect2({
                api: buckets_api,
                elementSelector: '#selectBucketDownload',
                placeholder: "Select a bucket",
            });
            $("#selectBucketDownload").change(function() {
            $("#selectFile").empty()
            let selectedOption = $($(this).html()).last().text();
            let files_api= ONE_APP_APIS.bucket_files.format({customer}) + `?bucket_name=${selectedOption}`
            OneAppSelect2({
                api: files_api,
                elementSelector: "#selectFile",
                placeholder: "Select a file",
                textField:"file_name"
            });
        })
    }
});

$("#createBtn").click(function() {
    if($("#bcktname").val()){
        $.ajax({
            traditional:true,
            data:{"bucket_name":$("#bcktname").val()},
            url: ONE_APP_BASE_URL + ONE_APP_APIS.createBuckets.format({customer}),
        }).done(function (data) {
            console.log("data",data)
            toastr.success(data.detail)
        }).fail(function (data) {
            toastr.error(data.responseJSON.detail);
        })
    }
})
$("#uploadBtn").click(function() {
    let data = new FormData();
    data.append("bucket_name",$($("#selectBucketUpload").html()).last().text())
    data.append("file",$('input[type=file]')[0].files[0])
    data.append("path",$("#path").val())
    if($($("#selectBucketUpload").html()).last().text()&&$('input[type=file]')[0].files[0]){
        $.ajax({
            type:'POST',
            data:data,
            processData: false,
            contentType: false,
            url: ONE_APP_BASE_URL + ONE_APP_APIS.uploadFile.format({customer}),
        }).done(function (data) {
            toastr.success(data.detail)
        }).fail(function (data) {
            toastr.error(data.responseJSON.detail);
        })
    }else{
        toastr.error("Please select file and bucket")
    }
})

$("#downloadBtn").click(function() {
    let bucket= $($("#selectBucketDownload").html()).last().text()
    let key = $($("#selectFile").html()).last().text()
    if(bucket && key){
        $.ajax({
            data:{"bucket_name":bucket, "key":key},
            url: ONE_APP_BASE_URL + ONE_APP_APIS.getBucketFiles.format({customer}),
        }).done(function (data) {
            console.log("data",data)
            downloadUsingAnchorElement(data.url)
            toastr.success("Downloading file successfully.")
        }).fail(function (data) {
            toastr.error(data.responseJSON.detail);
        })
    }
})
