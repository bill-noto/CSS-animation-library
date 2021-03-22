document.getElementById('spin').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('spin');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('fadeIn').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('fadeIn');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('fadeOut').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('fadeOut');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('blastIn').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('blastIn');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('blastOut').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('blastOut');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('slightSRL').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('slightSRL');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('slightSLR').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('slightSLR');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('outSRL').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('outSRL');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('outSLR').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('outSLR');
    setTimeout(clearPreviousAnimation, 2200);
}

function clearPreviousAnimation() {
    document.getElementById('target').className = "";
    document.getElementById('target').classList.add('saenimate');
    document.getElementById('target').classList.add('repeat-1');
    document.getElementById('target').classList.add('duration-2');
}