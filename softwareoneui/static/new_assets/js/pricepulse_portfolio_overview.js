//brand tab summarized table
JDDatatable('https://run.mocky.io/v3/c269fda8-9d22-432c-9e05-e8464cf1be52', "brand_view_marketplace_summarized", "Retailer & Marketplace");
JDDatatable('https://run.mocky.io/v3/53b15cf1-1f1b-4bdd-8734-dc90bc74ebea', "brand_view_state_summarized", "States");

//marketplace tab summarized table
JDDatatable('https://run.mocky.io/v3/05ff5e73-717f-4fa5-8877-a319f3c3a485', "marketplace_summarized", "Brands");
JDDatatable('https://run.mocky.io/v3/53b15cf1-1f1b-4bdd-8734-dc90bc74ebea', "state_summarized", "States");

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
            responsive: false,
            scrollX: true,
            scrollY: "225px",
	    scrollCollapse: true,
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
                        if (data.draw == data.recordsTotal) {
                            console.log("less")
                            $('.dataTables_wrapper').find('.dataTables_length').css('display', 'none');
                            $('.dataTables_wrapper').find('.dataTables_paginate').css('display', 'none');
                        } else {
                            $('.dataTables_wrapper').find('.dataTables_length').css('display', 'block');
                            $('.dataTables_wrapper').find('.dataTables_paginate').css('display', 'block');
                        };

                    },
                    error: function (jqXhr, textStatus, errorThrown) { }
                });
            },
            columns: tblInfo.colArr,
            "headerCallback": datatable_column_width,
            "columnDefs": tblInfo.colDefArr,
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

//brand tab brand/sku table
JDDatatable1('https://run.mocky.io/v3/7382c6d7-00bd-4fb0-8d01-347e83bd2e22', "brand_view_marketplace_brand", "Retailer & Marketplace");
JDDatatable1('https://run.mocky.io/v3/43d37c0b-ef0d-49c0-8e1d-4e9ecbbcc048', "brand_view_marketplace_sku", "Retailer & Marketplace");
JDDatatable1('https://run.mocky.io/v3/1bc34d56-627a-4cd4-89c5-4b41f0e5dc95', "brand_view_state_brand", "States");
JDDatatable1('https://run.mocky.io/v3/ee99d312-bf11-4344-bd63-355944c4b566', "brand_view_state_sku", "States");

//mraketplace tab marketplace table
JDDatatable1('https://run.mocky.io/v3/f6cdfa64-4c11-48b1-b751-c1bf3cf7bbe3', "marketplace_brand", "Brands");
JDDatatable1('https://run.mocky.io/v3/a44eca4c-a29d-4835-90bc-c1a4803d8d8e', "marketplace_sku", "Brands");

//Datatable with complex header
function JDDatatable1(api, id, table_name) {
    table = $("#" + id + "").DataTable({
        "dom": "<'row'<'col-sm-12 col-md-12 'i>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'p>>",
        buttons: [],
        paging: true,
        serverSide: true,
        pageLength: 10,
        searching: false,
        responsive: false,
        scrollX: true,
        scrollY: "230px",
	scrollCollapse: true,
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
                    // console.log(132, data)
                    if (data.draw == data.recordsTotal) {
                        console.log("less")
                        $('.dataTables_wrapper').find('.dataTables_length').css('display', 'none');
                        $('.dataTables_wrapper').find('.dataTables_paginate').css('display', 'none');
                    } else {
                        $('.dataTables_wrapper').find('.dataTables_length').css('display', 'block');
                        $('.dataTables_wrapper').find('.dataTables_paginate').css('display', 'block');
                    };

                },
                error: function (jqXhr, textStatus, errorThrown) { }
            });
        },
        "columns": [
            { "data": "marketplace" },
            { "data": "custom_group1" },
            { "data": "100 Pipers" },
            { "data": "Bacardi" },
            { "data": "Hennessy" },
            { "data": "custom_group2" },
            { "data": "Dom Pérignon" },
            { "data": "Jhonnie Walker" },
            { "data": "custom_group3" },
            { "data": "Veuve Clicquot" },
            { "data": "Woodinville" }
        ]
    });
}
//

