$(document).ready(() => {
  const records = $('.orders');
  const investigation = $('.investigation');
  const rejected = $('.rejected');
  const resolved = $('.resolved');


  records.click(() => {
    $('.resolved_interventions').hide();
    $('.interventions').hide();
    $('.rejected_interventions').hide();
    $('.under_investigation').hide();
    $('.interventions').fadeIn();
  });


  investigation.click(() => {
    $('.resolved_interventions').hide();
    $('.interventions').hide();
    $('.rejected_interventions').hide();
    $('.under_investigation').fadeIn();
  });

  rejected.click(() => {
    $('.resolved_interventions').hide();
    $('.interventions').hide();
    $('.under_investigation').hide();
    $('.rejected_interventions').fadeIn();
  });

  resolved.click(() => {
    $('.rejected_interventions').hide();
    $('.interventions').hide();
    $('.under_investigation').hide();
    $('.resolved_interventions').fadeIn();
  });
});
