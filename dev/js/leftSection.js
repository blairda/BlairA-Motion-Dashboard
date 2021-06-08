import { gsap } from "gsap";

export let leftSectionTL = gsap.timeline();

leftSectionTL
.from("#left-background", {duration: 0.33, alpha:0})
.from("#PITSTATUS", {duration: 0.33, alpha: 0, y: "-=15"})
.from("#CHECK-CIRCLE", {duration: 0.33, alpha: 0, x: "-=25"}, "pitstatus")
.from("#TIMES-CIRCLE", {duration: 0.33, alpha: 0, x: "+=25"}, "pitstatus")
.to("#TIMES-CIRCLE", {duration: 0.33, alpha: 0.33})
;