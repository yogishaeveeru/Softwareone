let start_date = moment().subtract(34, 'days').format('YYYY-MM-DD');
let end_date = moment().format('YYYY-MM-DD');
let suppilerCharts = {};
let selectedBrandsList = [];
let RetailerMarketplaceBreakdownTable;
let loadingCurrentPage = true;
let isFeedEnd = false;
let promopulseFilters = {
	page_size: 10,
	page: 1,            
};
let overviewFilters={};
let group_by = 'week';
let promopulseManufacturerInfo = $.ajax({
	url: SHIELD_SUITE_API_BASE_URL + SHIELD_SUITE_APIS.promopulse.retrieveManufacturers.format({ manufacturerSlug }),
})
overviewFilters.start_date = start_date;
overviewFilters.end_date = end_date;

document.addEventListener('DOMContentLoaded', function () {
    $('#interval').on('change', function (e) {
		let group_by =	$('#interval').select2('val');
		loadBrandsInfo(group_by);
		loadOverallPerformance(group_by);
    });
});

promopulseManufacturerInfo.done(function (manufacturerInfo) {
	promopulseFilters.manufacturers = manufacturerInfo.id;
	document.getElementById('marketplaceNameContainer').textContent = manufacturerInfo.name;
	document.getElementById('imgWrapper').innerHTML = `<img src="${manufacturerInfo.logo || ''}" alt="" class="img-fluid p-2">`;
});


