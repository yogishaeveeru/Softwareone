//lazy loading
const container = document.querySelector(".marketing-content-outer");
let limit = 3;
let pageCount = 1;

const getPost = async () => {
    const response = await fetch(`https://run.mocky.io/v3/61d5d598-5dab-45d0-afe4-052b18b35067/page/?_limit=${limit}$_page=${pageCount}`);
    //console.log(response);
    const data = await response.json();

    data.map((curElm, index) => {

	        const htmlData = `
<div class="row">
<div class="col-md-4  my-2 mb-4">
   <div class="card card-stretch marketing-content h-100 fs-5 border border-gray-200">
      <div class="card-body p-0">
         <div class="media-text h-100 d-flex justify-content-between flex-column" >
            <div class="d-flex align-items-center flex-column justify-content-center  rounded-top px-5 py-6">
               <div class="img-wrapper border border-gray-300 border-dashed  rounded mb-2">
                  <img src="${curElm.image}" class="img-fluid">
               </div>
               <div class="text-center">
                  <h3 class="  mt-1 fw-bold lh-base">${curElm.title}</h3>
                  <div class="mt-3">
                     <a href="#" class="d-flex justify-content-center align-items-center show-graph ">
                        <p class="m-0 text-hover-primary mention-outer fw-bold text-blue"> Mentions  <span class=" fw-bold mention bg-blue text-white ">${curElm.mentions}</span></p>
                     </a>
                  </div>
               </div>
            </div>
            <ul class="p-5  pt-1 list-inline share m-0 rounded-bottom mt-2">
               <li>
                  <a href="#" class="show-graph">
                     <div class="d-flex justify-content-between align-items-center w-100">
                        <span class="d-flex align-items-center    lh-sm fw-bold  text-muted text-hover-primary pe-2">
                           <!--begin::Svg Icon | path: icons/duotune/general/gen057.svg-->
                           <span class="svg-icon svg-icon-6 svg-icon-gray-600   me-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                 <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                 <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="black"></path>
                              </svg>
                           </span>
                           <!--end::Svg Icon-->
                           ${curElm.share_title}
                        </span>
                        <div class="circle">
                           <div class="bar"></div>
                           <div class="box"><span></span></div>
                        </div>
                     </div>
                  </a>
               </li>
               <li>
                  <a href="#" class="show-graph">
                     <div class="d-flex justify-content-between align-items-center w-100">
                        <span class="d-flex align-items-center    lh-sm fw-bold  text-muted text-hover-primary pe-2">
                           <!--begin::Svg Icon | path: icons/duotune/general/gen057.svg-->
                           <span class="svg-icon svg-icon-6 svg-icon-gray-600   me-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                 <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                 <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="black"></path>
                              </svg>
                           </span>
                           <!--end::Svg Icon-->
                           ${curElm.share_title}
                        </span>
                        <div class="circle">
                           <div class="bar"></div>
                           <div class="box"><span></span></div>
                        </div>
                     </div>
                  </a>
               </li>
            </ul>
         </div>
      </div>
   </div>
</div>

<div class="col-md-4 my-2 mb-4">
   <div class="card card-stretch marketing-content h-100 fs-5 border border-gray-200">
      <div class="card-body p-0">
         <div class="media-text h-100 d-flex justify-content-between flex-column" >
            <div class="d-flex align-items-center flex-column justify-content-center  rounded-top px-5 py-6">
               <div class="img-wrapper border border-gray-300 border-dashed  rounded mb-2">
                  <img src="${curElm.image}" class="img-fluid">
               </div>
               <div class="text-center">
                  <h3 class="  mt-1 fw-bold lh-base">${curElm.title}</h3>
                  <div class="mt-3">
                     <a href="#" class="d-flex justify-content-center align-items-center show-graph" >
                        <p class="m-0 text-hover-primary mention-outer fw-bold text-blue "> Mentions  <span class=" fw-bold mention bg-blue text-white">${curElm.mentions}</span></p>
                     </a>
                  </div>
               </div>
            </div>
            <ul class="p-5  pt-1 list-inline share m-0 rounded-bottom mt-2">
               <li>
                  <a href="#" class="show-graph">
                     <div class="d-flex justify-content-between align-items-center w-100">
                        <span class="d-flex align-items-center     lh-sm fw-bold  text-muted text-hover-primary pe-2">
                           <!--begin::Svg Icon | path: icons/duotune/general/gen057.svg-->
                           <span class="svg-icon svg-icon-6 svg-icon-gray-600   me-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                 <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                 <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="black"></path>
                              </svg>
                           </span>
                           <!--end::Svg Icon-->
                           ${curElm.share_title}
                        </span>
                        <div class="circle">
                           <div class="bar"></div>
                           <div class="box"><span></span></div>
                        </div>
                     </div>
                  </a>
               </li>
               <li>
                  <a href="#" class="show-graph">
                     <div class="d-flex justify-content-between align-items-center w-100">
                        <span class="d-flex align-items-center    lh-sm fw-bold  text-muted text-hover-primary pe-2">
                           <!--begin::Svg Icon | path: icons/duotune/general/gen057.svg-->
                           <span class="svg-icon svg-icon-6 svg-icon-gray-600   me-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                 <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                 <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="black"></path>
                              </svg>
                           </span>
                           <!--end::Svg Icon-->
                           ${curElm.share_title}
                        </span>
                        <div class="circle">
                           <div class="bar"></div>
                           <div class="box"><span></span></div>
                        </div>
                     </div>
                  </a>
               </li>
            </ul>
         </div>
      </div>
   </div>
</div>

<div class="col-md-4 my-2 mb-4">
   <div class="card card-stretch marketing-content h-100 fs-5 border border-gray-200">
      <div class="card-body p-0">
         <div class="media-text h-100 d-flex justify-content-between flex-column" >
            <div class="d-flex align-items-center flex-column justify-content-center  rounded-top px-5 py-6">
               <div class="img-wrapper border border-gray-300 border-dashed  rounded mb-2">
                  <img src="${curElm.image}" class="img-fluid">
               </div>
               <div class="text-center">
                  <h3 class="  mt-1 fw-bold lh-base">${curElm.title}</h3>
                  <div class="mt-3">
                     <a href="#" class="d-flex justify-content-center align-items-center show-graph" >
                        <p class="m-0 text-hover-primary mention-outer fw-bold text-blue"> Mentions  <span class=" fw-bold mention bg-blue text-white ">${curElm.mentions}</span></p>
                     </a>
                  </div>
               </div>
            </div>
            <ul class="p-5  pt-1 list-inline share m-0 rounded-bottom mt-2">
               <li>
                  <a href="#" class="show-graph">
                     <div class="d-flex justify-content-between align-items-center w-100">
                        <span class="d-flex align-items-center    lh-sm fw-bold  text-muted text-hover-primary pe-2">
                           <!--begin::Svg Icon | path: icons/duotune/general/gen057.svg-->
                           <span class="svg-icon svg-icon-6 svg-icon-gray-600   me-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                 <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                 <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="black"></path>
                              </svg>
                           </span>
                           <!--end::Svg Icon-->
                           ${curElm.share_title}
                        </span>
                        <div class="circle">
                           <div class="bar"></div>
                           <div class="box"><span></span></div>
                        </div>
                     </div>
                  </a>
               </li>
               <li>
                  <a href="#" class="show-graph">
                     <div class="d-flex justify-content-between align-items-center w-100">
                        <span class="d-flex align-items-center     lh-sm fw-bold  text-muted text-hover-primary pe-2">
                           <!--begin::Svg Icon | path: icons/duotune/general/gen057.svg-->
                           <span class="svg-icon svg-icon-6 svg-icon-gray-600   me-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                 <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                                 <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="black"></path>
                              </svg>
                           </span>
                           <!--end::Svg Icon-->
                           ${curElm.share_title}
                        </span>
                        <div class="circle">
                           <div class="bar"></div>
                           <div class="box"><span></span></div>
                        </div>
                     </div>
                  </a>
               </li>
            </ul>
         </div>
      </div>
   </div>
</div>
</div>
<div class="row my-3 graph-row " style="display:none;">
    <div class="col-sm-12">
        <div class="card card-flush card-stretch h-100">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap">
        <div class="card-title">
           <h3 class="m-0 fw-bold ">
              67 Wine & Spirits
           </h3>
        </div>
     </div>
            <div class="card-body pt-0">
                 <div id="mentions-chart" style="width:100%;height:350px;"></div>
            </div>
        </div>
    </div>
</div>
  `;
	container.insertAdjacentHTML('beforeend', htmlData);

	//donut chart
	let options = {
	    startAngle: -1.55,
	    size: 50,
	    value: 0.85,
	    fill: {
		gradient: ['#449edd', '#449edd']
	    },
	    emptyFill: "#e7f7f8",
	    thickness: 10

	}
	$(".circle .bar").circleProgress(options).on('circle-animation-progress',
						     function(event, progress, stepValue) {
							 $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
						     });

	$(".bar").circleProgress({
	    value: 0.55
	});
    })
    //---------

    //show graph on click
    $('.show-graph').click(function(j) {
	j.preventDefault();
	if ($(this).hasClass('active')) {
	    $(this).removeClass('active');
	    $(this).closest('.row').next('.graph-row').fadeIn();
	} else {
	    if ($('.show-graph').hasClass('active')) {
		$(".show-graph").removeClass('active');
		$(".show-graph").closest('.card').removeClass('active');
		$('.graph-row').fadeOut();
	    }
	    $(this).addClass('active');
	    $(this).closest('.card').addClass('active');
	    $(this).closest('.row').next('.graph-row').fadeIn();
	}
    })

    //highchart
    const getchartdata = async () => {
	const response = await fetch('https://run.mocky.io/v3/acce327e-98c8-467f-9779-51677e6c6704');
	const data = await response.json();
	//sku comparison chart
	var chart = new Highcharts.Chart({
	    chart: {
		type: 'line',
		renderTo: 'mentions-chart',
		margin: [15, 15, 80, 50]
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
	    yAxis: [{
		title: {
		    y: 0,
		    x: 2,
		    text: "Mentions",
		},
		min: 0
	    },
		    {
			title: {
			    y: 0,
			    x: -40,
			    text: "Share of voice",
			    style: {
				color: 'rgb(59, 188, 195, 0.9)'
			    }
			},

			linkedTo: 0,
			opposite: true
		    }
		   ],
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
	    series: data
	});

    }
    getchartdata();


    //-----------------
}

getPost();

const showData = () => {
    $('#loading').show();
    setTimeout(() => {
	pageCount++;
	$('#loading').hide();
	getPost();
    }, 3000)
};

window.addEventListener('scroll', () => {
    const {
	scrollHeight,
	scrollTop,
	clientHeight
    } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
	showData();
    }
})

