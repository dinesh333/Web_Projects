$(document).ready(function(){
    var today = new Date();
	var day_of_week = today.getDay();
	var day_of_month = today.getDate();
	var month = today.getMonth();
	var year = today.getFullYear();
	
	var days_in_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	day_of_week = days_in_week[day_of_week];
	
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	month = months[month];
	
	$("#today").html(day_of_week + ", " + day_of_month + " " + month + " " + year);
	$("#current_year").html(year);
	
	var messages = {
		Jan: "January: We perform QA/QC on the data received in " + (year - 1) + ".",
		Feb: "February: We perform QA/QC on the data received in " + (year - 1) + ", and prepare for data release.",
		Mar: "March: Release data and prepare for " + year + " season.",
		Apr: "April: Mail data sheets for " + year + " season.",
		May: "May: Routes are run for " + year + " season, and some forms are received.",
		Jun: "June: Routes are still run for " + year + " season, and more forms are received.",
		Jul: "July: Short message for the month of July.",
		Aug: "August: Short message for the month of August.",
		Sep: "September: Short message for the month of September.",
		Oct: "October: Short message for the month of October.",
		Nov: "November: Short message for the month of November.",
		Dec: "December: Short message for the month of December."
	}
	
	var three_lettered_month = month.slice(0, 3);
	
	function bgblue_colrwhite(id){
		$("#" + id).css({"background-color": "blue", "color": "white"});
	}
	
	
	//default: current month gets highlighted, and the current month message shows up
	for(var this_month in messages){
		if(this_month == three_lettered_month){
			$("#current_month").html(messages[this_month]);
			//$("#" + this_month).css({"background-color": "blue", "color": "white"});
			bgblue_colrwhite(this_month);
		}
	}
	
	//When mouse is over a month, it gets highlighted and rest don't
	$(".month:not(#" + three_lettered_month + ")").mouseover(function(){
		$(this).css({"background-color": "blue", "color": "white"});
	}).mouseout(function(){
		$(this).css({"background-color": "white", "color": "black"});
	});
	
	
	$(".month").click(function(){
		var clicked_month = this.id;
		
		//Styling for the month that is clicked
		$("#" + clicked_month).css({"background-color": "blue", "color": "white"}).mouseover(function(){
			$(this).css({"background-color": "blue", "color": "white"});
		}).mouseout(function(){
			$(this).css({"background-color": "blue", "color": "white"});
		});
		
		//Styling for the month that is NOT clicked
		$(".month:not(#" + clicked_month + ")").css({"background-color": "white", "color": "black"}).mouseover(function(){
			$(this).css({"background-color": "blue", "color": "white"});
		}).mouseout(function(){
			$(this).css({"background-color": "white", "color": "black"});
		});
		
		//Show the clicked month's message
		$("#current_month").html(messages[clicked_month]);
	});
});


