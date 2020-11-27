// console.log('JS is running...');

import { renderClock } from "./components/clock/renderClock.js";
import { renderSocials } from "./components/socials/renderSocials.js";
import { socialsData } from './data/socialsData.js';

renderSocials('footer > .row', socialsData);

renderClock('.clock');