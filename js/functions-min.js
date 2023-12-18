$(document).ready(function () {
  
  console.log("Welcome! This script runs on all pages.");

  
  $(".splashscreen").fadeOut();

  
  var currentIndex = 0;
  var images = [
    "img/dronee.jpg",
    "img/linefollower.jpg",
    "img/machine_plissage.jpeg",
    "img/robot-fighter.jpg"
  ];

  function showImage(index) {
    $("#slideshow-image").attr("src", images[index]);
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  setInterval(nextImage, 5000);
  showImage(currentIndex);

  $("#next-button").click(nextImage);
  $("#prev-button").click(prevImage);

  // Form submission validation
  $("#contact-form").submit(function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Validate form fields
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    // Remove error message if all fields are not empty
    if (name && email && message) {
      $("#error-message").fadeOut();
    }

    if (!name || !email || !message) {
      displayErrorMessage("Please fill in all fields.");
      return;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      displayErrorMessage("Invalid email address. Please enter a valid email.");
      return;
    }

  

    // Display success message
    displaySuccessMessage("Form submitted successfully! Thank you for contacting us.");
  });
});

function displaySuccessMessage(message) {
  $("#success-message").text(message).fadeIn();
}

function displayErrorMessage(message) {
  $("#error-message").text(message).fadeIn();
}
