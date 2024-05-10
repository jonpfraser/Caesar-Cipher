class CaesarCipher {
    static alphabets = {
        alphaOnly: 'abcdefghijklmnopqrstuvwxyz .,!?',
        alphaNumeric: 'abcdefghijklmnopqrstuvwxyz1234567890 .,!?',
        alphaNumericSpecial: 'abcdefghijklmnopqrstuvwxyz1234567890 .,!?@#$%^&*()-=_+'
    }
    constructor(alphabet) {
        this.alphabet = CaesarCipher.alphabets[alphabet].split('');
    }

    encode(string, shift) {
        const chars = string.toLowerCase().split('');
        const output = [];

        for (const char of chars) {
            const index = this.alphabet.indexOf(char);
            const newIndex = (index + shift) % this.alphabet.length;
            output.push(this.alphabet[newIndex]);
        }
        return output.join('');
    }

    decode(string, shift) {
        const chars = string.toLowerCase().split('');
        const output = [];

        for (const char of chars) {
            const index = this.alphabet.indexOf(char);
            const newIndex = (index - shift + this.alphabet.length) % this.alphabet.length;
            output.push(this.alphabet[newIndex]);
        }
        return output.join('');
    }
}

export default CaesarCipher;