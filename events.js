//div 1

document.addEventListener("mousemove", myRandomFunction);

function myRandomFunction() {
  document.getElementById("divOne").innerHTML = Math.random();
};


//document.getElementById("button").addEventListener("click", displayDate);


// div two
var y = document.getElementById("MtBtn1");
if (y.addEventListener) {
    y.addEventListener("click", date);
}else if (y.attachEvent){
    y.attachEvent("onclick", date);
}

function date(){document.getElementById("time").innerHTML = Date();};

//div three

function mOver(obj) {
  obj.style.backgroundColor = "green";
  obj.innerHTML = "You see :)"
};

function mOut(obj) {
  obj.style.backgroundColor = "lavender";
  obj.innerHTML = "I'll change color anytime you hover over me"
};

//div four
function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
};

function mUp(obj) {
  obj.style.backgroundColor="#B94A38";
  obj.innerHTML="Thank You";
};

//div five
var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);


function myFunction() {
  document.getElementById("demo").innerHTML += "Moused over!<br>";
};