$(document).ready(() => {
  const url = new URL(window.location.href);
  const id = url.searchParams.get('id');
  $(() => {
    $.ajax({
      type: 'GET',
      url: `/v2/red-flags/report?id=${id}`,
      contentType: 'application/json',
      success(response) {
        console.log(response.Reportsids);
        const report = response.Reportsids;
        const details = $('.append');
        const info = $('.more_info');
        info.html('');

        const renderReports = ({
          Images, createdOn, CreatedBy, type, location, status, comment}) => 
        `<div class="more_info">
        <p id="more">              
        </p>
        <img src="${Images}" id="more_img" alt="" srcset="">
        <p id="details">
        <video width="800" controls>
        <source src="mov_bbb.mp4" type="video/mp4">          
        </video>
        <div id = "details">
        <p>Created On: ${createdOn}</p>
        <p>Written By: ${CreatedBy}</p>
        <p>Type: ${type}</p>
        <p>location: ${location}</p>
        <p>status: ${status}</p>
        <p>Comment:<br><br> ${comment}</p>
          </div>
          </div>          
            `;


        details.html(renderReports(report));
      },
    });
  });
});
