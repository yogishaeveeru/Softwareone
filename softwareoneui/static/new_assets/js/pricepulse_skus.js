//datatable
JDDatatable('https://run.mocky.io/v3/4a4d1aa4-1c96-4b5c-b8ea-4d65f7324dff', "skutable", "Price Pulse SKUs");
$('#search-filter').on('click', function (e) {
    $('#skutable').dataTable().fnDraw();
});


//selected skus result
var elem = $("input:checkbox");
$(function(){
    $(".apply").click(function(){
	var selected = elem
	    .filter(':checked') //Filter only checked checkboxes
	    .map(function() {
		return $("label[for='" + this.id + "']").html();
	    })
	    .get(); //Get array

	var html = '<div class="result-content scroll-y mh-200px mh-lg-250px border rounded p-4 mt-2">' + selected.join('') + '</div>';

	$(".result").html(html);
	$(".result-content:empty").hide();
    });
    $("body").delegate(" .result .delete", "click", function(e){
	e.preventDefault();
	$(this).closest("span").parent().remove();
	$('.result-content').filter(function () {
	    return $(this).children().length < 1;
	}).remove();
	var value1 = $(this).closest("span").parent().attr("for");
	$("input:checkbox[id ='" + value1 + "']").prop("checked", false);
    });
});

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





