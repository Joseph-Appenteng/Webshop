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
