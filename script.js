let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function generateExcuse() {
    const randomWho = getRandomElement(who);
    const randomAction = getRandomElement(action);
    const randomWhat = getRandomElement(what);
    const randomWhen = getRandomElement(when);

    const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
    document.getElementById("excuse").textContent = excuse;
}

document.getElementById("generateExcuse").addEventListener("click", generateExcuse);
