<!DOCTYPE html>
<html>
<body>

<p>The numbers when subtracted equal</p>
<p id="sub"></p>

<p>The numbers when added equal</p>
<p id="add"></p>

<p>The numbers when multiplied equals</p>
<p id="multiply"></p>

<p>The numbers when divided equals</p>
<p id="divide"></p>

<script>
function myFunction() {
	int num1 = prompt("Enter Number One");
	int num2 = prompt("Enter Number Two");
	int divide = num1 / num2;
	int multiply = num1 * num2;
	int sum = num1 + num2;
	int subtract = num1 - num2;
	document.getElementById("sub").innerHTML = subtract;
	document.getElementById("add").innerHTML = sum;
	document.getElementById("multiply").innerHTML = multiply;
	document.getElementById("divide").innerHTML = divide;

	
	
}
</script>

</body>
</html>