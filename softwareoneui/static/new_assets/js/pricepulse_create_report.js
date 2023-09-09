let seriesObject = new Object();

/*
// Stepper lement
var element = document.querySelector("#kt_stepper_example_basic");

// Initialize Stepper
var stepper = new KTStepper(element);

// Handle next step
stepper.on("kt.stepper.next", function (stepper) {
    stepper.goNext(); // go next step
});

// Handle previous step
stepper.on("kt.stepper.previous", function (stepper) {
    stepper.goPrevious(); // go previous step
});


//filter dropdowns----------------
// JDSelect2("https://run.mocky.io/v3/c6f52535-5f71-4ae2-a688-c1ff6aa5dabe", "shelf-page", "Select SKU");
JDSelect2("https://run.mocky.io/v3/25b01520-6ae0-4c64-b74f-1c423b5b747c", "state", "Select State");
JDSelect2("https://run.mocky.io/v3/af3d7fff-3f69-4576-98e3-b1707dcc5873", "city", "Select City");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "custom-filter", "Select Custom Filters");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "banner", "Select Banners");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "custom-grouping", "Select Custom Grouping");
// JDSelect2("https://run.mocky.io/v3/5e44aeea-484f-4eff-8a1a-25a5e6ab454b", "supplier", "Select Supplier");
*/
//create series dropdown
//JDSelect2("https://run.mocky.io/v3/25b01520-6ae0-4c64-b74f-1c423b5b747c", "series_state", "Select State");
//JDSelect2("https://run.mocky.io/v3/af3d7fff-3f69-4576-98e3-b1707dcc5873", "series_city", "Select City");
//JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "series_custom-filter", "Select Custom Filters");
//JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "store_location", "Select Store Location");
//JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "series_custom-grouping", "Select Custom Grouping");
//JDSelect2("https://run.mocky.io/v3/5e44aeea-484f-4eff-8a1a-25a5e6ab454b", "series_marketplace", "Select Marketplace");
//JDSelect2("https://run.mocky.io/v3/5e44aeea-484f-4eff-8a1a-25a5e6ab454b", "series_custom_filter", "Select Custom Filter");

//form validation
"use strict";
var KTContactApply = function() {
    var t, e, o, n;

    return {
	init: function() {
	    o = document.querySelector("#create_report"),
	    t = document.getElementById("submit-btn"),
	    $(o.querySelector('[name="position"]')).on("change", (function() {
		e.revalidateField("position")
		alert('hi')
	    })),
	    e = FormValidation.formValidation(o, {
		fields: {
		    name: {
			validators: {
			    notEmpty: {
				message: "Report Name is required"
			    }
			}
		    },
		    shelf_page: {
			validators: {
			    notEmpty: {
				message: "Shelf Page is required"
			    }
			}
		    }
		},
		plugins: {
		    trigger: new FormValidation.plugins.Trigger,
		    bootstrap: new FormValidation.plugins.Bootstrap5({
			rowSelector: ".fv-row",
			eleInvalidClass: "",
			eleValidClass: ""
		    })
		}
	    }),
	    
	    t.addEventListener("click", (function(o) {
		o.preventDefault(), e && e.validate().then((function(e) {
		    console.log("validated!"), "Valid" == e ? (t.setAttribute("data-kt-indicator", "on"), t.disabled = !0, setTimeout((function() {
			window.location="https://training.suite.jendasolutionssandbox.com/my-reports/";
			return false;
		    }), 2e3)) : Swal.fire({
			text: "Sorry, looks like there are some errors detected, please try again.",
			title: "Error",
			buttonsStyling: !1,
			confirmButtonText: "Ok",
			customClass: {
			    confirmButton: "btn btn-danger"
			}
		    }).then((function(t) {
			KTUtil.scrollTop()
		    }))
		})); //e closing
	    })) //click
	}

    }

}();
//KTUtil.onDOMContentLoaded((function() {
  //  KTContactApply.init()
//}));

//selected skus
var elem = $(".custom-dropdown input:checkbox");

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


