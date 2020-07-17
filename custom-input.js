//Auther Dawson Richey
//Treehouse Profile Project

// thesilkworm
// dylanmartin3
// daikiitoh
// azamatmurzabayev
//var user = $("#test").val(); 


var user = $( "#demo" ).val( );
//var urlJSON = "https://teamtreehouse.com/" + user + ".json";
var langColors = {
			"21st Century Skills": "#000",
			"Android": "#000",
			"Computer Science": "#000",
			"Data Analysis": "#000",
			"Digital Literacy": "#000",
			"Go": "#000",
			"Learning Resources": "#000",
			"Machine Learning": "#000",
			"Ruby": "#000",
			"Security": "#000",
			"JavaScript": "#086788",
			"CSS": "#06aed5",
			"HTML": "#f0c808",
			"Development Tools": "#0AD375",
			"PHP": "#dd1c1a",
			"WordPress": "#F97D1D",
			"Databases": "#DD792C",
			"C#": "#0366B2",
			"Game Development": "#499DDD",
			"Java": "#2c9676",
			"Python": "#D30c6c ",
			"Business": "#f9845b",
			"iOS": "#53bbb4",
			"Design": "#59AD0F",
			"APIs": "#000",
			"Quality Assurance": "#a7a7a7"
		};

var colorLine = {};

//On a successful request, show the updated time
$(document).ajaxSuccess(function( event, xhr, settings ) {
    var user = $( "#demo" ).val( );
    var urlJSON = "https://teamtreehouse.com/" + user + ".json";
  if ( settings.url == urlJSON ) {
		var dt = new Date();
		var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    $('#status').text('Updated at ' + time);
  }
});

//On an unsuccessful request, show an error
$(document).ajaxError(function( event, xhr, settings ) {
    var user = $( "#demo" ).val( );
    var urlJSON = "https://teamtreehouse.com/" + user + ".json";
  if ( settings.url == urlJSON ) {
    $('#status').text('Data not found!');
  }
});