//line charts in tabs
var KTChartsWidget11 = function () {
    var e = function (e, a, t, l) {
        var o = document.querySelector(a),
            r = parseInt(KTUtil.css(o, "height"));
        if (o) {
            var i = KTUtil.getCssVariableValue("--bs-gray-500"),
                s = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                n = KTUtil.getCssVariableValue("--bs-success"),
                m = KTUtil.getCssVariableValue("--bs-light-success"),
                d = new ApexCharts(o, {
                    series: [{
                        name: "Price",
                        data: t
                    }],
                    chart: {
                        fontFamily: "inherit",
                        type: "area",
                        height: r,
                        toolbar: {
                            show: !1
                        }
                    },
                    plotOptions: {},
                    legend: {
                        show: !1
                    },
                    dataLabels: {
                        enabled: !1
                    },
                    fill: {
                        type: "solid",
                        opacity: 1
                    },
                    fill1: {
                        type: "gradient",
                        opacity: 1,
                        gradient: {
                            type: "vertical",
                            shadeIntensity: .5,
                            gradientToColors: void 0,
                            inverseColors: !0,
                            opacityFrom: 1,
                            opacityTo: .375,
                            stops: [25, 50, 100],
                            colorStops: []
                        }
                    },
                    stroke: {
                        curve: "smooth",
                        show: !0,
                        width: 3,
                        colors: [n]
                    },
                    xaxis: {
                        categories: ["Apr 01", "Apr 02", "Apr 03", "Apr 04", "Apr 05", "Apr 06", "Apr 07", "Apr 08", "Apr 09", "Apr 10", "Apr 11"],
                        axisBorder: {
                            show: !1
                        },
                        axisTicks: {
                            show: !1
                        },
                        tickAmount: 2,
                        labels: {
                            show: !0,
                            rotate: 0,
                            style: {
                                colors: i,
                                fontSize: "11px"
                            }
                        },
                        crosshairs: {
                            position: "front",
                            stroke: {
                                color: n,
                                width: 1,
                                dashArray: 3
                            }
                        },
                        tooltip: {
                            enabled: !0,
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
                        max: 65,
                        floating: false,
                        labels: {
                            style: {
                                colors: i,
                                fontSize: "11px"
                            },
                            formatter: function (e) {
                                return "$" + e.toFixed(0);
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
                        },
                        y: {
                            formatter: function (e) {
                                return e + "%"
                            }
                        }
                    },
                    colors: [m],
                    grid: {
                        padding: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0

                        },
                        borderColor: s,
                        strokeDashArray: 4,
                        yaxis: {
                            lines: {
                                show: !0
                            }
                        }
                    },
                    markers: {
                        colors: [m],
                        strokeColor: [n],
                        strokeWidth: 3
                    }
                }),
                g = !1,
                f = document.querySelector(e);
            !0 === l && (d.render(), g = !0), f.addEventListener("shown.bs.tab", (function (e) {
                0 == g && (d.render(), g = !0)
            }))
        }
    };
    return {
        init: function () {
            e("#kt_chart_widget_11_tab_1", "#kt_chart_widget_11_chart_1", [30, 50, 25, 20, 32, 21, 32, 45, 23, 34, 21], !0), e("#kt_chart_widget_11_tab_1", "#kt_chart_widget_11_chart_2", [25, 30, 60, 32, 55, 21, 64, 34, 43, 21, 43], !0), e("#kt_chart_widget_11_tab_1", "#kt_chart_widget_11_chart_3", [40, 30, 50, 54, 53, 32, 23, 43, 12, 23, 24], !0), e("#kt_chart_widget_11_tab_2", "#kt_chart_widget_11_chart_21", [30, 50, 25, 32, 23, 12, 54, 32, 34, 21, 34], !1), e("#kt_chart_widget_11_tab_2", "#kt_chart_widget_11_chart_22", [25, 30, 60, 21, 65, 43, 23, 43, 12, 32, 23], !1), e("#kt_chart_widget_11_tab_2", "#kt_chart_widget_11_chart_23", [43, 40, 30, 50, 34, 23, 32, 23, 23, 45, 44], !1)
        }
    }
}();
"undefined" != typeof module && (module.exports = KTChartsWidget11), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget11.init()
}));

//align table header in tabs
$('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    $($.fn.dataTable.tables(true)).DataTable()
        .columns.adjust();
});

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

/*$('.table').on('draw.dt', function () {
    if ($(this).height() <= $(this).closest('.dataTables_scrollBody').height()) {
	$(this).closest('.dataTables_wrapper').next().find('.view_all_row').hide()
    }
});*/
