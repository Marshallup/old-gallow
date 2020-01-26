const colorButton = document.querySelector('.change-background');
const docBody = document.querySelector('body')

colorButton.addEventListener('click', () => {
    const colorInput = document.querySelector('.color-input').value;
    docBody.style.backgroundColor = colorInput
});

const applyButton = document.querySelector('.change-colors');
const resetButton = document.querySelector('.reset-colors');

applyButton.addEventListener('click', () => {
    const colorBg = document.querySelector('.color-bg').value;
    docBody.style.backgroundColor = colorBg
    const colorFt = document.querySelector('.color-font').value;
    docBody.style.color = colorFt
});
resetButton.addEventListener('click', () => {
    docBody.style.backgroundColor = 'white';
    docBody.style.color = 'black'
});

const textBlock = document.querySelector('.text-group-paragrafe');

function changeFontSizeNum() {
    const input = document.querySelector('.range-input').value;
    textBlock.style.fontSize = input + 'px';
    document.querySelector('#fontSizeNum').innerHTML = input
};


const colorBlock = document.querySelector('.color-block');

function applyColor() {
    const oneInput = document.querySelector('.range-input-one').value;
    const twoInput = document.querySelector('.range-input-two').value;
    const threeInput = document.querySelector('.range-input-three').value;

    colorBlock.style.backgroundColor = `rgb( ${oneInput}, ${twoInput}, ${threeInput} )`;

    colorBlock.innerHTML = `<div class = radius-text> rgb( ${oneInput}, ${twoInput}, ${threeInput} ) </div>`

}


// function square(a) {
// 	return a * a
//   }
//   function sumOfSquares(a, b) {
// 	return ( square(a) ) + ( square(b) )
//   }
//   function squareSumOfSquares(a, b) {
// 	return square(sumOfSquares( a,  b ))
//   }
//   console.log(squareSumOfSquares(1, 1))


//   let total = 0, count = 1;
//   while( count <= 10 ) {
//     total += count;
//     count += 1;
//   }
//   console.log(total)


// for ( i = 1; i <= 100; i++ ) {
//   if ( i % 3 == 0 && i % 5 == 0 ) {
//     console.log('FizzBuzz')
//     continue
//   } else  if ( i % 3 == 0 ) { 
//     console.log('Fizz')
//     continue
//   } else if ( i % 5 == 0 ) {
//     console.log('Buzz')
//     continue
//   } 
//   console.log(i)
// }

// for ( let i = 1; i <= 100; i++ ) {
//   let str = '';
//   if ( i % 3 == 0 ) str += 'Fizz';
//   if ( i% 5 == 0 ) str += 'Buzz';
//   console.log( str || i)
// }


// for ( let line = '#'; line.length < 8; line += '#') {
//   console.log(line)
// }





// let size = 8;

// let board = '';

// for ( x = 0; x < size; x++ ) {
//   for ( y = 0; y < size; y++ ) {
//    if (( x + y ) % 2 == 0 ) {
//       board += ' '
//     } else {
//       board += '#'
//     }
//   }
//   board += '\n'
// }
// console.log(board)




// let size = 8;

// let board = '';

// for ( x = 0; x < size; x++ ) {
//   for ( y = 0; y < size; y++ ) {

//     if (( x + y) % 2 ==  0 ) board += ' #'
//   }
//   board += '\n'
// }
// console.log(board)



// function min(a, b) {
//   if ( a < b ) {
//     return a
//   } else {
//     return b
//   }
// }
// console.log(min( 10, 20))

// function zeroPad(number, width) {
//   var string = String(number);
//   while (string.length < width)
//   string = "0" + string;
//   return string;
//  }
//  // вывестиИнвентаризациюФермы
//  function printFarmInventory(cows, chickens, pigs) {
//   console.log(zeroPad(cows, 3) + " Коров");
//   console.log(zeroPad(chickens, 3) + " Куриц");
//   console.log(zeroPad(pigs, 3) + " Свиней");
//  }
//  printFarmInventory(7, 16, 3)




// function isEven(n) {
//   if ( n == 0 ) { 
//     return true
//   } else if ( n == 1 ) {
//     return false
//   } else if ( n < 0 ) {
//     return isEven(-n)
//   } else {
//     return isEven( n - 2)
//   }
// }
// console.log(isEven(50));
// console.log(isEven(75))
// console.log(isEven(-6))



// function countChar( string, char ) {
//   let counted = 0;

//   for ( i = 0; i < string.length; i++ ) {
//     if ( string[i] == char ) {
//       counted += 1
//     }
//   }
//   return counted;
// }
// function countBs( string ) {
//   return countChar(string, 'B')
// }
// console.log(countChar('BBC', 'B'))
// console.log(countBs('BBBC'))
 

// function createDesk(n) {
//   let desk = '';
//   for ( x = 0; x < n; x++) {
//     for ( y = 0; y < n; y++) {
//       if ( (x + y) % 2 == 0 ) {
//         desk += ' '
//       } else {
//         desk += '#'
//       }
//     }
//     desk += '\n'
//   }
//   return alert(desk)
// }
// console.log(createDesk(prompt()))


// let arrRange = [];
// function range(a, b) {
  
//   if ( a < b ) {
//     for ( a; a <= b; a++) {
//       arrRange.push(a)
//     }
//   }
//   return arrRange
// }
// function sum(arr) {
//   let sum = 0;
//   for ( k in arr ) {
//     sum += arr[k]
//   }
//   return sum
// }
// console.log(range(1, 10))
// console.log(sum(arrRange))


