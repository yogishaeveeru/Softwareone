
setProfile()
OneAppSelect2({
    api: ONE_APP_APIS.customers,
    elementSelector: '#customer',
    placeholder: 'Select a Customer',
    textField: "username"
});
let buckts;
let files;
let customer;
$("#customer").change(function() {
    $("#dynamic-content").empty()
    $("#action_div").html("")
    customer = $(this).val();
    let buckets_api=ONE_APP_APIS.buckets.format({customer});
    let action_html = `<label for="module">Select an action:</label>
                <select class="form-select form-select-solid" data-control="select2" data-placeholder="Select Module"
                data-allow-clear="true" data-hide-search="true" id="action" name="action">
                    <option>Select an Action</option>
                    <option value="create">Create bucket</option>
                    <option value="download">Download file</option>
                    <option value="upload">Upload file</option>
                </select>`
    $("#action_div").html(action_html)
    $("#action").change(function() {
        let selectedOption = $(this).val();
        $("#dynamic-content").empty(); // Clear previous dynamic content
        
        if (selectedOption === "create") {
            $("#dynamic-content").append(`
                <div class="form-group">
                    <label for="bucketName">Enter bucket name:</label>
                    <input type="text" id="bucketName" name="bucketName" class="form-control">
                </div>
                <button id="createBucketBtn" class="btn btn-primary">Create Bucket</button>
            `);
        } else if (selectedOption === "upload") {
            $("#dynamic-content").append(`
                <div class="form-group">
                    <label for="selectBucketUpload">Select a bucket:</label>
                    <select id="selectBucketUpload" name="selectBucket" class="form-control"></select>
                </div>
                <div class="form-group">
                    <label for="file">Select a file:</label>
                    <input type="file" id="file" name="file" class="form-control-file">
                </div>
                <div class="form-group">
                    <label for="path">Enter path:</label>
                    <input type="text" id="path" name="path" class="form-control">
                </div>
                <button id="uploadBtn" class="btn btn-primary">Upload File</button>
            `);
    
            // Initialize Select2 for bucket select element with pagination
            OneAppSelect2({
                api: buckets_api,
                elementSelector: '#selectBucketUpload',
                placeholder: "Select a bucket",
            });
        } else if (selectedOption === "download") {
            $("#dynamic-content").append(`
                <div class="form-group">
                    <label for="selectBucketDownload">Select a bucket:</label>
                    <select id="selectBucketDownload" name="selectBucket" class="form-control"></select>
                </div>
            `);
    
            // Initialize Select2 for bucket and file select elements with pagination

            OneAppSelect2({
                api: buckets_api,
                elementSelector: '#selectBucketDownload',
                placeholder: "Select a bucket",
            });


        }
        $("#selectBucketDownload").change(function() {
            let selectedOption = $(this).text();
            $("#dynamic-content").append(`
            <div class="form-group" id="filediv">
                <label for="selectFile">Select a file:</label>
                <select id="selectFile" name="selectFile" class="form-control"></select>
            </div>
            <button id="downloadBtn" class="btn btn-primary">Download</button>
            `)
            let files_api= ONE_APP_APIS.bucket_files.format({customer}) + `?bucket_name=${selectedOption}`
            OneAppSelect2({
                api: files_api,
                elementSelector: "#selectFile",
                placeholder: "Select a file",
                textField:"file_name"
            });
        })
    });

})

