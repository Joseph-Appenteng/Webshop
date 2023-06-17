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

//soulslike filter
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

//rpg
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

//action
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
