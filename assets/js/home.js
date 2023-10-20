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


let BASE_Tours="http://localhost:8000/tours"

async function getTours(){
  let carousel=document.querySelector(".owl-stage")
carousel.innerHTML="" 
  let res=await axios(BASE_Tours)
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
let BASE_Articles="http://localhost:8000/articles"

async function getArticles(){
  let cards=document.querySelector(".articles-cards")
cards.innerHTML="" 
  let res=await axios(BASE_Articles)
  let data=res.data
  console.log(data);
  data.forEach(element => {
    cards.innerHTML+=`
    <div class=" col col-12 col-lg-4">
        <div class="carda">
          <div class="img">
            <img src="./assets/img/home-img/${element.img}" alt="" >
          </div>
          <div class="carda-body">
          <a href="">
            <h6>${element.articleName}</h6>
            <p><i class=" fa-regular fa-clock"></i> ${element.date}</p>
          </a>
          </div>
        </div>
        </div> `
  });
}
getArticles();

let BASE_Popular="http://localhost:8000/popularTours"

async function getPopularTours(){
  let cards=document.querySelector(".popular-tours")
cards.innerHTML="" 
  let res=await axios(BASE_Popular)
  let data=res.data
  console.log(data);
  data.forEach(element => {
    cards.innerHTML+=`
    <div class="carda">
            <img src="./assets/img/gallery-img/${element.img}" alt="">
            <div class="carda-text">
              <div class="carda-text-visible">
                <h5><i class="fa-solid fa-location-dot me-1 text-primary "></i>${element.tourCountry}</h5>
                <p>${element.tours}</p>
              </div>
                <div class="carda-text-hidden">
                  <a href="./tourFullList.html">VIEW ALL TOURS</a>
                  <div class="line"></div>
                </div>
            </div>
          </div>`
  });
}
getPopularTours();

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




const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const API_KEY = "PASTE-YOUR-API-KEY"; // Paste your API key here
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const generateResponse = (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");

    // Define the properties and message for the API request
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage}],
        })
    }

    // Send POST request to API, get response and set the reponse as paragraph text
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content.trim();
    }).catch(() => {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if(!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

let promotionsEmail=document.querySelector("#promotionsEmail")
let promotionsEmailBtn=document.querySelector("#promotionsEmailBtn")

promotionsEmailBtn.addEventListener("click" ,async function(){
let BASE_URL="http://localhost:8000/promotionsEmail"
  let emailObj={
    promotionsEmail:promotionsEmail.value
  }
  await axios.post(`${BASE_URL}` , emailObj)
})

