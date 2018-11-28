$(document).ready(() => {
    $(function(){
        $.ajax({
            type: 'GET',
            url: '/v1/users',
            contentType: 'application/json',
            success:function(response) {
                const details = $('.interventions');
                details.html('  <p id="heading">ALL REPORTERS</p>');
                response.users.forEach(function(user){
                     details.append('\
                     <div class="report_singleInterventions">\
                 <div class="interventionDetails">\
                     <p>Name: ' + user.firstname + ' </p></div>\
                 <div class="interventionBody">\
                     <p>\
                        '+ user.email + '\
                     </p>\
                     <p>\
                            <a href="reports.html">View reports</a>\
                        </p>\
                 </div>\
                 </div>');   
                });                        
            }
          });
  })
});
