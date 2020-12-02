import { isValidEmail, isValidName, isValidText } from './validatorRules.js'

// formu validavimas

function formValidator(selector) {

    // selektoriaus pazymetas elementas grazinamas kaip objektas
    const formDOM = document.querySelector(selector);
    console.log('formDOM',formDOM);

    // mygtuko elementa grazina kaip objekta is formDOM objektas (elemento pagal selektor)
    const submitBtnDOM = formDOM.querySelector('input[type="submit"]');
    console.log(submitBtnDOM);

    if (!submitBtnDOM) {
        console.error(`ERROR: formoje nerasta input:submit mygtukas (elementas), t.y. elementas nera sukurtas index.html faile`);
        return false;
    }

    const allInputDOMs = formDOM.querySelectorAll('input:not([type="submit"])');
    const allTextareaDOMs = formDOM.querySelectorAll('textarea');
    console.log('>>>>', allInputDOMs);

    const allElements = [...allInputDOMs, ...allTextareaDOMs];
    console.log(allElements);

    if (allElements.length === 0) {
        console.error(`ERROR: formoje nerasta nei vieno input ar textarea elementu`);
        return false;
    }

    // ka darytys jei submit mygtukas bus paspaustas
    submitBtnDOM.addEventListener('click', () => {
        let errorCount = 0;
        console.clear();

        for (let input of allElements) {

            //  iš data-validation html'e; dataset.validation nurodo kad ieskosime validation reiksmes
            const validationRule = input.dataset.validation;
            // istraukiamas koks tekstas irasytas ir bus validuojamas
            const text = input.value;

            const nameError = isValidName(text);
            const emailError = isValidEmail(text);
            const textError = isValidText(text);

            if (validationRule === 'name' && nameError !== true) {
                console.log(nameError);
                errorCount++;
            }
            if (validationRule === 'email' && emailError !== true) {
                console.log(emailError);
                errorCount++;
            }
            if (validationRule === 'text' && textError !== true) {
                console.log(textError);
                errorCount++;
            }
        }

        if (errorCount === 0) {
            console.log('Siumciam info...');
        }
    })

}

export { formValidator }