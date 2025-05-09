const menubtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const menuLine = document.querySelector(".menu-line");
const menuop = document.querySelector(".menu-op")
const menucross = document.querySelector(".menu-cross");
const lodingpage = document.querySelector(".loding-page");
const mainhed = document.querySelector(".main-head");
const pname = document.querySelector(".p-name");
const aboutp = document.querySelector(".about-p");
const btn = document.querySelector(".btn-1");
const iimg = document.querySelector(".i-img");
const acimg = document.querySelector(".accent-img");
const manimg = document.querySelector(".man-img");
const inner = document.querySelector(".inter");
const textbox = document.querySelector(".text-sec");
const hedline = document.querySelector(".contanet-ex");
const icon = document.querySelector(".icon");
const assqr = document.querySelector(".as-sqr");
const pro = document.querySelector(".projects");
const skilltable = document.querySelector(".skill-tables");
const ul = document.querySelector("ul")
const abouttext = document.querySelector(".about-texts");
const aboutsection = document.querySelector(".about-section");
const navhas = document.querySelectorAll(".na-has");
const contacts = document.querySelector(".contact-us")
const headex = document.querySelector(".head-ex")



menubtn.addEventListener("click", () => {
   console.log("Menu button clicked");
   navbar.classList.toggle("active");
   menuLine.classList.toggle("ani");
   menuop.classList.toggle("ac");
   menucross.classList.toggle("act");
})

navhas.forEach(button => {
   button.addEventListener("click", () => {
      navbar.classList.toggle("active");
      menuLine.classList.toggle("ani");
      menuop.classList.toggle("ac");
      menucross.classList.toggle("act");
   });
});






// Page reload effect

window.addEventListener("load", () => {
   document.body.classList.add("no-scroll");
   setTimeout(() => {
      lodingpage.classList.toggle("fade-out");


      setTimeout(() => {
         lodingpage.style.display = "none";
         document.body.classList.remove("no-scroll");
         mainhed.classList.add('show');
         pname.classList.add("show");
         btn.classList.add("show")
         iimg.classList.add("show");
         acimg.classList.add("show")
         manimg.classList.add("show");
         aboutp.classList.add("show");
         inner.classList.add("show");
         textbox.classList.add("show");
         hedline.classList.add("show");
         icon.classList.add("show");
         assqr.classList.add("show");
         pro.classList.add("show");
         skilltable.classList.add("show")
         ul.classList.add("show")
         abouttext.classList.add("show");
         aboutsection.classList.add("show");
         contacts.classList.add("show")
         headex.classList.add("show")
      }, 1000);

   }, 1000);
})


let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('ul li a');

window.scroll = () => {
  section.forEach(sec => {
     let top = window.scrollY;
     let offset = sec.offsetHtop;
     let height = sec.offsetHeight;
     let id = sec.getAttribute('id');
  

  if(top >= offset && top < offset + height){
     navlinks.forEach(links => {
      links.classList.remove('active');
     document.querySelector('header nav a [href*= ' + id + ']')?.classList.add('active');           
   });
    document.querySelector('header nav a[href*=' + id +']')?.classList.add('active');
  }
})
}
