
  $(document).ready(function() {
/*_______________________CONTROLS FOR HAMBURGER___________________*/
    var bars, body, goLeft, imgGoLeft, sideBar, comeLeft;
  
    bars = $(".bars-container");
    body = $("body");
    sideBar = $(".sideBar");
    goLeft = "goLeft";
    comeLeft = "comeLeft";
    imgGoLeft = "imgGoLeft";
  
    bars.click(function() {
      $(".site_title").toggleClass(comeLeft);
      bars.toggleClass(goLeft);
      sideBar.toggleClass(comeLeft);
    });
  });


  function toggle(b) {
    b.classList.toggle("change");
  }