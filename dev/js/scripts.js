import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);
// GSDevTools.create();

import { startLogosTL } from "./startLogos";
import { rpmBoltTL } from "./rpmBolt";



let mainTL = gsap.timeline({paused:true});

mainTL
.add(startLogosTL)
// .add(rpmBoltTL)
;
        // .addLabel("marker")



    // mainTL.play("marker");
    mainTL.play();