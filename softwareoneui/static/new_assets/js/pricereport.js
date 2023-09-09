
// Retailer Dropdown apend from API
/*let dropdownRetailer = $('#retailer');
dropdownRetailer.empty();
dropdownRetailer.append('');
dropdownRetailer.prop('selectedIndex', 0);
function select_marketplace(){
    const url = "/api/price-pulse/select-marketplace/";
    $.ajax({
	type: "GET",
	dataType: "json",
	url: url,
	success: function(data) {
	    data.forEach((entry) => {
		dropdownRetailer.append($('<option></option>').attr('value', entry.id).text(entry.name));
	    });
	    $(document).on("change",function() {
		var value = ''
		value = $('.selectpicker#retailer').val();
		marketplaces = value.toString();
	
	    });

	    $('.selectpicker').selectpicker('refresh');
	},
	error: function(error) {
	
	},
    });

}
$(function() {
    $(".dropdown-toggle").change(function(){
	var element = $(this);
	var myTag = element.attr("title");

	$('#setMyTag').val(myTag);
	console.log(myTag)
    });
});*/
//-----------------------------------

// State Dropdown apend from API
/*let dropdownState = $('#state');
dropdownState.empty();
dropdownState.append('');
dropdownState.prop('selectedIndex', 0);

function select_state() {
    // On page load Select Category API
    const url = "/api/price-pulse/select-state/";
    $.ajax({
	type: "GET",
	dataType: "json",
	url: url,
	success: function(data) {
	    data.forEach((entry) => {
		dropdownState.append($('<option></option>').attr('value', entry.id).text(entry.name));
	    });
	    $(document).on("change",function() {
		var value = ''
		value = $('.selectpicker#state').val();
		states = value.toString();
	
	    });
	    $('.selectpicker').selectpicker('refresh');
	},
	error: function(error) {
	
	},
    });
}*/
//---------------------------


// Supplier Dropdown apend from API
/*let dropdownSupplier = $('#supplier');
dropdownSupplier.empty();
dropdownSupplier.append('');
dropdownSupplier.prop('selectedIndex', 0);

$('#sku').click( function() {
    // On page load Select Category API
//    $("#result li").remove();
    var url = "/api/price-pulse/select-manufacturer/";
    $.ajax({
	type: "GET",
	dataType: "json",
	url: url,
	success: function(data) {
	    data.forEach((entry) => {
		dropdownSupplier.append($('<option></option>').attr('value', entry.id).text(entry.manufacturer));
	    });
	    $(document).on("change",function() {
		var value = ''
		value = $('.selectpicker#supplier').val();
		manufacturers = value.toString();
	
	    });
	    $('.selectpicker').selectpicker('refresh');
	},
	error: function(error) {

	},
    });

});*/
//----------------------
var sku_dict = {}
var sku_element = {}
var select = []
var rem_elem = ''
var selected_sku_name = []
var  marketplaces = ''
var  manufacturers = ''
var  skus = ''
var  states = ''
//var sku_select_final_id = []
//var sku_select_final_name = []
//Select SKU
function search_skus(){
	$('#result').html('');
    var searchField = $('#skuname').val();
    var url = "/api/price-pulse/select-sku/?term=" + searchField + "&select_manufacturer=" + manufacturers
    $.ajax({
	    type: "GET",
	    dataType: "json",
	    url: url,
	    success: function(data) {
		if($('#result li').length > 0)
		{
		   $('#result').html('');
		}
		
		if(data.length == 0)
		{
		    $('#result').append('<p style="text-align: center">No Records Found!</p>')
		}
		data.forEach((sku) => {
		    $('#result').append('<li class="custom-control custom-checkbox"><img id=img'+ sku.id + ' src="' + sku.image + '" class="product-image"/><input type="checkbox" class="custom-control-input" value="'+sku.name+'" id="'+sku.id+'"> <label class="custom-control-label" for="'+ sku.id +'" onclick="sku_selcted(this)">'+sku.name+'</label></li>');
		    if (sku.id in sku_element)
		    {
			$('#'+sku.id).prop('checked', true)
		    }
		});
		   // console.log(skus);
	    },

	
	    error: function(error) {
	
	    },
    });
};





