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
    const box = document.getElementById('fortune-box');
    box.textContent = pickRandomIndex(fortunes);
    document.getElementById('font-color-btn').click();
    document.getElementById('bg-color-btn').click();
    document.getElementById('border-color-btn').click();
    document.getElementById('font-style-btn').click();
});

document.getElementById('font-color-btn').addEventListener('click', () => {
    const colors = ['#e74c3c', '#2c3e50', '#16a085', '#8e44ad', '#d35400'];
    document.getElementById('fortune-box').style.color = pickRandomIndex(colors);
    document.getElementById('font-color-btn').click();
    document.getElementById('bg-color-btn').click();
    document.getElementById('border-color-btn').click();
    document.getElementById('font-style-btn').click();
});


document.getElementById('bg-color-btn').addEventListener('click', () => {
    const colors = ['#ecf0f1', '#f9e79f', '#aed6f1', '#f5b7b1', '#d5f5e3'];
    document.getElementById('fortune-box').style.backgroundColor = pickRandomIndex(colors);
    document.getElementById('font-color-btn').click();
    document.getElementById('bg-color-btn').click();
    document.getElementById('border-color-btn').click();
    document.getElementById('font-style-btn').click();
});


document.getElementById('border-color-btn').addEventListener('click', () => {
    const colors = ['#c0392b', '#2980b9', '#27ae60', '#7d3c98', '#f1c40f'];
    document.getElementById('fortune-box').style.borderColor = pickRandomIndex(colors);
    document.getElementById('font-color-btn').click();
    document.getElementById('bg-color-btn').click();
    document.getElementById('border-color-btn').click();
    document.getElementById('font-style-btn').click();
});

document.getElementById('font-style-btn').addEventListener('click', () => {
    const fonts = ['Arial, sans-serif', 'Georgia, serif', '"Courier New", monospace', '"Lucida Console", monospace'];
    const sizes = ['18px', '20px', '22px', '24px', '26px'];
    const box = document.getElementById('fortune-box');
    box.style.fontFamily = pickRandomIndex(fonts);
    box.style.fontSize = pickRandomIndex(sizes);
    document.getElementById('font-color-btn').click();
    document.getElementById('bg-color-btn').click();
    document.getElementById('border-color-btn').click();
    document.getElementById('font-style-btn').click();
});