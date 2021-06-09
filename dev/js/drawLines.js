import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export let drawLinesTL = gsap.timeline();

drawLinesTL
.fromTo("#diagonal-1", {drawSVG:"false"},{duration: 0.5, drawSVG:"true", ease: "power1.out"})
.fromTo("#diagonal-2", {drawSVG:"false"},{duration: 0.5, drawSVG:"true", ease: "power1.out"}, "-=0.2")
;