//brands bar charts
const loadBrandsInfo = function (group_by) {
	const brandsInfoRequest = $.ajax({
		url: SHIELD_SUITE_API_BASE_URL + SHIELD_SUITE_APIS.promopulse.retrievePromoPulseBrands.format({ manufacturerSlug }),
		data: { 'start_date': start_date, 'end_date': end_date, 'group_by': group_by}
	})
	brandsInfoRequest.done(function (data) {
		feedContainer.innerHTML = '';
		isFeedEnd = false;
		loadingCurrentPage = true;
		promopulseFilters.page = 1;
		showData();
		$("#brandList").html('');
		if (data && data.length > 0) {
			for (const brand of data) {
				const chartContainerId = `brandChartContainer${brand.id}`;
				brandList.insertAdjacentHTML(
					'beforeend',
					`<div class="col-md-6 col-xxxl2-4 col-xxxl3-3 col-xxxl4-2 mb-5 supplier-container" id="supplierConatiner${brand.id}">
		                     <div class="card card-stretch h-100 border">
		                       <div class="card-body p-4 d-flex justify-content-between flex-column">
		                        <span class="p-0">
		                         <div class="d-flex align-items-center justify-content-between">
		                           <span class="d-flex align-items-start">
		                           <span class="img-wrapper rounded border border-dashed border-gray-300 min-w-70px min-h-70px mh-70px mw-70px me-3">
		                           <img src="${brand.logo || ''}" class="img-fluid">
		                           </span>
		                           <span>
		                             <h4 class="text-gray-800 m-0"> ${brand.brand} </h4>
		                             <div class="d-flex flex-wrap min-w-max-content align-items-center mt-3">
		                                <div class="">
		                                   <div class="d-flex "><span class="fs-1 fw-bolder text-gray-800 me-2 lh-1 ls-n2 mb-1">${brand.share_of_voice}%</span></div>
		                                    <span class="fs-7 fw-bold text-gray-400">Share of Voice</span>
		                                   </div>
		                                <div class="border-start-dashed border-1 border-gray-300 ps-3 ms-3 ">
		                               <div class="d-flex"><span class="fs-1 fw-bolder text-gray-800 me-2 lh-1 ls-n2 mb-1">${brand.mentions_count}</span></div>
		                               <span class="fs-7 fw-bold text-gray-400">Mentions</span>
		                             </div>
		                             </div>
		                           </span>
		                       </span>
		                     </div>
		                   </span>
		                 <div id="${chartContainerId}" class="show_min_max_x-axis_label w-100 mt-3 min-h-auto tooltip-sm" style="height: 110px"></div>
		             </div>
		            </div>
		           </div>`,
				);

				let supplierChartMaxValue = 0;
				for (const brand of data) {
					for (const value of brand.mentions_count_date) {
						if (value.y > supplierChartMaxValue) {
							supplierChartMaxValue = value.y;
						}
					}
				}
				const chartData = brand.mentions_count_date.map(item => ({
					x: item.x,
					y: item.y
				}));

				const chartOptions = {
					series: [{
						name: brand.brand,
						data: chartData
					}],
					chart: {
						fontFamily: 'inherit',
						type: 'bar',
						height: parseInt(KTUtil.css(document.getElementById(chartContainerId), 'height')),
						toolbar: {
							show: false,
						},
						sparkline: {
							enabled: false,
						},
					},
					plotOptions: {
						bar: {
							horizontal: false,
							borderRadius: 2,
						},
					},
					legend: {
						show: false,
					},
					dataLabels: {
						enabled: false,
					},
					stroke: {
						show: true,
						width: 9,
						colors: ['transparent'],
					},
					xaxis: {
						axisBorder: {
							show: false,
						},
						axisTicks: {
							show: false,
						},
						labels: {
							show: true,
							rotate: 0,
							hideOverlappingLabels: false,
			                formatter: function (e) {
			                    if (e && e.includes('-')) {
			                        const [weekStart, weekEnd] = e.split('-');
			                        return [weekStart + '-', weekEnd];
			                    }
			                    return e;
			                },
							style: {
								colors: KTUtil.getCssVariableValue('--bs-gray-500'),
								fontSize: '11px',
							},
						},
						crosshairs: {
							show: false,
						},
					},
					yaxis: {
						show: true,
						tickAmount: 2,
						min: 0,
						max: supplierChartMaxValue || 100,
						labels: {
							style: {
								colors: KTUtil.getCssVariableValue('--bs-gray-500'),
								fontSize: '11px',
							},
							formatter: function (e) {
								return e.toFixed(0);
							},
						    offsetX: -10,
						},
					},
					fill: {
						type: 'solid',
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
							allowMultipleDataPointsSelection: false,
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
								return e;
							},
						},
					},
					colors: [KTUtil.getCssVariableValue('--bs-blue'), KTUtil.getCssVariableValue('--bs-gray-300')],
					markers: {
						colors: [KTUtil.getCssVariableValue('--bs-light-blue')],
						strokeColor: [KTUtil.getCssVariableValue('--bs-blue')],
						strokeWidth: 3,
					},
					grid: {
						borderColor: KTUtil.getCssVariableValue('--bs-border-dashed-color'),
						strokeDashArray: 4,
						yaxis: {
							lines: {
								show: true,
							},
						},
						padding: {
						    top: -10,
						    right: 0,
						    bottom: -10,
						    left: 0
						},
					},
				};
				const chartContainer = document.getElementById(chartContainerId);
				const chart = new ApexCharts(chartContainer, chartOptions)

				chart.render();
			}
		}
	});
}
loadBrandsInfo(group_by);

