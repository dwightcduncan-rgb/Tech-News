document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            formMessage.textContent =
                "Thank you for contacting Tech News. Your message has been received.";

            formMessage.style.color = "green";
            formMessage.style.fontWeight = "bold";
            formMessage.style.marginTop = "20px";

            contactForm.reset();
        });
    }
});