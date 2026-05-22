const openApp = document.getElementById("openApp");

const home = document.getElementById("home");

const app = document.getElementById("app");

/* BOTÕES */
const liveBtn = document.getElementById("liveBtn");

const ticketBtn = document.getElementById("ticketBtn");

const infoBtn = document.getElementById("infoBtn");

/* SEÇÕES */
const liveSection = document.getElementById("liveSection");

const ticketSection = document.getElementById("ticketSection");

const infoSection = document.getElementById("infoSection");

/* STATUS */
const statusText = document.getElementById("statusText");

/* ENTRAR */
openApp.addEventListener("click", () => {

  home.classList.remove("active");

  app.classList.add("active");

});

/* ESCONDER TUDO */
function hideAll(){

  liveSection.classList.add("hidden");

  ticketSection.classList.add("hidden");

  infoSection.classList.add("hidden");

}

/* VOO AO VIVO */
liveBtn.addEventListener("click", () => {

  hideAll();

  liveSection.classList.remove("hidden");

});

/* PASSAGEM */
ticketBtn.addEventListener("click", () => {

  hideAll();

  ticketSection.classList.remove("hidden");

});

/* INFO */
infoBtn.addEventListener("click", () => {

  hideAll();

  infoSection.classList.remove("hidden");

});

/* STATUS DO VOO */
const flightStatus = [

  "Preparando aeronave...",
  "Portões abertos para embarque...",
  "Taxiando para pista...",
  "Acelerando na pista...",
  "Decolando...",
  "Subindo altitude...",
  "Em voo sobre o oceano...",
  "Cruzeiro estabilizado...",
  "Iniciando descida...",
  "Aproximando de Lisboa...",
  "Pousando em Lisboa...",
  "Aeronave estacionada em Lisboa."

];

let current = 0;

const interval = setInterval(() => {

  statusText.innerText = flightStatus[current];

  current++;

  if(current >= flightStatus.length){

    clearInterval(interval);

  }

}, 3000);