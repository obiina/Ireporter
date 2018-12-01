function json(res){
    return res.json();
  }
  document.querySelector('#sign').addEventListener('click', (e) =>{
    e.preventDefault();
    const firstname = document.querySelector("#firstname").value;
    const lastname =document.querySelector("#lastname").value;
    const othernames = document.querySelector("#othernames").value;
    const email = document.querySelector("#email").value;
    const phoneNumber = document.querySelector("#number").value;
    const username = document.querySelector("#username").value;

    fetch('/v2/users', {
        method : "post",
        headers: {
          'Accept' :'application/json',
          'Content-Type' :'application/json'
        },
        body: JSON.stringify({firstname,lastname,othernames,email,phoneNumber,username})
    }).then(json)
    .then(response  =>{
        alert('Successfully Signed up')
        window.location.replace(`/profile.html?user=${username}`);
        })
    })