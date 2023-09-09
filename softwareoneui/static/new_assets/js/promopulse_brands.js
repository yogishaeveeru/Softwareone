JDDatatable('https://run.mocky.io/v3/c12f1cdc-54d0-49c8-9132-9a709a40b255', "brands", "");
//https://run.mocky.io/v3/c12f1cdc-54d0-49c8-9132-9a709a40b255
//https://run.mocky.io/v3/aa75cbcc-9d1c-4c19-bfbd-8f4c270a19ef
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "marketplace_retailer", "Select Retailers/Marketplaces");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "supplier", "Select Suppliers");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "custom-grouping", "Select Custom Grouping");
JDSelect2("https://run.mocky.io/v3/aa9b9c45-a705-4c2c-9bc8-243f464d7d25", "category_brand_filter", "Select Categories")
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "supplier_brand_filter", "Select Suppliers");
JDSelect2("https://run.mocky.io/v3/aa9b9c45-a705-4c2c-9bc8-243f464d7d25", "category_supplier_filter", "Select Categories")
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "supplier_supplier_filter", "Select Suppliers");
//Brands Dropdown with logos
function formatBrand(brand) {
    console.log(brand);
    if (!brand.id) {
        return brand.text;
    }
    var $brand = $(
        '<span class="d-flex align-items-center "><span class="images img-wrapper border rounded "><img  class="img-fluid " src="' + brand.image + '" /> </span>' + brand.text + '</span>'
    );
    return $brand;
};

$(document).ready(function () {
    var selectData_brand = [];
    //filter by brand dropdown--------
    $.ajax({
        url: "https://run.mocky.io/v3/f65240f9-c04d-4202-8517-7a5790c31a9a"
    }).then(function (data) {
        $(data).each(function (i) {
            data.sort((a, b) => a.text.localeCompare(b.text))
            selectData_brand.push({ id: data[i].id, text: data[i].text, image: data[i].images });

        });

        $('#brand').select2({
            placeholder: "Select Brands",
            data: selectData_brand,
            templateResult: formatBrand,
            templateSelection: formatBrand
        });
        $('#brand_brand_filter').select2({
            placeholder: "Select Brands",
            data: selectData_brand,
            templateResult: formatBrand,
            templateSelection: formatBrand
        });
    });
    //---------------------------
});