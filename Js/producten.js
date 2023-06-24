let allGames = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

setInterval(function () {
  document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);

for (let i = 0; i < filters.length; i++) {
  filters[i].checked = true;
}

// Soulslike filter
let soulslikeFilter = document.getElementById("checkbox-soulslike");
soulslikeFilter.onchange = function () {
  if (soulslikeFilter.checked === true) {
    for (let i = 0; i < allGames.length; i++) {
      if (allGames[i].dataset.category === "soulslike") {
        allGames[i].style.display = "block";
      }
    }
  } else {
    for (let i = 0; i < allGames.length; i++) {
      if (allGames[i].dataset.category === "soulslike") {
        allGames[i].style.display = "none";
      }
    }
  }
};

// RPG filter
let rpgFilter = document.getElementById("checkbox-rpg");
rpgFilter.onchange = function () {
  if (rpgFilter.checked === true) {
    for (let i = 0; i < allGames.length; i++) {
      if (allGames[i].dataset.category === "rpg") {
        allGames[i].style.display = "block";
      }
    }
  } else {
    for (let i = 0; i < allGames.length; i++) {
      if (allGames[i].dataset.category === "rpg") {
        allGames[i].style.display = "none";
      }
    }
  }
};

// Action filter
let actionFilter = document.getElementById("checkbox-action");
actionFilter.onchange = function () {
  if (actionFilter.checked === true) {
    for (let i = 0; i < allGames.length; i++) {
      if (allGames[i].dataset.category === "action") {
        allGames[i].style.display = "block";
      }
    }
  } else {
    for (let i = 0; i < allGames.length; i++) {
      if (allGames[i].dataset.category === "action") {
        allGames[i].style.display = "none";
      }
    }
  }
};

// Selecteer alle knoppen met de class "games__button"
const addToCartButtons = document.getElementsByClassName("games__button");
// Variabele om het aantal items in de winkelwagen bij te houden
let cartMessage = 0;
// Selecteer het element waar het winkelwagenbericht wordt weergegeven
const cartMessageValue = document.getElementsByClassName(
  "shoppingCart__message"
)[0];
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
// Selecteer het linkerpijlsymbool
const leftArrow = document.querySelector(".fa-arrow-left");

// Klikgebeurtenis voor het linkerpijlsymbool
leftArrow.onclick = function () {
  // Verberg het afrekenvenster
  checkoutWindow.style.display = "none";
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  // Reset de variabele om bij te houden of het afrekenvenster open is of niet
  checkoutIsOpen = false;

  // Toon de hoofdpagina
  document.querySelector("main").style.display = "block";
  document.querySelector(".container").style.display = "block";
  document.querySelector(".navbar").style.display = "flex";
  document.querySelector(".header").style.display = "flex";
  document.getElementsByClassName("searchBar__glass")[0].style.display = "flex";
};

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
    document.querySelector(".container").style.display = "none";
    document.querySelector(".navbar").style.display = "none";
    document.querySelector(".header").style.display = "none";

    checkoutWindow.style.display = "block";
    checkoutIsOpen = true;
    document.getElementById("js--amount-elden").innerHTML = elden + "x";
    document.getElementById("js--prijs-elden").innerHTML = "€" + elden * 42;
    document.getElementById("js--amount-hogwarts").innerHTML = hogwarts + "x";
    document.getElementById("js--amount-resident").innerHTML = resident + "x";
    document.getElementById("js--amount-star").innerHTML = star + "x";
    document.getElementById("js--amount-street").innerHTML = street + "x";
    document.getElementById("js--amount-mortal").innerHTML = mortal + "x";
    document.getElementById("js--prijs-hogwarts").innerHTML =
      "€" + hogwarts * 41;
    document.getElementById("js--prijs-resident").innerHTML =
      "€" + resident * 40;
    document.getElementById("js--prijs-star").innerHTML = "€" + star * 47;
    document.getElementById("js--prijs-street").innerHTML = "€" + street * 50;
    document.getElementById("js--prijs-mortal").innerHTML = "€" + mortal * 57;
    document.getElementsByClassName("searchBar__glass")[0].style.display =
      "none";
    return;
  }
  // Als het afrekenvenster al geopend is, sluit het dan
  document.querySelector("main").style.display = "none";
  document.querySelector(".container").style.display = "none";
  checkoutWindow.style.display = "none";
  checkoutIsOpen = false;
  searchBar.style.display = "block";
  document.getElementsByClassName("fa-cart-shopping")[0].style.display = "none";
  document.getElementsByClassName("searchBar__glass")[0].style.display = "flex";
};

//prijs filter//
function changeProduct() {
  let select = document.getElementById("prijs");
  let selectedOption = select.options[select.selectedIndex].text;

  let games = document.getElementsByClassName("games__game");

  // Loop through all the games and show/hide based on the selected price range
  for (let i = 0; i < games.length; i++) {
    let game = games[i];
    let priceElement = game.querySelector(".games__h2");

    if (priceElement) {
      let price = parseFloat(priceElement.innerText.replace("€", ""));

      // Show the game if it falls within the selected price range
      if (selectedOption === "Prijs" || isPriceInRange(selectedOption, price)) {
        game.style.display = "block";
      } else {
        game.style.display = "none";
      }
    }
  }
}

function isPriceInRange(range, price) {
  let rangeValues = range.split("-");
  let minPrice = parseFloat(rangeValues[0].replace("€", ""));
  let maxPrice = parseFloat(rangeValues[1].replace("€", ""));

  return price >= minPrice && price <= maxPrice;
}
