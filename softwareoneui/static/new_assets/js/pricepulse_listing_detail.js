//listing detail ---------------
const container = document.querySelector(".sku-detail");
const skudetaildata = async () =>{
    const response = await fetch(`https://run.mocky.io/v3/00a38e30-bc17-4190-97eb-1012d801f68b`);
    //console.log(response);
    const data = await response.json();
    // console.log(data[0]);
    data.map((curElm,index) => {
	 const htmlData=`
	 <div class="row">
	 <div class="col-md-12 col-lg-8">
		<div class="listing-detail fs-5">
		   <div class="main-heading border-none">
			  <h1 class="fw-bold mb-1">${curElm.title}</h1>
		   </div>
		   <ul class="list-inline mb-2 mb-md-6">
			  <li class="my-2">
				 <span class="icon me-3">
					<?xml version="1.0" encoding="UTF-8"?>
					<span class="svg-icon svg-icon-white svg-icon-3"><!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo1\dist/../src/media/svg/icons\Food\Bottle2.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
					<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<rect x="0" y="0" width="24" height="24"/>
						<path d="M8,18 L8,22 C8,22.5522847 8.44771525,23 9,23 L15,23 C15.5522847,23 16,22.5522847 16,22 L16,10.4142136 C16,10.1489971 15.8946432,9.89464316 15.7071068,9.70710678 L14.2928932,8.29289322 C14.1053568,8.10535684 14,7.85100293 14,7.58578644 L14,5 C14,4.44771525 13.5522847,4 13,4 L11,4 C10.4477153,4 10,4.44771525 10,5 L10,7.58578644 C10,7.85100293 9.89464316,8.10535684 9.70710678,8.29289322 L8.29289322,9.70710678 C8.10535684,9.89464316 8,10.1489971 8,10.4142136 L8,13 L12,13 L12,18 L8,18 Z" fill="#000000"/>
						<rect fill="#000000" opacity="0.3" x="10" y="1" width="4" height="2" rx="1"/>
					</g>
				</svg><!--end::Svg Icon--></span>
				 </span>
				 <span class="detail">
					<h4 class="text-primary fw-bold mb-1">Bottle Size</h4>
					<p>${curElm.bottle_size}</p>
				 </span>
			  </li>
			  <li class="my-2">
				 <span class="icon me-3">
					<?xml version="1.0" encoding="UTF-8"?>
					<span class="svg-icon svg-icon-white svg-icon-4"><!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo1\dist/../src/media/svg/icons\Shopping\Price1.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
					<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<polygon points="0 0 24 0 24 24 0 24"/>
						<path d="M3.52270623,14.028695 C2.82576459,13.3275941 2.82576459,12.19529 3.52270623,11.4941891 L11.6127629,3.54050571 C11.9489429,3.20999263 12.401513,3.0247814 12.8729533,3.0247814 L19.3274172,3.0247814 C20.3201611,3.0247814 21.124939,3.82955935 21.124939,4.82230326 L21.124939,11.2583059 C21.124939,11.7406659 20.9310733,12.2027862 20.5869271,12.5407722 L12.5103155,20.4728108 C12.1731575,20.8103442 11.7156477,21 11.2385688,21 C10.7614899,21 10.3039801,20.8103442 9.9668221,20.4728108 L3.52270623,14.028695 Z M16.9307214,9.01652093 C17.9234653,9.01652093 18.7282432,8.21174298 18.7282432,7.21899907 C18.7282432,6.22625516 17.9234653,5.42147721 16.9307214,5.42147721 C15.9379775,5.42147721 15.1331995,6.22625516 15.1331995,7.21899907 C15.1331995,8.21174298 15.9379775,9.01652093 16.9307214,9.01652093 Z" fill="#000000" fill-rule="nonzero" />
					</g>
				</svg><!--end::Svg Icon--></span>
				 </span>
				 <span class="detail">
					<h4 class="text-primary fw-bold mb-1">Brand</h4>
					<p>${curElm.brand}</p>
				 </span>
			  </li>
			  <li class="my-2">
				 <span class="icon me-3">
				 <span class="svg-icon svg-icon-white svg-icon-2"><!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo1\dist/../src/media/svg/icons\Shopping\Dollar.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
				 <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					 <rect x="0" y="0" width="24" height="24"/>
					 <rect fill="#000000" opacity="0.3" x="11.5" y="2" width="2" height="4" rx="1"/>
					 <rect fill="#000000" opacity="0.3" x="11.5" y="16" width="2" height="5" rx="1"/>
					 <path d="M15.493,8.044 C15.2143319,7.68933156 14.8501689,7.40750104 14.4005,7.1985 C13.9508311,6.98949895 13.5170021,6.885 13.099,6.885 C12.8836656,6.885 12.6651678,6.90399981 12.4435,6.942 C12.2218322,6.98000019 12.0223342,7.05283279 11.845,7.1605 C11.6676658,7.2681672 11.5188339,7.40749914 11.3985,7.5785 C11.2781661,7.74950085 11.218,7.96799867 11.218,8.234 C11.218,8.46200114 11.2654995,8.65199924 11.3605,8.804 C11.4555005,8.95600076 11.5948324,9.08899943 11.7785,9.203 C11.9621676,9.31700057 12.1806654,9.42149952 12.434,9.5165 C12.6873346,9.61150047 12.9723317,9.70966616 13.289,9.811 C13.7450023,9.96300076 14.2199975,10.1308324 14.714,10.3145 C15.2080025,10.4981676 15.6576646,10.7419985 16.063,11.046 C16.4683354,11.3500015 16.8039987,11.7268311 17.07,12.1765 C17.3360013,12.6261689 17.469,13.1866633 17.469,13.858 C17.469,14.6306705 17.3265014,15.2988305 17.0415,15.8625 C16.7564986,16.4261695 16.3733357,16.8916648 15.892,17.259 C15.4106643,17.6263352 14.8596698,17.8986658 14.239,18.076 C13.6183302,18.2533342 12.97867,18.342 12.32,18.342 C11.3573285,18.342 10.4263378,18.1741683 9.527,17.8385 C8.62766217,17.5028317 7.88033631,17.0246698 7.285,16.404 L9.413,14.238 C9.74233498,14.6433354 10.176164,14.9821653 10.7145,15.2545 C11.252836,15.5268347 11.7879973,15.663 12.32,15.663 C12.5606679,15.663 12.7949989,15.6376669 13.023,15.587 C13.2510011,15.5363331 13.4504991,15.4540006 13.6215,15.34 C13.7925009,15.2259994 13.9286662,15.0740009 14.03,14.884 C14.1313338,14.693999 14.182,14.4660013 14.182,14.2 C14.182,13.9466654 14.1186673,13.7313342 13.992,13.554 C13.8653327,13.3766658 13.6848345,13.2151674 13.4505,13.0695 C13.2161655,12.9238326 12.9248351,12.7908339 12.5765,12.6705 C12.2281649,12.5501661 11.8323355,12.420334 11.389,12.281 C10.9583312,12.141666 10.5371687,11.9770009 10.1255,11.787 C9.71383127,11.596999 9.34650161,11.3531682 9.0235,11.0555 C8.70049838,10.7578318 8.44083431,10.3968355 8.2445,9.9725 C8.04816568,9.54816454 7.95,9.03200304 7.95,8.424 C7.95,7.67666293 8.10199848,7.03700266 8.406,6.505 C8.71000152,5.97299734 9.10899753,5.53600171 9.603,5.194 C10.0970025,4.85199829 10.6543302,4.60183412 11.275,4.4435 C11.8956698,4.28516587 12.5226635,4.206 13.156,4.206 C13.9160038,4.206 14.6918294,4.34533194 15.4835,4.624 C16.2751706,4.90266806 16.9686637,5.31433061 17.564,5.859 L15.493,8.044 Z" fill="#000000"/>
				 </g>
			 </svg><!--end::Svg Icon--></span>
				 </span>
				 <span class="detail">
					<h4 class="text-primary fw-bold mb-1">Last Price</h4>
					<p>${curElm.last_price}</p>
				 </span>
			  </li>
		   </ul>
		   <div class="row"> 
			  <div class=" col-sm-12 col-md-12">
				 <div class="d-flex  rounded border border-blue border-dashed p-5 p-md-6 bg-light-blue">
				 <!--begin::Svg Icon | path: assets/media/icons/duotune/coding/cod007.svg-->
				 <span class="svg-icon svg-icon-blue svg-icon-2x me-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
				 <path opacity="0.3" d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z" fill="black"/>
				 <path d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z" fill="black"/>
				 </svg></span>
				 <!--end::Svg Icon-->
					<!--begin::Content-->
					<div class=" fw-bold text-truncate">
					   <h4 class="text-gray-900 fw-bolder">URL</h4>
					   <div class="fs-6 text-gray-700 "><a href="${curElm.url}" class="text-gray-700 text-hover-primary text-truncate d-block ">${curElm.url}</a></div>
					</div>
					<!--end::Content-->
				 </div>
			  </div>
		   </div>
		</div>
	 </div>
	 <div class="col-md-12 col-lg-4 mt-8 mt-lg-0">
		<div class="screenshot border img-wrapper rounded ">
		   <img src="${curElm.image}" alt="" class="img-fluid p-2">
		</div>
	 </div>
  </div>`;
	container.insertAdjacentHTML('beforeend', htmlData);
    })
}
skudetaildata();
//--------------------

