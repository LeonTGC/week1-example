let coffeeIsGrinding = false
let pressGrindBeans = () => {
    if(coffeeIsGrinding === true){
        console.log("stopping the grind")
        coffeeIsGrinding = false
    } else {
        console.log("starting the grind")
        coffeeIsGrinding = true
    }
}

let cashWithdrawal = (amount, accnum) => {
    console.log(`withdrawing ${amount} from ${accnum}`)
}

let addUp = (num1, num2) => {
    // explicit
    return num1 + num2
}

// implicit 
let addUp2 = (num1, num2) => (
    num1 + num2
)
let addUp3 = (num1, num2) => num1 + num2


// let result = addUp(2, 3)
// console.log(addUp(2, 8))
// console.log(result)


let minus = (fahrenheit) => {
    //      55
    return fahrenheit - 32
}
            //      parameter
let getCelsuis = (fahrenheit) => {
    //              23
    return minus(fahrenheit) * 5/9
}


//                  argument
console.log(getCelsuis(55))

const fizzBuzzChal = (num) => {
    
    if(num == 1){
        // do something
    } else if (num == 2){
        //do something
    } else if(num == 3){
        //do something
    } else {
        //do something
    }

}

fizzBuzzChal(1)

