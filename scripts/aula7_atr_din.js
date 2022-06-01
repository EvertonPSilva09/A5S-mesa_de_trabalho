//atributos dinamicos

let listaImagens = document.querySelectorAll('img')


listaImagens.forEach(img => {
    //console.log(listaImagens.attributes);
    
    //HasAtrributte retorna true ou false
    //console.log(img.hasAttribute("src"));

    //getAttribute
    let atributoCapturado = img.getAttribute("src");
    //console.log(atributoCapturado);
    //console.log(img.src);

    //setAttribute colocar e/ou substituir as informações de classe e id
    img.setAttribute("class", "imagem");
    img.setAttribute("id", "id01");

    //console.log(img.attributes);

    //removeAttribute remove os atributos
    img.removeAttribute("class");
    img.removeAttribute("id");

});

let cardLeao = listaImagens[1].parentElement;
//console.log(cardLeao);

let a = document.createElement("a");

a.innerHTML = "Clique aqui para saber mais informações"

a.setAttribute("href", "https://google.com.br");
a.setAttribute("target", "_blank");

cardLeao.appendChild(a);