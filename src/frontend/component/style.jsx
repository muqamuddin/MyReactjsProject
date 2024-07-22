
const menuIcon = document.getElementsByClassName("burger-icon")[0];
const navMobile = document.querySelector(".nav-mobile");
const menuMobile = document.querySelectorAll(".menu-mobile-item");
const menu = document.getElementsByClassName("overlay")[0];
const overlay = document.querySelector(".overlay");

overlay.addEventListener("click", () => {
  navMobile.classList.add("opacity-0");
  navMobile.classList.add("pointer-events-none");
  menuIcon.classList.remove("burger-close");
  overlay.classList.toggle("show");
});

menuIcon.addEventListener("click", () => {
  if (navMobile.classList.contains("opacity-0")) {
    navMobile.classList.remove("opacity-0");
    navMobile.classList.remove("pointer-events-none");
    menuIcon.classList.add("burger-close");
    overlay.classList.toggle("show");
  } else {
    navMobile.classList.add("opacity-0");
    navMobile.classList.add("pointer-events-none");
    menuIcon.classList.remove("burger-close");
    overlay.classList.toggle("show");
  }
});

[...menuMobile].map((e) =>
  e.addEventListener("click", () => {
    [...menuMobile].map((t) => {
      if (t !== e) return t.classList.remove("expand");
    });
    e.classList.toggle("expand");
  })
);

document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const backToTop = document.querySelector("#backToTop");
  if (window.scrollY > 230) {
    header.classList.add("sticky-header");
    backToTop.classList.remove("opacity-0");
    backToTop.classList.remove("invisible");
  } else {
    header.classList.remove("sticky-header");
    backToTop.classList.add("opacity-0");
    backToTop.classList.add("invisible");
  }
});

const playButton = document.querySelectorAll(".play-video");
const iframeVideo = document.querySelector(".video-iframe");
const closeIframe = document.querySelector(".close-video");
const video = document.querySelector(".video");

[...playButton].map((e) =>
  e.addEventListener("click", () => {
    const t = window.scrollY;
    iframeVideo.classList.remove("hidden");
    video.style.marginTop = `calc(${t}px + 25vh)`;
  })
);

closeIframe.addEventListener("click", () => {
  iframeVideo.classList.add("hidden");
});

let tabList = document.querySelectorAll(".tab-item");
let tabConentList = document.querySelectorAll(".tab-content");

[...tabList].map((e) =>
  e.addEventListener("click", (t) => {
    [...tabList].map((e) => e.classList.remove("active"));
    [...tabConentList].map((e) => e.classList.add("!hidden"));
    e.classList.add("active");
    document.querySelector(`.${this.id}`).classList.remove("!hidden");
  })
);

$(document).ready(() => {
  $(".offer-list").slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".feedback-list").slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    prevArrow: ".feedback-prev",
    nextArrow: ".feedback-next",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".team-list").slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    prevArrow: ".team-prev",
    nextArrow: ".team-next",
  });

  $(".product-list").slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: false,
    prevArrow:Unfortunately, the code provided is incomplete. It seems that it cuts off at the beginning of an instruction `prevArrow:`. If you can provide the complete code, I would be happy to assist you further.
