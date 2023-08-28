$( document ).ready(function() {
    $(".nav-item a").on("click", function(e) {
        var navLink = $(this).attr("class");
        if (!navLink.includes("active")){
            
            var temp = $(this).attr('id'); 
            var html = "templates/" + temp + ".html"
    
            $("a").removeClass("active");
            $(this).toggleClass("active");
    
            // prevent page submit
            e.preventDefault();
            // Load in template
            $(".content").load(html);
        }
    });
    
    
    $('#contact').on("click", function (e) {
        event.stopImmediatePropagation();
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

