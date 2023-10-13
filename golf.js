const cur = document.querySelector("#cursor");

document.addEventListener("mousemove",function(dets){
    cur.style.left = dets.x+"px"
    cur.style.top = dets.y+"px"


})
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"90px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
      
        start:"top -50%",
        end:"top -80%",
        scrub:1
    }
})