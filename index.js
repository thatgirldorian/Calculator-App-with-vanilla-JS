//Fix screen display and show numbers when they're clicked 
// const screen = document.getElementById('display')

// screen.addEventListener('click', function onClick(event) {
//   // 👇️ change background color
//     screen.style.backgroundColor = 'salmon';
// });

// //Create a way to group calculator buttons
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

        // function press(x) {
        //   let operation = screen.value += x
        //   operation.style.color = "red";
        // }