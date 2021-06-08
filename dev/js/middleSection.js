import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export let voltsTL = gsap.timeline();

voltsTL
.fromTo("#vertical-2", {drawSVG:"false"},{duration: 0.25, drawSVG:"true", ease: "power1.out"})
.from("#middle-rectangle-yellow", {duration: 0.25, alpha:0, y:"+=100"})
.fromTo("#diagonal-3", {drawSVG:"false"},{duration: 0.25, drawSVG:"true", ease: "power1.out"})

.from("#VOLTS", {duration: 0.25, alpha:0, x:"-=30"}, "-=.1")
.from("#volts-unit", {duration: 0.25, alpha:0, y:"-=10"}, "-=.1")
.from("#bolt", {duration: 0.25, alpha:0, y:"+=10"}, "-=.1")
;


export let oilTL = gsap.timeline();

oilTL
.from("#middle-rectangle-black", {duration: 0.25, alpha:0, y:"+=100"})
.fromTo("#diagonal-4", {drawSVG:"false"},{duration: 0.25, drawSVG:"true", ease: "power1.out"})

.from("#OILTEMP", {duration: 0.25, alpha:0, x:"-=30"}, "-=.1")
.from("#oil-unit", {duration: 0.25, alpha:0, y:"-=10"}, "-=.1")
.from("#burn", {duration: 0.25, alpha:0, y:"+=10"}, "-=.1")
;


export let waterTL = gsap.timeline();

waterTL
.from("#middle-rectangle-blue", {duration: 0.25, alpha:0, y:"+=100"})

.from("#WATERTEMP", {duration: 0.25, alpha:0, x:"-=30"}, "-=.1")
.from("#water-unit", {duration: 0.25, alpha:0, y:"-=10"}, "-=.1")
.from("#tint", {duration: 0.25, alpha:0, y:"+=10"}, "-=.1")
;




// voltsTL
// .from("#middle-rectangle-yellow", {duration: 0.25, alpha:0, y:"+=100"})
// .fromTo("#diagonal-3", {drawSVG:"false"},{duration: 0.25, drawSVG:"true", ease: "power1.out"})
// .from("#middle-rectangle-black", {duration: 0.25, alpha:0, y:"+=100"}, "-=.15")
// .fromTo("#diagonal-4", {drawSVG:"false"},{duration: 0.25, drawSVG:"true", ease: "power1.out"})
// .from("#middle-rectangle-blue", {duration: 0.25, alpha:0, y:"+=100"}, "-=.15")

// .from("#VOLTS", {duration: 0.25, alpha:0, x:"-=30"})
// .from("#OILTEMP", {duration: 0.25, alpha:0, x:"-=30"}, "-=.1")
// .from("#WATERTEMP", {duration: 0.25, alpha:0, x:"-=30"}, "-=.1")

// .from("#volts-unit", {duration: 0.25, alpha:0, y:"-=10"})
// .from("#oil-unit", {duration: 0.25, alpha:0, y:"-=10"}, "-=.1")
// .from("#water-unit", {duration: 0.25, alpha:0, y:"-=10"}, "-=.1")

// .from("#bolt", {duration: 0.25, alpha:0, y:"+=10"})
// .from("#burn", {duration: 0.25, alpha:0, y:"+=10"}, "-=.1")
// .from("#tint", {duration: 0.25, alpha:0, y:"+=10"}, "-=.1")

// ;