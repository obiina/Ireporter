const url = new URL(window.location.href);
 user = url.searchParams.get('user');
document.querySelector('#red').href = `profile.html?user=${user}`;

function json(res){
    return res.json();
  }
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  
  if(dd<10) {
      dd = '0'+dd
    } 
  if(mm<10) {
      mm = '0'+mm
  } 
  
  today = mm + '/' + dd + '/' + yyyy;
document.querySelector('#signin').addEventListener('click', (e) =>{
    e.preventDefault();
        const createdOn = today;        
        const CreatedBy = user;        
        const type = document.querySelector('#category').value;
        const location = document.querySelector('#location').value;
        const status = 'Pending';        
        const Images = $('#image').files;
        const Videos = $('#video').files;
        const comment = document.querySelector('#comment').value;          


        fetch('/v2/red-flags', {
            method : "post",
            headers: {
           'Accept' :'application/json',
          'Content-Type' :'application/json'
            },
        body: JSON.stringify({createdOn,CreatedBy,type,location,status,Images,Videos,comment})
    }).then(json)
    .then(response  =>{
    alert('Incident Recorded Successfully ');
    window.location.replace(`/profile.html?user=${CreatedBy}`);
    })
})
 