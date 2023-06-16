let startYear = 1800;
let endYear = new Date().getFullYear();
for (i = endYear; i > startYear; i--)
{
    $('#yearpicker, #yearpicker2').append($('<option />').val(i).html(i));
}

$('select').on('change', function(){
  let arr = Array.from({length:$('#yearpicker2').val() - +$('#yearpicker').val()},(v,k)=>k + +$('#yearpicker').val())
  console.log(arr);
})

function onSubmit(token) {
    document.getElementById("demo-form").submit();
}

var file =document.getElementById("inImg")
var img = document.getElementById("image")
file.addEventListener("change" ,(e)=>{
    img.src= URL.createObjectURL(e.target.files[0])
})