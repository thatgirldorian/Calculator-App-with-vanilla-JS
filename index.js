// //Fix screens display and show numbers when they're clicked 
// const clickNumber = document.getElementById('number');

// clickNumber.addEventListener('click', function onClick(event) {
//   // 👇️ change background color
//     document.body.style.backgroundColor = 'salmon';

//   // 👇️ optionally change text color
//   // document.body.style.color = 'white';
// });


//Fix screens display and show numbers when they're clicked 
document.querySelectorAll('button').forEach(el =>{
  el.addEventListener('click', () =>{
    digit_pressed(el.textContent);
  });
});
function digit_pressed(digit) {
  console.log("digit pressed: " + digit);
}
