function activeCircleLine(circle, line, empty) {
    let currentCircle = document.getElementById(circle);
    let currentLine = document.getElementById(line);
    let currentEmpty = document.getElementById(empty);

    currentCircle.style.border = '2px solid lime';
    currentEmpty.style.border = '1px solid lime';
    currentEmpty.style.background = 'lime';
    currentLine.style.background = 'lime';
}