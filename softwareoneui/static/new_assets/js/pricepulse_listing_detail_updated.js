//SKUs Dropdown with logos
function formatsku(sku) {
    // console.log(sku);
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
            $.fn.select2.defaults.set('closeOnSelect', false);
        });

        $('#sku').select2({
            placeholder: "Select SKUs",
            data: selectData_sku,
            maximumSelectionLength: 4,
            templateResult: formatsku,
            templateSelection: formatsku
        });
    });
    //---------------------------
});
//------------------

//Add SKU dropdown
JDSelect2("https://run.mocky.io/v3/c6f52535-5f71-4ae2-a688-c1ff6aa5dabe", "add-tag", "Add Multiple Tags");


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
        
      var linechart =  new ApexCharts(e, {
            series: [
                {
                    name: "Proper Twelve Irish Whiskey (750ml)",
                    data: [30, 30, 85, 40, 40, 43, 53, 43, 41, 40, 68],
                }             
            ],
            chart: {
                fontFamily: "inherit",
                type: "area",
                height: 300,
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
      })
	$('#sku').select2().on('select2:select', function (e) {
	    var select_val = $(e.params.data.element).text()
	    //    console.log(select_val)
	    $('#apply-sku').click(function () {
		linechart.appendSeries(
		    {
			name: `${select_val}`,
			data: [20, 50, 65, 30, 20, 23, 33, 43, 51, 70, 78]
		    })
	    });
	});

	linechart.render()
    }
}))


