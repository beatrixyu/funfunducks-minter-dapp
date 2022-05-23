let personal = true;
let experience = true;
let oneSkill = true;
let oneUnicorn = true;
let oneStar = true;
let hello1 = true;
let hello2 = true;
let hello3 = true;
let hello4 = true;
let hello5 = true;
let hello6 = true;
let hello7 = true;
let hello8 = true;

let oneDinaso = true;
let oneWasa = true;
let oneBlome = true;
let oneDci = true;
let oneContact = true;
// let arrPersonal = document.getElementById("introStory").children;
// let arrContacts = document.getElementById('contacts').children;
// let skillDiv = document.getElementById("skill");
// let arrSkill = document.getElementById("skill").children;
// let arrExperience = document.querySelector("#experience").children;
// let arrWasatea = document.getElementById("wasaIntro").children;
// let arrWasateaHead = document.getElementById("project").children;
// let arrWasaLogo = document.getElementById("bigWasaLogoDiv").children;
// let arrBlomeLogo = document.getElementById("bigBdLogDiv").children;
// let arrDciLogo = document.getElementById("bigDciLogDiv").children;
// let arrContactLogo = document.getElementById("bigContactDiv").children;

// arrWasatea[0].style.opacity = "0";
// arrWasatea[0].style.transform = "rotateZ(45deg)";
// arrWasatea[1].style.opacity = "0";
// arrWasatea[1].style.transform = "rotateZ(45deg)";
// arrWasatea[2].style.opacity = "0";
// arrWasatea[2].style.transform = "rotateZ(45deg)";
// arrWasatea[3].style.opacity = "0";
// arrWasatea[3].style.transform = "rotateZ(45deg)";
// arrWasatea[4].style.opacity = "0";
// arrWasatea[4].style.transform = "rotateZ(45deg)";
// arrWasatea[5].style.opacity = "0";
// arrWasatea[5].style.transform = "rotateZ(45deg)";
// arrWasatea[6].style.opacity = "0";
// arrWasatea[6].style.transform = "rotateZ(45deg)";

//  arrWasateaHead[0].style.opacity = "0";
//  arrWasateaHead[0].style.transform = "rotateZ(45deg)";
//  arrWasateaHead[0].style.left = "100%";

function headerMove() {
  let scrollPosition = window.pageYOffset;
  let navClass = document.querySelector(".logo");
  if (scrollPosition > 5 && navClass.className == "logo") {
    navClass.classList.add("toggleMenu");
  } else if (scrollPosition < 5 && navClass.className == "logo toggleMenu") {
    navClass.classList.remove("toggleMenu");
  }
}
window.addEventListener("scroll", headerMove);


//header move change
window.onscroll = scrollFunction;
// window.onload = mainContent;
function scrollFunction() {
  if (window.pageYOffset > 5) {
    document.querySelector(".logo").style.display = "flex";
    document.querySelector(".logo").style.justifyContent = "flex-start";
    // document.getElementById("logo-img").style.width = "60px";
    document.getElementById("logo-img").style.width = "0px";
    document.getElementById("logo-img").style.marginTop = "0%";
    document.getElementById("logo-img").style.marginBottom = "0%";
    document.getElementById("logo-img").style.transition = "all 1s ease-in-out";
    // document.querySelector(".logo-text").style.width = "100%";
    // document.querySelector(".logo-text").style.fontSize = "30px";
    // document.querySelector(".logo-text").style.transition =
    //   "all 1s ease-in-out";

    document.querySelector("#backlinkExp").style.fontSize = "22px";
    document.querySelector("#backlinkPro").style.fontSize = "22px";
    document.querySelector("#backlinkCon").style.fontSize = "22px";
    document.querySelector("#backlinkExp").style.transition =
      "all 1s ease-in-out";
    document.querySelector("#backlinkPro").style.transition =
      "all 1s ease-in-out";
    document.querySelector("#backlinkCon").style.transition =
      "all 1s ease-in-out";
    document.querySelector("header").style.height = "70px";
    document.querySelector("header").style.background =
      "rgba(250, 250, 250, 0.9)";

    document.querySelector("header").style.transition = "all 1s ease-in-out";
  } else if (window.pageYOffset < 50) {
    document.querySelector(".logo").style.display = "flex";
    document.getElementById("logo-img").style.width = "180px";
    document.getElementById("logo-img").style.width = "100%";

    document.getElementById("logo-img").style.marginBottom = "40%";
    document.getElementById("logo-img").style.marginTop = "40%";
    // document.querySelector(".logo-text").style.fontSize = "100px";
    // document.querySelector(".logo-text").style.width = "35%";
    // document.querySelector(".logo-text").style.justifyContent = "center";
    document.querySelector("#backlinkExp").style.fontSize = "20px";
    document.querySelector("#backlinkCon").style.fontSize = "20px";
    document.querySelector("#backlinkPro").style.fontSize = "20px";
    document.querySelector("header").style.height = "100vh";
    document.querySelector("header").style.transition = "all 1s ease-in-out";
    document.querySelector("header").style.background = "rgba(250, 250, 250)";

    window.addEventListener("scroll", scrollFunction);

    // document.getElementById("logo-img").style.transition =
    //   "all 0.5s ease-in-out";
    // document.querySelector(".logo-text").style.transition =
    //   "all 0.5s ease-in-out";

    // document.getElementById("logo-img").style.transition = "all 1s ease-in-out";
    // document.querySelector(".logo-text").style.transition =
    //   "all 1s ease-in-out";
  }
}

