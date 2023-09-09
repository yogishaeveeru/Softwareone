//filter dropdowns----------------
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "marketplace_retailer", "Select Marketplace");
JDSelect2("https://run.mocky.io/v3/54c8476c-37b8-4d24-90f9-1a5879874093", "state", "Select State")

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
                        <span class="fs-2 fw-bolder text-gray-800 me-2 lh-1">750ml</span>
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
                    <div class="text-start my-2">
                      <!--begin::Statistics-->
                      <div class="d-flex mb-1">
                        <span class="fs-2 fw-bolder text-gray-800 me-2 lh-1 ">Wild Turkey</span>
                      </div>
                      <!--end::Statistics-->
                      <!--begin::Description-->
                      <span class="fs-6 fw-bold text-gray-400">Brand</span>
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
            gray_200 = KTUtil.getCssVariableValue("--bs-gray-200"),
	    gray_300 = KTUtil.getCssVariableValue("--bs-gray-300"),
	    gray_500 = KTUtil.getCssVariableValue("--bs-gray-500"),
	    gray_900 = KTUtil.getCssVariableValue("--bs-gray-900"),
            blue = KTUtil.getCssVariableValue("--bs-blue"),
            green = KTUtil.getCssVariableValue('--bs-success'),
            red = KTUtil.getCssVariableValue('--bs-lighter-danger'),
            purple = KTUtil.getCssVariableValue('--bs-purple'),
            orange = KTUtil.getCssVariableValue('--bs-lighter-orange'),
            cyan = KTUtil.getCssVariableValue('--bs-cyan'),
            gray_600 = KTUtil.getCssVariableValue('--bs-gray-600'),
            blue_100 = KTUtil.getCssVariableValue('--bs-blue-100'),
            blue_900 = KTUtil.getCssVariableValue('--bs-blue-900'),
            yellow = KTUtil.getCssVariableValue('--bs-lighter-warning')
        
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
                },
                height: 48,
            },
            dataLabels: {
                enabled: false,
                textAnchor: 'end',
                offsetX: -10,
                formatter: function (val, opt) {
                    var lastIndex = opt.w.globals.series[0].length - 1;
                    if (opt.dataPointIndex === lastIndex) {
                        return opt.w.globals.seriesNames[opt.seriesIndex];
                    }
                    return '';
                },
                style: {
                    fontSize: '10px',
                },
                background: {
                    enabled: true,
                    borderRadius: 2,
                    borderWidth: 1,
                    borderColor: '#fff',
                    opacity: 0.9,
                },
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
            },
            xaxis: {
                //for single date
                categories: ["2/1/23", "2/2/23", "2/3/23", "2/4/23", "2/5/23", "2/6/23", "2/7/23", "2/8/23", "2/9/23", "2/10/23", "2/11/23"],

                //for daterange
                //categories: [["2/2/23-", "2/5/23"], ["2/7/23-", "2/12/23"], ["2/13/23-", "2/19/23"], ["2/20/23-", "2/26/23"], ["2/27/23-", "2/28/23"]],
                
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                tickPlacement: 'on',
                tickAmount: 3,
                labels: {
                    show: !0,
                    // rotate: 0,
                    // hideOverlappingLabels: false,
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
                colors:[gray_200],
                strokeColor: [green, blue, red, purple, gray_500, orange, cyan, blue_100, blue_900, gray_600, yellow],
                strokeWidth: 3
            }
        }).render()
    }
}))
}
skudetaildata();
//--------------------

JDDatatable('https://run.mocky.io/v3/e108bbfc-5bb2-41df-9b48-e37102f3aede', "marketplace_current", "Retailer & Marketplace");
JDDatatable('https://run.mocky.io/v3/888a5312-c0aa-4e1a-802d-5bbfd44f0ec7', "marketplace_average", "Retailer & Marketplace");
JDDatatable1('https://run.mocky.io/v3/bed818bc-602b-4421-9982-67c8fd6f9e31', "listing", "Store Listings");
datatable_column_width = function column_width() {
    $('#listing').find('th').eq(0).css('width', '100px');
    $('#listing').find('th').eq(1).css('width', '26%');
}

//Retailer & Marketplace Datatable
var datatable_column_width;
function JDDatatable(api, id, table_name) {
    getTableData(api, function (tblInfo) {
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
            scrollCollapse: true,
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
                $('.buttons-colvis').removeClass('btn-secondary');
                $('[data-bs-toggle="popover"]').popover();
                $('[data-bs-toggle="tooltip"]').tooltip();
            }
        });
        table.column(-1).visible(false);
        // table.column(5).visible(false);
        // table.column(4).visible(false);
        // table.column(3).visible(false);

        //Add searchbox in Add Sku dropdown menu
        table.on('buttons-action', function (e, buttonApi, dataTable, node, config) {
            $('.dt-button-collection').find('.dropdown-menu').prepend($('<div class="search-box p-3 "><input type="text" id="search-column" data-kt-filter="search" class="form-control  form-control-sm w-100 " placeholder="Search SKU"></div>'));
            $('.dt-button-collection').find('.dropdown-menu').find('.search-box:not(:first)').remove();
            $('.dt-button-collection').find('.dropdown-menu').find('.search-box:first').show();

        });

    });
}

