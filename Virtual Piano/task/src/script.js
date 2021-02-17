let sound;
let A = document.getElementById("A");
let S = document.getElementById("S");
let D = document.getElementById("D");
let F = document.getElementById("F");
let G = document.getElementById("G");
let H = document.getElementById("H");
let J = document.getElementById("J");
let W = document.getElementById("W");
let E = document.getElementById("E");
let T = document.getElementById("T");
let Y = document.getElementById("Y");
let U = document.getElementById("U");

document.addEventListener("keydown", function(event) {
  switch (event.code){
    case "KeyA":
        A.style.backgroundColor = "gray";
        sound = new Audio("sounds/A.mp3");
        sound.play();
        break;
    case "KeyS":
        S.style.backgroundColor = "gray";
        sound = new Audio("sounds/S.mp3");
        sound.play();
        break;
    case "KeyD":
        D.style.backgroundColor = "gray";
        sound = new Audio("sounds/D.mp3");
        sound.play();
        break;
    case "KeyF":
        F.style.backgroundColor = "gray";
        sound = new Audio("sounds/F.mp3");
        sound.play();
        break;
    case "KeyG":
        G.style.backgroundColor = "gray";
        sound = new Audio("sounds/G.mp3");
        sound.play();
        break;
    case "KeyH":
        H.style.backgroundColor = "gray";
        sound = new Audio("sounds/H.mp3");
        sound.play();
        break;
    case "KeyJ":
        J.style.backgroundColor = "gray";
        sound = new Audio("sounds/J.mp3");
        sound.play();
        break;
    case "KeyW":
        W.style.backgroundColor = "#504E4E";
        sound = new Audio("sounds/W.mp3");
        sound.play();
        break;
    case "KeyE":
        E.style.backgroundColor = "#504E4E";
        sound = new Audio("sounds/E.mp3");
        sound.play();
        break;
    case "KeyT":
        T.style.backgroundColor = "#504E4E";
        sound = new Audio("sounds/T.mp3");
        sound.play();
        break;
    case "KeyY":
        Y.style.backgroundColor = "#504E4E";
        sound = new Audio("sounds/Y.mp3");
        sound.play();
        break;
    case "KeyU":
        U.style.backgroundColor = "#504E4E";
        sound = new Audio("sounds/U.mp3");
        sound.play();
        break;
    default:
        console.log("Warning");
        break;
  }
});

document.addEventListener("keyup", function(event) {
    switch (event.code){
        case "KeyA":
            A.style.backgroundColor = "white";
            break;
        case "KeyS":
            S.style.backgroundColor = "white";
            break;
        case "KeyD":
            D.style.backgroundColor = "white";
            break;
        case "KeyF":
            F.style.backgroundColor = "white";
            break;
        case "KeyG":
            G.style.backgroundColor = "white";
            break;
        case "KeyH":
            H.style.backgroundColor = "white";
            break;
        case "KeyJ":
            J.style.backgroundColor = "white";
            break;
        case "KeyW":
            W.style.backgroundColor = "black";
            break;
        case "KeyE":
            E.style.backgroundColor = "black";
            break;
        case "KeyT":
            T.style.backgroundColor = "black";
            break;
        case "KeyY":
            Y.style.backgroundColor = "black";
            break;
        case "KeyU":
            U.style.backgroundColor = "black";
            break;
        default:
            console.log("Warning");
            break;
    }
});