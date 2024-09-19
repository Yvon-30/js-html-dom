
// ----------------------------------------------------------------------------------------------------------------
const element = document.getElementById("intro");

document.getElementById("demo").innerHTML = "The text from the intro paragraph is: " + element.innerHTML;

// ----------------------------------------------------------------------------------------------------------------
const element1 = document.getElementsByTagName("p");

document.getElementById("demo1").innerHTML = 'The text in first paragraph (index 0) is: ' + element1[0].innerHTML;

// ----------------------------------------------------------------------------------------------------------------
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

document.getElementById("demo2").innerHTML = 'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;

// ----------------------------------------------------------------------------------------------------------------
const z = document.getElementsByClassName("intro");
document.getElementById("demo3").innerHTML = 'The first paragraph (index 0) with class="intro" is: ' + z[0].innerHTML;

// ----------------------------------------------------------------------------------------------------------------
const x1 = document.querySelectorAll("p.intro1");
document.getElementById("demo4").innerHTML = 'The first paragraph (index 0) with class="intro" is: ' + x1[0].innerHTML;

// ----------------------------------------------------------------------------------------------------------------
const x2 = document.forms["frm1"];
let text = "";
for (let i = 0; i < x2.length ;i++) {
  text += x2.elements[i].value + "<br>";
}
document.getElementById("demo5").innerHTML = text;