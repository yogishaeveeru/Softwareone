//filter dropdowns----------------
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "marketplace_retailer", "Select Retailers/Marketplaces");
JDSelect2("https://run.mocky.io/v3/54c8476c-37b8-4d24-90f9-1a5879874093", "state", "Select States")

//SKU detail data---------------
const container = document.querySelector(".sku-detail");
const skudetaildata = async () => {
    const response = await fetch(`https://run.mocky.io/v3/87a27bc7-8c83-4e88-a6c1-7ea561af9cfd`);
    //console.log(response);
    const data = await response.json();
    // console.log(data[0]);
    data.map((curElm, index) => {
        const htmlData = `
        <div class="row fs-5">
        <div class="col-sm-12">
          <div class="d-flex align-items-center justify-content-between flex-wrap">
            <div class="main-heading border-none w-auto mb-3">
              <span class="d-flex align-items-start flex-column flex-sm-row ">
                <div class="img-wrapper rounded border me-4 mw-85px min-w-85px mh-85px min-h-85px mb-2 mb-sm-0" id="imgWrapper">
                  <img src="https://purepng.com/public/uploads/large/purepng.com-alcohol-bottlebottle-food-wine-object-alcohol-beverage-cocktail-liquor-whiskey-drunk-941524624582wlel2.png" alt="" class="img-fluid p-2" />
                </div>
                <div>
                  <h1 class="fw-bold p-0 my-2 my-sm-0 text-start" id="marketplaceNameContainer">Woodbridge By Robert Mondavi Cabernet Sauvignon (1.5L)</h1>
                  <div class="d-flex flex-wrap align-items-center mt-3">
                    <!--begin::Item-->
                    <div class="border-end-dashed border-1 border-gray-300 text-start pe-6 me-6 my-2">
                      <!--begin::Statistics-->
                      <div class="d-flex mb-1">
                        <span class="fs-2 fw-bolder text-gray-800 lh-1">750ml</span>
                      </div>
                      <!--end::Statistics-->
                      <!--begin::Description-->
                      <span class="fs-6 fw-bold text-gray-400">Unit Size</span>
                      <!--end::Description-->
                    </div>
                    <!--end::Item-->

                    <!--begin::Item-->
                    <div class="border-end-dashed border-1 border-gray-300 text-start pe-6 me-6 my-2">
                    <!--begin::Statistics-->
                    <div class="d-flex mb-1">
                      <span class="fs-2 fw-bolder text-gray-800 lh-1 ">Wild Turkey</span>
                    </div>
                    <!--end::Statistics-->
                    <!--begin::Description-->
                    <span class="fs-6 fw-bold text-gray-400">Brand</span>
                    <!--end::Description-->
                    </div>
                    <!--end::Item-->

                    <!--begin::Item-->
                    <div class="border-end-dashed border-1 border-gray-300 text-start pe-6 me-6 my-2">
                      <!--begin::Statistics-->
                      <div class="d-flex mb-1">
                        <div class="d-flex align-items-center ">
                        <span class="d-inline-flex cursor-help" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top" title="" data-bs-html="true" data-bs-content="Average Price of $45.49 on 5/25/23">
                          <span class="fs-5 fw-bold text-gray-400 me-1 mt-n1">$</span>
                          <span class="fs-2 fw-bolder text-gray-800 me-2 lh-1 ">45.49</span>
                          </span>
                          <span class="badge badge-success fs-8 py-1 lh-2 cursor-help" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top" title="" data-bs-html="true" data-bs-content="Average price increased by 1.5% from $44.82 on 1/1/2023 to $45.49 1/31/2023">
                            <span class="svg-icon svg-icon-6 svg-icon-white ms-n1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="black">
                                </rect>
                                <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="black"></path>
                              </svg>
                            </span>1.5%</span>
                        </div>
                      </div>
                      <!--end::Statistics-->
                      <!--begin::Description-->
                      <span class="fs-6 fw-bold text-gray-400">Current Median Price</span>
                      <!--end::Description-->
                    </div>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <div class="border-end-dashed border-1 border-gray-300 text-start text-start pe-6 me-6 my-2">
                    <!--begin::Statistics-->
                    <div class="d-flex mb-1">
                      <span class="fs-2 fw-bolder text-gray-800 lh-1">156</span>
                    </div>
                    <!--end::Statistics-->
                    <!--begin::Description-->
                    <span class="fs-6 fw-bold text-gray-400">In Stock</span>
                    <!--end::Description-->
                    </div>
                    <!--end::Item-->

                    <!--begin::Item-->
                    <div class="text-start my-2">
                    <!--begin::Statistics-->
                    <div class="d-flex mb-1">
                      <span class="fs-2 fw-bolder text-gray-800 lh-1">45</span>
                    </div>
                    <!--end::Statistics-->
                    <!--begin::Description-->
                    <span class="fs-6 fw-bold text-gray-400">Out of Stock</span>
                    <!--end::Description-->
                    </div>
                    <!--end::Item-->
                  </div>
                </div>
              </span>
            </div>
          </div>
      
          <div class="col-sm-12 mt-5 ">
            <!--begin::Chart-->
            <div class="mixed-widget-8-chart card-rounded-bottom w-100 min-h-auto position-relative"></div>
            </div>
            <!--end::Chart-->
          </div>
        </div>
      </div>`;
        container.insertAdjacentHTML('beforeend', htmlData);
        $('[data-bs-toggle="popover"]').popover();
        $('[data-bs-toggle="tooltip"]').tooltip();
    })
    //Static line chart
    var e = document.querySelectorAll(".mixed-widget-8-chart");
    [].slice.call(e).map((function (e) {
        var t = parseInt(KTUtil.css(e, "height"));
        if (e) {
            var  //color set for maximum 11 series
                gray_300 = KTUtil.getCssVariableValue("--bs-gray-300"),
                gray_500 = KTUtil.getCssVariableValue("--bs-gray-500"),
                blue = KTUtil.getCssVariableValue("--bs-blue"),
                green = KTUtil.getCssVariableValue('--bs-success'),
                red = KTUtil.getCssVariableValue('--bs-lighter-danger'),
                purple = KTUtil.getCssVariableValue('--bs-purple'),
                orange = KTUtil.getCssVariableValue('--bs-lighter-orange'),
                cyan = KTUtil.getCssVariableValue('--bs-cyan'),
                gray_600 = KTUtil.getCssVariableValue('--bs-gray-600'),
                blue_100 = KTUtil.getCssVariableValue('--bs-blue-100'),
                blue_900 = KTUtil.getCssVariableValue('--bs-blue-900'),
                yellow = KTUtil.getCssVariableValue('--bs-lighter-warning'),

                //lightest shades
                light_blue = KTUtil.getCssVariableValue("--bs-light-blue"),
                light_green = KTUtil.getCssVariableValue('--bs-light-success'),
                light_red = KTUtil.getCssVariableValue('--bs-light-danger'),
                light_purple = KTUtil.getCssVariableValue('--bs-lightest-purple'),
                light_orange = KTUtil.getCssVariableValue('--bs-lightest-orange'),
                light_cyan = KTUtil.getCssVariableValue('--bs-lightest-cyan'),
                light_gray_500 = KTUtil.getCssVariableValue('--bs-lightest-gray-500'),
                light_blue_100 = KTUtil.getCssVariableValue('--bs-lightest-blue-100'),
                light_gray_600 = KTUtil.getCssVariableValue('--bs-lightest-gray-600'),
                light_blue_900 = KTUtil.getCssVariableValue('--bs-lightest-blue-900'),
                light_yellow = KTUtil.getCssVariableValue('--bs-lightest-warning')

            const categories = ["2/1/23", "2/2/23", "2/3/23", "2/4/23", "2/5/23", "2/6/23", "2/7/23", "2/8/23", "2/9/23", "2/10/23", "2/11/23"]
            new ApexCharts(e, {
                series: [
                    {
                        name: "Bulleit Bourbon 750ml",
                        data: [30, 30, 85, 40, 40, 43, 53, 43, 41, 40, 68],
                    }
                ],
                chart: {
                    fontFamily: "inherit",
                    type: "area",
                    height: 250,
                    toolbar: {
                        show: false
                    },
                },
                plotOptions: {},
                legend: {
                    show: false,
                    showForSingleSeries: true,
                    markers: {
                        radius: 12,
                        fillColors: [green, blue, red, purple, gray_500, orange, cyan, blue_100, blue_900, gray_600, yellow],
                    },
                    height: 48,
                },
                dataLabels: {
                    enabled: false,
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        opacityFrom: .4,
                        opacityTo: 0,
                        stops: [20, 120, 120, 120]
                    }
                },
                stroke: {
                    curve: "smooth",
                    show: true,
                    width: 3,
                    colors: [green, blue, red, purple, gray_500, orange, cyan, blue_100, blue_900, gray_600, yellow],
                },
                xaxis: {
                    categories: categories,
                    //categories: ["2/1/23", "2/2/23", "2/3/23", "2/4/23", "2/5/23", "2/6/23", "2/7/23", "2/8/23", "2/9/23", "2/10/23", "2/11/23"],      
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    tickPlacement: 'on',
                    //tickAmount: 3,
                    labels: {
                        show: !0,
                        // rotate: 0,
                        //hideOverlappingLabels: false,
                        formatter: function (value) {
                            const firstIndex = 0;
                            const lastIndex = categories.length - 1;
                            const midIndex = Math.floor(categories.length / 2);

                            if (value === categories[firstIndex] || value === categories[lastIndex] || value === categories[midIndex]) {
                                return value;
                            }

                            return '';
                        },

                        style: {
                            colors: gray_500,
                            fontSize: "11px"
                        }
                    },
                    crosshairs: {
                        position: "front",
                        stroke: {
                            color: gray_500,
                            width: 1,
                            dashArray: 3
                        }
                    },
                    tooltip: {
                        enabled: true,
                        formatter: void 0,
                        offsetY: 0,
                        style: {
                            fontSize: "11px"
                        }
                    }
                },
                yaxis: {
                    tickAmount: 4,
                    min: 0,
                    max: 100,
                    title: {
                        text: '',
                        style: {
                            color: gray_500,
                            fontSize: "12px",
                            fontWeight: 400,
                        },
                    },
                    labels: {
                        style: {
                            colors: gray_500,
                            fontSize: "11px"
                        },
                        formatter: function (e) {
                            if (e !== null && e !== undefined) {
                                return '$' + e.toFixed(2);
                            }
                            return e;
                        },
                        offsetX: -10,
                    }
                },
                states: {
                    normal: {
                        filter: {
                            type: "none",
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: "none",
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: !1,
                        filter: {
                            type: "none",
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: "12px"
                    }
                },
                colors: [green, blue, red, purple, gray_500, orange, cyan, blue_100, blue_900, gray_600, yellow],
                grid: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    borderColor: gray_300,
                    strokeDashArray: 4,
                    yaxis: {
                        lines: {
                            show: true
                        }
                    }
                },
                markers: {
                    colors: [light_green, light_blue, light_red, light_purple, light_gray_500, light_orange, light_cyan, light_blue_100, light_blue_900, light_gray_600, light_yellow],
                    strokeColor: [green, blue, red, purple, gray_500, orange, cyan, blue_100, blue_900, gray_600, yellow],
                    strokeWidth: 3
                }
            }).render()
        }
    }))
}
skudetaildata();
//--------------------

