let tbody=document.querySelector("tbody")
let BASE_URL="http://localhost:8000/tours"
let search=document.querySelector("#search-personnel")
let filter=document.querySelector("#filter-personnel")

let fav=[]
let allData=[]
async function getTableTour(){
tbody.innerHTML=""
    let res=await axios(BASE_URL)
    let data=res.data
    allData=data
    fav=fav.length || search.value ?fav :data
    fav.forEach(element => {
        tbody.innerHTML+=`
        <tr>
                  <th scope="row">${element.id}</th>
                  <td>${element.shortinfo}</td>
                  <td>${element.Availability}<i class="fa-regular fa-envelope text-primary"></i></td>
                  <td>${element.duration}</td>
                  <td>${element.minAge}</td>
                  <td>${element.MaxPeople}</td>
                  <td class="text-secondary"><i class="fa-solid fa-check"></i>${element.price}$</td>
                  <td class="action">
                  <a href=""onclick="deleteBtn(${element.id})"><i class="fa-sharp fa-solid fa-trash"></i></a>
                  <a href=""><i class="fa-solid fa-eye"></i></a>
                  </td>
                  </tr>
        `
    });
}
getTableTour()
async function deleteBtn(id){
    await axios.delete(`${BASE_URL}/${id}`)
    fav=allData.filter(item=>item.id!=id)
    getTableTour()
}
search.addEventListener("input" , async function(event){
    fav=allData 
    fav=fav.filter(item=>item.shortinfo.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
    getTableTour()
  })
  filter.addEventListener("input" , async function(event){
    fav=allData 
    fav=fav.filter(item=>item.duration.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
    getTableTour()
  })