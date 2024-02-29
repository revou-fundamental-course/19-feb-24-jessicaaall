/*
var nameUser;
while (!nameUser) {
  var nameInput = prompt("Please enter your name.");
  if (nameInput !== null && nameInput.trim() !== "") {
    nameUser = nameInput;
  }
}
document.getElementById("nameUser").innerText = nameUser;
*/

function setTitle(element) {
  const text = element.innerText;

  document.title = `${text}`;
}

function seeMoreButton() {
  const bannerHeight = document.getElementById("home-banner").clientHeight;
  const headerHeight =
    document.getElementsByClassName("header")[0].clientHeight;

  window.scrollBy(0, bannerHeight - headerHeight);
}

var slideIndex = 0;
showDivs();

function showDivs() {
  var i;
  var x = document.getElementsByClassName("slide-banner");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(showDivs, 5000);
}

const navbarHeight = document.querySelector("nav").clientHeight;

document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    const targetOffsetTop = targetSection.offsetTop;

    window.scrollTo({
      top: targetOffsetTop - navbarHeight,
      behavior: "smooth",
    });
  });
});

var currentPortfolio = 0;
const totalDisplay = document.querySelectorAll(".room-profile").length;
updateDisplay();

document.querySelector(".prev-button").addEventListener("click", function () {
  currentPortfolio =
    currentPortfolio === 0 ? totalDisplay - 1 : currentPortfolio - 1;
  updateDisplay();
});

document.querySelector(".next-button").addEventListener("click", function () {
  currentPortfolio =
    currentPortfolio === totalDisplay - 1 ? 0 : currentPortfolio + 1;
  updateDisplay();
});

function updateDisplay() {
  const displays = document.querySelectorAll(".room-profile");
  displays.forEach((slide) => {
    slide.style.display = "none";
  });
  displays[currentPortfolio].style.display = "flex";
  displays[currentPortfolio].style.justifyContent = "center";
}

var today = new Date();
var formattedToday = today.toISOString().split("T")[0];
document.getElementById("inputbirthdate").setAttribute("max", formattedToday);

function validateForm() {
  const name = document.forms["form"]["name"].value;
  const birthDate = document.forms["form"]["birth-date"].value;
  const gender = document.forms["form"]["gender"].value;
  const message = document.forms["form"]["message"].value;

  if (name == "" || birthDate == "" || gender == "" || message == "") {
    alert("Please complete the form.");
    return false;
  }
  setSubmitData(name, birthDate, gender, message);
  return false;
}

function setSubmitData(name, birthDate, gender, message) {
  var currentDate = new Date();
  document.getElementById("current-time").innerText = currentDate;
  document.getElementById("submit-name").innerText = name;
  document.getElementById("submit-birth-date").innerText = birthDate;
  document.getElementById("submit-gender").innerText = gender;
  document.getElementById("submit-message").innerText = message;

  var formOutput = document.querySelectorAll(".form-output p");
  formOutput.forEach(function (paragraph) {
    paragraph.style.display = "block";
  });
}
