import { gsap } from "gsap";
// import { GSDevTools } from "gsap/GSDevTools";

// gsap.registerPlugin(GSDevTools);
// GSDevTools.create();

import { startLogosTL } from "./startLogos";
import { headerTL } from "./startLogos";

import { boltStartTL } from "./topStats";
import { rpmTL } from "./topStats";
import { laptimeTL } from "./topStats";
import { speedLightsTL } from "./topStats";

import { drawLinesTL } from "./drawLines";

import { leftSectionTL } from "./leftSection";

import { voltsTL } from "./middleSection";
import { oilTL } from "./middleSection";
import { waterTL } from "./middleSection";

import { rightSectionTL } from "./rightSection";
import { batteryTL } from "./rightSection";


let mainTL = gsap.timeline({paused:true});

mainTL
.addLabel("marker")
.add(startLogosTL)
.add(headerTL, "begin")

.add(boltStartTL, "begin")
.add(rpmTL)
.add(laptimeTL, "-=0.25")
.add(speedLightsTL, "next")

.add(drawLinesTL, "next")

.add(leftSectionTL)

.add(voltsTL)
.add(oilTL, "-=0.1")
.add(waterTL, "-=0.1")

.add(rightSectionTL)
.add(batteryTL)
;
        // .addLabel("marker")



    mainTL.play("marker");
    // mainTL.play();