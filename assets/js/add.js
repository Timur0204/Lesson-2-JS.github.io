   
    function icao() {
        let result = document.querySelector("#result");
        let combination = document.querySelector("#userCombo").value;

        const icaoSymbol = [
            'Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot',
            'Golf', 'Hotel', 'India', 'Juliet', 'Kilo', 'Lima',
            'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo',
            'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray',
            'Yankee', 'Zulu', 'Zero', 'One', 'Two', 'Three', 
            'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'
        ]

        const icaoMeaning = [
            'A', 'B', 'C',
            'D', 'E', 'F',
            'G', 'H', 'I',
            'J', 'K', 'L',
            'M', 'N', 'O',
            'P', 'Q', 'R',
            'S', 'T', 'U',
            'V', 'W', 'X',
            'Y', 'Z',
            0, 1, 2,
            3, 4, 5,
            6, 7, 8,
            9,
        ];

        
        for(let i = 0; i < icaoMeaning.length; i++) {
            if(combination == [i]) {
                result.innerHTML = icaoSymbol[i]
            } else {
                result.innerHTML = `${combination} is not defindet`
            }
        }

    }
