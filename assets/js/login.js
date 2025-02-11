document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Perform login logic here
    if (email === "user@example.com" && password === "password") {
      alert("Login successful!");
      // Redirect to the homepage or dashboard
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
});
