jQuery("#carousel").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 10,
  
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  dots:true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 4
    },

    1366: {
      items: 4
    }
  }
  
});


let BASE_URL="http://localhost:8000/tours"

async function getTours(){
  let carousel=document.querySelector(".owl-stage")
// carousel.innerHTML=""
  let res=await axios(BASE_URL)
  let data=res.data
  console.log(data);
  data.forEach(element => {
    carousel.innerHTML+=`
    <div class="owl-item" style="width: 225.333px; margin-right: 10px;">
    <div class="item">
      <div class="card ">
        <img src="./assets/img/home-img/${element.img}" alt="1000X1000">
        <div class="card-body">
        <div class="about">
          <a href="">AMERICA - 2 DAYS IN LAKE TAHOE</a>
          <div class="price">
          <p>$2,300</p>
          <h1>${element.price}</h1>
          </div>
        </div>
        <div class="time">
          <i class="fa-regular  fa-clock"></i>
          <p> 8 Hours</p>
        </div>
        <div class="star-icon">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        <p>(6 Reviews)</p>
        </div>
        </div>
        </div>
        </div>
        </div> `
  });
}
getTours();



