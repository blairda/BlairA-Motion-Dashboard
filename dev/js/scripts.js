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




let mainTL = gsap.timeline({paused:true});

mainTL
.add(startLogosTL)
.add(headerTL)
.add(boltStartTL)
.addLabel("marker")
.add(rpmTL, "main-stats")
.add(laptimeTL, "main-stats")
.add(speedLightsTL)
;
        // .addLabel("marker")



    mainTL.play("marker");
    // mainTL.play();