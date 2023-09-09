
//default options
$.fn.select2.defaults.set('closeOnSelect', false);
//$.fn.select2.defaults.set('sorter', data => data.sort((a, b) => a.text.localeCompare(b.text)));

//Select Filter Dropdown with sorted values
var select2_selectId;
function JDSelect2(api, id, placeholder){
    $.ajax({
	url: api
    }).then(function (data) {
	$("#"+id+"").select2({
	    placeholder: placeholder,
	    allowClear:"true",
	    data:data,
	    //data: data.sort((a, b) => a.text.localeCompare(b.text)),
	});
    });
    select2_selectId = id;
    $("#"+id+"").on('select2:select', function (e) {
	update = e.params.data;
    });
}

