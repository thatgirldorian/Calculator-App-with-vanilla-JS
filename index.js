//check to see if we have our script loaded and ready to go
const btn = document.getElementById('reset');

btn.addEventListener('click', function onClick(event) {
  // 👇️ change background color
    document.body.style.backgroundColor = 'salmon';

  // 👇️ optionally change text color
  // document.body.style.color = 'white';
});
