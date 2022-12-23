let name = document.getElementById("name");
let email = document.getElementById("email");
let mobail = document.getElementById("mobail");
let dob = document.getElementById("dob");
let male = document.getElementById("male");
let female = document.getElementById("female");

let html = document.getElementById("html");
let css = document.getElementById("css");
let js = document.getElementById("js");

//for submit button
document.getElementById("submit").addEventListener("click", () => {
  //check radio input
  let g = "";
  if (document.getElementById("male").checked == true) {
    g = "Male";
  } else if (document.getElementById("female").checked == true)
    g = "Female";

  //check checkbox input

  let c = "";
  if (html.checked == true) c += "HTML" + " ";
  if (css.checked == true) c += "CSS" + " ";
  if (js.checked == true) c += "Javascript";

  if (
    name.value.length == 0 ||
    email.value.length == 0 ||
    mobail.value.length == 0 ||
    (male.checked == false && female.checked == false) ||
    (html.checked == false && css.checked == false && js.checked == false)
  )
    alert("pls enter your full detail");
  else {
    document.getElementById(
      "result"
    ).innerHTML += `<div class="s1"> <table><tr><td><p class="p"><strong>Name</strong>&nbsp&nbsp&nbsp: ${
      document.getElementById("name").value
    }</p><p class="p"><strong>Email</strong>&nbsp&nbsp&nbsp: ${
      document.getElementById("email").value
    }</p><p class="p"><strong>Mobail</strong>&nbsp: ${
      document.getElementById("mobail").value
    }</p>
    <p class="p"><strong>DOB</strong>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ${
      document.getElementById("dob").value
    }
       </p>
      <p class="p"><strong>Gender</strong>&nbsp: ${g} </p><p class="p"><strong>Skills</strong>&nbsp&nbsp&nbsp&nbsp&nbsp: ${c} </p></td></tr></table></div></p>`;

    name.value = "";
    email.value = "";
    mobail.value = "";
    dob.value = "";
    if (document.getElementById("male").checked == true)
      document.getElementById("male").checked = false;
    else document.getElementById("female").checked = false;
  }
  if (html.checked == true) html.checked = false;

  if (css.checked == true) css.checked = false;

  if (js.checked == true) js.checked = false;
});

//for reset button

document.getElementById('reset').addEventListener('click', () => {
  name.value = "";
  email.value = "";
  mobail.value = "";
  dob.value = "";
  if (document.getElementById("male").checked == true)
    document.getElementById("male").checked = false;
  else document.getElementById("female").checked = false;
});