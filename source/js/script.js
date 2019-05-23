var mainNav = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var navList = document.querySelector(".main-nav__list");
var prevPage = document.querySelector(".preview-page");
var pageHeader = document.querySelector(".page-header");

mainNav.classList.remove("main-nav--nojs");
navList.classList.remove("main-nav__list--nojs");
navToggle.classList.remove("main-nav__toggle--nojs");
prevPage.classList.remove("preview-page--short");
pageHeader.classList.remove("page-header--open");

navToggle.addEventListener("click", function() {
  if (navList.classList.contains("main-nav__list--closed")) {
    navList.classList.remove("main-nav__list--closed");
    navList.classList.add("main-nav__list");
    if (pageHeader.classList.contains("page-header--open")) {
      pageHeader.classList.remove("page-header--open");
    } else {
      pageHeader.classList.add("page-header--open");
    };
    if (prevPage.classList.contains("preview-page--short")) {
      prevPage.classList.remove("preview-page--short");
    } else {
      prevPage.classList.add("preview-page--short");
    };
  } else {
    navList.classList.add("main-nav__list--closed");
    navList.classList.remove("main-nav__list--nojs");
    pageHeader.classList.remove("page-header--open");
    prevPage.classList.remove("preview-page--short");
  }
});
