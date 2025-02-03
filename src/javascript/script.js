$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active')
        $('#mobile_btn').find('i').toggleClass('fa-x')
    })

})

$(window).on('scroll', function() {
    const header = $('header')
    const scrollPosition = $(window).scrollTop() - header.outerHeight()
    let activeSectionIndex = 0

    if(scrollPosition <= 0) {
        header.css('box-shadow', 'none')
    } else {
        header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)')
    }
})

ScrollReveal().reveal('#cta', {
    origin: 'left',
    duration: 2000,
    distance:'20%'
})

ScrollReveal().reveal('#banner', {
    origin: 'right',
    duration: 2000,
    distance:'20%'
})
ScrollReveal().reveal('#list_tarja', {
    origin: 'top',
    duration: 1000,
    distance:'20%'
})