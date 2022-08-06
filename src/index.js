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
};

function decode(expr) {
    let arr =[];
    arr = Array.from(expr);
    let subarray = [];
    let str = '';
    for (let i = 0; i <Math.ceil(arr.length/10); i++){
        subarray[i] = arr.slice((i*10), (i*10) + 10);}
        subarray = subarray.join(' ');  
    arr = String(subarray).replace(/0,0/g, "");
    arr = arr.replace(/,/g, "");
    arr = arr.replace(/10/g, ".");
    arr = arr.replace(/11/g, "-");
    arr = arr.split(" ");
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === '**********') {
            str += ' ';
        }
    for(let key in MORSE_TABLE){
        if(key === arr[i]){
        str += MORSE_TABLE[key]
    }
        }
    };
    return str;
}


module.exports = {
    decode
}