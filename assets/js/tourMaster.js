let tbody=document.querySelector("tbody")
let BASE_URL="http://localhost:8000"

async function getTable(){
tbody.innerHTML=""
    let res=await axios(`${BASE_URL}/tours`)
    let data=res.data
    data.forEach(element => {
        tbody.innerHTML+=`
        <tr>
                  <th scope="row">${element.id}</th>
                  <td>${element}</td>
                  <td>${element}<i class="fa-regular fa-envelope text-primary"></i></td>
                  <td>${element}</td>
                  <td>${element}</td>
                  <td>${element}</td>
                  <td class="text-secondary"><i class="fa-solid fa-check"></i>${element}</td>
                  <td class="action">
                  <a href=""><i class="fa-sharp fa-solid fa-trash"></i></a>
                  <a href=""><i class="fa-solid fa-check"></i></a>
                  <a href="" onclick="deleteBtn({elementid})"><i class="fa-solid fa-xmark"></i></a>
                  <a href=""><i class="fa-solid fa-eye"></i></a>
                  </td>
                  </tr>
        `
    });
}
getTable()