let about=document.querySelector(".about")
let id = new URLSearchParams(window.location.search).get("id")
let BASE_URL="http://localhost:8000/users"


async function getDetailAbout(){
    let res=await axios(`${BASE_URL}/${id}`)
    let data=res.data
    console.log(data);
    about.innerHTML=`
       <div class=" col col-12 col-lg-6 detail-wrapper-about-left">
       <img src="./assets/img/about-img/${data.image}" alt="">
       </div>
       <div class="col col-12 col-lg-6   detail-wrapper-about-right">
       <h1>${data.name}</h1>
       <p>${data.position}</p>
       <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/leila.nezerli.2002%40gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
       <a href="" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
       <a href="" target="_blank"><i class="fa-brands fa-google-plus-g"></i></a>
       <a href="" target="_blank"><i class="fa-brands fa-skype"></i></a>
       <a href="" target="_blank"><i class="fa-brands fa-twitter"></i></a>
       </div>
       `
    };
    getDetailAbout() 
    let allBiography=document.querySelector(".allBiography")
    async function getDetailAllBiography(){
    let res=await axios(`${BASE_URL}/${id}`)
    let data=res.data
    console.log(data);
    allBiography.innerHTML=`
    <div class="biography col col-12 col-lg-6">
    <h3>BIOGRAPHY</h3>
    <p>${data.biography}</p>
</div>
<div class="skill col col-12 col-lg-6">
    <h3>SKILLS</h3>
    <div class="row">
        <div class="col-12">
            <div class="content">
                <p>PHOTOGRAPHY<i class="fa-regular fa-image"></i></p>
                <p>${data.skills.photography}%</p>
            </div>
            <div class="line photography">
                
            </div>
        </div>
        <div class="col-12">
            <div class="content">
                <p>ANIMATION<i class="fa-sharp fa-solid fa-gear"></i></p>
                <p>${data.skills.animation}%</p>
            </div>
            <div class="line animation">
            
            </div>
        </div>
        <div class="col-12">  
            <div class="content">
                <p>CODING SKILL<i class="fa-solid fa-code"></i></p>
                <p>${data.skills.codingSkill}%</p>
            </div>
            <div class="line codingSkill">
            
            </div>
        </div>
        <div class="col-12">
            <div class="content">
                <p>WORDPRESS <i class="fa-brands fa-wordpress"></i></p>
                <p>${data.skills.wordpress}%</p>
            </div>
            <div class="line wordpress">
            
            </div>
    </div>
</div>
</div>
<div class="chronology col col-12 col-lg-6">
     <h3>CHRONOLOGY</h3>
    <div class="firstWorkplace">
    <h5>${data.chronology.firstWorkplace.whenstarted}</h5>
    <p>${data.chronology.firstWorkplace.whereworked}</p>
    </div>
    <div class="secondWorkplace">
    <h5>${data.chronology.secondWorkplace.whenstarted}</h5>
    <p>${data.chronology.secondWorkplace.whereworked}</p>
    </div>
    <div class="thirdWorkplace">
    <h5>${data.chronology.thirdWorkplace.whenstarted}</h5>
    <p>${data.chronology.thirdWorkplace.whereworked}</p>
    </div>
    <div class="fourthWorkplace">
    <h5>${data.chronology.fourthWorkplace.whenstarted}</h5>
    <p>${data.chronology.fourthWorkplace.whereworked}</p>
    </div>
</div>
      `
    };
    getDetailAllBiography() 
    
    let contact=document.querySelector(".contact")
    async function getDetailContact(){
    let res=await axios(`${BASE_URL}/${id}`)
    let data=res.data
    console.log(data);
    contact.innerHTML=`
    <h1>CONTACT INFO</h1>
    <p>Phone:${data.phone}</p>
    <p>Email:${data.email}</p>
    `
    }
    getDetailContact()