/**
 * Created by jaWeber on 11/4/16.
 */
$(document).ready(function() {
    "use strict";

    var timer = null;
    function flash() {
        if (timer != null) {
            clearInterval(timer);
            timer=null;
            // make sure the background is in place after flashing
            if (($("#container").hasClass("flash"))) {
                $("#container").removeClass("flash");
            }
        } else {
            timer = setInterval(function(){ $('#container').toggleClass("flash"); }, 100);
        }
    }

    $("#flash").click(function() {flash()});

    $(".flagpic").click(function() {
        $(this).rotate({
            angle: 0,
            animateTo: 720
        });
    });

    $('#clintonName').click(function() {
        $(this).rotate({
            angle: 0,
            center: ["50%", "-100%"],
            animateTo:360
        });
    });
    $('#trumpName').click(function() {
        $(this).rotate({
            angle: 0,
            center: ["50%", "-130%"],
            animateTo:360
        });
    });

    $('#pen').click(function() {
        $('#pen').animate({left:"+33%"});
        $('#pen').effect("bounce", {times:4},300);
        $('#pen').animate({left:"65%"});
        $('#pen').effect("bounce", {times:4},300);
        $('#pen').animate({left:"45%"});
    });

    $('.checkbox').click(function() {
        flash("on");
        $('#capitol').delay(1500).effect('explode',function() {flash()});
        $('#capitol').delay(500).effect('explode');
        $('#capitol').delay(1000).toggle("explode");
    });

    $("#voteLeft").click(function() {
        /*$('#voteRed').fadeOut("slow");*/
        $("#voteLeft").animate({
            width: "200%",
            height: "200%",
            opacity: '0'}, 5000);
        });

    $("#voteRight").click(function() {
        $("#voteRight").animate({top: "-=200px"}, "slow");
        $("#voteRight").animate({left: "-=800px"}, "slow");
        $("#voteRight").animate({top: "+=200px"}, "slow");
        $("#voteRight").animate({left: "+=800px"}, "slow");
    });

    $('#star').click(function() {
        $('#star').animate({top: "-=500px"}, 2000, function() {
            $('.firework').css("display","inline");
            $('.firework').effect("bounce", {times:10},1000);
        });
    });

    $('#donkey').click (function() {
        $(this).animate({
            left: "-=300px",
            opacity: "0"},
            "3000");
    });

    $('#elephant').click (function() {
        $(this).animate({
                left: "+=300px",
                opacity: "0"},
            "3000");
    });

});