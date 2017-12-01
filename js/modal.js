var button = document.querySelector(".booking-btn");
var popup = document.querySelector(".booking-form");
var form = document.querySelector(".booking-form");
var input = document.querySelector(".booking-input");
var count = document.querySelector(".count-input");

button.addEventListener("click", function (Event) {
    Event.preventDefault();
    popup.classList.toggle("booking-form");
    popup.classList.toggle("modal-close");
});

form.addEventListener("submit", function(Event) {
    if (input.value || count.value) {
        Event.preventDefault();
        console.log("Нужно ввести данные");
    }
})