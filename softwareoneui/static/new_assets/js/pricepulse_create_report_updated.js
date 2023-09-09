//filter dropdowns----------------
JDSelect2("https://run.mocky.io/v3/25b01520-6ae0-4c64-b74f-1c423b5b747c", "state", "Select State");
JDSelect2("https://run.mocky.io/v3/af3d7fff-3f69-4576-98e3-b1707dcc5873", "city", "Select City");
JDSelect2("https://run.mocky.io/v3/af3d7fff-3f69-4576-98e3-b1707dcc5873", "marketplace", "Select Marketplaces");
JDSelect2("https://run.mocky.io/v3/af3d7fff-3f69-4576-98e3-b1707dcc5873", "merchants", "Select Merchants");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "custom-filter", "Select Custom Filters");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "custom-grouping", "Select Custom Grouping");

//SKU Dropdown with logos
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
                    
                        window.location = "https://training.nextgen.jendasolutionssandbox.com/pricepulse/reports/";
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
    $(".chart_view_mockup").hide();
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
JDDatatable('https://run.mocky.io/v3/cfa39b17-342a-4e5a-9ee4-e2137382b185', "marketplace_table", "Records");
$.extend(true, $.fn.dataTable.defaults, {
    "info": false,
    "ordering": false
});

//Preview line graph
const get_marketplace_chart = async () => {
    const response1 = await fetch('https://run.mocky.io/v3/4728d04e-3111-42e4-b592-d1fbddf55f16');
    const data1 = await response1.json();
    //sku comparison chart
    var chart1 = new Highcharts.Chart({
        chart: {
            type: 'line',
            renderTo: 'marketplace_chart',
            margin: [15, 10, 60, 60]
        },
        title: {
            text: '',
            align: 'left',
            margin: 10,
            x: 50,
            style: {
                fontWeight: 'bold',
                color: 'rgba(0,0,0,.9)'
            }
        },
        plotOptions: {
            series: {
                lineWidth: 2,
                pointStart: Date.UTC(2021, 0, 1),
                pointInterval: 10 * 24 * 36e5
            },
            line: {
                lineWidth: 1,
                marker: {
                    enabled: true,
                    symbol: 'circle',
                    radius: 4
                }
            }
        },

        xAxis: {
            type: 'datetime',
            labels: {
                format: '{value:%m/%d/%Y}',
            },
            title: {
                text: '',
                y: -50
            },
        },
        yAxis: {
            title: {
                y: 0,
                x: 2,
                text: "",
            },
            labels: {
                format: '${value:.2f}'
            }
        },

        legend: {
            enabled: true,
            itemStyle: {
                fontSize: "11px"
            },
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            floating: true,
            maxHeight: 70,
            y: 20,
            navigation: {
                activeColor: '#3E576F',
                animation: true,
                arrowSize: 9,
                inactiveColor: '#CCC',
                style: {
                    fontWeight: 'bold',
                    color: '#333',
                    fontSize: '11px'
                }
            }
        },
        credits: {
            enabled: false
        },
        series: data1,

    });
}
get_marketplace_chart();


