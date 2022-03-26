
//Create a way to show operations on the screen
const screen = document.getElementById("display")
const resultOperation = document.getElementById("result")
    
        function clearScreen() {
            screen.value = "";
            resultOperation.value = "";
        }
        function calc() {
            resultOperation.value = eval(screen.value);
        }
        function press(x) {
            screen.value += x
        }
        function deleteValue() {
          screen.value = screen.value.slice(0, -1);
        }