function sku_selcted(e) {
    $('#sku').text('')
    if (!$('#'+e.htmlFor).is(":checked"))
    {
	select.push(e.htmlFor)
	selected_sku_name.push($('#'+e.htmlFor).attr("value"))
	sku_element[e.htmlFor] = ''
	
    }
    else
    {
	if (select.includes(e.htmlFor))
	{
	    let ele_index_id = select.indexOf(e.htmlFor)
	    let ele_index_name = selected_sku_name.indexOf($('#'+e.htmlFor).attr("value"))
	    select.splice(ele_index_id, 1);
	    selected_sku_name.splice(ele_index_name, 1);
	    delete sku_element[e.htmlFor] 
	}
    }    

    enableDisableApply();
   skus = select.toString()
}







function enableDisableApply()
{
    var apply_btn = $('#apply');
    var retailer_selectd = $("#retailer").val().length
    var sku_selected_count = selected_sku_name.length
    if(sku_selected_count == 0 || retailer_selectd == 0)
    {
	if(sku_selected_count == 0)
	{
	    $('#sku').text('Select SKUs');
	}
	else
	{
	    $('#sku').text(selected_sku_name.toString())
	}
	apply_btn.removeClass("btn-primary");
	apply_btn.prop('disabled', true);
    }
    else
    {
	apply_btn.addClass("btn-primary");
	apply_btn.prop('disabled', false);
	$('#sku').text(selected_sku_name.toString())
    }
    
}



$("#retailer").change(function (){

    enableDisableApply();
});



$('#skuname').keypress(function (e) {
    if (e.which == 13) {
	e.preventDefault();
	search_skus();
    }
});


$('#search').click(function () {
    search_skus()
}
		   
);
//----------------------------------------------
/*function EnableDisable(search_txt) {
    var search_btn = $("#search");
    if (search_txt.value.trim() != "") {
	search_btn.addClass("btn-primary");
	search_btn.prop('disabled', false);
    } else {
	search_btn.removeClass("btn-primary");
	search_btn.prop('disabled', true);
    }
} */



$("#apply").click(function(){
    sgws_dashboard()
    sgws_bw_graph()
    sgws_rolling_graph()
 });  


function check_datatable_exist(){
if ( $.fn.DataTable.isDataTable( '#example' ) )
{
    var clear_table = $('#example').DataTable();
    clear_table.destroy()
    clear_table.clear().draw()
}
};
//-------Dashboard-table------
function sgws_dashboard(){
    check_datatable_exist();
    var url = ''
    if (marketplaces, skus) {
	url = "/api/price-pulse/sgws-dashboard/?select_marketplaces="+marketplaces+'&select_skus='+skus+'&select_states='+states
	$('#error_msg').text("")
    }
    else {	
	return $('#error_msg').text("Please select at least one retailer and SKU")
    }
    $.ajax({
	type: "GET",
	url: "/api/price-pulse/sgws-dashboard/?select_marketplaces="+marketplaces+'&select_skus='+skus+'&select_states='+states,

	dataType: "json",
	success: function(res) {
	   
	    var marketplace_names = {}
	    var final_data = []
	    for(var i = 0; i<res.length; i++)
	    {   var obj = {}
		var img = ''
		var img_url = ''
		obj['Images'] = '<img src="' + res[i]['image'] + '" class="product-image"/>'
		obj['Sku Name'] = res[i]['name']
	
		for(var j = 0; j<res[i]['marketplace_prices'].length; j++)
		{
		    let mp_name = res[i]['marketplace_prices'][j]['marketplace']
		    let arrow = res[i]['marketplace_prices'][j]['arrow']
		    let price = res[i]['marketplace_prices'][j]['price']
		    if (price == null)
		    {
			price = ""
		    }
		    else
		    {
			price = price.toFixed(2)
			price = "$"+price
		    }
		    if (arrow == 'UP'){
			img = up_arrow // up_arrow and down_arrow defined in price-report.html
			img_url = '<img src="' + img + '" class="arrow"/>'
		    } else if (arrow == 'DOWN') {
			img = down_arrow
			img_url = '<img src="' + img + '" class="arrow"/>'
		    } else if (arrow == 'EQUAL'){
			img_url = '';
		    }
		    else if (arrow == 'NA'){
			if(!price)
			{
			    img_url = '-';
			}
			else
			{
			    img_url = '';
			}
		    }
		    price = price+img_url
		    obj[mp_name] = [price]
		    marketplace_names[j+1] = mp_name
		}
		final_data.push(obj)
	    }
	    var col = [
		{"data": "Images",orderable: false},
		{"data": "Sku Name"}
	    ]
	    $('.dashboard_header').remove()
	    
	    $('#dynamic_header').append( $('<th  />', {text : '',class:"dashboard_header",scope:"col", width:"2%"}) )
	    $('#dynamic_header').append( $('<th  />', {text : 'SKU Name',class:"dashboard_header",scope:"col", width:"22%"}) )
	    for(var k = 0; k<res[0]['marketplace_prices'].length; k++)
	    {
		mp_col_name = marketplace_names[k+1]
		col.push({"data": mp_col_name,orderable: false})
		$('#dynamic_header').append( $('<th  />', {text : mp_col_name,class:"dashboard_header",scope:"col", width:"22%"}) )
	    }
	   
	    var data_table = $('#example').DataTable({
		"data": final_data,
		"columns": col,
		"destroy": true,
		"paging": false,
		"searching": false,
		"oLanguage": {
			"sEmptyTable": "Loading Data.."
		    }
	    });

	},
	error: function() {
	    $('#error').html('Something has gone wrong..');
	}

    } );
};


