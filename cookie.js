// Add JavaScript code for your web site here and call it from index.html.
document.addEventListener("DOMContentLoaded", function () {
  const notice = document.getElementById("cookie-notice");
  const acceptBtn = document.getElementById("accept-cookie");

  if (!notice || !acceptBtn) return; // Fail silently if elements not found

  // Hide if user already accepted
  if (localStorage.getItem("cookieConsent") === "true") {
    notice.style.display = "none";
  }

  // Accept button click
  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "true");
    notice.style.display = "none";
  });
});
