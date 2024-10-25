// Selecting elements
const playerCountInput = document.getElementById('playerCount');
const increasePlayersBtn = document.getElementById('increasePlayers');
const decreasePlayersBtn = document.getElementById('decreasePlayers');

// Increase player count
increasePlayersBtn.addEventListener('click', () => {
    let currentValue = parseInt(playerCountInput.value);
    if (currentValue < 10) {
        playerCountInput.value = currentValue + 1;
    }
});

// Decrease player count
decreasePlayersBtn.addEventListener('click', () => {
    let currentValue = parseInt(playerCountInput.value);
    if (currentValue > 2) {
        playerCountInput.value = currentValue - 1;
    }
});

// Start Game Button Functionality
document.getElementById('beginGame').addEventListener('click', () => {
    const team1 = document.getElementById('team1').value;
    const team2 = document.getElementById('team2').value;
    const playerCount = playerCountInput.value;

    if (team1 === '' || team2 === '') {
        alert('Please enter both team names');
        return;
    }

    // You can extend this to actually start the game
    alert(`Game is starting with ${team1} and ${team2}, ${playerCount} players!`);
});
