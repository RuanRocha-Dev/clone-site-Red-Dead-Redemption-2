let hamburguer = document.querySelector("#hamburguer");
let sidebar = document.getElementById("sidebar");
let container = document.getElementById("container");

hamburguer.addEventListener("click", () =>{
    if(sidebar.style.left == "-20rem"){
        sidebar.style.left = "0rem";
        container.setAttribute("class", "container");
    }
    else{
        sidebar.style.left = "-20rem";
        container.removeAttribute("class", "container");
    }
    
});


