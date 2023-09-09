//filter dropdowns----------------
JDSelect2("https://run.mocky.io/v3/25b01520-6ae0-4c64-b74f-1c423b5b747c", "state", "Select State");
JDSelect2("https://run.mocky.io/v3/af3d7fff-3f69-4576-98e3-b1707dcc5873", "city", "Select City");
JDSelect2("https://run.mocky.io/v3/af3d7fff-3f69-4576-98e3-b1707dcc5873", "marketplace", "Select Marketplaces");
JDSelect2("https://run.mocky.io/v3/af3d7fff-3f69-4576-98e3-b1707dcc5873", "merchants", "Select Store Locations");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "custom-filter", "Select Custom Filters");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "custom-grouping", "Select Custom Grouping");

//SKUs Dropdown with logos
function formatsku(sku) {
    console.log(sku);
    if (!sku.id) {
        return sku.text;
    }
    var $sku = $(
        '<span class="d-flex align-items-center "><span class="images img-wrapper border rounded "><img  class="img-fluid " src="' + sku.image + '" /> </span>' + sku.text + '</span>'
    );
    return $sku;
};

$(document).ready(function () {
    var selectData_sku = [];
    //filter by brand dropdown--------
    $.ajax({
        url: "https://run.mocky.io/v3/4dfcfaff-803d-4148-b0db-8439df54c262"
    }).then(function (data) {
        $(data).each(function (i) {
            data.sort((a, b) => a.text.localeCompare(b.text))
            selectData_sku.push({ id: data[i].id, text: data[i].text, image: data[i].images });

        });

        $('#sku').select2({
            placeholder: "Select SKUs",
            data: selectData_sku,
            templateResult: formatsku,
            templateSelection: formatsku
        });
    });
    //---------------------------
});
//------------------

//form validation
"use strict";
var KTContactApply = function () {
    var t, e, o, n;
    return {
        init: function () {
            o = document.querySelector("#create-report-form"), t = document.getElementById("create-report-submit"), $(o.querySelector('[name="position"]')).on("change", (function () {
                e.revalidateField("position")
            })), e = FormValidation.formValidation(o, {
                fields: {
                    sku: {
                        validators: {
                            notEmpty: {
                                message: "SKU is required"
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: ".fv-row",
                        eleInvalidClass: "",
                        eleValidClass: ""
                    })
                }
            }), t.addEventListener("click", (function (o) {
                o.preventDefault(), e && e.validate().then((function (e) {
                    console.log("validated!"), "Valid" == e ? (t.setAttribute("data-kt-indicator", "on"), t.disabled = !1, setTimeout((function () {
                        // $("#report_name").modal("show")

                        // $('#submit').click(function(){
                        //     setTimeout(function() {
                        //         window.location = "file:///E:/GMWARE/Gmware%20Work/Work/New%20JENDA%20Design/Price-Pulse-Reports.html";
                        //     }, 1000);
                        // })
                        window.location = "file:///E:/GMWARE/Gmware%20Work/Work/New%20JENDA%20Design/Price-Pulse-Reports.html";
                        return false;
                    }), 0)) : Swal.fire({
                        text: "Sorry, looks like there are some errors detected, please try again.",
                        title: "Error",
                        buttonsStyling: !1,
                        confirmButtonText: "Ok",
                        customClass: {
                            confirmButton: "btn btn-danger"
                        }
                    }).then((function (t) {
                        KTUtil.scrollTop()
                    }))
                }))
            }))
        }

    }

}();
KTUtil.onDOMContentLoaded((function () {
    KTContactApply.init()
}));

//toggle preview
$(function () {
    // let sum_by_marketplace = $("#sum_marketplace").prop("checked");
    // $(".chart_view_mockup").hide();
    $("#switch_view").change(function () {
        if ($(this).is(":checked")) {
            $(".table_view_mockup").show('slow');
            $(".chart_view_mockup").hide('slow');
        } else {
            $(".table_view_mockup").hide('slow');
            $(".chart_view_mockup").show('slow');
        }
    });
});

//set report name
$('#sku').change(function () {
    var selected_sku = $(this).find(':selected').text();
    let value = $("input[name='radio_buttons_2']:checked").val();
    $('#report-name').val(value + "_" + selected_sku);
});

$('#marketplace').change(function () {
    var theID = $(this).select2('data').id;
    var theSelection = $(this).select2('data').text;
    $('#selectedID').text(theID);
    $('#selectedText').text(theSelection);
    console.log($('#selectedText').text(theSelection))
});

//Preview Datatable--------------
JDDatatable('https://run.mocky.io/v3/dc2f870f-432b-4516-bad1-d7e37569ebf1', "marketplace_table", "Records");

//Datatable
var datatable_column_width;
function JDDatatable(api, id, table_name) {
    getTableData(api, function (tblInfo) {
        table = $("#" + id + "").DataTable({
            "dom": "<'row'<'col-sm-12 col-md-12 'i>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'p>>",
            buttons: [],
            paging: false,
            serverSide: true,
            pageLength: 10,
            searching: false,
            responsive: false,
            scrollX: true,
            scrollY: "40vh",
            "ordering": false,
            "scrollCollapse": true,
            order: [
                [1, "asc"]
            ],
            info: false,
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

                $('.td-link').closest('td').addClass('colored-cell-hover nav')
                //colored cells 
                $(".colored__perc_td tbody tr td").each(function () {
                    var perc_value = $(this).find('.perc').text()
                    var percentage = $(this).find('.perc')
                    $(percentage).closest('td').css('background-color', 'rgba(68,158,221,' + perc_value + ')')
                });
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

//Line Chart
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
                },
                {
                    name: "Bulleit Bourbon 1.75L",
                    data: [20, 30, 35, 40, 40, 33, 33, 53, 51, 40, 48],
                }
            ],
            chart: {
                fontFamily: "inherit",
                type: "area",
                height: 230,
                toolbar: {
                    show: false
                },
            },
            plotOptions: {},
            legend: {
                show: true,
                showForSingleSeries: true,
                markers: {
                    radius: 12,
                    fillColors: [green, blue, red, purple, gray_500, orange, cyan, blue_100, blue_900, gray_600, yellow],
                },
                height: 48,
            },
            dataLabels: {
                enabled: true,
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
                categories: ["2/1/23", "2/2/23", "2/3/23", "2/4/23", "2/5/23", "2/6/23", "2/7/23", "2/8/23", "2/9/23", "2/10/23", "2/11/23"],
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
                        return e.toFixed(0) + "%";
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
                colors: [gray_200],
                strokeColor: [green, blue, red, purple, gray_500, orange, cyan, blue_100, blue_900, gray_600, yellow],
                strokeWidth: 3
            }
        }).render()
    }
}))
