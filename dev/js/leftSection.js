import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export let leftSectionTL = gsap.timeline();

leftSectionTL
.fromTo("#vertical-1", {drawSVG:"false"},{duration: 0.25, drawSVG:"true", ease: "power1.out"})
.from("#left-background", {duration: 0.33, alpha:0, x:"-=275"})
.from("#PITSTATUS", {duration: 0.33, alpha: 0, y: "-=15"})
.from("#CHECK-CIRCLE", {duration: 0.33, alpha: 0, x: "-=25"}, "pitstatus")
.from("#TIMES-CIRCLE", {duration: 0.33, alpha: 0, x: "+=25"}, "pitstatus")
.to("#TIMES-CIRCLE", {duration: 0.33, alpha: 0.33})
;


gsap.set("#pit-status",{transformOrigin:"center"});
gsap.set("#SPEEDUP",{transformOrigin:"center"});
export let enterAlertTL = gsap.timeline();

enterAlertTL
.fromTo("#alert-line", {drawSVG:"false"},{duration: 0.25, drawSVG:"true", ease: "power1.out"})
.to("#alert-line", {duration:0.33, y:"-=100"}, "move-stat")
.to("#pit-status", {duration: 0.33, scale: 0.65, y:"-=80"}, "move-stat")

.from("#ALERT", {duration:0.33, alpha:0})
.from("#INCOMINGCARLEFT", {duration:0.33, alpha:0}, "alert-msg")
.from("#arrow-left", {duration:0.33, alpha:0, x:"+=30"}, "alert-msg")
.from("#SPEEDUP", {duration:0.5, alpha:0, y:"+=20"})
.to("#SPEEDUP", {duration:0.25, scale:1.25, repeat:3, yoyo:true, ease: "power1.out"})
;


export let exitAlertTL = gsap.timeline();

exitAlertTL
.to(".alert-info", {duration: 0.5, alpha:0, delay:0.75})
.to("#alert-line", {duration: 0.5, y:"+=190", alpha:0}, "return-stat")
.to("#pit-status", {duration:0.25, y:"+=80", scale:1}, "return-stat")
;