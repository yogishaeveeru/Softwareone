let input = document.getElementById("kt_tagify_3");
let getWhitelistUrl = "//" + window.location.host + "/api/price-pulse/sku-filters/";
let selectedFilter = "sku";
let tagify = new Tagify(input, {
    whitelist: [],
    enforceWhitelist: true,
    tagTextProp: "text", // <-- the default property (from whitelist item) for the text to be rendered in a tag element.
    dropdown: {
	position: "input",
	enabled: 0, // always opens dropdown when input gets focus
	highlightFirst: true,
	mapValueTo: "title", // <-- similar to above "tagTextProp" setting, but for the dropdown items
	searchKeys: ["title"]
    }
});

let selectedSkus = [];
let selectedBottleSize = [];
let selectedBrands = [];
let controller;
// Type filtertag
tagify.DOM.input.classList.add("form-control");
tagify.DOM.scope.parentNode.insertBefore(tagify.DOM.input, tagify.DOM.scope);

// if filter label is saved API then Load filter label API.
// $.ajax({
//   type: "GET",
//   dataType: "json",
//   url: `https://run.mocky.io/v3/f496f185-5686-45b3-a849-cdb1e9c95ef3`,
//   success: function (data) {
//     tagify.addTags(data);
//   },
//   error: function (error) {
//     console.log(error);
//   },
// });
//


function getWhitelistFromServer(searchInput) {
    tagify.whitelist = null; // reset the whitelist
    // https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
    controller && controller.abort();
    controller = new AbortController();

    // show loading animation and hide the suggestions dropdown
    tagify.loading(true).dropdown.hide();
    let whitelistEndpoint = `${getWhitelistUrl}?key=${selectedFilter}`;
    if (searchInput) {
	whitelistEndpoint = `${whitelistEndpoint}&search=${searchInput}`;
    }
    /*    fetch(whitelistEndpoint, {
        signal: controller.signal
    })
        .then((RES) => RES.json())
        .then(function (newWhitelist) {
            tagify.whitelist = newWhitelist.data.concat(tagify.value); // update whitelist Array in-place
            if (searchInput) {
                tagify.loading(false).dropdown.show(searchInput); // render the suggestions dropdown
            }
            });*/
}

$("#selectpicker").on(
    "changed.bs.select",
    function (e, clickedIndex, newValue, oldValue) {
	selectedFilter = this.value;
	getWhitelistFromServer();
    }
);

// Chainable event listeners
tagify.on("input", onTagifyInput).on("focus", onTagifyFocus);

function onTagifyFocus(e) {
    tagify.loading(false).dropdown.show();
}

function onTagifyInput(e) {
    getWhitelistFromServer(e.detail.value);
}

/*
let searchvalue ="";
// datatable Searchbox search API
$('.icon-textbox .svg-icon').click(function () {
    searchvalue=$(".datatableSearch").val();
    table.search($(".datatableSearch").val()).draw();
    })*/

// Page load datatable call API
let table = $("#skutable").DataTable({
    //   dom: '<"float-left"B><"float-right"f>rt<"row"<"col-sm-6"l><"col-sm-6"p>>',
    buttons: [],
    paging: true,
    serverSide: true,
    pageLength: 10,
    responsive: true,
    order: [[0, "asc"]],
    lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
    processing: true,
    info: false,
    language: {
	paginate: {
	    next: '<i class="fas fa-chevron-right"></i>',
	    previous: '<i class="fas fa-chevron-left"></i>'
	},
	processing:
	'<div class="d-flex align-items-center justify-content-center"> <div class="loader">Loading...</div></div> '
    },
    ajax: function (data, callback, settings) {
	data.skus = selectedSkus.join();
	data.bottle_sizes = selectedBottleSize.join();
	data.brands = selectedBrands.join();
	$.ajax({
	    // url: "//" + window.location.host + "/api/price-pulse/skus/",
	    url:"https://run.mocky.io/v3/84df2205-d03b-47ea-a6af-fef33f430dd5",
	    type: "GET",
	    contentType: "application/x-www-form-urlencoded",
	    data: data,
	    success: function (data, textStatus, jQxhr) {
		callback({
		    draw: data.draw,
		    data: data.data,
		    recordsTotal: data.recordsTotal,
		    recordsFiltered: data.recordsFiltered
		});
	    },
	    error: function (jqXhr, textStatus, errorThrown) {
		console.log(jqXhr, textStatus, errorThrown);
	    }
	});
    },
    columns: [
	{ data: "name" },
	{ data: "brand__brand", defaultContent: "" },
	{ data: "bottle_size__bottle_size", defaultContent: "" }
    ],
    columnDefs: [
	{
	    render: function (data, type, row, meta) {
		return (
		                        `
                    <div class="d-flex align-items-center table_thumb_pro">
                    <span class="img-wrapper border rounded  me-3">
                      <img src="${row.image}" alt="" class="img-fluid"/>
                    </span>
                    <p>
                      <a href="#">${row.name ? row.name : ''}</a>
                      <span>Area: ${row.origin__origin ? row.origin__origin : ''}</span>
                    </p>
                  </div>
                    `
		);
	    },
	    //"orderable": false,
	    targets: 0
	}
    });

				     // save Filter button on click event API
				     $(".saveSearch").click(function () {
					 selectedSkus = [];
					 selectedBottleSize = [];
					 selectedBrands = [];
					 $.each(tagify.value, function (key, value) {
					     if (value.type === "name") {
						 selectedSkus.push(value.value);
					     } else if (value.type === "bottle_size") {
						 selectedBottleSize.push(value.value);
					     } else if (value.type === "brand") {
						 selectedBrands.push(value.value);
					     }
					 });
					 // Filter By tag empty list hide on save button click
					 if ($(".tagify--outside").hasClass("tagify--empty")) {
					     $(".filters-tags-cover-main").hide();
					 }
					 table.draw();
				     });

				     // remove all tag cover div hide show
				     $(document).on("change", function () {
					 $(".tagify--outside").appendTo($(".filters-tags"));
					 // window change time show saved filter section
					 savefilterbar();
				     });

				     // Filter By tag list showing code
				     function savefilterbar() {
					 if (!$(".tagify--outside").hasClass("tagify--empty")) {
					     $(".filters-tags-cover-main").show();
					 }
				     }

				     $(document).ready(function () {
					 // Hides input of tagify
					 $(".tagify--outside").appendTo($(".filters-tags"));
					 savefilterbar();
					 getWhitelistFromServer();
				     });