JDDatatable('https://run.mocky.io/v3/ade779fe-33ad-44ab-bd9f-86425f90f27f', "listing", "Store Listings");
JDDatatable1('https://run.mocky.io/v3/435735ab-b2e3-4616-b4a6-493a24a95d1d', "marketplace_current", "Retailer & Marketplace");
JDDatatable1('https://run.mocky.io/v3/283452e0-fbdb-4fb4-8910-ec79970e2f99', "marketplace_average", "Retailer & Marketplace");

var datatable_column_width;
//Listings by Store Name Datatable
function JDDatatable(api, id, table_name) {
    getTableData(api, function (tblInfo) {
        table = $("#" + id + "").DataTable({
            "dom": "<'row'<'col-sm-12 col-md-12 'i>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'p>>",
            buttons: [],
            paging: true,
            serverSide: true,
            pageLength: 10,
            searching: false,
            responsive: false,
            scrollX: true,
            "autoWidth": false,
            info: false,
            order: [
                [1, "asc"]
            ],
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
                $('[data-bs-toggle="popover"]').popover();
                $('[data-bs-toggle="tooltip"]').tooltip();
                //colored cells 
                $(".colored__perc_td tbody tr td").each(function () {
                    var perc_value = $(this).find('.perc').text()
                    var percentage = $(this).find('.perc')
                    $(percentage).closest('td').css('background-color', 'rgba(68,158,221,' + perc_value + ')')
                });
                toggleImage();
            }
        });
    });
}

//Datatable with complex header
function JDDatatable1(api, id, table_name) {
    table = $("#" + id + "").DataTable({
        "dom": "<'row'<'col-sm-12 col-md-12 'B>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'p>>",
        buttons: [{
            extend: 'colvis',
            columns: ':gt(0)',
            text: 'Add SKUs',
            className: ['btn-light btn-active-primary fw-bolder btn-sm mb-3 '],
        }],
        paging: true,
        serverSide: true,
        pageLength: 10,
        searching: false,
        responsive: false,
        scrollX: true,
        scrollY: "45vh",
        "scrollCollapse": true,
        info: false,
        ordering: false,
        order: [
            [1, "asc"]
        ],
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
                    "pagination[page]": 1,
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

                    //colored cells 
                    $(".colored__perc_td tbody tr td").each(function () {
                        var perc_value = $(this).find('.perc').text()
                        var percentage = $(this).find('.perc')
                        $(percentage).closest('td').css('background-color', 'rgba(68,158,221,' + perc_value + ')')
                    });


                },
                error: function (jqXhr, textStatus, errorThrown) { }
            });
        },
        "columns": [
            { "data": "marketplace" },
            { "data": "100 Pipers Price" },
            { "data": "100 Pipers Availability" },
            { "data": "Bacardi Price" },
            { "data": "Bacardi Availability" },
            { "data": "Hennessy Price" },
            { "data": "Hennessy Availability" }
        ],
        "drawCallback": function () {
            $('[data-bs-toggle="popover"]').popover();
            $('[data-bs-toggle="tooltip"]').tooltip();

            if ($('#marketplace_current').height() <= $('#marketplace_current').closest('.dataTables_scrollBody').height()) {
                $('#marketplace_current').closest('.dataTables_wrapper').next().find('.view_all_row').hide()
            }
            $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
                if ($('#marketplace_average').height() <= $('#marketplace_average').closest('.dataTables_scrollBody').height()) {
                    $('#marketplace_average').closest('.dataTables_wrapper').next().find('.view_all_row').hide()
                }
            })
            toggleImage();
        }
    });
}
//

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

//Expand table vertically
$('.view_all_row').click(function () {
    $(this).parent().prev('.dataTables_wrapper').find('.dataTables_scrollBody').toggleClass('expand')
    if ($(".dataTables_scrollBody").hasClass("expand")) {
        $(this).html(`<span class="svg-icon svg-icon-muted svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="black"/>
        <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="black"/>
        </svg></span>`)
    } else {
        $(this).html(`<span class="svg-icon svg-icon-muted svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="black"/>
        <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="black"/>
        </svg></span>`)
    }
})

//Retailer Marketplace and Availability Map Sub heading date
if ($('.today-price').hasClass('active')) {
    $('.price-sub-heading').text('on 5/25/23')
}
if ($('.today-availability').hasClass('active')) {
    $('.availability-sub-heading').text('on 5/25/23')
}

//Switch tabs
$('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    //align table header in tabs
    $($.fn.dataTable.tables(true)).DataTable().columns.adjust()

    //Retailer Marketplace Sub heading date
    if ($('.today-price').hasClass('active')) {
        $('.price-sub-heading').text('on 5/25/23')
    }
    if ($('.today-availability').hasClass('active')) {
        $('.availability-sub-heading').text('on 5/25/23')
    }
    if ($('.historical-price').hasClass('active')) {
        $('.price-sub-heading').text('from 5/1/23-5/25/23')
    }
    if ($('.historical-availability ').hasClass('active')) {
        $('.availability-sub-heading').text('from 5/1/23-5/25/23')
    }
});


