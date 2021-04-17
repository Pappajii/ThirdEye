$(document).ready(function(){
        
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });

    $('nav ul li a').click(function(){
        $('.fa-hamburger').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
    });

    

});