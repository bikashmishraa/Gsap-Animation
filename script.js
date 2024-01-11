var tl=gsap.timeline();

    tl.from(".navbar img",{
        // x:-1000,
        duration:4,
        delay:1,
        opacity:0,
    })
    gsap.from(".navbar ul a",{
        y:-1000,
        duration:2,
        delay:3,
        stagger:0.5,
    })
    
    gsap.from(".navbar .getstarted",{
        x:1000,
        duration:2,
        delay:3.5,
    })
    gsap.from(".firstimg",{
        x:-1000,
        duration:2,
        delay:3,
        opacity:0,
    })
    gsap.from(".secondimg",{
        y:-1000,
        duration:2,
        delay:3,
        opacity:0,
    })
    gsap.from(".thirdimg",{
        x:-1000,
        duration:3,
        delay:3,
        opacity:0,
    })
    gsap.from(".fourthimg",{
        x:1000,
        duration:2,
        delay:3,
        opacity:0,
    })

