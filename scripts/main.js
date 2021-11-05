document.addEventListener("DOMContentLoaded", function (event) {
  ShowCV();
});

function ShowCV() {
  HideDocuments();
  var aElm = document.getElementById("cv");

  var iElm = document.getElementById("cv-icon");

  var divElm = document.getElementById("cv-content");

  aElm.classList.add("active-style");

  iElm.classList.add("active-icon");

  divElm.classList.remove("hidden-content");

  document.getElementById("page-title").innerHTML = "Curriculum Vitae";
}

function HideDocuments() {
  var aElm = document.getElementById("documents");

  var iElm = document.getElementById("documents-icon");

  var divElm = document.getElementById("docs-content");

  divElm.classList.add("hidden-content");
  aElm.classList.remove("active-style");
  iElm.classList.remove("active-icon");
}

function HideCV() {
  var aElm = document.getElementById("cv");

  var iElm = document.getElementById("cv-icon");

  var divElm = document.getElementById("cv-content");

  divElm.classList.add("hidden-content");

  aElm.classList.remove("active-style");

  iElm.classList.remove("active-icon");
}

function ShowDocuments() {
  HideCV();
  document.getElementById("page-title").innerHTML = "Documents";
  var aElm = document.getElementById("documents");

  var iElm = document.getElementById("documents-icon");

  var divElm = document.getElementById("docs-content");

  divElm.classList.remove("hidden-content");
  aElm.classList.add("active-style");
  iElm.classList.add("active-icon");
}