//Average Price map Start
var myPlot = document.getElementById('average_price_map')
var legendText = document.getElementById('min-price');
var counter = 0;
data = [{
    type: "scattermapbox",
    mode: 'markers',
    text: [
        {
            "name": "ABC Fine Wine & Spirits - Lakewood Ranch",
            "address": "Billings Logan Intl,Billings,MT,USA",
            "price": "$23",
            "change_price": "<span class='text-danger'>-$0.40</span>",
            "action": "#"
        },
        {
            "name": "Walmart - Wesley Chapel Supercenter (Walmart Supercenter No. 3418)",
            "address": "Tunica Municipal Airport,Tunica,MS,USA",
            "price": "$32",
            "change_price": "<span class='text-success'>+$1.03</span>",
            "action": "#"
        },
        {
            "name": "ABC Fine Wine & Spirits - Northlake Blvd",
            "address": "George Bush Intercontinental,Houston,TX,USA",
            "price": "$37",
            "change_price": "<span class='text-danger'>-$1.00</span>",
            "action": "#"
        },
        {
            "name": "Walmart - Zephyrhills Supercenter (Walmart Supercenter No. 706)",
            "address": "Rochester International,Rochester,MN,USA",
            "price": "$48",
            "change_price": "<span class='text-danger'>-$0.05</span>",
            "action": "#"
        },
        {
            "name": "Walmart - Pensacola Neighborhood Market",
            "address": "Dubuque Municipal,Dubuque,IA,USA",
            "price": "$410",
            "change_price": "<span class='text-success'>+$1.40</span>",
            "action": "#"
        },
        {
            "name": "Billings Logan",
            "address": "Chippewa Valley Regional,Eau Claire,WI,USA",
            "price": "$79",
            "change_price": "<span class='text-danger'>-$0.30</span>",
            "action": "#"
        },
        {
            "name": "BevMo! - Burlingame",
            "address": "Fayetteville Municipal,Fayetteville,NC,USA",
            "price": "$39",
            "change_price": "<span class='text-success'>+$2.10</span>",
            "action": "#"
        },
        {
            "name": "BevMo! - Canoga Park",
            "address": "Sheppard AFB/Wichita Falls Municipal,Wichita Falls,TX,USA",
            "price": "$34",
            "change_price": "<span class='text-danger'>-$1.40</span>",
            "action": "#"
        },
        {
            "name": "Binnys - Chicago - South Loop",
            "address": "St. Petersburg-Clearwater International",
            "price": "$63",
            "change_price": "<span class='text-danger'>-$0.22</span>",
            "action": "#"
        },
        {
            "name": "Drizly - ABC Fine Wine & Spirits - Black Lake Road",
            "address": "Drizly - 1 West Dupont Circle Wines & Liquors",
            "price": "$74",
            "change_price": "<span class='text-success'>+$0.11</span>",
            "action": "#"
        },
        {
            "name": "Drizly - ABC Fine Wine & Spirits - Oakland Park South",
            "address": "Outagamie County Regional,Appleton,WI,USA",
            "price": "$55",
            "change_price": "<span class='text-danger'>-$0.32</span>",
            "action": "#"
        },
        {
            "name": "Meijer - Benton Harbor",
            "address": "Chicago OHare International,Chicago,IL,USA",
            "price": "$75",
            "change_price": "<span class='text-danger'>-$0.40</span>",
            "action": "#"
        },
        {
            "name": "Meijer - Chesterfield Twp",
            "address": "William B Hartsfield-Atlanta Intl,Atlanta,GA,USA",
            "price": "$29",
            "change_price": "<span class='text-success'>+$3.40</span>",
            "action": "#"
        },
        {
            "name": "Meijer - Flat Rock",
            "address": "Dallas-Fort Worth International,Dallas-Fort Worth,TX,USA",
            "price": "$36",
            "change_price": "<span class='text-danger'>-$0.40</span>",
            "action": "#"
        },
        {
            "name": "Spec's - Plano – Park Boulevard",
            "address": "Phoenix Sky Harbor International,Phoenix,AZ,USA",
            "price": "$96",
            "change_price": "<span class='text-danger'>-$0.40</span>",
            "action": "#"
        }, {
            "name": "Total Wine & More - Tukwila (South Side)",
            "address": "Denver Intl,Denver,CO,USA",
            "price": "$34",
            "change_price": "<span class='text-danger'>-$0.40</span>",
            "action": "#"
        },
    ],
    lon: [
        -108.5428611, -90.348816, -92.49798722, -90.70916722, -91.48507194, -78.88, -98.49189333, -82.68743944, -92.548828, -88.51947556, -87.90446417, -84.42694444, -97.0372, -112.0080556, -104.6670019, -95.33972222
    ],
    lat: [
        45.8076625, 34.681499, 43.90882639, 42.40295944, 44.86525722, 34.99147222, 33.98879611, 27.91076333, 36.385913, 44.25740806, 41.979595, 33.64044444, 32.89595056, 33.43416667, 39.85840806, 29.98047222
    ],
    marker: {
        size: 9,
        colorscale: [
            [0, 'rgb(144, 238, 144)'], // Light Green for lowest values
            [0.5, 'rgb(34, 139, 34)'], // Dark Green for mid-low values
            [0.75, 'rgb(255, 99, 71)'], // Light Red for mid-high values
            [1, 'rgb(139, 0, 0)'], // Dark Red for highest values
        ],
        cmin: 0,
        color: [25.99, 32, 37, 48.99, 57, 60, 71.99, 56, 36, 49, 44, 30, 40, 62, 61, 38],
        colorbar: {
            title: '',
            tickprefix: '$',
            thickness: 10,
            outlinecolor: 'rgba(68,68,68,0)',
        },
    },
    price: [25.99, 32, 37, 48.99, 57, 60, 71.99, 56, 36, 49, 44, 30, 40, 62, 61, 38],
    hoverinfo: 'none',
}];
var prices = data[0].price
var minPrice = Math.min(...prices);
var maxPrice = Math.max(...prices);
var medianPrice = prices.sort()[Math.floor(prices.length / 2)];

layout = {
    mapbox: {
        style: 'light',
        zoom: 3.3,
        center: { lat: 39.5, lon: -98.35 },
    },
    margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0,
    },
    showlegend: false,
    clickmode: 'event',
};
config = {
    mapboxAccessToken: "pk.eyJ1IjoibWVldGRheGluaSIsImEiOiJjbGsyb2JrbXAwcW8yM2RwMTk0Y2E1cnp3In0.yheSLZvklANUcLwmYKJckA",
    displayModeBar: false,
};
// Define the custom legend HTML
var legendHTML =
    `<ul class="custom-legend position-absolute top-0 fs-8 fw-bolder text-gray-700  list-inline m-0">
        <li id="min-price"><span class="marker min"></span>Lowest Price: $${minPrice}</li>
        <li class="median-price"><span class="marker median"></span>Median Price: $${medianPrice}</li>
        <li class="max-price"><span class="marker max"></span>Highest Price: $${maxPrice}</li>
</ul>`;

// Add the custom legend to the plot container
document.getElementById("average_price_map").innerHTML = legendHTML;
$('.custom-legend li').click(function () {
    alert($(this).text())
})

Plotly.newPlot("average_price_map", data, layout, config);

//show popup on click of dots
myPlot.on('plotly_click', function (data) {
    for (var i = 0; i < data.points.length; i++) {
        pts_name = data.points[i].text.name;
        pts_address = data.points[i].text.address;
        pts_price = data.points[i].text.price;
        pts_price_change = data.points[i].text.change_price;
        pts_action = data.points[i].text.action;
    }
    let popoverHTML = `<div class="popover bs-popover-bottom" role="tooltip " data-popper-placement="bottom" id="pop">
        <div class="popover-arrow" style="position: absolute; left: 0px; transform: translate(131px, 0px);"></div>
        <span class="popover-dismiss btn btn-icon"></span>
        <h3 class="popover-header fw-bold fs-5 border-0 pb-0">${pts_name}</h3>
        <div class="popover-body pt-3">
          <p class="text-muted mb-3">${pts_address}</p>
          <div class="d-flex align-items-center fw-bold fs-5 mb-3"><span class="me-1">${pts_price}</span><span>${pts_price_change}</span></div>
          <a href="${pts_action}" target="_blank" class="fs-7 text-uppercase lsn-2  text-primary d-flex align-items-center"><span class="me-1">View Listing</span>    <span class="svg-icon svg-icon-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path opacity="0.3" d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z" fill="black" />
              <rect x="21.9497" y="3.46448" width="13" height="2" rx="1" transform="rotate(135 21.9497 3.46448)" fill="black" />
              <path d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z" fill="black" />
          </svg>
      </span></a>
        </div>
        </div>
        `;

    let popover = $(popoverHTML);
    if (counter >= 0) {
        $('.popover:last').remove();
    }
    $(myPlot).append(popover);

    $(popover).css({
        top: data.event.offsetY + 10,
        left: data.event.offsetX - 136
    })
    $('.popover-dismiss').click(function () {
        $(popover).remove();
    })
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.popover').length) {
            popover.remove();
        }
    })
    $('.popover:last').show();
    counter++;
});

//change cursor to pointer on hover of dots
myPlot.on('plotly_hover', function (data) {
    myPlot.style.cursor = 'pointer';
});
myPlot.on('plotly_unhover', function (data) {
    myPlot.style.cursor = '';
})
//Average Price map End================

//Today availability map Start================
var myPlot_today_availability = document.getElementById('avalability_map_today')
// var green = KTUtil.getCssVariableValue('--bs-success')
// var red = KTUtil.getCssVariableValue('--bs-danger')
const base_Color = 'rgb(68, 158, 221)'; // Replace with your desired color
const min_Opacity = 0.1; // Replace with your desired minimum opacity
const max_Opacity = 1; // Replace with your desired maximum opacity
const color_scale = [];
for (let i = 0; i <= 10; i++) {
    const opacity = min_Opacity + (max_Opacity - min_Opacity) * (i / 10);
    const color = `rgba${base_Color.substring(3, base_Color.length - 1)}, ${opacity})`;
    color_scale.push([i / 10, color]);
}

