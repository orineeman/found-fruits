const clicksDiv = document.querySelector(".clicks-div");
const clicksP = document.querySelector(".clicks-p");
const _body = document.querySelector("._body");
const div1 = document.querySelector(".div1");
const zevel = document.querySelector(".zevel");
let conter = 1;

_body.onclick = function () {
  clicksP.textContent = conter;
  conter++;
};

zevel.onclick = function () {
  const divs = document.querySelectorAll(".div1");
  console.log(divs);
  for (let div of divs) {
    div.onclick = function () {
      div.style.display = "none";
    };
  }
};
const lemala = document.querySelector(".lemala");
const yemina = document.querySelector(".yemina");
const smola = document.querySelector(".smola");
const lemata = document.querySelector(".lemata");
const zuz = document.querySelector(".zuz");

zuz.style.top = "30px";
zuz.style.left = "200px";
lemata.onclick = function () {
  let sizeAsInteger = parseInt(zuz.style.top);
  sizeAsInteger = sizeAsInteger + 10;
  zuz.style.top = sizeAsInteger + "px";
};

lemala.onclick = function () {
  let sizeAsInteger = parseInt(zuz.style.top);
  sizeAsInteger = sizeAsInteger - 10;
  zuz.style.top = sizeAsInteger + "px";
};

smola.onclick = function () {
  let sizeAsInteger = parseInt(zuz.style.left);
  sizeAsInteger = sizeAsInteger + 10;
  zuz.style.left = sizeAsInteger + "px";
};

yemina.onclick = function () {
  let sizeAsInteger = parseInt(zuz.style.left);
  sizeAsInteger = sizeAsInteger - 10;
  zuz.style.left = sizeAsInteger + "px";
};

const balon = document.querySelector(".balon");
const lemala2 = document.querySelector(".lemala2");
const lemata2 = document.querySelector(".lemata2");

balon.style.fontSize = "30px";
lemala2.onclick = function () {
  let sizeAsInteger = parseInt(balon.style.fontSize);
  sizeAsInteger = sizeAsInteger * 1.1;
  console.log(sizeAsInteger);
  balon.style.fontSize = sizeAsInteger + "px";
  if (sizeAsInteger > 100) {
    balon.style.display = "none";
    lemala2.style.display = "none";
  }
};
lemata2.onclick = function () {
  let sizeAsInteger = parseInt(balon.style.fontSize);
  sizeAsInteger = sizeAsInteger * 0.9;
  console.log(sizeAsInteger);
  balon.style.fontSize = sizeAsInteger + "px";
};

const startSfira = document.querySelector(".start-sfira");
let stopSfira = document.querySelector(".stop-sfira");
const _in = document.querySelector("._in");
const sfiraDiv = document.querySelector(".sfira");
let num = 0;
startSfira.onclick = function () {
  num = _in.value;
  let interval = setInterval(function sfiraLeahor() {
    if (num > 0) {
      _in.value = num - 1;
      num--;
      stopSfira.onclick = () => stopsfira(interval);
    } else {
      clearInterval(interval);
      _in.value = "";
    }
  }, 1000);
};

function stopsfira(interval) {
  clearInterval(interval);
}