// OverallPerformance
const loadOverallPerformance = function (group_by) {
	const promopulseManufacturerMentions = $.ajax({
		url: SHIELD_SUITE_API_BASE_URL + SHIELD_SUITE_APIS.promopulse.retrieveManufacturersMentions.format({ manufacturerSlug }),
		data: { 'start_date': start_date, 'end_date': end_date, 'group_by': group_by}
	})

	promopulseManufacturerMentions.done(function (mentionsInfo) {
		document.getElementById('mentions_count').textContent = mentionsInfo.marketing_count;
		//Supplier graph
		$('#overallPerformanceChart').html('');
		let supplierChartMaxValue = 0;
		const dataPoints = []
		for (const values of mentionsInfo.marketing_count_dict) {
			if (values.y > supplierChartMaxValue) {
				supplierChartMaxValue = values.y;
			}
			dataPoints.push({
				x: values.x,
				y: values.y
			});
		}

		const overallPerformanceChartContainer = document.getElementById('overallPerformanceChart');
		new ApexCharts(overallPerformanceChartContainer, {
			series: [
				{
					name: '',
					data: dataPoints,
				},
			],

			chart: {
				fontFamily: 'inherit',
				type: 'bar',
				height: parseInt(KTUtil.css(overallPerformanceChartContainer, 'height')),
				toolbar: {
					show: !1,
				},
				sparkline: {
					enabled: !1,
				},
			},

			plotOptions: {
				bar: {
					horizontal: !1,
					borderRadius: 2,
				},
			},

			legend: {
				show: !1,
			},
			dataLabels: {
				enabled: !1,
			},
			stroke: {
				show: !0,
				width: 9,
				colors: ['transparent'],
			},

			xaxis: {
				axisBorder: {
					show: !1,
				},
				axisTicks: {
					show: !1,
				},

				labels: {
					show: true,
					rotate: 0,
					hideOverlappingLabels: false,
								                formatter: function (e) {
			                    if (e && e.includes('-')) {
			                        const [weekStart, weekEnd] = e.split('-');
			                        return [weekStart + '-', weekEnd];
			                    }
			                    return e;
			                },

					style: {
						colors: KTUtil.getCssVariableValue('--bs-gray-500'),
						fontSize: "11px"
					},
					// formatter: function (val) {
						// return new Date(val).toLocaleDateString('en-US');
					// }
				},

				crosshairs: {
					show: !1,
				},
			},

			yaxis: {
				show: true,
				tickAmount: 4,
				min: 0,
				max: supplierChartMaxValue || 100,
				labels: {
					style: {
						colors: KTUtil.getCssVariableValue('--bs-gray-500'),
						fontSize: '11px',
					},
					formatter: function (e) {
						return e.toFixed(0);
					},
				    offsetX: -10,
				},
			},

			fill: {
				type: 'solid',
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
					fontSize: "12px"
				},
				y: {
					formatter: function (e) {
						return e
					}
				}
			},

			colors: [KTUtil.getCssVariableValue('--bs-blue'), KTUtil.getCssVariableValue('--bs-gray-300')],

			markers: {
				colors: [KTUtil.getCssVariableValue('--bs-light-blue')],
				strokeColor: [KTUtil.getCssVariableValue('--bs-blue')],
				strokeWidth: 3,
			},

			grid: {
				borderColor: KTUtil.getCssVariableValue('--bs-border-dashed-color'),
				strokeDashArray: 4,
				yaxis: {
					lines: {
						show: !0,
					}
				},
				padding: {
				    top: 0,
				    right: 0,
				    bottom: 0,
				    left: 0
				},
			}
		}).render();
	});
}

loadOverallPerformance(group_by);

const dateRangeChangeCallback = function (startDate, endDate) {
	promopulseFilters.start_date = start_date;
	promopulseFilters.end_date = end_date;
	$('.display-range-container').text(startDate.format('DD MMM YYYY') + ' - ' + endDate.format('DD MMM YYYY'));
};

$('.daterange-picker').daterangepicker({
	startDate: moment().subtract(34, 'days'),
	endDate: moment(),
	opens: 'left',
	ranges: {
		'Today': [moment(), moment()],
		'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
		'Last 7 Days': [moment().subtract(6, 'days'), moment()],
		'Last 35 Days': [moment().subtract(34, 'days'), moment()],
		'This Month': [moment().startOf('month'), moment().endOf('month')],
		'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
	},
},
	dateRangeChangeCallback,
);

dateRangeChangeCallback(moment(start_date), moment(end_date));

$('.daterange-picker').on('apply.daterangepicker', function (ev, picker) {
	if (start_date !== picker.startDate.format('YYYY-MM-DD') || end_date !== picker.endDate.format('YYYY-MM-DD')) {
		start_date = picker.startDate.format('YYYY-MM-DD');
		end_date = picker.endDate.format('YYYY-MM-DD');
		dateRangeChangeCallback(moment(start_date), moment(end_date));
		let group_by =  $('#interval').select2('val');
		loadOverallPerformance(group_by);
		loadBrandsInfo(group_by);
		overviewFilters.start_date = start_date;
		overviewFilters.end_date = end_date;
		RetailerMarketplaceBreakdownTable.draw();
	}
});


