$(document).ready(function() {

var records,investigation, rejected;


records = $(".orders");
investigation = $(".investigation");
rejected = $(".rejected");




records.click(function(){
$(".interventions").hide();
$(".rejected_interventions").hide();
$(".under_investigation").hide();
$(".interventions").fadeIn();



})


investigation.click(function(){
    $(".interventions").hide();
    $(".rejected_interventions").hide();
    $(".under_investigation").fadeIn();
})

rejected.click(function(){
    $(".interventions").hide();
    $(".under_investigation").hide();
    $(".rejected_interventions").fadeIn(); 
})

})