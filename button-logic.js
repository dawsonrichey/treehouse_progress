// JavaScript Document
// Time of day button filters
$(document).ready(function(){
  $(".btn-all").click(function(){
    $("p.am").show();
    $("p.pm").show();
  });
  $(".btn-am").click(function(){
    $("p.am").show();
    $("p.pm").hide();
  });
  $(".btn-pm").click(function(){
    $("p.pm").show();
    $("p.am").hide();
  });
});


// Sort Newest/Oldest button filters



// This will triggar the page to fill with my data as the default
document.getElementById("get-data").click();