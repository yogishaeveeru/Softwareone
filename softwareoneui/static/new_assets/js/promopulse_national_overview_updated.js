$('#total_bev_alc').click(function () {
    $('#total_bev_content').slideDown();
    $('#categories_content').slideUp();

});
$('#categories').click(function () {
    $('#total_bev_content').slideUp();
    $('#categories_content').slideDown();

});
$('#back_total_bevmo').click(function () {
    $('#pp-rep-categories').slideUp();
    $('#pp-repcat').slideDown();
    $('#total_bev_alc').removeClass('d-none');
    $('#categories').removeClass('d-none');
    $(this).addClass('d-none');
    $('.bar-chart-view').addClass('d-none');
});
$('#back_categories').click(function () {
    $('#pp-repbrand').slideUp();
    $('#back_total_bevmo').removeClass('d-none');
    $('#categories').addClass('d-none');
    $(this).addClass('d-none');
    $('#brands').addClass('d-none');
    $('#suppliers').addClass('d-none');
    $('#retailers').addClass('d-none');
    $('#pp-rep-categories').slideDown();
    // $('.bar-chart-view').addClass('d-none');
});
$('#back_categories_total_bev').click(function () {
    $('#pp-rep-categories').slideUp();
    $('#pp-repbrand').slideUp();
    $('#pp-repcat').slideDown();
    $('#total_bev_alc').removeClass('d-none');
    $('#categories').removeClass('d-none');
    $(this).addClass('d-none');
    $('#brands').addClass('d-none');
    $('#suppliers').addClass('d-none');
    $('#retailers').addClass('d-none');
    $('.bar-chart-view').addClass('d-none');
});
$('#brands').click(function () {
    $('#brands_content').slideDown();
    $('#suppliers_content').slideUp();
    $('#retailers_content').slideUp();
});
$('#suppliers').click(function () {
    $('#suppliers_content').slideDown();
    $('#brands_content').slideUp();
    $('#retailers_content').slideUp();
});
$('#retailers').click(function () {
    $('#retailers_content').slideDown();
    $('#suppliers_content').slideUp();
    $('#brands_content').slideUp();
});


//change title of Retailer Marketplace tab
// $('a[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
//     if ($('#retailers').hasClass('active')) {
//         $('#pp-repbrand').find('.card-title').html('Posts/Emails')
//     } else {
//         $('#pp-repbrand').find('.card-title').html('Mentions')
//     }
// });

function category_name_set() {
    $('#pp-repcat').slideUp();
    $('#total_bev_alc').addClass('d-none');
    $('#categories').addClass('d-none');
    $('#pp-rep-categories').slideDown();
    $('#back_total_bevmo').removeClass('d-none');
    $('.bar-chart-view').removeClass('d-none');
}
function assign_category_name_type() {
    $('#pp-rep-categories').slideUp();
    $('#pp-repbrand').slideDown();
    $('#brands').removeClass('d-none');
    $('#suppliers').removeClass('d-none');
    $('#retailers').removeClass('d-none');
    $('#back_categories').removeClass('d-none');
    $('#back_total_bevmo').addClass('d-none');
    $('.bar-chart-view').removeClass('d-none');
}
function set_category_name_type() {
    $('#pp-repcat').slideUp();
    $('#total_bev_alc').addClass('d-none');
    $('#categories').addClass('d-none');
    $('#pp-repbrand').slideDown();
    $('#back_categories_total_bev').removeClass('d-none');
    $('#brands').removeClass('d-none');
    $('#suppliers').removeClass('d-none');
    $('#retailers').removeClass('d-none');
    $('.bar-chart-view').removeClass('d-none');
}

//total bec alc content
const total_bev_alc_content = document.querySelector("#total_bev_content");
const get_total_bev_data = async () => {
    const response = await fetch(`https://run.mocky.io/v3/7c5e1e75-24d3-4609-9f4e-6e8e799b4ad2`);
    //console.log(response);
    const data = await response.json();
    // console.log(data[0]);
    data.map((curElm, index) => {
        const htmlData = `
        <div class="col-6 my-2">
            <div class="bg-white shadow rounded d-flex align-items-center text-center flex-column cursor-pointer px-2 py-3 border border-2 border-transparent border-hover-dashed-blue h-100 text-break" onclick="category_name_set();">
            <span class="fs-2hx fw-boldest text-gray-800 lh-1 ls-n2">${curElm.mentions}</span>
            <span class="badge  bg-blue fs-base my-2"> ${curElm.percentage}</span>
            <h3 class="mb-0 mt-1 fs-4 fw-bolder text-gray-800 ">${curElm.name}</h3>
            </div>
        </div>
    `;
        total_bev_alc_content.insertAdjacentHTML('beforeend', htmlData);
    })
}
get_total_bev_data();

