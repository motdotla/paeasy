var app = $.sammy(function() { with(this) {
	// debug on
  debug = true

	// define database
	var db = $.couch.db('paeasy');

	post('#/create', function() { with(this) {
		db.saveDoc(params);
		// $('#main').text('Welcome!');
  }});

	get('#/', function() { with(this) {
		// create view
		var journals = db.view('paeasy/journals_by_date')
		
		
		// fetch all
		// var entries = view.fetchAll();
		alert(journals);
		$('#entry').text(journals);
			
	}})
}});


$(document).ready(function() {
	$(function() {
		app.run();
	});
});