

Modernizr.load({
	test: Modernizr.inputtypes.date,
	yep: "js/success.js",
	nope: "js/fail.js",
	complete: function(){
		//This will run after the js file is loaded based on the case
		
		console.log("The test is complete");

		//-----------MAP SCRIPT-----------------//
		$('a.dot').click(function() {

			$('a.dot').removeClass('selected');
			$(this).addClass('selected');

			var campus = '.campus_detail#' + $(this).attr('campus');
			var htmlCode = $(campus).html();

			$('.detail_container').fadeOut(500, function () {
				$('.detail_container .campus_detail').html(htmlCode);
				$('.detail_container').fadeIn(500);
			});
		});
		///////// Start of Video/////////////////

		////////End if Video/////////////////////
		/////////Start of Data///////////
		// Load the Visualization API and the piechart package.
		google.load('visualization', '1.0', {'packages':['corechart']});

		// Set a callback to run when the Google Visualization API is loaded.
		google.setOnLoadCallback(drawChart);

		// Callback that creates and populates a data table,
		// instantiates the pie chart, passes in the data and
		// draws it.
		function drawChart() {

			// Create the data table.
			var data = new google.visualization.DataTable();
			data.addColumn('string', 'Campus');
			data.addColumn('number', 'Giving');
			data.addRows([
				['Draper', 27931],
				['South Jordan', 4226],
				['West Jordan', 3524],
				['St. George', 6347]

			]);

			// Set chart options
			var options = {'title':'Average Weekly Giving',
				'width':450,
				'height':350,
				colors: ['#53873e', '#b2d372', '#375628', '#3da56c'],
			};

			// Instantiate and draw our chart, passing in some options.
			var chart = new google.visualization.PieChart(document.getElementById('giving'));
			chart.draw(data, options);
		}
		// Set a callback to run when the Google Visualization API is loaded.
		google.setOnLoadCallback(drawChart2);
		function drawChart2() {

			// Create the data table.
			var data = new google.visualization.DataTable();
			data.addColumn('string', 'Campus');
			data.addColumn('number', 'Baptisms');
			data.addRows([
				['Draper', 400],
				['South Jordan', 40],
				['West Jordan', 35],
				['St. George', 78]

			]);

			// Set chart options
			var options = {'title':'Baptisms by Campus',
				'width':450,
				'height':350,
				colors: ['#53873e'],
			};

			// Instantiate and draw our chart, passing in some options.
			var chart = new google.visualization.BarChart(document.getElementById('baptisms'));
			chart.draw(data, options);
		}





	}






	});





