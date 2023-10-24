
var menucontent = document.getElementById("menu__affichage");
var n = 0;
var vb = 0;
let menu = document.getElementById("menu");
var adding = document.querySelectorAll(".add");
var minus = document.querySelectorAll(".minus");
var panier = document.getElementsByClassName("panierk");
const prix = document.getElementsByClassName("prix");
const prix__unit = 20;
let prix__total = document.getElementById("total_prix");
let items_number = document.getElementById("items");
let suprimer = document.getElementsByClassName("supp");
let card = document.getElementsByClassName("cards");
console.log(suprimer)
// toggle bar
menu.addEventListener("click", function () {
    if (menucontent.style.display === "none") {
        menucontent.style.display = "flex";

    }
    else {
        menucontent.style.display = "none";
    }
})
window.addEventListener("resize", function () {
    if (window.innerWidth >= 600) {
        menucontent.style.display = "none";
    }
})
// panier functions

function plus(n) {
    panier[n].value++;
    var vb = prix__unit * panier[n].value;
    prix[n].value = vb;
}
function moin(n) {
    if (panier[n].value > 1) {
        panier[n].value--;
        var vb = prix__unit * panier[n].value;
        prix[n].value = vb;
    }

}

items_number.value = panier.length;
prix__total.value = Number(prix[0].value) + Number(prix[1].value);
adding[0].addEventListener("click", function () {
    plus(0);
    prix__total.value = Number(prix[0].value) + Number(prix[1].value);
})
adding[1].addEventListener("click", function () {
    n = 1;
    plus(1);
    prix__total.value = Number(prix[0].value) + Number(prix[1].value);
})
minus[0].addEventListener("click", function () {
    moin(0);
    prix__total.value = Number(prix[0].value) + Number(prix[1].value);
})
minus[1].addEventListener("click", function () {
    n = 1;
    moin(1);
    prix__total.value = Number(prix[0].value) + Number(prix[1].value);
})
// function supprission(n){
       

// }
let lenght=suprimer.length;
// while(items_number.value=0){
for (let i = 0; i < lenght; i++) {
    suprimer[i].addEventListener('click',function(){
        card[i].style.display = "none";
        items_number.value--;
        prix__total.value = prix__total.value - Number(prix[n].value)
        lenght--;
        console.log(lenght)
    })
  }
  
// }