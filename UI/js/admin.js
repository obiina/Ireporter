function json(res) {
  return res.json();
}
document.querySelector('#signin').addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.querySelector('#username').value;
  if (username !== '') {
    fetch('api/v1/users/admin', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    }).then(json)
      .then((response) => {
        if (response) {
          console.log(response.admincheck.username);
          localStorage.setItem('username  ', response.admincheck.username);
          const mainusername = localStorage.getItem('username');
          window.location.replace(`/admin.html?user=${mainusername}`);
        }else {
          alert('Invalid Login');
        }
      });
  }

});
