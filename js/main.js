var saveduserinput = prompt("Hello! who are you? Please introduce yourself c:");

console.log(saveduserinput);

document.getElementById("Hana").innerText = saveduserinput
//tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })