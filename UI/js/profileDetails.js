const url = new URL(window.location.href);
const user = url.searchParams.get('user');
document.querySelector('.report').innerHTML = user;



