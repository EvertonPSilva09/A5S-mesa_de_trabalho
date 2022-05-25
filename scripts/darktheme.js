let corpo = document.querySelector('.dark');
let botao = document.querySelector("button");
let h1 = document.querySelector("h1");
let div = document.querySelectorAll('div');
let p = document.querySelectorAll('p')
let h2 = document.querySelectorAll('h2')

function darkmodedivs(){
    for (const divs of div) {
        divs.classList.toggle("itens-darktheme").innertext;
}
}

function darmodeh2(){
    for (const textos of h2) {
        textos.classList.toggle("texto-darktheme").innertext;
    }
    }

function darkmodep(){
    for (const textos of p) {
        textos.classList.toggle("texto-darktheme").innertext;
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