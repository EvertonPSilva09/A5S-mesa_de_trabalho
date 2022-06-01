let corpo = document.querySelector('.dark');
let botao = document.querySelector("button");
let h1 = document.querySelector("h1");

function darkmodedivs(){
    let div = document.querySelectorAll('div');
    for (const divs of div) {
        divs.classList.toggle("itens-darktheme").innerText;
}
}

function darmodeh2(){
    let h2 = document.querySelectorAll('h2');
    for (const textos of h2) {
        textos.classList.toggle("texto-darktheme").innerText;
    }
    }



function darkmodep(){
    let p = document.querySelectorAll('p')
    for (const textos of p) {
        textos.classList.toggle("texto-darktheme").innerText;
    }
}

    function darkmode(){
        corpo.classList.toggle("body-darktheme");
        botao.classList.toggle("botao-darktheme");
        h1.classList.toggle("titulo-darktheme");
        darkmodedivs();
        darmodeh2();
        darkmodep();
    }

/*if (botao.classList.contains("dark")) = {

    botao = botao.document.querySelector("button").innerText = "Acende a Luz? :D";
}
/*









*/