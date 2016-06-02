
function fibonacci(n) {
    var a = 1,
        b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
        a = b;
        b = c;
  }
  return b;
}
    var capturing = true;

function btnClicked(e) {
    var n = (prompt("Enter a number"));
  alert(fibonacci(n));
}
 btn.addEventListener('click', btnClicked, capturing);



  