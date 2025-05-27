// JavaScript functions for the web page
function changeMessage() {
    // Get the input value from the text box
    var img = document.getElementById("sample-img");
    if(img) {
        img.src = "img/sample2.png";
    } else {
        console.log("Print the log");
        console.error("Image tag is not found");
    }
}