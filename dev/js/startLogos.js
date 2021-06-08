import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export let startLogosTL = gsap.timeline();


startLogosTL
.from("#disney-1", {duration: 1, ease: "bounce.out", y: "-=75", alpha: 0})
.from("#pixar-p", {duration: 0.5, ease: "power1.out", y: "+=75", alpha: 0}, "-=0.25")
.from("#pixar-i", {duration: 0.5, ease: "power1.out", y: "-=75", alpha: 0}, "-=0.25")
.from("#pixar-x", {duration: 0.5, ease: "power1.out", y: "+=75", alpha: 0}, "-=0.25")
.from(".pixar-a", {duration: 0.5, ease: "power1.out", y: "-=75", alpha: 0}, "-=0.25")
.from(".pixar-r", {duration: 0.5, ease: "power1.out", y: "+=75", alpha: 0}, "-=0.25")

.to("#logos-1", {duration:0.5, alpha: 0, delay:0.5})
.to("#logo-box-1", {duration:0.75, y:"+=100"})
.fromTo("#sig-line-1", {drawSVG:"0% 0%"},{duration: 0.75, drawSVG:"0% 100%", ease: "power1.out"}, "box-out")
.to("#logo-box-1", {duration:0.25, alpha: 0}, "box-out")
;