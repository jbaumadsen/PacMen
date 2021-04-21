let pos = 0;
const pacArray = [ 
  ['./images/PacMan1.png', './images/PacMan2.png'], 
  ['./images/PacMan3.png', './images/PacMan4.png'], 
]; 
let direction = 0; 
// This array holds all the pacmen 
const pacMen = []; 

// This function returns an object with random values 
function setToRandom(scale) { return { x: Math.random() * scale, y: Math.random() * scale, }; } 
// Factory to make a PacMan at a random position with random velocity 
function makePac() { 
  // returns an object with random values scaled {x: 33, y: 21} 
  let velocity = setToRandom(10); 
  // {x:?, y:?} 
  let position = setToRandom(200); 
  // Add image to div id = game 
  let game = document.getElementById('game'); 
  let newimg = document.createElement('img'); 
  newimg.style.position = 'absolute'; 
  newimg.src = 'PacMan1.png'; 
  newimg.width = 100; 
  // TODO: set position here 
  newimg.top = position.y; newimg.left = position.x; 
  // TODO add new Child image to game 
  game.appendChild(newimg); 
  // return details in an object 
  return { position, velocity, newimg, }; 
} 
function update() { 
  // loop over pacmen array and move each one and move image in DOM 
  pacMen.forEach((item) => {
    checkCollisions(item); 
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y; 
    item.newimg.style.left = item.position.x; 
    item.newimg.style.top = item.position.y; 
  }); 
  setTimeout(update, 20); 
} 
function checkCollisions(item) {
    //detect collision with all walls and make pacman bounce  
  (item.position.x + item.velocity.x <= 0 || item.position.x + 100 >= window.innerWidth) ? item.velocity.x = -item.velocity.x : null;
  (item.position.y + item.velocity.y <= 0 || item.position.y + 100 >= window.innerHeight) ? item.velocity.y = -item.velocity.y : null; 
} 
function makeOne() { 
    // add a new PacMan 
    pacMen.push(makePac());
} 
