$(document).ready(() => {
  $(() => {
    $.ajax({
      type: 'GET',
      url: '/v2/users',
      contentType: 'application/json',
      success(response) {
        const details = $('.interventions');
        details.html('  <p id="heading">ALL REPORTERS</p>');
        response.users.forEach((user) => {
          details.append(`\
                     <div class="report_singleInterventions">\
                 <div class="interventionDetails">\
                     <p>Name: ${ user.firstname } </p></div>\
                 <div class="interventionBody">\
                 <p id = "username">\
                 Username: ${ user.username }\
              </p>\
                     <p>\
                       Email: ${ user.email  }\
                    </p>\
                    <p>\
                    Phone Number: ${ user.phoneNumber  }\
                    </p>\
                     <p>\
                            <a href="reports.html?user=${user.username}" id = "singlereports">View reports</a>\
                        </p>\
                 </div>\
                 </div>`);
        });
      },
    });
  });
});
