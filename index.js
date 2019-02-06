
function getFirstSelector(selector) {
 return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n) {
  var x = document.getElementById("app).querySelectorAll("ranked-list")
  for (let i = 0; i < x.length; i++) {
  x[i].innerHTML = ((parseInt(x[i].innerHTML)) + n);
}
}

