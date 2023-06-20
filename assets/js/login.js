let email=document.querySelector("#email_field")
let password=document.querySelector("#password_field")
let form=document.querySelector("form")
let submit=document.querySelector(".sign-in_btn")

let BASE_URL="http://localhost:8000"

let usersData=JSON.parse(localStorage.getItem("users")) || []

form.addEventListener("submit" ,async function(e){
    e.preventDefault()
    let res=await axios(`${BASE_URL}/customers`)
    let data=res.data
    if(data.find(element=>element.email===email.value && element.password===password.value)){
        data=data.find(element=>element.email===email.value && element.password===password.value).username
        alert("Login Successful(❁´◡`❁)")
        let user={
            email:email.value
        }
        usersData.push(user)
        localStorage.setItem("users",JSON.stringify(usersData))
        window.location.href="http://127.0.0.1:5500/TravelTourProject/home.html"
    }
    else if(data.find(element=>element.email===email.value && element.password!==password.value)){
    alert("Wrong Password!!!.·´¯`(>▂<)´¯`·. or Maybe u aren't registered!✨(●'◡'●)")
    }
    // else if(data.find(element=>element.email!==email.value && element.password!==password.value)){
    // alert("Maybe u aren't registered!✨(●'◡'●)")
    // window.location.href="http://127.0.0.1:5500/TravelTourProject/signUp.html"
    // }
    else{
        let response=await axios(`${BASE_URL}/admin`)
        if(response.data.find(element=>element.email===email.value && element.password===password.value)){
            response.data=response.data.find(element=>element.email===email.value && element.password===password.value).username
        alert("Login Successful (❁´◡`❁) Welcome Your Home")
        window.location.href="http://127.0.0.1:5500/TravelTourProject/adminpanel.html"
    }
    }
})

