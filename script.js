function resize(elem, percent) {
    elem.style.fontWeight = percent;
}

function enlarge(elem, change) {
    elem.style.border = change;
}

function resizePic(elem, change) {
    elem.style.width = change;
}


// let carouselImages = [
//     {
//         src: "images/foodpics/bepper.png", //0
//         alt: "bepper",
//         name: "Bepper"

//     },
//     {
//         src: "images/foodpics/ai.jpg", //1
//         alt: "ai",
//         name: "Ai"
//     },
//     {
//         src: "images/foodpics/@satanesse_tiktok-@bellene_ig.png", //2
//         alt: "bellene",
//         name: "@satanesse (Tiktok) / @bellene (Instagram)"
//     },
//     {
//         src: "images/foodpics/disc_banana_cthulhu.png", //3
//         alt: "banana_cthulhu",
//         name: "banana cthulhu (Discord)"
//     },
    
//     {
//         src: "images/foodpics/disc_Bunnerz.png", //4
//         alt: "Bunnerz",
//         name: "Bunnerz (Discord)"
//     },
//     {
//         src: "images/foodpics/disc_Gemyma.png", //5
//         alt: "Gemyma",
//         name: "Gemyma (Discord)"
//     },
//     {
//         src: "images/foodpics/jem.png", //6
//         alt: "jem#4226",
//         name: "jem#4226 (Discord)"
//     },
//     {
//         src: "images/foodpics/Mexico.png", //7
//         alt: "Mexico#9235",
//         name: "Mexico#9235 (Discord)"
//     },
//     {
//         src: "images/foodpics/Nusantara.png", //8
//         alt: "Nusantara#6064",
//         name: "Nusantara#6064 (Discord) / @jramran_01 (Instagram)"
//     },
//     {
//         src: "images/foodpics/ig_@_gastron3rd.png", //9
//         alt: "@_gastron3rd",
//         name: "@_gastron3rd (Instagram)"
//     },
//     {
//         src: "images/foodpics/IG_@a_crouton_.png", //10
//         alt: "@a_crouton_",
//         name: "@a_crouton_ (Instagram)"
//     },
//     {
//         src: "images/foodpics/ig_@claude_covet.png", //11
//         alt: "@claude_covet",
//         name: "@claude_covet (Instagram)"
//     },
//     {
//         src: "images/foodpics/ig_@hxf.baking.png", //12
//         alt: "@hxf.baking",
//         name: "@hxf.baking (instagram)"
//     },
//     {
//         src: "images/foodpics/ig_@tnguyen363.png", //13
//         alt: "@tnguyen363.png",
//         name: "@tnguyen363 (Instagram)"
//     },
//     {
//         src:"images/foodpics/ai2.jpg", //14
//         alt:"Ai",
//         name: "Ai"
//     }


// ]

// let selectedImage = [0, 1, 2]
// function nextImage() {
//     if(selectedImage[0] == 12){
//         selectedImage = [0, 1, 2]
//     } else {
//         for (let i = 0; i < selectedImage.length; i++) {
//             selectedImage[i] += 3
//         }
//     }
//     changeImage(selectedImage);
// }

// function previousImage(){
//     if(selectedImage[0] == 0){
//         selectedImage = [12,13,14]
//     }else{
//         for(let i =0; i < selectedImage.length; i++){
//             selectedImage[i] -= 3
//         }
//     }
//     changeImage(selectedImage);
// }


// function changeImage(arr) {
//     if (arr != selectedImage) {
//         selectedImage = arr;
//     }

//     let imageToChange1 = document.querySelector("#food1");
//     let nameToChange1 = document.querySelector("#foodName1");
//     imageToChange1.src = carouselImages[arr[0]].src
//     imageToChange1.alt = carouselImages[arr[0]].alt
//     nameToChange1.innerHTML = carouselImages[arr[0]].name
//     let imageToChange2 = document.querySelector("#food2");
//     let nameToChange2 = document.querySelector("#foodName2");
//     imageToChange2.src = carouselImages[arr[1]].src
//     imageToChange2.alt = carouselImages[arr[1]].alt
//     nameToChange2.innerHTML = carouselImages[arr[1]].name
//     let imageToChange3 = document.querySelector("#food3");
//     let nameToChange3 = document.querySelector("#foodName3");
//     imageToChange3.src = carouselImages[arr[2]].src
//     imageToChange3.alt = carouselImages[arr[2]].alt
//     nameToChange3.innerHTML = carouselImages[arr[2]].name


// }



// setInterval(function () {document.getElementById("arrow-right").click();}, 10000);