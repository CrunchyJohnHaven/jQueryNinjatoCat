$(document).ready(function(){
    $("#imageA, #imageB, #imageC, #imageD, #imageE").click(function(){
        $(this).fadeOut("5000",function(){
            $(this).attr("data-temp", $(this).attr("src"));
            $(this).attr("src", $(this).attr("alt"));
            $(this).attr("alt", $(this).attr("data-temp"));
            console.log(0);
        })
        $(this).fadeIn("5000")
        })
    });