$(document).ready(function(){
    $('#contact').click(function (event) {
        var email = 'paiktranom@gmail.com';
        var subject = 'Contact Paiktra Nom';
        var emailBody = 'Hi Paiktra,\n';
        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
      });

    $(".nav").on("click", function(e) {
        var input = $(this).val();
        // prevent page submit
        e.preventDefault(); 
        $("button").removeClass("active");
        $(this).toggleClass("active");
        $(".page").load(input);
    });
});