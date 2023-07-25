let tbody=document.querySelector("tbody")
let BASE_URL="http://localhost:8000/users"
let search=document.querySelector("#search-personnel")
let filter=document.querySelector("#filter-personnel")
let loadmore=document.querySelector(".loadmore")


let isEditing = false
let editedId
let fav=[]
let num=2
let allData=[]
async function getAllUsers(){
tbody.innerHTML=""
    let res=await axios(BASE_URL)
    let data=res.data
    allData=data
    fav=fav.length || search.value ?fav.slice(0,num) :data.slice(0,num)
    fav.forEach(element => {
      tbody.innerHTML+=`
      <tr >
      <th scope="row">${element.id}</th>
      <td><img src="./assets/img/about-img/${element.image}" alt="" width="50px"></td>
        <td>${element.name}</td>
        <td>${element.username}</td>
        <td>${element.email}</td>
        <td>${element.position}</td>
        <td>${element.salary}$</td>
        <td>${element.phone}</td>
        <td class="action d-flex p-5 gap-1">
        <a href=""  onclick="deleteBtn(${element.id})"><i class="fa-sharp fa-solid fa-trash"></i></a>
        <a href="./editUser-admin.html?id=${element.id}"><i class="fa-regular fa-pen-to-square"></i></a>
        </td>
        </tr>
        `
    });
}
getAllUsers()
loadmore.addEventListener("click" , async function(){
    num=num+2
    fav=allData
    getAllUsers()
})

async function deleteBtn(id){
  await axios.delete(`${BASE_URL}/${id}`)
  fav=allData.filter(item=>item.id!=id)
  getAllUsers()
}
search.addEventListener("input" , async function(event){
  fav=allData 
  // console.log(allData);
  fav=fav.filter(item=>item.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
  // console.log(fav);
  getAllUsers()
})
filter.addEventListener("input" , async function(event){
  fav=allData 
  // console.log(allData);
  fav=fav.filter(item=>item.salary.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
  // console.log(fav);
  getAllUsers()
})
let ascBtn=document.querySelector(".asc")
ascBtn.innerHTML="Ascending"
ascBtn.addEventListener("click" , async function(){
    if(ascBtn.innerHTML=="Ascending"){
        fav.sort((a,b)=>a.salary-b.salary)
        ascBtn.innerHTML="Descending"
    }
    else if(ascBtn.innerHTML=="Descending"){
        fav.sort((a,b)=>b.salary-a.salary)
        ascBtn.innerHTML="Default"
    }
    else{
        fav=allData
        ascBtn.innerHTML="Ascending"
    }
    getAllUsers()
})



// var modal = document.querySelector("#myModal");
// window.addEventListener("click" ,function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// })
// async function detailBtn(id){
//   modal.style.display = "block";
//   console.log(id);
  
//   fav=allData.filter(item=>item.id==id)
//   fav.forEach(element => {
//         modal.innerHTML=`
//         <div class="modal-content">
//         <img src="./assets/img/about-img/${element.image}" alt="" width="350px" >
//         </div>
//         `
//         })

// }
// detailBtn()
