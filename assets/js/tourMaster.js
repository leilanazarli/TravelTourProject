let tbody=document.querySelector("tbody")
let BASE_URL="http://localhost:8000"

async function getTableTour(){
tbody.innerHTML=""
    let res=await axios(`${BASE_URL}/tours`)
    let data=res.data
    data.forEach(element => {
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
                  <a href=""><i class="fa-sharp fa-solid fa-trash"></i></a>
                  <a href=""><i class="fa-solid fa-check"></i></a>
                  <a href=""><i class="fa-solid fa-eye"></i></a>
                  </td>
                  </tr>
        `
    });
}
getTableTour()