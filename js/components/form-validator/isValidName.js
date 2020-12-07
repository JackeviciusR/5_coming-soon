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
    let abc = 'qwertyuiopasdfghjklzxcvbnm';
    // pridedame didziasias raides
    abc = abc.concat('', abc.toUpperCase());

    for(let letter of name) {
        if(!abc.includes(letter)) {
            return `Varde panaudota neleistinas simbolis (${letter})`;
        }
    }

    const realNameFormat = name[0].toUpperCase() + name.slice(1).toLowerCase();
    if (realNameFormat !== name) {
        return `Varda turi sudaryti pirmoji didzioji raide, o likusios raides yra mazosios, pvz.: Vardenis`
    }
    // pirma raide didzioji, visos kitos mazosios
    // if (name.t) {} // ASD -> asd, Asd -> rim, asd -> asd
    
    return true;
}

export { isValidName }