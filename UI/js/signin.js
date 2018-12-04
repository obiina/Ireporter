function json(res){
  return res.json();
}


document.querySelector('#sign').addEventListener('click', (e) =>{
  e.preventDefault();
  const username = document.querySelector("#username").value; 
  const password = document.querySelector("#password").value; 
  if(username !== ""){    
    fetch('/v2/users/login', {
      method : "post",
      headers: {
        'Accept' :'application/json',
        'Content-Type' :'application/json'
      },
      body: JSON.stringify({username : username, password:password})
    }).then(json)
      .then(response  =>{
        if(response){
          console.log(response.getmain.username)
          localStorage.setItem("username", response.getmain.username);
          let username = localStorage.getItem("username");
          window.location.replace(`/profile.html?user=${username}`)
        }else{
          alert('Invalid Login');
        }
      })
  }else{
    alert('Fill in required fields');
  }
 
})