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
carousel.innerHTML="" 
  let res=await axios(BASE_URL)
  let data=res.data
  console.log(data);
  data.forEach(element => {
    carousel.innerHTML+=`
    <div class="owl-item" style="width: 316.333px; margin-right: 10px;">
    <div class="item">
      <div class="card ">
        <img src="./assets/img/home-img/${element.img}" style="height:200px" alt="1000X1000">
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

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



