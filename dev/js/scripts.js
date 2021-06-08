import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);
// GSDevTools.create();

import { startLogosTL } from "./startLogos";
import { headerTL } from "./startLogos";
import { boltStartTL } from "./topStats";



let mainTL = gsap.timeline({paused:true});

mainTL
.add(startLogosTL)
.add(headerTL)
.add(boltStartTL)
;
        // .addLabel("marker")



    // mainTL.play("marker");
    mainTL.play();