//Listings by Store Name Datatable
function JDDatatable1(api, id, table_name) {
    getTableData(api, function (tblInfo) {
        table = $("#" + id + "").DataTable({
            "dom": "<'row'<'col-sm-12 col-md-12 'i>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'p>>",
            buttons: [],
            paging: true,
            serverSide: true,
            pageLength: 10,
            searching: false,
            responsive: true,
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
                // console.log("table " + $(this).attr('id') + $(this).height())
                // console.log("scrollbody " + $(this).attr('id') + $(this).closest('.dataTables_scrollBody').height())
                if ($(this).height() <= $(this).closest('.dataTables_scrollBody').height()) {
                    $(this).closest('.dataTables_wrapper').next().find('.view_all_row').hide()
                }
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

//Retailer Marketplace Sub heading date
if ($('.today_date ').hasClass('active')) {
    $('.sub-heading').text('Average Price on 5/25/23')
}

//align table header in tabs
$('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    $($.fn.dataTable.tables(true)).DataTable()
        .columns.adjust()
    //Retailer Marketplace Sub heading date
    if ($('.today_date ').hasClass('active')) {
        $('.sub-heading').text('Average Price on 5/25/23')
    }
    if ($('.average_pice ').hasClass('active')) {
        $('.sub-heading').text('Average Price from 5/1/2023-5/25/23')
    }
});

//geo scatter map
var myPlot = document.getElementById('mapDiv')
data = [{
    type: 'scattergeo',
    locationmode: 'USA-states',

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
    price: [23, 32, 37, 48, 410, 110, 393, 386, 616, 749, 544, 90, 490, 662, 1025, 1],
    hoverinfo: 'none',
    mode: 'markers',
    marker: {
        size: 9,
        opacity: 0.8,
        reversescale: true,
        autocolorscale: false,
        symbol: 'circle',
        line: {
            width: 0,
            color: 'rgb(102,102,102)'
        },
        colorscale: [[0, 'rgb(91 23 23)'], [0.35, 'rgb(132 24 24)'], [0.5, 'rgb(206 30 30)'], [0.6, 'rgb(228 111 17)'], [0.7, 'rgb(47 150 64)'], [1, 'rgb(136 178 90)']],
        cmin: 0,
        color: ['23', '32', '37', '48', '410', '110', '393', '386', '616', '749', '544', '90', '490', '662', '1025', '1'],
        colorbar: {
            title: '',
            thickness: 10,
            tickprefix: "$",
            tickvals: [0, 200, 400, 600, 800, 1000],
            outlinecolor: 'rgba(68,68,68,0)',
            // dtick: 2,
        }
    },
}];
console.log(data[0].price)
var prices = data[0].price
var minPrice = Math.min(...prices);
var maxPrice = Math.max(...prices);
var medianPrice = prices.sort()[Math.floor(prices.length / 2)];
console.log("Min " + minPrice + " Max " + maxPrice + " median " + medianPrice)

layout = {
    hovermode: 'closest',
    dragmode: false,
    title: {
        text: '',
        font: {
            family: 'Poppins, Helvetica, sans-serif',
            size: 16,
            color: '#3f4254'
        },
    },
    // colorbar: true,
    margin: {
        l: 60,
        r: 0,
        b: 0,
        t: 0,
        pad: 4
    },

    geo: {
        scope: 'usa',
        projection: {
            type: 'albers usa'
        },
        showland: true,
        landcolor: 'rgb(244, 247, 249)',
        subunitcolor: 'rgb(228 230 239)',
        countrycolor: 'rgb(228 230 239)',
        countrywidth: 0.5,
        subunitwidth: 1,
    },

    legend: {
        x: 0,
        y: 1, // Adjust the position of the legend
        traceorder: "normal",
        font: {
            family: "sans-serif",
            size: 12,
            color: "#000",
        },
        bgcolor: "#E2E2E2",
        bordercolor: "#FFFFFF",
        borderwidth: 2,
    },
};
// Define the custom legend HTML
var legendHTML =
    `<ul class="custom-legend position-absolute top-0 fs-8 fw-bolder text-gray-700  list-inline m-0">
        <li id="min-price"><span class="marker min"></span>Lowest Price: $${minPrice}</li>
        <li class="median-price"><span class="marker median"></span>Median Price: $${medianPrice}</li>
        <li class="max-price"><span class="marker max"></span>Highest Price: $${maxPrice}</li>
    </ul>`;

// Add the custom legend to the plot container
document.getElementById("mapDiv").innerHTML = legendHTML;


$('.custom-legend li').click(function () {
    alert($(this).text())
})

Plotly.newPlot("mapDiv", data, layout, { displayModeBar: false });

// Get the custom legend text element
var legendText = document.getElementById('min-price');

//show modal on click of dots
myPlot.on('plotly_click', function (data) {
    for (var i = 0; i < data.points.length; i++) {
        pts_name = data.points[i].text.name;
        pts_address = data.points[i].text.address;
        pts_price = data.points[i].text.price;
        pts_price_change = data.points[i].text.change_price;
        pts_action = data.points[i].text.action;
    }
    var popoverHTML = `<div class="popover bs-popover-bottom" role="tooltip " data-popper-placement="bottom" id="pop">
        <div class="popover-arrow" style="position: absolute; left: 0px; transform: translate(131px, 0px);"></div>
        <span class="popover-dismiss btn btn-icon"></span>
        <h3 class="popover-header fw-bold fs-5 border-0 pb-0">${pts_name}</h3>
        <div class="popover-body pt-3">
          <p class="text-muted mb-3">${pts_address}</p>
          <div class="d-flex align-items-center fw-bold fs-5 mb-2"><span class="me-1">${pts_price}</span><span>${pts_price_change}</span></div>
          <a href="${pts_action}" target="_blank" class="fs-8 text-uppercase lsn-2  text-primary">View Listing</a>
        </div>
        </div>
        `;

    var popover = $(popoverHTML);

    $(myPlot).append(popover);

    $('.popover:not(:last)').remove();
    $('.popover:last').show();
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
});

//change cursor to pointer on hover of dots
myPlot.on('plotly_hover', function (data) {
    myPlot.style.cursor = 'pointer';
});
myPlot.on('plotly_unhover', function (data) {
    myPlot.style.cursor = '';
})

