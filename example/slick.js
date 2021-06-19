// const input = document.querySelector('input');
// const log = document.getElementById('log');

// input.addEventListener('change', updateValue);

// function updateValue(e) {
//   console.log(e.target.value);
// }

promise
  .then("http://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });
