var menucontent = document.getElementById("menu__affichage");
var n=0;
var vb=0;
let menu=document.getElementById("menu");
let bod=document.getElementsByTagName("body")
console.log(menucontent)
menu.addEventListener("click",function(){
    if(menucontent.style.display==="none"){
    menucontent.style.display="flex";
    
}
else{
    menucontent.style.display="none";
}
})
window.addEventListener("resize",function(){
    if(window.innerWidth>=600){
        menucontent.style.display="none";
    }
})
var adding=document.querySelectorAll(".add");
var minus=document.querySelectorAll(".minus");
var panier=document.getElementsByClassName("panierk");
const prix=document.getElementsByClassName("prix");
const prix__unit=20;
function plus(n){
    panier[n].value++;
    var vb=prix__unit*panier[n].value;
    prix[n].value=vb+"$";
}
function na9is(n){
    if(panier[n].value>1){
        panier[n].value--;
        var vb=prix__unit*panier[n].value;
        prix[n].value=vb+"$";
    }
   
}
adding[0].addEventListener("click", function(){
    plus(0);
    console.log(vb);
})
adding[1].addEventListener("click",function(){
    n=1;
    plus(1);
})
minus[0].addEventListener("click", function(){
    na9is(n);
})
minus[1].addEventListener("click",function(){
    n=1;
    na9is(1);
})
