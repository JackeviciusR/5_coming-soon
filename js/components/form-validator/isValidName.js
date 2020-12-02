function isValidName(name) {

    const maxNameLength = 50;

    if (typeof name !== 'string') {
        return `Vardas turi buti teksto tipo`;
    }

    if (name === '') {
        return `Vardas negali buti buti tuscias`;
    }

    if (name.length > maxNameLength) {
        return `Vardas negali virsyti ${ maxNameLength } simboliu (virsita ${ name.length - maxNameLength } simboliu)`;
    }


    // turi buti tik abeceles raides
    const abc = '';
    for(let letter of name) {
        if(!abc.includes(letter)) {
            return `Varde panaudota neleistinas simbolis (${letter})`;
        }
    }

    // pirma raide didzioji, visos kitos mazosios
    // if (name.t) {} // ASD -> asd, Asd -> rim, asd -> asd
    
    return true;
}

export { isValidName }