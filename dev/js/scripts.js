import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);
// GSDevTools.create();

import { startLogosTL } from "./startLogos";
import { headerTL } from "./startLogos";
import { boltStartTL } from "./topStats";
import { rpmTL } from "./topStats";
import { laptimeTL } from "./topStats";
import { speedLightsTL } from "./topStats";
import { drawLinesTL } from "./drawLines";
import { leftSectionTL } from "./leftSection";
import { rightSectionTL } from "./rightSection";
import { batteryTL } from "./rightSection";
import { middleSectionTL } from "./middleSection";
import { waterTL } from "./middleSection";


let mainTL = gsap.timeline({paused:true});

mainTL
.addLabel("marker")
.add(startLogosTL)
.add(headerTL)
.add(boltStartTL)
.add(rpmTL)
.add(laptimeTL, "-=0.25")
.add(speedLightsTL)
.add(drawLinesTL)
.add(leftSectionTL)
.add(rightSectionTL)
.add(batteryTL)
.add(middleSectionTL)
.add(waterTL)
;
        // .addLabel("marker")



    mainTL.play("marker");
    // mainTL.play();