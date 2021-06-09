import { gsap } from "gsap";
// import { GSDevTools } from "gsap/GSDevTools";

// gsap.registerPlugin(GSDevTools);
// GSDevTools.create();

import { startLogosTL } from "./startLogos";
import { headerTL } from "./startLogos";

import { boltStartTL } from "./topStats";
import { rpmTL } from "./topStats";
import { laptimeTL } from "./topStats";

import { drawLinesTL } from "./drawLines";

import { leftSectionTL } from "./leftSection";

import { voltsTL } from "./middleSection";
import { oilTL } from "./middleSection";
import { waterTL } from "./middleSection";

import { speedLightsTL } from "./topStats";

import { rightSectionTL } from "./rightSection";
import { batteryTL } from "./rightSection";

import { enterAlertTL } from "./leftSection";
import { exitAlertTL } from "./leftSection";

import { timeCountTL } from "./topStats";


let mainTL = gsap.timeline({paused:true});

mainTL
// .addLabel("marker")
.add(startLogosTL)
.add(headerTL)

.add(boltStartTL, "top")
.add(rpmTL, "-=1.25")
.add(laptimeTL, "-=0.75")

.add(drawLinesTL, "bottom")

.add(leftSectionTL, "bottom")

.add(voltsTL)
.add(oilTL, "-=0.1")
.add(waterTL, "-=0.1")

.add(speedLightsTL, "top")

.add(rightSectionTL)
.add(batteryTL)

.add(enterAlertTL)
.add(exitAlertTL)

.add(timeCountTL, "-=16")
;


// mainTL.play("marker");
mainTL.play();