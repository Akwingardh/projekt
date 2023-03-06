window.addEventListener("load", check);

function check() {
    console.log("hej")
}

let bokaResaKnappEl = document.getElementById("boka-resa-knapp");
let ombokaPopUpEl = document.getElementById("omboka-popup");
let closeOmbokaPopUpEl = document.getElementById("close-box-omboka");
let tackBokningPopUpEl = document.getElementById("tack-bokning-popup");
let ombokaBokaKnapp = document.getElementById("omboka-boka-knapp");
let closeTackBokningPopUpEl = document.getElementById("close-box-tack-bokning");
let avOmbokaPopUpEl = document.getElementById("popup-avomboka");
let avOmbokaKnappEl = document.getElementById("av-omboka-knapp");
let ombokaKnappEl = document.getElementById("grid-knapp-1");
let avbokaKnappEl = document.getElementById("grid-knapp-2");
let avbokaConfirmPopUpEl = document.getElementById("avboka-confirm-popup");
let avbokatPopUpEl = document.getElementById("avbokat-popup");
let avbokaConfirmKnappEl = document.getElementById("avboka-confirm");
let closeAvbokatPopUpEl = document.getElementById("close-box-avbokat");

bokaResaKnappEl.addEventListener("click", showOmbokaPopUp);
closeOmbokaPopUpEl.addEventListener("click", hideOmbokaPopUp);
ombokaBokaKnapp.addEventListener("click", showTackBokningPopUp);
closeTackBokningPopUpEl.addEventListener("click", hideAllAvOmbokaPopUps);
avOmbokaKnappEl.addEventListener("click", showPopUpAvOmboka);
ombokaKnappEl.addEventListener("click", showOmbokaPopUp);
avbokaKnappEl.addEventListener("click", showAvbokaConfirmPopUp);
avbokaConfirmKnappEl.addEventListener("click", showAvbokaConfirmPopUp);
avbokaConfirmKnappEl.addEventListener("click", showAvbokatPopUp);
closeAvbokatPopUpEl.addEventListener("click", hideAllAvOmbokaPopUps);

function showPopUpAvOmboka() {
    avOmbokaPopUpEl.style.visibility = "visible";
}

function hidePopUpAvOmboka() {
    avOmbokaPopUpEl.style.visibility = "hidden";
}

function showOmbokaPopUp() {
     ombokaPopUpEl.style.visibility ="visible";
}

function hideOmbokaPopUp() {
    ombokaPopUpEl.style.visibility ="hidden";
}

function showTackBokningPopUp() {
     tackBokningPopUpEl.style.visibility = "visible";
    ombokaPopUpEl.style.visibility = "hidden";
}

function hideAllAvOmbokaPopUps() {
    tackBokningPopUpEl.style.visibility = "hidden";
    ombokaPopUpEl.style.visibility = "hidden";
    avbokatPopUpEl.style.visibility = "hidden";
    avOmbokaPopUpEl.style.visibility = "hidden";
}

function showAvbokaConfirmPopUp() {
    avbokaConfirmPopUpEl.style.visibility = "visible";
}

function hideAvbokaConfirmPopUp() {
    avbokaConfirmPopUpEl.style.visibility = "hidden";
}

function showAvbokatPopUp() {
    avbokatPopUpEl.style.visibility = "visible";
    avbokaConfirmPopUpEl.style.visibility = "hidden";
}