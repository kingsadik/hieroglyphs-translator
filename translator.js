function translate() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const outputDiv = document.getElementById('output');
    let output = '';

    const letterToGlyph = {
        'a': '&#x13185;',
        'b': '&#x130A4;',
        'c': '&#x13084;',
        // Add more mappings for other letters
    };

    for (let i = 0; i < inputText.length; i++) {
        const letter = inputText[i];
        const glyph = letterToGlyph[letter] || letter;
        output += glyph;
    }

    outputDiv.innerHTML = output;
}
