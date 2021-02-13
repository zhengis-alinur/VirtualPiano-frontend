let sound;
document.addEventListener("keydown", function(event) {
  switch (event.code){
    case "KeyA":
        sound = new Audio("sounds/A.mp3");
        sound.play();
        break;
    case "KeyS":
        sound = new Audio("sounds/S.mp3");
        sound.play();
        break;
    case "KeyD":
        sound = new Audio("sounds/D.mp3");
        sound.play();
        break;
    case "KeyF":
        sound = new Audio("sounds/F.mp3");
        sound.play();
        break;
    case "KeyG":
        sound = new Audio("sounds/G.mp3");
        sound.play();
        break;
    case "KeyH":
        sound = new Audio("sounds/H.mp3");
        sound.play();
        break;
    case "KeyJ":
        sound = new Audio("sounds/J.mp3");
        sound.play();
        break;
    case "KeyW":
        sound = new Audio("sounds/J.mp3");
        sound.play();
        break;
    case "KeyE":
        sound = new Audio("sounds/J.mp3");
        sound.play();
        break;
    case "KeyT":
        sound = new Audio("sounds/J.mp3");
        sound.play();
        break;
    case "KeyY":
        sound = new Audio("sounds/J.mp3");
        sound.play();
        break;
    case "KeyU":
        sound = new Audio("sounds/J.mp3");
        sound.play();
        break;
    default:
        console.log("Warning");
        break;
  }
});