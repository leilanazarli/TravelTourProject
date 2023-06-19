const form = document.querySelector("form");
const passwordInput = document.querySelector("#password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

let startYear = 1800;
let endYear = new Date().getFullYear();
for (i = endYear; i > startYear; i--)
{
    $('#yearpicker, #yearpicker2').append($('<option />').val(i).html(i));
}

$('select').on('change', function(){
  let arr = Array.from({length:$('#yearpicker2').val() - +$('#yearpicker').val()},(v,k)=>k + +$('#yearpicker').val())
  console.log(arr);
})

function onSubmit(token) {
    document.getElementById("demo-form").submit();
}

let file =document.getElementById("inImg")
let img = document.getElementById("image")
file.addEventListener("change" ,(e)=>{
    img.src= URL.createObjectURL(e.target.files[0])
})


const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

let username=document.querySelector("#username")
let firstname=document.querySelector("#firstname")
let yearpicker=document.querySelector("#yearpicker")
let monthpicker=document.querySelector("#monthpicker")
let daypicker=document.querySelector("#daypicker")
let phone=document.querySelector("#phone")
let lastname=document.querySelector("#lastname")
let email=document.querySelector("#email")
let country=document.querySelector("#country")
let checkbox=document.querySelector("#checkbox")
let signUpBTN=document.querySelector(".signUpBTN")
let BASE_URL="http://localhost:8000/customers"
form.addEventListener("submit" ,async function(e){
e.preventDefault()
if(firstname.value!="" && monthpicker.value!="" && daypicker.value!="" && yearpicker.value!="" && lastname.value!="" && username.value!="" && email.value!="" && country.value!="" && passwordInput.value!="" && phone.value!="" && checkbox.value!="" && file.value!=""){
    let customer={
        id:Date.now(),
        img:file.value,
        username:username.value,
        firstname:firstname.value,
        lastname:lastname.value,
        email:email.value,
        password:passwordInput.value,
        phone:phone.value,
        checkbox:checkbox.checked,
        year:yearpicker.value,
        month:monthpicker.value,
        day:daypicker.value,
        country:country.value
    }
    await axios.post(`${BASE_URL} `,customer)
    window.location.href="http://127.0.0.1:5500/TravelTourProject/login.html"
}
else{
    alert("Empty value !!!")
}
 
})
