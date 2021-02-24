var i = 0;
var images = [];
var time = 2000;

// Image List
images[0] = "pack.jpg"
images[1] = "tray.jpg"
images[2] = "plastic.jpg"
images[3] = "spoons.jpg"
images[4] = "clingfilm.jpg"
images[5] = "machine.jpg"

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    }else {
       i = 0; 
    }
    setTimeout(changeImg, time)         
}

window.onload = changeImg