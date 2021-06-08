import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);
// GSDevTools.create();

import { startLogosTL } from "./startLogos";
import { headerTL } from "./startLogos";
import { boltStartTL } from "./topStats";
import { rpmTL } from "./topStats";
import { laptimeTL } from "./topStats";




let mainTL = gsap.timeline({paused:true});

mainTL
.add(startLogosTL)
.add(headerTL)
.addLabel("marker")
.add(boltStartTL)
.add(rpmTL, "main-stats")
.add(laptimeTL, "main-stats")
;
        // .addLabel("marker")



    mainTL.play("marker");
    // mainTL.play();