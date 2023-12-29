   
   function NumbersTranscript() {
    let userNumber = document.querySelector('#userNumber').value;
    let resultNumber = document.querySelector('#resultNumber');

    const units = ['', 'одна', 'дві', 'три', 'чотири', 'пять', 'шість', 'сім', 'вісім', 'девять'];
    const unitsAlternativ = ['', 'один', 'два', 'три', 'чотири', 'пять', 'шість', 'сім', 'вісім', 'девять'];
    const tens = ['десять', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'пятнадцять', 'шістнадцять', 'сімнадцять', 'вісімнадцять', 'девятнадцять'];
    const tensPartTwo = ['', '', 'двадцять', 'тридцять', 'сорок', 'пятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'девяносто'];
    const hundreds = ['', 'сто', 'двісті', 'триста', 'чотириста', 'пятсот', 'шістсот', 'сімсот', 'вісімсот', 'девятсот'];

    let result = '';
    let hundredsDigit = Math.floor(userNumber / 100);
    let tensDigit = Math.round((userNumber % 100) / 10);
    let unitsDigit = userNumber % 10;

    if (hundredsDigit > 0) {
        result += hundreds[hundredsDigit] + ' ';
    }

    if (tensDigit >= 2) {
        result += tensPartTwo[tensDigit] + ' ';
        if (unitsDigit > 0) {
            result += unitsAlternativ[unitsDigit];
        }
    } else if (tensDigit === 1) {
        result += tens[userNumber % 100 - 10];
    } else if (unitsDigit > 0) {
        result += units[unitsDigit];
    }

    if (userNumber >= 1 && userNumber <= 4) {
        result += ' гривні';
    } else if (userNumber >= 5 && userNumber <= 20) {
        result += ' гривень';
    } else {
        let lastDigit = userNumber % 10;
        if (lastDigit >= 5 || lastDigit === 0) {
            result += ' гривень';
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            result += ' гривні';
        } else {
            result += ' гривня';
        }
    }

    resultNumber.value = result;
}
