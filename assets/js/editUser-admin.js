let id= new URLSearchParams(window.location.search).get("id")
let Base_url="http://localhost:8000/users"
let userPhoto=document.querySelector("#userPhoto")
let firstName=document.querySelector("#firstName")
let lastName=document.querySelector("#lastName")
let email=document.querySelector("#email")
let position=document.querySelector("#position")
let salary=document.querySelector("#salary")
let phoneNumber=document.querySelector("#phoneNumber")
let form=document.querySelector("form")
let add=document.querySelector(".add")
let submitBtn=document.querySelector("#submitBtn")
async function createUser(){
   let obj={
    image:`${userPhoto.value.split("\\")[2]}`,
    name:firstName.value,
    username:lastName.value,
    email:email.value,
    position:position.value,
    salary:salary.value,
    phone:phoneNumber.value,
   }
   await axios.post(Base_url,obj)
   window.location="personnel.html"
}

async function editUser(){
   let obj={
    image:`${userPhoto.value.split("\\")[2]}`,
    name:firstName.value,
    username:lastName.value,
    email:email.value,
    position:position.value,
    salary:salary.value,
    phone:phoneNumber.value,
   }
   await axios.patch(`${Base_url}/${id}`,obj)
   window.location="personnel.html"
}

 if(id){
    async function forEdit(){
        await axios(`${Base_url}/${id}`).then(res=>{
            firstName.value=res.data.name
            lastName.value=res.data.username
            email.value=res.data.email
            position.value=res.data.position
            salary.value=res.data.salary
            phoneNumber.value=res.data.phone
        })
     }
     forEdit()
     submitBtn.innerHTML="Edit"
     add.innerHTML="Edit User"
 }
 
 
 form.addEventListener("submit" ,async function(event){
    event.preventDefault()
    if(id){
    editUser()
    }else{
    createUser()
    }
    
 })