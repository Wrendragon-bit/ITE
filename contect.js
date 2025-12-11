// Function to toggle the 'flipped' class on the card container
function flipCard(cardElement) {
    // Check if the card is already flipped
    const isFlipped = cardElement.classList.contains('flipped');
    
    // Toggle the class to trigger the CSS transition
    if (isFlipped) {
        cardElement.classList.remove('flipped');
    } else {
        cardElement.classList.add('flipped');
    }
}

// Note: This function is called in the HTML using: onclick="flipCard(this)"