function helloFunc1() {
  if (hello1 < window.innerHeight/2.5 && hello1) {
    hello1 = false;
    document.getElementById("hello1").style.fontSize = "0px";
    document.getElementById("hello1").style.fontSize = "0px";
    document.getElementById("hello1").style.marginLeft = "50%";
    document.getElementById("hello1").style.transition =
      "all 1s ease-in-out";
  } else if (window.pageYOffset > 150) {
    document.getElementById("hello1").style.fontSize = "80px";
    document.getElementById("hello1").style.fontSize = "80px";
    document.getElementById("hello1").style.marginLeft = "20%";
  }
}

function helloFunc2() {
  if (hello2 < window.innerHeight/2.3 && hello2) {
    hello2 = false;
    document.getElementById("hello2").style.fontSize = "0px";
    document.getElementById("hello2").style.fontSize = "0px";
    document.getElementById("hello2").style.right = "50%";
    document.getElementById("hello2").style.transition =
      "all 1s ease-in-out";
  } else if (window.pageYOffset > 200) {
    document.getElementById("hello2").style.fontSize = "80px";
    document.getElementById("hello2").style.fontSize = "80px";
    document.getElementById("hello2").style.right = "25%";
  }
}

function helloFunc3() {
  if (hello3 < window.innerHeight/2.1 && hello3) {
    hello3 = false;
    document.getElementById("hello3").style.fontSize = "0px";
    document.getElementById("hello3").style.fontSize = "0px";
    document.getElementById("hello3").style.marginLeft = "50%";
    document.getElementById("hello3").style.transition =
      "all 1.2s ease-in-out";
  } else if (window.pageYOffset > 250) {
    document.getElementById("hello3").style.fontSize = "80px";
    document.getElementById("hello3").style.fontSize = "80px";
    document.getElementById("hello3").style.marginLeft = "10%";
  }
}

function helloFunc4() {
  if (hello4 < window.innerHeight/1.9 && hello4) {
    hello4 = false;
    document.getElementById("hello4").style.fontSize = "0px";
    document.getElementById("hello4").style.fontSize = "0px";
    document.getElementById("hello4").style.right = "50%";
    document.getElementById("hello4").style.transition =
      "all 1.3s ease-in-out";
  } else if (window.pageYOffset > 300) {
    document.getElementById("hello4").style.fontSize = "80px";
    document.getElementById("hello4").style.fontSize = "80px";
    document.getElementById("hello4").style.right = "20%";
  }
}

function helloFunc5() {
  if (hello5 < window.innerHeight/1.7 && hello5) {
    hello5 = false;
    document.getElementById("hello5").style.fontSize = "0px";
    document.getElementById("hello5").style.fontSize = "0px";
    document.getElementById("hello5").style.marginLeft = "50%";
    document.getElementById("hello5").style.transition =
      "all 1.4s ease-in-out";
  } else if (window.pageYOffset > 350) {
    document.getElementById("hello5").style.fontSize = "80px";
    document.getElementById("hello5").style.fontSize = "80px";
    document.getElementById("hello5").style.marginLeft = "35%";
  }
}