//categories content
const categories_content = document.querySelector("#categories_content");
const get_categories_data = async () => {
    const response = await fetch(`https://run.mocky.io/v3/a2feca51-e855-4813-91e7-249bbe4bee53`);
    //console.log(response);
    const data = await response.json();
    // console.log(data[0]);
    data.map((curElm, index) => {
        const htmlData = `
        <div class="col-6 my-2 ">
            <div class="bg-white shadow rounded d-flex align-items-center text-center flex-column cursor-pointer  border border-2 border-transparent border-hover-dashed-blue h-100 text-break position-relative" >
            <div class="d-flex align-items-center text-center  flex-column px-2 py-3 w-100 h-100" onclick="set_category_name_type();">
            <span class="fs-2hx fw-boldest text-gray-800 lh-1 ls-n2 mt-3">${curElm.mentions}</span>
            <span class="badge  bg-blue fs-base my-2"> ${curElm.percentage}</span>
            <h3 class="mb-0 mt-1 fs-4 fw-bolder text-gray-800 ">${curElm.name}</h3>
            </div>
            </div>

        </div>
    `;
        categories_content.insertAdjacentHTML('beforeend', htmlData);
    })
}
get_categories_data();

//categories content
const pp_rep_categories_content = document.querySelector("#pp-rep-categories_content");
const get_pp_rep_categories_content = async () => {
    const response = await fetch(`https://run.mocky.io/v3/eadb5cd3-42ca-4c0f-9d58-eb346498dca1`);
    //console.log(response);
    const data = await response.json();
    // console.log(data[0]);
    data.map((curElm, index) => {
        const htmlData = `
        <div class="col-6 my-2">
            <div class="bg-white shadow rounded d-flex align-items-center text-center flex-column cursor-pointer px-2 py-3 border border-2 border-transparent border-hover-dashed-blue h-100 text-break" onclick="assign_category_name_type()">
            <span class="fs-2hx fw-boldest text-gray-800 lh-1 ls-n2">${curElm.mentions}</span>
            <span class="badge  bg-blue fs-base my-2"> ${curElm.percentage}</span>
            <h3 class="mb-0 mt-1 fs-4 fw-bolder text-gray-800 ">${curElm.name}</h3>
            </div>
 
        </div>
    `;
        pp_rep_categories_content.insertAdjacentHTML('beforeend', htmlData);
    })
}
get_pp_rep_categories_content();

//brands content
const brands_content = document.querySelector("#brands_content");
const get_brands_content = async () => {
    const response = await fetch(`https://run.mocky.io/v3/29ca98f2-b077-42f1-b9c9-eb955daf1582`);
    //console.log(response);
    const data = await response.json();
    // console.log(data[0]);
    data.map((curElm, index) => {
        const htmlData = `
        <div class="col-sm-12 my-2">
            <div class="bg-white shadow rounded d-flex text-center px-2 py-3 border border-2 border-transparent border-hover-dashed-blue h-100 text-break position-relative">
                <div class="img-wrapper border border-dashed border-gray-200 rounded p-1 bg-gray-100 mw-85px  min-w-85px min-h-85px me-3" style="background:#f5f8fa">
                    <img src="${curElm.brand}" class="img-fluid " />
                </div>
                <div class="text-start">
                    <h3 class="mb-0 fs-4 fw-bolder text-gray-800 ">${curElm.name}</h3>
                    <span class="badge  bg-blue fs-base mt-2">${curElm.mentions}<span class="ms-1 text-light fs-8">Mentions</span></span>
                    <span class="fs-2x fw-boldest text-gray-800 lh-1 ls-n2 mt-5 d-block">${curElm.percentage}</span>
                </div>
                <!--begin::Action-->
                <a href="Promopulse_brand_overview.html" target="_blank" class="text-hover-gray-600 justify-content-center position-absolute bottom-0 end-0 p-2">
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr095.svg-->
                    <span class="svg-icon svg-icon-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path opacity="0.3" d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z" fill="black" />
                            <rect x="21.9497" y="3.46448" width="13" height="2" rx="1" transform="rotate(135 21.9497 3.46448)" fill="black" />
                            <path d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z" fill="black" />
                        </svg>
                    </span>
                    <!--end::Svg Icon-->
                </a>
                <!--end::Action-->
            </div>
            
        </div>
    `;
        brands_content.insertAdjacentHTML('beforeend', htmlData);
    })
}
get_brands_content();

