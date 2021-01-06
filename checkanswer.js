function addbits(s){
    var total= 0, s= s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
    var answer=document.getElementById('inputAnswer').value;
    while(s.length){
        total+= parseFloat(s.shift());
    }

    if (total==answer) {
      document.getElementById("result").style.color = "#057323";
      document.getElementById("result").innerHTML = "სწორია";
    }
    else {
      document.getElementById("result").style.color = "#C70039";
      document.getElementById("result").innerHTML = "ტყუილია";
    }
}

function clearInputs () {
    document.getElementById("result").style.color = "#057323";
    document.getElementById("result").innerHTML = "დაწერე ახალი მაგალითი";
    document.getElementById("inputMathe").value = "";
    document.getElementById('inputAnswer').value = "";
    document.getElementById("inputMathe").focus();
}

let input = document.getElementById("inputAnswer");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("checkAnswer").click();
  }
});

let answ = document.getElementById("inputMathe");
answ.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("inputAnswer").focus();
  }
});

let next = document;
next.addEventListener("keyup", function(event) {
  if (event.keyCode === 32 || event.keyCode === 46) {
   event.preventDefault();
   document.getElementById("newMathe").click();
  }
});


function start () {
  var string = document.getElementById("inputMathe").value;
  addbits(string)
}
