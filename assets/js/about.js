let cards =document.querySelector(".cards")
let BASE_URL="http://localhost:8000/users"


async function getData(){
 let res=await axios(BASE_URL)
 let data=res.data
 console.log(data);
 data.forEach(element => {
    cards.innerHTML+=`
        <div class="col col-12 col-lg-4 col-md-6">
        <div class="card">
        <div class="card-img">
        <img src="./assets/img/about-img/${element.image}" alt="">
        </div>
        <div class="card-body">
        <a href="./teamdetail.html?id=${element.id}">'${element.name} ${element.surname}'</a>
        <p>${element.position}</p>
        </div>
        </div>
        </div>
   `
 });
}
getData() 