$( document ).ready( function () {
	console.log("tables.js is loaded correctly.")

	var projectHeaderList = $( "ul.dfwp-column.dfwp-list" ).first();
	var projectList = $( "ul.dfwp-column.dfwp-list" ).last();
	//"dfwp-column dfwp-list" UL's are used twice on the page - first for the "active" header, second for everything else.
	var projects = projectList.children();
	var projectListNotification = $("<h4>" + "You have " + projects.length + " active projects." + "</h4>");
	$(projectHeaderList).before( projectListNotification )

});