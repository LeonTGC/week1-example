let favDrinks = [
    "coffee",
    "fanta",
    "water"
]

// initial       condition          increment i
//                      length = 3
for(let i = 0; i < favDrinks.length; i++){
    console.log(i)
}

// let age = 15 

// while(age < 18){
//     console.log(`you are a child at ${age}`)
//     age++
// }
// console.log(`you are an adult at ${age}`)


let cards = ["spade", "club", "heart", "diamond"]
let currentCard = "club"

while(currentCard != "spade"){
    console.log(currentCard)
    currentCard = cards[Math.floor(Math.random() * 4)]
}
console.log(currentCard)