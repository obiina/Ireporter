$(document).ready(() => {
  const url = new URL(window.location.href);
  const user = url.searchParams.get('user');
  $(() => {
    $.ajax({
      type: 'GET',
      url: `/v2/red-flags/user/${user}`,
      contentType: 'application/json',
      success(response) {
        const heading = $('.heading');
        const details = $('.interventions');                
        heading.html(`<p id="heading">ALL INTERVENTIONS/RED-FLAGS BY ${user}</p>`);
        const reportAppend = response.userReports.map(userReport => (
          `
           <div class="index_singleInterventions">
           <div class="img">
               <img src="${userReport.Images}" id="index_img_fit" alt="" srcset="">
           </div>
           <div class="interventionDetails">
               <p>Created by: ${userReport.CreatedBy}</p>
               <p>Date: ${userReport.createdOn}</p>
               <p>Location: ${userReport.location}</p>
               <p>Type:${userReport.type}</p>
           </div>
           <div class="interventionBody">
               <p>
                   ${userReport.comment}
               </p>
               <p>
                   <a href="more.html?id=${userReport.id}">Read more</a>
               </p>
               </div>
   </div>
           `
        ));
        details.html(reportAppend);
      },
    });
  });
});
