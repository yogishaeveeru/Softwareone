//Datatable-----------------
JDDatatable('https://run.mocky.io/v3/e2522f15-6f24-4d8c-b6f0-0de5dfd5116f', "promopulse-report","Promo Pulse Reports ");
$('#search-filter').on('click', function (e) {
    $('#promopulse-report').dataTable().fnDraw();

});

$.extend( true, $.fn.dataTable.defaults, {
    "autoWidth": false,
} );

datatable_column_width = function column_width(){
    $('#promopulse-report').find('th').eq(0).css('width', '85%');
}
