$(document).ready(function() {
    console.log("Project Dashboard is ready!");
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// totally not a rick-roll
function secretSurprise() {
  console.log('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
}