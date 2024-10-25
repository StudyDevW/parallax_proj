
function fadeIn(el, speed) {
    var step = 1 / speed;
    var interval = setInterval(function() {
      if (+el.style.opacity >= 1)
        clearInterval(interval);
        
      el.style.opacity = + div.style.opacity + step;
    }, speed / 1000);
}

var div = document.getElementById("header_id_select");
var navigate_left = document.getElementById("navigation");

var opened_bar = 0;

let anchorSelector = 'a[href^="#"]';

let anchorList = 
    document.querySelectorAll(anchorSelector);
 

window.onload = function() {

    document.getElementById("navigation").style.opacity = 0;

    if (this.scrollY < 890)
        fadeIn(div, 300);

}

window.addEventListener('mousemove', e => {
    document.getElementById("pre_navigation").onmouseover = function() {  
        opened_bar = 1;
    }

    document.getElementById("navigation").onmouseover = function() {  
        opened_bar = 1;
    }

    if (opened_bar)
        document.getElementById("navigation").style.opacity = 1;
    else {
        document.getElementById("navigation").style.opacity = 0;
    }

    document.getElementById("pre_navigation").onmouseout = function() {  
        opened_bar = 0;
    }

    document.getElementById("navigation").onmouseout = function() {  
        opened_bar = 0;
    }
})

window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`


    if (this.scrollY < 890) {
        fadeIn(div, 300);
    }

    if (this.scrollY >= 890) {
      document.getElementById("header_id_select").style.opacity = 0;
      

    }
})

function testFunction() {
    alert("Письмо отправлено (пустышка)");
}

//плавная якорная ссылка
anchorList.forEach(link => {
    link.onclick = function (e) {
     
              
        e.preventDefault();
         
           
        let destination = 
        document.querySelector(this.hash);
    
        
        destination.scrollIntoView({
        behavior: 'smooth'
    });
    }
});