let reviewSeriesObject = {};
let currentEditseriesId = undefined;
let create_series_id = 1;
// rule content delete/update
$(document).ready(function() {
    $(".serieslist").hide();
    //Add Rule
    $("#create_series_button").click(function(e){

	//getSeriesModalData();
	
	var value  = $("#seriesName").val();
	console.log(value);
	if(value === ""){
	    toastr.error('Please enter series name.');
	    return false;
	}else {
	    $('#multiple_series_modal').modal('toggle');
	    $(".serieslist").show();

	    if(!(currentEditseriesId in seriesObject)){
	    
		$(".serieslist").append("<div data-index='"+create_series_id+"' class='d-flex align-items-center justify-content-between fs-6  text-break'><span class='me-3 editable-content'><span class='more' id=series_name_"+create_series_id+">"+value+"</span></span></span><span class='cursor-pointer'><span class='d-flex align-items-center'><a href='#' data-index='"+create_series_id+"' onclick='editUnsavedSeries("+create_series_id+")' class='btn btn-icon btn-bg-light btn-active-color-primary bg-hover-light-primary btn-sm me-1 edit  w-30px h-30px'><i class='far fa-edit'></i></a><a href='#' class='btn btn-icon btn-bg-light btn-active-color-success bg-hover-light-success btn-sm me-1 save  w-30px h-30px' style='display:none;'><i class='far fa-save fs-5'></i></a> <a href='#' class='btn btn-icon btn-bg-light btn-active-color-danger bg-hover-light-danger btn-sm me-1 delete w-30px h-30px'><i class='far fa-trash-alt'></i></a></div>");
		
		getSeriesModalData(create_series_id);
		create_series_id += 1;
	    }else{
		getSeriesModalData(currentEditseriesId)
	    }
	    
	}
	currentEditseriesId = undefined;
    });
    
    $("body").delegate(".serieslist .delete", "click", function(e){
	e.preventDefault();
	let delete_series_id = $(this).closest("div").attr('data-index');
	delete seriesObject[delete_series_id]
	delete reviewSeriesObject[delete_series_id]
	$(this).closest("div").remove();
	console.log(seriesObject)
	$(".serieslist:empty").hide();
    });
});


function editUnsavedSeries(index){
    console.log(seriesObject);
    currentEditseriesId = index;
    fillSeriesModalData(index);
    $('#multiple_series_modal').modal('show');
    //delete seriesObject[index]
}


const getSeriesModalData = function (index) {
    let currentSeries = new Object();

    var  series_selected_skus = $(".series_sku_modal_items input:checkbox")
        .filter(':checked')
        .map(function() {
	    return $("label[for='" + this.id + "']").attr('value');
	}).get();
    
    var series_name = $("#seriesName").val();
    var series_price_type = $('input[name="series_price_type"]:checked').val();
    var central_tendency =  $('input[name="central_tendency"]:checked').val();
    currentSeries.name = series_name
    currentSeries.price_type = series_price_type;
    currentSeries.central_tendency = central_tendency;
    currentSeries.skus = series_selected_skus;
    currentSeries.states = $('#series_states').val();
    currentSeries.cities = $('#series_cities').val();
    currentSeries.custom_groupings = $('#series_custom_groupings').val();
    currentSeries.marketplaces = $('#series_marketplaces').val();
    currentSeries.merchants = $('#series_merchants').val();
    seriesObject[index] = currentSeries;
    $('#series_name_'+index).text(series_name) // Set series Name on span tag.
    console.log('seriesObject ', seriesObject)
    
    //review and submit series object
    let reviewCurrentSeries = new Object();
    reviewCurrentSeries.name = series_name
    if(selectedReportType == 'PT'){
	reviewCurrentSeries.price_type = series_price_type;
	reviewCurrentSeries.central_tendency = central_tendency;
    }else{
	reviewCurrentSeries['Availability Status'] = $('input[name="availability_status"]:checked').val();
    }
    reviewCurrentSeries.skus = series_selected_skus;
    reviewCurrentSeries.states = $('#series_states').select2('data');
    reviewCurrentSeries.cities = $('#series_cities').select2('data');
    reviewCurrentSeries.custom_groupings = $('#series_custom_groupings').select2('data');
    reviewCurrentSeries.marketplaces = $('#series_marketplaces').select2('data');
    reviewCurrentSeries.merchants = $('#series_merchants').select2('data');
    reviewSeriesObject[index] = reviewCurrentSeries;
    console.log('reviewSeriesObject ', reviewSeriesObject);

    clearSeriesModalData();
}