//suppliers content
const suppliers_content = document.querySelector("#suppliers_content");
const get_suppliers_content = async () => {
    const response = await fetch(`https://run.mocky.io/v3/fed5bb7e-4f42-4be5-a331-1c8c3c0120b7`);
    //console.log(response);
    const data = await response.json();
    // console.log(data[0]);
    data.map((curElm, index) => {
        const htmlData = `
        <div class="col-sm-12 my-2">
            <div class="bg-white shadow rounded d-flex text-center px-2 py-3 border border-2 border-transparent border-hover-dashed-blue h-100 text-break position-relative">
                <div class="img-wrapper border border-dashed border-gray-200 rounded p-1 bg-gray-100 mw-85px  min-w-85px min-h-85px me-3" style="background:#f5f8fa">
                    <img src="${curElm.brand}" class="img-fluid " />
                </div>
                <div class="text-start">
                    <h3 class="mb-0 fs-4 fw-bolder text-gray-800 ">${curElm.name}</h3>
                    <span class="badge  bg-blue fs-base mt-2">${curElm.mentions}<span class="ms-1 text-light fs-8 ">Mentions</span></span>
                    <span class="fs-2x fw-boldest text-gray-800 lh-1 ls-n2 mt-5 d-block">${curElm.percentage}</span>
                </div>
                <!--begin::Action-->
            <a href="Promopulse_supplier_overview.html" target="_blank" class="text-hover-gray-600 justify-content-center position-absolute bottom-0 end-0 p-2">
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr095.svg-->
                <span class="svg-icon svg-icon-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.3" d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z" fill="black" />
                        <rect x="21.9497" y="3.46448" width="13" height="2" rx="1" transform="rotate(135 21.9497 3.46448)" fill="black" />
                        <path d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z" fill="black" />
                    </svg>
                </span>
                <!--end::Svg Icon-->
            </a>
            <!--end::Action-->
            </div>
            
        </div>
    `;
        suppliers_content.insertAdjacentHTML('beforeend', htmlData);
    })
}
get_suppliers_content();

//retailers content
const retailers_content = document.querySelector("#retailers_content");
const get_retailers_content = async () => {
    const response = await fetch(`https://run.mocky.io/v3/b3dda28a-8638-4318-b55d-6d3993a08978`);
    //console.log(response);
    const data = await response.json();
    // console.log(data[0]);
    data.map((curElm, index) => {
        const htmlData = `
        <div class="col-sm-12 my-2">
            <div class="bg-white shadow rounded d-flex text-center px-2 py-3 border border-2 border-transparent border-hover-dashed-blue h-100 text-break position-relative">
                <div class="img-wrapper border border-dashed border-gray-200 rounded p-1 bg-gray-100 mw-85px  min-w-85px min-h-85px me-3" style="background:#f5f8fa">
                    <img src="${curElm.retailer}" class="img-fluid " />
                </div>
                <div class="text-start">
                    <h3 class="mb-0 fs-4 fw-bolder text-gray-800 ">${curElm.name}</h3>
                    <span class="badge bg-blue fs-base mt-2 d-inline-flex align-items-center flex-wrap cursor-help" tabindex="0" data-bs-html="true" data-bs-toggle="popover" data-bs-placement="top" title="" data-bs-trigger="hover" data-bs-html="true" data-bs-content="${curElm.mentions} social media posts, emails, and/or web banners including Mezcal & Tequila"><span class="me-1"><span class="me-1">${curElm.mentions}</span></span><span class="text-light fs-8 d-flex align-items-center flex-wrap"><span>Posts/</span><span>Emails</span></span></span>
                    <span class="fs-2x fw-boldest text-gray-800 lh-1 ls-n2 mt-5 d-block">${curElm.percentage}</span>
                </div>
                <!--begin::Action-->
            <a href="Promopulse_marketplace_overview - v2.html" target="_blank" class="text-hover-gray-600 justify-content-center position-absolute bottom-0 end-0 p-2">
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr095.svg-->
                <span class="svg-icon svg-icon-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.3" d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z" fill="black" />
                        <rect x="21.9497" y="3.46448" width="13" height="2" rx="1" transform="rotate(135 21.9497 3.46448)" fill="black" />
                        <path d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z" fill="black" />
                    </svg>
                </span>
                <!--end::Svg Icon-->
            </a>
            <!--end::Action-->
            </div>
        </div>
    `;
        retailers_content.insertAdjacentHTML('beforeend', htmlData);
        $('[data-bs-toggle="popover"]').popover();
        $('[data-bs-toggle="tooltip"]').tooltip();

    })
}
get_retailers_content();


JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "marketplace_retailer", "Select Retailers/Marketplaces");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "supplier", "Select Suppliers");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "custom-grouping", "Select Custom Grouping");
//Brands Dropdown with logos
function formatBrand(brand) {
    console.log(brand);
    if (!brand.id) {
        return brand.text;
    }
    var $brand = $(
        '<span class="d-flex align-items-center "><span class="images img-wrapper border rounded "><img  class="img-fluid " src="' + brand.image + '" /> </span>' + brand.text + '</span>'
    );
    return $brand;
};

$(document).ready(function () {
    var selectData_brand = [];
    //filter by brand dropdown--------
    $.ajax({
        url: "https://run.mocky.io/v3/f65240f9-c04d-4202-8517-7a5790c31a9a"
    }).then(function (data) {
        $(data).each(function (i) {
            data.sort((a, b) => a.text.localeCompare(b.text))
            selectData_brand.push({ id: data[i].id, text: data[i].text, image: data[i].images });

        });

        $('#brand').select2({
            placeholder: "Select Brands",
            data: selectData_brand,
            templateResult: formatBrand,
            templateSelection: formatBrand
        });
    });
    //---------------------------
});

//stacked area chart
var e = document.querySelectorAll(".mixed-widget-8-chart");
[].slice.call(e).map((function (e) {
    var t = parseInt(KTUtil.css(e, "height"));
    if (e) {
        var //color set for maximum 11 series
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
        let categories = [["2/2/23-", "2/5/23"], ["2/7/23-", "2/12/23"], ["2/13/23-", "2/19/23"], ["2/20/23-", "2/26/23"], ["2/27/23-", "2/28/23"]]
        new ApexCharts(e, {
            series: [{
                name: "Wine",
                data: [464, 390, 429, 406, 26]
            },
            {
                name: "Spirits",
                data: [556, 655, 631, 683, 71]
            },
            {
                name: "Beer & Seltzer",
                data: [109, 95, 129, 220, 6]
            }],
            chart: {
                fontFamily: "inherit",
                type: "area",
                height: 400,
                stacked: true,
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
                    fillColors: [blue, green, red, purple, gray_500, orange, cyan, blue_100, blue_900, gray_600, yellow],
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
                colors: [light_blue, light_green, light_red, light_purple, light_gray_500, light_orange, light_cyan, light_blue_100, light_blue_900, light_gray_600, light_yellow],
                type: "solid",
                opacity: 1
            },
            // fill: {
            //     type: "gradient",
            //     gradient: {
            //         opacityFrom: 0.4,
            //         opacityTo: 0,
            //         stops: [20, 120, 120, 120]
            //     }
            // },
            stroke: {
                curve: "smooth",
                show: !0,
                width: 3,
                colors: [blue, green, red, purple, gray_500, orange, cyan, blue_100, blue_900, gray_600, yellow],
            },
            xaxis: {
                categories: categories,
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                tickPlacement: 'on',
                labels: {
                    show: !0,
		    hideOverlappingLabels: false,
                    //rotate: 0,
                    /*formatter: function (value) {
                        const firstIndex = 0;
                        const lastIndex = categories.length - 1;
                        const midIndex = Math.floor(categories.length / 2);

                        if (value === categories[firstIndex] || value === categories[lastIndex] || value === categories[midIndex]) {
                            return value;
                        }

                        return '';
                    },*/
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
                max: 1500,
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
                            return e.toFixed(0);
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
            colors: [blue, green, red, purple, gray_500, orange, cyan, blue_100, blue_900, gray_600, yellow],
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
                colors: [light_blue, light_green, light_red, light_purple, light_gray_500, light_orange, light_cyan, light_blue_100, light_blue_900, light_gray_600, light_yellow],
                strokeColor: [blue, green, red, purple, gray_500, orange, cyan, blue_100, blue_900, gray_600, yellow],
                strokeWidth: 3
            }
        }).render()
    }
}))


// JavaScript with jQuery
$(document).ready(function () {
    //bar chart
    var element = document.getElementById('kt_apexcharts_1');
    var element2 = document.getElementById('kt_apexcharts_2');
    //color set for maximum 11 series
    var gray_300 = KTUtil.getCssVariableValue("--bs-gray-300");
    var gray_500 = KTUtil.getCssVariableValue("--bs-gray-500");
    var blue = KTUtil.getCssVariableValue("--bs-blue");
    var green = KTUtil.getCssVariableValue('--bs-success');
    var red = KTUtil.getCssVariableValue('--bs-lighter-danger');
    var purple = KTUtil.getCssVariableValue('--bs-purple');
    var orange = KTUtil.getCssVariableValue('--bs-lighter-orange');
    var cyan = KTUtil.getCssVariableValue('--bs-cyan');
    var gray_600 = KTUtil.getCssVariableValue('--bs-gray-600');
    var blue_100 = KTUtil.getCssVariableValue('--bs-blue-100');
    var blue_900 = KTUtil.getCssVariableValue('--bs-blue-900');
    var yellow = KTUtil.getCssVariableValue('--bs-lighter-warning');
    var data = [
        // {
        //     name: 'American Whiskey',
        //     data: [96, 197, 175, 167, 60]
        // }, 
        // {
        //     name: 'Brandy',
        //     data: [26, 35, 36, 27, 57]
        // },
        // {
        //     name: 'Canadian Whisky',
        //     data: [7, 39, 23, 27, 46]
        // }, {
        //     name: 'Gin',
        //     data: [23, 41, 63, 40, 33]
        // },
        // {
        //     name: 'Liqueur, Cordials, & Schnapps',
        //     data: [14, 48, 71, 71, 26]
        // },
        // {
        //     name: 'Mezcal & Tequila',
        //     data: [59, 145, 64, 167, 49]
        // }, {
        //     name: 'Ready to Drink',
        //     data: [8, 40, 22, 22, 50]
        // },
        // {
        //     name: 'Rum',
        //     data: [7, 35, 22, 18, 41]
        // }, {
        //     name: 'Scotch Whisky',
        //     data: [25, 75, 50, 22, 55]
        // },
        // {
        //     name: 'Vodka',
        //     data: [30, 8, 20, 83, 65]
        // }

        {
            name: 'American Whiskey',
            data: [96, 197, 175, 167, 60, 96, 197, 175, 167, 60, 5, 36, 27, 57, 26]
        },
        {
            name: 'Brandy',
            data: [26, 35, 36, 5, 36, 27, 57, 26, 27, 57, 26, 35, 36, 27, 57]
        },
        {
            name: 'Canadian Whisky',
            data: [7, 39, 23, 27, 46, 7, 39, 23, 5, 36, 27, 57, 26, 27, 46]
        }, {
            name: 'Gin',
            data: [23, 41, 63, 40, 33, 5, 36, 27, 57, 26, 23, 41, 63, 40, 33]
        },
        {
            name: 'Liqueur, Cordials, & Schnapps',
            data: [14, 48, 5, 36, 27, 57, 26, 71, 71, 26, 71, 71, 26, 96, 197]
        },
        {
            name: 'Mezcal & Tequila',
            data: [59, 145, 64, 167, 49, 5, 36, 27, 57, 26, 45, 64, 167, 49, 96]
        },
        {
            name: 'Ready to Drink',
            data: [8, 40, 22, 22, 5, 36, 27, 57, 26, 50, 20, 83, 65, 50]
        },
        {
            name: 'Rum',
            data: [7, 35, 22, 5, 36, 27, 57, 26, 18, 41, 5, 36, 27, 57, 26]
        }, {
            name: 'Scotch Whisky',
            data: [25, 75, 50, 22, 55, 18, 41, 5, 36, 27, 57, 26, 96, 197, 15]
        },
        {
            name: 'Vodka',
            data: [5, 36, 27, 57, 26, 30, 8, 20, 83, 65, 50, 22, 55, 96, 17]
        }
    ];
    var categories = [["2/2/23-", "2/5/23"], ["2/7/23-", "2/12/23"], ["2/13/23-", "2/19/23"], ["2/20/23-", "2/26/23"], ["2/27/23-", "2/28/23"], ["2/2/23-", "2/5/23"], ["2/7/23-", "2/12/23"], ["2/13/23-", "2/19/23"], ["2/20/23-", "2/26/23"], ["2/27/23-", "2/28/23"], ["2/2/23-", "2/5/23"], ["2/7/23-", "2/12/23"], ["2/13/23-", "2/19/23"], ["2/20/23-", "2/26/23"], ["2/27/23-", "2/28/23"]];

    var options = {
        series: data,
        chart: {
            fontFamily: "inherit",
            stacked: false,
            type: 'bar',
            height: 400,
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: false
            },
            animations: {
                enabled: true, // Enable animations during initial rendering
                easing: 'easein', // Initial animation easing (example: 'linear', 'easein', 'easeout', 'easeinout')
                speed: 600, // Initial animation speed in milliseconds
                animateGradually: {
                    enabled: false, // Disable gradual animation of data points on chart load
                    delay: 150, // Delay between individual data point animations in milliseconds
                },
                dynamicAnimation: {
                    enabled: true, // Enable dynamic animations (e.g., when data is updated)
                    speed: 100, // Speed of dynamic animations in milliseconds
                },
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 2,
                dataLabels: {
                    position: 'bottom'
                }
            }
        },
        legend: {
            show: true,
            markers: {
                radius: 12,
                fillColors: [blue, green, red, purple, gray_500, orange, cyan, blue_100, blue_900, gray_600, yellow],
            },
            height: 48,
        },
        dataLabels: {
            enabled: false,
            style: {
                fontSize: '10px',
            },
            formatter: function (e) {
                return e + "%"
            }
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"]
        },
        xaxis: {
            categories: categories,
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            tickPlacement: 'on',
            labels: {
                show: true,
                rotate: 0,
		hideOverlappingLabels: false,
                /*formatter: function (value) {
                    const firstIndex = 0;
                    const lastIndex = categories.length - 1;
                    const midIndex = Math.floor(categories.length / 2);

                    if (value === categories[firstIndex] || value === categories[lastIndex] || value === categories[midIndex]) {
                        return value;
                    }

                    return '';
                },*/
                style: {
                    colors: gray_500,
                    fontSize: "11px"
                }
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
            tickAmount: 4,
            min: 0,
            // max: 700,
            title: {
                text: '',
                style: {
                    color: gray_500,
                    fontSize: "12px",
                    fontWeight: 400,
                },
            },
            floating: false,
            labels: {
                style: {
                    colors: gray_500,
                    fontSize: "11px"
                },
                formatter: function (e) {
                    return e.toFixed(0);
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
            }
        },
        colors: [blue, green, red, purple, gray_500, orange, cyan, blue_100, blue_900, gray_600, yellow],
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
    };
    var chart = new ApexCharts(element, options);
    var chart2 = new ApexCharts(element2, options);
    chart.render();
    chart2.render();

    // Button click event to toggle chart type
    $('.grouped-view').on('click', function () {
        // Toggle the 'stacked' option value
        var newStackedValue = false;
        var newAnimationStyle = {
            enabled: true,
            easing: 'easeout', // New easing style (example: 'linear', 'easein', 'easeout', 'easeinout')
            speed: 1000, // New animation speed in milliseconds
            animateGradually: {
                enabled: true,
                delay: 30,
            },
            dynamicAnimation: {
                enabled: true,
                speed: 300,
            },
        };
        // Update the chart options with the new 'stacked' value
        chart.updateOptions({
            chart: {
                stacked: newStackedValue,
                animations: newAnimationStyle,
            },
        });
        chart2.updateOptions({
            chart: {
                stacked: newStackedValue,
                animations: newAnimationStyle,
            },
        });
    });
    // Button click event to toggle chart type
    $('.stacked-view').on('click', function () {
        // Toggle the 'stacked' option value
        var newStackedValue = true;

        // Update the chart options with the new 'stacked' value
        chart.updateOptions({
            chart: {
                stacked: newStackedValue,
            },
        });
        chart2.updateOptions({
            chart: {
                stacked: newStackedValue,
            },
        });
    });
});

