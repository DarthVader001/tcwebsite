//Lenis code

// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//     console.log(e)
// })

// function raf(time) {
//     lenis.raf(time)
//     requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)


// skip



const cardBunch = document.querySelectorAll(".card__inner");


cardBunch.forEach(function (card){
  card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
  });
})



// 2nd---page

var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main-gallery",
   //  markers:true,
    start:"50% 50%",
    end:"150% 50%",
    scrub:2,
    pin:true
}});
tl
.to("#center-gallery",{
   height: "100vh",
},'a')
.to("#top-gallery",{
    top: "-50%",
 },'a')
 .to("#bottom-gallery",{
    bottom: "-50%",
 },'a')
.to("#top-h1",{
    top: "60%"
 },'a')
 .to("#bottom-h1",{
    bottom: "-30%"
 },'a')
.to("#center-h1",{
   top: "-30%"
},'a')
.to(".content-gallery",{
   delay: -0.2,
   marginTop: "0%"
})


// about us Page
document.addEventListener("DOMContentLoaded", function () {
   var aboutSection = document.querySelector('.about');
   var aboutPara = document.querySelector('.about_para');
   var imgPara = document.querySelector('.about');
   var aboutheading= document.querySelector('.about_heading');

   var options = {
       root: null,
       rootMargin: '0px',
       threshold: 0.5
   };

   var observer = new IntersectionObserver(handleIntersect, options);

   observer.observe(aboutSection);

   function handleIntersect(entries) {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               aboutPara.classList.add('slide-in-right');
               imgPara.classList.add('fade-in');
               aboutheading.classList.add('growin');
           } else {
               aboutPara.classList.remove('slide-in-right');
               imgPara.classList.remove('fade-in');
               aboutheading.classList.remove('growin');
           }
       });
   }
});





// EXTRA

