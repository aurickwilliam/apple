
const swiper = new Swiper('.swiper', {
    loop: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//for video
let video_object = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};


let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.target.id == "home_vid") {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }
        }
    });
}
let observer = new IntersectionObserver(callback, video_object);
observer.observe(document.querySelector("#home_vid"));
