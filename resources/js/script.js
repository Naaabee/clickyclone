
var slideImg = document.getElementById("slideImg");

var images = new Array (
    "resources/images/1.webp",
    "resources/images/2.jpg",
    "resources/images/3.webp",
    "resources/images/4.webp"
);

var len = images.length;
var i = 0;

function slider() {
    if(i > len-1) {
        i = 0;
    } 
    slideImg.src = images[i];
    i++;
    setTimeout('slider()',5000);
}

slider();

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})