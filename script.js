document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    
    themeToggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const responseDiv = document.getElementById("form-response");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            responseDiv.style.display = "block";
            responseDiv.innerHTML = `<p>Спасибо, ${name}! Ваше сообщение отправлено.</p>`;
            form.reset(); 
        }
    });
});
