import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export let boltStartTL = gsap.timeline();

boltStartTL
.fromTo("#path-2", {drawSVG:"50% 50%"},{duration: 2, drawSVG:"0% 100%", ease: "power1.out"}, "bolt-outline")
.fromTo("#orange-bolt", {drawSVG:"50% 50%"},{duration: 2, drawSVG:"100% 0%", ease: "power1.out"}, "bolt-outline")
.fromTo("#yellow-bolt", {drawSVG:"50% 50%"},{duration: 2, drawSVG:"100% 0%", ease: "power1.out"}, "bolt-outline")
.from("#rpm-numbers path", {duration: 0.25, alpha: 0, stagger: 0.125, y: "+=10"})
.fromTo("#rpm-bolt-fill", {x:"-=755"}, {duration: 1, x:"+=755"})
.to("#rpm-bolt-fill", {duration: 0.5, x:"-=225"})
;


export let rpmTL = gsap.timeline();

rpmTL
.from("#RPM", {duration: 0.33, alpha: 0, x: "-=25"})
.from("#tachometer", {duration: 0.33, alpha: 0, y: "-=25"}, "-=0.1")
;


export let laptimeTL = gsap.timeline();

laptimeTL
.from("#LAPTIME", {duration: 0.33, alpha: 0, x: "+=25"})
.from("#stopwatch", {duration: 0.33, alpha: 0, y: "-=25"}, "-=0.1")
.from("#MIN", {duration: 0.25, alpha: 0, y: "+=25"}, "time-unit")
.from("#SEC", {duration: 0.25, alpha: 0, y: "+=25"}, "time-unit")
;


export let speedLightsTL = gsap.timeline();

speedLightsTL
.fromTo("#speed-oval", {drawSVG:"false"},{duration: 1, drawSVG:"true", ease: "power1.out"})
.fromTo("#speed-oval", {fill:"#9C1C25"},{duration: 1, fill:"#FFFFFF"})
.fromTo("#circle-1-1", {drawSVG:"50% 50%"},{duration: 0.25, drawSVG:"100%", ease: "power1.out"})
.from("#circle-1-2", {duration: 0.1, alpha:0})
// .fromTo("#circle-1-2", {drawSVG:"0%"},{duration: 0.25, drawSVG:"100% 0%", ease: "power1.out"}, "circle-1")
.fromTo("#circle-2-1", {drawSVG:"50% 50%"},{duration: 0.25, drawSVG:"100%", ease: "power1.out"}, "-=0.125")
.from("#circle-2-2", {duration: 0.1, alpha:0})
// .fromTo("#circle-2-2", {drawSVG:"0%"},{duration: 0.25, drawSVG:"100% 0%", ease: "power1.out"}, "circle-2")
.fromTo("#circle-3-1", {drawSVG:"50% 50%"},{duration: 0.25, drawSVG:"100%", ease: "power1.out"}, "-=0.125")
.from("#circle-3-2", {duration: 0.1, alpha:0})
// .fromTo("#circle-3-2", {drawSVG:"0%"},{duration: 0.25, drawSVG:"100% 0%", ease: "power1.out"}, "circle-3")
.fromTo("#circle-4-1", {drawSVG:"50% 50%"},{duration: 0.25, drawSVG:"100%", ease: "power1.out"}, "-=0.125")
.from("#circle-4-2", {duration: 0.1, alpha:0})
// .fromTo("#circle-4-2", {drawSVG:"0%"},{duration: 0.25, drawSVG:"100% 0%", ease: "power1.out"}, "circle-4")
.fromTo("#circle-5-1", {drawSVG:"50% 50%"},{duration: 0.25, drawSVG:"100%", ease: "power1.out"}, "-=0.125")
.from("#circle-5-2", {duration: 0.1, alpha:0})
// .fromTo("#circle-5-2", {drawSVG:"0%"},{duration: 0.25, drawSVG:"100% 0%", ease: "power1.out"}, "circle-5")
.fromTo("#circle-6-1", {drawSVG:"50% 50%"},{duration: 0.25, drawSVG:"100%", ease: "power1.out"}, "-=0.125")
.from("#circle-6-2", {duration: 0.1, alpha:0})
// .fromTo("#circle-6-2", {drawSVG:"0%"},{duration: 0.25, drawSVG:"100% 0%", ease: "power1.out"}, "circle-6")

.from("#path-8", {duration: 0.125, alpha:0}, "-=0.05")
.from("#path-7", {duration: 0.125, alpha:0}, "-=0.05")
.from("#path-6", {duration: 0.125, alpha:0}, "-=0.05")
.from("#path-5", {duration: 0.125, alpha:0}, "-=0.05")
.from("#path-4", {duration: 0.125, alpha:0}, "-=0.05")
.from("#path-3", {duration: 0.125, alpha:0}, "-=0.05")

// .to("#path-8", {duration: 0.125, alpha:1}, "-=0.05")
// .to("#path-7", {duration: 0.125, alpha:1}, "-=0.05")
// .to("#path-6", {duration: 0.125, alpha:1}, "-=0.05")
// .to("#path-5", {duration: 0.125, alpha:1}, "-=0.05")
// .to("#path-4", {duration: 0.125, alpha:1}, "-=0.05")
// .to("#path-3", {duration: 0.125, alpha:1}, "-=0.05")

.to("#path-3", {duration: 0.125, alpha:0.33}, "-=0.05")
.to("#path-4", {duration: 0.125, alpha:0.33}, "-=0.05")
.to("#path-5", {duration: 0.125, alpha:0.33}, "-=0.05")
.to("#path-6", {duration: 0.125, alpha:0.33}, "-=0.05")
.to("#path-7", {duration: 0.125, alpha:0.33}, "-=0.05")
.to("#path-8", {duration: 0.125, alpha:0.33}, "-=0.05")

.to("#path-8", {duration: 0.15, alpha:1})
.to("#path-7", {duration: 0.15, alpha:1})
;