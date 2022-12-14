const timer = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4
};

const modeButtons = document.querySelector('#js-mode-buttons');

modeButtons.addEventListener('click', handleMode);

function handleMode() {
    const {mode} = event.target.dataset;
    if (!mode) return;

    switchMode(mode);
}

function switchMode(mode) {
    timer.mode = mode;
    timer.remainingTime = {
        total: timer[mode] * 60,
        minutes: timer[mode],
        seconds: 0,
    };

    document
        .querySelectorAll('button[data-mode]')
        .forEach(e => e.classList.remove('active'));
    document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
    document.body.style.backgroundColor = `var(--${mode})`;

    updateClock();
}


function updateClock() {
    const {remainingTIme} = timer;
    const minutes = `${remainingTIme.minutes}`.padStart(2, '0');
    const seconds = `${remainingTIme.seconds}`.padStart(2, '0');

    const min = document.getElementById('js-minutes');
    const sec = document.getElementById('js-seconds');

    min.textContent



}