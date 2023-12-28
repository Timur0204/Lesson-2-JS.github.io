   
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

    if (tensDigit > 1) {
        result += tensPartTwo[tensDigit] + ' ';
        if (unitsDigit > 0) {
            result += units[unitsDigit];
        }
    } else if (tensDigit === 1) {
        result += tens[userNumber % 100 - 10];
    } else if (unitsDigit > 0) {
        if (userNumber === 1) {
            result += 'одна гривна';
        } else if (userNumber >= 2 && userNumber <= 4) {
            result += unitsAlternativ[unitsDigit] + ' гривны';
        } else {
            result += units[unitsDigit] + ' гривен';
        }
    }

    resultNumber.value = result;
}
