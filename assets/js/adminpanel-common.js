const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");
const sidebar_profile = document.querySelector(".sidebar_profile");

// Function to toggle the lock state of the sidebar
const toggleLock = () => {
  sidebar.classList.toggle("locked");
  // If the sidebar is not locked
  if (!sidebar.classList.contains("locked")) {
    sidebar.classList.add("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
  } else {
    sidebar.classList.remove("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
  }
};

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
};

// Function to show the sidebar when the mouse enter
const showSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
};

// Function to show and hide the sidebar
const toggleSidebar = () => {
  sidebar.classList.toggle("close");
};

// If the window width is less than 800px, close the sidebar and remove hoverability and lock
if (window.innerWidth < 800) {
  sidebar.classList.add("close");
  sidebar.classList.remove("locked");
  sidebar.classList.remove("hoverable");
}

// Adding event listeners to buttons and sidebar for the corresponding actions
sidebarLockBtn.addEventListener("click", toggleLock);
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
// sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);


////////// DARK MODE
const BUTTON = document.querySelector(".toggle");
!localStorage.getItem("mode") && localStorage.setItem("mode","false")
BUTTON.addEventListener("click",function() {
    const IS_PRESSED = localStorage.getItem("mode") 
    document.body.setAttribute("data-dark-mode", IS_PRESSED=="false" ? false : true);
    BUTTON.setAttribute("aria-pressed", IS_PRESSED=="false" ? false : true);
    localStorage.getItem("mode") =="false" ?localStorage.setItem("mode","true") : localStorage.setItem( "mode","false")
})
window.addEventListener("load" ,function(){
    if(localStorage.getItem("mode")=="false"){
        document.body.setAttribute("data-dark-mode",true);
        BUTTON.setAttribute("aria-pressed" ,true);
    }
})
// ---------- CHARTS ----------


async function getAdmin(){
  let BASE_URL="http://localhost:8000/admin"
sidebar_profile.innerHTML=''
  let res= await axios(BASE_URL)
  let data=res.data
  data.forEach((element) => {
  sidebar_profile.innerHTML+=`
  <span class="nav_image">
            <img src="${element.img}" alt="logo_img" />
          </span>
          <div class="data_text">
            <span class="name">${element.username}</span>
            <span class="email">${element.email}</span>
          </div> 
  `})
}
getAdmin()