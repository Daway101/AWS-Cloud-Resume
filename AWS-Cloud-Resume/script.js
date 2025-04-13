// Function to fetch and display the visitor count

document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("visitor-count");

    async function updateCounter() {
        try {
            // Check for localStorage flag
            const hasVisited = localStorage.getItem("hasVisited");

            const url = "https://schgajbnvfbvetins56twigms40axtum.lambda-url.us-east-1.on.aws/";
            let response;

            if (!hasVisited) {
                // First-time visitor - increment counter with POST
                console.log("New visitor: sending POST request");
                response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ visitor: "new" })
                });

                localStorage.setItem("hasVisited", "true");
            } else {
                // Returning visitor - just fetch count with GET
                console.log("Returning visitor: sending GET request");
                response = await fetch(url);
            }

            console.log("Response Status:", response.status);
            const data = await response.json();
            console.log("Visitor Data:", data);

            counter.innerText = ` ${data.count}`;
        } catch (err) {
            console.error("Error fetching visitor count:", err);
        }
    }

    updateCounter();
});





// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.querySelector("nav");
    const overlay = document.querySelector(".menu-overlay");
    const body = document.body;


    // Toggle menu visibility
    nav.classList.toggle("show");
    overlay.classList.toggle("show");

    // Prevent scrolling when menu is open
    if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        overlay.classList.remove("active");
        body.style.overflow = ""; // Re-enable scrolling
    } else {
        nav.classList.add("open");
        overlay.classList.add("active");
        body.style.overflow = "hidden"; // Disable scrolling
    }

    // Detect touch events for mobile devices
    const elements = document.querySelectorAll('.neomorphic');

    // Add touch class on touchstart to simulate hover on mobile
    elements.forEach(el => {
        el.addEventListener('touchstart', function() {
            el.classList.add('touch');
        });

        el.addEventListener('touchend', function() {
        el.classList.remove('touch');
        });
    });
}


