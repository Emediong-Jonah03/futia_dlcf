document.addEventListener("DOMContentLoaded", async () => {
    const dateEl = document.getElementById("devotion-date");
    const verseEl = document.getElementById("devotion-verse");
    const textEl = document.getElementById("devotion-text");
  
    try {
      const response = await fetch("daily-devotions.json");
      const devotions = await response.json();
  
      const today = new Date();
      const dateKey = today.toISOString().slice(0, 10); // e.g., "2025-07-05"
  
      const devotion = devotions[dateKey];
  
      if (devotion) {
        dateEl.textContent = new Date(dateKey).toDateString();
        verseEl.textContent = devotion.verse;
        textEl.innerHTML = `<p>${devotion.message}</p>`;
      } else {
        dateEl.textContent = new Date().toDateString();
        verseEl.textContent = "No devotion found for today";
        textEl.innerHTML = `<p>Please check back later or contact the site admin.</p>`;
      }
    } catch (error) {
      console.error("Error loading devotions:", error);
      dateEl.textContent = "Error";
      verseEl.textContent = "Unable to load devotion.";
      textEl.innerHTML = `<p>Check your internet connection or try again later.</p>`;
    }
  });
  