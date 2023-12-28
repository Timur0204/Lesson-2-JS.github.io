   
    function icao() {
        let combination = document.querySelector("#userCombo").value;
        let result = document.querySelector("#result");

    const alphabet = {
    "A": "Alpha",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliet",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whiskey",
    "X": "X-ray",
    "Y": "Yankee",
    "Z": "Zulu",
    "0": "Zero",
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine"
        }
        
        let resultText = "";

    for (let str of combination) {
        if (alphabet[str]) {
            resultText += alphabet[str] + " ";
        } else {
            resultText = `${str} is not defined `;
            break; //впринципе хороший вариант если будет неправильно введено число/буква
            
        }
    }

    result.innerHTML = `${resultText}`;
}
