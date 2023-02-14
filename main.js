document.getElementById('btn').addEventListener('click', loadInfo);

function loadInfo() {
    console.log('loadInfo click')

    // create xhr
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'sample.txt', true);
    console.log('READYSTATE: ', xhr.readyState);

    xhr.onprogress = function () {
        console.log('READYSTATE: ', xhr.readyState);
    }

    xhr.onload = function () {
        console.log('READYSTATE: ', xhr.readyState);
        if (this.status == 200) {
            document.getElementById('text').innerHTML = this.responseText;
        } else if (this.status == 404) {
            document.getElementById('text').innerHTML = 'Not Found';
        }
        xhr.onerror = function () {
            console.log('Request error...');
        }
    }

    xhr.send();
}