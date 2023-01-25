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

let leesMeerVoorbereiding = document.querySelector(".lees-meer-voorbereiding");
let faseVoorbereidingTextComplete = document.querySelector(
  ".fase-voorbereiding-text-complete"
);
let faseVoorbereidingText = document.querySelector(".fase-voorbereiding-text");

leesMeerVoorbereiding.addEventListener("click", showTextVoorbereiding);
leesMeerVoorbereiding.addEventListener("click", hideTextVoorbereiding);

function showTextVoorbereiding() {
  faseVoorbereidingTextComplete.classList.toggle(
    "fase-voorbereiding-text-complete-shown"
  );
}

function hideTextVoorbereiding() {
  faseVoorbereidingText.classList.toggle("fase-voorbereiding-text-hidden");
}

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

let sidebarButton = document.querySelector(".sidebar-button");
let sidebar = document.querySelector(".sidebar");
let sidebarClose = document.querySelector(".sidebar-button-close");

sidebarButton.addEventListener("click", showSidebar);
sidebarClose.addEventListener("click", closeSidebar);

function showSidebar() {
  sidebar.classList.add("sidebar-shown");
}
function closeSidebar() {
  sidebar.classList.remove("sidebar-shown");
}