const clearSeriesModalData = function(){
    $("#seriesName").val('');
    $('[value="AVG"]').prop("checked", true);
    $('[value="sale_price"]').prop("checked", true);
    $('#series_states').empty();
    $('#series_cities').empty();
    $('#series_custom_groupings').empty();
    $('#series_marketplaces').empty();
    $('#series_add_bulk').empty();
    $('#series_merchants').empty();
}


const fillSeriesModalData = function (index){
    var currentSeries = reviewSeriesObject[index];
    console.log('fillSeriesModalData', currentSeries);
    PricePluseReportFormFileds.forEach(field => {
	//series_merchants
	if (field.select2 && field.name in currentSeries){
	    currentSeries[field.name].forEach(option => {
		$('#series_'+field.name).select2('trigger', 'select', {
		    data: {id: option.id, text: option.text},
		});
	    });
	}

	if(field.name == 'name'){
	    $("#seriesName").val(currentSeries[field.name]);
	}
	if(field.name == 'price_type'){
	    $('[value="'+currentSeries[field.name]+'"]').prop("checked", true);
	}
	if(field.name == 'central_tendency'){
	    $('[value="'+currentSeries[field.name]+'"]').prop("checked", true);
	}
    });
}

function openSeriesSkusModal(){
    $('#selectbrands').modal('show');

}

$("#multiple_series_modal").on('show.bs.modal', function () {
    report_type_icons[selectedReportType].hideFields();
    report_type_icons[selectedReportType].showFields();
    //alert('hi');
});


$("#multiple_series_modal").on("hidden.bs.modal", function () {
    /*alert('Im hiding')
    $("#seriesName").val('');
    $('[value="AVG"]').prop("checked", true);
    $('[value="sale_price"]').prop("checked", true);
    $('#series_states').empty();
    $('#series_cities').empty();
    $('#series_custom_groupings').empty();
    $('#series_marketplaces').empty();
    $('#series_add_bulk').empty();
    $('#series_merchants').empty();
    */
});