//-------------------------------



//filter dropdowns----------------
JDSelect2("https://run.mocky.io/v3/c6f52535-5f71-4ae2-a688-c1ff6aa5dabe", "add-tag", "Add Multiple Tags");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "custom-filter", "Select Custom Filter");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "merchant", "Select Merchant");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "wine-subcategory", "Select Wine Sub Category");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "wine-category", "Select Wine Category");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "spirits-subcategory", "Select Spirits Sub Category");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "spirits-category", "Select Spirits Category");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "custom-segment", "Select Custom Segment");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "Channel", "Select Channel");
JDSelect2("https://run.mocky.io/v3/3d925872-94b3-4a0c-a381-23510a7f4011", "state", "Select State");


//Brands Dropdown with logos
function formatBrand (brand) {
    console.log(brand);
    if (!brand.id) {
	return brand.text;
    }
    var $brand = $(
	'<span class="d-flex align-items-center "><span class="images img-wrapper border rounded "><img  class="img-fluid " src="' + brand.image + '" /> </span>' + brand.text + '</span>'
    );
    return $brand;
};
$(document).ready(function() {
    var selectData_brand = [];
    //filter by brand dropdown--------
    $.ajax({
	url: "https://run.mocky.io/v3/f65240f9-c04d-4202-8517-7a5790c31a9a"
    }).then(function (data) {
	$(data).each(function (i) {
	    data.sort((a, b) => a.text.localeCompare(b.text))
	    selectData_brand.push({ id: data[i].id, text: data[i].text,image: data[i].images });
	});
	$('#brands').select2({
	    placeholder: "Select Brand",
	    data: selectData_brand,
	    templateResult: formatBrand,
	    templateSelection: formatBrand
	});
    });
    //---------------------------
});
//------------------

//selected skus result
var elem = $("input:checkbox");
$(function(){
    $(".apply").click(function(){
	var selected = elem
	    .filter(':checked') //Filter only checked checkboxes
	    .map(function() {
		return $("label[for='" + this.id + "']").html();
	    })
	    .get(); //Get array

	var html = '<div class="result-content scroll-y mh-200px mh-lg-250px border rounded p-4 mt-2">' + selected.join('') + '</div>';

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
