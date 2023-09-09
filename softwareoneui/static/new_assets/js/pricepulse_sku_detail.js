//filter dropdowns----------------
JDSelect2("https://run.mocky.io/v3/f6f7189f-8b34-4fd9-aa12-7dbebd4df3e3", "kt_select3", "Select State (optional)");
JDSelect2("https://run.mocky.io/v3/e9be697d-7441-40aa-ad9e-3f060ae85a0d", "kt_select2", "Compare to other SKU");


//Datatable for store name listing-----------------
JDDatatable('https://run.mocky.io/v3/ce1d5d22-8940-4efc-9b16-273cbd177ec9', "bcdtable","Price Pulse Store");
$('#search-filter').keyup(function() {
    $('#bcdtable').dataTable().fnDraw();
});

//SKU detail data---------------
const container = document.querySelector(".sku-detail");
const skudetaildata = async () => {
    const response = await fetch(`https://run.mocky.io/v3/87a27bc7-8c83-4e88-a6c1-7ea561af9cfd`);
    //console.log(response);
    const data = await response.json();
    // console.log(data[0]);
    data.map((curElm, index) => {
	        const htmlData = `
 <div class="row gx-4 fs-5">

<div class="col-md-12 col-lg-8">
 <div class="sku-detail">
    <div class="main-heading border-none">
       <h1 class="fw-bold">${curElm.sku_title}</h1>
    </div>
    <ul class="list-inline m-0">
       <li class="my-2">
       <span>
          <h3 class="text-primary fw-bold mb-1">${curElm.bottle_size_title}</h3>
          <p>${curElm.bottle_size_value}</p>
          </span>
       </li>
       <li class="my-2">
       <span>
          <h3 class="text-primary fw-bold mb-1">${curElm.brand_title}</h3>
          <p>${curElm.brand_name}</p>
          </span>
       </li>
    </ul>
    <div class="row mt-sm-4  gx-4">
       <div class="col-sm-12 col-md-4 mb-3 mb-md-0">
          <div class="price-detail border  ">
             <span class="price">${curElm.price_detail[0].price}</span>
             <div class="detail d-flex align-items-start justify-content-between mt-1">
                <h4 class="text-primary mt-1">${curElm.price_detail[0].title}</h4>
                <span class="icon">
                <i class="fas fa-dollar-sign"></i>
                </span>
             </div>
          </div>
       </div>
       <div class="col-sm-12 col-md-4  mb-3 mb-md-0">
          <div class="price-detail border ">
             <span class="price">${curElm.price_detail[1].price}</span>
             <div class="detail d-flex align-items-center justify-content-between mt-2">
                <h4 class="text-primary">${curElm.price_detail[1].title}<span class="text-muted">${curElm.price_detail[1].end_date}</span></h4>
                <span class="icon">
                <i class="fas fa-chart-line"></i>
                </span>
             </div>
          </div>
       </div>
       <div class="col-sm-12 col-md-4  mb-3 mb-md-0">
          <div class="price-detail border ">
             <span class="price">${curElm.price_detail[2].price}</span>
             <div class="detail d-flex align-items-center justify-content-between mt-2">
                <h4 class="text-primary">${curElm.price_detail[2].title}<span  class="text-muted">${curElm.price_detail[2].end_date}</span></h4>
                <span class="icon">
                <i class="fas fa-chart-line"></i>
                </span>
             </div>
          </div>
       </div>
    </div>
 </div>
</div>
<div class="col-md-12 col-lg-4 mt-8 mt-lg-0">
<div class="sku-image border h-100 d-flex align-items-center justify-content-center rounded">
<div class= "img-wrapper  rounded ">
   <img src="${curElm.sku_image}" alt="" class="img-fluid p-2">
</div>
</div>
</div>
</div>`;
	container.insertAdjacentHTML('beforeend', htmlData);
    })
}
skudetaildata();
//--------------------

//change graphs on click of compare to other sku filter

$('.select2-sku').on("change", function() {
    value = $(".select2-sku :selected").attr('value');
    if (value != null) {
	$('#view-sku-graph').fadeOut();
	$('#view-sku-comparison').fadeIn();
    } else {
	$('#view-sku-graph').fadeIn();
	$('#view-sku-comparison').fadeOut();
    }
});
//-----------------

//change graph values on selecting drop-down
const getchartdata = async () => {
    const response1 = await fetch('https://run.mocky.io/v3/fd14126e-9140-405b-936c-3b3e7cb387c1');
    const response2 = await fetch('https://run.mocky.io/v3/81a280d8-1587-4597-81f6-4c18dea003d6');
    const response3 = await fetch('https://run.mocky.io/v3/db27bf42-a6a1-428c-a39f-f5cb68137935');
    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();
    //sku comparison chart
    var chart1 = new Highcharts.Chart({
	chart: {
	    type: 'line',
	    renderTo: 'sku_comparison',
	    margin: [15, 10, 80, 80]
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
	    }
	},
	yAxis: {
	    title: {
		y: 0,
		x: 2,
		text: "Median Price",
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
    //sku comparison chart 2
    var chart2 = new Highcharts.chart('sku_comparison_2', {
	chart: {
	    type: 'line',
	    margin: [35, 10, 80, 80]
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
	    }
	},
	yAxis: {
	    title: {
		y: 0,
		x: 2,
		text: "Median Price",
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
	series: data2
    });

    // average price chart
    var chart3 = Highcharts.chart('average_price_diff', {
	chart: {
	    type: 'area',
	    margin: [60, 0, 40, 80]
	},
	title: {
	    text: 'Price Premium over' + $(".select2-sku:selected").text(),
	    style: {
		fontSize: 14,
		marginBottom: 10,
	    },
	    y: 0
	},

	subtitle: {
	    text: ''
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
		text: "Median Price Difference",
	    },
	    labels: {
		format: '${value:.2f}'
	    }
	},

	tooltip: {
	    split: true,
	    // valueSuffix: ' millions'
	},
	plotOptions: {
	    series: {
		lineWidth: 2,
		pointStart: Date.UTC(2021, 0, 1),
		pointInterval: 10 * 24 * 36e5,
		showInLegend: false,
		name: '',
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

	credits: {
	    enabled: false
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
	series: data3

    });
    $('.select2-sku').on("change", function() {
	charttitle = $(".select2-sku :selected").text();
	chart3.setTitle({
	    text: 'Price Premium over ' + charttitle
	});
    });

    $('.select2-state').on("change", function() {
	Promise.all([
	    fetch('https://run.mocky.io/v3/d15b0e69-dc9c-404f-a803-b8094586df76'),
	    fetch('https://run.mocky.io/v3/33693979-69b2-4275-af06-72093767fcbe'),
	    fetch('https://run.mocky.io/v3/98c4393b-21fd-4525-bc51-4c45beb8b94b')
	]).then(([apiRes1, apiRes2, apiRes3]) => {

	    // chart 1
	    if (apiRes1.ok) {
		apiRes1.json().then(jsonResp => {
		    chart1.series[0].update({
			data: jsonResp[0].data
		    });
		});

	    }
	    // chart 2
	    if (apiRes2.ok) {
		apiRes2.json().then(jsonResp => {
		    chart2.series[0].update({
			data: jsonResp[0].data
		    });
		    chart2.series[1].update({
			data: jsonResp[1].data
		    });
		});

	    }
	    // chart 3
	    if (apiRes3.ok) {
		apiRes3.json().then(jsonResp => {
		    chart3.series[0].update({
			data: jsonResp[0].data
		    });
		});

	    }
	}).catch((err) => {
	    console.log(err);
	});
    });
}
getchartdata();
