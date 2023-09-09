//datatable
JDDatatable('https://run.mocky.io/v3/3d68a45c-bea4-4ec2-a59f-15d2c3587183', "beer_categories ", "Beer Categories ");
JDDatatable('https://run.mocky.io/v3/e8b2b83b-a322-40ea-bd0b-d2396d379dbb', "beer_sub_categories ", "Beer Sub Categories ");
JDDatatable('https://run.mocky.io/v3/cf8b5b17-2c3a-461e-af75-876f1527ca7f', "spirit_categories ", "Spirit Categories ");
JDDatatable('https://run.mocky.io/v3/e853cb42-f073-4b2a-bf55-30d99be7ab02', "spirit_sub_categories ", "Spirit Sub Categories ");
JDDatatable('https://run.mocky.io/v3/72e890cd-840d-4a63-8b62-21363732930c', "wine_categories ", "Wine Categories ");
JDDatatable('https://run.mocky.io/v3/0159a1da-74c3-48e6-9999-1bae0bc139e5', "wine_sub_categories ", "Wine Sub Categories ");

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