// let menuburger= document.querySelector(".fa-bars")
// let ul=document.querySelector("ul")
// menuburger.addEventListener("click" , function(){
//     ul.classList.toggle("show")
//     ul.classList.remove("allUl")
//     menuburger.classList.contains("fa-bars")
//     ?(this.classList="fa-solid fa-xmark")
//     :(this.classList="fa-solid fa-bars" ,ul.classList.add("allUl"))
// })
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

const header_bottom = document.querySelector('.header-bottom')
const header_top= document.querySelector('.header-top')
function scrollFunction() {
    if (window.scrollY<150 ) {
    console.log(window.scrollY);
        header_bottom.style.background = 'rgba(0,0,0,0.3)';
        header_top.style.background = 'rgba(0,0,0,0.3)';
        header_top.style.display = 'block';
    
    } else {
      header_top.style.display = 'none';
      header_bottom.style.background = 'black';
    
    }
}
window.onscroll = function () { scrollFunction() };

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", scrolFunction ) 

function scrolFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }