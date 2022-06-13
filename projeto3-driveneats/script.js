function selecionadorcomidas1(hm){
    const comidasClickado = document.querySelector(".selecionador");
    if(comidasClickado!== null){
        comidasClickado.remove("selecionador");
    }
    hm.classList.add("selecionador");
}

