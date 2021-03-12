document.getElementById('blastIn').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('animation-mouse').classList.add('blastIn');
}

document.getElementById('fadeOut').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('animation-mouse').classList.add('fadeOut');
}

document.getElementById('fadeIn').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('animation-mouse').classList.add('fadeIn');
}

function clearPreviousAnimation() {
    document.getElementById('animation-mouse').className = "";
    document.getElementById('animation-mouse').classList.add('saenimate');
    document.getElementById('animation-mouse').classList.add('repeat-1');
    document.getElementById('animation-mouse').classList.add('duration-1');
}