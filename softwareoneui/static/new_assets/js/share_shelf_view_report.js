//donut chart
var baseColor = KTUtil.getCssVariableValue('--bs-blue');
var baseLightColor = KTUtil.getCssVariableValue('--bs-gray-200');
//large size donut chart
let options = {
    startAngle: -1.55,
    size: 100,
    value: 0.85,
    fill: {
        gradient: [baseColor, baseColor]
    },
    emptyFill: baseLightColor,
    thickness: 10
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
    function (event, progress, stepValue) {
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    });

//small size donut chart
let options2 = {
    startAngle: -1.55,
    size: 50,
    value: 0.85,
    fill: {
        gradient: [baseColor, baseColor]
    },
    emptyFill: baseLightColor,
    thickness: 10
}
$(".circle.circle_sm .bar").circleProgress(options2).on('circle-animation-progress',
    function (event, progress, stepValue) {
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    });

$(".bar1").circleProgress({
    value: 0.65
});
$(".bar2").circleProgress({
    value: 0.40
});
//---------

//lazy loading
const container = document.querySelector(".products");
let limit = 8;
let pageCount = 1;
let postCount = 1;
const getPost = async () => {
    const response = await fetch(`https://run.mocky.io/v3/dafff624-cdfa-40f2-bfb5-ad1c3c316824/posts?_limit=${limit}$_page=${pageCount}`);
    //console.log(response);
    const data = await response.json();
    //console.log(data);
    data.map((curElm, index) => {
        const htmlData = `
        <div class=" col-sm-6 col-lg-4 col-xl-3 mb-6">
        <div class="product-item text-center rounded d-flex flex-column justify-content-between h-100 position-relative overflow-hidden  bg-white">
            <div class="product-body px-3 pb-0 pt-6">    
                <ul class="product_label_outer list-inline m-0 d-flex align-items-start flex-wrap mb-5">       
                        <li class="dropdown_item-1 ">${curElm.label[0].tag1}</li>
                        <li class="dropdown_item-2 ">${curElm.label[0].tag2}</li>
                        <li class="dropdown_item-3 ">${curElm.label[0].tag3}</li>
                </ul>
                <!--<span class="fs-7 text-uppercase bg-danger text-white"><span class='product-label bg-danger'>${curElm.label}</span></span>-->
                <div class="product-image img-wrapper"> <img src="${curElm.image}" class="img-fluid"></div>
                <div class="product-title ">
                    <h4 class=" mt-4 mb-5 fw-bold fs-4 lh-base text-gray-800">${curElm.title}
                    </h4>
                </div>
            </div>
            <div class="product-footer d-flex flex-center flex-wrap mb-4 mt-1">
                <!--begin::Stats-->
                <div class="border border-dashed border-gray-300 rounded min-w-100px py-2 px-2 mx-1 mb-2 box">
                    <div class="fs-6 fw-bolder text-gray-700">${curElm.rank}</div>
                    <div class="fw-bold text-gray-400">Rank</div>
                </div>
                <!--end::Stats-->
                <!--begin::Stats-->
                <div class="border border-dashed border-gray-300 rounded min-w-100px py-2 px-2 mx-1 mb-2 box">
                    <div class="fs-6 fw-bolder text-gray-700">${curElm.presence}<span>%</span></div>
                    <div class="fw-bold text-gray-400">Presence</div>
                </div>
                <!--end::Stats-->
            </div>
        </div>
    </div> `;
        container.insertAdjacentHTML('beforeend', htmlData);
    })
}
getPost();

const showData = () => {
    $('#loading').show();
    setTimeout(() => {
        pageCount++;
        $('#loading').hide();
        getPost();
    }, 3000)

};
window.addEventListener('scroll', () => {
    const {
        scrollHeight,
        scrollTop,
        clientHeight
    } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
        showData();
    }

})

//msg box for generate report
const button = document.getElementById('kt_docs_sweetalert_html');
button.addEventListener('click', e => {
    e.preventDefault();
    Swal.fire({
        html: `This report is now queued for generation. When generation is complete, you can select and download it from the <strong>drop-down list </strong> on this page.`,
        title: "Success",
        buttonsStyling: false,
        showCancelButton: false,
        confirmButtonText: "Ok",
        customClass: {
            confirmButton: "btn btn-primary",
        }
    });
});


