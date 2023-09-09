//filter dropdowns----------------
JDSelect2("https://run.mocky.io/v3/c6f52535-5f71-4ae2-a688-c1ff6aa5dabe", "shelf-page", "Select SKU");
JDSelect2("https://run.mocky.io/v3/25b01520-6ae0-4c64-b74f-1c423b5b747c", "state", "Select State");
JDSelect2("https://run.mocky.io/v3/af3d7fff-3f69-4576-98e3-b1707dcc5873", "city", "Select City");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "custom-filter", "Select Custom Filters");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "banner", "Select Banners");
JDSelect2("https://run.mocky.io/v3/1386426e-44c9-4307-b5fb-cf8cafa1c39a", "custom-grouping", "Select Custom Grouping");
JDSelect2("https://run.mocky.io/v3/5e44aeea-484f-4eff-8a1a-25a5e6ab454b", "supplier", "Select Supplier");

//enabled fields on shelf page select
$(document).ready(function() {
    $('#shelf-page').change(function() {
	// console.log($(this).val());
	if ($(this).val() > 0) {
	    $('#state').prop("disabled", false);
	    $('#city').prop("disabled", false);
	    $('#store').prop("disabled", false);
	    $('#custom-filter').prop("disabled", false);
	} else {
	    $('#state').prop("disabled", true);
	    $('#city').prop("disabled", true);
	    $('#store').prop("disabled", true);
	    $('#custom-filter').prop("disabled", true);
	}

    });
});

//form validation
"use strict";
var KTContactApply = function() {
    var t, e, o, n;

    return {
	init: function() {
	    o = document.querySelector("#update-report-form"), t = document.getElementById("update-report-submit"), $(o.querySelector('[name="position"]')).on("change", (function() {
		e.revalidateField("position")
	    })), e = FormValidation.formValidation(o, {
		fields: {
		    report_name: {
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
	    }), t.addEventListener("click", (function(o) {
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
		}))
	    }))
	}

    }

}();
KTUtil.onDOMContentLoaded((function() {
    KTContactApply.init()
}));

const button = document.getElementById('delete-report');

button.addEventListener('click', e => {
    e.preventDefault();

    Swal.fire({
	html: `Are you sure you want to delete this report? This action cannot be undone.`,
	title: "Confirm!",
	buttonsStyling: false,
	showCancelButton: true,
	confirmButtonText: "Delete",
	cancelButtonText: 'Cancel',
	customClass: {
	    confirmButton: "btn btn-primary",
	    cancelButton: 'btn btn-light'
	}
    });
});


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

