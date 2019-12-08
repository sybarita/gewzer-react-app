function bioCheck() {
  function btnReset(i, text) {
    return text === "show fax" ? "hide fax" : "show fax";
  };
  this.innerHTML = btnReset(0, this.innerHTML);
}

document.getElementById("bioButton").addEventListener("click", bioCheck);

function picCheck() {
  $(this).text(function(i, text) {
    return text === "show pix" ? "hide pix" : "show pix";
  });
}

document.getElementById("pixButton").addEventListener("click", picCheck);

function trakCheck() {
  $(this).text(function(i, text) {
    return text === "show trax" ? "hide trax" : "show trax";
  });
}

document.getElementById("traxButton").addEventListener("click", trakCheck);

// section 

$("h1").mouseover(function() {
  $("h1").css("color", "#fff6");
});

$("h1").mouseleave(function() {
  $("h1").css("color", "lightpink");
});

$("#bioButton").mouseover(function() {
  $("#bioBox").slideToggle();
});

$("#pixButton").mouseover(function() {
  $("#picBox").slideToggle();
});

$("#traxButton").mouseover(function() {
  $("#soundCloud").slideToggle();
});

$("#footer").mouseover(function() {
  $("#footer").css("color", "#ffff");
  $("#footer").css("font-size", "17pt");
});

$("#footer").mouseleave(function() {
  $("#footer").css("color", "#fff6");
  $("#footer").css("font-size", "16pt");
});

// section

var cursorArray = [
  "url(/cursors/fresa.cur), auto", 
  "url(/cursors/sword.cur), auto",
  "url(/cursors/bug.cur), auto"  
  ]

var rand = cursorArray[~~(Math.random() * cursorArray.length | 0)];

$(document.body).css("cursor", rand);

//start keypress app

function x(keyCode, audioId) {
  document.addEventListener("keydown", function(e) {
    if (e.keyCode === keyCode) {
      document.getElementById(audioId).play();
    }
  });
}

x(71, "helados1");
x(69, "helados2");
x(87, "helados3");
x(90, "helados4");
x(82, "helados5");

// end keypress app
