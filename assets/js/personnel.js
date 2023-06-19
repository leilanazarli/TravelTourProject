let tbody=document.querySelector("tbody")
let BASE_URL="http://localhost:8000"


async function getTablePersonnel(){
tbody.innerHTML=""
    let res=await axios(`${BASE_URL}/users`)
    let data=res.data
    data.forEach(element => {
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
        <td class="action">
        <a href=""><i class="fa-sharp fa-solid fa-trash"></i></a>
        <a href=""><i class="fa-regular fa-pen-to-square"></i></a>
        <a href="" onclick="deleteBtn(${element.id})"><i class="fa-solid fa-xmark"></i></a>
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