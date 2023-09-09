//datatable
JDDatatable('https://run.mocky.io/v3/7f5a9c4c-4ccd-4921-afac-8ba87e5d4e5c', "states", "States");

// datatable column width
$.extend(true, $.fn.dataTable.defaults, {
    "autoWidth": false,
});

datatable_column_width = function column_width() {
    $('#states').find('th').eq(0).css('width', '90%');
}
//Dropdown filter
JDSelect2("https://run.mocky.io/v3/ad4a0ee7-20e9-49b4-a143-f5b2760ea512", "bottle_size", "Select Bottle Size");

//Brands Dropdown with logos
function formatBrand (brand) {
    console.log(brand);
    if (!brand.id) {
	return brand.text;
    }
    var $brand = $(
	'<span class="d-flex align-items-center "><span class="images img-wrapper border rounded "><img  class="img-fluid " src="' + brand.image + '" /> </span>' + brand.text + '</span>'
    );
    return $brand;
};
$(document).ready(function() {
    var selectData_brand = [];
    //filter by brand dropdown--------
    $.ajax({
	url: "https://run.mocky.io/v3/f65240f9-c04d-4202-8517-7a5790c31a9a"
    }).then(function (data) {
	$(data).each(function (i) {
	    data.sort((a, b) => a.text.localeCompare(b.text))
	    selectData_brand.push({ id: data[i].id, text: data[i].text,image: data[i].images });
	});
	$('#brands').select2({
	    placeholder: "Select Brand",
	    data: selectData_brand,
	    templateResult: formatBrand,
	    templateSelection: formatBrand
	});
    });
    //---------------------------
});
//------------------
