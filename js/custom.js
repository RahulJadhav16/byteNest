// javascript Animate onscroll Start
    $(document).ready(function () {
    if (screen.width > 1024) {
    AOS.init({
    easing: 'ease-in-out-sine',
    once: true,
    });
    }
    });

// javascript Top-Onscroll Start
$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".banner").offset().top},"1000");return false})})

// javascript viewbox Start
$(function(){
	$('.thumbnail').viewbox();
});

//Loader logic 
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Set a delay of 2 seconds (2000 milliseconds)
    setTimeout(function() {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 2000); // Adjust the delay time as needed
});


