document.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    document.getElementById("header").classList.add("header-scroll");
  } else {
    document.getElementById("header").classList.remove("header-scroll");
  }
});

const typed = new Typed(".auto-typed", {
  strings: ["Front-EndDeveloper", "Web-developer", "Designer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav li a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active-1");
        document
          .querySelector("header nav li a [ href*=" + id + "]")
          .classList.add("active-1");
      });
    }
  });
};

const myFunction = () => {
  document.getElementById("hidden").classList.remove("d-none");
  document.getElementById("hire").style.display = "none";

};
const send = () => {
  document.getElementById("hidden").classList.add("d-none");
};

const message = () => {
  const Description = alert(
    "Your message will be answered as soon as possible. Thanks"
  );
};

const reviews = [
  {
    id: 1,
    text: "I think that you should try hard at the beginning and dont be disappointed because you need experience and you can definately raise your level by trial and error.",
    img: "./assets/Mr.avif",
    name: "Mr. Rezaie",
    job: " Designer",
  },
  {
    id: 2,
    text: "It is really good that you decided to learn a skill and the results show your interest in this field. The front-end world is very wide, try to keep your info up to date end.",
    img: "./assets/Miss.avif",
    name: "Miss. Fatemi",
    job: " Web developer",
  },
  {
    id: 3,
    text: "Front-End is a colorful world and i dont think working with it , is boring. I hope we will witness the creation of great works from you.",
    img: "./assets/Mrs.avif",
    name: "Mrs. Jahani",
    job: " Front_End developer",
  },
];
const userRewiew = document.getElementById("custumer-review");
const userImg = document.getElementById("custumer-pic");
const userName = document.getElementById("custumer-name");
const userJob = document.getElementById("custumer-job");

let currentUser = 0;
const setSlideData = (user) => {
  userRewiew.textContent = user.text;
  userImg.src = user.img;
  userName.textContent = user.name;
  userJob.textContent = user.job;
};
document.addEventListener("DOMContentLoaded", function () {
  const userOne = reviews[0];
  setSlideData(userOne);
});
// button click
document.getElementById("next-btn").addEventListener("click", function () {
  if (currentUser >= 0 && currentUser < reviews.length - 1) {
    currentUser++;
    setSlideData(reviews[currentUser]);
  } else if (currentUser >= reviews.length - 1) {
    currentUser = 0;
    setSlideData(reviews[currentUser]);
  }
});
document.getElementById("back-btn").addEventListener("click", function () {
  if (currentUser > 0) {
    currentUser-- - setSlideData(reviews[currentUser]);
  } else {
    currentUser = reviews.length - 1;
    setSlideData(reviews[currentUser]);
  }
});
//dark-mode//

const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const hero = document.getElementById("hero");
toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon-fill");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = " #f8f9fa";
    body.style.color = "#343a40";
    hero.style.background = "#f8f9fa";
    hero.style.color = "#343a40";
    header.style.color = "#343a40";
    header.style.background = "#f8f9fa";
    body.style.transition = "2s";
    hero.style.transition = "2s";
    header.style.transition = "1s";
  } else {
    body.style.background = "#343a40";
    body.style.color = "#f8f9fa";
    hero.style.background = "#343a40";
    hero.style.color = " #f8f9fa";
    header.style.background = "#343a40";
    header.style.color = "#f8f9fa";
    body.style.transition = "2s";
    hero.style.transition = "2s";
    header.style.transition = "1s";
  }
});

let counts =setInterval(updated);
let upto = 0;
let speed = 100;
function updated() {
  let count = document.getElementsByClassName('.counter');
  count.innerHTML = ++upto;
  if(upto === 356) {
    clearInterval(counts);
  }}

// }
// a = prompt('1240') ;
// for(let counter=0; counter<=a; counter
// +=1)
// let upto =0;
// let counter =document.querySelectorAll('.counter');
// counter.forEach(() =>{
//   counter.innerHTML = ++ upto
// })


// const counters = document.querySelectorAll('.count');
// const speed = 200;
// counters.forEach((widget-item) => {
//   const updateCount = () => {
//     const target = parseInt(+widget-item . getAttribute('data-target'));
//     const count = parseInt(+widget-item.innerText);
//     const increment = Math.trunc(target / speed);
//     if(   count < target ){
//       widget-item.innerText = count + increment;
//       setTimeout(updateCount, 1);
//     }else{
//       count.innerText = target;
//     }

//   };
//   updateCount();
// });

// let upto = 0;
// let counter = document.getElementById('counter');
// for( let upto =0; upto <= target-value;   upto++){
// console.log(counter)
// }
// const counter = document.getElementById('counter');
// for( let i = 0; i > 0; i++)



