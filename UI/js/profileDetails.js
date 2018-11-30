const url = new URL(window.location.href);
const user = url.searchParams.get('user');
document.querySelector('.report').innerHTML = user;
document.querySelector('#red').href = `redFlag.html?user=${user}`;
$(document).ready(() => {
    const url = new URL(window.location.href);
    const user = url.searchParams.get('user');
    $(() => {
      $.ajax({
        type: 'GET',
        url: `/v2/red-flags/user/${user}`,
        contentType: 'application/json',
        success(response) {          
          const details = $('.interventions');                
          const heading = $('.heading');
          heading.html(`<p id="heading">ALL INTERVENTIONS/RED-FLAGS BY ${user}</p>`);
          const reportAppend = response.userReports.map(userReport => (
            `
             <div class="singleInterventions">
             <div class="img">
                 <img src="${userReport.Images}" id="img_fit" alt="" srcset="">
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
                     <a href="profilemore.html?id=${userReport.id}">Read more</a>
                 </p>
                 </div>
     </div>
             `
          ));
          details.html(reportAppend);
        },
      });
    });



    document.querySelector('.investigation').addEventListener('click',() =>{
        status = 'Under Investigation'        
        $.ajax({
          type: 'GET',
          url: `/v2/red-flags/report/${user}/${status}/`,
          contentType: 'application/json',
          success(response) {          
            const details = $('.under_investigation');                
            const heading = $('.heading');
            heading.html(`<p id="heading">ALL INTERVENTIONS/RED-FLAGS BY ${user}</p>`);
            const reportstatusAppend = response.mainStatus.map(reportStatus => (
              `
               <div class="singleInterventions">
               <div class="img">
                   <img src="${reportStatus.Images}" id="img_fit" alt="" srcset="">
               </div>
               <div class="interventionDetails">
                   <p>Created by: ${reportStatus.CreatedBy}</p>
                   <p>Date: ${reportStatus.createdOn}</p>
                   <p>Location: ${reportStatus.location}</p>
                   <p>Type:${reportStatus.type}</p>
               </div>
               <div class="interventionBody">
                   <p>
                       ${reportStatus.comment}
                   </p>
                   <p>
                       <a href="profilemore.html?id=${reportStatus.id}">Read more</a>
                   </p>
                   </div>
       </div>
               `
            ));
            details.html(reportstatusAppend);
          },
        });
      });

      document.querySelector('.rejected').addEventListener('click',() =>{
        status = 'Rejected'        
        $.ajax({
          type: 'GET',
          url: `/v2/red-flags/report/${user}/${status}/`,
          contentType: 'application/json',
          success(response) {          
            const details = $('.rejected_interventions');                
            const heading = $('.header');
            heading.html(`<p id="heading">ALL REJECTED INTERVENTIONS/RED-FLAGS BY ${user}</p>`);
            `<p class="header">ALL INTERVENTIONS/RED-FLAGS BY ${user}</p>`
            const reportstatusAppend = response.mainStatus.map(reportStatus => (
              `
               <div class="singleInterventions">
               <div class="img">
                   <img src="${reportStatus.Images}" id="img_fit" alt="" srcset="">
               </div>
               <div class="interventionDetails">
                   <p>Created by: ${reportStatus.CreatedBy}</p>
                   <p>Date: ${reportStatus.createdOn}</p>
                   <p>Location: ${reportStatus.location}</p>
                   <p>Type:${reportStatus.type}</p>
               </div>
               <div class="interventionBody">
                   <p>
                       ${reportStatus.comment}
                   </p>
                   <p>
                       <a href="profilemore.html?id=${reportStatus.id}">Read more</a>
                   </p>
                   </div>
       </div>
               `
            ));
            details.html(reportstatusAppend);
          },
        });
      });

      document.querySelector('.resolved').addEventListener('click',() =>{
        status = 'Resolved'        
        $.ajax({
          type: 'GET',
          url: `/v2/red-flags/report/${user}/${status}/`,
          contentType: 'application/json',
          success(response) {          
            const details = $('.resolved_interventions');                
            const heading = $('.header');
            heading.html(`<p id="heading">ALL RESOLVED INTERVENTIONS/RED-FLAGS BY ${user}</p>`);
            `<p class="header">ALL INTERVENTIONS/RED-FLAGS BY ${user}</p>`
            const reportstatusAppend = response.mainStatus.map(reportStatus => (
              `
               <div class="singleInterventions">
               <div class="img">
                   <img src="${reportStatus.Images}" id="img_fit" alt="" srcset="">
               </div>
               <div class="interventionDetails">
                   <p>Created by: ${reportStatus.CreatedBy}</p>
                   <p>Date: ${reportStatus.createdOn}</p>
                   <p>Location: ${reportStatus.location}</p>
                   <p>Type:${reportStatus.type}</p>
               </div>
               <div class="interventionBody">
                   <p>
                       ${reportStatus.comment}
                   </p>
                   <p>
                       <a href="profilemore.html?id=${reportStatus.id}">Read more</a>
                   </p>
                   </div>
       </div>
               `
            ));
            details.html(reportstatusAppend);
          },
        });
      });
  });
  

