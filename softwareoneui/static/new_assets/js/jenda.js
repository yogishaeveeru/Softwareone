$('document').ready(function(){
    //Password Reset
    $('.resetpass').click(function(){
    	$.confirm({
	    title: 'Confirm!',
	    content: 'Are you sure you wish to reset your password?  A reset link will be sent to your email.',
	    buttons: {
		confirm: function () {
		    $.ajax({
			url: RESET_PASSWORD_URL,
			headers: callHeaders,
			method: 'GET',
			contentType: false,
			processData: false,
			success: function(data){
			    console.log("link successfully send to email")
			    $.alert({
				title: 'Success',
				content: 'A link to reset your password has been sent to your email. Please check your spam folder if you are unable to find it.',
			    });
			},
			error: function(xhr){
			    $.alert({
				title: xhr.status+' Error',
				content: xhr.statusText,
			    });
			    console.log("Error in ajax call, statusText is ", xhr.statusText)
			    console.log("status is ", xhr.status)
			    console.log("response text is", xhr.responseText)
			}
		    }) // end ajax
		},
		cancel: function () {

		},
	    }
	});
    });

    //screenshot toggle
    $('.view-ss').click(function(){
	$(this).toggleClass("changetext btn-danger");
	$(this).closest('.card').find('.screenshot').toggleClass('d-none');
    });

    $(function (){
	$('[data-toggle="popover"]').popover();
    });

    //Dropdown Selector
    $(".js-dropmenu a").click(function(){
	$(this).parents('.js-drop').find(".js-dropbtn-text").html($(this).html());
    });

    const baseurl = window.location.pathname;

    if (baseurl.indexOf("brandcommand") > -1) {
	$('.link-brand').addClass('active');
    }
    else if (baseurl.indexOf("pricepulse") > -1) {
	console.log("pricepulse");
	$('.link-price').addClass('active');
    }
    else if (baseurl.indexOf("promopulse") > -1) {
	$('.link-promo').addClass('active');
    }
});


//Header start
$('#ktheadermobile').on('click', function(){
    $('nav').toggleClass('show');

});
$('.close-menu').on('click', function(){
    $('nav').removeClass('show');
});
$('#ktheadermobiletopbar').on('click', function(){
    $('.topbar').toggleClass('show-topbar');
});

$(document).ready(function() {
    var pathname = window.location.pathname;
    let  allowed_path = { 'new/brandcommand' : ['#brand-command','.brand-command'], 'new/pricepulse' : ['#price-pulse','.price-pulse'], '/new/shareofshelf':['#share-sh\
elf','.share-shelf'] , 'new/promopulse':['#promo-pulse','.promo-pulse']    }
    var flag = true;
    
    for(var key in allowed_path){
	if(pathname.includes(key)){
	    console.log('yes');
	    $( allowed_path[key][0]).show();
	    $('.dropdown-menu li').removeClass('active');
	    $(allowed_path[key][1]).addClass('active');
            flag = false;
	    continue;
	}
	$( allowed_path[key][0]).hide();
    }
    if(flag){
	console.log('no');
	$('#price-pulse').show();
    }

    $(function() {
	var href = window.location.pathname;
	$('.header .nav li a').each(function(e,i) {
	    console.log($(this).attr('href'))
	    console.log(href)
	    if (href == $(this).attr('href')) {
		$(this).parent().addClass('active');
	    }
	});

    });
    $(function() {
	var href = window.location.pathname;
	$('.user-dropdown li a').each(function(e,i) {
	    console.log($(this).attr('href'))
	    console.log(href)
	    if (href == $(this).attr('href')) {
		$(this).parent().addClass('active');
	    }
	});

    });
       
});
//Header end
