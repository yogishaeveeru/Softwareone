"use strict";
var KTDatatablesDataSourceHtml = function() {
	var img = "<img src='1800anejo.jpg' alt='image'>";
	// var dataJSONArray = JSON.parse('[["1800anejo","Espolon Anejo","375ml","$34.99","Total Wine & More - Queen Creek","Arizona","Queen Creek","85142"]]');

	var initTable1 = function() {
		var table = $('#kt_datatable');
		var bcstable = $('#kt_datatablebcs');
		var jendatable = $('#kt_datatablejenda');
		var jendatable1 = $('#kt_datatablejenda1');
		var jendatablecustom = $('#kt_datatablejendacustom');
		bcstable.DataTable({
			dom: "<'d-flex justify-content-end mt-10'f><t><'d-flex justify-content-center mt-1'p>",
			// pageLength : 4,
			data: [
				"22",
				"44",
				"55",
				"777"
			],
			columns: [
				{ "data": [0] },
				{ "data": [1] },
				{ "data": [2] },
				{ "data": [3] }
		],
			responsive: true
		});
		jendatablecustom.DataTable({
			dom: "<'d-flex justify-content-end mt-10'f><t><'d-flex justify-content-center mt-1'p>",
			pageLength : 4,
			data:[
				[
					"<img src='assets/media/svg/icons/Shopping/Chart-line1.svg' alt='svg icon' height='25'>",
					"<h4 class='font-size-h4 d-flex align-items-center'>3 new SKUs test Report <small class='text-muted ml-2 font-weight-normal font-size-sm'>Index Report</small></h4>",
					"<span class='border-right pr-4 d-flex align-items-center'><span class='badge badge-warning mr-2 text-white'>5</span> SKU</span>",
					"<span class='border-right pr-4 d-flex align-items-center'><i class='fa fa-clock mr-2'></i> 22 Sep, 20</span>",
					"<span class='d-flex align-items-center'><i class='fa fa-dollar-sign mr-2'></i> Regular Price</span>",
					"<span class='d-flex align-items-center'><i class='fa fa-filter mr-2'></i> Metro New York</span>",
					"<a href='#s' class='btn btn-link text-bg-hover-primary'>View</a>"
				],
				[
					"<img src='assets/media/svg/icons/Shopping/Chart-line1.svg' alt='svg icon' height='25'>",
					"<h4 class='font-size-h4 d-flex align-items-center'>goPuff Gin Average Pricing Trends <small class='text-muted ml-2 font-weight-normal font-size-sm'>Chain Report</small></h4>",
					"<span class='border-right pr-4 d-flex align-items-center'><span class='badge badge-warning mr-2 text-white'>5</span> SKU</span>",
					"<span class='border-right pr-4 d-flex align-items-center'><i class='fa fa-clock mr-2'></i> 22 Sep, 20</span>",
					"<span class='d-flex align-items-center'><i class='fa fa-dollar-sign mr-2'></i> Regular Price</span>",
					"<span class='d-flex align-items-center'><i class='fa fa-filter mr-2'></i> Metro New York</span>",
					"<a href='#s' class='btn btn-link text-bg-hover-primary'>View</a>"
				],
				[
					"<img src='assets/media/svg/icons/Shopping/Chart-line1.svg' alt='svg icon' height='25'>",
					"<h4 class='font-size-h4 d-flex align-items-center'>Chain Report - Kroger <small class='text-muted ml-2 font-weight-normal font-size-sm'>Index Report</small></h4>",
					"<span class='border-right pr-4 d-flex align-items-center'><span class='badge badge-warning mr-2 text-white'>5</span> SKU</span>",
					"<span class='border-right pr-4 d-flex align-items-center'><i class='fa fa-clock mr-2'></i> 22 Sep, 20</span>",
					"<span class='d-flex align-items-center'><i class='fa fa-dollar-sign mr-2'></i> Regular Price</span>",
					"<span class='d-flex align-items-center'><i class='fa fa-filter mr-2'></i> Metro New York</span>",
					"<a href='#s' class='btn btn-link text-bg-hover-primary'>View</a>"
				],
				[
					"<img src='assets/media/svg/icons/Shopping/Chart-line1.svg' alt='svg icon' height='25'>",
					"<h4 class='font-size-h4 d-flex align-items-center'>3 new SKUs test Report <small class='text-muted ml-2 font-weight-normal font-size-sm'>Index Report</small></h4>",
					"<span class='border-right pr-4 d-flex align-items-center'><span class='badge badge-warning mr-2 text-white'>5</span> SKU</span>",
					"<span class='border-right pr-4 d-flex align-items-center'><i class='fa fa-clock mr-2'></i> 22 Sep, 20</span>",
					"<span class='d-flex align-items-center'><i class='fa fa-dollar-sign mr-2'></i> Regular Price</span>",
					"<span class='d-flex align-items-center'><i class='fa fa-filter mr-2'></i> Metro New York</span>",
					"<a href='#s' class='btn btn-link text-bg-hover-primary'>View</a>"
				],
				[
					"<img src='assets/media/svg/icons/Shopping/Chart-line1.svg' alt='svg icon' height='25'>",
					"<h4 class='font-size-h4 d-flex align-items-center'>3 new SKUs test Report <small class='text-muted ml-2 font-weight-normal font-size-sm'>Index Report</small></h4>",
					"<span class='border-right pr-4 d-flex align-items-center'><span class='badge badge-warning mr-2 text-white'>5</span> SKU</span>",
					"<span class='border-right pr-4 d-flex align-items-center'><i class='fa fa-clock mr-2'></i> 22 Sep, 20</span>",
					"<span class='d-flex align-items-center'><i class='fa fa-dollar-sign mr-2'></i> Regular Price</span>",
					"<span class='d-flex align-items-center'><i class='fa fa-filter mr-2'></i> Metro New York</span>",
					"<a href='#s' class='btn btn-link text-bg-hover-primary'>View</a>"
				],
				[
					"<img src='assets/media/svg/icons/Shopping/Chart-line1.svg' alt='svg icon' height='25'>",
					"<h4 class='font-size-h4 d-flex align-items-center'>3 new SKUs test Report <small class='text-muted ml-2 font-weight-normal font-size-sm'>Index Report</small></h4>",
					"<span class='border-right pr-4 d-flex align-items-center'><span class='badge badge-warning mr-2 text-white'>5</span> SKU</span>",
					"<span class='border-right pr-4 d-flex align-items-center'><i class='fa fa-clock mr-2'></i> 22 Sep, 20</span>",
					"<span class='d-flex align-items-center'><i class='fa fa-dollar-sign mr-2'></i> Regular Price</span>",
					"<span class='d-flex align-items-center'><i class='fa fa-filter mr-2'></i> Metro New York</span>",
					"<a href='#s' class='btn btn-link text-bg-hover-primary'>View</a>"
				]
			],
			columns: [
				{ "data": [0] },
				{ "data": [1] },
				{ "data": [3] },
				{ "data": [2] },
				{ "data": [4] },
				{ "data": [5] },
				{ "data": [6] }
		],
			responsive: true
		})
		jendatable1.DataTable({
			dom: "<'d-flex justify-content-end mt-10'f><t><'d-flex justify-content-center mt-10'p>",
			pageLength : 5,
			data : [
				[
					"<span class='text-muted d-block font-size-xs'>Index Report</span>",
					"3 new SKUs test Report",
					"<span class='badge badge-warning text-white font-bold'>32</span> SKU",
					"Metro New York",
					"Average Price",
					"20-20-2009",
					"<a class='btn-link btn-link-primary'>View</a>"
				],
				[
					"<span class='text-muted d-block font-size-xs'>Chain Report</span>",
					"goPuff Gin Average Pricing Trends",
					"<span class='badge badge-warning text-white font-bold'>32</span> SKU",
					"Metro New York",
					"Average Price",
					"20-20-2009",
					"<a class='btn-link btn-link-primary'>View</a>"
				],
				[
					"<span class='text-muted d-block font-size-xs'>Account Report</span>",
					"Chain Report - Kroger",
					"<span class='badge badge-warning text-white font-bold'>5</span> SKU",
					"Metro New York",
					"Average Price",
					"20-20-2009",
					"<a class='btn-link btn-link-primary'>View</a>"
				],
				[
					"<span class='text-muted d-block font-size-xs'>Chain Report</span>",
					"Glenfiddich UNY vs MNY",
					"<span class='badge badge-warning text-white font-bold'>5</span> SKU",
					"Metro New York",
					"Average Price",
					"20-20-2009",
					"<a class='btn-link btn-link-primary'>View</a>"
				],
				[
					"<span class='text-muted d-block font-size-xs'>Price Trend</span>",
					"Appleton",
					"<span class='badge badge-info text-white font-bold'>2</span> Series",
					"Metro New York",
					"Average Price",
					"20-20-2009",
					"<a class='btn-link btn-link-primary'>View</a>"
				],
				[
					"<span class='text-muted d-block font-size-xs'>Index Report</span>",
					"3 new SKUs test Report",
					"<span class='badge badge-info text-white font-bold'>2</span> Series",
					"Metro New York",
					"Average Price",
					"20-20-2009",
					"<a class='btn-link btn-link-primary'>View</a>"
				],
				[
					"<span class='text-muted d-block font-size-xs'>Chain Report</span>",
					"goPuff Gin Average Pricing Trends",
					"<span class='badge badge-warning text-white font-bold'>5</span> SKU",
					"Metro New York",
					"Average Price",
					"20-20-2009",
					"<a class='btn-link btn-link-primary'>View</a>"
				],
				[
					"<span class='text-muted d-block font-size-xs'>Account Report</span>",
					"Chain Report - Kroger",
					"<span class='badge badge-warning text-white font-bold'>5</span> SKU",
					"Metro New York",
					"Average Price",
					"20-20-2009",
					"<a class='btn-link btn-link-primary'>View</a>"
				],
				[
					"<span class='text-muted d-block font-size-xs'>Chain Report</span>",
					"Glenfiddich UNY vs MNY",
					"<span class='badge badge-warning text-white font-bold'>5</span> SKU",
					"Metro New York",
					"Average Price",
					"20-20-2009",
					"<a class='btn-link btn-link-primary'>View</a>"
				],
				[
					"<span class='text-muted d-block font-size-xs'>Price Trend</span>",
					"Appleton",
					"<span class='badge badge-warning text-white font-bold'>5</span> SKU",
					"Metro New York",
					"Average Price",
					"20-20-2009",
					"<a class='btn-link btn-link-primary'>View</a>"
				],
				[
					"<span class='text-muted d-block font-size-xs'>Index Report</span>",
					"3 new SKUs test Report",
					"<span class='badge badge-warning text-white font-bold'>5</span> SKU",
					"Metro New York",
					"Average Price",
					"20-20-2009",
					"<a class='btn-link btn-link-primary'>View</a>"
				],
				[
					"<span class='text-muted d-block font-size-xs'>Chain Report</span>",
					"goPuff Gin Average Pricing Trends",
					"<span class='badge badge-warning text-white font-bold'>5</span> SKU",
					"Metro New York",
					"Average Price",
					"20-20-2009",
					"<a class='btn-link btn-link-primary'>View</a>"
				],
				[
					"<span class='text-muted d-block font-size-xs'>Account Report</span>",
					"Chain Report - Kroger",
					"<span class='badge badge-warning text-white font-bold'>5</span> SKU",
					"Metro New York",
					"Average Price",
					"20-20-2009",
					"<a class='btn-link btn-link-primary'>View</a>"
				],
				[
					"<span class='text-muted d-block font-size-xs'>Chain Report</span>",
					"Glenfiddich UNY vs MNY",
					"<span class='badge badge-warning text-white font-bold'>5</span> SKU",
					"Metro New York",
					"Average Price",
					"20-20-2009",
					"<a class='btn-link btn-link-primary'>View</a>"
				],
				[
					"<span class='text-muted d-block font-size-xs'>Price Trend</span>",
					"Appleton",
					"<span class='badge badge-warning text-white font-bold'>5</span> SKU",
					"Metro New York",
					"Average Price",
					"20-20-2009",
					"<a class='btn-link btn-link-primary'>View</a>"
				]
			],
			columns: [
					{ "data": [0] },
					{ "data": [1] },
					{ "data": [2] },
					{ "data": [3] },
					{ "data": [4] },
					{ "data": [5] },
					{ "data": [6] }
			],
				responsive: true
		});
		jendatable.DataTable({
			dom: "<t>",
			data : [
				[
					"Account Report",
					"Varun Sharma",
					"20-20-2009",
					"<i class='far fa-star text-warning cursor-pointer'></i> <i class='fa fa-copy text-primary ml-2 cursor-pointer'></i>"
				],
				[
					"Account Report",
					"Varun Sharma",
					"20-20-2009",
					"<i class='far fa-star text-warning cursor-pointer'></i> <i class='fa fa-copy text-primary ml-2 cursor-pointer'></i>"
				]
			],
			columns: [
					{ "data": [0] },
					{ "data": [1] },
					{ "data": [2] },
					{ "data": [3] }
			],
				responsive: true
		});

		// begin first table
		table.DataTable({
			dom: "<'d-flex justify-content-between align-items-center'<'text-muted'i>f><t><'d-flex justify-content-center mt-5'p>",
			scrollY : 400,
			data: [
        [
            "<img src='1800anejo.jpg' width='60'>",
            "Espolon Anejo",
            "375ml",
            "Price below $50.00",
            "$34.99",
            "Total Wine & More - Queen Creek",
            "Arizona",
            "Queen Creek",
            85142
				],
				[
					"<img src='wine.jpg' width='60'>",
					"Hudson Four Grain Bourbon",
					"750ml",
					"Price below $50.00",
					"$34.99",
					"Hudson Whiskey",
					"Arizona",
					"Queen Creek",
					958746
			],
			[
				"<img src='1800anejo.jpg' width='60'>",
				"Espolon Anejo",
				"375ml",
				"Price below $50.00",
				"$34.99",
				"Total Wine & More - Queen Creek",
				"Arizona",
				"Queen Creek",
				85142
		],
		[
			"<img src='wine.jpg' width='60'>",
			"Hudson Four Grain Bourbon",
			"750ml",
			"Price below $50.00",
			"$34.99",
			"Hudson Whiskey",
			"Arizona",
			"Queen Creek",
			958746
	],
	[
		"<img src='1800anejo.jpg' width='60'>",
		"Espolon Anejo",
		"375ml",
		"Price below $50.00",
		"$34.99",
		"Total Wine & More - Queen Creek",
		"Arizona",
		"Queen Creek",
		85142
],
[
	"<img src='wine.jpg' width='60'>",
	"Hudson Four Grain Bourbon",
	"750ml",
	"Price below $50.00",
	"$34.99",
	"Hudson Whiskey",
	"Arizona",
	"Queen Creek",
	958746
],
[
	"<img src='1800anejo.jpg' width='60'>",
	"Espolon Anejo",
	"375ml",
	"Price below $50.00",
	"$34.99",
	"Total Wine & More - Queen Creek",
	"Arizona",
	"Queen Creek",
	85142
],
[
"<img src='wine.jpg' width='60'>",
"Hudson Four Grain Bourbon",
"750ml",
"Price below $50.00",
"$34.99",
"Hudson Whiskey",
"Arizona",
"Queen Creek",
958746
],
[
	"<img src='1800anejo.jpg' width='60'>",
	"Espolon Anejo",
	"375ml",
	"Price below $50.00",
	"$34.99",
	"Total Wine & More - Queen Creek",
	"Arizona",
	"Queen Creek",
	85142
],
[
"<img src='wine.jpg' width='60'>",
"Hudson Four Grain Bourbon",
"750ml",
"Price below $50.00",
"$34.99",
"Hudson Whiskey",
"Arizona",
"Queen Creek",
958746
],
[
"<img src='1800anejo.jpg' width='60'>",
"Espolon Anejo",
"375ml",
"Price below $50.00",
"$34.99",
"Total Wine & More - Queen Creek",
"Arizona",
"Queen Creek",
85142
],
[
"<img src='wine.jpg' width='60'>",
"Hudson Four Grain Bourbon",
"750ml",
"Price below $50.00",
"$34.99",
"Hudson Whiskey",
"Arizona",
"Queen Creek",
958746
],
[
"<img src='1800anejo.jpg' width='60'>",
"Espolon Anejo",
"375ml",
"Price below $50.00",
"$34.99",
"Total Wine & More - Queen Creek",
"Arizona",
"Queen Creek",
85142
],
[
"<img src='wine.jpg' width='60'>",
"Hudson Four Grain Bourbon",
"750ml",
"Price below $50.00",
"$34.99",
"Hudson Whiskey",
"Arizona",
"Queen Creek",
958746
],
[
"<img src='1800anejo.jpg' width='60'>",
"Espolon Anejo",
"375ml",
"Price below $50.00",
"$34.99",
"Total Wine & More - Queen Creek",
"Arizona",
"Queen Creek",
85142
],
[
"<img src='wine.jpg' width='60'>",
"Hudson Four Grain Bourbon",
"750ml",
"Price below $50.00",
"$34.99",
"Hudson Whiskey",
"Arizona",
"Queen Creek",
958746
]
		]
		,
    columns: [
        { "data": [0] },
        { "data": [1] },
        { "data": [4] },
        { "data": [5] },
        { "data": [6] },
        { "data": [7] },
        { "data": [8] }
    ],
			responsive: true,
		});
	};

	return {

		//main function to initiate the module
		init: function() {
			initTable1();
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesDataSourceHtml.init();
});
