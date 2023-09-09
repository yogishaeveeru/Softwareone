//Datatable
var datatable_column_width;
function JDDatatable(api, id, table_name) {
    getTableData(api, function (tblInfo) {
        table = $('#' + id + '').DataTable({
            dom:
                "<'row'<'col-sm-12 col-md-12 'i>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'p>>",
            buttons: [],
            paging: true,
            serverSide: true,
            pageLength: 10,
            searching: false,
            responsive: false,
            scrollX: true,
            scrollY: '237px',
	    scrollCollapse: true,
            order: [[1, 'asc']],
            lengthMenu: [10, 15, 50, 'All'],
            processing: true,
            language: {
                infoFiltered: '',
                info: `Showing _START_ to _END_ of _TOTAL_ ${table_name}`,
                searchPlaceholder: 'Type Report Name',
                search: 'Search',
                paginate: {
                    next: '<i class="fas fa-chevron-right"></i>',
                    previous: '<i class="fas fa-chevron-left"></i>',
                },
                processing:
                    '<div class="d-flex align-items-center justify-content-center"> <div class="loader">Loading...</div></div> ',
            },
            ajax: function (data, callback, settings) {
                $.ajax({
                    url: api,
                    type: 'GET',
                    contentType: 'application/x-www-form-urlencoded',

                    data: {
                        'pagination[page]': 1, // pending
                        'pagination[pages]': data.start,
                        'pagination[perpage]': data.length,
                        'pagination[total]': '166',
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
                            console.log('less');
                            $('.dataTables_wrapper').find('.dataTables_length').css('display', 'none');
                            $('.dataTables_wrapper').find('.dataTables_paginate').css('display', 'none');
                        } else {
                            $('.dataTables_wrapper').find('.dataTables_length').css('display', 'block');
                            $('.dataTables_wrapper').find('.dataTables_paginate').css('display', 'block');
                        }
                    },
                    error: function (jqXhr, textStatus, errorThrown) {},
                });
            },
            columns: tblInfo.colArr,
            headerCallback: datatable_column_width,
            columnDefs: tblInfo.colDefArr,
            drawCallback: function () {
                console.log('table ' + $(this).attr('id') + $(this).height());
                console.log('scrollbody ' + $(this).attr('id') + $(this).closest('.dataTables_scrollBody').height());
                if ($(this).height() <= $(this).closest('.dataTables_scrollBody').height()) {
                    $(this).closest('.dataTables_wrapper').next().find('.view_all_row').hide();
                }
            },
        });
    });
}

JDDatatable('https://run.mocky.io/v3/86734bb4-5bfa-4faa-9ed9-24f86e8a4c44', 'stores', 'Stores');
JDDatatable('https://run.mocky.io/v3/91373bcb-35a5-4098-a235-336d96999a9f', 'marketplace', 'Retailer & Marketplace');

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
                    targets: index,
                });
            } else {
                tblInfo.colDefArr.push({
                    title: element.name,
                    targets: index,
                });
            }
        });
        // get col keys
        for (const key in resp.data[0]) {
            tblInfo.colArr.push({
                data: key,
            });
        }

        // console.log('d - ', colDefArr);
        callback(tblInfo);
    });
}
// ---------------

