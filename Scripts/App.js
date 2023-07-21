import { formspreeHandling, ModalHandling } from "./modalForm.js";
import { GlitchAnimation,firstLoadGlitchAnimation } from "./heroAnimation.js";
import { showCaseAnimation } from "./showcaseAnimation.js";
import{backToTopHandling} from './backToTop.js';

const initializePage = () =>{
    showCaseAnimation();
    formspreeHandling();
    firstLoadGlitchAnimation();
    ModalHandling();
    backToTopHandling();
};

initializePage();