//--------------Box and Wishker Graphs--------------
function sgws_bw_graph(){
   var url = '/api/price-pulse/sgws-bw-graph/?select_marketplaces='+marketplaces+'&select_skus='+skus+'&select_states='+states;
    // Candelstcik chart for mean product price by retail location
    //var url = 'https://run.mocky.io/v3/c7af0f70-4789-49ef-aa52-6c010e19baaa';
    var chart;
    var markets =[]

    $(function() {
	// call api to get chart data
	$.getJSON(url, function(chartData) {
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
		    categories: markets,
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
		    min: 0,
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
	    var boxesPerSeries = chartData[0]["sku_box_whisker"].length;
	    var numberOfSeries = chartData.length;
	    var offset;
	    // var loop = 0;
	    var sku_key = {}
	    for (var i = 0; i < numberOfSeries; i++) {
		//generate random data, then calculate box plot values
		var mp = chartData[i]["marketplace"]
		markets.push(mp)
		var sku_name = ''
		var boxData = [];
		for (var j = 0; j < boxesPerSeries; j++) {
		    var boxValues = chartData[i]["sku_box_whisker"][j]["price_data"];
		    var sku = chartData[i]["sku_box_whisker"][j]["sku"]
		    sku_name = sku
		    if (sku in sku_key){
			sku_key[sku].push(boxValues)
		    }
		    else{
			sku_key[sku] = [boxValues]
		    }
		}
	    }
	    var colour_index = 0;
	    //boxData.push(boxValues);
	    for (key in sku_key)
	    {     

		offset = (i < (numberOfSeries / 2) ? -0.05 : 0.05);

		    chart.addSeries({
			pointPlacement: offset,
			name: key,
			color: Highcharts.getOptions().colors[colour_index],
			fillColor: Highcharts.getOptions().colors[colour_index],
			medianColor: 'rgba(0,0,0,1)',
			data: sku_key[key],
		    });
		    colour_index += 1

		

	    }
	    //-----------------------------------------------------
    });
    })
}


