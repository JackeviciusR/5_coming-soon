
/**
 * Progress bar komponento generavimas
 * @param {string} selector CSS like selectorius, kaip rasti vieta, kur sugeneruoti turini
 * @param {string} title Progress bar pavadinimas
 * @param {number} value Progress bar reiksme procentais
 * @returns {boolean} Funkcijai tinkamai suveikus grazinas `true`, priesingu atveju - `false`
 */
function renderProgressBar(selector, title, value) {
    const HTML = `<div class="progress-bar">
                    <div class="top">
                        <div class="label">${title}</div>
                        <div class="value">${value}%</div>
                    </div>
                    <div class="bottom">
                        <div class="bar" style="width: ${value}%;">
                            <div class="loader"></div>
                        </div>
                    </div>
                </div>`;

    const DOM = document.querySelector(selector);
    DOM.insertAdjacentHTML('beforeend', HTML);

    return true;
}

export { renderProgressBar }