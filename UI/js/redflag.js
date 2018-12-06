const url = new URL(window.location.href);
const user = url.searchParams.get('user');
document.querySelector('#red').href = `profile.html?user=${user}`;

function json(res) {
  return res.json();
}
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
const yyyy = today.getFullYear();

if (dd < 10) {
  dd = `0${dd}`;
}
if (mm < 10) {
  mm = `0${mm}`;
}


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  alert('Your browser does not support geo location');
}


function showPosition(position) {
  const currentlatitude = position.coords.latitude;
  const currentlongitude = position.coords.longitude;


  today = `${mm}/${dd}/${yyyy}`;

  document.querySelector('#signin').addEventListener('click', (e) => {
    e.preventDefault();
    const createdOn = today;
    const title = document.querySelector('#title').value;
    const CreatedBy = user;
    const location = [currentlatitude, currentlongitude];
    const type = document.querySelector('#category').value;
    const status = 'Draft';
    const comment = document.querySelector('#comment').value;


    fetch('api/v1/red-flags', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        createdOn, CreatedBy, type, location, status, comment, title,
      }),
    }).then(json)
      .then((response) => {
        alert('Incident Recorded Successfully');
        window.location.replace(`/profile.html?user=${CreatedBy}`);
      });
  });
}
