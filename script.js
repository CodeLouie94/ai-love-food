function resize(elem, percent) {
    elem.style.fontSize = percent;
}

function enlarge(elem, change) {
    elem.style.border = change;
}

function resizePic(elem, change) {
    elem.style.width = change;
}


let carouselImages = [
    {
        src: "images/foodpics/bepper.png", //0
        alt: "bepper"
    },
    {
        src: "images/foodpics/ai.jpg", //1
        alt: "ai"
    },
    {
        src: "images/foodpics/@satanesse_tiktok-@bellene_ig.png", //2
        alt: "bellene"
    },
    {
        src: "images/foodpics/disc_banana_cthulhu.png", //3
        alt: "banana_cthulhu"
    },
    
    {
        src: "images/foodpics/disc_Bunnerz.png", //4
        alt: "Bunnerz"
    },
    {
        src: "images/foodpics/disc_Gemyma.png", //5
        alt: "Gemyma"
    },
    {
        src: "images/foodpics/jem.png", //6
        alt: "jem#4226"
    },
    {
        src: "images/foodpics/Mexico.png", //7
        alt: "Mexico#9235"
    },
    {
        src: "images/foodpics/Nusantara.png", //8
        alt: "Nusantara#6064"
    },
    {
        src: "images/foodpics/ig_@_gastron3rd.png", //9
        alt: "@_gastron3rd"
    },
    {
        src: "images/foodpics/IG_@a_crouton_.png", //10
        alt: "@a_crouton_"
    },
    {
        src: "images/foodpics/ig_@claude_covet.png", //11
        alt: "@claude_covet"
    },
    {
        src: "images/foodpics/ig_@hxf.baking.png", //12
        alt: "@hxf.baking"
    },
    {
        src: "images/foodpics/ig_@tnguyen363.png", //13
        alt: "@tnguyen363.png"
    },
    {
        src:"images/foodpics/dummy.jpg", //14
        alt:"dummy_pic"
    }


]

let selectedImage = [0, 1, 2]
function nextImage() {
    if(selectedImage[0] == 12){
        selectedImage = [0, 1, 2]
    } else {
        for (let i = 0; i < selectedImage.length; i++) {
            selectedImage[i] += 3
        }
    }
    changeImage(selectedImage);
}

function previousImage(){
    if(selectedImage[0] == 0){
        selectedImage = [12,13,14]
    }else{
        for(let i =0; i < selectedImage.length; i++){
            selectedImage[i] -= 3
        }
    }
    changeImage(selectedImage);
}


let x = document.getElementById("3rdpic");
function changeImage(arr) {
    if (arr != selectedImage) {
        selectedImage = arr;
    }

    let imageToChange1 = document.querySelector("#food1");
    imageToChange1.src = carouselImages[arr[0]].src
    imageToChange1.alt = carouselImages[arr[0]].alt
    let imageToChange2 = document.querySelector("#food2");
    imageToChange2.src = carouselImages[arr[1]].src
    imageToChange2.alt = carouselImages[arr[1]].alt
    let imageToChange3 = document.querySelector("#food3");
    imageToChange3.src = carouselImages[arr[2]].src
    imageToChange3.alt = carouselImages[arr[2]].alt


}



