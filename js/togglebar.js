
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
let fsubmit =document.querySelector(".submit");
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

for(let i = 0;i<items_number.value ; i++){
    prix__total.value = Number(prix[i].value) + Number(prix__total.value);
adding[i].addEventListener("click", function () {
    plus(i);
    prix__total.value =  Number(prix__total.value)+prix__unit;
})
console.log(20*(panier[i].value-1))
minus[i].addEventListener("click", function () {
    moin(i);
    prix__total.value =  Number(prix__total.value)-prix__unit;
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
// validation formulaire
function validateForm() {
    let vname = document.forms["formulaire"]["fname"].value;
    // ^[a-z0-9_-]{3,15}$
    if (vname == ""||vname.match(/^[a-z0-9_-]$/)
    ) {
      alert("full Name must be filled out");
      return false;
    }
    let vadresse = document.forms["formulaire"]["faddresse"];
    if (vadresse.value == ""||vname.match(/^[a-z0-9_-]$/)) {
      
      return false;
    }
    let vnumber = document.forms["formulaire"]["fnumber"];
    if (vnumber.value == ""||vname.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/)) {
      return false;
    }
    let vcvv = document.forms["formulaire"]["fcvv"];
    if (vcvv.value == ""||vname.match(/^[0-9]{3}$/)) {
      
      return false;
    }
    let vpcode = document.forms["formulaire"]["fpcode"];
    if (vpcode.value == ""||vname.match(/^[a-z0-9_-]{5}$/)) {
      
      return false;
    }
    let vemail = document.forms["formulaire"]["femail"];
    if (vemail.value == ""||vname.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
      
      return false;
    }
    let vphone = document.forms["formulaire"]["fone"];
    if (vphone.value == ""||vname.match(/^[\+]?[(]?212[)]?[-\s\.]?[6-7]{1}[-\s\.]?[0-9]{8}$/)) {
      
      return false;
    }
  }
fsubmit.addEventListener("click",validateForm());
// validation form fin