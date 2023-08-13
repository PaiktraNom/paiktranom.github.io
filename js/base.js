$(document).ready(function(){
    $("#includedContent").load("base.html"); 


            // Adding click event on id div-1
            // if it clicked then anonymous
            // function will be called
            $('#home').click(function () {
 
                // Load the external html
                // here this refers to
                // current selector
                $(this).load('index.html');
            });
            // Same as above
            $('#about').click(function () {
                $(this).load('about.html');
            });

            $('#contact').click(function () {
                $(this).load('contact.html');
            });
  });