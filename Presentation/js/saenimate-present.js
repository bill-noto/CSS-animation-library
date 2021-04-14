// button handlers

document.getElementById('spinC').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('spinC');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('spinCC').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('spinCC');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('hSpinR').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('hSpinR');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('hSpinL').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('hSpinL');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('beat').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('beat');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('shrink').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('shrink');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('flash').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('flash');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('hFlipX').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('hFlipX');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('flipX').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('flipX');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('hFlipY').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('hFlipY');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('flipY').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('flipY');
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

document.getElementById('slightSUD').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('slightSUD');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('slightSDU').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('slightSDU');
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

document.getElementById('outSTB').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('outSTB');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('outSBT').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('outSBT');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('inSLR').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('inSLR');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('inSRL').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('inSRL');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('inSBT').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('inSBT');
    setTimeout(clearPreviousAnimation, 2200);
}

document.getElementById('inSTB').onclick = function () {
    clearPreviousAnimation();
    document.getElementById('target').classList.add('inSTB');
    setTimeout(clearPreviousAnimation, 2200);
}

// Clearing function
function clearPreviousAnimation() {
    document.getElementById('target').className = "";
    document.getElementById('target').classList.add('saenimate');
    document.getElementById('target').classList.add('repeat-1');
    document.getElementById('target').classList.add('duration-2');
}