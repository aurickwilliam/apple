var name = "";

$(function () {
    $(".container").mouseover(function () {
        $(this).css("transform", "scale(1.02)");
    }); 
    $(".container").mouseout(function () {
        $(this).css("transform", "scale(1)");
    }); 
    

    $(".item").mouseover(function () {
        $(this).css("transform", "scale(1.02)");
    });
    $(".item").mouseout(function () {
        $(this).css("transform", "scale(1)");
    });

    //for checkout
    $("button").click(function () {
        name = $(this).attr('id');
        // alert(name);
    });

});

$(document).ready(function() {
    $('.autoWidth').lightSlider({
        autoWidth:true,
        loop: false,
        enableDrag: false,
        onSliderLoad: function() {
            $('.autoWidth').removeClass('cS-hidden');
        } 
    });  
});


const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
