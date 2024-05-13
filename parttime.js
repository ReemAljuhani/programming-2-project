function submitPartTime() {
  var name = document.getElementById("name").value;
  var id = document.getElementById("id").value;
  var hours = parseInt(document.getElementById("hours").value);
  var rate = parseFloat(document.getElementById("rate").value);
  var salary = hours * rate * 4;

  window.location.href = "parttime_result.html?name=" + name + "&id=" + id + "&hours=" + hours + "&rate=" + rate + "&salary=" + salary;
}

function goBack() {
  window.location.href = "index.html";
}