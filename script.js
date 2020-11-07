const colorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay)
  })
}

let counter = 0;



function counterCheck() {
  function white() {
  colorChange('white', 1000)
}
  if (counter === 1) {
    console.log('Stop');
    white() 
  } else {
    rainbow()
    console.log('continue')
  }
}
async function rainbow() {
  await colorChange('red', 1000)
  await colorChange('orange', 1000)
  await colorChange('yellow', 1000)
  await colorChange('green', 1000)
  await colorChange('blue', 1000)
  await colorChange('indigo', 1000)
  await colorChange('violet', 1000)
  counter++;
  console.log(counter)
  counterCheck() 
}
//can loop by passing in function again 

rainbow()
