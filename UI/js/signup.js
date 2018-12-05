function json(res) {
  return res.json();
}
document.querySelector('#sign').addEventListener('click', (e) => {
  e.preventDefault();
  const firstname = document.querySelector('#firstname').value;
  const lastname = document.querySelector('#lastname').value;
  const othernames = document.querySelector('#othernames').value;
  const email = document.querySelector('#email').value;
  const phoneNumber = document.querySelector('#number').value;
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  // validation for required fields
  if (firstname.value === '' || lastname.value === '' || othernames.value === '' || email === '' || phoneNumber === '' || username === '' || password === '') {
    alert('Fill in required field');
  }
  else {
    fetch('/v2/users', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname, lastname, othernames, email, phoneNumber, username, password,
      }),
    }).then(json)
      .then((response) => {
        alert('Successfully Signed up');
        window.location.replace(`/profile.html?user=${username}`);
      });
  }
});
