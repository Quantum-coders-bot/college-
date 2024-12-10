const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add('lightbox');
lightBoxContent.classList.add('lightbox-content');
lightBoxPrev.classList.add("fa","fa-angle-left","lightbox-prev");
lightBoxNext.classList.add("fa","fa-angle-right","lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBoxContainer);

let index=1; 


function showlightbox(n){
    if(n > galleryItem.length){
        index = 1;
    }
    else if (n < 1)
    {
        index=galleryItem.length;
    }
    let imagelocation=galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src",imagelocation);
} 
function currentimage(){
    lightBoxContainer.style.display="block";
    let imageindex=parseInt(this.getAttribute("data-index"));
    showlightbox(index=imageindex);

}
for(let i=0;i<galleryItem.length;i++)
{
    galleryItem[i].addEventListener("click",currentimage);
}
function sliderimage(n){
    showlightbox(index += n);

}
function prevImage(){
    sliderimage(-1);
}
function nextImage(){
    sliderimage(1);
}
lightBoxPrev.addEventListener("click",prevImage);
lightBoxNext.addEventListener("click",nextImage);

function closelightbox(){
    if(this === event.target)
    {
        lightBoxContainer.style.display="none";
    }
}

lightBoxContainer.addEventListener("click",closelightbox);