// Retailer & Marketplace Breakdown
const setupRetailerMarketplaceBreakdownTable = function () {
    let tableSelector = "#marketplace"
    let page=1;
    let page_size=10;
    let brandsColumns=[]
    const columnsRequest = $.ajax({
    url: SHIELD_SUITE_API_BASE_URL + SHIELD_SUITE_APIS.promopulse.retrievePromoPulseMarketplaces.format({ manufacturerSlug }),
    data:{'start_date': start_date, 'end_date': end_date}
   })
   columnsRequest.done(function(data){
    brandsColumns.push({
      title: 'Marketplace',
      name: 'name',
      data:data,
      orderable: false,
      render: function (data) {
          return `<div class='d-flex align-items-center table_thumb_pro'>
                      <span class='img-wrapper border rounded  me-3'><img src="${data["image"]||''}" alt='' class='img-fluid'></span>
                      <p class='m-0'>${data["name"]}</p>
                  </div>`;
      },
    })
    // for (const key of data.results[0].brands){
    data.results[0].brands.forEach((item, index) => {
        brandsColumns.push({
          title: `<span class="d-flex align-items-center  text-break lh-sm"><span class="thumb_bg img-wrapper rounded me-2"><img src="${item.logo||''}" alt="" class="img-fluid"></span><span class="fs-6">${item.brand}</span></span>`,
          name: item.brand,
          data: data.results[0],
          orderable: false,
          render: function (data) {
              return `<span class='d-flex flex-column flex-sm-row'>
                        <div class='d-flex flex-wrap min-w-max-content align-items-center'>
                          <div class=''>
                            <div class='d-flex mb-2'>
                              <span class='fs-2qx fw-bolder text-gray-800 me-2 lh-1 ls-n2'>${data.brands[index].share_of_voice} %</span>
                            </div>
                            <span class='fs-6 fw-bold text-gray-400'>Share of Voice</span>
                          </div>
                          <div class='border-start-dashed border-1 border-gray-300 ps-5 ms-5 '>
                            <div class='d-flex mb-2'>
                              <span class='fs-2qx fw-bolder text-gray-800 me-2 lh-1 ls-n2'>${data.brands[index].mentions}</span>
                            </div>
                            <span class='fs-6 fw-bold text-gray-400'>Mentions</span>
                          </div
                      </span>`;
          },
        })
    })
    RetailerMarketplaceBreakdownTable = ShieldServerSideDataTable({
      tableSelector: tableSelector,
      tableName: 'Marketplaces',
      searchSelector: '#search-filter',
      traditional: true,
      responsive: false,
      scrollX: true,
      scrollY: '48vh',
      scrollCollapse: true,
      order: [],
      info:false,
      lengthMenu: [
          [10, 25, 50, 100, 300, 500],
          [10, 25, 50, 100, 300, 500],
      ],
      apiEndpoint: SHIELD_SUITE_APIS.promopulse.retrievePromoPulseMarketplaces.format({ manufacturerSlug }),
      getFiltersData: function () {
          return overviewFilters;
      },
      drawCallback: function (data) {
          listLimit();
          textLimit();
          expandTableData();
	  toggleImage();
          if ($(this).height() <= $(this).closest('.dataTables_scrollBody').height()) {
              $(this).closest('.dataTables_wrapper').next().find('.view_all_row').hide();
          }else{
              $(this).closest('.dataTables_wrapper').next().find('.view_all_row').show();
          }
      },
      columns: brandsColumns,
  });
  })
}

setupRetailerMarketplaceBreakdownTable();

//expand datatable vertically
$('.view_all_row').click(function () {
	$(this).parent().prev('.dataTables_wrapper').find('.dataTables_scrollBody').toggleClass('expand')
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

$('.table').on('draw.dt', function () {
	if ($(this).height() <= $(this).closest('.dataTables_scrollBody').height()) {
		$(this).closest('.dataTables_wrapper').next().find('.view_all').hide()
	}
});

