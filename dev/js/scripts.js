import { gsap } from "gsap";

let shapeTL = gsap.timeline();

shapeTL.from("#shape", {duration: .5, x: 0, y: 0})
    .to("#shape", { duration: 1.5, y: 550, rotate: 360 })
    .to("#shape", { duration: .25, scaleX: 2.5, scaleY: 0.5 })
    .to("#shape", { duration: .2, scaleX: 1, scaleY: 1 })
    .to("#shape", { duration: .25, scaleX: 0.5, scaleY: 2, transformOrigin: "center bottom" })
    .to("#shape", { duration: .5, scaleX: 1, scaleY: 1 })
    .to("#shape", {duration: 2, ease: "elastic.inOut(1, 0.5)", y: -1})
    .to("#shape", { duration: .75, x: 700, scale: 0.5, rotate: 180, backgroundColor: "#3d000a", borderColor: "#720316" }, "change1")
    .to("#container", {duration: .75, backgroundColor: "#f6c6c6"}, "change1")

    .to("#shape", { duration: .5, skewY: 45, scale: 1 })
    .to("#shape", { duration: .5, skewY: 0 })
    .to("#shape", { duration: .3, repeat: 3, yoyo: true, rotateY: 90, backgroundColor: "#720316", borderColor: "#3d000a" }, "change2")
    .to("#container", {duration: .75, backgroundColor: "#ffffff"}, "change2")

    .to("#shape", {duration: 1.5, ease: "power4.out", y: 300 })
    .to("#shape", { duration: 1.5, ease: "power1.in", y: 500, x: -15, scale: 0.25, backgroundColor: "#720316", borderColor: "#3d000a", border: 3 }, "change3")
    .to("#container", {duration: 1.5, backgroundColor: "#f6c6c6"}, "change3")

    .to("#shape", { duration: 1.5, ease: "slow.in", x: 500, y: -15, scale: 2, border: 30 }, "change4")
    .to("#container", {duration: 1.5, backgroundColor: "#ffffff"}, "change4")

    .to("#shape", { duration: .25, alpha: 0.25, repeat: 3, yoyo: true })
    .to("#shape", { duration: .5, scale: 1, border: 10 })
    .to("#shape", { duration: 1, rotate: 720 }, "change5")
    .to("#container", {duration: 1, backgroundColor: "#f6c6c6"}, "change5")
    
    .to("#shape", { duration: 1, ease: "bounce.out", y: 300 });