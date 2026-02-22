/*
  SCRIPT FOR: linking-css-and-js.html

  WHAT:
    A tiny JavaScript file that reacts when the user clicks a button.

  HOW:
    1. Open the browser's developer tools (usually F12).
    2. Go to the "Console" tab.
    3. Click the "Click me" button on the page and watch for log messages.

  WHY:
    This demonstrates how external JavaScript files can add interactivity
    without mixing JS directly into your HTML.
*/

// Find the button element in the document using its id.
const button = document.getElementById("click-me-button");

if (button) {
  // Attach a click event handler so we can react when the user clicks.
  button.addEventListener("click", () => {
    console.log("Button was clicked! This message comes from script.js.");
    alert("Hello from script.js! Check the console for more details.");
  });
}

