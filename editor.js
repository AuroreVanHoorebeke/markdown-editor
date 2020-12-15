const body = document.querySelector("body");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const buttonConvert = document.getElementById("convert");
const buttonReset = document.getElementById("reset");

const textArea = document.createElement("textarea");
textArea.className = "textArea";
left.appendChild(textArea);

const display = document.createElement("div");
display.className = "display";
right.appendChild(display);

textArea.addEventListener("keyup", function() {
    convertMd(textArea);
});

function convertMd(textArea) {
    console.log("triggered");
    // console.log(e.code)
    let typedText = textArea.value;
    display.textContent = typedText;
}