//Availiability Status Heat Map
var e = document.querySelectorAll("#chart");
[].slice.call(e).map((function (e) {
    var t = parseInt(KTUtil.css(e, "height"));
    if (e) {
        var gray_300 = KTUtil.getCssVariableValue("--bs-gray-300"),
	    gray_500 = KTUtil.getCssVariableValue("--bs-gray-500"),
	    green = KTUtil.getCssVariableValue('--bs-success'),
	    red = KTUtil.getCssVariableValue('--bs-lighter-danger'),
	    light_green = KTUtil.getCssVariableValue('--bs-light-success'),
	    light_red = KTUtil.getCssVariableValue('--bs-light-danger')
        var stockChart = new ApexCharts(e, {
            series: [{
                name: `Proper Twelve Irish Whiskey (750ml)`,
                data: [0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0]
            }
            ],
            chart: {
                fontFamily: "inherit",
                height: 220,
                type: 'heatmap',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                heatmap: {
                    radius: 0,
                    enableShades: false,
                    colorScale: {
                        ranges: [{
                            from: 0,
                            to: 0,
                            name: 'Available & In Stock',
                            color: green
                        },
                        {
                            from: 1,
                            to: 1,
                            name: 'Unavailable',
                            color: red,
                        },
                        ],
                    },

                }
            },
            legend: {
                show: true,
                position: 'bottom',
                showForSingleSeries: true,
		markers: {
		    radius: 12,
		    fillColors: [green, red],
		},
		//height: 48,
            },

            dataLabels: {
                enabled: false,
            },
	    
            stroke: {
                width: 0.2,
            },
            xaxis: {
                categories: ["5/1/23", "5/2/23", "5/3/23", "5/4/23", "5/5/23", "5/6/23", "5/7/23", "5/8/23", "5/9/23", "5/10/23", "5/11/23"],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                tickPlacement: 'on',
                // tickAmount: 3,
                labels: {
                    show: true,
                    rotate: 0,
                    hideOverlappingLabels: false,
                    style: {
                        colors: gray_500,
                        fontSize: "11px"
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
                floating: true,
                labels: {
                    align: "left",
                    style: {
                        colors: ['#f1f1f1'],
                        fontSize: '10px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 500,
                        cssClass: 'apexcharts-yaxis-label-style',
                        offsetY: -50,
                    },
                    offsetX: 20,
                },

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
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: "none",
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: "12px",
                },
                y: {
                    formatter: function (val) {
                        return ''
                    },
                    title: {
                        formatter: function (seriesName) {
                            return ""
                        }
                    },
                }
            },
            colors: [green, red],
            grid: {
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    // left: 0
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
                colors: [light_green,light_red],
                strokeColor: [green, red],
                strokeWidth: 3
            }
        })


        $('#sku').select2().on('select2:select', function (e) {
            var select_val = $(e.params.data.element).text()
            //    console.log(select_val)
            $('#apply-sku').click(function () {
                stockChart.appendSeries({
                    name: `${select_val}`,
                    data: [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0]
                })
            });
        });
        stockChart.render()
    }
}))

var e = document.querySelectorAll("#chart2");
[].slice.call(e).map((function (e) {
    var t = parseInt(KTUtil.css(e, "height"));
    if (e) {
        var gray_300 = KTUtil.getCssVariableValue("--bs-gray-300"),
	    gray_500 = KTUtil.getCssVariableValue("--bs-gray-500"),
	    gray_900 = KTUtil.getCssVariableValue("--bs-gray-900"),
	    blue = KTUtil.getCssVariableValue("--bs-blue"),
	    light_blue = KTUtil.getCssVariableValue("--bs-light-blue")
           
        var percChart = new ApexCharts(e, {
            series: [{
                name: 'Proper Twelve Irish Whiskey (750ml)',
                data: [12]
            }
            ],
            chart: {
                fontFamily: "inherit",
                height: 220,
                type: 'heatmap',
                toolbar: {
                    show: false
                },
                events: {
                    animationEnd: function (chartContext, options) {
                        var perc_value = $('.apexcharts-heatmap-series:only-child').find('.apexcharts-data-labels').text()
                        //console.log(perc_value)
                        $('.bg-perc .apexcharts-heatmap-series:only-child').find('rect').css('fill', 'rgba(68,158,221,' + perc_value + ')')
                    }
                }
            },

            plotOptions: {
                heatmap: {
                    enableShades: true,
                    shadeIntensity: 1,
                    colorScale: {
                        ranges: [{
                            from: 0,
                            to: 0,
                            name: 'Overall Percentage in Stock',
                            color: blue
                        },
                        ],
                    },
                }
            },

            legend: {
                show: true,
                position: 'bottom',
                showForSingleSeries: true,
		markers: {
		    radius: 12,
		    fillColors:[blue],
		},
		//height: 48,
            },

            dataLabels: {
                enabled: true,
                style: {
                    colors: [gray_900],
                    fontWeight: 600,
                    fontSize: 13,
                },
                formatter: function (e) {
                    return e + "%"
                }
            },

            stroke: {
                width: 0.2,
            },
            xaxis: {
                // categories: [["1/29/23-","1/29/23"]],
                categories: ["5/1/23-5/25/23"],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                tickPlacement: 'on',
                //   tickAmount: 1,

                labels: {
                    show: !0,
                    rotate: 0,
                    // hideOverlappingLabels: false,
                    style: {
                        colors: gray_500,
                        fontSize: "11px"
                    }
                },
                crosshairs: {
                    show: false,
                },
                tooltip: {
                    enabled: false,
                    formatter: void 0,
                    offsetY: 0,
                    style: {
                        fontSize: "11px"
                    }
                }
            },
            yaxis: {
                show: false,
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
                    allowMultipleDataPointsSelection: false,
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
                    show: true,
                },
                y: {
                    formatter: function (e) {
                        return e + "%";
                    },
                    title: {
                        formatter: function (seriesName) {
                            return seriesName + " was in stock"
                        }
                    },
                }

            },
            colors: [blue],
            grid: {
                padding: {
                    top: 0,
                    right: -30,
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
                colors: [light_blue],
                strokeColor: [blue],
                strokeWidth: 3
            }
        })

        $('#sku').select2().on('select2:select', function (e) {
            var select_val = $(e.params.data.element).text()
            //    console.log(select_val)
            $('#apply-sku').click(function () {
                percChart.appendSeries({
                    name: `${select_val}`,
                    data: [70]
                })
            });
        });
        $(document).ready(function () {
            var perc_value = $('.apexcharts-heatmap-series:only-child').find('.apexcharts-data-labels').text()
            console.log(perc_value)
            $('.bg-perc .apexcharts-heatmap-series:only-child').find('rect').css('fill', 'rgba(68,158,221,' + perc_value + ')')
        })
        percChart.render()
    }

}))



//close Add Select Dropdown on click of apply btn
$('.close_dropdown').click(function () {
    $(this).closest('.dropdown-menu').prev('.btn').removeClass('show');
    $(this).closest('.dropdown-menu').removeClass('show')
    $(this).closest('.dropdown-menu').prev('.btn').attr('aria-expanded', 'false')
})

$(document).ready(function () {
    var perc = $('.perc').text();
    console.log(perc)
    $('.perc-bg').css('background-color', 'rgba(68,158,221,' + perc + ')')
})

//disable apply button if sku is not selected
$('#sku').change(function () {
    if ($(this).val() == "") {
	// None of the options are selected
	$('#apply-sku').prop("disabled", true);
    } else {
	// At least one option is selected
	$('#apply-sku').prop("disabled", false);
    }
});
