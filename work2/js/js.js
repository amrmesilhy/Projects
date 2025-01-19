var typed= new Typed(".text ", {
    Strings: [" Copywriter" , "Marketing Specialist" , "Pages Manager"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
window.onscroll = function(){
    scrollFunction();
};

function scrollFunction() {
  var mybutton = document.getElementById("ttpbtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function ScrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}