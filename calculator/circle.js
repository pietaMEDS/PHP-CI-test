function activeCircleLine(circle, line, empty) {
    let currentCircle = document.getElementById(circle);
    let currentLine = document.getElementById(line);
    let currentEmpty = document.getElementById(empty);

    currentCircle.style.border = '2px solid lime';
    currentEmpty.style.border = '1px solid lime';
    currentEmpty.style.background = 'lime';
    currentLine.style.background = 'lime';

    localStorage.setItem('activeCircle', circle);
    localStorage.setItem('activeLine', line);
    localStorage.setItem('activeEmpty', empty);

    const timestamp = Date.now() + 6000; // 6 сек так же как и в маф джсе
    localStorage.setItem('timestamp', timestamp.toString());
}

window.addEventListener('load', () => {
    localTimeStamp();
});

function localTimeStamp() {
    const activeCircle = localStorage.getItem('activeCircle');
    const activeLine = localStorage.getItem('activeLine');
    const activeEmpty = localStorage.getItem('activeEmpty');
    const timestamp = localStorage.getItem('timestamp');

    if (timestamp && Date.now() < parseInt(timestamp) && activeCircle && activeLine && activeEmpty) {
        activeCircleLine(activeCircle, activeLine, activeEmpty);
    }
}