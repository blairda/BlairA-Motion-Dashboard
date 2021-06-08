import { gsap } from "gsap";

export let rightSectionTL = gsap.timeline();

rightSectionTL
.from("#right-background", {duration: 0.33, alpha:0})
.from("#BATTERY", {duration: 0.33, alpha: 0, y: "-=15"})
.from("#plug", {duration: 0.33, alpha: 0, x: "-=25"})
;

gsap.set("#battery-lines path",{transformOrigin:"bottom right"});
export let batteryTL = gsap.timeline();

batteryTL
.fromTo("#battery-container", {drawSVG:"false"},{duration: 0.5, drawSVG:"true", ease: "power1.out"})
.fromTo("#battery-edge", {drawSVG:"false"},{duration: 0.5, drawSVG:"true", ease: "power1.out"})
.from("#battery-lines path", {duration: 0.25, stagger: 0.125, alpha:0, scale:0})
;