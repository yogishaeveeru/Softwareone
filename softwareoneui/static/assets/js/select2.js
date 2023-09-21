'use strict';
// $.fn.select2.defaults.set('closeOnSelect', false);
const OneAppSelect2 = function ({
    api,
    elementSelector,
    placeholder,
    maxSelection,
    pageSize = 20,
    idField = 'id',
    textField = 'name',
    traditional = false,
    templateResult,
    templateSelection,
    mapFunction = function (item) {
        return {
            id: item[idField],
            text: item[textField],
        };
    },
    processResults = function (data, params) {
        params.page = params.page || 1;
        return {
            results: data.results.map(mapFunction),
            pagination: {
                more: params.page * pageSize < data.count,
            },
        };
    },
    data = function (params) {
        return {search: params.term, page: params.page, page_size: pageSize};
    },
}) {
    return $(elementSelector).select2({
        placeholder,
        maximumSelectionLength: maxSelection,
	    allowClear:"true",
        ajax: {
            traditional,
            data,
            processResults,
            url: api,
        },
        templateResult,
        templateSelection,
    });
};

//Remove searched text on select
$(document).ready(function() {
    $("select").on('select2:select', function (e) {
	$('.select2-search__field').val('');
    });
});
