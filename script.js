// ================= CUSTOM DROPDOWN =================
document.addEventListener("DOMContentLoaded", function () {

  function setupDropdown(id) {
    const select = document.getElementById(id);
    if (!select) return;

    const selected = select.querySelector(".selected");
    const options = select.querySelector(".options");

    selected.addEventListener("click", function (e) {
      e.stopPropagation();

      // close all
      document.querySelectorAll(".options").forEach(opt => {
        opt.style.display = "none";
      });

      options.style.display = "block";
    });

    options.querySelectorAll("div").forEach(option => {
      option.addEventListener("click", function () {
        selected.innerText = this.innerText;
        options.style.display = "none";
      });
    });
  }

  setupDropdown("locationSelect");
  setupDropdown("productSelect");

  document.addEventListener("click", function () {
    document.querySelectorAll(".options").forEach(opt => {
      opt.style.display = "none";
    });
  });

});

// ================= WHATSAPP FUNCTION =================

function sendWhatsApp() {

  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();
  
  let location = document.querySelector("#locationSelect .selected").innerText;
  let product = document.querySelector("#productSelect .selected").innerText;

  let problem = document.getElementById("problem").value.trim();

  // Validation
  if (name === "" || phone === "" || location === "Select Location" || product === "Select Product") {
    alert("Please fill all required fields");
    return;
  }

  // WhatsApp message
  let message = `New Service Request:
Name: ${name}
Phone: ${phone}
Location: ${location}
Product: ${product}
Problem: ${problem}`;

  let url = "https://wa.me/917073213013?text=" + encodeURIComponent(message);

  // Open WhatsApp
  window.open(url, "_blank");
}