var counter = 0;
data_today_availability = [{
    type: "scattermapbox",
    mode: 'markers',
    text: [
        {
            "name": "ABC Fine Wine & Spirits - Lakewood Ranch",
            "address": "Billings Logan Intl,Billings,MT,USA",
            "in_stock_perc": "93.05",
            "action": "#"
        },
        {
            "name": "Walmart - Wesley Chapel Supercenter (Walmart Supercenter No. 3418)",
            "address": "Tunica Municipal Airport,Tunica,MS,USA",
            "in_stock_perc": "32.00",
            "action": "#"
        },
        {
            "name": "ABC Fine Wine & Spirits - Northlake Blvd",
            "address": "George Bush Intercontinental,Houston,TX,USA",
            "in_stock_perc": "77.32",
            "action": "#"
        },
        {
            "name": "Walmart - Zephyrhills Supercenter (Walmart Supercenter No. 706)",
            "address": "Rochester International,Rochester,MN,USA",
            "in_stock_perc": "48.87",
            "action": "#"
        },
        {
            "name": "Walmart - Pensacola Neighborhood Market",
            "address": "Dubuque Municipal,Dubuque,IA,USA",
            "in_stock_perc": "10.00",
            "action": "#"
        },
        {
            "name": "Billings Logan",
            "address": "Chippewa Valley Regional,Eau Claire,WI,USA",
            "in_stock_perc": "50.31",
            "action": "#"
        },
        {
            "name": "BevMo! - Burlingame",
            "address": "Fayetteville Municipal,Fayetteville,NC,USA",
            "in_stock_perc": "70.00",
            "action": "#"
        },
        {
            "name": "BevMo! - Canoga Park",
            "address": "Sheppard AFB/Wichita Falls Municipal,Wichita Falls,TX,USA",
            "in_stock_perc": "80.73",
            "action": "#"
        },
        {
            "name": "Binnys - Chicago - South Loop",
            "address": "St. Petersburg-Clearwater International",
            "in_stock_perc": "2.00",
            "action": "#"
        },
        {
            "name": "Drizly - ABC Fine Wine & Spirits - Black Lake Road",
            "address": "Drizly - 1 West Dupont Circle Wines & Liquors",
            "in_stock_perc": "10.11",
            "action": "#"
        },
        {
            "name": "Drizly - ABC Fine Wine & Spirits - Oakland Park South",
            "address": "Outagamie County Regional,Appleton,WI,USA",
            "in_stock_perc": "64.23",
            "action": "#"
        },
        {
            "name": "Meijer - Benton Harbor",
            "address": "Chicago OHare International,Chicago,IL,USA",
            "in_stock_perc": "9.22",
            "action": "#"
        },
        {
            "name": "Meijer - Chesterfield Twp",
            "address": "William B Hartsfield-Atlanta Intl,Atlanta,GA,USA",
            "in_stock_perc": "45.22",
            "action": "#"
        },
        {
            "name": "Meijer - Flat Rock",
            "address": "Dallas-Fort Worth International,Dallas-Fort Worth,TX,USA",
            "in_stock_perc": "20.00",
            "action": "#"
        },
        {
            "name": "Spec's - Plano – Park Boulevard",
            "address": "Phoenix Sky Harbor International,Phoenix,AZ,USA",
            "in_stock_perc": "95.20",
            "action": "#"
        }, {
            "name": "Total Wine & More - Tukwila (South Side)",
            "address": "Denver Intl,Denver,CO,USA",
            "in_stock_perc": "50.43",
            "action": "#"
        },
    ],
    lon: [
        -108.5428611, -90.348816, -92.49798722, -90.70916722, -91.48507194, -78.88, -98.49189333, -82.68743944, -92.548828, -88.51947556, -87.90446417, -84.42694444, -97.0372, -112.0080556, -104.6670019, -95.33972222
    ],
    lat: [
        45.8076625, 34.681499, 43.90882639, 42.40295944, 44.86525722, 34.99147222, 33.98879611, 27.91076333, 36.385913, 44.25740806, 41.979595, 33.64044444, 32.89595056, 33.43416667, 39.85840806, 29.98047222
    ],
    // marker: {
    //     size: 9,
    //     showscale: false,
    //     colorscale: [
    //         [0, green], // Green for In Stock values
    //         [1, red], // Red for Unavailable values
    //     ],
    //     cmin: 0,
    //     color: [0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
    //     colorbar: {
    //         title: '',
    //         tickprefix: '$',
    //         thickness: 10,
    //         outlinecolor: 'rgba(68,68,68,0)',
    //     },
    // },
    marker: {
        size: 9,
        colorscale: color_scale,
        cmin: 0,
        color: ['93.05', '32.00', '77.32', '48.87', '10.00', '50.31', '70.00', '80.73', '2.00', '10.11', '64.23', '9.22', '45.22', '20.00', '95.20', '50.43'],
        colorbar: {
            title: '',
            ticksuffix: '%',
            thickness: 10,
            outlinecolor: 'rgba(68,68,68,0)',
        },
    },
    hoverinfo: 'none',
}];
layout_today_availability = {
    mapbox: {
        style: 'light',
        zoom: 3.3,
        center: { lat: 39.5, lon: -98.35 },
    },
    margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0,
    },
    showlegend: false,
    clickmode: 'event',
};
config = {
    mapboxAccessToken: "pk.eyJ1IjoibWVldGRheGluaSIsImEiOiJjbGsyb2JrbXAwcW8yM2RwMTk0Y2E1cnp3In0.yheSLZvklANUcLwmYKJckA",
    displayModeBar: false,
};
// Define the custom legend HTML
// var legendHTML =
//     `<ul class="color-list list-inline d-flex align-items-center justify-content-center mt-6 mb-0">
//     <li class="d-flex align-items-center me-3"><span class="bg-success rounded-circle  marker me-1 w-10px h-10px "></span>Available & In Stock
//     </li>
//     <li class="d-flex align-items-center"><span class="bg-danger rounded-circle marker me-1 w-10px h-10px "></span>Unavailable</li>
// </ul>`;

// Add the custom legend to the plot container
// document.getElementById("avalability_map_today").innerHTML = legendHTML;
Plotly.newPlot(myPlot_today_availability, data_today_availability, layout_today_availability, config);

//change cursor to pointer on hover of dots
myPlot_today_availability.on('plotly_hover', function (data) {
    myPlot_today_availability.style.cursor = 'pointer';
});
myPlot_today_availability.on('plotly_unhover', function (data) {
    myPlot_today_availability.style.cursor = '';
})
//Today availability map End================


//Historical availability map Start================
// Define the base color and opacity
var myPlot_historical_availability = document.getElementById('avalability_map_historical')
const baseColor = 'rgb(68, 158, 221)'; // Replace with your desired color
const minOpacity = 0.1; // Replace with your desired minimum opacity
const maxOpacity = 1; // Replace with your desired maximum opacity
const colorscale = [];
for (let i = 0; i <= 10; i++) {
    const opacity = minOpacity + (maxOpacity - minOpacity) * (i / 10);
    const color = `rgba${baseColor.substring(3, baseColor.length - 1)}, ${opacity})`;
    colorscale.push([i / 10, color]);
}

