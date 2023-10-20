let signup=document.querySelector("#signupTitle")
let login=document.querySelector("#loginTitle")
let logout=document.querySelector("#logout")
let userTitle=document.querySelector("#userTitle")
userTitle.style.display="none"
async function getUser(){
  let res=await axios("http://localhost:8000/customers")
  let data=res.data
  let usersData=JSON.parse(localStorage.getItem("users"))
  // console.log(data);
  // console.log(data.email);
  // console.log(usersData);
  console.log(data.map((item)=>item.email));
  let userEmail=usersData.find(item=>item.email)
  if(userEmail!=[]){
    data.map(item=>item.email===userEmail)
    userTitle.style.display="block"
   signup.style.display="none"
   login.style.display="none"
   logout.style.display="block"
  }
}
getUser()
logout.style.display="none"
logout.addEventListener("click" ,function(){
  localStorage.removeItem("users")
})
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