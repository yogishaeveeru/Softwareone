"use strict";

// Shared Colors Definition
const primary = '#6993FF';
const success = '#1BC5BD';
const info = '#8950FC';
const warning = '#FFA800';
const danger = '#F64E60';
var date = new Date();
var month = date.getMonth();
var all_days = [];
while (date.getMonth() == month) {
    var d = date.getDate().toString().padStart(2, '0');
    all_days.push(d);
    date.setDate(date.getDate() + 1);
}
console.log(all_days);
// Class definition
function generateBubbleData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
	var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
	var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
	var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

	series.push([x, y, z]);
	baseval += 86400000;
	i++;
    }
    return series;
}

function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
	var x = 'w' + (i + 1).toString();
	var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

	series.push({
	    x: x,
	    y: y
	});
	i++;
    }
    return series;
}

var KTApexChartsDemo = function () {
    // Private functions
    var _demo1 = function () {
	const apexChart = "#linechart";
	var options = {
	    series: [
		{
		    name: "Awards & Accolades",
		    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
		},
		{
		    name: "Brand Description",
		    data: [15, 21, 55, 45, 49, 55, 69, 91, 125]
		},
		{
		    name: "Product Description",
		    data: [8, 31, 40, 51, 49, 62, 69, 91, 148]
		},
		{
		    name: "Product Image",
		    data: [50, 41, 30, 45, 49, 55, 69, 91, 125]
		},
		{
		    name: "Product Name",
		    data: [2, 11, 28, 45, 49, 55, 69, 91, 125]
		},
 
	    ],
	    chart: {
		height: 350,
		type: 'line',
		zoom: {
		    enabled: false
		}
	    },
	    dataLabels: {
		enabled: false
	    },
	    stroke: {
		curve: 'straight'
	    },
	    grid: {
		row: {
		    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
		    opacity: 0.5
		},
	    },
	    xaxis: {
		display: false,
		categories: all_days,
	    },
	    colors: [primary, warning, '#000000', info, danger]
	};

	var chart = new ApexCharts(document.querySelector(apexChart), options);
	chart.render();
    }



	return {
	    // public functions
	    init: function () {
		_demo1();
	    }
	};
    }();

$(document).ready(function () {
	KTApexChartsDemo.init();
    });
    
