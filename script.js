let autopilot = false;

const mode = document.getElementById("mode");

mode.innerHTML = autopilot;

const button = document.getElementById("myButton");

const starterbutton = document.getElementById("starterButton");

const event = new KeyboardEvent("keydown", {
  key: "a",
  bubbles: true,
  cancelable: false,
});

const input = document.getElementById("input");

button.addEventListener("click", function() {
  button.classList.toggle("clicked");
});

input.addEventListener("keydown", function() {
  input.value = "a";
});

starterbutton.addEventListener("click", function() {
  
  if (autopilot == true){
  
    autopilot = false;
    document.getElementById("mode").innerHTML = autopilot;
    
  } else {
    
    autopilot = true;
    document.getElementById("mode").innerHTML = autopilot;
    
  	}
  })

setInterval(
  function() {
    if (autopilot){
      
      console.log("autopilot true, click");
      button.click();
      input.focus();
      input.dispatchEvent(event);
      setTimeout(function() {
        console.log("blank");
        input.value = "";
        input.blur();
      }, 500);
      

    } else {
      console.log("autopilot false, don't click")
    }
  }, 2000)
