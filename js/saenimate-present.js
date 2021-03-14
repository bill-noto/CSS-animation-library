document.getElementById('spin').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('spin');
}

document.getElementById('fadeIn').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('fadeIn');
}

document.getElementById('fadeOut').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('fadeOut');
}

document.getElementById('blastIn').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('blastIn');
}

document.getElementById('blastOut').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('blastOut');
}

document.getElementById('slightSRL').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('slightSRL');
}

document.getElementById('slightSLR').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('slightSLR');
}

document.getElementById('outSRL').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('outSRL');
}

document.getElementById('outSLR').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('outSLR');
}

function clearPreviousAnimation() {
    document.getElementById('target').className = "";
    document.getElementById('target').classList.add('saenimate');
    document.getElementById('target').classList.add('repeat-1');
    document.getElementById('target').classList.add('duration-2');
}