// let arrRange = [];
// function range(a, b, c ) {
  
//   if ( !c ) c = a < b ? 1 : -1

//   if ( c > 0 ) {
//     for ( a; a <= b; a += c) arrRange.push(a)
//   } else { 
//     for ( a; a >= b; a+= c) arrRange.push(a)
//   }
//   return arrRange
// }
// function sum(arr) {
//   let sum = 0;
//   for ( k in arr ) {
//     sum += arr[k]
//   }
//   return sum
// }
// console.log(range(5, 2, -2))
// console.log(sum(arrRange))



// function reverseArray(array) {
//   let arrayReverse = [];
//   for ( i = array.length - 1; i >= 0; i-- ) {
//     arrayReverse.push(array[i])
//   }
//   return console.log(arrayReverse)
// }
// reverseArray(['A', 'B', 'C'])


// let arrayValue = [1, 2, 3, 4, 5, 6, 7, 8];

// function reverseArrayInPlace(array) {
//   for ( i = array.length - 1; i >= 0; i-- ) {
//     array.push(array[i])
//   }
//   for ( i = 0; i <= Math.floor(array.length) / 2; i++ ) {
//     // array.shift()
//     console.log(array.shift())
//   }
//   array.shift()

//   return console.log(array)
// }

// function reverseArrayInPlace(array) {
//   for ( i = 0; i < Math.floor(array.length / 2); i++) {
//     let half = array[i];
//     array[i] = array[array.length - 1 - i];
//     array[array.length - 1 - i] = half;
//   }
//   return array
// }
// reverseArrayInPlace(arrayValue)
// console.log(arrayValue)


// function arrayToList(array) {
//   let list = null;

//   for ( i = array.length - 1; i >= 0; i--) {
//     list = { value: array[i], rest: list}
//   }
//   return list
// };
// function listToArray(list) {
//   let arr = [];

//   for ( i = list; i; i = i.rest) {
//     arr.push(i.value)
//   }
//   return arr
// }


// let arr = [1,2,3];
// console.log(arrayToList(arr))
// console.log(listToArray(arrayToList(arr)))


// var myCrazyObject = {
//   "name": "Нелепый объект",
//   "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
//   "random animal": "Банановая акула"
//   };

//   console.log(myCrazyObject['some array'][2].number )


// const input = "javascript is awesome";
// let output = "";

// for ( i = 0; i < input.length; i++ ) {

//   if ( input[i] == 'a' ) {
//     output += 4
//   } else if ( input[i] == 'e') {
//     output += 3
//   } else if ( input[i] == 'i' ) {
//     output += 1
//   } else if ( input[i] == 'o' ) {
//     output += 0
//   } else {
//     output += input[i]
//   }
// }


// console.log(output)

var words = [
    'любовь',
    'отношения',
    'дружба',
    "михаил",
    "алина",
    "родственники",
    "доверие"
    ];

    const word = words[Math.floor(Math.random() * words.length)];

console.log(word)



let answerWord = [];

for ( i = 0; i < word.length; i++ ) {
    answerWord[i] = ' -_-'
}
console.log(answerWord)

let remainingLetters = word.length;

let attempts =  Math.floor(word.length / 1.5) 
let strAtmpts;

if ( attempts < 5 ) {
    strAtmpts = 'попытки'
} else { strAtmpts = 'попыток'}


alert('Привет, Алина! Сейчас с тобой сыграем в виселицу..');

alert(`Правила очень просты:\n Тебе даётся ${attempts} ${strAtmpts}\n  Если в слове есть несколько одинаковых букв, то они открываются\n   все разом!\n    Регистр букв неважен!\n     ПОЕХАЛИ !!!`)

while( remainingLetters > 0 && attempts > 0 ) {
    
    alert( ` Осталось угадать букв: ${remainingLetters}, \n Осталось попыток: ${attempts}, \n Угаданные буквы:  ${answerWord}`)

    let answerLetter = prompt('Введи букву! \n Для выхода из игры нажми "Отмена" ');
    


    if ( answerLetter === null ) {

        alert('Пока! :(\nМожешь побаловаться с инструментами изменения цвета фона и шрифта   :*) ')
        break

    } else if ( answerLetter === '' || isFinite(answerLetter) ) {
        alert( 'Нужно ввести букву !')
    } else if ( answerLetter.length > 1 ) {
        alert('Можно вводить не больше 1 буквы !')
    } else {

        asnLower = answerLetter.toLowerCase();
        attempts--
        console.log(attempts)

        for ( j = 0; j < word.length; j++  ) {

            if ( answerWord[j] === asnLower ) 
            {
                alert('Буква уже угадана!')
                attempts++

            } else if ( word[j] === asnLower ) {

            attempts++
            answerWord[j] = asnLower
            remainingLetters--
            console.log(answerWord[j])

            } 
        
        }
    }
    
    if ( remainingLetters === 0 ) alert('Ты победила! Молодец!\nЗагаданное слово - ' + word[0].toUpperCase() + word.slice(1) + '\nСыграй еще раз или можешь попробовать функции на странице ;)')
    if ( remainingLetters > 0 && attempts <= 0 ) alert('Ты проиграла :( Загаданное слово - ' + word[0].toUpperCase() + word.slice(1) + '\nСыграй еще раз!')

}