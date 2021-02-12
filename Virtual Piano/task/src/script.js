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
    default:
        console.log("Warning");
        break;
  }
});