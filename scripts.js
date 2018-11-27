$(document).ready(() => {
    $(function(){
        $.ajax({
            url:'/users',
            contentType: 'application/json',
            success:function(response) {
                const details = $('.report_singleInterventions');
                details.html('');

                response.users.forEach(function(user){
                     details.append('\
                     <div class="img">\
                     <img src="pics/ronaldo.jpg" id="report_img_fit" alt="" srcset="">\
                 </div>\
                 <div class="interventionDetails">\
                     <p>Name: </p>' + user.firstname + '</div>\
                 <div class="interventionBody">\
                     <p>\
                        '+ user.email + '\
                     </p>\
                     <p>\
                            <a href="reports.html">View reports</a>\
                        </p>\
                 </div>\                    
                     ');   
                });

                        
            }
          });
  })
});
