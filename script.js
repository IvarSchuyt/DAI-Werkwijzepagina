let leesMeerInschrijving = document.querySelector(".lees-meer-inschrijving");
let faseInschrijvingTextComplete = document.querySelector(
  ".fase-inschrijving-text-complete"
);
let faseInschrijvingText = document.querySelector(".fase-inschrijving-text");

leesMeerInschrijving.addEventListener("click", showTextInschrijving);
leesMeerInschrijving.addEventListener("click", hideTextInschrijving);

function showTextInschrijving() {
  faseInschrijvingTextComplete.classList.toggle(
    "fase-inschrijving-text-complete-shown"
  );
}

function hideTextInschrijving() {
  faseInschrijvingText.classList.toggle("fase-inschrijving-text-hidden");
}
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

let leesMeerStagevoorstel = document.querySelector(".lees-meer-stagevoorstel");
let faseStagevoorstelTextComplete = document.querySelector(
  ".fase-stagevoorstel-text-complete"
);
let faseStagevoorstelText = document.querySelector(".fase-stagevoorstel-text");

leesMeerStagevoorstel.addEventListener("click", showTextStagevoorstel);
leesMeerStagevoorstel.addEventListener("click", hideTextStagevoorstel);

function showTextStagevoorstel() {
  faseStagevoorstelTextComplete.classList.toggle(
    "fase-stagevoorstel-text-complete-shown"
  );
}

function hideTextStagevoorstel() {
  faseStagevoorstelText.classList.toggle("fase-stagevoorstel-text-hidden");
}

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
