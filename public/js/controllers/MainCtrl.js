angular.module('MainCtrl', []).controller('MainController', function($scope) {
	var chart,msg;
	var drawchart = function(div) {

		google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004',  1000,      400],
        ['2005',  1170,      460],
        ['2006',  660,       1120],
        ['2007',  1030,      540]
      ]);

      var options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
      };

			switch(div) {
		    case 'linechart':
		         chart = new google.visualization.LineChart(document.getElementById(div));
		        break;
		    case 'areachart':
		         chart = new google.visualization.AreaChart(document.getElementById(div));
		        break;
				case 'columnchart':
						 chart = new google.visualization.ColumnChart(document.getElementById(div));
						break;
				default:
						 chart = new google.visualization.LineChart(document.getElementById('linechart'));
						 break;
			}

      chart.draw(data, options);
    }
	};
	var pie_chart;
	var filter_data;
	var piechart = function() {
		 google.charts.load('current', {'packages':['corechart']});
		 google.charts.setOnLoadCallback(drawpieChart);
		 function drawpieChart() {

			 var data = google.visualization.arrayToDataTable([
				 ['Task', 'Hours per Day'],
				 ['Work',     11],
				 ['Eat',      2],
				 ['Commute',  2],
				 ['Watch TV', 2],
				 ['Sleep',    7]
			 ]);
			 filter_data = [['Work',     11],
			 ['Eat',      2],
			 ['Commute',  2],
			 ['Watch TV', 2],
			 ['Sleep',    7]]
			 var options = {
				 title: 'My Daily Activities'
			 };

			 pie_chart = new google.visualization.PieChart(document.getElementById('piechart'));
			 google.visualization.events.addListener(pie_chart, 'select', selectHandler);
			 pie_chart.draw(data, options);
		 }
	};
	function selectHandler() {
		alert("please check console")
		console.log(filter_data[pie_chart.getSelection()[0].row]);
	}
	drawchart('linechart');
	drawchart('areachart');
	drawchart('columnchart');
	piechart();
});