data_historical_availability = [{
    type: "scattermapbox",
    mode: 'markers',
    text: [
        {
            "name": "ABC Fine Wine & Spirits - Lakewood Ranch",
            "address": "Billings Logan Intl,Billings,MT,USA",
            "in_stock_perc": "93.05",
            "action": "#"
        },
        {
            "name": "Walmart - Wesley Chapel Supercenter (Walmart Supercenter No. 3418)",
            "address": "Tunica Municipal Airport,Tunica,MS,USA",
            "in_stock_perc": "32.00",
            "action": "#"
        },
        {
            "name": "ABC Fine Wine & Spirits - Northlake Blvd",
            "address": "George Bush Intercontinental,Houston,TX,USA",
            "in_stock_perc": "77.32",
            "action": "#"
        },
        {
            "name": "Walmart - Zephyrhills Supercenter (Walmart Supercenter No. 706)",
            "address": "Rochester International,Rochester,MN,USA",
            "in_stock_perc": "48.87",
            "action": "#"
        },
        {
            "name": "Walmart - Pensacola Neighborhood Market",
            "address": "Dubuque Municipal,Dubuque,IA,USA",
            "in_stock_perc": "10.00",
            "action": "#"
        },
        {
            "name": "Billings Logan",
            "address": "Chippewa Valley Regional,Eau Claire,WI,USA",
            "in_stock_perc": "50.31",
            "action": "#"
        },
        {
            "name": "BevMo! - Burlingame",
            "address": "Fayetteville Municipal,Fayetteville,NC,USA",
            "in_stock_perc": "70.00",
            "action": "#"
        },
        {
            "name": "BevMo! - Canoga Park",
            "address": "Sheppard AFB/Wichita Falls Municipal,Wichita Falls,TX,USA",
            "in_stock_perc": "80.73",
            "action": "#"
        },
        {
            "name": "Binnys - Chicago - South Loop",
            "address": "St. Petersburg-Clearwater International",
            "in_stock_perc": "2.00",
            "action": "#"
        },
        {
            "name": "Drizly - ABC Fine Wine & Spirits - Black Lake Road",
            "address": "Drizly - 1 West Dupont Circle Wines & Liquors",
            "in_stock_perc": "10.11",
            "action": "#"
        },
        {
            "name": "Drizly - ABC Fine Wine & Spirits - Oakland Park South",
            "address": "Outagamie County Regional,Appleton,WI,USA",
            "in_stock_perc": "64.23",
            "action": "#"
        },
        {
            "name": "Meijer - Benton Harbor",
            "address": "Chicago OHare International,Chicago,IL,USA",
            "in_stock_perc": "9.22",
            "action": "#"
        },
        {
            "name": "Meijer - Chesterfield Twp",
            "address": "William B Hartsfield-Atlanta Intl,Atlanta,GA,USA",
            "in_stock_perc": "45.22",
            "action": "#"
        },
        {
            "name": "Meijer - Flat Rock",
            "address": "Dallas-Fort Worth International,Dallas-Fort Worth,TX,USA",
            "in_stock_perc": "20.00",
            "action": "#"
        },
        {
            "name": "Spec's - Plano – Park Boulevard",
            "address": "Phoenix Sky Harbor International,Phoenix,AZ,USA",
            "in_stock_perc": "95.20",
            "action": "#"
        }, {
            "name": "Total Wine & More - Tukwila (South Side)",
            "address": "Denver Intl,Denver,CO,USA",
            "in_stock_perc": "50.43",
            "action": "#"
        },
    ],
    lon: [
        -108.5428611, -90.348816, -92.49798722, -90.70916722, -91.48507194, -78.88, -98.49189333, -82.68743944, -92.548828, -88.51947556, -87.90446417, -84.42694444, -97.0372, -112.0080556, -104.6670019, -95.33972222
    ],
    lat: [
        45.8076625, 34.681499, 43.90882639, 42.40295944, 44.86525722, 34.99147222, 33.98879611, 27.91076333, 36.385913, 44.25740806, 41.979595, 33.64044444, 32.89595056, 33.43416667, 39.85840806, 29.98047222
    ],
    marker: {
        size: 9,
        colorscale: colorscale,
        cmin: 0,
        color: ['93.05', '32.00', '77.32', '48.87', '10.00', '50.31', '70.00', '80.73', '2.00', '10.11', '64.23', '9.22', '45.22', '20.00', '95.20', '50.43'],
        colorbar: {
            title: '',
            ticksuffix: '%',
            thickness: 10,
            outlinecolor: 'rgba(68,68,68,0)',
        },
    },
    hoverinfo: 'none',
    // marker: {
    //     size: 9,
    //     opacity: 1,
    //     reversescale: false,
    //     autocolorscale: false,
    //     symbol: 'circle',
    //     line: {
    //         width: 0,
    //         color: 'rgb(102,102,102)'
    //     },
    //     colorscale: colorscale,
    //     cmin: 0,
    //     color: ['93.05', '32.00', '77.32', '48.87', '10.00', '50.31', '70.00', '80.73', '2.00', '10.11', '64.23', '9.22', '45.22', '20.00', '95.20', '50.43'],
    //     colorbar: {
    //         title: '',
    //         thickness: 10,
    //         ticksuffix: "%",
    //         tickvals: [0, 20, 40, 60, 80, 100],
    //         outlinecolor: 'rgba(68,68,68,0)',
    //     }
    // },
}];
layout_historical_availability = {
    mapbox: {
        style: 'light',
        zoom: 3.3,
        center: { lat: 39.5, lon: -98.35 },
    },
    margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0,
    },
    showlegend: false,
    clickmode: 'event',
};
config = {
    mapboxAccessToken: "pk.eyJ1IjoibWVldGRheGluaSIsImEiOiJjbGsyb2JrbXAwcW8yM2RwMTk0Y2E1cnp3In0.yheSLZvklANUcLwmYKJckA",
    displayModeBar: false,
};
Plotly.newPlot(myPlot_historical_availability, data_historical_availability, layout_historical_availability, config);
$('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    //recreating geo map on switch of tab
    Plotly.newPlot(myPlot_today_availability, data_today_availability, layout_today_availability, config);
    Plotly.newPlot(myPlot_historical_availability, data_historical_availability, layout_historical_availability, config);

    //show popup on click of dots on switch of tab
    myPlot_today_availability.on('plotly_click', function (data) {
        for (var i = 0; i < data.points.length; i++) {
            pts_name = data.points[i].text.name;
            pts_address = data.points[i].text.address;
            pts_in_stock_perc = data.points[i].text.in_stock_perc;
            pts_action = data.points[i].text.action;
        }
        let popoverHTML = `<div class="popover bs-popover-bottom" role="tooltip " data-popper-placement="bottom" id="pop">
            <div class="popover-arrow" style="position: absolute; left: 0px; transform: translate(131px, 0px);"></div>
            <span class="popover-dismiss btn btn-icon"></span>
            <h3 class="popover-header fw-bold fs-5 border-0 pb-0">${pts_name}</h3>
            <div class="popover-body pt-3">
              <p class="text-muted mb-3">${pts_address}</p>
              <div class="d-flex align-items-center fw-bold fs-5 mb-3"><span class="me-1">In Stock</span><span class="text-blue me-1">${pts_in_stock_perc}%</span></div>
              <a href="${pts_action}" target="_blank" class="fs-7 text-uppercase lsn-2  text-primary d-flex align-items-center"><span class="me-1">View Listing</span>    <span class="svg-icon svg-icon-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path opacity="0.3" d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z" fill="black" />
                  <rect x="21.9497" y="3.46448" width="13" height="2" rx="1" transform="rotate(135 21.9497 3.46448)" fill="black" />
                  <path d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z" fill="black" />
              </svg>
          </span></a>
            </div>
            </div>
            `;

        let popover = $(popoverHTML);
        if (counter >= 0) {
            $('.popover:last').remove();
        }
        $(myPlot_today_availability).append(popover);


        $(popover).css({
            top: data.event.offsetY + 10,
            left: data.event.offsetX - 136
        })
        $('.popover-dismiss').click(function () {
            $(popover).remove();
        })
        $(document).on('click', function (event) {
            if (!$(event.target).closest('.popover').length) {
                popover.remove();
            }
        })
        //$('#avalability_map_today .popover:not(:last)').remove();
        $('.popover:last').show();
    });
    myPlot_historical_availability.on('plotly_click', function (data) {
        for (var i = 0; i < data.points.length; i++) {
            pts_name = data.points[i].text.name;
            pts_address = data.points[i].text.address;
            pts_in_stock_perc = data.points[i].text.in_stock_perc;
            pts_action = data.points[i].text.action;
        }
        let popoverHTML = `<div class="popover bs-popover-bottom" role="tooltip " data-popper-placement="bottom" id="pop">
            <div class="popover-arrow" style="position: absolute; left: 0px; transform: translate(131px, 0px);"></div>
            <span class="popover-dismiss btn btn-icon"></span>
            <h3 class="popover-header fw-bold fs-5 border-0 pb-0">${pts_name}</h3>
            <div class="popover-body pt-3">
              <p class="text-muted mb-3">${pts_address}</p>
              <div class="d-flex align-items-center fw-bold fs-5 mb-3"><span class="me-1">In Stock</span><span class="text-blue me-1">${pts_in_stock_perc}%</span> of the time</div>
              <a href="${pts_action}" target="_blank" class="fs-7 text-uppercase lsn-2  text-primary d-flex align-items-center"><span class="me-1">View Listing</span>    <span class="svg-icon svg-icon-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path opacity="0.3" d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z" fill="black" />
              <rect x="21.9497" y="3.46448" width="13" height="2" rx="1" transform="rotate(135 21.9497 3.46448)" fill="black" />
              <path d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z" fill="black" />
          </svg>
      </span></a>
            </div>
            </div>
            `;

        let popover = $(popoverHTML);
        if (counter >= 0) {
            $('.popover:last').remove();
        }
        $(myPlot_historical_availability).append(popover);


        $(popover).css({
            top: data.event.offsetY + 10,
            left: data.event.offsetX - 136
        })
        $('.popover-dismiss').click(function () {
            $(popover).remove();
        })
        $(document).on('click', function (event) {
            if (!$(event.target).closest('.popover').length) {
                popover.remove();
            }
        })
        //$('#avalability_map_today .popover:not(:last)').remove();
        $('.popover:last').show();
    });

    //change cursor to pointer on hover of dots
    //today Availibility
    myPlot_today_availability.on('plotly_hover', function (data) {
        myPlot_today_availability.style.cursor = 'pointer';
    });
    myPlot_today_availability.on('plotly_unhover', function (data) {
        myPlot_today_availability.style.cursor = '';
    })
    //historical Availibility
    myPlot_historical_availability.on('plotly_hover', function (data) {
        myPlot_historical_availability.style.cursor = 'pointer';
    });
    myPlot_historical_availability.on('plotly_unhover', function (data) {
        myPlot_historical_availability.style.cursor = '';
    })
})

//Historical availability map End================

//Hide All Heat Maps by default
// $('.heat-map').hide();

//switch to Geo/Heat map view
// $('.heat-map-view').click(function () {
//     $('.heat-map').show();
//     $('.geo-map').hide();
// })
// $('.geo-map-view').click(function () {
//     $('.heat-map').hide();
//     $('.geo-map').show();
//     //recreating geo map on switch of view to geo map
//     Plotly.newPlot(myPlot_today_availability, data_today_availability, layout_today_availability, config);
//     Plotly.newPlot(myPlot_historical_availability, data_historical_availability, layout_historical_availability, config);
//     //show popup on click of dots on switch of view to geo map
//     myPlot_today_availability.on('plotly_click', function (data) {
//         for (var i = 0; i < data.points.length; i++) {
//             pts_name = data.points[i].text.name;
//             pts_address = data.points[i].text.address;
//             pts_availability = data.points[i].text.availability;
//             pts_action = data.points[i].text.action;
//         }
//         let popoverHTML = `<div class="popover bs-popover-bottom" role="tooltip " data-popper-placement="bottom" id="pop">
//                 <div class="popover-arrow" style="position: absolute; left: 0px; transform: translate(131px, 0px);"></div>
//                 <span class="popover-dismiss btn btn-icon"></span>
//                 <h3 class="popover-header fw-bold fs-5 border-0 pb-0">${pts_name}</h3>
//                 <div class="popover-body pt-3">
//                   <p class="text-muted mb-3">${pts_address}</p>
//                   <div class="d-flex align-items-center fw-bold fs-5 mb-3"><span>${pts_availability}</span></div>
//                   <div class="d-flex align-items-center fw-bold fs-5 mb-3"><span class="me-1">In Stock</span><span class="text-blue me-1">${pts_in_stock_perc}%</span></div>
//                   <a href="${pts_action}" target="_blank" class="fs-7 text-uppercase lsn-2  text-primary d-flex align-items-center"><span class="me-1">View Listing</span>    <span class="svg-icon svg-icon-6">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                       <path opacity="0.3" d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z" fill="black" />
//                       <rect x="21.9497" y="3.46448" width="13" height="2" rx="1" transform="rotate(135 21.9497 3.46448)" fill="black" />
//                       <path d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z" fill="black" />
//                   </svg>
//                   </span></a>
//                 </div>
//                 </div>
//                 `;

