
function isValidProgressBarsList(list) {
    if (!Array.isArray(list)) {
        console.error('ERROR: ProgressBars list turi buti array tipo duomenys.');
        return false;
    }
    if (list.length === 0) {
        console.error('ERROR: ProgressBars list array negali buti tuscias.');
        return false;
    }

    return true;
}

export { isValidProgressBarsList } 