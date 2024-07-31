var tl = gsap.timeline();

tl.from(".nav_bar1, .nav_bar2, .nav_bar3",{
    opacity:0,
    y:-100,
    duration:2,
    delay:0.5,
    stagger:0.5,


})

tl.from(".left_side",{
    scale:0,
    opacity:0,
    duration:1,
    yoyo:true

})

tl.from(".right_side",{
    scale:0,
    opactity:0,
    duration:1,
})

var tl2 = gsap.timeline();
tl2.from(".card",{
    scale:0,
    opacity:0,
    duration:1,
    stragger:0.5,
    scrollTrigger:{
        trigger:".card",
        scroll:"body",
        start: "top 65%",
        end: "top 30%",
        // markers: true,
        scrub: 2
    }
})



