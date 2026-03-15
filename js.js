let currentSlide = 0;
const slides = document.querySelectorAll(".profile-pic");

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    slides[currentSlide].classList.add("active");
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

showSlide(currentSlide);

const text1 = "안녕하세요!";
const text2 = "개발꿈나무 이지우";
const text3 = "입니다.";

const typing1 = document.getElementById("typing1");
const typing2 = document.getElementById("typing2");
const typing3 = document.getElementById("typing3");
const treeIcon = document.getElementById("treeIcon");

let i = 0;
let j = 0;
let k = 0;

function type1() {
    if (i < text1.length) {
        typing1.innerHTML += text1.charAt(i);
        i++;
        setTimeout(type1, 80);
    } else {
        setTimeout(type2, 300);
    }
}

function type2() {
    if (j < text2.length) {
        typing2.innerHTML += text2.charAt(j);
        j++;
        setTimeout(type2, 80);
    } else {
        setTimeout(type3, 100);
    }
}

function type3() {
    if (k < text3.length) {
        typing3.innerHTML += text3.charAt(k);
        k++;
        setTimeout(type3, 80);
    } else {
        treeIcon.style.display = "inline-block";
    }
}

type1();