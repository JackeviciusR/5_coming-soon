import { countTimeDiff } from './countTimeDiff.js';
 

// selector

/**
 * Generuoja statini laikrodi, kuris parodo, kiek liko laiko iki nurodytos datos
 * @param { string } selector CSS taisykle, kaip rasti vieta, kur bus generuojamas laikrodzio HTML turinys
 * @return { * }
 */
function renderClock(selector) {
    // selector, nurodo kur turesime laikrodi istatyti

    if (typeof selector !== 'string') {
        console.error('ERROR: selectorius turi buti tekstinio tipo');
        return false;
    }
    if (selector == '') {
        console.error('ERROR: selectorius negali buti tuscias tekstas');
        return false;
    }

    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error("ERROR: nerasta vieta, kur sugeneruoti");
        return false;
    }

    // funkcija grazina objekta: {}
    const time = countTimeDiff();
    
    
    const HTML =`<div class="time-box">
                <div class="time">${time.days}</div>
                    <span>Days</span>
                </div>
                <div class="time-box">
                    <div class="time">${time.hours}</div>
                    <span>Hours</span>
                </div>
                <div class="time-box">
                    <div class="time">${time.minutes}</div>
                    <span>Minutes</span>
                </div>
                <div class="time-box">
                    <div class="time">${time.seconds}</div>
                    <span>Seconds</span>
                </div>`;


    DOM.innerHTML = HTML;
    const timesDOM = DOM.querySelectorAll('.time');

    // paleidziamas laikrodis
    let timePassed = 0;

    
    // funkcija setInterval(vykdoma funkcija, laikas);
    // laikas (ms) siuo atveju nurodo, kas kiek laiko bus iskvieciama viduje esanti funkcija
    setInterval(() => {
        const time = countTimeDiff();
        timesDOM[0].innerText = time.days;
        timesDOM[1].innerText = time.hours;
        timesDOM[2].innerText = time.minutes;
        timesDOM[3].innerText = time.seconds;
    }, 1000);

    return true;

}

export { renderClock }