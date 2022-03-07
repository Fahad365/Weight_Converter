const input = document.querySelector("#IbsInput");
document.querySelector("#output").style.visibility = "hidden";
input.addEventListener("input", function () {
  document.querySelector("#output").style.visibility = "visible";
  const getValue = document.querySelector("#IbsInput").value;
  //   console.log(getValue);
  document.querySelector("#PoundOutput").innerHTML = getValue * 2.2046;
  document.querySelector("#gramsOutput").innerHTML = getValue * 1000;
  document.querySelector("#MilliGramOutput").innerHTML = getValue * 1000000;
});
