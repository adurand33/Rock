// assign elements

var title = GetElt("title");
var gameplay = GetElt("gameplay");
var liveupdate = GetElt("liveupdate");
var livebalance = GetElt("livebalance");
var startover = GetElt("startover");

var mystone = GetElt("mystone");
var mypaper = GetElt("mypaper");
var myscissors = GetElt("myscissors");

// human

mystone.addEventListener("click", function () {

  const machine = Randomize(1, 3);

  PlayStone(machine);
});

mypaper.addEventListener("click", function () {

  const machine = Randomize(1, 3);

  PlayPaper(machine);
});

myscissors.addEventListener("click", function () {

  const machine = Randomize(1, 3);

  PlayScissors(machine);
});

// startover

startover.addEventListener("click", function () { Reset(); });

// human play

function PlayStone(machine) {

  Play(machine, machine == 3 ? "win" : (machine == 2 ? "loose": "deuce"));
}

function PlayPaper(machine) {

  Play(machine, machine == 1 ? "win" : (machine == 3 ? "loose": "deuce"));
}

function PlayScissors(machine) {

  Play(machine, machine == 2 ? "win" : (machine == 1 ? "loose": "deuce"));
}

// machine response

function Play(random, result) {

  if (random <= 0 || random > 3) return;

  let imgs = gameplay.querySelectorAll("img");
  let h2s = gameplay.querySelectorAll("h2");
  let has = (imgs.length == 2 && h2s.length == 1) ? true : false;

  if (!has) return;

  let liveupdateimg = imgs[0];
  let liverobotimg = imgs[1];
  let livebalanceh2 = h2s[0];

  has = liveupdateimg != null && liverobotimg != null && livebalanceh2 != null ? true : false;

  if (!has) return;

  let scores = [0, 0];

  GetScores(livebalanceh2.textContent, scores);

  switch (result) {

    case "win": scores[0]++; break; // human score
    case "loose": scores[1]++; break; // random score
  }

  let balance = scores[0] + " / " + scores[1];

  livebalanceh2.textContent = balance;

  liveupdateimg.src = random == 1 ? "img/1stone.png" : (random == 2 ? "img/2paper.png" : "img/3scissors.png");

  liverobotimg.src = result == "win" ? "img/bwin.png" : (result == "loose" ? "img/cloose.png" : "img/ddeuce.png");
}

// reset

function Reset() {

  const humanwins = "↣↣↣ H u m a n   W i n s ↢↢↢";
  const machinewins = "↝↝↝ M a c h i n e   W i n s ↜↜↜";
  const deuce = "←←← D E U C E →→→";

  let imgs = gameplay.querySelectorAll("img");
  let h2s = gameplay.querySelectorAll("h2");
  let has = (imgs.length == 2 && h2s.length == 1) ? true : false;

  if (!has) return;

  let liveupdateimg = imgs[0];
  let liverobotimg = imgs[1];
  let livebalanceh2 = h2s[0];

  has = liveupdateimg != null && liverobotimg != null && livebalanceh2 != null ? true : false;

  if (!has) return;

  let scores = [0, 0];

  GetScores(livebalanceh2.textContent, scores);

  message = scores[0] > scores[1] ? humanwins : (scores[1] > scores[0] ? machinewins : deuce);

  window.alert(message);

  livebalanceh2.textContent = "0 / 0";

  liveupdateimg.src = "img/aquestion.png";
  liverobotimg.src = "img/aquestion.png";
}

// dom element

function GetElt(id) {

  return document.getElementById(id);
}

// randomize

function Randomize(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min)
}

// extract scores

function GetScores(balance, scores) {

  let index = human = machine = 0;
  let temp = "";

  index = balance.indexOf("/")

  temp = balance.slice(0, index-1);
  human = parseInt(temp);

  temp = balance.slice(index+1, balance.length)
  machine = parseInt(temp);

  scores[0] = human;
  scores[1] = machine;
}

// timer

function Wait() {

  for (i = 0; i < 10000; i++) {
    for (j = 0; j < 10000; j++) {
    }
  }
}