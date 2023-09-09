//filter dropdowns
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "Spirits_Categories", "Select Spirits Categories");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "Spirits_Sub_Categories", "Select Spirits Sub Categories");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "wine_categories", "Select Wine Categories");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "Wine_Sub_Categories", "Select Wine Sub Categories");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "Beer_Categories", "Select Beer Categories");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "Beer_Sub_Categories", "Select Beer Sub Categories");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "supplier", "Select Supplier");


//Overall Performance charts
//line chart
var e = document.querySelectorAll(".mixed-widget-7-chart");
[].slice.call(e).map((function (e) {
    var t = parseInt(KTUtil.css(e, "height"));
    if (e) {
        var a = e.getAttribute("data-kt-chart-color"),
            o = KTUtil.getCssVariableValue("--bs-gray-500"),
            s = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
            r = KTUtil.getCssVariableValue("--bs-blue"),
            i = KTUtil.getCssVariableValue("--bs-light-blue")
        new ApexCharts(e, {
            series: [{
                name: "Mentions",
                data: [30, 30, 85, 40, 40, 43, 53, 43, 41, 40]
            }],
            chart: {
                fontFamily: "inherit",
                type: "area",
                height: 220,
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
                colors: [r]
            },
            xaxis: {
                categories: [["1/29/23-","1/29/23"], ["1/29/23-","1/29/23"], ["1/29/23-","1/29/23"], ["1/29/23-","1/29/23"], ["1/29/23-","1/29/23"], ["1/29/23-","1/29/23"],["1/29/23-","1/29/23"], ["1/29/23-","1/29/23"],["1/29/23-","1/29/23"], ["1/29/23-","1/29/23"]],
                axisBorder: {
                    show: !1
                },
                axisTicks: {
                    show: !1
                },
                tickPlacement: 'on',
                // tickAmount: 2,

                labels: {
                    show: !0,
                    rotate: 0,
                    hideOverlappingLabels: false,
                    // trim:true,
                    style: {
                        colors: o,
                        fontSize: "11px"
                    }
                },
                crosshairs: {
                    position: "front",
                    stroke: {
                        color: r,
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
                max: 100,
                floating: false,
                labels: {
                    style: {
                        colors: o,
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
                },
                y: {
                    formatter: function (e) {
                        return e + "%"
                    }
                }
            },
            colors: [i],
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
                colors: [i],
                strokeColor: [r],
                strokeWidth: 3
            }
        }).render()
    }
}))

//supplier bar charts
var KTCardsWidget1 = {
    init: function () {
        ! function () {
            var e = document.getElementById("kt_card_widget_1_chart");
            if (e) {
                var a = parseInt(KTUtil.css(e, "height")),
                    labelColor = KTUtil.getCssVariableValue('--bs-gray-500'),
                    t = KTUtil.getCssVariableValue("--bs-gray-900"),
                    l = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                    o = KTUtil.getCssVariableValue("--bs-blue"),
                    r = KTUtil.getCssVariableValue("--bs-gray-300"),
                    i = new ApexCharts(e, {
                        series: [{
                            name: "Share of Voice",
                            data: [90, 18, 25, 30, 0, 40, 5, 3, 20, 2, 5]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "bar",
                            height: 95,
                            toolbar: {
                                show: !1
                            },
                            sparkline: {
                                enabled: !1
                            }
                        },
                        plotOptions: {
                            bar: {
                                horizontal: !1,
                                borderRadius: 2,
                                dataLabels: {
                                    position: 'bottom'
                                }
                            }
                        },
                        legend: {
                            show: !1
                        },
                        dataLabels: {
                            enabled: !1,
                            style: {
                                colors: [t]
                            },
                            formatter: function (e) {
                                return e + "%"
                            }
                        },
                        stroke: {
                            show: !0,
                            width: 9,
                            colors: ["transparent"]
                        },
                        xaxis: {
                            categories: ["1/2/23", "2/2/23", "3/2/23", "4/2/23", "5/2/23", "6/2/23", "7/2/23", "8/2/23", "9/2/23", "10/2/23", "11/2/23"],
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !1
                            },
                            tickPlacement: 'on',
                            // tickAmount: 2,
                            labels: {
                                show: !0,
                                rotate: 0,
                                hideOverlappingLabels: false,
                                style: {
                                    colors: labelColor,
                                    fontSize: "11px"
                                }
                            },
                            tooltip: {
                                enabled: !1,
                                formatter: void 0,
                                offsetY: 0,
                                style: {
                                    fontSize: "11px"
                                }
                            }
                        },
                        yaxis: {
                            show: true,
                            tickAmount: 2,
                            min: 0,
                            max: 100,

                            floating: false,
                            labels: {
                                style: {
                                    colors: labelColor,
                                    fontSize: "11px"
                                },
                                formatter: function (e) {
                                    return e.toFixed(0) + "%";
                                },
                                offsetX: -10,
                            }
                        },
                        fill: {
                            type: "solid"
                        },
                        states: {
                            normal: {
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            },
                            hover: {
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            },
                            active: {
                                allowMultipleDataPointsSelection: false,
                                filter: {
                                    type: 'none',
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
                        colors: [o, r],
                        grid: {
                            // show: false,
                            borderColor: l,
                            strokeDashArray: 4,
                            yaxis: {
                                lines: {
                                    show: true
                                }
                            },
                            padding: {
                                top: -10,
                                right: 0,
                                bottom: -10,
                                left: 0
                            },
                        }
                    });
                setTimeout((function () {
                    i.render()
                }), 300)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTCardsWidget1), KTUtil.onDOMContentLoaded((function () {
    KTCardsWidget1.init()
}));

var KTCardsWidget2 = {
    init: function () {
        ! function () {
            var e = document.getElementById("kt_card_widget_2_chart");
            if (e) {
                var a = parseInt(KTUtil.css(e, "height")),
                    labelColor = KTUtil.getCssVariableValue('--bs-gray-500'),
                    t = KTUtil.getCssVariableValue("--bs-gray-900"),
                    l = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                    o = KTUtil.getCssVariableValue("--bs-blue"),
                    r = KTUtil.getCssVariableValue("--bs-gray-300"),
                    i = new ApexCharts(e, {
                        series: [{
                            name: "Share of Voice",
                            data: [90, 18, 25, 30, 0, 40, 5, 3, 20, 2, 5]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "bar",
                            height: 95,
                            toolbar: {
                                show: !1
                            },
                            sparkline: {
                                enabled: !1
                            }
                        },
                        plotOptions: {
                            bar: {
                                horizontal: !1,
                                borderRadius: 2,
                                dataLabels: {
                                    position: 'bottom'
                                }
                            }
                        },
                        legend: {
                            show: !1
                        },
                        dataLabels: {
                            enabled: !1,
                            style: {
                                colors: [t]
                            },
                            formatter: function (e) {
                                return e + "%"
                            }
                        },
                        stroke: {
                            show: !0,
                            width: 9,
                            colors: ["transparent"]
                        },
                        xaxis: {
                            categories: ["1/2/23", "2/2/23", "3/2/23", "4/2/23", "5/2/23", "6/2/23", "7/2/23", "8/2/23", "9/2/23", "10/2/23", "11/2/23"],
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !1
                            },
                            tickPlacement: 'on',
                            // tickAmount: 2,
                            labels: {
                                show: !0,
                                rotate: 0,
                                hideOverlappingLabels: false,
                                style: {
                                    colors: labelColor,
                                    fontSize: "11px"
                                }
                            },
                            tooltip: {
                                enabled: !1,
                                formatter: void 0,
                                offsetY: 0,
                                style: {
                                    fontSize: "11px"
                                }
                            }
                        },
                        yaxis: {
                            show: true,
                            tickAmount: 2,
                            min: 0,
                            max: 100,

                            floating: false,
                            labels: {
                                style: {
                                    colors: labelColor,
                                    fontSize: "11px"
                                },
                                formatter: function (e) {
                                    return e.toFixed(0) + "%";
                                },
                                offsetX: -10,
                            }
                        },
                        fill: {
                            type: "solid"
                        },
                        states: {
                            normal: {
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            },
                            hover: {
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            },
                            active: {
                                allowMultipleDataPointsSelection: false,
                                filter: {
                                    type: 'none',
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
                        colors: [o, r],
                        grid: {
                            // show: false,
                            borderColor: l,
                            strokeDashArray: 4,
                            yaxis: {
                                lines: {
                                    show: true
                                }
                            },
                            padding: {
                                top: -10,
                                right: 0,
                                bottom: -10,
                                left: 0
                            },
                        }
                    });
                setTimeout((function () {
                    i.render()
                }), 300)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTCardsWidget2), KTUtil.onDOMContentLoaded((function () {
    KTCardsWidget2.init()
}));

var KTCardsWidget3 = {
    init: function () {
        ! function () {
            var e = document.getElementById("kt_card_widget_3_chart");
            if (e) {
                var a = parseInt(KTUtil.css(e, "height")),
                    labelColor = KTUtil.getCssVariableValue('--bs-gray-500'),
                    t = KTUtil.getCssVariableValue("--bs-gray-900"),
                    l = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                    o = KTUtil.getCssVariableValue("--bs-blue"),
                    r = KTUtil.getCssVariableValue("--bs-gray-300"),
                    i = new ApexCharts(e, {
                        series: [{
                            name: "Share of Voice",
                            data: [90, 18, 25, 30, 0, 40, 5, 3, 20, 2, 5]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "bar",
                            height: 95,
                            toolbar: {
                                show: !1
                            },
                            sparkline: {
                                enabled: !1
                            }
                        },
                        plotOptions: {
                            bar: {
                                horizontal: !1,
                                borderRadius: 2,
                                dataLabels: {
                                    position: 'bottom'
                                }
                            }
                        },
                        legend: {
                            show: !1
                        },
                        dataLabels: {
                            enabled: !1,
                            style: {
                                colors: [t]
                            },
                            formatter: function (e) {
                                return e + "%"
                            }
                        },
                        stroke: {
                            show: !0,
                            width: 9,
                            colors: ["transparent"]
                        },
                        xaxis: {
                            categories: ["1/2/23", "2/2/23", "3/2/23", "4/2/23", "5/2/23", "6/2/23", "7/2/23", "8/2/23", "9/2/23", "10/2/23", "11/2/23"],
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !1
                            },
                            tickPlacement: 'on',
                            // tickAmount: 2,
                            labels: {
                                show: !0,
                                rotate: 0,
                                hideOverlappingLabels: false,
                                style: {
                                    colors: labelColor,
                                    fontSize: "11px"
                                }
                            },
                            tooltip: {
                                enabled: !1,
                                formatter: void 0,
                                offsetY: 0,
                                style: {
                                    fontSize: "11px"
                                }
                            }
                        },
                        yaxis: {
                            show: true,
                            tickAmount: 2,
                            min: 0,
                            max: 100,

                            floating: false,
                            labels: {
                                style: {
                                    colors: labelColor,
                                    fontSize: "11px"
                                },
                                formatter: function (e) {
                                    return e.toFixed(0) + "%";
                                },
                                offsetX: -10,
                            }
                        },
                        fill: {
                            type: "solid"
                        },
                        states: {
                            normal: {
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            },
                            hover: {
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            },
                            active: {
                                allowMultipleDataPointsSelection: false,
                                filter: {
                                    type: 'none',
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
                        colors: [o, r],
                        grid: {
                            // show: false,
                            borderColor: l,
                            strokeDashArray: 4,
                            yaxis: {
                                lines: {
                                    show: true
                                }
                            },
                            padding: {
                                top: -10,
                                right: 0,
                                bottom: -10,
                                left: 0
                            },
                        }
                    });
                setTimeout((function () {
                    i.render()
                }), 300)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTCardsWidget3), KTUtil.onDOMContentLoaded((function () {
    KTCardsWidget3.init()
}));

var KTCardsWidget4 = {
    init: function () {
        ! function () {
            var e = document.getElementById("kt_card_widget_4_chart");
            if (e) {
                var a = parseInt(KTUtil.css(e, "height")),
                    labelColor = KTUtil.getCssVariableValue('--bs-gray-500'),
                    t = KTUtil.getCssVariableValue("--bs-gray-900"),
                    l = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                    o = KTUtil.getCssVariableValue("--bs-blue"),
                    r = KTUtil.getCssVariableValue("--bs-gray-300"),
                    i = new ApexCharts(e, {
                        series: [{
                            name: "Share of Voice",
                            data: [90, 18, 25, 30, 0, 40, 5, 3, 20, 2, 5]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "bar",
                            height: 95,
                            toolbar: {
                                show: !1
                            },
                            sparkline: {
                                enabled: !1
                            }
                        },
                        plotOptions: {
                            bar: {
                                horizontal: !1,
                                borderRadius: 2,
                                dataLabels: {
                                    position: 'bottom'
                                }
                            }
                        },
                        legend: {
                            show: !1
                        },
                        dataLabels: {
                            enabled: !1,
                            style: {
                                colors: [t]
                            },
                            formatter: function (e) {
                                return e + "%"
                            }
                        },
                        stroke: {
                            show: !0,
                            width: 9,
                            colors: ["transparent"]
                        },
                        xaxis: {
                            categories: ["1/2/23", "2/2/23", "3/2/23", "4/2/23", "5/2/23", "6/2/23", "7/2/23", "8/2/23", "9/2/23", "10/2/23", "11/2/23"],
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !1
                            },
                            tickPlacement: 'on',
                            // tickAmount: 2,
                            labels: {
                                show: !0,
                                rotate: 0,
                                hideOverlappingLabels: false,
                                style: {
                                    colors: labelColor,
                                    fontSize: "11px"
                                }
                            },
                            tooltip: {
                                enabled: !1,
                                formatter: void 0,
                                offsetY: 0,
                                style: {
                                    fontSize: "11px"
                                }
                            }
                        },
                        yaxis: {
                            show: true,
                            tickAmount: 2,
                            min: 0,
                            max: 100,

                            floating: false,
                            labels: {
                                style: {
                                    colors: labelColor,
                                    fontSize: "11px"
                                },
                                formatter: function (e) {
                                    return e.toFixed(0) + "%";
                                },
                                offsetX: -10,
                            }
                        },
                        fill: {
                            type: "solid"
                        },
                        states: {
                            normal: {
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            },
                            hover: {
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            },
                            active: {
                                allowMultipleDataPointsSelection: false,
                                filter: {
                                    type: 'none',
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
                        colors: [o, r],
                        grid: {
                            // show: false,
                            borderColor: l,
                            strokeDashArray: 4,
                            yaxis: {
                                lines: {
                                    show: true
                                }
                            },
                            padding: {
                                top: -10,
                                right: 0,
                                bottom: -10,
                                left: 0
                            },
                        }
                    });
                setTimeout((function () {
                    i.render()
                }), 300)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTCardsWidget4), KTUtil.onDOMContentLoaded((function () {
    KTCardsWidget4.init()
}));
var KTCardsWidget5 = {
    init: function () {
        ! function () {
            var e = document.getElementById("kt_card_widget_5_chart");
            if (e) {
                var a = parseInt(KTUtil.css(e, "height")),
                    labelColor = KTUtil.getCssVariableValue('--bs-gray-500'),
                    t = KTUtil.getCssVariableValue("--bs-gray-900"),
                    l = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                    o = KTUtil.getCssVariableValue("--bs-blue"),
                    r = KTUtil.getCssVariableValue("--bs-gray-300"),
                    i = new ApexCharts(e, {
                        series: [{
                            name: "Share of Voice",
                            data: [90, 18, 25, 30, 0, 40, 5, 3, 20, 2, 5]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "bar",
                            height: 95,
                            toolbar: {
                                show: !1
                            },
                            sparkline: {
                                enabled: !1
                            }
                        },
                        plotOptions: {
                            bar: {
                                horizontal: !1,
                                borderRadius: 2,
                                dataLabels: {
                                    position: 'bottom'
                                }
                            }
                        },
                        legend: {
                            show: !1
                        },
                        dataLabels: {
                            enabled: !1,
                            style: {
                                colors: [t]
                            },
                            formatter: function (e) {
                                return e + "%"
                            }
                        },
                        stroke: {
                            show: !0,
                            width: 9,
                            colors: ["transparent"]
                        },
                        xaxis: {
                            categories: ["1/2/23", "2/2/23", "3/2/23", "4/2/23", "5/2/23", "6/2/23", "7/2/23", "8/2/23", "9/2/23", "10/2/23", "11/2/23"],
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !1
                            },
                            tickPlacement: 'on',
                            // tickAmount: 2,
                            labels: {
                                show: !0,
                                rotate: 0,
                                hideOverlappingLabels: false,
                                style: {
                                    colors: labelColor,
                                    fontSize: "11px"
                                }
                            },
                            tooltip: {
                                enabled: !1,
                                formatter: void 0,
                                offsetY: 0,
                                style: {
                                    fontSize: "11px"
                                }
                            }
                        },
                        yaxis: {
                            show: true,
                            tickAmount: 2,
                            min: 0,
                            max: 100,

                            floating: false,
                            labels: {
                                style: {
                                    colors: labelColor,
                                    fontSize: "11px"
                                },
                                formatter: function (e) {
                                    return e.toFixed(0) + "%";
                                },
                                offsetX: -10,
                            }
                        },
                        fill: {
                            type: "solid"
                        },
                        states: {
                            normal: {
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            },
                            hover: {
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            },
                            active: {
                                allowMultipleDataPointsSelection: false,
                                filter: {
                                    type: 'none',
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
                        colors: [o, r],
                        grid: {
                            // show: false,
                            borderColor: l,
                            strokeDashArray: 4,
                            yaxis: {
                                lines: {
                                    show: true
                                }
                            },
                            padding: {
                                top: -10,
                                right: 0,
                                bottom: -10,
                                left: 0
                            },
                        }
                    });
                setTimeout((function () {
                    i.render()
                }), 300)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTCardsWidget5), KTUtil.onDOMContentLoaded((function () {
    KTCardsWidget5.init()
}));

var KTCardsWidget6 = {
    init: function () {
        ! function () {
            var e = document.getElementById("kt_card_widget_6_chart");
            if (e) {
                var a = parseInt(KTUtil.css(e, "height")),
                    labelColor = KTUtil.getCssVariableValue('--bs-gray-500'),
                    t = KTUtil.getCssVariableValue("--bs-gray-900"),
                    l = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                    o = KTUtil.getCssVariableValue("--bs-blue"),
                    r = KTUtil.getCssVariableValue("--bs-gray-300"),
                    i = new ApexCharts(e, {
                        series: [{
                            name: "Share of Voice",
                            data: [90, 18, 25, 30, 0, 40, 5, 3, 20, 2, 5]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "bar",
                            height: 95,
                            toolbar: {
                                show: !1
                            },
                            sparkline: {
                                enabled: !1
                            }
                        },
                        plotOptions: {
                            bar: {
                                horizontal: !1,
                                borderRadius: 2,
                                dataLabels: {
                                    position: 'bottom'
                                }
                            }
                        },
                        legend: {
                            show: !1
                        },
                        dataLabels: {
                            enabled: !1,
                            style: {
                                colors: [t]
                            },
                            formatter: function (e) {
                                return e + "%"
                            }
                        },
                        stroke: {
                            show: !0,
                            width: 9,
                            colors: ["transparent"]
                        },
                        xaxis: {
                            categories: ["1/2/23", "2/2/23", "3/2/23", "4/2/23", "5/2/23", "6/2/23", "7/2/23", "8/2/23", "9/2/23", "10/2/23", "11/2/23"],
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !1
                            },
                            tickPlacement: 'on',
                            // tickAmount: 2,
                            labels: {
                                show: !0,
                                rotate: 0,
                                hideOverlappingLabels: false,
                                style: {
                                    colors: labelColor,
                                    fontSize: "11px"
                                }
                            },
                            tooltip: {
                                enabled: !1,
                                formatter: void 0,
                                offsetY: 0,
                                style: {
                                    fontSize: "11px"
                                }
                            }
                        },
                        yaxis: {
                            show: true,
                            tickAmount: 2,
                            min: 0,
                            max: 100,

                            floating: false,
                            labels: {
                                style: {
                                    colors: labelColor,
                                    fontSize: "11px"
                                },
                                formatter: function (e) {
                                    return e.toFixed(0) + "%";
                                },
                                offsetX: -10,
                            }
                        },
                        fill: {
                            type: "solid"
                        },
                        states: {
                            normal: {
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            },
                            hover: {
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            },
                            active: {
                                allowMultipleDataPointsSelection: false,
                                filter: {
                                    type: 'none',
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
                        colors: [o, r],
                        grid: {
                            // show: false,
                            borderColor: l,
                            strokeDashArray: 4,
                            yaxis: {
                                lines: {
                                    show: true
                                }
                            },
                            padding: {
                                top: -10,
                                right: 0,
                                bottom: -10,
                                left: 0
                            },
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
//


//expand brand breakdown
$('.view_all').click(function () {
    let scroll_element = $(this).closest('.scroll-outer').find('.scroll-y');
    scroll_element.toggleClass('expand')
    if (scroll_element.hasClass("expand")) {
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

$(document).ready(function () {
    // console.log('outer' + ($('.scroll-outer .scroll-y').height() + 1))
    // console.log('inner' + $('.scroll-outer .scroll-y').prop('scrollHeight'))
    if (($('.scroll-outer .scroll-y').height() + 1) <= $('.scroll-outer .scroll-y').prop('scrollHeight')) {
        $('.view_all').show();
    } else {
        $('.view_all').hide();
    }
})

//brand breakdown bar chart
var element = document.getElementById('kt_apexcharts_1');
var height = parseInt(KTUtil.css(element, 'height'));
var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
var borderDashedColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');
var baseColor = KTUtil.getCssVariableValue('--bs-blue');
var secondaryColor = KTUtil.getCssVariableValue('--bs-gray-300');
var blue_100 = KTUtil.getCssVariableValue('--bs-blue-100');
var blue_200 = KTUtil.getCssVariableValue('--bs-blue-200');
var blue_300 = KTUtil.getCssVariableValue('--bs-blue-300');
var blue_400 = KTUtil.getCssVariableValue('--bs-blue-400');
var blue_500 = KTUtil.getCssVariableValue('--bs-blue-500');
var blue_600 = KTUtil.getCssVariableValue('--bs-blue-600');
var blue_700 = KTUtil.getCssVariableValue('--bs-blue-700');
var blue_800 = KTUtil.getCssVariableValue('--bs-blue-800');
var blue_900 = KTUtil.getCssVariableValue('--bs-blue-900');
var blue_dark = KTUtil.getCssVariableValue('--bs-blue-dark');
var options = {
    series: [{
        name: 'Newton',
        data: [40, 20, 58, 30, 19, 42, 0, 27, 78, 42, 50]
    }, {
        name: 'Volcan De Mi Tierra',
        data: [30, 62, 32, 60, 10, 22, 28, 33, 32, 72, 25]
    },
    {
        name: 'Belvedere',
        data: [75, 35, 40, 35, 41, 10, 27, 10, 20, 40, 25]
    }, {
        name: 'Stella Rosa',
        data: [25, 75, 50, 22, 5, 20, 50, 22, 37, 20, 5]
    },
    {
        name: 'Belvedere',
        data: [30, 8, 20, 83, 65, 36, 35, 8, 3, 6, 15]
    }
    ],
    chart: {
        fontFamily: "inherit",
        type: "bar",
        height: height,

        toolbar: {
            show: !1
        },
        sparkline: {
            enabled: !1
        }
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            borderRadius: 2,
            dataLabels: {
                position: 'bottom'
            }
        }
    },
    legend: {
        show: !1
    },
    dataLabels: {
        enabled: !1,
        style: {
            colors: [baseColor]
        },
        formatter: function (e) {
            return e + "%"
        }
    },
    stroke: {
        show: !0,
        width: 2,
        colors: ["transparent"]
    },
    xaxis: {
        categories: ["1/2/23", "2/2/23", "3/2/23", "4/2/23", "5/2/23", "6/2/23", "7/2/23", "8/2/23", "9/2/23", "10/2/23", "11/2/23"],
        axisBorder: {
            show: !1
        },
        axisTicks: {
            show: !1
        },
        tickPlacement: 'between',
        tickAmount: 3,
        labels: {
            show: !0,
            rotate: 0,
            style: {
                colors: labelColor,
                fontSize: "11px"
            }
        },
        tooltip: {
            enabled: !1,
            formatter: void 0,
            offsetY: 0,
            style: {
                fontSize: "11px"
            }
        }
    },
    yaxis: {
        show: true,
        tickAmount: 4,
        min: 0,
        max: 100,

        floating: false,
        labels: {
            style: {
                colors: labelColor,
                fontSize: "11px"
            },
            formatter: function (e) {
                return e.toFixed(0) + "%";
            },
            offsetX: -10,
        }
    },
    fill: {
        type: "solid"
    },
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        hover: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'none',
                value: 0
            }
        }
    },
    tooltip: {
        shared: true,
        intersect: false,
        style: {
            fontSize: "12px"
        },
        y: {
            formatter: function (e) {
                return e + "%"
            }
        }
    },
    colors: [blue_100, blue_200, blue_300, blue_400, blue_500, blue_600, blue_700, blue_800, blue_900, blue_dark],
    grid: {
        borderColor: borderDashedColor,
        strokeDashArray: 4,
        yaxis: {
            lines: {
                show: true
            }
        },
        padding: {
            top: -10,
            right: 0,
            bottom: -10,
            left: 0
        },
    }
};
//var chart = new ApexCharts(element, options);
//chart.render();


//Marketing Content lazy loading
const container = document.querySelector(".marketing-content-outer");
let limit = 1;
let pageCount = 1;
const getPost = async () => {
    const response = await fetch(`https://run.mocky.io/v3/ec110ad5-fb8f-4b13-ae63-b6dca33850ad/page/?_limit=${limit}$_page=${pageCount}`);
    //console.log(response);
    const data = await response.json();
    // console.log(data[0]);
    data.map((curElm, index) => {
        const htmlData = `
      <div class="col-sm-12 mb-8">
      <div class="card card-stretch marketing-content h-100 fs-5 hover-shadow">
         <div class="card-body p-0">
            <div class="row">
               <div class="col-md-6 col-xxxl2-5">
                  <div class="media-text p-4 p-md-5">
                     <div class="media-title mb-4 d-flex align-items-center pt-1">
                        <div class="img-wrapper border border-gray-300 border-dashed rounded me-3 mw-85px min-w-85px mh-85px min-h-85px">
                           <img src="${curElm.brand_logo}" alt="" class="img-fluid">
                        </div>
                        <h3 class="text-primary fw-bold m-0">${curElm.title}
                           <!-- <span class="text-muted d-block mt-1 fs-6 fw-normal">Marketplace</span>-->
                        </h3>
                     </div>
                     <p class="more">${curElm.text}</p>
                     <div class="button-row pt-1 pt-md-2 mt-5">
                        <button class="btn  fs-6 btn-primary me-1">View Post</button>
                     </div>
                  </div>
               </div>
               <div class="col-md-6 col-xxxl2-7 mt-5 mt-md-0">
                  <div class="media-image pt-md-5 pb-4 pb-md-5 px-4 h-100 d-flex flex-column">
                     <div class="channel d-flex align-items-center fw-bold text-gray-800 mb-5">
                        <div class="social-icon img-wrapper w-30px h-30px me-2">
                            <img src="${curElm.channel}" class="p-0" alt="">
                        </div>
                        Web
                     </div>
                     <div class="img-wrapper border rounded bg-light flex-grow-1 min-h-auto mh-400px">
                        <img src="${curElm.featureimage}" class="img-fluid p-4">
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div> 
    `;
        container.insertAdjacentHTML('beforeend', htmlData);
    })

    // code for character limit for see more link
    $(document).ready(function () {
        // Configure/customize these variables.
        var showChar = 181; // How many characters are shown by default
        var ellipsestext = "...";
        var moretext = "See More ";
        var lesstext = "See Less";
        $('.more').each(function () {
            var content = $(this).html();
            if (content.length > showChar) {
                var c = content.substr(0, showChar);
                var h = content.substr(showChar, content.length - showChar);
                var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span class="text">' + h + '</span><a href="" class="morelink text-danger hvr-icon-down">' + moretext + '</a></span>';
                $(this).html(html);
            }
        });
        $(".morelink").click(function () {
            if ($(this).hasClass("less")) {
                $(this).removeClass("less");
                $(this).html(moretext);
                $(this).prev().hide('100');
                $(this).parent().prev().show('100');
            } else {
                $(this).addClass("less");
                $(this).html(lesstext);
                $(this).prev().show('100', function () {
                    $(this).css('display', 'inherit');
                });
                $(this).parent().prev().hide('100');
            }
            $(this).prev('.text').find('.text').show('100', function () {
                $(this).css('display', 'inherit');
            });
            $(this).prev('.text').find('.moreellipses').hide();
            return false;
        });
    });
    //-------------------------------

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
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
        showData();
    }
})
//
