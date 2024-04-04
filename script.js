document.getElementById('translateBtn').addEventListener('click', function() {
    const translationMode = document.getElementById('translationMode').value;
    const inputText = document.getElementById('inputText').value.trim();

    if (inputText === '') {
        alert('Please enter some text to translate.');
        return;
    }

    let translatedText = '';

    if (translationMode === 'englishToHieroglyphs') {
        translatedText = translateToHieroglyphs(inputText);
    } else if (translationMode === 'hieroglyphsToEnglish') {
        translatedText = translateToEnglish(inputText);
    }

    document.getElementById('outputText').textContent = translatedText;
});

function translateToHieroglyphs(text) {
    // Your translation logic from English to hieroglyphs goes here
    // This is a simplified example
    return text.toUpperCase().split('').map(char => {
        switch (char) {
            case 'A': return '𓄿';
            case 'B': return '𓃀';
            case 'C': return '𓎢';
            case 'D': return '𓂧';
            case 'E': return '𓅂';
            case 'F': return '𓆑';
            case 'G': return '𓎼';
            case 'H': return '𓉔';
            case 'I': return '𓇋';
            case 'J': return '𓆓';
            case 'K': return '𓈎';
            case 'L': return '𓃭';
            case 'M': return '𓅓';
            case 'N': return '𓈖';
            case 'O': return '𓅱';
            case 'P': return '𓊪';
            case 'Q': return '𓎡';
            case 'R': return '𓂋';
            case 'S': return '𓋴';
            case 'T': return '𓏏';
            case 'U': return '𓅲';
            case 'V': return '𓆯';
            case 'W': return '𓅃';
            case 'X': return '𓇨';
            case 'Y': return '𓇌';
            case 'Z': return '𓊃';

            default: return char;
        }
    }).join('');
}

function translateToEnglish(text) {
    // Your translation logic from hieroglyphs to English goes here
    // This is a simplified example
    return text.replace(/𓄿/g, 'A')
               .replace(/𓃀/g, 'B')
               .replace(/𓎢/g, 'C')
               .replace(/𓂧/g, 'D')
               .replace(/𓅂/g, 'E')
               .replace(/𓆑/g, 'F')
               .replace(/𓎼/g, 'G')
               .replace(/𓉔/g, 'H')
               .replace(/𓇋/g, 'I')
               .replace(/𓆓/g, 'J')
               .replace(/𓈎/g, 'K')
               .replace(/𓃭/g, 'L')
               .replace(/𓅓/g, 'M')
               .replace(/𓈖/g, 'N')
               .replace(/𓅱/g, 'O')
               .replace(/𓊪/g, 'P')
               .replace(/𓎡/g, 'Q')
               .replace(/𓂋/g, 'R')
               .replace(/𓋴/g, 'S')
               .replace(/𓏏/g, 'T')
               .replace(/𓅲/g, 'U')
               .replace(/𓆯/g, 'V')
               .replace(/𓅃/g, 'W')
               .replace(/𓇨/g, 'X')
               .replace(/𓇌/g, 'Y')
               .replace(/𓊃/g, 'Z');
               
    // Add more replacements for other hieroglyphs
}
