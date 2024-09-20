var tl = gsap.timeline();
tl.from("#nav_bar img, #nav_bar_part2 h4, #nav_bar_part3 h3, #nav_bar_part3 button ",{
    y: -100,
    duration: 0.6,
    delay: 1,
    opacity:0,
    stagger:0.5
});

tl.from("#main h1",{
    y:100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.5            
});

tl.from("h5",{
    y:40,
    repeat: -1,
    duration:0.7,
    yoyo:true,
    opacity:0
    // stagger:0.5
})

