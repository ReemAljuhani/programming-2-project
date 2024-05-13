function submitFullTime() {
  var name = document.getElementById("name").value;
  var id = document.getElementById("id").value;
  var salary = 20000;

  window.location.href = "fulltime_result.html?name=" + name + "&id=" + id + "&salary=" + salary;
}

function goBack() {
  window.location.href = "index.html";
}