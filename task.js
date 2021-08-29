/*const videoSlider = document.querySelector(".videoSlider");
const videoSlides = document.querySelector(".videoSlides");
const carouselss = document.querySelector(".carouselss");
const carouseinner  = document.querySelector(".carousel-inner") ;
const leftb = document.querySelector(".left");
const rightb = document.querySelector(".right");
const img_slider = document.querySelector(".img_slider");

let checked = false;
let xAxis;
let click =false;
let axis;

videoSlider.addEventListener("mousedown", (e) => {
    checked=true;
    xAxis= e.offsetX - videoSlides.offsetLeft;
    console.log(e.offsetX);
    
})



window.addEventListener('mouseup',() =>
{
    checked= false;

})


videoSlider.addEventListener('mousemove', e => {
    if(!checked) return ;
    e.preventDefault();

    videoSlides.style.left = `${ e.offsetX-xAxis}px`;
   Cards();

})



function Cards()
{
    const videoSlider_rect =  videoSlider.getBoundingClientRect();
    const videoSlides_rect = videoSlides.getBoundingClientRect();
    

    if(parseInt(videoSlides.style.left)>0)
    {
        videoSlides.style.left=0;
    }

    else if(videoSlides_rect.right < videoSlider_rect.right)
    {
        console.log(videoSlides_rect.right);
        console.log(videoSlider_rect.right);
        videoSlides.style.left = `-${videoSlides_rect.width -videoSlider_rect.width}px`;
    }

    
}

*/
const ham = document.querySelector('.ham');

const zippy = document.querySelector('.zippy');

const videonext = document.querySelector('.videonext');
const videoprev = document.querySelector('.videoprev');
const videotrack = document.querySelector('.videotrack');
let videocontainerWidth = document.querySelector('.videocarousel_container').offsetWidth;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const track = document.querySelector('.track');
let containerWidth = document.querySelector('.carousel_container').offsetWidth;
const nav = document.querySelector('nav');
const slideone = document.querySelector('.circleone');
const slidetwo = document.querySelector('.circletwo');
const slidethird = document.querySelector('.circlethird');

let main_content = document.querySelector('.main-content');

window.addEventListener('resize' , ()=>{
  containerWidth = document.querySelector('.carousel_container').offsetWidth;
})

let index =0;

next.addEventListener('click' , ()=>{
  index++;
  prev.classList.add('show');
   track.style.transform = `translateX(-${index * containerWidth}px)`;
    
    
   if(track.offsetWidth - (index * containerWidth) < containerWidth)
     {
       next.classList.add('hide');
     }
  console.log(containerWidth);
}
);
   


prev.addEventListener('click' , ()=>{
  index--;
  next.classList.remove('hide');
  if (index === 0) {
    prev.classList.remove('show');
  }
   track.style.transform = `translateX(-${index * containerWidth}px)`;
   console.log(containerWidth);
}
);
   

                    



window.addEventListener('resize' , ()=>{
  videocontainerWidth = document.querySelector('.videocarousel_container').offsetWidth;
})

let index1 =0;

videonext.addEventListener('click' , ()=>{
  index1++;
  videoprev.classList.add('videoshow');
   videotrack.style.transform = `translateX(-${index1 * videocontainerWidth}px)`;
    
    
   if(videotrack.offsetWidth - (index1 * videocontainerWidth) < videocontainerWidth)
     {
       videonext.classList.add('videohide');
     }
  console.log(containerWidth);
}
);
   


videoprev.addEventListener('click' , ()=>{
  index1--;
  videonext.classList.remove('videohide');
  if (index1 === 0) {
    videoprev.classList.remove('videoshow');
  }
   videotrack.style.transform = `translateX(-${index1 * videocontainerWidth}px)`;
   console.log(containerWidth);
}
);


ham.addEventListener('click' , ()=>{
  if (nav.style.display === "flex") {
    nav.style.display = "none";
    
    contents.style.display="flex";
  } else {
    nav.style.display = "flex";
   
   
    
   
  }

})
slideone.addEventListener('click', ()=>{
  main_content.style.backgroundImage = "url('pexels.jpg')";
})

slidetwo.addEventListener('click', ()=>{
  main_content.style.backgroundImage = "url('pexel1.jpg')";
})

slidethird.addEventListener('click', ()=>{
  main_content.style.backgroundImage = "url('pexel2.jpg')";
})