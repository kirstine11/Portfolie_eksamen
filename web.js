var i = 0;
var txt = 'http://kirstinekrogs.dk';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("tekst").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
