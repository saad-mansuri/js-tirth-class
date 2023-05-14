var inputNum = document.getElementById('displayData'); 
var outputNum = document.getElementById('output'); 
var n = 5;
  
inputNum.innerHTML =  " the factorial of n.<br>n = " + n;
  
function Factorial(n) {
    var ans=1;
    for (var i = 2; i <= n; i++)
        ans = ans * i;
    return ans;
}
  
function findFactorial() {
    outputNum.innerHTML = Factorial(n);
} 