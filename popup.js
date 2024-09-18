// Get the input and buttons
const input = document.getElementById('betAmount');
const minwin = document.getElementById('minwin');
const wonButton = document.getElementById('won');
const lostButton = document.getElementById('lost');
const lossesElement = document.getElementById('losses');

// Initialize losses counter
let losses = 0;

// Add event listeners to the buttons
wonButton.addEventListener('click', resetInput);
lostButton.addEventListener('click', calculateNextBet);

// Function to reset the input
function resetInput() {
  input.value = 55556;
  losses = 0;
  lossesElement.textContent = 'Losses: 0';
}

// Function to calculate the next bet
function calculateNextBet() {
  // Get the current bet amount
  const currentBet = parseFloat(input.value);
  const minWinValue = parseFloat(minwin.value);

  // Check if the input is a valid number
  if (isNaN(currentBet) || isNaN(minWinValue)) {
    alert('Please enter a valid number');
    return;
  }

  // Calculate the next bet
  const nextBet = (currentBet * 2 * 0.9 + (minWinValue * (losses + 1))) / 0.9;

  // Round up to the next dollar
  const roundedNextBet = Math.ceil(nextBet);

  // Set the next bet in the input field
  input.value = roundedNextBet;

  // Increment losses counter
  losses++;
  lossesElement.textContent = `Losses: ${losses}`;
}
