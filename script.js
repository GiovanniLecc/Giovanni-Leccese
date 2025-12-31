// funzione per il download
function startDownload(btn) {
  const url = btn.getAttribute("data-report-url"); // get url

  // barra progresso
  const progressContainer = btn
    .closest(".download-action")
    .querySelector(".progress");
  const progressBar = btn
    .closest(".download-action")
    .querySelector(".progress-bar");

  // test per url
  if (!url) {
    alert("Link del report mancante.");
    return;
  }
   
    btn.disabled = true; // disabilita il bottone per evitare più clic
    btn.textContent = "Avvio..."; // cambia il testo del bottone 
    progressContainer.classList.remove("d-none"); // mostra barra progresso
    progressBar.style.width = "0%"; // inizializza la barra
    let progress = 0; //variabile per la percentuale

    // intervallo che simula l'avanzamento del download
    const interval = setInterval(() => {
      progress = Math.min(progress + 10, 90);
      progressBar.style.width = progress + "%";
    }, 120);

    // apre il file del report in una nuova scheda del browser
    window.open(url, "_blank");

    // timer per download
    setTimeout(() => {
      clearInterval(interval); // ferma l'intervallo
      progressBar.style.width = "100%";
      btn.textContent = "Download completato"; // cambia testo bottone

      // timer per ripristinare il bottone
      setTimeout(() => {
        progressContainer.classList.add("d-none");
        btn.disabled = false; // riabilita il vottone 
        btn.textContent = "Download"; // ripristina testo bottone 
        progressBar.style.width = "0%"; // ripristina barra progresso
      }, 600); 
    }, 1200); 
  }