let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");

const btn = document.querySelector("#btn");
const msg = document.querySelector("#msg");


btn.addEventListener('click', () => {
    let sticker1 = parseInt(input1.value) || 0;
    let sticker2 = parseInt(input2.value) || 0;
    let sticker3 = parseInt(input3.value) || 0;

    let sumaStickers = sticker1 + sticker2 + sticker3;

    if (sumaStickers <= 10) {
        msg.innerHTML = `Llevas ${sumaStickers} stickers`;
    } else {
        msg.innerHTML = "Llevas demasiados stickers";
    }
});
