function resize(elem, percent) {
    elem.style.fontWeight = percent;
}

function enlarge(elem, change) {
    elem.style.border = change;
}

function resizePic(elem, change) {
    elem.style.height = change;
}

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter >5){
        counter =1;
    }
}, 5000);

