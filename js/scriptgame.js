let userScore = 0;
let computerScore = 0;

const choices = ['Piedra', 'Papel', 'Tijera'];

function obtenerOpcionPc() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function jugar(userChoice) {
    const computerChoice = obtenerOpcionPc();
    const outcome = determineWinner(userChoice, computerChoice);

    document.getElementById('user-choice').textContent = `Tu elección: ${userChoice}`;
    document.getElementById('computer-choice').textContent = `Elección de la Computadora: ${computerChoice}`;
    
    document.getElementById('outcome').textContent = outcome.message;
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function determineWinner(userChoice, computerChoice) {
    let message = '';
    
    if (userChoice === computerChoice) {
        message = '¡Es un Empate! 🤝';
    } 
    else 
        if ((userChoice === 'Piedra' && computerChoice === 'Tijera') || (userChoice === 'Papel' && computerChoice === 'Piedra') || (userChoice === 'Tijera' && computerChoice === 'Papel')) {
            message = '¡Ganaste esta ronda! 🎉';
            userScore++;
    } 
    else {
        message = '¡Perdiste esta ronda! 😢';
        computerScore++;
    }
    
    return { message: message };
}