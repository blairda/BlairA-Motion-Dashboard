import { gsap } from "gsap";

export let middleSectionTL = gsap.timeline();

middleSectionTL
.from("#nav-bar", {duration: 0.25, alpha: 0, y:"+=50"})
.from("#tint", {duration: 0.25, alpha: 0})
.from("#bolt", {duration: 0.25, alpha: 0}, "-=0.1")
.from("#burn", {duration: 0.25, alpha: 0}, "-=0.1")
;


export let waterTL = gsap.timeline();

waterTL