//price history-----------------
const getchartdata = async() => {
    const response = await fetch('https://run.mocky.io/v3/6f061208-2103-4d44-b742-ac14091e663f');
    const data = await  response.json();
    //sku comparison chart
    var chart1 = new Highcharts.Chart({
	chart: {
	    type: 'line',
	    renderTo: 'price-history',
	    margin: [15, 10, 30, 80]
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
		pointStart: Date.UTC(2021, 11, 22),
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
	    },

	},

	yAxis: [ {
	    title: {
		y: 0,
		x: 2,
		text: "Values",
	    },
	    labels: {
		format: '${value:.2f}'
	    },
	    min:0
	},

	       ],
	legend: {
	    enabled:false ,
	    itemStyle: {
		fontSize: "11px",
		lineHieght: "50px"
	    }
	},
	credits: {
	    enabled: false
	},
	series:data,

    });
}
getchartdata();


Highcharts.setOptions({
    colors: [
	'rgb(59, 188, 195, 0.9)', //primary blue
	'rgb(4 112 118 / 80%)', //primary green
	'rgba( 51,   178, 223, 0.9 )', //bright blue
	'rgb(232 80 91 / 90%)', //primary red
	'rgb(153 182 178 / 90%)', //light primary green
	'rgba( 51,   178, 223, 0.9 )', //bright blue
	'rgba( 84, 110,  122,   0.9 )', //dark grey
	'rgba( 39, 182, 104, 0.9 )', //green
	'rgba( 45,  47,  238, 0.9 )', //mid blue
	'rgba( 177, 69,  0,   0.9 )', //dark orange
	'rgba( 140, 140, 156, 0.9 )', //mid
	'rgba( 238, 46,  47,  0.9 )', //mid red
	'rgba( 44,  145, 51,  0.9 )', //mid green
	'rgba( 103, 16,  192, 0.9 )' //dark purple
    ],
    chart: {
	alignTicks: false,
	type: '',
	margin: [60, 25, 100, 90],
	style: {
	    fontFamily: 'Poppins, sans-serif'
	}
    },
})
//-----------------



