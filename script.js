var tl=gsap.timeline();

var a=0;
function time(){
    setInterval(function(){
    a+= Math.floor(Math.random()*15);
    if(a<100){
        document.querySelector(".loader h1").innerHTML = a + "%";
    }
    else{
        a=100;
        document.querySelector(".loader h1").innerHTML = a + "%";
    }
},100)

}
tl.to(".loader h1",{
    scale:3,
    duration:1,
    delay:0.1,
})
tl.to(".loader",{
    top:"-100%",
    duration:2,
    delay:1,
    onStart:time(),
})
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

