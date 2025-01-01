//task1

const mainContent = document.getElementById("mainContent");
const task1 = document.getElementById("task1");

task1.onmouseover = function (){
    mainContent.textContent = "Hello, World!";
    task1.style.background = "orange";
}
task1.onmouseout = function (){
    mainContent.textContent = "Can I Help You!";
    task1.style.background = "yellow";
}

//task2

const spaceForYou = document.getElementById("spaceForYou");
const Underline = document.getElementById("Underline");
const Bold = document.getElementById("Bold");
const Italic = document.getElementById("Italic");
const fontSize = document.getElementById("fontSize");
const fontFamily = document.getElementById("fontFamily");


Bold.addEventListener("change", () => {
    if (Bold.checked) {
        spaceForYou.style.fontWeight = "bold"; // Change to your desired font size
    } else {
        spaceForYou.style.fontWeight = "lighter"; // Reset to default font size
    }
});

Italic.addEventListener("change", () => {
    if (Italic.checked) {
        spaceForYou.style.fontStyle = "italic"; // Change to your desired font size
    } else {
        spaceForYou.style.fontStyle = "normal"; // Reset to default font size
    }
});

Underline.addEventListener("change", () => {
    if (Underline.checked) {
        spaceForYou.style.textDecoration = "underline"; // Change to your desired font size
    } else {
        spaceForYou.style.textDecoration = "none"; // Reset to default font size
    }
});

fontSize.addEventListener("change", () => {
    
        spaceForYou.style.fontSize = fontSize.value; 
});

fontFamily.addEventListener("change", () => {
    
    spaceForYou.style.fontFamily = fontFamily.value; 
});
