$(".nav-item button").on("click", function(e) {
    if ($(this).attr("class") === "nav"){
        var input = $(this).val(); 
        $("button").parent().removeClass("active");
        $(this).parent().toggleClass("active");
        // prevent page submit
        e.preventDefault();
        $(".content").load(input);
    }
});

$('#contact').click(function (event) {
    var email = 'paiktranom@gmail.com';
    var subject = 'Contact Paiktra Nom';
    var emailBody = 'Hi Paiktra,\n';
    document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
  });