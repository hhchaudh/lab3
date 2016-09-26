var p = document.getElementById("paragraph");
var form = document.getElementById("cssForm");

function changeCss() {
    var borderRedInput = document.getElementById("borderRedInput").value;
    if(!borderRedInput) {
        borderRedInput = 255;
    }

    var borderGreenInput = document.getElementById("borderGreenInput").value;
    if(!borderGreenInput) {
        borderGreenInput = 255;
    }

    var borderBlueInput = document.getElementById("borderBlueInput").value;
    if(!borderBlueInput) {
        borderBlueInput = 255;
    }

    var borderWidthInput = document.getElementById("borderWidthInput").value;
    if(!borderWidthInput) {
        borderWidthInput = 0;
    }

    var bgRedInput = document.getElementById("bgRedInput").value;
    if(!bgRedInput) {
        bgRedInput = 255;
    }

    var bgGreenInput = document.getElementById("bgGreenInput").value;
    if(!bgGreenInput) {
        bgGreenInput = 255;
    }

    var bgBlueInput = document.getElementById("bgBlueInput").value;
    if(!bgBlueInput) {
        bgBlueInput = 255;
    }

    var borderInfo = document.getElementById("borderInfo");
    var backgroundInfo = document.getElementById("backgroundInfo");

    var borderColor = "rgb(" + borderRedInput + "," + borderGreenInput + "," + borderBlueInput + ")";
    var borderWidth = borderWidthInput;
    var bgColor = "rgb(" + bgRedInput + "," + bgGreenInput + "," + bgBlueInput + ")";
    // var bgColor = "rgb(60, 179, 113)";

    p.style.border = borderWidth + "px solid " + borderColor;
    p.style.backgroundColor = bgColor;
    borderInfo.textContent = "Border Color: " + borderColor + ", Border Width: " + borderWidth;
    backgroundInfo.textContent = "Background Color: " + bgColor;
}
