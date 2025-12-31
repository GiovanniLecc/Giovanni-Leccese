function startDownload(btn) {
  const url = btn.getAttribute("data-report-url");
  const progressContainer = btn.closest(".download-action").querySelector(".progress");
  const progressBar = btn.closest(".download-action").querySelector(".progress-bar");

  if (!url) {
    alert("Link del report mancante.");
    return;
  }

  btn.disabled = true;
  btn.textContent = "Avvio...";
  progressContainer.classList.remove("d-none");
  progressBar.style.width = "0%";

  let progress = 0;
  const interval = setInterval(() => {
    progress = Math.min(progress + 10, 90);
    progressBar.style.width = progress + "%";
  }, 120);

  window.open(url, "_blank");

  setTimeout(() => {
    clearInterval(interval);
    progressBar.style.width = "100%";
    
    setTimeout(() => {
          progressContainer.classList.add("d-none");
          btn.disabled = false;
          btn.textContent = "Download";
          progressBar.style.width = "0%";
        }, 600);
      }, 1200);
    }