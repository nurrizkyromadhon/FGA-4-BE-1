// buatkan sebuah function yg bernama getRouletWinner dengan param array object player 
// dengan field player name dan birth_year
// dimana function ini akan memanggil function gameLogic dengan param array of player objects
// secara random akan memilih salah satu pemenang dari param
// dan akan memanggil function checkAgeWinner dimana akan memvalidasi return pemenang dari gamelogic
// apabila pemenang berusia lebih dari 50 tahun hari ini maka
// akan console pemenang dan hadiah x 100 serta total hadiah x100
// jika tidak maka akan console selamat anda menang dengan total hadiah saja

/*let player = [
    {
        name: 'fadhil',
        birth_year: 1940
    },
    {
        name: 'agil',
        birth_year: 2000
    },
    {
        name: 'rasyad',
        birth_year: 2001
    }
]

let grandPrize = 100
let jackpotWinner = 100

function getRouletWinner(params) {

    let gameWinner = gameLogic(params)

    console.log(gameWinner)
    let checkWinner = checkAgeWinner(gameWinner)

    if (checkWinner) {
        console.log(`congratulation to ${gameWinner.name}`)
        console.log(`you will be rewarded ${grandPrize} x ${jackpotWinner}`)
        console.log(`total prize will be ${grandPrize * jackpotWinner}`)
    } else {
        console.log(`congratulation to ${gameWinner.name}`)
        console.log(`total prize will be ${grandPrize * jackpotWinner}`)
    }
    return
}


function gameLogic(params) {
    let indexWinner = Math.floor(Math.random() * params.length)
    console.log(`ini index pemenangnya ${indexWinner}`)
    let winner = params[indexWinner]

    return winner
}

function checkAgeWinner(params) {

    // check winner age
    const winnerBirthYear = params.birth_year
    const now = new Date()
    const currentYear = now.getFullYear()

    const playerAge = currentYear - winnerBirthYear

    if (playerAge > 50) {
        return true
    }

    return false
}

getRouletWinner(player)*/


// 1
// buatkan function perkalian dimana
// parameternya dynamic atau rest dan buatkan function perkalian ini
// dalam bentuk 
// - arrow function
// - expression
// - declaration

// declaration
function declarationMultiply(...num1) {

    let resp

    for (const key of num1) {
        if (!resp) {
            resp = key
        } else {
            resp *= key
        }
    }

    return resp
}

// arrow function
let arrowMultiply = (...num1) => {

    let resp

    for (const key of num1) {
        if (!resp) {
            resp = key
        } else {
            resp *= key
        }
    }

    return resp

}
// expression
let expressionMultiply = (...num1) => {

    let resp

    for (const key of num1) {
        if (!resp) {
            resp = key
        } else {
            resp *= key
        }
    }

    return resp

}

console.log(arrowMultiply(4, 5, 5))
console.log(declarationMultiply(4, 5, 5))
console.log(expressionMultiply(4, 5, 5))
// 2
// buatkan recursive untuk pengurangan misal input 100 console.log(input)
// dikurangi -10
// berartin akan muncul (10),(90), dsb

//rekursif
function pengurangan(input) {
    if (input <= 0) {
      return;
    }
    input -= 10;
    console.log(input);
    pengurangan(input);
}
  pengurangan(100);
