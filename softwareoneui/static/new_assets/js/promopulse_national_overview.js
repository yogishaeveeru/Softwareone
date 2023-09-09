$('#total_bev_alc').click(function(){
    $('#total_bev_content').slideDown();
    $('#categories_content').slideUp();
});
$('#categories').click(function(){
    $('#total_bev_content').slideUp();
    $('#categories_content').slideDown();

});
$('#back_total_bevmo').click(function(){
    $('#pp-rep-categories').slideUp();
    $('#pp-repcat').slideDown();
    $('#total_bev_alc').removeClass('d-none');
    $('#categories').removeClass('d-none');
    $(this).addClass('d-none');
});
$('#back_categories').click(function(){
    $('#pp-repbrand').slideUp();
    $('#back_total_bevmo').removeClass('d-none');
    $('#categories').addClass('d-none');
    $(this).addClass('d-none');
    $('#brands').addClass('d-none');
    $('#suppliers').addClass('d-none');
    $('#pp-rep-categories').slideDown();
});
$('#back_categories_total_bev').click(function(){
    $('#pp-rep-categories').slideUp();
    $('#pp-repcat').slideDown();
    $('#total_bev_alc').removeClass('d-none');
    $('#categories').removeClass('d-none');
    $(this).addClass('d-none');
    $('#brands').addClass('d-none');
    $('#suppliers').addClass('d-none');
});
$('#brands').click(function(){
    $('#brands_content').slideDown();
    $('#suppliers_content').slideUp();
});
$('#suppliers').click(function(){
    $('#suppliers_content').slideDown();
    $('#brands_content').slideUp();
});
function category_name_set(){
    $('#pp-repcat').slideUp();
    $('#total_bev_alc').addClass('d-none');
    $('#categories').addClass('d-none');
    $('#pp-rep-categories').slideDown();
    $('#back_total_bevmo').removeClass('d-none');
}
function assign_category_name_type(){
    $('#pp-rep-categories').slideUp();
    $('#pp-repbrand').slideDown();
    $('#brands').removeClass('d-none');
    $('#suppliers').removeClass('d-none');
    $('#back_categories').removeClass('d-none');
    $('#back_total_bevmo').addClass('d-none');
}
function set_category_name_type(){
    $('#pp-repcat').slideUp();
    $('#total_bev_alc').addClass('d-none');
    $('#categories').addClass('d-none');
    $('#pp-repbrand').slideDown();
    $('#back_categories_total_bev').removeClass('d-none');
    $('#brands').removeClass('d-none');
    $('#suppliers').removeClass('d-none');
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
            <div class="bg-white shadow rounded d-flex align-items-center text-center flex-column cursor-pointer px-2 py-3 border border-hover-dashed-blue h-100 text-break" onclick="category_name_set();">
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
        <div class="col-6 my-2">
            <div class="bg-white shadow rounded d-flex align-items-center text-center flex-column cursor-pointer px-2 py-3 border border-hover-dashed-blue h-100 text-break" onclick="set_category_name_type();">
            <span class="fs-2hx fw-boldest text-gray-800 lh-1 ls-n2">${curElm.mentions}</span>
            <span class="badge  bg-blue fs-base my-2"> ${curElm.percentage}</span>
            <h3 class="mb-0 mt-1 fs-4 fw-bolder text-gray-800 ">${curElm.name}</h3>
            </div>
        </div>
    `;
	categories_content.insertAdjacentHTML('beforeend', htmlData);
    })
}
get_categories_data();

//categories content
const pp_rep_categories_content = document.querySelector("#pp-rep-categories_content");
const get_pp_rep_categories_content= async () => {
    const response = await fetch(`https://run.mocky.io/v3/eadb5cd3-42ca-4c0f-9d58-eb346498dca1`);
    //console.log(response);
    const data = await response.json();
    // console.log(data[0]);
    data.map((curElm, index) => {
	        const htmlData = `
        <div class="col-6 my-2">
            <div class="bg-white shadow rounded d-flex align-items-center text-center flex-column cursor-pointer px-2 py-3 border border-hover-dashed-blue h-100 text-break" onclick="assign_category_name_type()">
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
const get_brands_content= async () => {
    const response = await fetch(`https://run.mocky.io/v3/a341599a-34f4-436a-b3dc-24d0a070de7f`);
    //console.log(response);
    const data = await response.json();
    // console.log(data[0]);
    data.map((curElm, index) => {
	        const htmlData = `
        <div class="col-6 my-2">
            <div class="bg-white shadow rounded d-flex align-items-center text-center flex-column  px-2 py-3 border border-hover-dashed-blue h-100 text-break">
                <span class="fs-2hx fw-boldest text-gray-800 lh-1 ls-n2">${curElm.mentions}</span>
                <span class="badge  bg-blue fs-base my-2"> ${curElm.percentage}</span>
                <h3 class="mb-0 mt-1 fs-4 fw-bolder text-gray-800 ">${curElm.name}</h3>
                <div class="img-wrapper mt-3 border border-dashed border-gray-200 rounded p-1 bg-gray-100 min-w-100" style="max-height:112px;min-height:112px; background:#f5f8fa">
                    <img src="${curElm.brand}" class="img-fluid " />
                </div>
            </div>
        </div>
    `;
	brands_content.insertAdjacentHTML('beforeend', htmlData);
    })
}
get_brands_content();

//suppliers content
const suppliers_content = document.querySelector("#suppliers_content");
const get_suppliers_content= async () => {
    const response = await fetch(`https://run.mocky.io/v3/d4d11d88-e55b-4d02-837d-e15fb0d26d5d`);
    //console.log(response);
    const data = await response.json();
    // console.log(data[0]);
    data.map((curElm, index) => {
	        const htmlData = `
        <div class="col-6 my-2">
            <div class="bg-white shadow rounded d-flex align-items-center text-center flex-column  px-2 py-3 border border-hover-dashed-blue h-100 text-break">
                <span class="fs-2hx fw-boldest text-gray-800 lh-1 ls-n2">${curElm.mentions}</span>
                <span class="badge  bg-blue fs-base my-2"> ${curElm.percentage}</span>
                <h3 class="mb-0 mt-1 fs-4 fw-bolder text-gray-800 ">${curElm.name}</h3>
                <div class="img-wrapper mt-3 border border-dashed border-gray-200 rounded p-1 bg-gray-100 min-w-100" style="max-height:112px;min-height:112px; background:#f5f8fa">
                    <img src="${curElm.brand}" class="img-fluid " />
                </div>
            </div>
        </div>
    `;
	suppliers_content.insertAdjacentHTML('beforeend', htmlData);
    })
}
get_suppliers_content();

//cat chart
function catchartProducer(data){
    chart = Highcharts.chart('total_bev_alc_chart', {
	chart: {
	    type: 'area',
	    renderTo: 'total_bev_alc_chart',
	    margin: [15, 10, 110, 70],
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
	    area: {
		lineWidth: 2,
		pointStart: Date.UTC(2021, 0, 1),
		pointInterval: 10 * 24 * 36e5,

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
	    }
	},
	yAxis: {
	    title: {
		y: 0,
		x: 2,
		text: "Mentions",
	    },
	    labels: {
		format: '{value:.1f}'
	    }
	},
	tooltip: {
	    split: true,
	    valueSuffix: ''
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
	    maxHeight: 72,
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
	series: data,
    });
}
function create_cat_Chart(){
    $.ajax({
	url: 'https://run.mocky.io/v3/c8ba49aa-134d-4b91-ad00-dd1b077a1d91',
	method: "GET",
	contentType: "application/json;charset=utf-8",
	dataType: "json",
	success: function(data){
	    console.log("called", data);
	    catchartProducer(data);
	},
	error: function(xhr){
	    console.log("Error in post request for View Report", xhr.responseText)
	}
    })
}
create_cat_Chart();

//category chart
function categorychartProducer(data){
    chart = Highcharts.chart('category-chart', {
	chart: {
	    type: 'column',
	    renderTo: 'category-chart',
	    margin: [15, 10, 110, 70],
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
	    area: {
		lineWidth: 2,
		pointStart: Date.UTC(2021, 0, 1),
		pointInterval: 10 * 24 * 36e5,

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
	    }
	},
	yAxis: {
	    title: {
		y: 0,
		x: 2,
		text: "Mentions",
	    },
	    labels: {
		format: '{value:.1f}'
	    }
	},
	tooltip: {
	    split: true,
	    valueSuffix: ''
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
	    maxHeight: 72,
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
	series: data,
    });
}
function create_category_Chart(){
    $.ajax({
	url: 'https://run.mocky.io/v3/62f304f3-8308-4e1e-a8d9-3480413b9cc6',
	method: "GET",
	contentType: "application/json;charset=utf-8",
	dataType: "json",
	success: function(data){
	    console.log("called", data);
	    categorychartProducer(data);
	},
	error: function(xhr){
	    console.log("Error in post request for View Report", xhr.responseText)
	}
    })
}
create_category_Chart();

//brands chart
function brandchartProducer(data){
    chart = Highcharts.chart('brands_chart', {
	chart: {
	    type: 'column',
	    renderTo: 'brands_chart',
	    margin: [15, 10, 110, 70],
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
	    area: {
		lineWidth: 2,
		pointStart: Date.UTC(2021, 0, 1),
		pointInterval: 10 * 24 * 36e5,

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
	    }
	},
	yAxis: {
	    title: {
		y: 0,
		x: 2,
		text: "Mentions",
	    },
	    labels: {
		format: '{value:.1f}'
	    }
	},
	tooltip: {
	    split: true,
	    valueSuffix: ''
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
	    maxHeight: 72,
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
	series: data,
    });
}
function create_brand_Chart(){
    $.ajax({
	url: 'https://run.mocky.io/v3/e6dcda53-d4e9-4f99-8085-576edb629ec6',
	method: "GET",
	contentType: "application/json;charset=utf-8",
	dataType: "json",
	success: function(data){
	    console.log("called", data);
	    brandchartProducer(data);
	},
	error: function(xhr){
	    console.log("Error in post request for View Report", xhr.responseText)
	}
    })
}
create_brand_Chart();
