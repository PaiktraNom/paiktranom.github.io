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
    if ($(this).scrollTop() > 800) {
        $('.landing').css({
            'display': 'none'
        });
    }
    if ($(this).scrollTop() < 800){
        $('.landing').css({
            'display': 'inline-block'
        });
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 800) {
        $('.project').css({
            'display': 'inline-block'
        });
    }
    if ($(this).scrollTop() < 800){
        $('.project').css({
            'display': 'none'
        });
    }
});



function scrollToEnd() {
    setTimeout(function () {
        document.getElementById('end-scroll-anchor-1').scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
   }, 100);
    //document.getElementById('end-scroll-anchor').scrollIntoView({ block: "start", behavior: "smooth" });
    return false;
}

function scrollToEnd2() { //For some reason the contact me at the top does not want to go to the contact me card. it only sits on top of the element
    setTimeout(function () {
        document.getElementById('end-scroll-anchor-2').scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
   }, 100);
    //document.getElementById('end-scroll-anchor').scrollIntoView({ block: "start", behavior: "smooth" });
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