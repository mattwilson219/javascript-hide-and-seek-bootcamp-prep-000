
function getFirstSelector(selector) {
 return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n) {
  var x = document.getElementById("app").querySelectorAll("ul.ranked-list")
  for (let i = 0; i < x.length; i++) {
  x[i].innerHTML = ((parseInt(x[i].innerHTML)) + n);
}
}

function deepestChild() {
  var x = document.getElementById("grand-node").querySelectorAll("div")
  return x[x.length -1];
}