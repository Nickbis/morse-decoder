const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
};

function decode(expr) {
    // write your solution here

   // read letter from table morse
    function toMorse(letter) {
        return MORSE_TABLE[letter];
    }
   // code to morse deshifrator 
    let mas = [];
    let mainResult = '';

    for (let i = 0; i < expr.length / 10; i++) {
        mas.push(expr.slice(i * 10, i * 10 + 10));
    }

    function toMorseEl(el) {
        let morseEl = '';

        if (el === '**********') {
            morseEl = ' ';
        } else {

            for (let i = 0; i < el.length / 2; i++) {
                if (el.slice(i * 2, i * 2 + 2) === '10') {
                    morseEl += '.';
                } else if (el.slice(i * 2, i * 2 + 2) === '11') {
                    morseEl += '-';
                }
            }
        }

        return toMorse(morseEl);
    }

    for (let z = 0; z < mas.length; z++) {
        mainResult += toMorseEl(mas[z]);
    }
  //  console.log(mainResult);
    return mainResult;


    console.log(x);
    // самый крутой и короткий код, но еще неразобрался...
/*    return expr.match(/.{10}/g).map(item=>MORSE_TABLE[item.replace(/10/g,'.').replace(/11/g,'-').replace(/0/g,'')]).join(''); */


}

module.exports = {
    decode
}