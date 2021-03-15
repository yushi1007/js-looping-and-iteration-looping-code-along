
// Code your solutions in this file
function writeCards(array, event) {
    const thankYouCards = [];
    // let i = 0;
    for (let i = 0; i < array.length; i++) {
    thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
}



function countDown(number) {
    // let number = 0;
    while (number >= 0) {
        console.log(number);
        number -= 1   
    }
}




