let name =document.querySelector("#name")
let email =document.querySelector("#email")
let subject =document.querySelector("#subject")
let message =document.querySelector("#message")
let form=document.querySelector("form")

let BASE_URL="http://localhost:8000/contact"

form.addEventListener("submit" ,async function(e){
e.preventDefault()
if(name.value!="" && email.value!="" && subject.value!="" && message.valu!=""){
    let contact={
        name:name.value,
        email:email.value,
        subject:subject.value,
        message:message.value
    }
    await axios.post(`${BASE_URL}`,contact)
}else{
alert("Empty Value!")
}
})