console.log("Loaded script.js")

document.addEventListener("DOMContentLoaded", function () {
    const welcomeText = document.getElementById("welcome-text");
    const options = document.getElementById("options");
    const socialsOption = document.getElementById("socials-option");
    const gamesOption = document.getElementById("games-option");
    const projectsOption = document.getElementById("projects-option");
    const darkScreen = document.querySelector(".dark-screen"); // Get the .dark-screen element
    const content = document.querySelector(".content"); // Get the .content element

    // Function to fade in the "Welcome" text and box when the page loads
    function fadeInWelcomeText() {
        welcomeText.style.opacity = 1; // Set opacity to 1 to make it visible
        content.style.opacity = 1; // Set opacity of the box to 1
    }

    // Function to handle the click on "Welcome" text
    function handleWelcomeTextClick() {
        welcomeText.style.opacity = 0; // Fade out the text
        content.style.opacity = 0; // Fade out the box
        setTimeout(function () {
            welcomeText.style.display = "none"; // Hide "Welcome" text
            content.style.display = "none"; // Hide the box
            options.style.display = "flex"; // Display options
            setTimeout(function () {
                // Fade in options
                options.classList.remove("hidden");
                socialsOption.style.opacity = 1;
                gamesOption.style.opacity = 1;
                projectsOption.style.opacity = 1;
                setTimeout(function () {
                    // Fade in the box with new text options
                    content.style.display = "block"; // Display the box
                    setTimeout(function () {
                        content.style.opacity = 1; // Fade in the box
                    }, 100);
                }, 500); // Wait before fading in the box with new options
            }, 100);
        }, 500); // Wait for fade-out animation to complete
    }

    // Trigger the fade-in animation when the page loads
    fadeInWelcomeText();

    // Add a click event listener to the "Welcome" text
    welcomeText.addEventListener("click", handleWelcomeTextClick);

    // Function to handle clicks on options (e.g., "Socials")
    socialsOption.addEventListener("click", function () {
        // Handle the click action for "Socials" option
    });

    // Repeat the above function for "Games" and "Projects" options

    // Add the .fade-in class to the .dark-screen container when the page loads
    darkScreen.classList.add("fade-in");
});
