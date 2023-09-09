//lazy loading
const container = document.querySelector(".marketing-content-outer");
let limit = 1;
let pageCount = 1;
const getPost = async () =>{
    const response = await fetch(`https://run.mocky.io/v3/51dc9332-6f18-4849-92f8-f81f8a7a6a02/page/?_limit=${limit}$_page=${pageCount}`);
    //console.log(response);
    const data = await response.json();
    // console.log(data[0]);
    data.map((curElm,index) => {
	  const htmlData=`
 
  <div class="col-sm-12 mb-8">
       <div class="card card-stretch marketing-content h-100 fs-5">
       <div class="card-body p-0">
          <div class="row">
          <div class="col-md-6">
          <div class="media-text p-4 p-md-5">
          <span>${curElm.channel}</span>
          <div class="media-title mb-4 d-flex align-items-center pt-1">
            <div class="img-wrapper border border-gray-300 border-dashed rounded">
               <img src="${curElm.brand_logo}" alt="" class="img-fluid">
            </div>
             <h3 class="text-primary fw-bold m-0">${curElm.title} <span class="text-muted d-block mt-1 fs-6 fw-normal">Marketplace</span></h3>
          </div>
             <p class="more">${curElm.text}</p>
             <div class="button-row pt-1 pt-md-2 mt-5">
             <button class="btn  fs-6 btn-primary me-1">View Post</button>
             <span class="dropdown">
               <button class="btn fs-6  btn-light dropdown-toggle" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
               Add Tag
               </button>
               <form class="dropdown-menu border" aria-labelledby="dropdownMenuClickable">
               <div class="top-arrow ">
               <select id="add-tag" class="form-select  form-select-solid" data-control="select2"  multiple="multiple">
               </select>
               <button class="btn btn-primary mt-4 d-flex mx-auto py-2 fs-6 px-6">Submit</button>
               </div>
               </form>
             </span>
           </div>
       </div>
       </div>
       <div class="col-md-6 mt-5 mt-md-0">
       <div class="media-image pt-md-5 pb-4 pb-md-5 px-4 h-100">
         <div class="img-wrapper border rounded bg-light">
       <img src="${curElm.featureimage}" class="img-fluid p-4">
       </div>
       </div>
       </div>
       </div>
       </div>
  </div> 
    `;
	container.insertAdjacentHTML('beforeend', htmlData);
    })

    // code for character limit for see more link
    $(document).ready(function() {
	// Configure/customize these variables.
	var showChar = 181; // How many characters are shown by default
	var ellipsestext = "...";
	var moretext = "See More ";
	var lesstext = "See Less";
	$('.more').each(function() {
	    var content = $(this).html();
	    if (content.length > showChar) {
		var c = content.substr(0, showChar);
		var h = content.substr(showChar, content.length - showChar);
		var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span class="text">' + h + '</span><a href="" class="morelink text-danger hvr-icon-down">' + moretext + '</a></span>';
		$(this).html(html);
	    }
	});
	$(".morelink").click(function() {
	    if ($(this).hasClass("less")) {
		$(this).removeClass("less");
		$(this).html(moretext);
		$(this).prev().hide('100');
		$(this).parent().prev().show('100');
	    } else {
		$(this).addClass("less");
		$(this).html(lesstext);
		$(this).prev().show('100', function() {
		    $(this).css('display', 'inherit');
		});
		$(this).parent().prev().hide('100');
	    }
	    $(this).prev('.text').find('.text').show('100', function() {
		$(this).css('display', 'inherit');
	    });
	    $(this).prev('.text').find('.moreellipses').hide();
	    return false;
	});
    });
    //-------------------------------

}

getPost();

const showData = ()=>{
    $('#loading').show();
    setTimeout(()=>{
	pageCount++;
	$('#loading').hide();
	getPost();
    },3000)
};

window.addEventListener('scroll', () => {
    const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
    if(scrollTop + clientHeight >= scrollHeight){
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
