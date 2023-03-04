let imageElement = document.getElementById("image");
let originalImageWidth = "200px";
document.getElementById("imageWidth").textContent = "200px";
let originalWidth = parseInt(200);
originalImageWidth = originalWidth + "px";
imageElement.style.width = originalImageWidth;

function decrementButton() {
    if (originalWidth > parseInt(100)) {
        originalWidth = parseInt(originalWidth) - parseInt(5);
        originalImageWidth = originalWidth + "px";
        imageElement.style.width = originalImageWidth;
        document.getElementById("warningMessage").textContent = "";
        document.getElementById("imageWidth").textContent = originalWidth + "px";
    } else if (originalWidth <= parseInt(100)) {
        document.getElementById("warningMessage").textContent = "Can't Visible. Increase the size of the image";
    }
}

function incrementButton() {
    if (originalWidth < parseInt(300)) {
        console.log(originalWidth);
        originalWidth = parseInt(originalWidth) + parseInt(5);
        originalImageWidth = originalWidth + "px";
        imageElement.style.width = originalImageWidth;
        document.getElementById("warningMessage").textContent = "";
        document.getElementById("imageWidth").textContent = originalWidth + "px";
    } else if (originalWidth >= parseInt(300)) {
        document.getElementById("warningMessage").textContent = "Too big. Decrease the size of the image";
    }
}