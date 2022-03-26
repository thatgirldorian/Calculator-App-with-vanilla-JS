//Fix screen display and show numbers when they're clicked 
// const screen = document.getElementById('display')

// screen.addEventListener('click', function onClick(event) {
//   // 👇️ change background color
//     screen.style.backgroundColor = 'salmon';
// });

// //Create a way to group calculator buttons
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