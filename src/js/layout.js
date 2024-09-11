// Function to load HTML content into a specified element
function loadHTML(url, elementId) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

// Load header and footer when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Adjust paths based on the location of the HTML file
  loadHTML("../components/header.html", "header");
  loadHTML("../components/footer.html", "footer");
});
