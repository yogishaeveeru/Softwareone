JDSelect2("https://run.mocky.io/v3/25b01520-6ae0-4c64-b74f-1c423b5b747c", "state", "Select State");
JDSelect2("https://run.mocky.io/v3/4c8461df-3294-4c26-b637-8c325c6521d6", "marketplace", "Select Retailer/Website");
JDSelect2("https://run.mocky.io/v3/5e44aeea-484f-4eff-8a1a-25a5e6ab454b", "supplier", "Select Supplier");

//Data table
JDDatatable('https://run.mocky.io/v3/fef38fb2-2f3a-405f-8625-d135eb18c88c', "price-report","Price Pulse Price Records");

//candelstick chart
var chart;
var boxesPerSeries = 4;
var numberOfSeries = 4;
var numberOfPoints = 100;

$(function() {
    // call api to get chart data
    $.getJSON( "https://run.mocky.io/v3/057adf68-39d8-4243-b67d-3edccdea800f", function( chartData ) {
	// console.log('chartData',chartData);

	$('#container').highcharts({
	    chart: {
		type: 'boxplot',
		margin: [30, 10, 120, 65]
	    },

	    legend: {
		enabled: true,
		itemStyle: {
		    fontSize: "11px",
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

	    xAxis: {
		title: {
		    text: 'Marketplace',
		    y:10
		},
		categories: ['TW+M', 'BeVMo', 'Alb', 'Walmart'],
		labels: {
		    style: {
			fontWeight: 'bold'
		    }
		}
	    },
	    tooltip: {
		valueDecimals: 2,
		valuePrefix: '$',

	    },

	    yAxis: {
		// min: 0,
		title: {
		    text: ''
		},
		labels: {
		    format: '${value:.2f}'
		}
	    } //Box + Whisker

	});
	chart = $('#container').highcharts();

	//-----------------------------------------------------
	//build the data and add the series to the chart
	var offset;
	var loop = 0;
	for (var i = 0; i < numberOfSeries; i++) {
	    //generate random data, then calculate box plot values
	    var boxData = [];
	    for (var j = 0; j < boxesPerSeries; j++) {
		// var data = randomData(
		//     numberOfPoints,
		//     false,
		//     (10 * Math.random())
		// );
		var boxValues = getBoxValues(chartData[loop++]);
		boxData.push(boxValues);

	    }
	    //add additional grouping within each group
	    offset = (i < (numberOfSeries / 2) ? -0.05 : 0.05);
	    //add the data to the chart as a boxplot series
	    chart.addSeries({
		pointPlacement: offset,
		name: 'SKU Name ' + i,
		type: 'boxplot',
		color: Highcharts.getOptions().colors[i],
		fillColor: Highcharts.getOptions().colors[i],
		data: boxData
	    });
	}
	//-----------------------------------------------------
    });
})
//-----------------------------------------------
//wrap the percentile calls in one method
function getBoxValues(data) {
    var boxValues = {};
    boxValues.low = Math.min.apply(Math, data);
    boxValues.q1 = getPercentile(data, 25);
    boxValues.median = getPercentile(data, 50);
    boxValues.q3 = getPercentile(data, 75);
    boxValues.high = Math.max.apply(Math, data);
    return boxValues;
}
//get any percentile from an array
function getPercentile(data, percentile) {
    data.sort(numSort);
    var index = (percentile / 100) * data.length;
    var result;
    if (Math.floor(index) == index) {
	result = (data[(index - 1)] + data[index]) / 2;
    } else {
	result = data[Math.floor(index)];
    }
    return result;
}
//because .sort() doesn't sort numbers correctly
function numSort(a, b) {
    return a - b;
}
//-----------------------------------------------

var d = new Date();
var pointStart = d.getTime();
Highcharts.setOptions({
    global: {
	useUTC: false
    },
    chart: {
	alignTicks: false,
	type: '',
	margin: [60, 25, 100, 90],
	style: {
	    fontFamily: 'Poppins, sans-serif'
	},
	events: {
	    load: function() {
		this.credits.element.onclick = function() {
		    window.open(
			''
		    );
		}
	    }
	}
    },
    credits: {
	text: '',
	href: ''
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
    subtitle: {
	text: '',
	align: 'left',
	x: 52,
    },
    legend: {
	enabled: true
    },
    plotOptions: {
	area: {
	    lineWidth: 1,
	    marker: {
		enabled: false,
		symbol: 'circle',
		radius: 4
	    }
	},
	arearange: {
	    lineWidth: 1
	},
	areaspline: {
	    lineWidth: 1,
	    marker: {
		enabled: false,
		symbol: 'circle',
		radius: 4
	    }
	},
	areasplinerange: {
	    lineWidth: 1
	},
	boxplot: {
	    groupPadding: 0.15,
	    pointPadding: 0.1,
	    fillColor: 'rgba(177,69,0,1)',
	    color: 'rgba(177,69,0,1)',
	    lineWidth: 0,
	    stemWidth: 2,
	    whiskerWidth: 0,
	    whiskerLength: 25,
	    medianWidth: 2,
	    medianColor: 'rgba(255,255,255,1)'


	},
	bubble: {
	    minSize: '0.25%',
	    maxSize: '17%'
	},
	column: {
	    //stacking:'normal',
	    groupPadding: 0.05,
	    pointPadding: 0.05
	},
	columnrange: {
	    groupPadding: 0.05,
	    pointPadding: 0.05
	},
	errorbar: {
	    groupPadding: 0.05,
	    pointPadding: 0.05,
	    showInLegend: true
	},
	line: {
	    lineWidth: 1,
	    marker: {
		enabled: false,
		symbol: 'circle',
		radius: 4
	    }
	},
	scatter: {
	    marker: {
		symbol: 'circle',
		radius: 5
	    }
	},
	spline: {
	    lineWidth: 1,
	    marker: {
		enabled: false,
		symbol: 'circle',
		radius: 4
	    }
	},
	series: {
	    shadow: false,
	    borderWidth: 0,
	    states: {
		hover: {
		    lineWidthPlus: 0,
		}
	    }
	}
    },
    xAxis: {
	title: {
	    //text: 'X Axis Title',
	    rotation: 0,
	    textAlign: 'center',
	    style: {
		color: 'rgba(0,0,0,.9)'
	    }
	},
	labels: {
	    style: {
		color: 'rgba(0,0,0,.9)',
		fontSize: '11px'
	    }
	},
	lineWidth: .5,
	lineColor: 'rgba(0,0,0,.5)',
	tickWidth: .5,
	tickLength: 3,
	tickColor: 'rgba(0,0,0,.75)'
    },
    yAxis: {
	minPadding: 0,
	maxPadding: 0,
	gridLineColor: 'rgba(204,204,204,.25)',
	gridLineWidth: 0.5,
	title: {
	    //text: 'Y Axis<br/>Title',
	    rotation: -90,
	    textAlign: 'right',
	    y: -30,
	    style: {
		color: 'rgba(0,0,0,.9)',
	    }
	},
	labels: {
	    style: {
		color: 'rgba(0,0,0,.9)',
		fontSize: '9px'
	    }
	},
	lineWidth: .5,
	lineColor: 'rgba(0,0,0,.5)',
	tickWidth: .5,
	tickLength: 3,
	tickColor: 'rgba(0,0,0,.75)'
    }
});
function randomData(points, positive, multiplier) {
    points = !points ? 1 : points;
    positive = positive !== true ? false : true;
    multiplier = !multiplier ? 1 : multiplier;

    function rnd() {
	return ((
	    Math.random() +
		Math.random() +
		Math.random() +
		Math.random() +
		Math.random() +
		Math.random()
	) - 3) / 3;
    }
    var rData = [];
    for (var i = 0; i < points; i++) {
	val = rnd();
	val = positive === true ? Math.abs(val) : val;
	val = multiplier > 1 ? (val * multiplier) : val;
	rData.push(val);
    }
    return rData;
}
//

//line chart
$.ajax('https://run.mocky.io/v3/3368892a-f600-4c30-a731-259822f0fb62',   // request url
       {
	   success: function (data, status, xhr) {
	       Highcharts.chart('container-1', {
		   chart: {
		       type: 'line',
		       margin: [35, 10, 90, 50]
		   },
		   plotOptions: {
		       series: {
			   lineWidth: 2
		       }
		   },

		   legend: {
		       enabled: true,
		       itemStyle: {
			   fontSize: "11px",
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
		   xAxis: {
		       type: 'datetime',
		       labels: {
			   formatter:function(){
			       return Highcharts.dateFormat('%Y/%m/%d',this.value*1000);
			   }
		       },
		       tickInterval: 7*24*3600,
		       title: {
			   y:10
		       }
		   },
		   yAxis: {
		       title: {
			   y: -70,
			   x: 2,
			   text: "",
		       },
		       labels: {
			   format: '${value:.2f}'
		       }
		   },

		   series:data,
		   tooltip: {
		       enabled: true,
		       valueDecimals: 2,
		       formatter: function() {
			   return '<b>'+ this.series.name +': $'+(this.y).toFixed(2)+'</b><br/>'+
			       Highcharts.dateFormat('%Y/%m/%d', this.x*1000);

		       }
		   },
	       });
	   }
       });

$.ajax('https://run.mocky.io/v3/3368892a-f600-4c30-a731-259822f0fb62',   // request url
       {
	   success: function (data, status, xhr) {
	       Highcharts.chart('container-2', {
		   chart: {
		       type: 'line',
		       margin: [35, 10, 90, 50]
		   },
		   plotOptions: {
		       series: {
			   lineWidth: 2,
		       }
		   },

		   legend: {
		       enabled: true,
		       itemStyle: {
			   fontSize: "11px",
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
		   xAxis: {
		       type: 'datetime',
		       labels: {
			   formatter:function(){
			       return Highcharts.dateFormat('%Y/%m/%d',this.value*1000);
			   }
		       },
		       tickInterval: 20*24 * 3600 ,
		       title: {
			   y:10
		       }
		   },
		   yAxis: {
		       title: {
			   y: -70,
			   x: 2,
			   text: "",
		       },
		       labels: {
			   format: '${value:.2f}'
		       }
		   },
		   tooltip: {
		       enabled: true,
		       formatter: function() {
			   return '<b>'+ this.series.name +': $'+(this.y).toFixed(2)+'</b><br/>'+
			       Highcharts.dateFormat('%Y/%m/%d', this.x*1000);

		       },
		       valueDecimals: 2
		   },

		   series:data
	       });
	   }
       });


//selected skus
var elem = $("input:checkbox");

$(function(){
    $(".apply").click(function(){

	var selected = elem
	    .filter(':checked') //Filter only checked checkboxes
	    .map(function() {
		return $("label[for='" + this.id + "']").html();
	    })
	    .get(); //Get array

	var html = '<div class="result-content scroll-y mh-200px mh-lg-250px border rounded p-4 mt-2 mb-5">' + selected.join('') + '</div>';

	$(".result").html(html);
	$(".result-content:empty").hide();
    });
    $("body").delegate(" .result .delete", "click", function(e){
	e.preventDefault();
	$(this).closest("span").parent().remove();
	$('.result-content').filter(function () {
	    return $(this).children().length < 1;
	}).remove();
	var value1 = $(this).closest("span").parent().attr("for");
	$("input:checkbox[id ='" + value1 + "']").prop("checked", false);
    });


});
