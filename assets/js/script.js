   
   function NumbersTranscript() {
    let userNumber = document.querySelector('#userNumber').value;
    let resultNumber = document.querySelector('#resultNumber');

    const units = ['', 'одна', 'дві', 'три', 'чотири', 'пять', 'шість', 'сім', 'вісім', 'девять'];
    const unitsAlternativ = ['', 'одна', 'дві', 'три', 'чотири', 'пять', 'шість', 'сім', 'вісім', 'девять'];
    const tens = ['десять', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'пятнадцять', 'шістнадцять', 'сімнадцять', 'вісімнадцять', 'девятнадцять'];
    const tensPartTwo = ['', '', 'двадцять', 'тридцять', 'сорок', 'пятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'девяносто'];
    const hundreds = ['', 'сто', 'двісті', 'триста', 'чотириста', 'пятсот', 'шістсот', 'сімсот', 'вісімсот', 'девятсот'];

    let result = '';
    let hundredsDigit = Math.floor(userNumber / 100);
    let tensDigit = Math.floor((userNumber % 100) / 10);
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

    if (userNumber > 1 && userNumber <= 4) {
        result += ' гривні';
    } else if (userNumber >= 5 && userNumber <= 20) {
        result += ' гривень';
    } else {
        let prelastDigit = userNumber % 10;
        if (prelastDigit >= 5 || prelastDigit === 0) {
            result += ' гривень';
        } else if (prelastDigit >= 2 && prelastDigit <= 4 ) {
            result += ' гривні';
        } else if(userNumber == 1) {
            result += ' гривня'
        } else if (isNaN(userNumber) || userNumber == '') {
            resultNumber.value = 'Введіть коректну суму';
            return; 
        } else {
            result += ' гривня';
        }
    }

    resultNumber.value = result;
}
