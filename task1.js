const fortunes = [
    "You will have a pleasant surprise.",
    "A thrilling time is in your immediate future.",
    "Someone is looking up to you. Don't let them down.",
    "Your ability for accomplishment will follow with success.",
    "A fresh start will put you on your way.",
    "Adventure can be real happiness.",
    "Now is the time to try something new.",
    "A friend asks only for your time, not your money.",
    "Your high-minded principles spell success.",
    "Change can hurt, but it leads a path to something better."
];

function pickRandomIndex(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fortune-box').textContent = pickRandomIndex(fortunes);
    document.getElementsByClassName('btn1')[0].click()
});

document.getElementsByClassName('btn1')[0].addEventListener('click', () => {
    console.log("clicked")
    document.getElementById('fortune-box').style.color = '#ffffffff'
    document.getElementById('fortune-box').style.backgroundColor = '#cc6d2eff'
    document.getElementById('fortune-box').style.borderColor = '#d300c8ff'
    document.getElementById('fortune-box').style.fontFamily = '"Lucida Console", monospace';
    document.getElementById('fortune-box').style.fontSize = '18px';
});


document.getElementsByClassName('btn2')[0].addEventListener('click', () => {
    console.log("clicked2")
    document.getElementById('fortune-box').style.color = '#ff0000ff'
    document.getElementById('fortune-box').style.backgroundColor = '#88fc71ff'
    document.getElementById('fortune-box').style.borderColor = '#0400ffff'
    document.getElementById('fortune-box').style.fontFamily = '"Courier New", monospace';
    document.getElementById('fortune-box').style.fontSize = '22px';
});

document.getElementsByClassName('btn3')[0].addEventListener('click', () => {
    console.log("clicked3")
    document.getElementById('fortune-box').style.color = '#00ffeaff'
    document.getElementById('fortune-box').style.backgroundColor = '#8e44ad'
    document.getElementById('fortune-box').style.borderColor = '#cfd300ff'
    document.getElementById('fortune-box').style.fontFamily = 'Arial, sans-serif';
    document.getElementById('fortune-box').style.fontSize = '14px';
});

document.getElementsByClassName('btn4')[0].addEventListener('click', () => {
    console.log("clicked4")
    document.getElementById('fortune-box').style.color = '#242424ff'
    document.getElementById('fortune-box').style.backgroundColor = '#ffb649ff'
    document.getElementById('fortune-box').style.borderColor = '#00ffb3ff'
    document.getElementById('fortune-box').style.fontFamily = 'Georgia, serif';
    document.getElementById('fortune-box').style.fontSize = '24px';
});