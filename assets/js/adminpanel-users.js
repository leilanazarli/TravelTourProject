let tbody=document.querySelector("tbody")
let BASE_URL="http://localhost:8000/customers"
let search=document.querySelector("#search-personnel")

let isEditing = false
let editedId
let fav=[]
let allData=[]
async function getAllUsers(){
tbody.innerHTML=""
    let res=await axios(BASE_URL)
    let data=res.data
    allData=data
    fav=fav.length || search.value ?fav :data
    fav.forEach(element => {
        tbody.innerHTML+=`
        <tr >
        <td><img src="./assets/img/about-img/${element.img.split("\\")[2]}" alt="" width="50px"></td>
        <td>${element.username}</td>
        <td>${element.firstname}</td>
        <td>${element.lastname}</td>
        <td>${element.email}</td>
        <td>${element.password}</td>
        <td>${element.phone}</td>
        <td class="action d-flex p-5 gap-1">
        <a href=""  onclick="deleteBtn(${element.id})"><i class="fa-sharp fa-solid fa-trash"></i></a>
        </td>
        </tr>
        `
    });
}
getAllUsers()

async function deleteBtn(id){
  await axios.delete(`${BASE_URL}/${id}`)
  fav=allData.filter(item=>item.id!=id)
  getAllUsers()
}
search.addEventListener("input" , async function(event){
  fav=allData 
  // console.log(allData);
  fav=fav.filter(item=>item.username.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
  // console.log(fav);
  getAllUsers()
})
// let myModal=document.querySelector(".modal-content")
// async function detailBtn(){
//     fav.forEach(element => {
//         myModal.innerHTML+=`
//         <span class="close" onclick="closeBtn(${element.id})" >&times;</span>
//         <img src="./assets/img/about-img/${element.image}" alt="" width="350px" >
//         `
//         })
        
// }
// detailBtn()