import { gsap } from "gsap";

export let startLogosTL = gsap.timeline();


startLogosTL.from("#disney-1", {duration: 1, ease: "bounce.out", y: "-=100", alpha: 0})
;