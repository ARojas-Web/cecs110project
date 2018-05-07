var slideIndex = 1;
var slideshowContainers = document.getElementsByClassName("slideshow-container");
for(var k=0; k < slideshowContainers.length; k++){
    showDivs(slideshowContainers[k], slideIndex);
}
function plusSlides(e, n){
    showDivs(e.parentNode, slideIndex += n);
}
function showDivs(div, n){
    var i;
    var x = div.getElementsByClassName("slides");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";
}