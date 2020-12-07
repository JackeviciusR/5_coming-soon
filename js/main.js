// console.log('JS is running...');

import { renderClock } from "./components/clock/renderClock.js";
import { renderSocials } from "./components/socials/renderSocials.js";
import { renderAllProgressBars } from './components/progress-bar/renderAllProgressBars.js';

import { progressBarData } from './data/progressBarData.js';
import { socialsData } from './data/socialsData.js';

import { formValidator } from './components/form-validator/formValidator.js';

import { Toast } from './components/toast/Toast.js';

renderSocials('footer > .row', socialsData);

renderClock('.clock');

renderAllProgressBars(progressBarData);

const toast = new Toast();
toast.render();
// toast.show('error', 'Cia yra klaida!!!');
toast.show('success', 'Buvo gera diena!!! ;)');

formValidator('.hero .form', toast);
// naudojant elementu vardus, nereikia nuorodoje deti taska pries elemento varda, kaip: main, input ir pan.s
formValidator('main .form', toast);