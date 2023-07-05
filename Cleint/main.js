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

function formEmail() {

    const submitBtn = document.querySelector("#submit");
    submitBtn.addEventListener("click", function(e) {
        e.preventDefault();
        let selector = document.querySelector("#selector").value;
        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let message = document.querySelector("#message").value;
        let body = 'Service: ' + selector + '<br>' + 'name: ' + name + '<br>' + 'email: ' + email + '<br>' + 'message: ' + message;
        
        Email.send({
            SecureToken : "285231fa-b690-4f18-a029-96f090cf63f0",
            To : 'jamieoliverdoe@gmail.com',
            From : 'jamieoliverdoe@gmail.com',
            Subject : "This is the subject",
            Body : body,
        }).then(
          alert("Thank you for contacting me! I will get back to you as soon as possible."),
        );
    });
}

function carousel() {
    const carousel = document.querySelector(".wrapper");
    firstImg = carousel.querySelectorAll("img")[0];
    arrowIcons = document.querySelectorAll("#work i");

    let isDragStart = false, prevPageX, prevScrollLeft;
    let firstImgWidth = firstImg.clientWidth + 14;

    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        });
    });

    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX;
        prevScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if(!isDragStart) return;
        e.preventDefault();
        let positionDiff = e.pageX - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
    }

    const dragStop = () => {
        isDragStart = false;
    }
    
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mouseup", dragStop);
}

function init() {
    //alert("This website is still under construction. It is only responsive for screens 1080p and above at the moment... Excuse the mess!");
    section1();
    carousel();
    formEmail();
}

window.onload = init();