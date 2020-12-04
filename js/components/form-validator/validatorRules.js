
import { isValidEmail} from './isValidEmail.js';
import { isValidName } from './isValidName.js';
import { isValidText } from './isValidText.js';

// validation objekto key (raktazodziai) specialiai sutampa su terminais naudojamais HTML formose esanciuose data-validation reiksmese

const validation = {
    name: isValidName,
    email: isValidEmail,
    text: isValidText,
}

export { validation }