$(document).ready(() => {

var records,investigation, rejected, resolved;


records = $(".orders");
investigation = $(".investigation");
rejected = $(".rejected");
resolved = $(".resolved");




records.click(function(){
$(".resolved_interventions").hide();
$(".interventions").hide();
$(".rejected_interventions").hide();
$(".under_investigation").hide();
$(".interventions").fadeIn();



})


investigation.click(function(){
    $(".resolved_interventions").hide();
    $(".interventions").hide();
    $(".rejected_interventions").hide();
    $(".under_investigation").fadeIn();
})

rejected.click(function(){
    $(".resolved_interventions").hide();
    $(".interventions").hide();
    $(".under_investigation").hide();
    $(".rejected_interventions").fadeIn(); 
})

resolved.click(function(){
    $(".rejected_interventions").hide();
    $(".interventions").hide();
    $(".under_investigation").hide();
    $(".resolved_interventions").fadeIn();
})

});
