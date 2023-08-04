function appendChar(char) {
    document.getElementById('display').value += char;
  }
  
  function clearDisplay() {
    document.getElementById(' display').value = '';
}

function deleteChar() {
var display = document.getElementById('display');
display.value = display.value.slice(0, -1);
}

function evaluate() {
var display = document.getElementById('display');
var expression = display.value;

try {
var result = eval(expression);
display.value = result;
} catch (error) {
display.value = 'Error';
}
}

/*sql
Copy code

Save the HTML code in a file named "calculator.html", the CSS code in a file named "styles.css", and the JavaScript code in a file named "script.js" (make sure all files are in the same directory). Then, open the "calculator.html" file in a web browser, and you should see the scientific calculator interface.

Please note that this is a basic example and may not include all the features of a full-fledged scientific calculator. Also, be cautious when using the `eval()` function in JavaScript as it can be potentially unsafe if user inputs are not properly validated.*/






  