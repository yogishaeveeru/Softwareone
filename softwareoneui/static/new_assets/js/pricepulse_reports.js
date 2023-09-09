//datatable
//JDDatatable('https://run.mocky.io/v3/d3c0b52c-124c-4750-91df-392bbc4262b2', "PricePulseReportTable","Price Pulse Records");
//JDDatatable('https://run.mocky.io/v3/0da3f489-d4ff-4f15-9075-e847e6c4516d', "company-report","Price Pulse Company Repository Recods");
JDDatatable('https://run.mocky.io/v3/3e651376-572c-498b-b238-40ac71219e9f', "share-report","Price Pulse Users");

//datatable search
$('#search-filter').on('click', function(e) {
    $('#share-shelf-report').dataTable().fnDraw();
});

// datatable column width
$.extend(true, $.fn.dataTable.defaults, {
    "autoWidth": false,
});

datatable_column_width = function column_width() {
    $('#share-shelf-report').find('th').eq(0).css('width', '67%');
    $('#share-report').find('th').eq(0).css('width', '55%');
    $('#company-report').find('th').eq(0).css('width', '55%');
}

//modal dropdown
JDSelect2("https://run.mocky.io/v3/5a11826d-cac9-4a44-bfc4-507ec31bfea6", "share-field", "Share With a Colleague");

//msg box
function msg_box() {
    // const button = document.getElementById('generate_report');

    // button.addEventListener('click', e =>{
    // e.preventDefault();

    Swal.fire({
	html: `Report copy created successfully. Please reload the page.`,
	title: "Success",
	buttonsStyling: false,
	showCancelButton: false,
	confirmButtonText: "Ok",
	customClass: {
	    confirmButton: "btn btn-primary",
	}
    });
    // });
}
