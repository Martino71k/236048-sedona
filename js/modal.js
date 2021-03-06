var button = document.querySelector(".booking-btn");
var form = document.querySelector(".booking-form");
var input_in = document.querySelector(".booking-input-in");
var input_out = document.querySelector(".booking-input-out");
var count_adlt = document.querySelector(".count-input-adults");
var count_chld = document.querySelector(".count-input-children");

form.classList.add("modal-hide");

button.addEventListener("click", function (Event) {
    Event.preventDefault();
    form.classList.toggle("modal-show");
    form.classList.remove("modal-error");
});

form.addEventListener("submit", function (Event) {
    if (!input_in.value || !input_out.value || !count_adlt.value || !count_chld.value) {
        Event.preventDefault();
        form.classList.remove("modal-error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("modal-error");
        console.log("Нужно ввести данные");
    }
});
