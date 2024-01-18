let flecha = document.querySelectorAll(".arrow");

for (var i=0 ; i< flecha.length;i++){
    flecha[i].addEventListener("click",(e)=>{
        let flechaParente = e.target.parentElement.parentElement;
        console.log(flechaParente);
        flechaParente.classList.toggle("showMenu");
    });
    
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click",()=>{
  sidebar.classList.toggle("close");
});


function redirectToCarPage() {
  // Substitua 'car_page.html' pela URL ou caminho da página para a qual você quer redirecionar
  window.location.href = 'carro.html';
}