const url = new URL(window.location.href);
user = url.searchParams.get('user');
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
function map() {
  const ikeja = { lat: 3.3792, lng: 6.5244 };
  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 4,
      center: ikeja,
    },
  );

  const marker = new google.maps.Marker({
    position: ikeja,
    map,
  });
}

today = `${mm}/${dd}/${yyyy}`;
document.querySelector('#signin').addEventListener('click', (e) => {
  e.preventDefault();
  const createdOn = today;
  const title = document.querySelector('#title').value;
  const CreatedBy = user;
  const type = document.querySelector('#category').value;
  const status = 'Draft';
  const comment = document.querySelector('#comment').value;

  fetch('/v2/red-flags', {
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
