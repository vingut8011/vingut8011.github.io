document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");
    const universityResources = document.getElementById("universityResources");
    const personalProjects = document.getElementById("personalProjects");

    if (projects.length < 3) {
        universityResources.style.display = "block";
        personalProjects.style.display = "block";
    } else {
        universityResources.style.display = "none";
        personalProjects.style.display = "block";
    }

    const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];
    const skillsList = document.getElementById("skillsList");

    for (let i = 0; i < skills.length; i++) {
        const li = document.createElement("li");
        li.textContent = skills[i];
        skillsList.appendChild(li);
    }

    const toggle = document.getElementById("darkModeToggle");
    toggle.addEventListener("change", function () {
        document.body.classList.toggle("dark-mode");
    });

    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you, " + nameInput.value + ", your message has been sent!");
    });
});