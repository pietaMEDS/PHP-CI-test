let object = {};

function activeCircleLine(circle, line, empty) {
    let currentCircle = document.getElementById(circle);
    let currentLine = document.getElementById(line);
    let currentEmpty = document.getElementById(empty);

    currentCircle.style.border = '2px solid lime';
    currentEmpty.style.border = '1px solid lime';
    currentEmpty.style.background = 'lime';
    currentLine.style.background = 'lime';


    if (!object.circle) {
        object[circle] = circle;
    }
    if (!object.line) {
        object[line] = line;
    }
    if (!object.empty) {
        object[empty] = empty;
    }

    localStorage.setItem('object', JSON.stringify(object));

    const timestamp = Date.now() + 0.1 * 60 * 1000; // 5 сек так же как и в маф джсе
    localStorage.setItem('timestamp', timestamp.toString());
}

function localTimeStamp() {
    const objectCircles = JSON.parse(localStorage.getItem('object'));
    const timestamp = localStorage.getItem('timestamp');
    if (timestamp && Date.now() < parseInt(timestamp) && objectCircles) {

        // activeCircleLine(activeCircle, activeLine, activeEmpty);
        if (objectCircles['circleFoundation']) {
            activeCircleLine('circleFoundation', 'lineFoundation', 'emptyFoundation')
        }
        if (objectCircles['circleSupport']) {
            activeCircleLine('circleSupport', 'lineSupport', 'emptySupport')
        }
        if (objectCircles['circleFloor']) {
            activeCircleLine('circleFloor', 'lineFloor', 'emptyFloor')
        }
        if (objectCircles['circleWall']) {
            activeCircleLine('circleWall', 'lineWall', 'emptyWall')
        }
    }
}

window.addEventListener('load', () => {
    localTimeStamp();
});