document.addEventListener('DOMContentLoaded', function () {
    //skus
    let seriesSkuPricePulseReportAjaxRequest  = $.ajax({
	url: SHIELD_SUITE_API_BASE_URL + SHIELD_SUITE_APIS.PricePulse.listPricePulseSkus,
    });
    seriesSkuPricePulseReportAjaxRequest.done(function (data) {
	console.log('Series skus data: ' , data);
	$(".series_sku_modal_items").html('');
	const container = document.querySelector(".series_sku_modal_items");

	data['results'].map((curElm, index) => {
	    //skusObject[curElm.id] = {'name': curElm.name, 'image': curElm.image}
	                const htmlData = `
                     <div class="list-item form-check form-check-custom form-check-solid justify-content-between">
                       <label class="form-check-label ms-0 me-2 " for="series_customCheck-${curElm.id}" value="${curElm.id}">
                         <span class="text-start d-flex align-items-center justify-content-between" for="series_customCheck-${curElm.id}">
                          <span class="d-flex align-items-center">
                            <div class="img-wrapper rounded border me-3">
                              <img src="${curElm.image}" alt="sku image">
                            </div>
                             ${curElm.name}
                          </span>
                          <span class="d-none delete">
                            <a href="#" class=" btn btn-icon btn-bg-light btn-active-color-danger bg-hover-light-danger btn-sm me-1 edit  w-30px h-30px ">
                             <i class="far fa-trash-alt"></i></a></span>
                          </span>
                       </label>
                  <input class="form-check-input" type="checkbox" id="series_customCheck-${curElm.id}">
               </div>`;
	    container.insertAdjacentHTML('beforeend', htmlData);
	});

	var elem = $(".series_sku_modal_items input:checkbox");
	$(function(){
	    $(".series_apply").click(function(){
		//Filter only checked checkboxes
		var selected = elem
		    .filter(':checked')
		    .map(function() {
			return $("label[for='" + this.id + "']").html();
		    }).get(); //Get array
		var html = '<div class="result-content scroll-y mh-200px mh-lg-250px border rounded p-4 mt-2">' + selected.join('') + '</div>';
		$(".select_series_skus").html(html);
		$(".result-content:empty").hide();
	    });
	    // Onclick of delete icon unselecting the skus
	    $("body").delegate(".select_series_skus .delete", "click", function(e){
		e.preventDefault();
		$(this).closest("span").parent().remove();
		$('.result-content').filter(function () {
		    return $(this).children().length < 1;
		}).remove();
		var value1 = $(this).closest("span").parent().attr("for");
		$("input:checkbox[id ='" + value1 + "']").prop("checked", false);
	    });
	});
    });

    
    
    
    ShieldSelect2({
	api: SHIELD_SUITE_APIS.statesList,
	elementSelector: '#series_states',
	placeholder: 'Select States',
	mapFunction: function (item) {
	    return {
		id: item.id,
		text: `${item.name} (${item.state_name_acronym})`,
	    };
	},
    });

    ShieldSelect2({
	api: SHIELD_SUITE_APIS.citiesList,
	elementSelector: '#series_cities',
	placeholder: 'Select Cities',
	textField: 'city',
    });

    ShieldSelect2({
	api: SHIELD_SUITE_APIS.customGroupingsList,
	elementSelector: '#series_custom_groupings',
	placeholder: 'Select Custom Filters',
    });

    ShieldSelect2({
	api: SHIELD_SUITE_APIS.customGroupingsList,
	elementSelector: '#series_add_bulk',
	placeholder: 'Select Add in Bulk',
    });

    ShieldSelect2({
	api: SHIELD_SUITE_APIS.PricePulse.listPricePulseMarketplaces,
	elementSelector: '#series_marketplaces',
	placeholder: 'Select Marketplace',
    });

    ShieldSelect2({
	api: SHIELD_SUITE_APIS.PricePulse.listPricePulseMerchants,
	elementSelector: '#series_merchants',
	placeholder: 'Select Storage Locations',
    });
});


$('#series_add_bulk').on('select2:select', function (e) {
    //pricePulseCustomGropings
    var data = e.params.data;
    var customGroupingId = data.id;
    console.log('customGroupingId ', customGroupingId);
    let AddBulkAjaxRequest = $.ajax({
	url: SHIELD_SUITE_API_BASE_URL + SHIELD_SUITE_APIS.PricePulse.pricePulseCustomGropings.format({customGroupingId}),
    });

    AddBulkAjaxRequest.done(function (data) {
	console.log(data)
	delete data['id'];
	delete data['name'];
	console.log('Add bulk selected data', data);
	PricePluseReportFormFileds.forEach(field => {
	    if(field.select2 && (field.name in data)){
		console.log(field.name)
		data[field.name].forEach(option => {
		    if (field.customText) {
			$('#series_'+field.name).select2('trigger', 'select', {
			    data: {id: option.id, text: field.getText(option)},
			});
		    } else {
			$('#series_'+field.name).select2('trigger', 'select', {
			    data: {id: option.id, text: option[field.text]},
			});
		    }
		});
	    }
	    /*
	    if(field.name == 'skus'){
		data[field.name].forEach(option => {
		    $("input:checkbox[id =customCheck-" + option.id + "]").prop("checked", true);
		});
		$('.apply').click();
	    }*/

	});
    });
});

/*
$("#create_series_button").click(function() {
    toastr.error('Please select atleast 1 sku .');
    return false;
});*/
