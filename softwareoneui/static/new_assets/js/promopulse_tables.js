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

JDDatatable('https://run.mocky.io/v3/9ff8a9c1-5c16-49e2-a52e-fb4cb00e81f7', "marketplaces", "");
JDDatatable('https://run.mocky.io/v3/c12f1cdc-54d0-49c8-9132-9a709a40b255', "brands", "");
JDDatatable('https://run.mocky.io/v3/7ba2e5dd-8030-4324-89e6-e147b9e387c1', "suppliers", "");

//Datatable
var datatable_column_width;
function JDDatatable(api, id, table_name) {
    getTableData(api, function (tblInfo) {
        table = $("#" + id + "").DataTable({
            "dom": "<'row'<'col-sm-12 col-md-12 'i>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'p>>",
            buttons: [],
            paging: true,
            serverSide: true,
            pageLength: 10,
            searching: false,
            responsive: true,
            // scrollX: true,
            // scrollY: "48vh",
            // "scrollCollapse": true,
            info:false,
            order: [
                [1, "asc"]
            ],
            "ordering": false,
            lengthMenu: [10, 15, 50, "All"],
            processing: true,
            language: {
                "infoFiltered": "",
                info: `Showing _START_ to _END_ of _TOTAL_ ${table_name}`,
                searchPlaceholder: "Type Report Name",
                search: "Search",
                paginate: {
                    next: '<i class="fas fa-chevron-right"></i>',
                    previous: '<i class="fas fa-chevron-left"></i>'
                },
                processing: '<div class="d-flex align-items-center justify-content-center"> <div class="loader">Loading...</div></div> '
            },
            ajax: function (data, callback, settings) {
                $.ajax({
                    url: api,
                    type: 'GET',
                    contentType: 'application/x-www-form-urlencoded',

                    data: {
                        "pagination[page]": 1, // pending
                        "pagination[pages]": data.start,
                        "pagination[perpage]": data.length,
                        "pagination[total]": "166",
                    },
                    success: function (data, textStatus, jQxhr) {
                        callback({
                            draw: data.draw,
                            data: data.data,
                            recordsTotal: data.recordsTotal,
                            recordsFiltered: data.recordsFiltered,
                        });
                        // console.log(132, data)
                      
                    },
                    error: function (jqXhr, textStatus, errorThrown) { }
                });
            },
            columns: tblInfo.colArr,
            "headerCallback": datatable_column_width,
            "columnDefs": tblInfo.colDefArr,
            "drawCallback": function () {
		toggleImage();
	    }
        });
    });
}

// get headers data from API and create colDefArr
function getTableData(apiUrl, callback) {
    $.getJSON(apiUrl, function (resp) {
        // console.log('d - ', data);
        var tblInfo = {};
        tblInfo.colDefArr = [];
        tblInfo.colArr = [];
        search = false;

        //custom header
        resp.header.forEach((element, index) => {
            if (element.image) {
                tblInfo.colDefArr.push({
                    title: `<span class="d-flex align-items-center flex-column text-center text-break lh-sm"><span class="thumb_bg img-wrapper rounded "><img src="${element.image}"alt="" class="img-fluid"></span>${element.name}</span>`,
                    targets: index
                });
            } else {
                tblInfo.colDefArr.push({
                    title: element.name,
                    targets: index
                });
            }
        });
        // get col keys
        for (const key in resp.data[0]) {
            tblInfo.colArr.push({
                data: key
            });
        }

        // console.log('d - ', colDefArr);
        callback(tblInfo);
    });
}
// ---------------  

