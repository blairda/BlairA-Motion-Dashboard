import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export let boltStartTL = gsap.timeline();

boltStartTL
.fromTo("#path-2", {drawSVG:"50% 50%"},{duration: 2, drawSVG:"0% 100%", ease: "power1.out"}, "bolt-outline")
.fromTo("#orange-bolt", {drawSVG:"50% 50%"},{duration: 2, drawSVG:"100% 0%", ease: "power1.out"}, "bolt-outline")
.from("#rpm-numbers path", {duration: 0.25, alpha: 0, stagger: 0.125, y: "+=10"})
;


export let rpmTL = gsap.timeline();

rpmTL
.from("#RPM", {duration: 0.5, alpha: 0, x: "-=25"})
.from("#tachometer", {duration: 0.5, alpha: 0, y: "-=25"})
;


export let laptimeTL = gsap.timeline();

laptimeTL
.from("#LAPTIME", {duration: 0.5, alpha: 0, x: "+=25"})
.from("#stopwatch", {duration: 0.5, alpha: 0, y: "-=25"})
.from("#MIN", {duration: 0.5, alpha: 0, y: "+=25"}, "time-unit")
.from("#SEC", {duration: 0.5, alpha: 0, y: "+=25"}, "time-unit")
;