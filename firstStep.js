let result = 0;
let sum = 0;
let point = 1;
let count = 0;
let maxQuestions = 10;
disableElement("inputAnswer", true);
disableElement("checkAnswer", true);
disableElement("clearAll", true);

function levelChoice () {
  let level = document.getElementById("level").selectedIndex;
  switch (level) {
    case 0:
      writeInHtml("result", "აირჩიე დონე!", "#C70039");
      break;
    case 1:
      newMathe();
      break;
    case 2:
      newMathe2();
      break;
  }
}

function writeInHtml(idName, value, color) {
  document.getElementById(idName).style.color=color;
  document.getElementById(idName).innerHTML = value;
}

function disableElement(idName, value) {
  document.getElementById(idName).disabled = value;
  if (idName != "inputAnswer") {
    if (value) {
      document.getElementById(idName).style.color="#A0A0A0";
      document.getElementById(idName).style.border="2px solid #A0A0A0";
    }
    else {
      document.getElementById(idName).style.color="#f50057";
      document.getElementById(idName).style.border="2px solid #f50057";
    }
  }
}

function resultPoints(point) {
  result = result + point;
}

function checkAnswerFunction() {
  let answer = parseInt(document.getElementById("inputAnswer").value);
  if (isNaN(answer)) {
    writeInHtml("result", "დაწერეთ პასუხი", "#C70039");
    document.getElementById("inputAnswer").focus();
  }
  else {
    disableElement("checkAnswer", true);
    disableElement("inputAnswer", true);
    if (answer==sum ) {
      resultPoints(point);
      writeInHtml("result", "პასუხი სწორია", "#057323");
      writeInHtml("points", "დაგროვილი ქულები : " + result, "#057323");
      disableElement("newMathe", false);
    }
    else {
      writeInHtml("result", "პასუხი არასწორია", "#C70039");
      writeInHtml("points", "დაგროვილი ქულები : " + result, "#057323");
      disableElement("newMathe", false);
    }

    if (count==maxQuestions) {
      writeInHtml("points", "თქვენ დააგროვეთ " + result + " ქულა " + count + "-დან", "#057323");
      disableElement("checkAnswer", true);
      disableElement("clearAll", false);
      disableElement("newMathe", true);
      count = 0;
    }
  }
}

function newMathe() {
  let x = Math.floor(Math.random()*100);
  let y = Math.floor(Math.random()*100);
  let n ;
  let point = 1;

document.getElementById("inputAnswer").value="";
if (Math.random() >= 0.5) {
  n="+"
  sum = x+y;
}
else {
  n="-"
  sum = x-y;
}

if (sum<=100 && sum>=0) {
  count++;
  writeInHtml("num", x+" "+n+" "+y+"=");
  writeInHtml("result", "დაწერეთ პასუხი", "#057323");
  disableElement("inputAnswer", false);
  disableElement("checkAnswer", false);
  disableElement("newMathe", true);
  // disableElement("level", true);
  document.getElementById("inputAnswer").focus();
} else {
  newMathe();
}

}

function newMathe2() {
  let x = Math.floor(Math.random()*100);
  let y = Math.floor(Math.random()*100);
  let z = Math.floor(Math.random()*100);
  let n;
  let n2;
  let point = 1;
  let tempSum;
  document.getElementById("inputAnswer").value="";
  if (Math.random() >= 0.5) {
    n="+"
    tempSum = x+y;
  }
  else {
    n="-"
    tempSum = x-y;
  }

  if (Math.random() >= 0.5) {
    n2="+"
    sum = tempSum+z;
  }
  else {
    n2="-"
    sum = tempSum-z;
  }

  if ((tempSum<=100 && tempSum>=0) && (sum<=100 && sum>=0)) {
    count++;
    writeInHtml("num", x+" "+n+" "+y+" "+n2+z+" =");
    writeInHtml("result", "დაწერეთ პასუხი", "#057323");
    disableElement("inputAnswer", false);
    disableElement("checkAnswer", false);
    disableElement("newMathe", true);
    document.getElementById("inputAnswer").focus();
  } else {
    newMathe2();
  }
}


function clearAll () {
  disableElement("inputAnswer", true);
  disableElement("checkAnswer", true);
  disableElement("clearAll", true);
  disableElement("newMathe", false);
  disableElement("level", false);
  result = 0;
  count = 0;
  writeInHtml("result", "");
  writeInHtml("points", "დაგროვილი ქულები : " + result);
}

let input = document.getElementById("inputAnswer");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("checkAnswer").click();
  }
});

let next = document;
next.addEventListener("keyup", function(event) {
  if (event.keyCode === 32 || event.keyCode === 39) {
   event.preventDefault();
   document.getElementById("newMathe").click();
   
  }
});
