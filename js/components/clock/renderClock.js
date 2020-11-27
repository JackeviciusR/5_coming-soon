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

    
    // einamieji metai (pvz 2020)
    const date = new Date();
    const currentYear = date.getFullYear();

    // galutine data = einamieji metai + 1 (2020 +1 = 2021)
    const newYear = currentYear + 1;
    // sukonstruojame pilna data: ${metai}--01-01 00:00:00
    const newYearDate = `${newYear}-01-01 00:00:00`;
    const newYearObject = new Date(newYearDate);
    const newYearMiliseconds = newYearObject.getTime();// gaunamas milisekundemis

    console.log(`newYearMiliseconds: ${newYearMiliseconds}`);

    // einamasis laikas yyyy-mm-dd hh:mm:ss
    // gaunamas milisekundemis
    const currentTimeMiliseconds = date.getTime();

        // console.log(currentTimeMiliseconds);

    // suskaiciuojame laiko skirtuma
    const timeLeft = newYearMiliseconds - currentTimeMiliseconds;
    console.log(timeLeft);
    // paverciam i sekundes
    let secondLeft = timeLeft / 1000;

    // is skirtumo apskaiciuojame likusias dienas, valandas, minutes ir sekundes
    const days = Math.floor(secondLeft / (24 * 60 * 60));
    console.log(days);
    secondLeft -= days * 24 * 60 * 60;
    const hours = Math.floor(secondLeft / (60 * 60));
    secondLeft  -= hours * 60 * 60;
    const minutes = Math.floor(secondLeft / 60);
    secondLeft -= minutes * 60;
    const seconds = Math.floor(secondLeft);


    const HTML =`<div class="time-box">
                    <div class="time">${days}</div>
                    <span>Days</span>
                </div>
                <div class="time-box">
                    <div class="time">${hours}</div>
                    <span>Hours</span>
                </div>
                <div class="time-box">
                    <div class="time">${minutes}</div>
                    <span>Minutes</span>
                </div>
                <div class="time-box">
                    <div class="time">${seconds}</div>
                    <span>Seconds</span>
                </div>`;

    DOM.innerHTML = HTML;

    return true;

}

export { renderClock }