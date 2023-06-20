let tbody=document.querySelector("tbody")
let BASE_URL="http://localhost:8000/users"
let search=document.querySelector("#search-personnel")
let filter=document.querySelector("#filter-personnel")


let fav=[]
let allData=[]
async function getTablePersonnel(){
tbody.innerHTML=""
    let res=await axios(BASE_URL)
    let data=res.data
    allData=data
    fav=fav.length || search.value ?fav :data
    fav.forEach(element => {
        tbody.innerHTML+=`
        <tr >
        <th scope="row">${element.id}</th>
        <td><img src="./assets/img/about-img/${element.image}" alt="" width="50px"></td>
        <td>${element.name}</td>
        <td>${element.username}</td>
        <td>${element.email}</td>
        <td>${element.position}</td>
        <td>${element.salary}</td>
        <td>${element.phone}</td>
        <td class="action d-flex p-5 gap-1">
        <a href=""  onclick="deleteBtn(${element.id})"><i class="fa-sharp fa-solid fa-trash"></i></a>
        <a href=""><i class="fa-regular fa-pen-to-square"></i></a>
        <a id="myBtn" onclick="detailBtn(${element.id})" ><i class="fa-solid fa-eye"></i></a>
                  <div id="myModal" class="modal">
                    <div class="modal-content">
                      <span class="close" onclick="closeBtn(${element.id})" >&times;</span>
                      <img src="./assets/img/about-img/${element.image}" alt="" width="350px" >
                    </div>
                  </div>
        </td>
        </tr>
        `
    });
}
getTablePersonnel()

async function deleteBtn(id){
  await axios.delete(`${BASE_URL}/${id}`)
  fav=allData.filter(item=>item.id!=id)
  getTablePersonnel()
}
search.addEventListener("input" , async function(event){
  fav=allData 
  // console.log(allData);
  fav=fav.filter(item=>item.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
  // console.log(fav);
  getTablePersonnel()
})
filter.addEventListener("input" , async function(event){
  fav=allData 
  // console.log(allData);
  fav=fav.filter(item=>item.salary.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
  // console.log(fav);
  getTablePersonnel()
})
// var modal = document.querySelector("#myModal");

// Get the button that opens the modal
// var btn = document.querySelector("#myBtn");

// Get the <span> element that closes the modal
// var span = document.querySelector(".close");

// btn.addEventListener("click" ,function() {
//     modal.style.display = "block";
// })
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
//   }

// // When the user clicks anywhere outside of the modal, close it
// window.addEventListener("click" ,function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// })


async function detailBtn(){
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
async function closeBtn(){
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click" ,function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})