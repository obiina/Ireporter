$(document).ready(() => {
  const url = new URL(window.location.href);
  const id = url.searchParams.get('id');
  $(() => {
    $.ajax({
      type: 'GET',
      url: `api/v1/red-flags/report?id=${id}`,
      contentType: 'application/json',
      success(response) {
        console.log(response.Reportsids);
        const report = response.Reportsids;
        const details = $('.append');
        const info = $('.more_info');
        info.html('');

        const renderReports = ({
          Images, title, createdOn, CreatedBy, type, location, status, comment,
        }) => `<div class="more_info">
        <p id="more">              
        </p>
        <p id="details">       
        <div id = "details">
        <p id = "title_more">${title}</p>
        <p>Created On: ${createdOn}</p>        
        <p>Type: ${type}</p>
        <p>location: ${location}</p>
        <p>status: ${status}</p>
        <p>${comment}</p>
          </div>
          </div>          
            `;


        details.html(renderReports(report));
      },
    });
  });
});
