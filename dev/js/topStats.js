import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export let boltStartTL = gsap.timeline();

boltStartTL
.fromTo("#path-2", {drawSVG:"50% 50%"},{duration: 2, drawSVG:"0% 100%", ease: "power1.out"}, "bolt-outline")
.fromTo("#orange-bolt", {drawSVG:"50% 50%"},{duration: 2, drawSVG:"100% 0%", ease: "power1.out"}, "bolt-outline")

;