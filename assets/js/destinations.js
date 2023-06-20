let about=document.querySelector(".destinations-about")
let id = new URLSearchParams(window.location.search).get("id")
let BASE_URL="http://localhost:8000/tours"


// console.log(data);
async function getDetailAbout(){
    let res=await axios(`${BASE_URL}/${id}`)
    let data=res.data
    console.log(data);
    about.innerHTML=`
       <div class=" col col-12 col-lg-6 detail-wrapper-about-left">
       <img src="./assets/img/home-img/${data.img}" alt="">
       </div>
       <div class="col col-12 col-lg-6   detail-wrapper-about-right">
       <h1>${data.destination}</h1>
       <p>${data.shortinfo}</p>
       </div>
       `
    };
    getDetailAbout() 
    let allBiography=document.querySelector(".destinations-allBiography")
    async function getDetailAllBiography(){
    let res=await axios(`${BASE_URL}/${id}`)
    let data=res.data
    console.log(data);
    allBiography.innerHTML=`
    <div class="biography col col-12 ">
    <h3><i class="fa-solid fa-file-text  text-primary me-1"></i>Tour Details</h3>
    <div class="row">
    <div class="col-6">
    <p><i class="fa-solid fa-calendar text-primary me-1"></i>${data.day}</p>
    <p><i class="fa-solid fa-person text-primary me-1 mt-3"></i>${data.minAge}</p>
    </div>
    <div class="col-6">
    <p><i class="fa-solid fa-clock text-primary me-1"></i>${data.Availability}</p>
    <p><i class="fa-solid fa-house text-primary me-1 mt-3"></i>${data.duration}</p>
    </div>
    </div>
    <p>${data.TourDetails}</p>
    </div>
    <div class="map-destinations col col-12 w-100">
    <h3 class="mb-4"><i class="fa-solid fa-map  text-primary me-1"></i>Map</h3>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1398041.1378619722!2d8.22421005!3d46.8131873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2sSwitzerland!5e0!3m2!1sen!2saz!4v1686448326570!5m2!1sen!2saz"  style="border:0;width:100%;height:500px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
   
<div class="chronology col col-12 ">
     <h3><i class="fa-solid fa-file-text  text-primary me-1"></i>Itinerary</h3>
    <div class="firstWorkplace">
    <h5>${data.Itinerary.firstday.where}</h5>
    <p>${data.Itinerary.firstday.about}</p>
    </div>
    <div class="secondWorkplace">
    <h5>${data.Itinerary.secondday.where}</h5>
    <p>${data.Itinerary.secondday.about}</p>
    </div>
    <div class="thirdWorkplace">
    <h5>${data.Itinerary.thirdday.where}</h5>
    <p>${data.Itinerary.thirdday.about}</p>
    </div>
    <div class="fourthWorkplace">
    <h5>${data.Itinerary.fourday.where}</h5>
    <p>${data.Itinerary.fourday.about}</p>
    </div>
    <div class="fifthWorkplace">
    <h5>${data.Itinerary.fifthday.where}</h5>
    <p>${data.Itinerary.fifthday.about}</p>
    </div>
</div>
<div class="col col-12">
<h3 ><i class="fa-solid fa-images   text-primary me-1"></i> Images</h3>
<div id="carouselExampleCaptions" class="carousel slide mt-4 mb-4" data-bs-ride="carousel" >
        
        <div class="carousel-inner">
          <div class="carousel-item active" >
            <img src="./assets/img/home-img/${data.photos.firstphoto}" class="d-block w-100" height="500px" alt=".">
            <div class="carousel-caption  " style=" top: 35%;">
            </div>
          </div>
          <div class="carousel-item" >
            <img src="./assets/img/home-img/${data.photos.secondphoto}" class="d-block w-100" height="500px" alt=".">
            <div class="carousel-caption  " style=" top: 35%;">
              
            </div>
          </div>
          <div class="carousel-item" >
            <img src="./assets/img/home-img/${data.photos.thirdphoto}" class="d-block w-100" height="500px" alt=".">
            <div class="carousel-caption  " style=" top: 35%;">
            </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" >
            <span class="carousel-control-prev-icon" aria-hidden="true " style="padding: 25px;"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true" style="padding: 25px;"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </div>
      </div>
      `
    };
    getDetailAllBiography() 
    

    
    
    
    