function helloFunc6() {
  if (hello6 < window.innerHeight/1.9 && hello6) {
    hello6 = false;
    document.getElementById("hello6").style.fontSize = "0px";
    document.getElementById("hello6").style.fontSize = "0px";
    document.getElementById("hello6").style.right = "50%";
    document.getElementById("hello6").style.transition =
      "all 1.5s ease-in-out";
  } else if (window.pageYOffset > 400) {
    document.getElementById("hello6").style.fontSize = "80px";
    document.getElementById("hello6").style.fontSize = "80px";
    document.getElementById("hello6").style.right = "30%";
  }
}

function helloFunc7() {
  if (hello7 < window.innerHeight/1.7 && hello7) {
    hello7 = false;
    document.getElementById("hello7").style.fontSize = "0px";
    document.getElementById("hello7").style.fontSize = "0px";
    document.getElementById("hello7").style.marginLeft = "50%";
    document.getElementById("hello7").style.transition =
      "all 1.7s ease-in-out";
  } else if (window.pageYOffset > 500) {
    document.getElementById("hello7").style.fontSize = "80px";
    document.getElementById("hello7").style.fontSize = "80px";
    document.getElementById("hello7").style.marginLeft = "15%";
  }
}
function helloFunc8() {
  if (hello8 < window.innerHeight/1.5 && hello8) {
    hello8 = false;
    document.getElementById("hello8").style.fontSize = "0px";
    document.getElementById("hello8").style.fontSize = "0px";
    document.getElementById("hello8").style.right = "50%";
    document.getElementById("hello8").style.transition =
      "all 1.8s ease-in-out";
  } else if (window.pageYOffset > 600) {
    document.getElementById("hello8").style.fontSize = "80px";
    document.getElementById("hello8").style.fontSize = "80px";
    document.getElementById("hello8").style.right = "10%";
  }
}

window.addEventListener("scroll", helloFunc1);
window.addEventListener("scroll", helloFunc2);
window.addEventListener("scroll", helloFunc3);
window.addEventListener("scroll", helloFunc4);
window.addEventListener("scroll", helloFunc5);
window.addEventListener("scroll", helloFunc6);
window.addEventListener("scroll", helloFunc7);
window.addEventListener("scroll", helloFunc8);


//personal introduction

// hidden element
// arrPersonal[0].style.right = "-500px";
// arrPersonal[0].style.opacity = "0";
// arrPersonal[1].style.opacity = "0";
// arrPersonal[2].style.opacity = "0";
// arrPersonal[3].style.opacity = "0";
// arrPersonal[4].style.opacity = "0";

// function personalFunc() {
//   let introStory = document
//     .getElementById("introStory")
//     .getBoundingClientRect().top;
//   // console.log(document.documentElement.scrollTop);
//   if (introStory < window.innerHeight / 1.5 && introStory) {
//     personal = false;
//     setTimeout(() => {
//       arrPersonal[0].style.left = "0px";
//       arrPersonal[0].style.opacity = "1";
//       arrPersonal[0].style.transition = "all 0.2s ease-in-out";
//     }, 100);
//     setTimeout(() => {
//       arrPersonal[1].style.opacity = "1";
//       arrPersonal[1].style.transition = "all 1.2s ease-in-out";
//     }, 500);
//     bigWasaLogoDiv;
//     setTimeout(() => {
//       arrPersonal[2].style.opacity = "1";
//       arrPersonal[2].style.transition = "all 1.2s ease-in-out";
//     }, 1000);

//     setTimeout(() => {
//       arrPersonal[3].style.opacity = "1";
//       arrPersonal[3].style.transition = "all 1.2s ease-in-out";
//     }, 1500);

//     setTimeout(() => {
//       arrPersonal[4].style.opacity = "1";
//       arrPersonal[4].style.transition = "all 1.2s ease-in-out";
//     }, 2000);
//   }
// }
// window.addEventListener("scroll", personalFunc);

// //logo image pipe
// // $(function () {
// //   $(".scrollImg").mousewheel(function (ev ent, delta) {
// //     this.scrollLeft -= delta * 30;
// //     event.preventDefault();
// //   });
// // });

// //skill part

// arrSkill[0].style.opacity = "0";
// arrSkill[0].style.transform = "rotateZ(45deg)";
// arrSkill[1].style.opacity = "0";
// arrSkill[1].style.transform = "rotateZ(45deg)";