//         let popover = $(popoverHTML);
//         if (counter >= 0) {
//             $('.popover:last').remove();
//         }
//         $(myPlot_today_availability).append(popover);

//         $(popover).css({
//             top: data.event.offsetY + 10,
//             left: data.event.offsetX - 136
//         })
//         $('.popover-dismiss').click(function () {
//             $(popover).remove();
//         })
//         $(document).on('click', function (event) {
//             if (!$(event.target).closest('.popover').length) {
//                 popover.remove();
//             }
//         })
//         $('.popover:last').show();
//     });
//     myPlot_historical_availability.on('plotly_click', function (data) {
//         for (var i = 0; i < data.points.length; i++) {
//             pts_name = data.points[i].text.name;
//             pts_address = data.points[i].text.address;
//             pts_in_stock_perc = data.points[i].text.in_stock_perc;
//             pts_action = data.points[i].text.action;
//         }
//         let popoverHTML = `<div class="popover bs-popover-bottom" role="tooltip " data-popper-placement="bottom" id="pop">
//                 <div class="popover-arrow" style="position: absolute; left: 0px; transform: translate(131px, 0px);"></div>
//                 <span class="popover-dismiss btn btn-icon"></span>
//                 <h3 class="popover-header fw-bold fs-5 border-0 pb-0">${pts_name}</h3>
//                 <div class="popover-body pt-3">
//                   <p class="text-muted mb-3">${pts_address}</p>
//                   <div class="d-flex align-items-center fw-bold fs-5 mb-3"><span class="me-1">In Stock</span><span class="text-blue me-1">${pts_in_stock_perc}%</span> of the time</div>
//                   <a href="${pts_action}" target="_blank" class="fs-7 text-uppercase lsn-2  text-primary d-flex align-items-center"><span class="me-1">View Listing</span>    <span class="svg-icon svg-icon-6">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                       <path opacity="0.3" d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z" fill="black" />
//                       <rect x="21.9497" y="3.46448" width="13" height="2" rx="1" transform="rotate(135 21.9497 3.46448)" fill="black" />
//                       <path d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z" fill="black" />
//                   </svg>
//               </span></a>
//                 </div>
//                 </div>
//                 `;

//         let popover = $(popoverHTML);
//         if (counter >= 0) {
//             $('.popover:last').remove();
//         }
//         $(myPlot_historical_availability).append(popover);


//         $(popover).css({
//             top: data.event.offsetY + 10,
//             left: data.event.offsetX - 136
//         })
//         $('.popover-dismiss').click(function () {
//             $(popover).remove();
//         })
//         $(document).on('click', function (event) {
//             if (!$(event.target).closest('.popover').length) {
//                 popover.remove();
//             }
//         })
//         //$('#avalability_map_today .popover:not(:last)').remove();
//         $('.popover:last').show();
//     });
//     //change cursor to pointer on hover of dots on switch of view to geo map
//     //today Availibility
//     myPlot_today_availability.on('plotly_hover', function (data) {
//         myPlot_today_availability.style.cursor = 'pointer';
//     });
//     myPlot_today_availability.on('plotly_unhover', function (data) {
//         myPlot_today_availability.style.cursor = '';
//     })
//     //historical Availibility
//     myPlot_historical_availability.on('plotly_hover', function (data) {
//         myPlot_historical_availability.style.cursor = 'pointer';
//     });
//     myPlot_historical_availability.on('plotly_unhover', function (data) {
//         myPlot_historical_availability.style.cursor = '';
//     })
// })

//show map on switching tabs


//Averge Price Heat Map
// var e = document.querySelectorAll("#price_heat_map");
// [].slice.call(e).map((function (e) {
//     var t = parseInt(KTUtil.css(e, "height"));
//     if (e) {
//         var gray_300 = KTUtil.getCssVariableValue("--bs-gray-300"),
//             gray_400 = KTUtil.getCssVariableValue("--bs-gray-400"),
//             gray_500 = KTUtil.getCssVariableValue("--bs-gray-500"),
//             gray_900 = KTUtil.getCssVariableValue("--bs-gray-900")
//         var series =
//             [
//                 {
//                     name: 'Alabama',
//                     data: [0.1, 32, 37, 48, 10, 60, 63, 86, 16, 49, 44]
//                 },
//                 {
//                     name: 'Alaska',
//                     data: [10, 50, 18, 55, 48, 60, 10, 93, 86, 32, 37]
//                 },
//                 {
//                     name: 'Arizona',
//                     data: [23, 32, 37, 48, 20, 15, 93, 86, 16, 69, 44]
//                 },
//                 {
//                     name: 'Arkansas',
//                     data: [90, 39, 46, 95, 48, 23, 32, 37, 48, 40, 14,]
//                 },
//                 {
//                     name: 'California',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Colorado',
//                     data: [23, 32, 37, 46, 31, 30, 93, 86, 16, 19, 94]
//                 },
//                 {
//                     name: 'Connecticut',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Delaware',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Florida',
//                     data: [90, 90, 42, 95, 78, 23, 32, 37, 48, 40, 10,]
//                 },
//                 {
//                     name: 'Georgia',
//                     data: [13, 32, 37, 26, 10, 50, 23, 46, 26, 49, 44]
//                 },
//                 {
//                     name: 'Hawaii',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Idaho',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Illinois',
//                     data: [72, 92, 17, 46, 10, 30, 13, 66, 16, 24, 44]
//                 },
//                 {
//                     name: 'Indiana',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Iowa',
//                     data: [13, 32, 37, 26, 10, 90, 23, 48, 26, 19, 44]
//                 },
//                 {
//                     name: 'Kansas',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Kentucky',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Louisiana',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Maine',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Maryland',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Massachusetts',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Michigan',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Minnesota',
//                     data: [13, 32, 37, 26, 50, 10, 23, 46, 26, 19, 44]
//                 },
//                 {
//                     name: 'Mississippi',
//                     data: [29, 86, 16, 19, 24, 43, 32, 37, 26, 10, 12]
//                 },
//                 {
//                     name: 'Missouri',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Montana',
//                     data: [13, 32, 37, 36, 90, 50, 23, 46, 26, 19, 94]
//                 },
//                 {
//                     name: 'Nebraska',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Nevada',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'New Hampshire',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'New Jersey',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'New Mexico',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'New York',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'North Carolina',
//                     data: [13, 30, 37, 26, 10, 10, 29, 46, 26, 19, 44]
//                 },
//                 {
//                     name: 'North Dakota',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Ohio',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Oklahoma',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Oregon',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Pennsylvania',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Rhode Island',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'South Carolina',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'South Dakota',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Tennessee',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Texas',
//                     data: [13, 22, 37, 36, 10, 10, 93, 86, 26, 49, 44]
//                 },
//                 {
//                     name: 'Utah',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Vermont',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Virginia',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Washington',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'West Virginia',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Wisconsin',
//                     data: [13, 32, 37, 26, 10, 28, 93, 86, 21, 19, 44]
//                 },
//                 {
//                     name: 'Wyoming',
//                     data: [3, 12, 37, 46, 10, 50, 93, 46, 26, 19, 44]
//                 }
//             ];
//         var avg_price_chart = new ApexCharts(e, {
//             series: series,

//             chart: {
//                 fontFamily: "inherit",
//                 height: 1200,
//                 type: 'heatmap',
//                 toolbar: {
//                     show: false
//                 }
//             },

//             plotOptions: {
//                 heatmap: {
//                     radius: 0,
//                     enableShades: true,
//                     shadeIntensity: 0.5,
//                     colorScale: {
//                         ranges: [
//                             {
//                                 from: 0,
//                                 to: 25,
//                                 name: '$0-$25',
//                                 color: '#90ee90'
//                             },
//                             {
//                                 from: 26,
//                                 to: 50,
//                                 name: '$26-$50',
//                                 color: '#228b22'
//                             },
//                             {
//                                 from: 51,
//                                 to: 75,
//                                 name: '$51-$75',
//                                 color: '#ff6347'
//                             },
//                             {
//                                 from: 76,
//                                 to: 100,
//                                 name: '$76-$100',
//                                 color: '#8b0000'
//                             },
//                             {
//                                 from: -1,
//                                 to: -1,
//                                 name: 'Not Available',
//                                 color: gray_400,
//                             },
//                         ],
//                     },

//                 }
//             },

//             legend: {
//                 show: true,
//                 position: 'bottom',
//                 showForSingleSeries: true,
//                 markers: {
//                     radius: 12,
//                     // fillColors: [green, red],
//                 },
//                 height: 48,
//             },

