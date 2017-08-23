$(document).ready(function(){
    $("#button1").click(function(){
        $("p").slideToggle();
    });
    $("#button2").click(function(){
        $("#div1").animate({'marginLeft' : "+=50px"});
    });
    $("#button3").click(function(){
        $("#div1").animate({'marginLeft' : "-=50px"});
    });
});
