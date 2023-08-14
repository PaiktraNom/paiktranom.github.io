$(".nav-item a").on("click", function(e) {
    if ($(this).attr("class") === "nav-link"){
        
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

$('#contact').click(function (event) {
    var email = 'paiktranom@gmail.com';
    var subject = 'Contact Paiktra Nom';
    var emailBody = 'Hi Paiktra,\n';
    document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
  });