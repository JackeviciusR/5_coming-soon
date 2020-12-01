// laiko skaiciavimas 

function countTimeDiff() {

    // einamieji metai (pvz 2020)
    const date = new Date();
    const currentYear = date.getFullYear();

    // galutine data = einamieji metai + 1 (2020 +1 = 2021)
    const newYear = currentYear + 1;
    // sukonstruojame pilna data: ${metai}--01-01 00:00:00
    const newYearDate = `${newYear}-01-01 00:00:00`;
    const newYearObject = new Date(newYearDate);
    const newYearMiliseconds = newYearObject.getTime();// gaunamas milisekundemis

    // console.log(`newYearMiliseconds: ${newYearMiliseconds}`);

    // einamasis laikas yyyy-mm-dd hh:mm:ss
    // gaunamas milisekundemis
    const currentTimeMiliseconds = date.getTime();

        // console.log(currentTimeMiliseconds);

    // suskaiciuojame laiko skirtuma
    const timeLeft = newYearMiliseconds - currentTimeMiliseconds;
    // console.log(timeLeft);
    // paverciam i sekundes
    let secondLeft = timeLeft / 1000;

    // is skirtumo apskaiciuojame likusias dienas, valandas, minutes ir sekundes
    const days = Math.floor(secondLeft / (24 * 60 * 60));
    // console.log(days);
    secondLeft -= days * 24 * 60 * 60;
    const hours = Math.floor(secondLeft / (60 * 60));
    secondLeft  -= hours * 60 * 60;
    const minutes = Math.floor(secondLeft / 60);
    secondLeft -= minutes * 60;
    const seconds = Math.floor(secondLeft);

    return {
        days: days < 10 ? '0' + days : days,
        hours: hours < 10 ? '0' + hours : hours,
        minutes: minutes < 10 ? '0' + minutes : minutes,
        seconds: seconds  < 10 ? '0' + seconds : seconds,
    }

}

export { countTimeDiff }