let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('section');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let BASE_URL="http://localhost:8000/tours"
let listCards  = [];
let fav=[]
async function initApp(){
let res=await axios(BASE_URL)
let data=res.data
fav=data
    data.forEach((element,key ) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="./assets/img/home-img/${element.img}" height="250px">
            <div class="title">${element.shortinfo}</div>
            <div class="price">${element.price}$</div>
            <button onclick="addToCard(${element.id})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();

let usersData=JSON.parse(localStorage.getItem("users"))
console.log(usersData);
function addToCard(key){
if(usersData!==null){
    console.log(fav[key]);
        if(listCards[key] == null){
            listCards[key] = JSON.parse(JSON.stringify(fav[key]));
            listCards[key].quantity = 1;
        }
        reloadCard();
}else{
alert("U aren't registered")
window.location.href="http://127.0.0.1:5500/TravelTourProject/login.html"
}
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="./assets/img/home-img/${value.img}"/></div>
                <div>${value.shortinfo}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * fav[key].price;
    }
    reloadCard();
}