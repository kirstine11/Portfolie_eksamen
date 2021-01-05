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
