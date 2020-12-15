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

let input;

textArea.addEventListener("keyup", function() {
    convertMd(textArea);
});

function convertMd(textArea) {
    console.log("triggered");
    let typedText = textArea.value;
    mdToHTML(typedText);
    display.innerHTML = input;
}

function mdToHTML(text){
    input = text
        //Headings
        .replace(/^#{1} (.*$)/gim, '<h1>$1</h1>')
        .replace(/^#{2} (.*$)/gim, '<h2>$1</h2>')
        .replace(/^#{3} (.*$)/gim, '<h3>$1</h3>')
        .replace(/^#{4} (.*$)/gim, '<h4>$1</h4>')
        .replace(/^#{5} (.*$)/gim, '<h5>$1</h5>')
        .replace(/^#{6} (.*$)/gim, '<h6>$1</h6>')

        //Paragraph
        .replace(/^\n\n(.*)$/gim,'<p>$1</p>')

        //Blockquote
        .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')

        //Bold, italic, strikethrough
        .replace(/\*{2}(.*)\*{2}|\_{2}(.*)\_{2}/gim, '<strong>$1$2</strong>')
        .replace(/\*{1}(.*)\*{1}/gim, '<em>$1</em>')
        .replace(/\_{1}(.*)\_{1}/gim, '<em>$1</em>')
        .replace(/~~(.*)~~/gim, '<del>$1</del>')

        //img and links
        .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
        .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")

        //break & horizontal rule
        .replace(/\n/gim, '<br />')
        .replace(/\s{2}/gim, '<br />')
        .replace(/-{3,}/gim, '<hr />')
        //.replace(/^\*{3,}$/gim, '<hr />')
        //.replace(/^\_{3,}$/gim, '<hr />')
        //.replace(/- (.*\n$)/gim, '<ul><li>$1</li></ul>')
        .replace(/\`(.*)\`/gim, '<code>$1</code>')
    return input.trim()
}