// function skillFunc() {
//   let skill = document.getElementById("skill").getBoundingClientRect().top;
//   // let scrollPosition = window.pageYOffset;
//   if (skill < window.innerHeight / 2 && oneSkill) {
//     oneSkill = false;
//     setTimeout(() => {
//       skillDiv.style.transform = "rotateZ(0deg)";
//       arrSkill[0].style.opacity = "1";
//       arrSkill[0].style.transform = "rotateZ(0deg)";
//       arrSkill[0].style.transition = "all 1s ease-in-out";
//       arrSkill[1].style.opacity = "1";
//       arrSkill[1].style.transition = "all 1s ease-in-out";
//       arrSkill[1].style.transform = "rotateZ(0deg)";
//     }, 100);
//   }
// }
// window.addEventListener("scroll", skillFunc);

// //experience part function

// arrExperience[0].style.left = "-500px";
// arrExperience[0].style.opacity = "0";
// arrExperience[1].style.right = "-500px";
// arrExperience[1].style.opacity = "0";
// arrExperience[2].style.opacity = "0";
// arrExperience[3].style.opacity = "0";
// arrExperience[4].style.opacity = "0";
// arrExperience[5].style.opacity = "0";

// function experienceFunc() {
//   let experienceStat = document
//     .getElementById("experience")
//     .getBoundingClientRect().top;
//   if (experienceStat < window.innerHeight / 1.7 && experience) {
//     experience = false;
//     setTimeout(() => {
//       arrExperience[0].style.right = "100px";
//       arrExperience[0].style.opacity = "1";
//       arrExperience[0].style.transition = "all 0.2s ease-in-out";
//     }, 500);
//     setTimeout(() => {
//       arrExperience[1].style.opacity = "1";
//       arrExperience[1].style.transition = "all 0.5s ease-in-out";
//     }, 1000);
//     setTimeout(() => {
//       arrExperience[2].style.opacity = "1";
//       arrExperience[2].style.transition = "all 1s ease-in-out";
//     }, 1500);

//     setTimeout(() => {
//       arrExperience[3].style.opacity = "1";
//       arrExperience[3].style.transition = "all 1.2s ease-in-out";
//     }, 2000);

//     setTimeout(() => {
//       arrExperience[4].style.opacity = "1";
//       arrExperience[4].style.transition = "all 1.5s ease-in-out";
//     }, 2500);
//     setTimeout(() => {
//       arrExperience[5].style.opacity = "1";
//       arrExperience[5].style.transition = "all 1.7s ease-in-out";
//     }, 3000);
//   }
// }
// window.addEventListener("scroll", experienceFunc);

// // window.addEventListener("scroll", headerMove);

// // unicorn part
// function unicornFunc() {
//   if (oneUnicorn < window.innerHeight / 3.5 && oneUnicorn) {
//     oneUnicorn = false;
//     document.getElementById("unicornExp").style.width = "0px";
//     document.getElementById("unicornExp").style.height = "0px";
//     document.getElementById("unicornExp").style.marginLeft = "30%";
//     document.getElementById("unicornExp").style.transition =
//       "all 1.2s ease-in-out";
//   } else if (window.pageYOffset > 3200) {
//     document.getElementById("unicornExp").style.width = "100px";
//     document.getElementById("unicornExp").style.marginLeft = "50%";
//     document.getElementById("unicornExp").style.height = "100px";
//   }
// }
// function starFunc() {
//   if (oneStar < window.innerHeight / 3 && oneStar) {
//     oneStar = false;
//     document.getElementById("starExp").style.width = "0px";
//     document.getElementById("starExp").style.height = "0px";
//     document.getElementById("starExp").style.marginLeft = "-10%";
//     document.getElementById("starExp").style.transition =
//       "all 1.5s ease-in-out";
//   } else if (window.pageYOffset > 3500) {
//     document.getElementById("starExp").style.width = "90px";
//     document.getElementById("starExp").style.height = "90px";
//     document.getElementById("starExp").style.marginLeft = "20%";
//   }
// }


// function dinasoFunc() {
//   if (oneDinaso < window.innerHeight / 2 && oneDinaso) {
//     oneDinaso = false;
//     document.getElementById("dinasoExp").style.width = "0px";
//     document.getElementById("dinasoExp").style.height = "0px";
//     document.getElementById("dinasoExp").style.marginLeft = "0%";
//     document.getElementById("dinasoExp").style.transition =
//       "all 1.5s ease-in-out";
//   } else if (window.pageYOffset > 4000) {
//     document.getElementById("dinasoExp").style.width = "300px";
//     document.getElementById("dinasoExp").style.height = "200px";
//     document.getElementById("dinasoExp").style.marginLeft = "15%";
//   }
// }

// window.addEventListener("scroll", unicornFunc);
// window.addEventListener("scroll", starFunc);

