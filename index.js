
//Create a way to show operations on the screen
const screen = document.getElementById("display")
    
        function clearScreen() {
            screen.value = "";
        }
        function calc() {
            screen.value = "=" + eval(screen.value);
        }
        function press(x) {
            screen.value += x;
        }

      //   function press(x) {
      //     let operation = screen.value += x
      //     operation.style.color = red;
      // }
