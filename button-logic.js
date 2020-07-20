// JavaScript Document
// Time of day button filters
$(document).ready(function(){
  $(".btn-all").click(function(){
    $("div#badgeTimeline p.am").show();
    $("div#badgeTimeline p.pm").show();
  });
  $(".btn-am").click(function(){
    $("div#badgeTimeline p.am").show();
    $("div#badgeTimeline p.pm").hide();
  });
  $(".btn-pm").click(function(){
    $("div#badgeTimeline p.pm").show();
    $("div#badgeTimeline p.am").hide();
  });
});


// Sort Newest/Oldest button filters



// This will triggar the page to fill with my data as the default
document.getElementById("get-data").click();