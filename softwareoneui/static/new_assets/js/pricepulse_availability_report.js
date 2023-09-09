JDDatatable('https://run.mocky.io/v3/b0ba7833-5d4e-4a9b-89a4-00cb02b72168', "merchant_table_single_date", "");
JDDatatable('https://run.mocky.io/v3/7a79d268-a829-43da-90e2-a9bedc8ab47a', "merchant_table_multiple_date", "");
JDDatatable('https://run.mocky.io/v3/44c0ef16-cbba-4e5a-b5c2-a57256270ac9', "marketplace_table", "");

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
            scrollY: "40vh",
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



                //hide view all row btn
                $(function () {

                    if ($($('#marketplace_table')).closest('.dataTables_scrollBody').hasScrollBar() === false) {
                        console.log($($('#marketplace_table')).closest('.dataTables_scrollBody').hasScrollBar())
                        $($('#marketplace_table')).closest('.dataTables_wrapper').next().find('.view_all_row').hide()
                    } else {
                        console.log($($('#marketplace_table')).closest('.dataTables_scrollBody').hasScrollBar())
                        $($('#marketplace_table')).closest('.dataTables_wrapper').next().find('.view_all_row').show()
                    }
                    if ($($('#marketplace_table')).height() <= $($('#marketplace_table')).closest('.dataTables_scrollBody').height()) {
                        $($('#marketplace_table')).closest('.dataTables_wrapper').nextAll().find('.view_all_row').hide()
                    }
                });
                (function ($) {
                    $.fn.hasScrollBar = function () {
                        return this.get(0).scrollHeight > this.closest('.dataTables_scrollBody').height();
                    }
                })(jQuery);

                //show  tooltip and popover in datatable
                $('[data-bs-toggle="popover"]').popover();
                $('[data-bs-toggle="tooltip"]').tooltip();
                $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
                    $($.fn.dataTable.tables(true)).DataTable()
                        .columns.adjust()

                    //hide view all row btn
                    $(function () {
                        if ($($('#marketplace_table')).closest('.dataTables_scrollBody').hasScrollBar() === false) {

                            $($('#marketplace_table')).closest('.dataTables_wrapper').next().find('.view_all_row').hide()
                        } else {

                            $($('#marketplace_table')).closest('.dataTables_wrapper').next().find('.view_all_row').show()
                        }
                        if ($($('#merchant_table_multiple_date')).closest('.dataTables_scrollBody').hasScrollBar() === false) {

                            $($('#merchant_table_multiple_date')).closest('.dataTables_wrapper').next().find('.view_all_row').hide()
                        } else {
                            $($('#merchant_table_multiple_date')).closest('.dataTables_wrapper').next().find('.view_all_row').show()
                        }
                        if ($($('#marketplace_table')).height() <= $($('#marketplace_table')).closest('.dataTables_scrollBody').height()) {
                            $($('#marketplace_table')).closest('.dataTables_wrapper').nextAll().find('.view_all_row').hide()
                        }
                    });
                    (function ($) {
                        $.fn.hasScrollBar = function () {
                            return this.get(0).scrollHeight > this.closest('.dataTables_scrollBody').height();
                        }
                    })(jQuery);

                    if ($('.retailer_summary ').hasClass('active')) {
                        $('.retailer_summary_link').addClass('active')
                        $('.store_breakdown_link').removeClass('active')

                    }
                    if ($('.store_breakdown ').hasClass('active')) {
                        $('.store_breakdown_link').addClass('active')
                        $('.retailer_summary_link').removeClass('active')

                    }
                });
                //Marketplace Table
                $('.colored-cell.bg-lighter-success').parent('td').addClass('bg-lighter-success ')
                $('.colored-cell.bg-lighter-danger').parent('td').addClass('bg-lighter-danger')
                $('.td-link').closest('td').addClass('colored-cell-hover nav')
                $('.marketplace').click(function () {
                    $('.td-link').removeClass('active')
                    var text = $(this).closest('td').text();
                    var html = '<li class="ms-0 text-start d-flex align-items-center mx-2 my-1 p-2 bg-white text-gray-700 rounded"><strong class="fw-bold me-2 text-gray-900">Retailers/Marketplaces:</strong> ' + text + '</div>';
                    $(".pre-selected-filter").html(html);
                    $(".pre-selected-filter").closest('.outer-filter').removeClass('d-none');
                })

                //Merchant table
                $('.border-colored-cell .colored-cell').parent('td').addClass('td-border')

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
// Get headers data from API and create colDefArr
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