//line charts in tabs
var e = document.querySelectorAll('#kt_chart_widget_11_chart_1');
[].slice.call(e).map(function (e) {
    var r = parseInt(KTUtil.css(e, 'height'));
    if (e) {
        var i = KTUtil.getCssVariableValue('--bs-gray-500'),
            s = KTUtil.getCssVariableValue('--bs-border-dashed-color'),
            n = KTUtil.getCssVariableValue('--bs-success'),
            m = KTUtil.getCssVariableValue('--bs-light-success');
        new ApexCharts(e, {
            series: [
                {
                    name: 'Price',
                    data: [30, 50, 25, 20, 32, 21, 32, 45, 23, 34, 21],
                },
            ],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: r,
                toolbar: {
                    show: !1,
                },
            },
            plotOptions: {},
            legend: {
                show: !1,
            },
            dataLabels: {
                enabled: !1,
            },
            fill: {
                type: 'solid',
                opacity: 1,
            },
            fill1: {
                type: 'gradient',
                opacity: 1,
                gradient: {
                    type: 'vertical',
                    shadeIntensity: 0.5,
                    gradientToColors: void 0,
                    inverseColors: !0,
                    opacityFrom: 1,
                    opacityTo: 0.375,
                    stops: [25, 50, 100],
                    colorStops: [],
                },
            },
            stroke: {
                curve: 'smooth',
                show: !0,
                width: 3,
                colors: [n],
            },
            xaxis: {
                categories: [
                    'Apr 01',
                    'Apr 02',
                    'Apr 03',
                    'Apr 04',
                    'Apr 05',
                    'Apr 06',
                    'Apr 07',
                    'Apr 08',
                    'Apr 09',
                    'Apr 10',
                    'Apr 11',
                ],
                axisBorder: {
                    show: !1,
                },
                axisTicks: {
                    show: !1,
                },
                tickAmount: 2,
                labels: {
                    show: !0,
                    rotate: 0,
                    style: {
                        colors: i,
                        fontSize: '11px',
                    },
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: n,
                        width: 1,
                        dashArray: 3,
                    },
                },
                tooltip: {
                    enabled: !0,
                    formatter: void 0,
                    offsetY: 0,
                    style: {
                        fontSize: '11px',
                    },
                },
            },
            yaxis: {
                tickAmount: 4,
                min: 0,
                max: 65,
                floating: false,
                labels: {
                    style: {
                        colors: i,
                        fontSize: '11px',
                    },
                    formatter: function (e) {
                        return '$' + e.toFixed(0);
                    },
                    offsetX: -10,
                },
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0,
                    },
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0,
                    },
                },
                active: {
                    allowMultipleDataPointsSelection: !1,
                    filter: {
                        type: 'none',
                        value: 0,
                    },
                },
            },
            tooltip: {
                style: {
                    fontSize: '12px',
                },
                y: {
                    formatter: function (e) {
                        return e + '%';
                    },
                },
            },
            colors: [m],
            grid: {
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
                borderColor: s,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: !0,
                    },
                },
            },
            markers: {
                colors: [m],
                strokeColor: [n],
                strokeWidth: 3,
            },
        }).render();
    }
});

var e = document.querySelectorAll('#kt_chart_widget_11_chart_2');
[].slice.call(e).map(function (e) {
    var r = parseInt(KTUtil.css(e, 'height'));
    if (e) {
        var i = KTUtil.getCssVariableValue('--bs-gray-500'),
            s = KTUtil.getCssVariableValue('--bs-border-dashed-color'),
            n = KTUtil.getCssVariableValue('--bs-success'),
            m = KTUtil.getCssVariableValue('--bs-light-success');
        new ApexCharts(e, {
            series: [
                {
                    name: 'Price',
                    data: [25, 30, 60, 32, 55, 21, 64, 34, 43, 21, 43],
                },
            ],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: r,
                toolbar: {
                    show: !1,
                },
            },
            plotOptions: {},
            legend: {
                show: !1,
            },
            dataLabels: {
                enabled: !1,
            },
            fill: {
                type: 'solid',
                opacity: 1,
            },
            fill1: {
                type: 'gradient',
                opacity: 1,
                gradient: {
                    type: 'vertical',
                    shadeIntensity: 0.5,
                    gradientToColors: void 0,
                    inverseColors: !0,
                    opacityFrom: 1,
                    opacityTo: 0.375,
                    stops: [25, 50, 100],
                    colorStops: [],
                },
            },
            stroke: {
                curve: 'smooth',
                show: !0,
                width: 3,
                colors: [n],
            },
            xaxis: {
                categories: [
                    'Apr 01',
                    'Apr 02',
                    'Apr 03',
                    'Apr 04',
                    'Apr 05',
                    'Apr 06',
                    'Apr 07',
                    'Apr 08',
                    'Apr 09',
                    'Apr 10',
                    'Apr 11',
                ],
                axisBorder: {
                    show: !1,
                },
                axisTicks: {
                    show: !1,
                },
                tickAmount: 2,
                labels: {
                    show: !0,
                    rotate: 0,
                    style: {
                        colors: i,
                        fontSize: '11px',
                    },
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: n,
                        width: 1,
                        dashArray: 3,
                    },
                },
                tooltip: {
                    enabled: !0,
                    formatter: void 0,
                    offsetY: 0,
                    style: {
                        fontSize: '11px',
                    },
                },
            },
            yaxis: {
                tickAmount: 4,
                min: 0,
                max: 65,
                floating: false,
                labels: {
                    style: {
                        colors: i,
                        fontSize: '11px',
                    },
                    formatter: function (e) {
                        return '$' + e.toFixed(0);
                    },
                    offsetX: -10,
                },
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0,
                    },
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0,
                    },
                },
                active: {
                    allowMultipleDataPointsSelection: !1,
                    filter: {
                        type: 'none',
                        value: 0,
                    },
                },
            },
            tooltip: {
                style: {
                    fontSize: '12px',
                },
                y: {
                    formatter: function (e) {
                        return e + '%';
                    },
                },
            },
            colors: [m],
            grid: {
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
                borderColor: s,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: !0,
                    },
                },
            },
            markers: {
                colors: [m],
                strokeColor: [n],
                strokeWidth: 3,
            },
        }).render();
    }
});

