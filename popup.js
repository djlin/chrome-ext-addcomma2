document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const result = params.get("result") || "No result available.";
  
  document.getElementById("result").textContent = decodeURIComponent(result);
});