//             dataLabels: {
//                 enabled: true,
//                 style: {
//                     colors: [gray_900],
//                     fontWeight: 600,
//                     fontSize: 13,
//                 },
//                 formatter: function (e) {
//                     //console.log(e)
//                     if (e === -1) {
//                         return '';
//                     }
//                     //return e.toString();
//                     return "$" + e
//                 }
//             },

//             stroke: {
//                 width: 0.2,
//             },
//             xaxis: {
//                 categories: ["5/1/23", "5/2/23", "5/3/23", "5/4/23", "5/5/23", "5/6/23", "5/7/23", "5/8/23", "5/9/23", "5/10/23", "5/11/23"],

//                 axisBorder: {
//                     show: false
//                 },
//                 axisTicks: {
//                     show: false
//                 },
//                 tickPlacement: 'on',
//                 tickAmount: 3,

//                 labels: {
//                     show: true,
//                     rotate: 0,
//                     // hideOverlappingLabels: false,
//                     style: {
//                         colors: gray_500,
//                         fontSize: "11px"
//                     }
//                 },
//                 crosshairs: {
//                     show: true,
//                 },
//                 tooltip: {
//                     enabled: true,
//                     formatter: void 0,
//                     offsetY: 0,
//                     style: {
//                         fontSize: "11px"
//                     }
//                 }
//             },
//             yaxis: {
//                 show: true,
//                 labels: {
//                     style: {
//                         colors: gray_500,
//                         fontSize: "11px"
//                     },

//                     offsetX: -10,
//                 }
//             },
//             states: {
//                 normal: {
//                     filter: {
//                         type: "none",
//                         value: 0
//                     }
//                 },
//                 hover: {
//                     filter: {
//                         type: "none",
//                         value: 0
//                     }
//                 },
//                 active: {
//                     allowMultipleDataPointsSelection: false,
//                     filter: {
//                         type: "none",
//                         value: 0
//                     }
//                 }
//             },
//             tooltip: {
//                 custom: function ({ series, seriesIndex, dataPointIndex, w }) {
//                     if (series[seriesIndex][dataPointIndex] !== -1) {
//                         return `<div class="px-3 py-1 fs-7 lh-sm"><span class="d-block">In  ${w.config.series[seriesIndex].name} Woodbridge By Robert Mondavi Cabernet Sauvignon (1.5L)</span> Average Price is</span> <span class="d-inline-block tooltip-perc fw-bolder">$${w.globals.series[seriesIndex][dataPointIndex]}</span> from 5/1/23-5/25/23</div>`;
//                     } else {
//                         return "";
//                     }
//                 },
//                 style: {
//                     fontSize: "12px",
//                 },
//             },

//             colors: ['#88b25a', '#2f9640', '#e46f11', '#ce1e1e', '#841818', gray_400],
//             grid: {
//                 padding: {
//                     top: 0,
//                     right: 0,
//                     bottom: 0,
//                     left: 0
//                 },
//                 borderColor: gray_300,
//                 strokeDashArray: 4,
//                 yaxis: {
//                     lines: {
//                         show: true
//                     }
//                 }
//             },
//             markers: {
//                 // colors: [light_green, light_red],
//                 // strokeColor: [green, red],
//                 strokeWidth: 3
//             }
//         })
//         avg_price_chart.render()
//     }
// }))

//Today's Availability Heat Map
// var e = document.querySelectorAll("#today_ava_heat_map");
// [].slice.call(e).map((function (e) {
//     var t = parseInt(KTUtil.css(e, "height"));
//     if (e) {
//         var gray_300 = KTUtil.getCssVariableValue("--bs-gray-300"),
//             gray_200 = KTUtil.getCssVariableValue("--bs-gray-200"),
//             gray_500 = KTUtil.getCssVariableValue("--bs-gray-500"),
//             gray_900 = KTUtil.getCssVariableValue("--bs-gray-900"),
//             green = KTUtil.getCssVariableValue('--bs-success'),
//             red = KTUtil.getCssVariableValue('--bs-lighter-danger'),
//             light_green = KTUtil.getCssVariableValue('--bs-light-success'),
//             light_red = KTUtil.getCssVariableValue('--bs-light-danger')
//         var series =
//             [
//                 {
//                     name: 'Alabama',
//                     data: [0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0]
//                 },
//                 {
//                     name: 'Alaska',
//                     data: [0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0,]
//                 },
//                 {
//                     name: 'Arizona',
//                     data: [0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0,]
//                 },
//                 {
//                     name: 'Arkansas',
//                     data: [1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0,]
//                 },
//                 {
//                     name: 'California',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Colorado',
//                     data: [1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0,]
//                 },
//                 {
//                     name: 'Connecticut',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Delaware',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Florida',
//                     data: [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1,]
//                 },
//                 {
//                     name: 'Georgia',
//                     data: [1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1,]
//                 },
//                 {
//                     name: 'Hawaii',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Idaho',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Illinois',
//                     data: [0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0,]
//                 },
//                 {
//                     name: 'Indiana',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Iowa',
//                     data: [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1,]
//                 },
//                 {
//                     name: 'Kansas',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Kentucky',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Louisiana',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Maine',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Maryland',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Massachusetts',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Michigan',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Minnesota',
//                     data: [1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0,]
//                 },
//                 {
//                     name: 'Mississippi',
//                     data: [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0,]
//                 },
//                 {
//                     name: 'Missouri',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Montana',
//                     data: [0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0,]
//                 },
//                 {
//                     name: 'Nebraska',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Nevada',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'New Hampshire',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'New Jersey',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'New Mexico',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'New York',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'North Carolina',
//                     data: [1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0,]
//                 },
//                 {
//                     name: 'North Dakota',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Ohio',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Oklahoma',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Oregon',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Pennsylvania',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Rhode Island',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'South Carolina',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'South Dakota',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Tennessee',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Texas',
//                     data: [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]
//                 },
//                 {
//                     name: 'Utah',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Vermont',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Virginia',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Washington',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'West Virginia',
//                     data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//                 },
//                 {
//                     name: 'Wisconsin',
//                     data: [1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0,]
//                 },
//                 {
//                     name: 'Wyoming',
//                     data: [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1]
//                 }
//             ];


//         var today_ava_chart = new ApexCharts(e, {
//             series: series,

//             chart: {
//                 fontFamily: "inherit",
//                 height: 1200,
//                 type: 'heatmap',
//                 toolbar: {
//                     show: false
//                 },
//             },

//             plotOptions: {
//                 heatmap: {
//                     radius: 0,
//                     enableShades: false,
//                     colorScale: {
//                         ranges: [{
//                             from: 0,
//                             to: 0,
//                             name: 'Available & In Stock',
//                             color: green
//                         },
//                         {
//                             from: 1,
//                             to: 1,
//                             name: 'Unavailable',
//                             color: red,
//                         },
//                         {
//                             from: -1,
//                             to: -1,
//                             name: 'Not Available in State',
//                             color: gray_200,
//                         },
//                         ],
//                     },

//                 }
//             },

//             legend: {
//                 show: true,
//                 position: 'bottom',
//                 showForSingleSeries: true,
//                 markers: {
//                     radius: 12,
//                     fillColors: [green, red],
//                 },
//                 //height: 48,
//             },

//             dataLabels: {
//                 enabled: false,
//                 style: {
//                     colors: [gray_900],
//                     fontWeight: 600,
//                     fontSize: 13,
//                 },
//                 formatter: function (e) {
//                     if (e === null) {
//                         return '';
//                     }
//                     return parseFloat(e).toFixed(2) + "%"
//                 }
//             },

//             stroke: {
//                 width: 0.2,
//             },
//             xaxis: {
//                 categories: ["5/1/23", "5/2/23", "5/3/23", "5/4/23", "5/5/23", "5/6/23", "5/7/23", "5/8/23", "5/9/23", "5/10/23", "5/11/23"],

//                 axisBorder: {
//                     show: false
//                 },
//                 axisTicks: {
//                     show: false
//                 },
//                 tickPlacement: 'on',
//                 tickAmount: 3,

//                 labels: {
//                     show: true,
//                     rotate: 0,
//                     // hideOverlappingLabels: false,
//                     style: {
//                         colors: gray_500,
//                         fontSize: "11px"
//                     }
//                 },
//                 crosshairs: {
//                     show: true,
//                 },
//                 tooltip: {
//                     enabled: true,
//                     formatter: void 0,
//                     offsetY: 0,
//                     style: {
//                         fontSize: "11px"
//                     }
//                 }
//             },
//             yaxis: {
//                 show: true,
//                 labels: {
//                     style: {
//                         colors: gray_500,
//                         fontSize: "11px"
//                     },

//                     offsetX: -10,
//                 }
//             },
//             states: {
//                 normal: {
//                     filter: {
//                         type: "none",
//                         value: 0
//                     }
//                 },
//                 hover: {
//                     filter: {
//                         type: "none",
//                         value: 0
//                     }
//                 },
//                 active: {
//                     allowMultipleDataPointsSelection: false,
//                     filter: {
//                         type: "none",
//                         value: 0
//                     }
//                 }
//             },
//             tooltip: {
//                 style: {
//                     fontSize: "12px",
//                 },
//                 y: {
//                     formatter: function (val) {
//                         return ''
//                     },
//                     title: {
//                         formatter: function (seriesName) {
//                             return ""
//                         }
//                     },
//                 }

