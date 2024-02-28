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
  formOutput.forEach(function(paragraph) {
    paragraph.style.display = "block";
  });
}