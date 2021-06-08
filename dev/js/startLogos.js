import { gsap } from "gsap";

export let startLogosTL = gsap.timeline();


startLogosTL
.from("#disney-1", {duration: 1, ease: "bounce.out", y: "-=75", alpha: 0})
.from("#pixar-p", {duration: 0.5, ease: "power1.out", y: "+=75", alpha: 0}, "-=0.25")
.from("#pixar-i", {duration: 0.5, ease: "power1.out", y: "-=75", alpha: 0}, "-=0.25")
.from("#pixar-x", {duration: 0.5, ease: "power1.out", y: "+=75", alpha: 0}, "-=0.25")
.from(".pixar-a", {duration: 0.5, ease: "power1.out", y: "-=75", alpha: 0}, "-=0.25")
.from(".pixar-r", {duration: 0.5, ease: "power1.out", y: "+=75", alpha: 0}, "-=0.25")
;