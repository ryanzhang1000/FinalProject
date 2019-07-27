//Event Listener
document.getElementById('btn').addEventListener('click', button);

//Event function
function button() {
    //Input value
    let name = document.getElementById('in').value;

    //If
    if (name == 'the witcher 3' || 'The Witcher 3') {
        document.getElementById('img').src = 'images/witcher.png';
        document.getElementById('btn').innerHTML = 'The Witcher 3';
        document.getElementById('btn').href = 'https://thewitcher.com/en/'
    }

}