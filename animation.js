var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1;
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 2000);
}

function myFunction() {
    alert("I am an alert box!");
}

if (confirm("Spil nu!")) {
    txt = "You pressed OK!";
    // Simulate a mouse click:
    window.location.href = "http://kirstinekrogs.dk/kea/04_animation/Spil/";
} else {
    txt = "You pressed Cancel!";
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
