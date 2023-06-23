window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

//countdown//
var countDownDate = new Date("September 19, 2023 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

//top trending//
let arrowBtn = document.getElementsByClassName("arrow-game");
let arrowBtn2 = document.getElementsByClassName("arrow-game-right");
let trending = document.getElementsByClassName("games__game");
let modus2 = "one-two-three";

for (let i = 0; i < arrowBtn.length && i < arrowBtn2.length; i++) {
  arrowBtn[i].onclick = function () {
    if (modus2 == "one-two-three") {
      trending[1].style.display = "none";
      trending[0].style.display = "none";
      trending[2].style.display = "none";
      trending[3].style.display = "block";
      trending[4].style.display = "block";
      trending[5].style.display = "block";
      modus2 = "four-five-six";
    } else {
      trending[0].style.display = "block";
      trending[1].style.display = "block";
      trending[2].style.display = "block";
      trending[3].style.display = "none";
      trending[4].style.display = "none";
      trending[5].style.display = "none";
      modus2 = "one-two-three";
    }
  };

  arrowBtn2[i].onclick = function () {
    if (modus2 == "one-two-three") {
      trending[1].style.display = "none";
      trending[0].style.display = "none";
      trending[2].style.display = "none";
      trending[3].style.display = "block";
      trending[4].style.display = "block";
      trending[5].style.display = "block";
      modus2 = "four-five-six";
    } else {
      trending[0].style.display = "block";
      trending[1].style.display = "block";
      trending[2].style.display = "block";
      trending[3].style.display = "none";
      trending[4].style.display = "none";
      trending[5].style.display = "none";
      modus2 = "one-two-three";
    }
  };
}

//reviews//

let arrowButtons = document.getElementsByClassName("arrow");
let reviews = document.getElementsByClassName("review");
let modus = "one-two-three";

for (let i = 0; i < arrowButtons.length; i++) {
  arrowButtons[i].onclick = function () {
    if (modus == "one-two-three") {
      reviews[0].style.display = "none";
      reviews[1].style.display = "none";
      reviews[2].style.display = "none";
      reviews[3].style.display = "block";
      reviews[4].style.display = "block";
      reviews[5].style.display = "block";
      modus = "four-five-six";
    } else {
      reviews[0].style.display = "block";
      reviews[1].style.display = "block";
      reviews[2].style.display = "block";
      reviews[3].style.display = "none";
      reviews[4].style.display = "none";
      reviews[5].style.display = "none";
      modus = "one-two-three";
    }
  };
}

//product image//
function changeProductImage() {
  let editionSelect = document.getElementById("editionSelect");
  let productImage = document.getElementById("productImage");
  let deluxeDiv = document.querySelector(".deluxe");
  let ultimatediv = document.querySelector(".ultimate");
  let priceElement = document.querySelector(".small-container h4");

  if (editionSelect.value === "Deluxe Edition - €57.49") {
    productImage.src =
      "img/street-fighter-6-deluxe-edition-deluxe-edition-pc-spel-steam-cover.webp";
    deluxeDiv.style.display = "block";
    ultimatediv.style.display = "none";
    priceElement.innerText = "€57.49";
  } else {
    productImage.src = "img/street-fighter-6-pc-spel-steam-cover.webp";
    deluxeDiv.style.display = "none";
    ultimatediv.style.display = "none";
    priceElement.innerText = "€40.99";
  }
  if (editionSelect.value === "Ultimate - €71.49") {
    productImage.src =
      "img/street-fighter-6-ultimate-edition-ultimate-edition-pc-spel-steam-cover.webp";
    ultimatediv.style.display = "block";
    deluxeDiv.style.display = "none";
    priceElement.innerText = "€71.49";
  }
}

//product image 2//
function changeProductImage2() {
  let editionSelect2 = document.getElementById("editionSelect2");
  let productImage2 = document.getElementById("productImage2");
  let deluxe = document.querySelector(".deluxe2");
  let priceElement2 = document.querySelector(".single-product h4");

  if (editionSelect2.value === "Deluxe Edition - €61.96") {
    productImage2.src =
      "img/elden-ring-deluxe-edition-deluxe-edition-pc-spel-steam-europe-cover.webp";
    deluxe.style.display = "block";
    priceElement2.innerText = "€57.49";
  } else {
    productImage2.src = "img/elden-ring-pc-spel-steam-europe-cover.webp";
    deluxe.style.display = "none";
    priceElement2.innerText = "€42.94";
  }
}

// Selecteer alle knoppen met de class "games__button"
const addToCartButtons = document.getElementsByClassName("games__button");
// Variabele om het aantal items in de winkelwagen bij te houden
let cartMessage = 0;
// Selecteer het element waar het winkelwagenbericht wordt weergegeven
const cartMessageValue = document.getElementsByClassName("shoppingCart__message")[0];
// Selecteer het modaal venster element
const shoppinModal = document.getElementById("js--shoppinModal");
// Variabele om bij te houden of het modaal venster open is of niet
let modalIsOpen = false;
// Variabelen om bij te houden hoeveel items van elke soort in de winkelwagen zijn
let elden = 0;
let hogwarts = 0;
let resident = 0;
let star = 0;
let street = 0;
let mortal = 0;

// Voeg klikgebeurtenissen toe aan de "addToCart" knoppen
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].onclick = function () {
    // Verhoog het aantal items in de winkelwagen
    cartMessage += 1;
    // Update de weergave van het winkelwagenbericht op de pagina
    cartMessageValue.innerHTML = cartMessage;
    
    // Bepaal welk product is toegevoegd op basis van de dataset van de geklikte knop
    switch (addToCartButtons[i].dataset.product) {
      case "elden":
        elden += 1;
        break;
      case "hogwarts":
        hogwarts += 1;
        break;
      case "resident":
        resident += 1;
        break;
      case "star":
        star += 1;
        break;
      case "street":
        street += 1;
        break;
      case "mortal":
        mortal += 1;
        break;
    }

    // Als het modaal venster nog niet geopend is, open het dan en sluit het na 2 seconden
    if (modalIsOpen === false) {
      shoppinModal.style.display = "flex";
      modalIsOpen = true;
      setTimeout(function () {
        shoppinModal.style.display = "none";
        modalIsOpen = false;
      }, 2000);
    }
  };
}

