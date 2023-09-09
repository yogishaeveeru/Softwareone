'use strict';
var KTDatatablesDataSourceAjaxClient = function() {

	var initTable1 = function() {
		var table = $('#kt_datatable');

		// begin first table
		table.DataTable({
			responsive: true,
			ajax: {
				url: HOST_URL + '/api/datatables/demos/default.php',
				type: 'POST',
				data: {
					pagination: {
						perpage: 20,
					},
				},
			},
			columns: [
			
				{data: 'Country'},
				{data: 'ShipCity'},
				{data: 'CompanyName'},
				{data: 'ShipDate'}
			]
		
		});
	};

	return {

		//main function to initiate the module
		init: function() {
			initTable1();
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesDataSourceAjaxClient.init();
});
