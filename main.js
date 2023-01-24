(function () {

    const lattos = document.getElementsByClassName('latto');
    const score = document.getElementById('score');
    const sound = document.getElementById('sound');
    const arena = document.querySelector('.arena');

    let speed = 8;
    let rotate = 10;
    let isPlay = false;
    let scoreValue = 0;


    arena.onclick = function () {

        if (isPlay) {
            rotate = 10;
            scoreValue = 0;
            UpdatePosition();
            sound.pause();
        } else {
            sound.play();
        }

        isPlay = !isPlay;
    }

    function UpdateScore() {
        score.innerHTML = `Score : ${scoreValue}`;
    }

    function UpdatePosition() {
        lattos[0].style.cssText = `transform: translate(40px,0) rotate(${rotate}deg);`;
        lattos[1].style.cssText = `transform: translate(-40px,0) rotate(-${rotate}deg);`;
    }

    function UpdateGame() {

        if (isPlay) {
            rotate += speed;
            scoreValue += 1;
            UpdatePosition();
            UpdateScore();
        }
    }


    //intial call function
    UpdatePosition();
    setInterval(UpdateGame, 10);

}())


// 