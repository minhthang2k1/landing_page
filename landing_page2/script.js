const flightBtn = document.querySelector(".flightBtn");
const hotelBtn = document.querySelector(".hotelBtn");
const rentalBtn = document.querySelector(".rentalBtn");
const flightbooking = document.querySelector(".flightbooking");
const hotelbooking = document.querySelector(".hotelbooking");
const rentalbooking = document.querySelector(".rentalbooking");

hotelBtn.addEventListener("click", function () {
  hotelBtn.classList.add("active");
  flightBtn.classList.remove("active");
  rentalBtn.classList.remove("active");
  hotelbooking.style.display = "block";
  flightbooking.style.display = "none";
  rentalbooking.style.display = "none";
});

flightBtn.addEventListener("click", function () {
  hotelBtn.classList.remove("active");
  flightBtn.classList.add("active");
  rentalBtn.classList.remove("active");
  hotelbooking.style.display = "none";
  flightbooking.style.display = "block";
  rentalbooking.style.display = "none";
});

rentalBtn.addEventListener("click", function () {
  hotelBtn.classList.remove("active");
  flightBtn.classList.remove("active");
  rentalBtn.classList.add("active");
  hotelbooking.style.display = "none";
  flightbooking.style.display = "none";
  rentalbooking.style.display = "block";
});
