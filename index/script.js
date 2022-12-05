const progressbar = document.getElementById("bar");

setTimeout(() => changeProgress(1), 10);
setTimeout(() => changeProgress(5), 500);
setTimeout(() => changeProgress(7), 700);
setTimeout(() => changeProgress(10), 1000);
setTimeout(() => changeProgress(20), 3500);
setTimeout(() => changeProgress(40), 4500);
setTimeout(() => changeProgress(50), 5000);
setTimeout(() => changeProgress(70), 8266);
setTimeout(() => changeProgress(90), 10000);
setTimeout(() => changeProgress(95), 12000);
setTimeout(() => changeProgress(98), 14000);
setTimeout(() => changeProgress(100), 16000);

const changeProgress = (bar) => {
  progressbar.style.width = `${bar}%`;
  if (bar < 100) {
    window.addEventListener('scroll', noScroll);

  } else {
    window.removeEventListener('scroll', noScroll);
  }
  if (bar >= 100) {
    document.getElementById("loading").classList.remove("loading");
    document.querySelector(".containerprogress").classList.remove("containerprogress");
    document.querySelector(".progressbar").classList.remove("progressbar");
    document.querySelector(".bar").classList.remove("bar");
    const nv = document.getElementById("loading");
    if (!nv.classList.contains('bar')) {
      document.getElementById("loading").classList.add("loading2");
      document.querySelector(".logobas").classList.add("logobas2");
      document.getElementById("loading").classList.remove("loading");
      document.querySelector(".loading2").innerHTML = "LOADING COMPLETED"


    }
  }
};

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
function noScroll() {
  window.scrollTo(0, 0);
}



var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var form4 = document.getElementById("form4");
var form5 = document.getElementById("form5");

var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var next3 = document.getElementById("next3");
var next4 = document.getElementById("next4");

var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");
var back3 = document.getElementById("back3")
var back4 = document.getElementById("back4")

next1.onclick = function () {
  form2.style.left = "0px";
  form1.style.left = "-750px";
}

next2.onclick = function () {
  form2.style.left = "-750px";
  form3.style.left = "0px";
}

next3.onclick = function () {
  form3.style.left = "-750px";
  form4.style.left = "0px";
}
next4.onclick = function () {
  form4.style.left = "-750px";
  form5.style.left = "0px";
}

back1.onclick = function () {
  form2.style.left = "750px";
  form1.style.left = "0px";

}
back2.onclick = function () {
  form3.style.left = "750px";
  form2.style.left = "0px";

}
back3.onclick = function () {
  form4.style.left = "750px";
  form3.style.left = "0px";

}
back4.onclick = function () {
  form4.style.left = "0px";
  form5.style.left = "750px";

}
function nick() {
  var nickn = document.getElementById('ninp').value;

  document.getElementById('nick').innerHTML = nickn;
}

function Value1() {
  return document.querySelector('input[name="cpu"]:checked').value;
}
function Value2() {
  return document.querySelector('input[name="height"]:checked').value;
}
function Value3() {
  return document.querySelector('input[name="battery"]:checked').value;
}
function Value4() {
  return document.querySelector('input[name="color"]:checked').value;
}

function cpu1() {
  document.getElementById('value1').textContent = Value1();
}
function height1() {
  document.getElementById('value2').textContent = Value2();


}
function battery1() {
  document.getElementById('value3').textContent = Value3();
}
function color1() {
  document.getElementById('value4').textContent = Value4();
}


let diapo = document.getElementsByClassName("slider-1");
let currentSlide = 0;
function show() {
  document.getElementById("deuximemebis").style.display = 'block'
  document.getElementById("coteg").style.display = "none"
  document.getElementById("coted").style.display = "none"
}
document.getElementById("slide-next").addEventListener("click", () => {
  changeSlide(currentSlide + 1)
});
document.getElementById("slide-prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1)
});
document.getElementById("slide-close").addEventListener("click", () => {
  document.getElementById("deuximemebis").style.display = 'none'
  document.getElementById("coteg").style.display = "block"
  document.getElementById("coted").style.display = "block"
});

function changeSlide(moveTo) {
  if (moveTo >= diapo.length) { moveTo = 0; }
  if (moveTo < 0) { moveTo = diapo.length - 1; }

  diapo[currentSlide].classList.toggle("active");
  diapo[moveTo].classList.toggle("active");
  currentSlide = moveTo;
}


 $("input[type='radio']").click(function () {
    var score = getChecklistItems();
    document.getElementById('optiond').textContent = score;
  });
  
  function getChecklistItems() {
    var total_score = 0
    var result = $("input:radio:checked").get();
    var checked_value = $.map(result, function (element) {
      return $(element).attr("value");
    });
    for (i = 0; i < checked_value.length; i++) {
      total_score += parseInt(checked_value[i])
    }
    return total_score
  }