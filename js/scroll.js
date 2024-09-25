document.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth; // Normalize x-position
    const y = e.clientY / window.innerHeight; // Normalize y-position

    // Set the base colors for the gradient
    const baseColor1 = { r: 255, g: 126, b: 109 }; // Peach
    const baseColor2 = { r: 111, g: 179, b: 255 }; // Pigeon Blue

    // Calculate the new RGB values based on mouse position
    const color1 = `rgb(${Math.floor(baseColor1.r - x * 50)}, ${Math.floor(baseColor1.g + x * 100)}, ${Math.floor(baseColor1.b + y * 100)})`; // Light peach variation
    const color2 = `rgb(${Math.floor(baseColor2.r + x * 50)}, ${Math.floor(baseColor2.g + y * 100)}, ${Math.floor(baseColor2.b - y * 50)})`; // Light blue variation

    // Create a new gradient based on calculated colors
    const newColor = `linear-gradient(to right, ${color1}, ${color2})`;
    document.body.style.background = newColor; // Update background
});

// Initial background gradient
document.body.style.background = "linear-gradient(to right, #ff7e6d, #6fb3ff)"; // Brighter peach and pigeon blue gradient