//select only one checkbox for rank and presence
$('.sorting input:checkbox').click(function () {
    $('.custom-dropdown input:checkbox').not(this).prop('checked', false);
});


//bar chart color
var KTCardsWidget6 = {
    init: function () {
        ! function () {
            var e = document.getElementById("kt_card_widget_6_chart");
            if (e) {
                var a = parseInt(KTUtil.css(e, "height")),
                    t = KTUtil.getCssVariableValue("--bs-gray-500"),
                    l = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                    o = KTUtil.getCssVariableValue("--bs-blue"),
                    r = KTUtil.getCssVariableValue("--bs-gray-300"),
                    i = new ApexCharts(e, {
                        series: [{
                            name: "",
                            data: [30, 60, 53, 45, 60, 75, 53, 10, 25, 40, 60, 33, 45, 60, 75, 53, 10, 25]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "bar",
                            height: a,
                            toolbar: {
                                show: !1
                            },
                            sparkline: {
                                enabled: !0
                            }
                        },
                        plotOptions: {
                            bar: {
                                horizontal: !1,
                                columnWidth: ["100%"],
                                borderRadius: 2
                            }
                        },
                        legend: {
                            show: !1
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        stroke: {
                            show: !0,
                            width: 9,
                            colors: ["transparent"]
                        },
                        xaxis: {
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !1,
                                tickPlacement: "between"
                            },
                            labels: {
                                show: !1,
                                style: {
                                    colors: t,
                                    fontSize: "12px"
                                }
                            },
                            crosshairs: {
                                show: !1
                            }
                        },
                        yaxis: {
                            labels: {
                                show: !1,
                                style: {
                                    colors: t,
                                    fontSize: "12px"
                                }
                            }
                        },
                        fill: {
                            type: "solid"
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
                            x: {
                                formatter: function (e) {
                                    return "Feb: " + e
                                }
                            },
                            y: {
                                formatter: function (e) {
                                    return e + "%"
                                }
                            }
                        },
                        colors: [o, r],
                        grid: {

                            padding: {
                                left: 10,
                                right: 10
                            },
                            borderColor: l,
                            strokeDashArray: 4,
                            yaxis: {
                                lines: {
                                    show: !0
                                }
                            }
                        }
                    });
                setTimeout((function () {
                    i.render()
                }), 300)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTCardsWidget6), KTUtil.onDOMContentLoaded((function () {
    KTCardsWidget6.init()
}));

var KTCardsWidget7 = {
    init: function () {
        ! function () {
            var e = document.getElementById("kt_card_widget_7_chart");
            if (e) {
                var a = parseInt(KTUtil.css(e, "height")),
                    t = KTUtil.getCssVariableValue("--bs-gray-500"),
                    l = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                    o = KTUtil.getCssVariableValue("--bs-blue"),
                    r = KTUtil.getCssVariableValue("--bs-gray-300"),
                    i = new ApexCharts(e, {
                        series: [{
                            name: "",
                            data: [70, 30, 55, 45, 10, 75, 53, 10, 25, 50, 30, 55, 45, 10, 75, 53, 10, 25]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "bar",
                            height: a,
                            toolbar: {
                                show: !1
                            },
                            sparkline: {
                                enabled: !0
                            }
                        },
                        plotOptions: {
                            bar: {
                                horizontal: !1,
                                columnWidth: ["100%"],
                                borderRadius: 2
                            }
                        },
                        legend: {
                            show: !1
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        stroke: {
                            show: !0,
                            width: 9,
                            colors: ["transparent"]
                        },
                        xaxis: {
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !1,
                                tickPlacement: "between"
                            },
                            labels: {
                                show: !1,
                                style: {
                                    colors: t,
                                    fontSize: "12px"
                                }
                            },
                            crosshairs: {
                                show: !1
                            }
                        },
                        yaxis: {
                            labels: {
                                show: !1,
                                style: {
                                    colors: t,
                                    fontSize: "12px"
                                }
                            }
                        },
                        fill: {
                            type: "solid"
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
                            x: {
                                formatter: function (e) {
                                    return "Feb: " + e
                                }
                            },
                            y: {
                                formatter: function (e) {
                                    return e + "%"
                                }
                            }
                        },
                        colors: [o, r],
                        grid: {

                            padding: {
                                left: 10,
                                right: 10
                            },
                            borderColor: l,
                            strokeDashArray: 4,
                            yaxis: {
                                lines: {
                                    show: !0
                                }
                            }
                        }
                    });
                setTimeout((function () {
                    i.render()
                }), 300)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTCardsWidget7), KTUtil.onDOMContentLoaded((function () {
    KTCardsWidget7.init()
}));

var KTCardsWidget8 = {
    init: function () {
        ! function () {
            var e = document.getElementById("kt_card_widget_8_chart");
            if (e) {
                var a = parseInt(KTUtil.css(e, "height")),
                    t = KTUtil.getCssVariableValue("--bs-gray-500"),
                    l = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                    o = KTUtil.getCssVariableValue("--bs-blue"),
                    r = KTUtil.getCssVariableValue("--bs-gray-300"),
                    i = new ApexCharts(e, {
                        series: [{
                            name: "",
                            data: [20, 60, 13, 45, 20, 75, 30, 10, 25, 20, 60, 13, 45, 20, 75, 30, 10, 25]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "bar",
                            height: a,
                            toolbar: {
                                show: !1
                            },
                            sparkline: {
                                enabled: !0
                            }
                        },
                        plotOptions: {
                            bar: {
                                horizontal: !1,
                                columnWidth: ["100%"],
                                borderRadius: 2
                            }
                        },
                        legend: {
                            show: !1
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        stroke: {
                            show: !0,
                            width: 9,
                            colors: ["transparent"]
                        },
                        xaxis: {
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !1,
                                tickPlacement: "between"
                            },
                            labels: {
                                show: !1,
                                style: {
                                    colors: t,
                                    fontSize: "12px"
                                }
                            },
                            crosshairs: {
                                show: !1
                            }
                        },
                        yaxis: {
                            labels: {
                                show: !1,
                                style: {
                                    colors: t,
                                    fontSize: "12px"
                                }
                            }
                        },
                        fill: {
                            type: "solid"
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
                            x: {
                                formatter: function (e) {
                                    return "Feb: " + e
                                }
                            },
                            y: {
                                formatter: function (e) {
                                    return e + "%"
                                }
                            }
                        },
                        colors: [o, r],
                        grid: {

                            padding: {
                                left: 10,
                                right: 10
                            },
                            borderColor: l,
                            strokeDashArray: 4,
                            yaxis: {
                                lines: {
                                    show: !0
                                }
                            }
                        }
                    });
                setTimeout((function () {
                    i.render()
                }), 300)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTCardsWidget8), KTUtil.onDOMContentLoaded((function () {
    KTCardsWidget8.init()
}));

var KTCardsWidget9 = {
    init: function () {
        ! function () {
            var e = document.getElementById("kt_card_widget_9_chart");
            if (e) {
                var a = parseInt(KTUtil.css(e, "height")),
                    t = KTUtil.getCssVariableValue("--bs-gray-500"),
                    l = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                    o = KTUtil.getCssVariableValue("--bs-blue"),
                    r = KTUtil.getCssVariableValue("--bs-gray-300"),
                    i = new ApexCharts(e, {
                        series: [{
                            name: "",
                            data: [70, 60, 33, 45, 60, 75, 30, 30, 25, 70, 60, 33, 45, 60, 75, 30, 30, 25]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "bar",
                            height: a,
                            toolbar: {
                                show: !1
                            },
                            sparkline: {
                                enabled: !0
                            }
                        },
                        plotOptions: {
                            bar: {
                                horizontal: !1,
                                columnWidth: ["100%"],
                                borderRadius: 2
                            }
                        },
                        legend: {
                            show: !1
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        stroke: {
                            show: !0,
                            width: 9,
                            colors: ["transparent"]
                        },
                        xaxis: {
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !1,
                                tickPlacement: "between"
                            },
                            labels: {
                                show: !1,
                                style: {
                                    colors: t,
                                    fontSize: "12px"
                                }
                            },
                            crosshairs: {
                                show: !1
                            }
                        },
                        yaxis: {
                            labels: {
                                show: !1,
                                style: {
                                    colors: t,
                                    fontSize: "12px"
                                }
                            }
                        },
                        fill: {
                            type: "solid"
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
                            x: {
                                formatter: function (e) {
                                    return "Feb: " + e
                                }
                            },
                            y: {
                                formatter: function (e) {
                                    return e + "%"
                                }
                            }
                        },
                        colors: [o, r],
                        grid: {

                            padding: {
                                left: 10,
                                right: 10
                            },
                            borderColor: l,
                            strokeDashArray: 4,
                            yaxis: {
                                lines: {
                                    show: !0
                                }
                            }
                        }
                    });
                setTimeout((function () {
                    i.render()
                }), 300)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTCardsWidget9), KTUtil.onDOMContentLoaded((function () {
    KTCardsWidget9.init()
}));

//line chart
var e = document.querySelectorAll(".mixed-widget-7-chart");
[].slice.call(e).map((function (e) {
    var t = parseInt(KTUtil.css(e, "height"));
    if (e) {
        var a = e.getAttribute("data-kt-chart-color"),
            o = KTUtil.getCssVariableValue("--bs-gray-800"),
            s = KTUtil.getCssVariableValue("--bs-gray-300"),
            r = KTUtil.getCssVariableValue("--bs-blue"),
            l = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
            i = KTUtil.getCssVariableValue("--bs-light-blue")
        new ApexCharts(e, {
            series: [{
                name: "",
                data: [15, 25, 15, 40, 20, 50,]
            }],
            chart: {
                fontFamily: "inherit",
                type: "area",
                height: t,
                toolbar: {
                    show: !1
                },
                zoom: {
                    enabled: !1
                },
                sparkline: {
                    enabled: !0
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
            stroke: {
                curve: "smooth",
                show: !0,
                width: 3,
                colors: [r]
            },
            xaxis: {
                categories: ["01 Nov", "07 Nov", "14 Nov", "21 Nov", "28 Nov", "05 Dec"],
                axisBorder: {
                    show: !1
                },
                axisTicks: {
                    show: !1
                },
                labels: {
                    show: !1,
                    style: {
                        colors: o,
                        fontSize: "12px"
                    }
                },
                crosshairs: {
                    show: !1,
                    position: "front",
                    stroke: {
                        color: s,
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
                min: 0,
                max: 60,
                labels: {
                    show: !1,
                    style: {
                        colors: o,
                        fontSize: "12px"
                    }
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
            colors: [i],
            markers: {
                colors: [i],
                strokeColor: [r],
                strokeWidth: 3
            },
            grid: {

                borderColor: l,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: !0
                    }
                }
            },
        }).render()
    }
}))

//datatable
JDDatatable('https://run.mocky.io/v3/121d6e61-e420-49e6-9a35-870a96399412', "marketplace", "Marketplace");
JDDatatable('https://run.mocky.io/v3/434e4369-3a15-4a45-aabc-270017173ffb', "shelf_page", "Shelf Page");


/*----------------Server Side Datatable--------------------------*/
var datatable_column_width;
function JDDatatable(api, id, table_name) {
    getTableData(api, function (tblInfo) {
        var table = $("#" + id + "").DataTable({
            "dom": "<'row'<'col-sm-12 col-md-12 'i>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'p>>",
            buttons: [],
            paging: true,
            serverSide: true,
            pageLength: 10,
            searching: false,
            responsive: true,
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
                        console.log(132, data)
                    },
                    error: function (jqXhr, textStatus, errorThrown) { }
                });
            },
            columns: tblInfo.colArr,
            "headerCallback": datatable_column_width,
            "columnDefs": tblInfo.colDefArr,
            "drawCallback": function () {
                //colored cells 
                $(".colored__perc_td tbody tr td").each(function () {
                    var perc_value = $(this).find('.perc').text()
                    var percentage = $(this).find('.perc')
                    $(percentage).closest('td').css('background-color', 'rgba(68,158,221,' + perc_value + ')')
                });
            }
        });
        table.on('responsive-display', function () {
            //responsive colored cells 
            $(".colored__perc_td tbody tr td .dtr-details li").each(function () {
                var perc_value = $(this).find('.perc').text()
                var percentage = $(this).find('.perc')
                $(percentage).closest('.dtr-data').find('.colored-cell').css({ 'background-color': 'rgba(68,158,221,' + perc_value + ')' })
            });
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
