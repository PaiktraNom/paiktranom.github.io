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
    fetch("templates/tech.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector(".tech").innerHTML = data;
        });
    fetch("templates/experience.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector(".experience").innerHTML = data;
        });
    fetch("templates/project.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector(".project").innerHTML = data;
        });
    fetch("templates/end.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector(".end").innerHTML = data;
        });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
        $('.landing').css({
            'display': 'none'
        });
    }
    if ($(this).scrollTop() < 600){
        $('.landing').css({
            'display': 'inline-block'
        });
    }
});

function scrollToEnd() {
    document.getElementById('end-scroll-anchor').scrollIntoView({ block: "start", behavior: "smooth" });
    return false;
}

function scrollToAbout() {
    document.getElementById('about-scroll-anchor').scrollIntoView({ block: "start", behavior: "smooth" });
    return false;
}

function email(){
    var email = 'paiktranom@gmail.com';
    var subject = 'Contact Paiktra Nom';
    var emailBody = 'Hi Paiktra,\n';
    document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
    return false;
}