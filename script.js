function updateClock() {
  const now = new Date();

  const formattedDate = now.toLocaleString("en-US", {
    month: "2-digit",   // Numeric month (01–12)
    day: "2-digit",     // Day (01–31)
    year: "numeric",    // Full year
    hour: "numeric",    // Hour
    minute: "2-digit",  // Minutes
    second: "2-digit",  // Seconds
    hour12: true        // 12-hour format with AM/PM
  });

  document.getElementById("timer").textContent = formattedDate;
}

updateClock();              // Run immediately
setInterval(updateClock, 1000); // Update every second