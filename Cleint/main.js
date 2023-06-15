function section1() {
    let header = document.querySelector(".landingHeader");
    let typed = new Typed(header, {
        strings: ["Hello, I'm Jamie.", "A Software Engineer", "and Graphic Designer.", "Hello, I'm Jamie." + "<br>" + "A Software Engineer" + "<br>" + "and Graphic Designer."],
        typeSpeed: 45,
        backSpeed: 50,
        backDelay: 1000,
        loop: false,
        showCursor: false,
    });
}

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".headerContainer").style.top = "0";
    } else {
        document.querySelector(".headerContainer").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

function workBoxClick() {

    // get each individual box and add event listener
    const box1 = document.querySelector(".workBox1");
    const box1Content = document.querySelector(".hiddenContent");
    box1.addEventListener("click", () => {
        box1.classList.toggle("active");
        box1Content.classList.toggle("hiddenContentDisplay");


    });

    const box2 = document.querySelector(".workBox2");
    box2.addEventListener("click", () => {
        box2.classList.toggle("active");

    });

    const box3 = document.querySelector(".workBox3");
    box3.addEventListener("click", () => {
        box3.classList.toggle("active");

    });

    const box4 = document.querySelector(".workBox4");
    box4.addEventListener("click", () => {
        box4.classList.toggle("active");

    });

    const box5 = document.querySelector(".workBox5");
    box5.addEventListener("click", () => {
        box5.classList.toggle("active");

    });

    const box6 = document.querySelector(".workBox6");
    box6.addEventListener("click", () => {
        box6.classList.toggle("active");

    });
}



function init() {
    workBoxClick();
    section1();
}

window.onload = init();