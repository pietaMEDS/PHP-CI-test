const btn = document.querySelector('#btn').addEventListener('click', () => getData);

function getData () {
    fetch('http://localhost:3000/doc', {
        method: 'POST',
        headers: {
            'Content-type': 'application/octet-stream',
        },
    })
    .then(res => res.blob())
    .then(data => {
        let url = URL.createObjectURL(data);
        console.log(url);

        let anchor = document.createElement('a');
        anchor.href= url;
        anchor.download = 'smeta.pdf';
        document.body.append(anchor);
        anchor.style = "display: none";
        anchor.click();
        anchor.remove();

        URL.revokeObjectURL(url);
    })
}