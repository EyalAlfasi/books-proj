export const UtilService = {
    getRandomInt,
    getRandomCurrencyCode,
    getRandomTrueOrFalse
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //min inclusive, max not inclusive
}

function getRandomCurrencyCode() {
    const currencies = ['EUR', 'ILS', 'USD']
    return currencies[Math.floor(Math.random() * 3)];
}

function getRandomTrueOrFalse() {
    return (Math.random() > 0.5) ? true : false;
}