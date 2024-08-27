const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let running = false;

function start(){

  if(!running){
    startTime = Date.now() -elapsedTime;
    timer = setInterval(update, 10);
    running = true;
  }

}

function stop(){
  if(running){
    clearInterval(timer);
    elapsedTime =Date.now() - startTime;
    running = false;
  }

}

function reset(){
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0 ;
  running = false;
  display.textContent = "00:00:00:00";

}

function update(){

  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime /(1000 *60 *60));
  let minute = Math.floor(elapsedTime /(1000 * 60) % 60);
  let seconds = Math.floor(elapsedTime / 1000 % 60);
  let millisecond = Math.floor(elapsedTime % 1000 / 10);

  hours = String(hours).padStart(2 , 0);
  minute = String(minute).padStart(2 , 0);
  seconds = String(seconds).padStart(2 , 0);
  millisecond = String(millisecond).padStart(2 , 0);

  display.textContent = `${hours}:${minute}:${seconds}:${millisecond}`;

}