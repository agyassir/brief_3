
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
let confirm = document.querySelectorAll(".ajout");
let icon =document.querySelectorAll(".added");
console.log(confirm)
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
for(let i = 0;i<items_number.value ; i++){
adding[i].addEventListener("click", function () {
    plus(i);
    prix__total.value = Number(prix[i].value) + Number(prix[i+1].value);
})

minus[i].addEventListener("click", function () {
    moin(i);
    prix__total.value = Number(prix[i].value) + Number(prix[i+1].value);
})
}
let lenght=suprimer.length;
for (let i = 0; i < lenght; i++) {
    suprimer[i].addEventListener('click',function(){
        card[i].style.display = "none";
        items_number.value--;
        prix__total.value = prix__total.value - Number(prix[n].value)
        lenght--;
        console.log(lenght)
    })
  }
  let confirmer = confirm.length;
  console.log(confirmer)
  for(let i=0;i<confirmer;i++){
    confirm[i].addEventListener("click",function(){
        confirm[i].style.display="none";
        icon[i].style.display="block";    
        console.log("dimakokab")    

    })
  }
