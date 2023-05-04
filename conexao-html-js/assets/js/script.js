let logo = document.getElementById("logo");
console.log(logo);

let postAutores = document.getElementsByClassName("post-autor");
console.log(postAutores);

let post02 = document.getElementById("post02");
console.log(post02);

let form = document.getElementById("formulario");
console.log(form);

let posts = document.getElementById("posts");
console.log(posts);

let postsDatas = document.getElementsByClassName("post-data");
console.log(postsDatas);

let postsTexts = document.getElementsByClassName("post-texto");
console.log(postsTexts);

let socialMediasLinks = document.getElementsByClassName("lista_redes");
console.log(socialMediasLinks);

let texto02 = document.querySelector("#post02 .post-texto");
console.log(texto02);

let footerListRedes = document.querySelectorAll("footer .lista_redes li");
console.log(footerListRedes);

let asideListRedes = document.querySelectorAll("aside .lista_redes li");
console.log(asideListRedes);

let textLinkPost01 = document.querySelector("#post01 .post-texto a");
console.log(textLinkPost01);

let textStrongWordPost02 = document.querySelector("#post02 .post-texto strong");
console.log(textStrongWordPost02);

let formNameInput = document.querySelector("#formulario form div #nome");
console.log(formNameInput);

let navListLinks = document.querySelectorAll("header nav ul .elementos_nav a");
console.log(navListLinks);

let strongAuthors = document.querySelectorAll("#posts .post .post-autor strong");
console.log(strongAuthors);

let strongDates = document.querySelectorAll("#posts .post .post-data strong")
console.log(strongDates);

function percorrerLista(lista){
    for (i = 0; i < lista.length; i++){
    console.log(lista[i]);
    }
}
percorrerLista(asideListRedes);