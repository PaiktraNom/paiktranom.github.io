$( document ).ready(function() {

    fetch("templates/landing.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector(".landing").innerHTML = data;
        });
    fetch("templates/about.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector(".about").innerHTML = data;
        });
    fetch("templates/end.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector(".end").innerHTML = data;
        });
});

function scrollToEnd() {
    document.getElementById('scroll-to-end').scrollIntoView({ block: "start", behavior: "smooth" });
    return false;
}

function scrollToAbout() {
    document.getElementById('scroll-to-about').scrollIntoView({ block: "start", behavior: "smooth" });
    return false;
}

function email(){
    var email = 'paiktranom@gmail.com';
    var subject = 'Contact Paiktra Nom';
    var emailBody = 'Hi Paiktra,\n';
    document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
    return false;
}