var e = document.querySelectorAll('#kt_chart_widget_11_chart_3');
[].slice.call(e).map(function (e) {
    var r = parseInt(KTUtil.css(e, 'height'));
    if (e) {
        var i = KTUtil.getCssVariableValue('--bs-gray-500'),
            s = KTUtil.getCssVariableValue('--bs-border-dashed-color'),
            n = KTUtil.getCssVariableValue('--bs-success'),
            m = KTUtil.getCssVariableValue('--bs-light-success');
        new ApexCharts(e, {
            series: [
                {
                    name: 'Price',
                    data: [40, 30, 50, 54, 53, 32, 23, 43, 12, 23, 24],
                },
            ],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: r,
                toolbar: {
                    show: !1,
                },
            },
            plotOptions: {},
            legend: {
                show: !1,
            },
            dataLabels: {
                enabled: !1,
            },
            fill: {
                type: 'solid',
                opacity: 1,
            },
            fill1: {
                type: 'gradient',
                opacity: 1,
                gradient: {
                    type: 'vertical',
                    shadeIntensity: 0.5,
                    gradientToColors: void 0,
                    inverseColors: !0,
                    opacityFrom: 1,
                    opacityTo: 0.375,
                    stops: [25, 50, 100],
                    colorStops: [],
                },
            },
            stroke: {
                curve: 'smooth',
                show: !0,
                width: 3,
                colors: [n],
            },
            xaxis: {
                categories: [
                    'Apr 01',
                    'Apr 02',
                    'Apr 03',
                    'Apr 04',
                    'Apr 05',
                    'Apr 06',
                    'Apr 07',
                    'Apr 08',
                    'Apr 09',
                    'Apr 10',
                    'Apr 11',
                ],
                axisBorder: {
                    show: !1,
                },
                axisTicks: {
                    show: !1,
                },
                tickAmount: 2,
                labels: {
                    show: !0,
                    rotate: 0,
                    style: {
                        colors: i,
                        fontSize: '11px',
                    },
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: n,
                        width: 1,
                        dashArray: 3,
                    },
                },
                tooltip: {
                    enabled: !0,
                    formatter: void 0,
                    offsetY: 0,
                    style: {
                        fontSize: '11px',
                    },
                },
            },
            yaxis: {
                tickAmount: 4,
                min: 0,
                max: 65,
                floating: false,
                labels: {
                    style: {
                        colors: i,
                        fontSize: '11px',
                    },
                    formatter: function (e) {
                        return '$' + e.toFixed(0);
                    },
                    offsetX: -10,
                },
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0,
                    },
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0,
                    },
                },
                active: {
                    allowMultipleDataPointsSelection: !1,
                    filter: {
                        type: 'none',
                        value: 0,
                    },
                },
            },
            tooltip: {
                style: {
                    fontSize: '12px',
                },
                y: {
                    formatter: function (e) {
                        return e + '%';
                    },
                },
            },
            colors: [m],
            grid: {
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
                borderColor: s,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: !0,
                    },
                },
            },
            markers: {
                colors: [m],
                strokeColor: [n],
                strokeWidth: 3,
            },
        }).render();
    }
});

//expand table on click of view all btn
$('.view_all_row').click(function () {
    $(this).parent().prev('.dataTables_wrapper').find('.dataTables_scrollBody').toggleClass('expand');
    if ($('.dataTables_scrollBody').hasClass('expand')) {
        $(this)
            .html(`<span class="svg-icon svg-icon-muted svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="black"/>
        <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="black"/>
        </svg></span>`);
    } else {
        $(this)
            .html(`<span class="svg-icon svg-icon-muted svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="black"/>
        <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="black"/>
        </svg></span>`);
    }
});

//hide view all button if content is less
$('.table').on('draw.dt', function () {
    if ($(this).height() <= $(this).closest('.dataTables_scrollBody').height()) {
        $(this).closest('.dataTables_wrapper').next().find('.view_all_row').hide();
    }
});