// window.addEventListener("scroll", dinasoFunc);

// //wasatea head
// function wasaHeadFunc() {
//    let scrollPosition = window.pageYOffset;
//    if (scrollPosition > 5000) {
//      setTimeout(() => {
//       arrWasateaHead[0].style.opacity = "1";
//       arrWasateaHead[0].style.transform = "rotateZ(0deg)";
//       arrWasateaHead[0].style.transition = "all 0.7s ease-in-out";
//       arrWasateaHead[0].style.left = "0%";
//      }, 100);
//    }
//  }
// window.addEventListener("scroll", wasaHeadFunc);

// //wasa logo
// function wasaLogoFunc() {
//   let wasaDiv = document
//     .getElementById("bigWasaLogoDiv")
//     .getBoundingClientRect().top;
//   if (wasaDiv < window.innerHeight / 2 && wasaDiv) {
//     oneWasa = false;
//     setTimeout(() => {
//       arrWasaLogo[0].style.width = "200px";
//       arrWasaLogo[0].style.height = "200px";
//       arrWasaLogo[0].style.opacity = "1";
//       arrWasaLogo[0].style.transition = "all 0.5s ease-in-out";
//     }, 200);
//     setTimeout(() => {
//       arrWasaLogo[2].style.fontSize = "50px";
//       arrWasaLogo[2].style.opacity = "1";
//       arrWasaLogo[2].style.transition = "all 0.5s ease-in-out";
//     }, 500);
//   }
// }
// window.addEventListener("scroll", wasaLogoFunc);

// //wasatea text part
// function wasaFunc() {
//   let scrollPosition = window.pageYOffset;
//   if (scrollPosition > 3000) {
//     setTimeout(() => {
//       arrWasatea[0].style.opacity = "1";
//       arrWasatea[0].style.transform = "rotateZ(0deg)";
//       arrWasatea[0].style.transition = "all 1s ease-in-out";
//       arrWasatea[1].style.opacity = "1";
//       arrWasatea[1].style.transition = "all 1s ease-in-out";
//       arrWasatea[1].style.transform = "rotateZ(0deg)";
//       arrWasatea[2].style.opacity = "1";
//       arrWasatea[2].style.transition = "all 1s ease-in-out";
//       arrWasatea[2].style.transform = "rotateZ(0deg)";
//       arrWasatea[3].style.opacity = "1";
//       arrWasatea[3].style.transition = "all 1s ease-in-out";
//       arrWasatea[3].style.transform = "rotateZ(0deg)";
//       arrWasatea[4].style.opacity = "1";
//       arrWasatea[4].style.transition = "all 1s ease-in-out";
//       arrWasatea[4].style.transform = "rotateZ(0deg)";
//       arrWasatea[5].style.opacity = "1";
//       arrWasatea[5].style.transition = "all 1s ease-in-out";
//       arrWasatea[5].style.transform = "rotateZ(0deg)";
//       arrWasatea[6].style.opacity = "1";
//       arrWasatea[6].style.transition = "all 1s ease-in-out";
//       arrWasatea[6].style.transform = "rotateZ(0deg)";
//     }, 500);
//   }
// }
// window.addEventListener("scroll", wasaFunc);

// //slideshow in the wasatea blog
// var slideIndexWasa = 1;
// showSlidesWasa(slideIndexWasa);

// function plusSlidesWasa(num) {
//   showSlidesWasa((slideIndexWasa += num));
// }

// function currentSlideWasa(num) {
//   showSlidesWasa((slideIndexWasa = num));
// }

// function showSlidesWasa(num) {
//   var index;
//   var slidesWasa = document.getElementsByClassName("mySlideswasa");
//   var dotsWasa = document.getElementsByClassName("dotwasa");
//   if (num > slidesWasa.length) {
//     slideIndexWasa = 1;
//   }
//   if (num < 1) {
//     slideIndexWasa = slidesWasa.length;
//   }
//   for (index = 0; index < slidesWasa.length; index++) {
//     slidesWasa[index].style.display = "none";
//   }
//   for (index = 0; index < dotsWasa.length; index++) {
//     dotsWasa[index].className = dotsWasa[index].className.replace(
//       " active",
//       ""
//     );
//   }
//   slidesWasa[slideIndexWasa - 1].style.display = "block";
//   dotsWasa[slideIndexWasa - 1].className += " active";
// }
// //blome logo
// function blomeLogoFunc() {
//   let blomeDiv = document.getElementById("bigBdLogDiv").getBoundingClientRect()
//     .top;
//   if (blomeDiv < window.innerHeight / 2 && blomeDiv) {
//     oneBlome = false;
//     setTimeout(() => {
//       arrBlomeLogo[0].style.width = "150px";
//       arrBlomeLogo[0].style.height = "150px";
//       arrBlomeLogo[0].style.opacity = "1";
//       arrBlomeLogo[0].style.transition = "all 0.5s ease-in-out";
//     }, 200);
//     setTimeout(() => {
//       arrBlomeLogo[1].style.fontSize = "50px";
//       arrBlomeLogo[1].style.opacity = "1";
//       arrBlomeLogo[1].style.transition = "all 0.5s ease-in-out";
//     }, 500);
//   }
// }

