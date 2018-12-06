
$(document).ready(() => {
/* _______________________CONTROLS FOR HAMBURGER___________________ */
  let bars; let body; let goLeft; let imgGoLeft; let sideBar; let
    comeLeft;

  bars = $('.bars-container');
  body = $('body');
  sideBar = $('.sideBar');
  goLeft = 'goLeft';
  comeLeft = 'comeLeft';
  imgGoLeft = 'imgGoLeft';

  bars.click(() => {
    $('.site_title').toggleClass(comeLeft);
    bars.toggleClass(goLeft);
    sideBar.toggleClass(comeLeft);
  });
});


function toggle(b) {
  b.classList.toggle('change');
}
