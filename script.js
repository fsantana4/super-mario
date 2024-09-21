const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
let isGameOver = false;

const jump = () => {
    if (!isGameOver) {
        mario.classList.add('jump');
    
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
}

const resetGame = () => {
    location.reload(); 

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px' , '');
    
    console.log(pipePosition); 

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '/images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);

        isGameOver = true;

        // Adiciona o listener para reiniciar o jogo ao pressionar qualquer tecla
        document.addEventListener('keydown', resetGame);
    }

}, 10);

document.addEventListener('keydown', jump);
