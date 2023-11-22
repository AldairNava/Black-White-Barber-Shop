const menuOpciones = document.querySelector(".menu-opciones");
const btnwhats = document.getElementById("whats");
const btninsta = document.getElementById("insta");
const btnface = document.getElementById("face");
const header = document.querySelector("header");
const controlesUsuario = document.querySelector(".controles-usuario");
const contenedor = document.querySelector(".contenedor");
const btnMenu = document.getElementById("btn-menu");

const responsiveY = ()=>{
    if(window.innerHeight<=362){
        if(menuOpciones.classList.contains("mostrar"))
            menuOpciones.classList.add("min");
        else
            menuOpciones.classList.remove("min");
    }
    else{
        menuOpciones.classList.remove("min");
    }
};
const responsive = ()=>{
    if(window.innerWidth<=1150){
        menuOpciones.children[0].appendChild(btnwhats);
        menuOpciones.children[0].appendChild(btninsta);
        menuOpciones.children[0].appendChild(btnface);
        header.appendChild(menuOpciones);
    }else{
        controlesUsuario.appendChild(btnwhats);
        controlesUsuario.appendChild(btninsta);
        controlesUsuario.appendChild(btnface);
        contenedor.appendChild(menuOpciones);
    }

    responsiveY();
}

btnMenu.addEventListener("click",()=>{
    menuOpciones.classList.toggle("mostrar");
    responsiveY();
});
responsive();

window.addEventListener("resize",responsive);