//Filter
JDSelect2("https://run.mocky.io/v3/29e83e63-a1c4-45ec-9e4c-f890bc42195a", "marketplace_retailer", "Select Marketplace");
JDSelect2("https://run.mocky.io/v3/54c8476c-37b8-4d24-90f9-1a5879874093", "state", "Select State")

//expand table vertically
$('.view_all_row').click(function () {
    $(this).parent().prevAll('.dataTables_wrapper').find('.dataTables_scrollBody').toggleClass('expand')
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

//Msg box for generate report
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

//Daterange picker
$(function () {
    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#kt_daterangepicker_4 div').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        var start_date = start.format('MMMM D, YYYY');
        var end_date = end.format('MMMM D, YYYY');

        if (start_date == end_date) {
            $('.single_date_view').removeClass('d-none')
            $('.multiple_Date_view').addClass('d-none')
            // $('.dialer').addClass('d-none')
            $($.fn.dataTable.tables(true)).DataTable()
                .columns.adjust()

            //hide view all row btn
            $(function () {
                if ($($('#merchant_table_single_date')).closest('.dataTables_scrollBody').hasScrollBar() === false) {
                    console.log('no signle scroll')
                    $($('#merchant_table_single_date')).closest('.dataTables_wrapper').nextAll().find('.view_all_row').hide()
                } else {
                    console.log('yes single scroll')
                    $($('#merchant_table_single_date')).closest('.dataTables_wrapper').nextAll().find('.view_all_row').show()
                }
            });
            (function ($) {
                $.fn.hasScrollBar = function () {
                    return this.get(0).scrollHeight > this.closest('.dataTables_scrollBody').height();
                }
            })(jQuery);
        } else {
            $('.single_date_view').addClass('d-none')
            $('.multiple_Date_view').removeClass('d-none')
            // $('.dialer').removeClass('d-none')
        }
    }

    $('#kt_daterangepicker_4').daterangepicker({
        startDate: start,
        endDate: end,
        opens: 'left',
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);


});

//Line Chart for SKUs
var e = document.querySelectorAll(".mixed-widget-8-chart");
[].slice.call(e).map((function (e) {
    var t = parseInt(KTUtil.css(e, "height"));
    if (e) {
        var  //color set for maximum 11 series
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

        new ApexCharts(e, {
            series: [
                {
                    name: "Bulleit Bourbon 750ml",
                    data: [30, 30, 85, 40, 40, 43, 53, 43, 41, 40, 68],
                },
                {
                    name: "Bulleit Bourbon 1.75L",
                    data: [20, 30, 35, 40, 40, 33, 33, 53, 51, 40, 48],
                },
                {
                    name: "Jack Daniels 750ml",
                    data: [20, 46, 35, 35, 30, 30, 33, 43, 41, 60, 78],
                },
                {
                    name: "Woodford Reserve 750ml",
                    data: [10, 26, 25, 20, 21, 25, 25, 30, 28, 28, 32],
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
                    padding: 10,
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
                    rotate: 0,
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
                colors: [light_green, light_blue, light_red, light_purple, light_gray_500, light_orange, light_cyan, light_blue_100, light_blue_900, light_gray_600, light_yellow],
                strokeColor: [green, blue, red, purple, gray_500, orange, cyan, blue_100, blue_900, gray_600, yellow],
                strokeWidth: 3
            }
        }).render()
    }
}))

//Today availability map Start================
var myPlot_today_availability = document.getElementById('avalability_map_today')
var green = KTUtil.getCssVariableValue('--bs-success')
var red = KTUtil.getCssVariableValue('--bs-danger')
var counter = 0;

data_today_availability = [{
    type: 'scattergeo',
    locationmode: 'USA-states',
    text: [
        {
            "name": "ABC Fine Wine & Spirits - Lakewood Ranch",
            "address": "Billings Logan Intl,Billings,MT,USA",
            "availability": "<span class='text-success'>In Stock</span>",
            "action": "#"
        },
        {
            "name": "Walmart - Wesley Chapel Supercenter (Walmart Supercenter No. 3418)",
            "address": "Tunica Municipal Airport,Tunica,MS,USA",
            "availability": "<span class='text-success'>In Stock</span>",
            "action": "#"
        },
        {
            "name": "ABC Fine Wine & Spirits - Northlake Blvd",
            "address": "George Bush Intercontinental,Houston,TX,USA",
            "availability": "<span class='text-danger'>Unavailable</span>",
            "action": "#"
        },
        {
            "name": "Walmart - Zephyrhills Supercenter (Walmart Supercenter No. 706)",
            "address": "Rochester International,Rochester,MN,USA",
            "availability": "<span class='text-danger'>Unavailable</span>",
            "action": "#"
        },
        {
            "name": "Walmart - Pensacola Neighborhood Market",
            "address": "Dubuque Municipal,Dubuque,IA,USA",
            "availability": "<span class='text-success'>In Stock</span>",
            "action": "#"
        },
        {
            "name": "Billings Logan",
            "address": "Chippewa Valley Regional,Eau Claire,WI,USA",
            "availability": "<span class='text-success'>In Stock</span>",
            "action": "#"
        },
        {
            "name": "BevMo! - Burlingame",
            "address": "Fayetteville Municipal,Fayetteville,NC,USA",
            "availability": "<span class='text-danger'>Unavailable</span>",
            "action": "#"
        },
        {
            "name": "BevMo! - Canoga Park",
            "address": "Sheppard AFB/Wichita Falls Municipal,Wichita Falls,TX,USA",
            "availability": "<span class='text-danger'>Unavailable</span>",
            "action": "#"
        },
        {
            "name": "Binnys - Chicago - South Loop",
            "address": "St. Petersburg-Clearwater International",
            "availability": "<span class='text-danger'>Unavailable</span>",
            "action": "#"
        },
        {
            "name": "Drizly - ABC Fine Wine & Spirits - Black Lake Road",
            "address": "Drizly - 1 West Dupont Circle Wines & Liquors",
            "availability": "<span class='text-danger'>Unavailable</span>",
            "action": "#"
        },
        {
            "name": "Drizly - ABC Fine Wine & Spirits - Oakland Park South",
            "address": "Outagamie County Regional,Appleton,WI,USA",
            "availability": "<span class='text-success'>In Stock</span>",
            "action": "#"
        },
        {
            "name": "Meijer - Benton Harbor",
            "address": "Chicago OHare International,Chicago,IL,USA",
            "availability": "<span class='text-success'>In Stock</span>",
            "action": "#"
        },
        {
            "name": "Meijer - Chesterfield Twp",
            "address": "William B Hartsfield-Atlanta Intl,Atlanta,GA,USA",
            "availability": "<span class='text-danger'>Unavailable</span>",
            "action": "#"
        },
        {
            "name": "Meijer - Flat Rock",
            "address": "Dallas-Fort Worth International,Dallas-Fort Worth,TX,USA",
            "availability": "<span class='text-success'>In Stock</span>",
            "action": "#"
        },
        {
            "name": "Spec's - Plano – Park Boulevard",
            "address": "Phoenix Sky Harbor International,Phoenix,AZ,USA",
            "availability": "<span class='text-success'>In Stock</span>",
            "action": "#"
        }, {
            "name": "Total Wine & More - Tukwila (South Side)",
            "address": "Denver Intl,Denver,CO,USA",
            "availability": "<span class='text-danger'>Unavailable</span>",
            "action": "#"
        },
    ],
    lon: [
        -108.5428611, -90.348816, -92.49798722, -90.70916722, -91.48507194, -78.88, -98.49189333, -82.68743944, -92.548828, -88.51947556, -87.90446417, -84.42694444, -97.0372, -112.0080556, -104.6670019, -95.33972222
    ],
    lat: [
        45.8076625, 34.681499, 43.90882639, 42.40295944, 44.86525722, 34.99147222, 33.98879611, 27.91076333, 36.385913, 44.25740806, 41.979595, 33.64044444, 32.89595056, 33.43416667, 39.85840806, 29.98047222
    ],
    hoverinfo: 'none',
    mode: 'markers',
    marker: {
        size: 9,
        opacity: 0.9,
        reversescale: false,
        autocolorscale: false,
        showscale: false,
        symbol: 'circle',
        line: {
            width: 0,
            color: 'rgb(102,102,102)'
        },
        colorscale: [[0, green], [1, red]],
        cmin: 0,
        color: [0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
        colorbar: {
            title: '',
            thickness: 10,
            // tickprefix: "$",
            tickvals: [0, 200, 400, 600, 800, 1000],
            outlinecolor: 'rgba(68,68,68,0)',
            // dtick: 2,
        }
    },
}];
layout_today_availability = {
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
    margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0,
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
`<ul class="color-list list-inline d-flex align-items-center justify-content-center flex-wrap position-absolute bottom-0 start-0 end-0 mb-n5">
    <li class="d-flex align-items-center me-3"><span class="bg-success rounded-circle  marker me-1 w-10px h-10px "></span>Available & In Stock
    </li>
    <li class="d-flex align-items-center"><span class="bg-danger rounded-circle marker me-1 w-10px h-10px "></span>Unavailable</li>
</ul>`;

// Add the custom legend to the plot container
document.getElementById("avalability_map_today").innerHTML = legendHTML;

Plotly.newPlot(myPlot_today_availability, data_today_availability, layout_today_availability, { displayModeBar: false });

//show popup on click of dots
myPlot_today_availability.on('plotly_click', function (data) {
    for (var i = 0; i < data.points.length; i++) {
        pts_name = data.points[i].text.name;
        pts_address = data.points[i].text.address;
        pts_availability = data.points[i].text.availability;
        pts_action = data.points[i].text.action;
    }
    let popoverHTML = `<div class="popover bs-popover-bottom" role="tooltip " data-popper-placement="bottom" id="pop">
        <div class="popover-arrow" style="position: absolute; left: 0px; transform: translate(131px, 0px);"></div>
        <span class="popover-dismiss btn btn-icon"></span>
        <h3 class="popover-header fw-bold fs-5 border-0 pb-0">${pts_name}</h3>
        <div class="popover-body pt-3">
          <p class="text-muted mb-3">${pts_address}</p>
          <div class="d-flex align-items-center fw-bold fs-5 mb-2"><span>${pts_availability}</span></div>
          <a href="${pts_action}" target="_blank" class="fs-8 text-uppercase lsn-2  text-primary">View Listing</a>
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
    $('.popover:last').show();
});

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
    type: 'scattergeo',
    locationmode: 'USA-states',
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
    hoverinfo: 'none',
    mode: 'markers',
    marker: {
        size: 9,
        opacity: 1,
        showscale: true,
        reversescale: false,
        autocolorscale: false,
        symbol: 'circle',
        line: {
            width: 0,
            color: 'rgb(102,102,102)'
        },
        colorscale: colorscale,
        cmin: 0,
        color: ['93.05', '32.00', '77.32', '48.87', '10.00', '50.31', '70.00', '80.73', '2.00', '10.11', '64.23', '9.22', '45.22', '20.00', '95.20', '50.43'],
        colorbar: {
            title: '',
            thickness: 10,
            ticksuffix: "%",
            tickvals: [0, 20, 40, 60, 80, 100],
            outlinecolor: 'rgba(68,68,68,0)',
        }
    },
}];

// Define the default margin
var defaultMargin = {
    l: 0, // left margin
    r: 0, // right margin
    t: 0, // top margin
    b: 0  // bottom margin
  };
  
  // Define the margin for large screens
  var largeScreenMargin = {
    l: 80,
    r: 80,
    t:0,
    b: 0
  };
  
  // Define a media query for large screens
  var mediaQuery = window.matchMedia('(min-width:1200px)');
  
  // Update the margin based on the media query
  var margin = mediaQuery.matches ? largeScreenMargin : defaultMargin;
layout_historical_availability = {
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
    // margin: {
    //      l:0,
    //     // r: 80,
    //     b: 0,
    //     t: 0,
    // },
    margin:margin,

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

Plotly.newPlot(myPlot_historical_availability, data_historical_availability, layout_historical_availability, { displayModeBar: false });
//Historical availability map End================

//Hide All Heat Maps by default
$('.heat-map').hide();

//switch to Geo/Heat map view
$('.heat-map-view').click(function () {
    $('.heat-map').show();
    $('.geo-map').hide();
})
$('.geo-map-view').click(function () {
    $('.heat-map').hide();
    $('.geo-map').show();
    //recreating geo map on switch of view to geo map
    Plotly.newPlot(myPlot_today_availability, data_today_availability, layout_today_availability, { displayModeBar: false });
    Plotly.newPlot(myPlot_historical_availability, data_historical_availability, layout_historical_availability, { displayModeBar: false });
    //show popup on click of dots switch of view to geo map
    myPlot_today_availability.on('plotly_click', function (data) {
        for (var i = 0; i < data.points.length; i++) {
            pts_name = data.points[i].text.name;
            pts_address = data.points[i].text.address;
            pts_availability = data.points[i].text.availability;
            pts_action = data.points[i].text.action;
        }
        let popoverHTML = `<div class="popover bs-popover-bottom" role="tooltip " data-popper-placement="bottom" id="pop">
                <div class="popover-arrow" style="position: absolute; left: 0px; transform: translate(131px, 0px);"></div>
                <span class="popover-dismiss btn btn-icon"></span>
                <h3 class="popover-header fw-bold fs-5 border-0 pb-0">${pts_name}</h3>
                <div class="popover-body pt-3">
                  <p class="text-muted mb-3">${pts_address}</p>
                  <div class="d-flex align-items-center fw-bold fs-5 mb-2"><span>${pts_availability}</span></div>
                  <a href="${pts_action}" target="_blank" class="fs-8 text-uppercase lsn-2  text-primary">View Listing</a>
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
                  <div class="d-flex align-items-center fw-bold fs-5 mb-2"><span class="me-1">In Stock</span><span class="text-blue me-1">${pts_in_stock_perc}%</span> of the time</div>
                  <a href="${pts_action}" target="_blank" class="fs-8 text-uppercase lsn-2  text-primary">View Listing</a>
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
    //change cursor to pointer on hover of dots switch of view to geo map
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

//show map on switch of tabs
$('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    //recreating geo map on switch of tab
    Plotly.newPlot(myPlot_today_availability, data_today_availability, layout_today_availability, { displayModeBar: false });
    Plotly.newPlot(myPlot_historical_availability, data_historical_availability, layout_historical_availability, { displayModeBar: false });

    //show popup on click of dots on switch of tab
    myPlot_today_availability.on('plotly_click', function (data) {
        for (var i = 0; i < data.points.length; i++) {
            pts_name = data.points[i].text.name;
            pts_address = data.points[i].text.address;
            pts_availability = data.points[i].text.availability;
            pts_action = data.points[i].text.action;
        }
        let popoverHTML = `<div class="popover bs-popover-bottom" role="tooltip " data-popper-placement="bottom" id="pop">
            <div class="popover-arrow" style="position: absolute; left: 0px; transform: translate(131px, 0px);"></div>
            <span class="popover-dismiss btn btn-icon"></span>
            <h3 class="popover-header fw-bold fs-5 border-0 pb-0">${pts_name}</h3>
            <div class="popover-body pt-3">
              <p class="text-muted mb-3">${pts_address}</p>
              <div class="d-flex align-items-center fw-bold fs-5 mb-2"><span>${pts_availability}</span></div>
              <a href="${pts_action}" target="_blank" class="fs-8 text-uppercase lsn-2  text-primary">View Listing</a>
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
              <div class="d-flex align-items-center fw-bold fs-5 mb-2"><span class="me-1">In Stock</span><span class="text-blue me-1">${pts_in_stock_perc}%</span> of the time</div>
              <a href="${pts_action}" target="_blank" class="fs-8 text-uppercase lsn-2  text-primary">View Listing</a>
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

    //change cursor to pointer on hover of dots on switch of tab
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

//Today's Availability Heat Map
var e = document.querySelectorAll("#today_ava_heat_map");
[].slice.call(e).map((function (e) {
    var t = parseInt(KTUtil.css(e, "height"));
    if (e) {
        var gray_300 = KTUtil.getCssVariableValue("--bs-gray-300"),
            gray_200 = KTUtil.getCssVariableValue("--bs-gray-200"),
            gray_500 = KTUtil.getCssVariableValue("--bs-gray-500"),
            gray_900 = KTUtil.getCssVariableValue("--bs-gray-900"),
            green = KTUtil.getCssVariableValue('--bs-success'),
            red = KTUtil.getCssVariableValue('--bs-lighter-danger'),
            light_green = KTUtil.getCssVariableValue('--bs-light-success'),
            light_red = KTUtil.getCssVariableValue('--bs-light-danger')
        var series =
            [
                {
                    name: 'Alabama',
                    data: [0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0]
                },
                {
                    name: 'Alaska',
                    data: [0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0,]
                },
                {
                    name: 'Arizona',
                    data: [0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0,]
                },
                {
                    name: 'Arkansas',
                    data: [1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0,]
                },
                {
                    name: 'California',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Colorado',
                    data: [1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0,]
                },
                {
                    name: 'Connecticut',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Delaware',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Florida',
                    data: [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1,]
                },
                {
                    name: 'Georgia',
                    data: [1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1,]
                },
                {
                    name: 'Hawaii',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Idaho',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Illinois',
                    data: [0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0,]
                },
                {
                    name: 'Indiana',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Iowa',
                    data: [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1,]
                },
                {
                    name: 'Kansas',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Kentucky',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Louisiana',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Maine',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Maryland',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Massachusetts',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Michigan',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Minnesota',
                    data: [1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0,]
                },
                {
                    name: 'Mississippi',
                    data: [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0,]
                },
                {
                    name: 'Missouri',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Montana',
                    data: [0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0,]
                },
                {
                    name: 'Nebraska',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Nevada',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'New Hampshire',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'New Jersey',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'New Mexico',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'New York',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'North Carolina',
                    data: [1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0,]
                },
                {
                    name: 'North Dakota',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Ohio',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Oklahoma',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Oregon',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Pennsylvania',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Rhode Island',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'South Carolina',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'South Dakota',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Tennessee',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Texas',
                    data: [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]
                },
                {
                    name: 'Utah',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Vermont',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Virginia',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Washington',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'West Virginia',
                    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
                },
                {
                    name: 'Wisconsin',
                    data: [1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0,]
                },
                {
                    name: 'Wyoming',
                    data: [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1]
                }
            ];


        var today_ava_chart = new ApexCharts(e, {
            series: series,

            chart: {
                fontFamily: "inherit",
                height: 1200,
                type: 'heatmap',
                toolbar: {
                    show: false
                },
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
                        {
                            from: -1,
                            to: -1,
                            name: 'Not Available in State',
                            color: gray_200,
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
                style: {
                    colors: [gray_900],
                    fontWeight: 600,
                    fontSize: 13,
                },
                formatter: function (e) {
                    if (e === null) {
                        return '';
                    }
                    return parseFloat(e).toFixed(2) + "%"
                }
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
                tickAmount: 3,

                labels: {
                    show: true,
                    rotate: 0,
                    // hideOverlappingLabels: false,
                    style: {
                        colors: gray_500,
                        fontSize: "11px"
                    }
                },
                crosshairs: {
                    show: true,
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
                show: true,
                labels: {
                    style: {
                        colors: gray_500,
                        fontSize: "11px"
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
            colors: [green, red, gray_200],
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
                colors: [light_green, light_red],
                strokeColor: [green, red],
                strokeWidth: 3
            }
        })

        today_ava_chart.render()
    }

}))

//Historical Availability Heat Map
var e = document.querySelectorAll("#historical_ava_heat_map");
[].slice.call(e).map((function (e) {
    var t = parseInt(KTUtil.css(e, "height"));
    if (e) {
        var gray_300 = KTUtil.getCssVariableValue("--bs-gray-300"),
            gray_200 = KTUtil.getCssVariableValue("--bs-gray-200"),
            gray_500 = KTUtil.getCssVariableValue("--bs-gray-500"),
            gray_900 = KTUtil.getCssVariableValue("--bs-gray-900"),
            blue = KTUtil.getCssVariableValue("--bs-blue"),
            light_blue = KTUtil.getCssVariableValue("--bs-light-blue")
        var series =
            [
                {
                    name: 'Alabama',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Alaska',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Arizona',
                    data: [65.64, 55.00, 33.11, 11.02, 35.00, 33.11, 11.02, 80.00, 32.00, 2.33, 15.64,]
                },
                {
                    name: 'Arkansas',
                    data: [0, 40.23, 10.21, 48.33, 80.00, 32.00, 2.33, 15.64, 55.00, 33.11, 11.02]
                },
                {
                    name: 'California',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Colorado',
                    data: [8.00, 32.00, 2.33, 15.64, 55.00, 74.00, 32.00, 2.33, 15.64, 33.11, 11.02]
                },
                {
                    name: 'Connecticut',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Delaware',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Florida',
                    data: [0, 40.23, 10.21, 48.33, 80.00, 32.00, 2.33, 15.64, 55.00, 33.11, 11.02]
                },
                {
                    name: 'Georgia',
                    data: [0, 40.23, 10.21, 48.33, 80.00, 32.00, 2.33, 15.64, 55.00, 33.11, 11.02]
                },
                {
                    name: 'Hawaii',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Idaho',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Illinois',
                    data: [65.64, 55.00, 33.11, 11.02, 35.00, 33.11, 11.02, 80.00, 32.00, 2.33, 15.64,]
                },
                {
                    name: 'Indiana',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Iowa',
                    data: [0, 40.23, 10.21, 48.33, 80.00, 32.00, 2.33, 15.64, 55.00, 33.11, 11.02]
                },
                {
                    name: 'Kansas',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Kentucky',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Louisiana',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Maine',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Maryland',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Massachusetts',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Michigan',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Minnesota',
                    data: [65.64, 55.00, 33.11, 11.02, 35.00, 33.11, 11.02, 80.00, 32.00, 2.33, 15.64,]
                },
                {
                    name: 'Mississippi',
                    data: [0, 40.23, 10.21, 48.33, 80.00, 32.00, 2.33, 15.64, 55.00, 33.11, 11.02]
                },
                {
                    name: 'Missouri',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Montana',
                    data: [8.00, 32.00, 2.33, 15.64, 55.00, 74.00, 32.00, 2.33, 15.64, 33.11, 11.02]
                },
                {
                    name: 'Nebraska',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Nevada',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'New Hampshire',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'New Jersey',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'New Mexico',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'New York',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'North Carolina',
                    data: [65.64, 55.00, 33.11, 11.02, 35.00, 33.11, 11.02, 80.00, 32.00, 2.33, 15.64,]
                },
                {
                    name: 'North Dakota',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Ohio',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Oklahoma',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Oregon',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Pennsylvania',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Rhode Island',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'South Carolina',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'South Dakota',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Tennessee',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Texas',
                    data: [65.64, 55.00, 33.11, 11.02, 35.00, 33.11, 11.02, 80.00, 32.00, 2.33, 15.64,]
                },
                {
                    name: 'Utah',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Vermont',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Virginia',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Washington',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'West Virginia',
                    data: [null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Wisconsin',
                    data: [0, 40.23, 10.21, 48.33, 80.00, 32.00, 2.33, 15.64, 55.00, 33.11, 11.02]
                },
                {
                    name: 'Wyoming',
                    data: [0.1, 40.23, 10.21, 48.33, 80.00, 32.00, 2.33, 15.64, 55.00, 33.11, 11.02]

                }
            ];


        var percChart = new ApexCharts(e, {
            series: series,

            chart: {
                fontFamily: "inherit",
                height: 1200,
                type: 'heatmap',
                toolbar: {
                    show: false
                },
                events: {
                    animationEnd: function (chartContext, options) {
                        $('.apexcharts-data-labels').each(function () {
                            if ($(this).find('text').is(':empty')) {
                                $(this).addClass('empty-parent');
                                $('.empty-parent').prev('.apexcharts-heatmap-rect').css('fill', gray_200)
                            }
                        });
                    }
                }
            },

            plotOptions: {
                heatmap: {
                    radius: 0
                }
            },

            legend: {
                show: true,
                position: 'bottom',
                showForSingleSeries: true,
                markers: {
                    radius: 12,
                    fillColors: [blue],
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
                    if (e === null) {
                        return '';
                    }
                    return parseFloat(e).toFixed(2) + "%"
                }
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
                tickAmount: 3,

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
                    show: true,
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
                show: true,
                labels: {
                    style: {
                        colors: gray_500,
                        fontSize: "11px"
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
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: "none",
                        value: 0
                    }
                }
            },
            tooltip: {
                custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                    if (series[seriesIndex][dataPointIndex] !== null) {
                        return `<div class="px-3 py-1 fs-7 lh-sm"><span class="d-block">In  ${w.config.series[seriesIndex].name} Woodbridge By Robert Mondavi Cabernet Sauvignon (1.5L)</span> was in stock</span> <span class="d-inline-block tooltip-perc fw-bolder">${w.globals.series[seriesIndex][dataPointIndex]}%</span> from 5/1/23-5/25/23</div>`;
                    } else {
                        return "";
                    }
                },
                style: {
                    fontSize: "12px"
                },
                x: {
                    show: false,
                },

            },
            colors: [blue, gray_200],
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
                colors: [light_blue],
                strokeColor: [blue],
                strokeWidth: 3
            }
        })

        percChart.render()
    }

}))

//Availability Map Sub heading date
if ($('.today-availability').hasClass('active')) {
    $('.availability-sub-heading').text('on 5/25/23')
}

//Availability Map Sub heading date in switch of tab
$('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    if ($('.today-availability ').hasClass('active')) {
        $('.availability-sub-heading').text('on 5/25/23')
    }
    if ($('.historical-availability ').hasClass('active')) {
        $('.availability-sub-heading').text('from 5/1/23-5/25/23')
    }
});