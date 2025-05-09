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

menubtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuLine.classList.toggle("ani");
    menuop.classList.toggle("ac");
    menucross.classList.toggle("act");
 
 })
 