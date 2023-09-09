//filter dropdowns----------------
JDSelect2("https://run.mocky.io/v3/13bc58b8-145b-463f-a31c-92dc40f062ae", "brand", "Select Report");

//Datatable for store name listing-----------------
JDDatatable('https://run.mocky.io/v3/ce1d5d22-8940-4efc-9b16-273cbd177ec9', "bcdtable","Price Pulse Records");

//change graph values on selecting drop-down
const getchartdata = async () => {
    const response1 = await fetch('https://run.mocky.io/v3/50a48e70-a2b3-49df-b01a-5f3ebde1740a');
    const data1 = await response1.json();
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
getchartdata();
