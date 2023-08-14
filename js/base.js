$(document).ready(function(){
    $(document).ready(function(){
        $("button").on("click", function(e) {
            var input = $(this).val();
            // prevent page submit
            e.preventDefault(); 
            $("button").removeClass("active");
            $(this).toggleClass("active");
            $(".page").load(input);
        });
    });
});