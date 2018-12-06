$(document).ready(() => {
  const url = new URL(window.location.href);
  const user = url.searchParams.get('user');
  fetch(`api/v1/red-flags/user/${user}`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(json)
    .then((response) => {
      const heading = document.querySelector('.heading');
      const details = document.querySelector('.interventions');
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
    });
});
