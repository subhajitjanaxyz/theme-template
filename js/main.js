let container=document.querySelector('.containerfor_carosul');
let sliders=document.querySelectorAll('.slidefor');
let leftbtn=document.querySelector('.dotgroup1');
let rightbtn=document.querySelector('.dotgroup11');
let dots=document.querySelectorAll('.dotgor');
let transitionactive=false;
let indexofsliders=1;
let autoPlayInterval;
function slidersui(abc=false){
  if(!abc){    
    container.style.transition="all 0.5s ease-in-out";

    }
  else{
    container.style.transition="none";

   };


   container.style.transform=`translateX(-${indexofsliders*100}%)`;

   dots.forEach(dot => dot.classList.remove("active"));
   dots[(indexofsliders - 1 + dots.length) % dots.length].classList.add("active");
}

function next_slide(){
  if (transitionactive) return;
  transitionactive = true;
  indexofsliders++;
  slidersui();
  if (indexofsliders === 6) {
    setTimeout(() => {
      console.log('6th slides confirm')
        indexofsliders = 1;   
        slidersui(true);
        transitionactive = false;
    }, 500);
} else {
    setTimeout(() => transitionactive = false, 500);
}

}
rightbtn.addEventListener("click",()=>{
  next_slide();
  stopAutoPlay()
})

function prev_slide(){
  if (transitionactive) return;
  transitionactive = true;
  indexofsliders--;
  slidersui();

 
  if (indexofsliders === 0) {
      setTimeout(() => {
        console.log("slider 1 confirm")
          indexofsliders = 5; 
          slidersui(true);
          transitionactive = false;
      }, 500);
  } else {
      setTimeout(() => transitionactive = false, 500);
  }

}
leftbtn.addEventListener("click",()=>{
  prev_slide();
  stopAutoPlay()
})
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
      if (transitionactive) return;
      indexofsliders = index + 1;
      slidersui();
      stopAutoPlay();
  });
});


function startAutoPlay() {
  stopAutoPlay();
  autoPlayInterval = setInterval(next_slide, 3000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

container.addEventListener("mouseenter", stopAutoPlay);
container.addEventListener("mouseleave", startAutoPlay);

startAutoPlay();
slidersui()


// carosul logic end

let imggroup=[
  'https://media.istockphoto.com/id/1393912474/photo/minimal-black-office-workspace-background-with-smartphone-mockup-and-tablet-black-screen.jpg?s=612x612&w=0&k=20&c=SGAd1QGFExdLcOkC8lVcjHjHSbElZ0161Nu_gkVhcOc=',


  "https://img.freepik.com/premium-photo/black-minimalist-workspace-with-coffee-laptop_1271306-3063.jpg",

  'https://img.pikbest.com/wp/202405/sleek-contemporary-workspace-with-laptop-mockup-and-plenty-of-tabletop-space-3d-render_9827191.jpg!f305cw',

  'https://www.shutterstock.com/image-illustration/work-space-night-open-laptop-260nw-2012569328.jpg',

  'https://i.pinimg.com/736x/30/8f/2f/308f2fd627c36e007527bc50337f6c7b.jpg',

  'https://media.istockphoto.com/id/1393912474/photo/minimal-black-office-workspace-background-with-smartphone-mockup-and-tablet-black-screen.jpg?s=612x612&w=0&k=20&c=SGAd1QGFExdLcOkC8lVcjHjHSbElZ0161Nu_gkVhcOc=',

  "https://img.freepik.com/premium-photo/black-minimalist-workspace-with-coffee-laptop_1271306-3063.jpg",
]


sliders.forEach((sildex,inx)=>{
 sildex.style.backgroundImage=`url(${imggroup[inx]})`;
});

// card for 
const cardbox=document.querySelectorAll(".cart453");
const icons=document.querySelectorAll(".hovericn");



cardbox.forEach((val,inx)=>{
val.addEventListener("mouseover",()=>{
  icons[inx].style.color="#fff";
  icons[inx].style.backgroundColor=" #18D26E"

})
val.addEventListener("mouseleave",()=>{
  icons[inx].style.color=" #18D26E";
  icons[inx].style.backgroundColor="#fff";

})
});

//  new slider 

const ligroupimg=[
     
  "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTU1PZGfDXUR8DnDUHs16tEEiVjSWmySPYHIv_h-u8AZIZ1xmnL",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg5lwOjrhVosXY-A7yt10W0VkDF4_Xwf2NFOb9aSEurEuDKwx2",


  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShAb2iD95aWap9rLUHhEkXzPISU2WyMbSFjmB3rbB2yQPA1AdE",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rHiJ-OEINdhIvyi8yKhjWxy1ql7t3pUeqILp3uG84UkyUTEe",
  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSF5nB6EMaQuLSy5r5c1rKL7yvo9tT8xYDrnLd8LVP8hnEV2i2_",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg5lwOjrhVosXY-A7yt10W0VkDF4_Xwf2NFOb9aSEurEuDKwx2",
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT6DPzMSTTB_Hluu7_V-AtXHlwru-49mpvT28_JHRIume4bm6Ly",
  "https://cdn.mos.cms.futurecdn.net/igyCJzfkWAKAg2do6rVQNN-320-80.jpg",




]


document.querySelectorAll(".hellowimgsd").forEach((alldivx,idcmdf)=>{
console.log(`url(${ligroupimg[idcmdf]})`);
console.log('')
  alldivx.src=`${ligroupimg[idcmdf]}`;
});
// 
jQuery(document).ready(function(){
  jQuery('.carosul23').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    dots:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
});


jQuery(document).ready(function(){
  jQuery('.carosuld2ff').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    dots:true,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
        items:1,
        nav:true
      },
      1000:{
        items:1,
        nav:true
      }
  }
  
})
});