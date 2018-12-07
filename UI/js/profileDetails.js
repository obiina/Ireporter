const url = new URL(window.location.href);
const user = url.searchParams.get('user');
document.querySelector('.report').innerHTML = user;
document.querySelector('#red').href = `redFlag.html?user=${user}`;
$(document).ready(() => {
  const url = new URL(window.location.href);
  const user = url.searchParams.get('user');
  const status = 'Draft'        
  $(() => {
    $.ajax({
      type: 'GET',
      url: `api/v1/red-flags/report/${user}/${status}/`,
      contentType: 'application/json',
      success(response) {          
        const details = $('.interventions');                
        const heading = $('#headingrecord');          
        heading.html(`<p id="headingrecord">ALL INTERVENTIONS/RED-FLAGS</p>`);
        const reportAppend = response.mainStatus.map(userReport => (
          `
             <div class="singleInterventions">             
             <p id="title">${userReport.title}</p>
             <p id="delete"><a href="#" id="delete_son" data-delete = "${userReport.id}">delete</a><a href="#" id="edit">edit</a><a href="profilemore.html?id=${userReport.id}" id="read">read more</a></p>                  
                 </div>     
             `
        ));
        details.html(reportAppend);
      },
    });
  });

  $('body').on('click', '#delete_son', function(){
    const id = $(this).attr('data-delete')
    $.ajax({
      type: 'DELETE',
      url: `/v2/red-flags/report?id=${id}`,
      contentType: 'application/json',
      success(response) {   
        alert('Succesfully Deleted Red Flag');
        location.reload();
      }
    })       
  })

  document.querySelector('.investigation').addEventListener('click',() =>{
    const status = 'Under Investigation'        
    $.ajax({
      type: 'GET',
      url: `api/v1/red-flags/report/${user}/${status}/`,
      contentType: 'application/json',
      success(response) {          
        const details = $('.under_investigation');                
        const heading = $('#headingrecord');          
        heading.html(`<p id="headingrecord">ALL INTERVENTIONS/RED-FLAGS UNDER INVESTIGATION</p>`);
        const reportstatusAppend = response.mainStatus.map(reportStatus => (
          `
              <div class="singleInterventions">             
              <p id="title">${reportStatus.title}</p>
              <p id="delete"><a href="profilemore.html?id=${reportStatus.id}" id="read">read more</a></p>
                  </div>     
               `
        ));
        details.html(reportstatusAppend);
      },
    });
  });

  document.querySelector('.rejected').addEventListener('click',() =>{
    const status = 'Rejected'        
    $.ajax({
      type: 'GET',
      url: `api/v1/red-flags/report/${user}/${status}/`,
      contentType: 'application/json',
      success(response) {          
        const details = $('.rejected_interventions');                
        const heading = $('#headingrecord');          
        heading.html(`<p id="headingrecord">ALL REJECTED INTERVENTIONS/RED-FLAGS</p>`);
        `<p class="header">ALL INTERVENTIONS/RED-FLAGS BY ${user}</p>`;
        const reportstatusAppend = response.mainStatus.map(reportStatus => (
          `
              <div class="singleInterventions">             
              <p id="title">${reportStatus.title}</p>
              <p id="delete"><a href="profilemore.html?id=${reportStatus.id}" id="read">read more</a></p>
                  </div>     
               `
        ));
        details.html(reportstatusAppend);
      },
    });
  });

  document.querySelector('.resolved').addEventListener('click',() =>{
    const status = 'Resolved'        
    $.ajax({
      type: 'GET',
      url: `api/v1/red-flags/report/${user}/${status}/`,
      contentType: 'application/json',
      success(response) {          
        const details = $('.resolved_interventions');                            
        const heading = $('#headingrecord');          
        heading.html(`<p id="headingrecord">ALL RESOLVED INTERVENTIONS/RED-FLAGS</p>`);
        const reportstatusAppend = response.mainStatus.map(reportStatus => (
          `
              <div class="singleInterventions">             
              <p id="title">${reportStatus.title}</p>
              <p id="delete"><a href="profilemore.html?id=${reportStatus.id}" id="read">read more</a></p>
                  </div>
               `
        ));
        details.html(reportstatusAppend);
      },
    });
  });
});
  