//-----------------------------------------------
//line chart for 7 days mean price
function rolling(A_data_list, B_data_list) {
	       Highcharts.chart('line-chart-1', {
		   chart: {
		       type: 'line',
		       margin: [35, 10, 35, 50]
		   },
		   plotOptions: {
		       series: {
			   lineWidth: 2,
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
		   series: A_data_list,
		   tooltip: {
		       enabled: true,
		       valueDecimals: 2,
		       formatter: function() {
			   return '<b>'+ this.series.name +': $'+(this.y).toFixed(2)+'</b><br/>'+
			       Highcharts.dateFormat('%Y/%m/%d', this.x*1000);

		       }
		   },
	});
    Highcharts.chart('line-chart-2', {
	chart: {
	    type: 'line',
	    margin: [35, 10, 35, 50]
	},
	plotOptions: {
	    series: {
		lineWidth: 2,
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
	series: B_data_list,
	tooltip: {
	    enabled: true,
	    formatter: function() {
		return '<b>'+ this.series.name +': $'+(this.y).toFixed(2)+'</b><br/>'+
		    Highcharts.dateFormat('%Y/%m/%d', this.x*1000);

	    },
	    valueDecimals: 2
	},
    });
}

//-----------------

			       
//--------------Rolling Graphs------------------
function sgws_rolling_graph(){
    var url = '/api/price-pulse/sgws-rolling-graph/?select_marketplaces='+marketplaces+'&select_skus='+skus+'&select_states='+states;
    //var url = 'https://run.mocky.io/v3/3a12b1df-91d7-476d-9576-9baf076583e3';
  
	$.ajax( url,
	    {
		success: $.each(function(data, status, xhr) {
		    var  r = data.length
		    var A_data_list = []
		    var B_data_list = []
		    for(var i=0; i<r; i++){
			var n = data[i]["sku_rolling"].length
			console.log('roll ',r)
			for(var j=0; j<n; j++) {
			    var Adata = {}
			    Adata['name'] = data[i]["sku_rolling"][j]["marketplace_sku"]
			    Adata['data'] = data[i]["sku_rolling"][j][ "rolling_7D_avg"]
			    console.log(Adata)
			    var Bdata = {}
			    Bdata['name'] = data[i]["sku_rolling"][j]["marketplace_sku"]
			    Bdata['data'] = data[i]["sku_rolling"][j]["rolling_30D_avg"]
			    console.log(Bdata)
			    A_data_list.push(Adata)
			    B_data_list.push(Bdata)
			}}
		    rolling(A_data_list, B_data_list)
			
		    
		})
	    });
}

///----chart options------
Highcharts.setOptions({
    global: {
	useUTC: false
    },
    colors: [
	'rgba( 51,   178, 223, 0.9 )', //bright blue
	'rgba( 212,  82,  110,  0.9 )', //dark
	'rgba( 39, 182, 104, 0.9 )', //bright pink
	'rgba( 154, 253, 0,   0.9 )', //bright green
	'rgba( 145, 44,  138, 0.9 )', //mid purple
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
	//borderRadius:10,                                                                                                                                                      //borderWidth:1,                                                                                                                                                        //borderColor:'rgba(156,156,156,.25)',                                                                                                                                  //backgroundColor:'rgba(204,204,204,.25)',                                                                                                                              //plotBackgroundColor:'rgba(255,255,255,1)',
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
	enabled: false
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
	// min: 0,
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



$(document).ready(function() {

//filter dropdowns----------------
    
    var selectData = [];
    var selectData1 = [];
    var selectData2 = [];
    //state dropdown
    $.ajax({
	url: "/api/price-pulse/select-state/"
    }).then(function (data) {
	$(data).each(function (i) {
	    selectData.push({ id: data[i].id, text: data[i].name });
	});
	$('#state').on("change", function() {
	    var value = '';
	    value = $('#state').val();
	    states = value.toString();
	    console.log(states);
	});
	$('#state').select2({
	    data: selectData,
	    placeholder: "Nothing Selected",
	  
	});
    });
    //---------------------------

    //filter by retailer dropdown--------
    $.ajax({
	url: "/api/price-pulse/select-marketplace/"
    }).then(function (data) {
	$(data).each(function (i) {
	    selectData1.push({ id: data[i].id, text: data[i].name });
	});
        $('#retailer').on("change", function() {
            var value = '';
	    value = $('#retailer').val();
	    marketplaces = value.toString();
	    console.log(marketplaces);
	});
	$('#retailer').select2({
	    placeholder: "Nothing Selected",
	    data: selectData1,
	});
        
    });
    $('#retailer').on('select2:opening select2:closing', function( event ) {
	var $searchfield = $(this).parent().find('.select2-search__field');
	$searchfield.prop('disabled', true);
    });
    //-----------------------

    //filter by supplier dropdown--------
    $.ajax({
	url: "/api/price-pulse/select-manufacturer/"
    }).then(function (data) {
	$(data).each(function (i) {
	    selectData2.push({ id: data[i].id, text: data[i].manufacturer });
	});
	$('#supplier').on("change", function() {
	    var value = '';
	    value = $('#supplier').val();
	    manufacturers = value.toString();
	    console.log(manufacturers);
	});
	$('#supplier').select2({
	    placeholder: "Nothing Selected",
	    data: selectData2,

	});

    });
    $('#supplier').on('select2:opening select2:closing', function( event ) {
	var $searchfield = $(this).parent().find('.select2-search__field');
	$searchfield.prop('disabled', true);
    });
    //-----------------------
});
//------------------

