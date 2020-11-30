import { isInputValid } from "./isInputValid.js";
import { isValidSocialItem } from './isValidSocialItem.js';

// dokumentacija
/**
 * Social nuorodu generavimas is pateiktu duomenu i nurodyta vieta DOM'e.
 * @param {string} selector Selectorius, kaip rasti norima vieta, kur bus istatomas sugeneruotas kodas
 * @param {Array} data Duomenu masyvas su objektais, kurie reprezentuoja social nuorodas
 * @returns {boolean} Logikos vykdymo metu radus klaida grazinas `false`, o funkcijai suveikus teisingai - `true`
 */

function renderSocials(selector, data) {
    console.log('Generuojamas socials turinys');
    // console.log(data);

    // input validation

    if (!isInputValid(selector, data)) {
        return false;
    }

    // logic

    // ima viena elementa
    const socialsDOM = document.querySelector(selector);

    if (!socialsDOM) {
        console.error('ERROR: nerasta turinio generavimo vieta');
        return false;
    }
    
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        
        const item = data[i];

        if (!isValidSocialItem(item)) {
            continue;
        }

        HTML += `<a href="${item.link}" target="_blank" class="social fa fa-${item.icon}" aria-hidden="true"></a>`;        // console.log(item.link, item.icon);
    }

    // console.log(HTML);

    // post logic validation
    if (HTML === '') {
        console.error('ERROR: nepavyko sugeneruoti social ikonu/nuorodu.');
        return false;
    }
 
    // return
    socialsDOM.innerHTML +=HTML;

    return true;
}
    

export { renderSocials }
