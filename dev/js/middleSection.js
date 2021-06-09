import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export let voltsTL = gsap.timeline();

voltsTL
.fromTo("#vertical-2", {drawSVG:"false"},{duration: 0.25, drawSVG:"true", ease: "power1.out"})
.from("#middle-rectangle-yellow", {duration: 0.25, alpha:0, y:"+=100"})
.fromTo("#diagonal-3", {drawSVG:"false"},{duration: 0.25, drawSVG:"true", ease: "power1.out"})

.from("#VOLTS", {duration: 0.25, alpha:0, x:"-=30"}, "volt-intro")
.from("#bolt", {duration: 0.25, alpha:0, y:"+=10"}, "volt-intro")
.from("#volts-lines", {duration: 0.25, alpha:0, repeat:3, yoyo:true, ease: "power1.out"})
.from("#volts-number", {duration: 0.25, alpha:0})
.from("#volts-unit", {duration: 0.25, alpha:0, y:"-=10"}, "-=.1")
;


export let oilTL = gsap.timeline();

oilTL
.from("#middle-rectangle-black", {duration: 0.25, alpha:0, y:"+=100"})
.fromTo("#diagonal-4", {drawSVG:"false"},{duration: 0.25, drawSVG:"true", ease: "power1.out"})

.from("#OILTEMP", {duration: 0.25, alpha:0, x:"-=30"}, "oil-intro")
.from("#burn", {duration: 0.25, alpha:0, y:"+=10"}, "oil-intro")
.from("#oil-lines", {duration: 0.25, alpha:0, repeat:3, yoyo:true, ease: "power1.out"})
.from("#oil-number", {duration: 0.25, alpha:0})
.from("#oil-unit", {duration: 0.25, alpha:0, y:"-=10"}, "-=.1")
;


export let waterTL = gsap.timeline();

waterTL
.from("#middle-rectangle-blue", {duration: 0.25, alpha:0, y:"+=100"})

.from("#WATERTEMP", {duration: 0.25, alpha:0, x:"-=30"}, "water-intro")
.from("#tint", {duration: 0.25, alpha:0, y:"+=10"}, "water-intro")
.from("#water-lines", {duration: 0.25, alpha:0, repeat:3, yoyo:true, ease: "power1.out"})
.from("#water-number", {duration: 0.25, alpha:0})
.from("#water-unit", {duration: 0.25, alpha:0, y:"-=10"}, "-=.1")
;