$('#get-data').click(function() {
    var user = $( "#demo" ).val( );
	var urlJSON = "https://teamtreehouse.com/" + user + ".json";
	//Make the request
	function refreshMetrics(){
    $('#status').text('Updating...');
    $.get(urlJSON, function(data, status){
			
			//To count the number of 'col-sm-3' elements in a row
			var rowCounter = 0;
			
			//Create the Profile area
			$('#gravatar').html("<img src='" + data['gravatar_url'] + "' />");
			$('#userName').html(data['name']+" <small>("+data['profile_name']+")</small>");
			
			//Create the Points area
			var totalPoints = 0;
			var pointsHTML = "<div class='row'>";
						//For each skill...
			$.each(data.points, function (skill, points) {
				// console.log(points);
        if(points > 0) {
					//Leave out 'Total', put it in the profile area
					if(skill == "total") {
						totalPoints += points;
						$('#totalPoints').html('Total Points: <span class="points">' + points + '</span>');
					} else {
						//Add a color to the color line array
						colorLine[skill] = Math.round(100*(points/totalPoints));
						//Create a points box
						pointsHTML += "<div class='col-3 pointBox'>";
//						pointsHTML += "<div class='colorBar' style='background-color: " + langColors[skill] + "'></div>"
						pointsHTML += skill + "<br /><span class='points' style='background-color: " + langColors[skill] + "'>" + points + "</span>";
						pointsHTML += "</div>";
						//Check how many 'col-sm-3' elements in a row (Bootstrap row)
						rowCounter++;
						if (rowCounter > 3) {
							rowCounter = 0;
							pointsHTML += "</div>";
							pointsHTML += "<div class='row'>";
						}
					}
				}
    	});
			pointsHTML += "</div>";
			$('#pointsContainer').html(pointsHTML);
			

	
			
			//Skills buttons
					var pointHTML = "<div class='row'>";
			$.each(data.points, function (skill, points) {
				// console.log(points);
        if(points > 0) {
					//Leave out 'Total', put it in the profile area
					if(skill == "total") {
						totalPoints += points;
						$('#totalPoints').html('Total Points: <span class="points">' + points + '</span>');
					} else {
						//Add a color to the color line array
						colorLine[skill] = Math.round(210*(points/totalPoints));
						//Create a points box
						pointHTML += "<div id='" + skill + "' class='col-3 pointBox " + skill + "'>";
						pointHTML += "<div class='colorBar' style='background-color: " + langColors[skill] + "'></div>"
						pointHTML += skill + "<br /><span class='points' style='background-color: " + langColors[skill] + "'>" + points + "</span>";
						pointHTML += "</div>";
						//Check how many 'col-sm-3' elements in a row (Bootstrap row)
						rowCounter++;
						if (rowCounter > 3) {
							rowCounter = 0;
							pointHTML += "</div>";
							pointHTML += "<div class='row'>";
						}
					}
				}
    	});
			pointHTML += "</div>";
			$('#pointContainer').html(pointHTML);
			
			//Create the Color Line
			var colorLineHTML = "";
			$.each(colorLine, function(skill, percent) {
				colorLineHTML += "<div class='colorPiece' style='background:" + langColors[skill] + ";width:" + percent + "%;'></div>";
			});
			$("#colorLine").html(colorLineHTML);
		//	console.log(data.badge);
			//Create the Badges area
			var badgesHTML = "";
			var e = 0;
			var am = 0;
					var pm = 0;
			$.each(data.badges, function (i, badge) {
				
				if(1 > 0){
					// 	var date = new Date(badge.earned_date);
					// console.log(date);
					var dateObj = new Date(badge.earned_date); 
					// var newDate = dateObj .getFullYear() + "-" + dateObj.getMonth() + "-" + dateObj.getDate() + "T" + dateObj.getHours() + ":" + dateObj.getMinutes() + ":" + dateObj.getSeconds() + "Z"; 
					var newDate = dateObj.getHours() ; 


					console.log(newDate);

					//	console.log(jQuery.type(newDate));
				}
                var morning_count = 0;
				if(newDate < 12){
					am += 1;
                    morning_count += 1;
					badgesHTML += "<p class='am'><img src='" + badge.icon_url + "' /> " 
//					+ badge.name 
                    + "<span class='small am'>" 
//					+ badge.earned_date.substring(0,10) + "<br/>" 
//					+ badge.earned_date.substring(11,19) 
                    + "</span></p>";
				}
                var evening_count = 0;
				if(newDate >= 12){
					pm += 1;
                    evening_count += 1;
//					badgesHTML += "<p class='pm'><img src='" + badge.icon_url + "' /> " 
                    badgesHTML += "<p class='pm'><img src='" + badge.icon_url + "' /> " 
//					+ badge.name 
                    + "<span class='small pm'>" 
//					+ badge.earned_date.substring(0,10) + "<br/>" 
//					+ badge.earned_date.substring(11,19) 
                    + "</span></p>";
				}

				e += 1;
				// badgesHTML += "<p><img src='" + badge.icon_url + "' /> " 
				// 	+ badge.name + "<br /><span class='small'>" 
				// 	+ badge.earned_date.substring(0,10) + "<br/>" 
				// 	+ badge.earned_date.substring(11,19) + "</span></p>";
    	});
			$("#badgeTimeline").html(badgesHTML);
			console.log(e);
			console.log(am + " am");
			console.log(pm + " pm");
        document.getElementById("tot_num").innerText =  e;
        document.getElementById("am_num").innerText =  am;
        document.getElementById("pm_num").innerText=  pm;
		});
	}
	
	//Do all the things
	refreshMetrics();
	
	//Do all the things every so often
	setInterval(function(){refreshMetrics();}, 300000);
	
	//Do all the things when 'Update' is clicked
	$('#updateMetrics').on('click', function() {
		refreshMetrics();
	});
	
});


