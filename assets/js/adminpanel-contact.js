let BASE_URL="http://localhost:8000/contact"
let tbody=document.querySelector("tbody")
let search=document.querySelector("#search-contact")

let fav=[]
let allData=[]
// let searchArr=[]
async function getTableContact(){
tbody.innerHTML=""
    let res=await axios(BASE_URL)
    let data=res.data
    allData=data
    fav=fav.length || search.value ?fav :data
    fav.forEach(element => {
        tbody.innerHTML+=`
        <tr>
        <th scope="row">${element.id}</th>
        <td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.subject}</td>
        <td>${element.message}</td>
        <td class="action">
        <a href="#" onclick="deleteBtn(${element.id})"><i class="fa-sharp fa-solid fa-trash"></i></a>
        <a href="#"><i class="fa-solid fa-check"></i></a>
        <a href="#" id="myBtn"><i class="fa-solid fa-eye text-primary"></i></a>
        </td>
        </tr>
        `
    });
}
getTableContact()

async function deleteBtn(id){
    await axios.delete(`${BASE_URL}/${id}`)
    fav=allData.filter(item=>item.id!=id)
    getTableContact()
}
search.addEventListener("input" , async function(event){
    fav=allData 
    console.log(allData);
    fav=fav.filter(item=>item.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
    console.log(fav);
    getTableContact()
})
