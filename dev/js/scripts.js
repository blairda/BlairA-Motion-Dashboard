import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);
GSDevTools.create();

import { startLogosTL } from "./startLogos";



let mainTL = gsap.timeline({paused:true});

mainTL.add(startLogosTL);
        // .addLabel("marker")



    // mainTL.play("marker");
    mainTL.play();