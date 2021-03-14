
// Code your solutions in this file
function writeCards(array, event) {
    const thankYouCards = [];
    let i = 0;
    while (i < array.length) {
    thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    i++;
    }
    return thankYouCards;
}

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    };
}




