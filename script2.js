const header = document.querySelector("#header");
const timestamp = document.querySelector("#timestamp");

setInterval(function() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  timestamp.innerHTML = `${date} ${time}`;
}, 1000);



let textSizeOption = document.querySelector("#textSizeOption");
textSizeOption.addEventListener("click", function(event) {
  let currentTextSize = document.querySelector("#textArea").style.fontSize;
  if (currentTextSize === "") {
    currentTextSize = "16px";
  }
  let textSize = parseFloat(currentTextSize);
  textSize = textSize + 2 + "px";
  document.querySelector("#textArea").style.fontSize = textSize;
});

// Text Style
let textStyleOption = document.querySelector("#textStyleOption");
textStyleOption.addEventListener("click", function(event) {
  let currentTextStyle = document.querySelector("#textArea").style.fontFamily;
  if (currentTextStyle === "") {
    currentTextStyle = "Arial";
  }
  let textStyles = ["Arial", "Helvetica", "Times New Roman", "Verdana", "Courier New"];
  let currentTextStyleIndex = textStyles.indexOf(currentTextStyle);
  if (currentTextStyleIndex === textStyles.length - 1) {
    document.querySelector("#textArea").style.fontFamily = textStyles[0];
  } else {
    document.querySelector("#textArea").style.fontFamily = textStyles[currentTextStyleIndex + 1];
  }
});

// Bold
let boldOption = document.querySelector("#boldOption");
boldOption.addEventListener("click", function(event) {
  let currentFontWeight = document.querySelector("#textArea").style.fontWeight;
  if (currentFontWeight === "bold") {
    document.querySelector("#textArea").style.fontWeight = "normal";
  } else {
    document.querySelector("#textArea").style.fontWeight = "bold";
  }
});

// Italic
let italicOption = document.querySelector("#italicOption");
italicOption.addEventListener("click", function(event) {
  let currentFontStyle = document.querySelector("#textArea").style.fontStyle;
  if (currentFontStyle === "italic") {
    document.querySelector("#textArea").style.fontStyle = "normal";
  } else {
    document.querySelector("#textArea").style.fontStyle = "italic";
  }
});

// Underline
let underlineOption = document.querySelector("#underlineOption");
underlineOption.addEventListener("click", function(event) {
  let currentTextDecoration = document.querySelector("#textArea").style.textDecoration;
  if (currentTextDecoration === "underline") {
    document.querySelector("#textArea").style.textDecoration = "none";
  } else {
    document.querySelector("#textArea").style.textDecoration = "underline";
  }
});



const loadingBar = document.querySelector(".loading-bar");

let width = 0;
const interval = setInterval(() => {
  width = width + 10;
  loadingBar.style.width = width + "%";
  if (width >= 70) {
    clearInterval(interval);
  }
}, 1000);


const textarea = document.getElementById("content-description-textbox");
const wordCount = document.getElementById("word-count");
const characterCount = document.getElementById("character-count");

textarea.addEventListener("input", function () {
  wordCount.textContent = textarea.value.split(" ").length;
  characterCount.textContent = textarea.value.length;
});

const textArea = document.getElementById('text-area');

textArea.addEventListener('input', function() {
  textArea.style.height = 'auto';
  textArea.style.height = textArea.scrollHeight + 'px';
});





