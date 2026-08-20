// ===============================
// MOBILE MENU
// ===============================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ===============================
// APPOINTMENT FORM
// ===============================

const appointmentForm =
    document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const service =
        document.getElementById("service").value;

    alert(
        `Thank you, ${name}!\n\n` +
        `Your appointment request for ${service} ` +
        `has been received.\n\n` +
        `Our team will contact you shortly.`
    );

    appointmentForm.reset();

});