// Verberg het linkerpijlsymbool
document.getElementsByClassName("fa-arrow-left")[0].style.display = "none";

// Selecteer de "checkout" knop
const checkoutButton = document.getElementById("js--checkoutButton");
// Selecteer het afrekenvenster
const checkoutWindow = document.getElementById("js--checkoutWindow");
// Variabele om bij te houden of het afrekenvenster open is of niet
let checkoutIsOpen = false;

// Klikgebeurtenis voor de "checkout" knop
checkoutButton.onclick = function () {
  // Als het afrekenvenster nog niet geopend is, open het dan
  if (checkoutIsOpen === false) {
    document.querySelector("main").style.display = "none";
    document.getElementsByClassName("fa-arrow-left")[0].style.display = "block";
    document.querySelector(".container").style.display = "none";
    checkoutWindow.style.display = "block";
    checkoutIsOpen = true;
    document.getElementsByClassName("fa-arrow-left")[0].style.display = "block";
    document.getElementById("js--amount-elden").innerHTML = elden + "x";
    document.getElementById("js--prijs-elden").innerHTML = "€" + elden * 52;
    document.getElementById("js--amount-hogwarts").innerHTML = hogwarts + "x";
    document.getElementById("js--amount-resident").innerHTML = resident + "x";
    document.getElementById("js--amount-star").innerHTML = star + "x";
    document.getElementById("js--amount-street").innerHTML = street + "x";
    document.getElementById("js--amount-mortal").innerHTML = mortal + "x";
    document.getElementById("js--prijs-hogwarts").innerHTML = "€" + hogwarts * 41;
    document.getElementById("js--prijs-resident").innerHTML = "€" + resident * 40;
    document.getElementById("js--prijs-star").innerHTML = "€" + star * 47;
    document.getElementById("js--prijs-street").innerHTML = "€" + street * 50;
    document.getElementById("js--prijs-mortal").innerHTML = "€" + mortal * 57;
    document.getElementsByClassName("fa-cart-shopping")[0].style.display =
      "none";
    document.getElementsByClassName("searchBar__glass")[0].style.display =
      "none";
    return;
  }
  // Als het afrekenvenster al geopend is, sluit het dan
  document.getElementsByClassName("fa-arrow-left")[0].style.display = "none";
  document.querySelector("main").style.display = "block";
  checkoutWindow.style.display = "none";
  checkoutIsOpen = false;
  searchBar.style.display = "block";
  document.getElementsByClassName("fa-cart-shopping")[0].style.display =
    "block";
  document.getElementsByClassName("searchBar__glass")[0].style.display = "flex";
};

