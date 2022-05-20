// Welcome Message dynamic content
function welcomeMessage() {
  var name = prompt("Enter your name");
  var message = document.getElementById("welcomeText");
  var btn = document.getElementById("nameBtn");

  btn.style.display = "none";
  message.innerText = "Welcome " + name + "!!";
}

// Email and Email Confirm Match Checker
function emailChecker() {
  var email = document.getElementById("email").value;
  var confirmEmail = document.getElementById("confirmEmail").value;

  var contactForm = document.getElementById("right-container");

  if (email != confirmEmail) {
    alert("Emails do not match.");
    return false;
  } else {
    alert("Message sent successfully");
    return true;
  }
}
