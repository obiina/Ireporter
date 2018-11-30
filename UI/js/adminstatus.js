$(document).ready(() => {

    $(() => {
      $.ajax({
        type: 'GET',
        url: `/v2/red-flags/`,
        contentType: 'application/json',
        success(response) {
          const heading = $('.heading');
          const details = $('.interventions');                
          heading.html(`<p id="heading">ALL INTERVENTIONS/RED-FLAGS</p>`);
          const reportAppend = response.redFlags.map(redFlag => (
            `
             <div class="index_singleInterventions">
             <p id = "hide" style = "display:none;">${redFlag.id}</p>             
             <div class="img">
                 <img src="${redFlag.Images}" id="index_img_fit" alt="" srcset="">
             </div>
             <div class="interventionDetails">
                 <p>Created by: ${redFlag.CreatedBy}</p>
                 <p>Date: ${redFlag.createdOn}</p>
                 <p>Location: ${redFlag.location}</p>
                 <p>Type:${redFlag.type}</p>
             </div>
             <div class="interventionBody">
                 <p>
                     ${redFlag.comment}
                 </p>
                 <p>                     
                 </p>
                 <select name="" id="admin_select">
                 <option value="Resolved">Resolved</option>
                 <option value="Under investigation">Under Investigation</option>
                 <option value="Rejected">Rejected</option>
             </select>
             <button type="submit" value ="${redFlag.id}" id="change" class = "change">Change State</button>
                 </div>
     </div>
             `
          ));
          details.html(reportAppend);
        },
      });
    });
    function json(res){
        return res.json();
      }
    $('body').on('click', '#change', (e) =>{                
        const id = $(event.target).val();
       let f = document.getElementById('admin_select');
        let status = f.options[f.selectedIndex].value;
            alert(status)
            fetch(`/v2/red-flags/report?id=${id}`, {
              method : "PUT",
              headers: {
                'Accept' :'application/json',
                'Content-Type' :'application/json'
              },
            
              body: JSON.stringify({status,id})            
            })
            .then(json)
            .then(response  =>{
                if(response){                  
                  alert('Status has been Updated')               
                }
            
              })        
          })
});