//             },
//             colors: [green, red, gray_200],
//             grid: {
//                 padding: {
//                     top: 0,
//                     right: 0,
//                     bottom: 0,
//                     left: 0
//                 },
//                 borderColor: gray_300,
//                 strokeDashArray: 4,
//                 yaxis: {
//                     lines: {
//                         show: true
//                     }
//                 }
//             },
//             markers: {
//                 colors: [light_green, light_red],
//                 strokeColor: [green, red],
//                 strokeWidth: 3
//             }
//         })

//         today_ava_chart.render()
//     }

// }))

//Historical Availability Heat Map
// var e = document.querySelectorAll("#historical_ava_heat_map");
// [].slice.call(e).map((function (e) {
//     var t = parseInt(KTUtil.css(e, "height"));
//     if (e) {
//         var gray_300 = KTUtil.getCssVariableValue("--bs-gray-300"),
//             gray_200 = KTUtil.getCssVariableValue("--bs-gray-200"),
//             gray_500 = KTUtil.getCssVariableValue("--bs-gray-500"),
//             gray_900 = KTUtil.getCssVariableValue("--bs-gray-900"),
//             blue = KTUtil.getCssVariableValue("--bs-blue"),
//             light_blue = KTUtil.getCssVariableValue("--bs-light-blue")
//         var series =
//             [
//                 {
//                     name: 'Alabama',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Alaska',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Arizona',
//                     data: [65.64, 55.00, 33.11, 11.02, 35.00, 33.11, 11.02, 80.00, 32.00, 2.33, 15.64,]
//                 },
//                 {
//                     name: 'Arkansas',
//                     data: [0, 40.23, 10.21, 48.33, 80.00, 32.00, 2.33, 15.64, 55.00, 33.11, 11.02]
//                 },
//                 {
//                     name: 'California',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Colorado',
//                     data: [8.00, 32.00, 2.33, 15.64, 55.00, 74.00, 32.00, 2.33, 15.64, 33.11, 11.02]
//                 },
//                 {
//                     name: 'Connecticut',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Delaware',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Florida',
//                     data: [0, 40.23, 10.21, 48.33, 80.00, 32.00, 2.33, 15.64, 55.00, 33.11, 11.02]
//                 },
//                 {
//                     name: 'Georgia',
//                     data: [0, 40.23, 10.21, 48.33, 80.00, 32.00, 2.33, 15.64, 55.00, 33.11, 11.02]
//                 },
//                 {
//                     name: 'Hawaii',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Idaho',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Illinois',
//                     data: [65.64, 55.00, 33.11, 11.02, 35.00, 33.11, 11.02, 80.00, 32.00, 2.33, 15.64,]
//                 },
//                 {
//                     name: 'Indiana',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Iowa',
//                     data: [0, 40.23, 10.21, 48.33, 80.00, 32.00, 2.33, 15.64, 55.00, 33.11, 11.02]
//                 },
//                 {
//                     name: 'Kansas',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Kentucky',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Louisiana',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Maine',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Maryland',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Massachusetts',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Michigan',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Minnesota',
//                     data: [65.64, 55.00, 33.11, 11.02, 35.00, 33.11, 11.02, 80.00, 32.00, 2.33, 15.64,]
//                 },
//                 {
//                     name: 'Mississippi',
//                     data: [0, 40.23, 10.21, 48.33, 80.00, 32.00, 2.33, 15.64, 55.00, 33.11, 11.02]
//                 },
//                 {
//                     name: 'Missouri',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Montana',
//                     data: [8.00, 32.00, 2.33, 15.64, 55.00, 74.00, 32.00, 2.33, 15.64, 33.11, 11.02]
//                 },
//                 {
//                     name: 'Nebraska',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Nevada',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'New Hampshire',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'New Jersey',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'New Mexico',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'New York',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'North Carolina',
//                     data: [65.64, 55.00, 33.11, 11.02, 35.00, 33.11, 11.02, 80.00, 32.00, 2.33, 15.64,]
//                 },
//                 {
//                     name: 'North Dakota',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Ohio',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Oklahoma',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Oregon',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Pennsylvania',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Rhode Island',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'South Carolina',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'South Dakota',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Tennessee',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Texas',
//                     data: [65.64, 55.00, 33.11, 11.02, 35.00, 33.11, 11.02, 80.00, 32.00, 2.33, 15.64,]
//                 },
//                 {
//                     name: 'Utah',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Vermont',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Virginia',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Washington',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'West Virginia',
//                     data: [null, null, null, null, null, null, null, null, null, null, null]
//                 },
//                 {
//                     name: 'Wisconsin',
//                     data: [0, 40.23, 10.21, 48.33, 80.00, 32.00, 2.33, 15.64, 55.00, 33.11, 11.02]
//                 },
//                 {
//                     name: 'Wyoming',
//                     data: [0.1, 40.23, 10.21, 48.33, 80.00, 32.00, 2.33, 15.64, 55.00, 33.11, 11.02]

//                 }
//             ];


//         var percChart = new ApexCharts(e, {
//             series: series,

//             chart: {
//                 fontFamily: "inherit",
//                 height: 1200,
//                 type: 'heatmap',
//                 toolbar: {
//                     show: false
//                 },
//                 events: {
//                     animationEnd: function (chartContext, options) {
//                         $('.apexcharts-data-labels').each(function () {
//                             if ($(this).find('text').is(':empty')) {
//                                 $(this).addClass('empty-parent');
//                                 $('.empty-parent').prev('.apexcharts-heatmap-rect').css('fill', gray_200)
//                             }
//                         });
//                     }
//                 }
//             },

//             plotOptions: {
//                 heatmap: {
//                     radius: 0
//                 }
//             },

//             legend: {
//                 show: true,
//                 position: 'bottom',
//                 showForSingleSeries: true,
//                 markers: {
//                     radius: 12,
//                     fillColors: [blue],
//                 },
//                 //height: 48,
//             },

//             dataLabels: {
//                 enabled: true,
//                 style: {
//                     colors: [gray_900],
//                     fontWeight: 600,
//                     fontSize: 13,
//                 },
//                 formatter: function (e) {
//                     if (e === null) {
//                         return '';
//                     }
//                     return parseFloat(e).toFixed(2) + "%"
//                 }
//             },

//             stroke: {
//                 width: 0.2,
//             },
//             xaxis: {
//                 categories: ["5/1/23", "5/2/23", "5/3/23", "5/4/23", "5/5/23", "5/6/23", "5/7/23", "5/8/23", "5/9/23", "5/10/23", "5/11/23"],

//                 axisBorder: {
//                     show: false
//                 },
//                 axisTicks: {
//                     show: false
//                 },
//                 tickPlacement: 'on',
//                 tickAmount: 3,

//                 labels: {
//                     show: !0,
//                     rotate: 0,
//                     // hideOverlappingLabels: false,
//                     style: {
//                         colors: gray_500,
//                         fontSize: "11px"
//                     }
//                 },
//                 crosshairs: {
//                     show: true,
//                 },
//                 tooltip: {
//                     enabled: true,
//                     formatter: void 0,
//                     offsetY: 0,
//                     style: {
//                         fontSize: "11px"
//                     }
//                 }
//             },
//             yaxis: {
//                 show: true,
//                 labels: {
//                     style: {
//                         colors: gray_500,
//                         fontSize: "11px"
//                     },

//                     offsetX: -10,
//                 }
//             },
//             states: {
//                 normal: {
//                     filter: {
//                         type: "none",
//                         value: 0
//                     }
//                 },
//                 hover: {
//                     filter: {
//                         type: "none",
//                         value: 0
//                     }
//                 },
//                 active: {
//                     allowMultipleDataPointsSelection: false,
//                     filter: {
//                         type: "none",
//                         value: 0
//                     }
//                 }
//             },
//             tooltip: {
//                 custom: function ({ series, seriesIndex, dataPointIndex, w }) {
//                     if (series[seriesIndex][dataPointIndex] !== null) {
//                         return `<div class="px-3 py-1 fs-7 lh-sm"><span class="d-block">In  ${w.config.series[seriesIndex].name} Woodbridge By Robert Mondavi Cabernet Sauvignon (1.5L)</span> was in stock</span> <span class="d-inline-block tooltip-perc fw-bolder">${w.globals.series[seriesIndex][dataPointIndex]}%</span> from 5/1/23-5/25/23</div>`;
//                     } else {
//                         return "";
//                     }
//                 },
//                 style: {
//                     fontSize: "12px"
//                 },
//                 x: {
//                     show: false,
//                 },

//             },
//             colors: [blue, gray_200],
//             grid: {
//                 padding: {
//                     top: 0,
//                     right: 0,
//                     bottom: 0,
//                     left: 0
//                 },
//                 borderColor: gray_300,
//                 strokeDashArray: 4,
//                 yaxis: {
//                     lines: {
//                         show: true
//                     }
//                 }
//             },
//             markers: {
//                 colors: [light_blue],
//                 strokeColor: [blue],
//                 strokeWidth: 3
//             }
//         })

//         percChart.render()
//     }

// }))
