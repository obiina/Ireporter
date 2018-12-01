function json(res){
  return res.json();
}


document.querySelector('#sign').addEventListener('click', (e) =>{
  e.preventDefault();
  const username = document.querySelector("#username").value;  
  if(username !== ""){    
    fetch('/v2/users/login', {
      method : "post",
      headers: {
        'Accept' :'application/json',
        'Content-Type' :'application/json'
      },
      body: JSON.stringify({username : username})
    }).then(json)
      .then(response  =>{
        if(response){
          console.log(response.user.username)
          localStorage.setItem("username", response.user.username);
          let username = localStorage.getItem("username");
          window.location.replace(`/profile.html?user=${username}`)
        }else{
          alert('Invalid Login')
        }
      })
  }
 
})