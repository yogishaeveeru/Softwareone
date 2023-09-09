var selectId;
var placeholder;
function JDSelect(api, id, placeholder){
    $.getJSON(api, function(res){
	placeholder = res.placeholder;
	$("#"+id+"").select2({
	    multiple: true,
	    placeholder: placeholder,
	    ajax: {
		url: api,
		processResults: function (data) {
		    return {
			results: data.items
		    };
		}
	    }
	});
    });
    selectId = id;
    $("#"+id+"").on('select2:select', function (e) {
	update = e.params.data;
    });
}
