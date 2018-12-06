function json(res) {
  return res.json();
}


document.querySelector('#sign').addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  if (username !== '') {
    fetch('api/v1/users/login', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then(json)
      .then((response) => {
        if (response) {          
          localStorage.setItem('localusername', response.getmain.username);
          const localusername = localStorage.getItem('username');
          window.location.replace(`/profile.html?user=${username}`);
        } else {
          alert('Invalid Login');
        }
      });
  } else {
    alert('Fill in required fields');
  }
});
