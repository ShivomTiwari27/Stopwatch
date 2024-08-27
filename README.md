# Stopwatch Application

## Overview

### The challenge
The challenge was to create a functional stopwatch that allows users to start, stop, and reset the timer with a user-friendly interface. The application was built using HTML, CSS, and JavaScript, focusing on accurate time tracking and user interaction.

### Screenshot
![Stopwatch Screenshot]
![Stopwatch-2](https://github.com/user-attachments/assets/541573ea-962e-4863-b946-cad0eb6e219f)
![Stopwatch](https://github.com/user-attachments/assets/e9ab40c6-6ea7-4706-b4d7-f05749b92b34)
![Stopwatch-1](https://github.com/user-attachments/assets/89c2aa13-c4de-447b-893a-ec16f7f55679)


### Links
- [Live Site URL](https://shivomtiwari27.github.io/Stopwatch/) 
- [Source Code](https://github.com/ShivomTiwari27/Stopwatch) 

## My process

### Built with
- HTML5
- CSS3
- JavaScript (ES6+)

### What I learned
This project helped me improve my understanding of JavaScript, particularly in working with timing functions like `setInterval` and `clearInterval`. Here's a breakdown of what I learned:

#### Using `setInterval` and `clearInterval`
These functions are crucial for creating a stopwatch. `setInterval` repeatedly calls a function at specified intervals, which is essential for updating the display every millisecond.

```javascript
function start() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    running = true;
  }
}

function stop() {
  if (running) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    running = false;
  }
}
```
In this snippet:

- `start()` begins the timer by setting the `startTime` and using `setInterval` to call the `update()` function every 10 milliseconds.
- `stop()` pauses the timer by clearing the interval and calculating the elapsed time.
- Formatting Time
- To ensure the time is displayed correctly, I used `Math.floor()` to calculate hours, minutes, seconds, and milliseconds, and `String.padStart()` to format them into a consistent 2-digit format:

```javascript
let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
let minute = Math.floor(elapsedTime / (1000 * 60) % 60);
let seconds = Math.floor(elapsedTime / 1000 % 60);
let millisecond = Math.floor(elapsedTime % 1000 / 10);

hours = String(hours).padStart(2, 0);
minute = String(minute).padStart(2, 0);
seconds = String(seconds).padStart(2, 0);
millisecond = String(millisecond).padStart(2, 0);

display.textContent = `${hours}:${minute}:${seconds}:${millisecond}`;

```

This approach ensures the time is always displayed as `HH:MM:SS:MS`, even when values are less than 10.

## Continued development

In future projects, I’d like to:
- Add a lap functionality to record intermediate times.
- Improve the UI by adding animations and sound effects for the start, stop, and reset actions.
- Implement a more advanced timing system that includes different time units like days or weeks.

## Useful resources

- [MDN Web Docs - setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) - This helped me understand how to execute functions at regular intervals.
- [MDN Web Docs - Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) - This was essential for capturing the current time in milliseconds.

## Author

- GitHub - [ShivomTiwari27](https://github.com/ShivomTiwari27) 

## Acknowledgments

I'd like to thank Bro Code for their helpful tutorials on YouTube, which provided valuable insights and guidance during the development of this project. You can check out their channel [here](https://www.youtube.com/@BroCodez).
