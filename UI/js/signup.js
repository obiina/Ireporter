function json(res) {
  return res.json();
}
document.querySelector('#sign').addEventListener('click', (e) => {
  e.preventDefault();
  const fakefirstname = document.querySelector('#firstname').value;
  const firstname = fakefirstname.toLowerCase();
  const fakelastname = document.querySelector('#lastname').value;
  const lastname = fakelastname.toLowerCase();
  const fakeothernames = document.querySelector('#othernames').value;
  const othernames = fakeothernames.toLowerCase();
  const fakeemail = document.querySelector('#email').value;
  const email = fakeemail.toLowerCase();
  const phoneNumber = document.querySelector('#number').value;
  const fakeusername = document.querySelector('#username').value;
  const username = fakeusername.toLowerCase();
  const password = document.querySelector('#password').value;
  // validation for required fields

  function validateEmail(emailtest) {
    const test = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return test.test(emailtest);
  }


  if (firstname.value === '' || lastname.value === '' || othernames.value === '' || email === '' || phoneNumber === '' || username === '' || password === '') {
    alert('Fill in required field');
  } else if (!validateEmail(email)) {
    alert('Invalide mail');
  } else if (username.length > 10) {
    alert('Username is to long');
  } else if (username.length <= 2) {
    alert('Username is to short');
  } else if (isNaN(phoneNumber)) {
    alert('Only input numbers for phone number');
  } else {
    fetch('api/v1/users', {
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
