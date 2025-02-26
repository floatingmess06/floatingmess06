// This file should be saved in your GitHub profile repository as 'assets/js/script.js'
// You'll need to include this in your README using an HTML comment hack

document.addEventListener("DOMContentLoaded", function () {
  // Get all terminal command elements
  const commands = document.querySelectorAll(".command-trigger");
  const outputSections = document.querySelectorAll(".command-output");

  // Hide all output sections initially except the first one
  outputSections.forEach((section, index) => {
    if (index !== 0) section.style.display = "none";
  });

  // Add click event listeners to each command
  commands.forEach((cmd, index) => {
    cmd.addEventListener("click", function () {
      // Toggle visibility of the corresponding output
      const output = outputSections[index];
      if (output.style.display === "none") {
        // Hide all outputs first
        outputSections.forEach((section) => {
          section.style.display = "none";
        });
        // Show the selected output
        output.style.display = "block";

        // Simulate typing effect
        const text = output.textContent;
        output.textContent = "";
        let i = 0;
        const typeWriter = setInterval(() => {
          if (i < text.length) {
            output.textContent += text.charAt(i);
            i++;
          } else {
            clearInterval(typeWriter);
          }
        }, 10);
      }
    });
  });

  // Terminal cursor blinking effect
  const cursor = document.querySelector(".cursor");
  setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
  }, 500);
});
