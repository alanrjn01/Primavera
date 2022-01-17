let botonApretado=false;
function mostrarMenu(){
    let menu= document.getElementById("menu");
    if(botonApretado===false){
        menu.style.display = "block";
        botonApretado=true;
        menu.style.transitionTimingFunction="ease-in-out";
    }else if(botonApretado ===true){
        botonApretado=false;
        menu.style.display = "none";
    }
}
function mostrarCarrito(){
    let menu= document.getElementById("carrito");
    if(botonApretado===false){
        menu.style.display = "block";
        botonApretado=true;
        menu.style.transitionTimingFunction="ease-in-out";
    }else if(botonApretado ===true){
        botonApretado=false;
        menu.style.display = "none";
    }
}