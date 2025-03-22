let myName = 'Murat';
let myAge = 18;
let myHobbi = 'reading';
let myBestFreind = 'Nikita';
let myBookColor = 'White';


console.log(myName, myAge, myHobbi, myBestFreind, myBookColor); 

// // // ==================================================================== \\

let userName = 'Alex'

function meetUser() {

    return 'Hello ' + userName

}

const result = meetUser()

console.log(result)

// // ==================================================================== \\

let numbers = [1, 4, 7, 11, 20, 8]

function numberCheck(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array [i] > 10) {
            return array [i]
        }
    }
    return 'array does not have correct number'
}

console.log(numberCheck(numbers, 10))

// // ==================================================================== \\

function calculator(firstNumber, secondNumber, sign) {
    if (sign === 'plus') {
        return firstNumber + secondNumber
    } else {
        if (sign === 'minus') {
            return firstNumber - secondNumber
        } else {
            if (sign === 'multiplication') {
                return firstNumber * secondNumber
            } else {
                if (sign === 'division') {
                    return firstNumber / secondNumber
                } 
            }
        }
    }
    
}

console.log(calculator(10, 5, 'division'))

// // ==================================================================== \\

const users = [
    {
        name: 'Alex',
        age: 13,
        isAdmin: false
    },
    {
        name: 'Mixer',
        age: 29,
        isAdmin: true
    },
    {
        name: 'Stasik',
        age: 36,
        isAdmin: false
    },
    {
        name: 'Nikola',
        age: 15,
        isAdmin: true
    },
    {
        name: 'Linkoln',
        age: 45,
        isAdmin: true
    },
    {
        name: 'Bagvell',
        age: 40,
        isAdmin: false
    }
]

let justPeople = 0

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        justPeople++
    }
}

console.log (justPeople)
