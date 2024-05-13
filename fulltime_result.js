function goBack() {
  window.location.href = "index.html";
}

document.getElementById("name").innerText = getUrlParam("name");
document.getElementById("id").innerText = getUrlParam("id");
document.getElementById("salary").innerText = getUrlParam("salary");

function getUrlParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}