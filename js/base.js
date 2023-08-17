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
    
    $('#contact').on("click", function (e) {
        e.stopImmediatePropagation();
        document.getElementById('scroll-to-end').scrollIntoView({block: "start", behavior: "smooth"});
        // prevent page submit
        e.preventDefault();
    });
    
    $('#email').on("click", function (e) {
        var email = 'paiktranom@gmail.com';
        var subject = 'Contact Paiktra Nom';
        var emailBody = 'Hi Paiktra,\n';
        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
        // prevent page submit
        e.preventDefault();
    });
});