// window.addEventListener("scroll", blomeLogoFunc);

// //dci logo
// function dciLogoFunc() {
//   let dciDiv = document.getElementById("bigDciLogDiv").getBoundingClientRect()
//     .top;
//   if (dciDiv < window.innerHeight / 2 && dciDiv) {
//     oneDci = false;
//     setTimeout(() => {
//       arrDciLogo[0].style.width = "150px";
//       arrDciLogo[0].style.height = "150px";
//       arrDciLogo[0].style.opacity = "1";
//       arrDciLogo[0].style.transition = "all 0.5s ease-in-out";
//     }, 200);
//     setTimeout(() => {
//       arrDciLogo[1].style.fontSize = "50px";
//       arrDciLogo[1].style.opacity = "1";
//       arrDciLogo[1].style.transition = "all 0.5s ease-in-out";
//     }, 500);
//   }
// }
// window.addEventListener("scroll", dciLogoFunc);

// //dci slide show part
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlidesdci");
//   var dots = document.getElementsByClassName("demodci");
//   var captionText = document.getElementById("captiondci");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");

//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   captionText.innerHTML = dots[slideIndex - 1].alt;
// }

// // Contact bubble show part
// //contact logo
// function contactLogoFunc() {
//   let dciDiv = document.getElementById("bigContactDiv").getBoundingClientRect()
//     .top;
//   if (dciDiv < window.innerHeight / 2 && dciDiv) {
//     oneContact = false;
//     setTimeout(() => {
//       arrContactLogo[0].style.width = "150px";
//       arrContactLogo[0].style.height = "150px";
//       arrContactLogo[0].style.opacity = "1";
//       arrContactLogo[0].style.transition = "all 0.5s ease-in-out";
//     }, 200);
//     setTimeout(() => {
//       arrContactLogo[1].style.fontSize = "50px";
//       arrContactLogo[1].style.opacity = "1";
//       arrContactLogo[1].style.transition = "all 0.5s ease-in-out";
//     }, 500);
//   }
// }
// window.addEventListener("scroll", contactLogoFunc);


// // contacts array
// // hidden element
// arrContacts[0].style.right = "-500px";
// arrContacts[0].style.opacity = "0";
// arrContacts[1].style.opacity = "0";

// function ContactsFunc() {
//   let contacts = document
//     .getElementById("contacts")
//     .getBoundingClientRect().top;
//   // console.log(document.documentElement.scrollTop);
//   if (contacts < window.innerHeight / 1.5 && contacts) {
//     Contacts = false;
//     setTimeout(() => {
//       arrContacts[0].style.left = "0px";
//       arrContacts[0].style.opacity = "1";
//       arrContacts[0].style.transition = "all 1.5s ease-in-out";
//     }, 100);
//     setTimeout(() => {
//       arrContacts[1].style.opacity = "1";
//       arrContacts[1].style.transition = "all 1s ease-in-out";
//     }, 500);
//     // setTimeout(() => {
//     //   arrContacts[2].style.opacity = "1";
//     //   arrContacts[2].style.transition = "all 1.6s ease-in-out";
//     // }, 1000);
//   }
// }
// window.addEventListener("scroll", ContactsFunc);


// // ===== Scroll to Top ==== 
// $(window).scroll(function() {
//   if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
//       $('#return-to-top').fadeIn(200);    // Fade in the arrow
//   } else {
//       $('#return-to-top').fadeOut(200);   // Else fade out the arrow
//   }
// });
// $('#return-to-top').click(function() {      // When arrow is clicked
//   $('body,html').animate({
//       scrollTop : 0                       // Scroll to top of body
//   }, 500);
// });
