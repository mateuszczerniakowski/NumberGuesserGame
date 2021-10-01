let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessLeft = 3;

const UIgame = document.querySelector('#game'),
    UIminNum = document.querySelector('.min-num'),
    UImaxNum = document.querySelector('.max-num'),
    UIguessBtn = document.querySelector('#guess-btn'),
    UIguessInput = document.querySelector('#guess-input'),
    UImessage = document.querySelector('.message');

UIminNum.textContent = min;
UImaxNum.textContent = max;

UIgame.addEventListener('mousedown', function (e) {
    if (e.target.className == 'play-again') {
        window.location.reload();
    };
});

UIguessBtn.addEventListener('click', function () {
    let guess = parseInt(UIguessInput.value);
    if (isNaN(guess) || guess < min || guess > max){
        showMessage(`Please enter a number between ${min} and ${max}`, 'red');
        UIguessInput.value = '';
    }
    else {
        if (guess === winningNum) {
            gameOver(true, `Number ${winningNum} is correct. YOU WIN!`);
        }
        else {
            guessLeft -= 1
            if (guessLeft === 0) {
                gameOver(false, `YOU LOST! The winning numeber was ${winningNum}`);
            } else {
                UIguessInput.style.borderColor = 'orange';
                showMessage(`${guess} is not correct. ${guessLeft} GUEES LEFT!`, 'orange');
                UIguessInput.value = ''
            };
        };
    };
});

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    UIguessInput.disabled = true;
    UIguessInput.style.borderColor = color;
    showMessage(msg, color)
    UIguessBtn.className += 'play-again'
    UIguessBtn.value = 'Play again!'
};
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + 1);
};

function showMessage(msg, color) {
    UImessage.style.color = color;
    UImessage.textContent = msg;
};
