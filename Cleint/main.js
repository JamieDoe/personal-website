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

function onHover() {
    // on hover of work boxes, display their unique descriptio
}



function init() {
    //alert("This website is still under construction. It is only responsive for screens 1080p and above at the moment... Excuse the mess!");
    section1();
    onHover();
}

window.onload = init();