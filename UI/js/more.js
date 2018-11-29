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

        const renderReports = ({
 Images, createdOn, CreatedBy, type, location, status, comment
 }) => `<div class="more_info">
        <p id="more">              
        </p>
        <img src="${Images}" id="more_img" alt="" srcset="">
        <p id="details">
        <video width="400" controls>
        <source src="mov_bbb.mp4" type="video/mp4">          
        </video>
        <p>Create On: ${createdOn}</p>
        <p>Written By: ${CreatedBy}</p>
        <p>Type: ${type}</p>
        <p>location: ${location}</p>
        <p>status: ${status}</p>
        <p>Comment: ${comment}</p>
          </p>
          </div>          
            `;


        details.html(renderReports(report));
      },
    });
  });
});
