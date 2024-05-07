let cartBtns = document.querySelectorAll(".cartBtn");
let orderCart = document.getElementById("orederCart");
function showOrder() {
    orderCart.style.width = "100%";
}

cartBtns.forEach(function(btn) {
    btn.addEventListener('click', showOrder);
});

let cartCloseButton = document.getElementById("cartCloseButton");
function closeOrder(){
    orderCart.style.width = "0%";
}

cartCloseButton.onclick = closeOrder;

// 計算機

// let singlePrices = document.querySelectorAll(".single-price");
// let numberInputs = document.querySelectorAll(".number");
// let priceSpans = document.querySelectorAll(".price");
// let totalPriceSpan = document.getElementById("totalPrice");

// let price = 0;

// // 初始化所有訂單項目的價格
// updatePrices();

// // 監聽所有數量輸入框的變化
// numberInputs.forEach(function(input) {
//     input.addEventListener("input", function() {
//         updatePrices();
//     });
// });

// // 更新所有訂單項目的價格
// function updatePrices() {
//     let total = 0;
//     numberInputs.forEach(function(input, index) {
//         let number = parseFloat(input.value);
//         let singlePrice = parseFloat(singlePrices[index].getAttribute("value"));
//         if (!isNaN(number) && !isNaN(singlePrice)) {
//             let itemPrice = singlePrice * number;
//             priceSpans[index].innerText = "NT$ " + itemPrice;
//             total += itemPrice;
//         } else {
//             priceSpans[index].innerText = "NT$ 0"; // 如果輸入無效，價格顯示為 0
//         }
//     });
//     totalPriceSpan.innerText = "NT$ " + total; // 更新總價格
//     price = total;
// }

//點餐
let price = 0;

let totalPrice = document.getElementById("totalPrice");
totalPrice.textContent = "NT$" + price;

//起司牛肉

let cheeseBeefOrder = document.getElementById("cheeseBeefOrder");
let cheeseBeef = document.getElementById("cheeseBeef");
let cheeseBeefX = document.getElementById("cheeseBeefX");

function showCheeseBeef(event){
    event.preventDefault();
    cheeseBeefOrder.style.display = "grid";
    price = price + 150;
    totalPrice.textContent = "NT$" + price;
}
function closeCheeseBeef(){
    cheeseBeefOrder.style.display = "none"
    price = price - 150;
    totalPrice.textContent = "NT$" + price;
}

cheeseBeef.onclick = showCheeseBeef;
cheeseBeefX.onclick = closeCheeseBeef;

//花生醬牛肉

let peanutBeefOrder = document.getElementById("peanutBeefOrder");
let peanutBeef = document.getElementById("peanutBeef");
let peanutBeefX = document.getElementById("peanutBeefX");

function showpeanutBeef(event){
    event.preventDefault();
    peanutBeefOrder.style.display = "grid";
    price = price + 160;
    totalPrice.textContent = "NT$" + price;
}
function closepeanutBeef(){
    peanutBeefOrder.style.display = "none"
    price = price - 160;
    totalPrice.textContent = "NT$" + price;
}

peanutBeef.onclick = showpeanutBeef;
peanutBeefX.onclick = closepeanutBeef;

//雙層牛肉

let doubleBeefOrder = document.getElementById("doubleBeefOrder");
let doubleBeef = document.getElementById("doubleBeef");
let doubleBeefX = document.getElementById("doubleBeefX");

function showdoubleBeef(event){
    event.preventDefault();
    doubleBeefOrder.style.display = "grid";
    price = price + 200;
    totalPrice.textContent = "NT$" + price;
}
function closedoubleBeef(){
    doubleBeefOrder.style.display = "none"
    price = price - 200;
    totalPrice.textContent = "NT$" + price;
}

doubleBeef.onclick = showdoubleBeef;
doubleBeefX.onclick = closedoubleBeef;



//經典薯條

let friesOrder = document.getElementById("friesOrder");
let fries = document.getElementById("fries");
let friesX = document.getElementById("friesX");

function showfries(event){
    event.preventDefault();
    friesOrder.style.display = "grid";
    price = price + 60;
    totalPrice.textContent = "NT$" + price;
}
function closefries(){
    friesOrder.style.display = "none"
    price = price - 60;
    totalPrice.textContent = "NT$" + price;
}

fries.onclick = showfries;
friesX.onclick = closefries;

//松露薯條

let trufflesOrder = document.getElementById("trufflesOrder");
let truffles = document.getElementById("truffles");
let trufflesX = document.getElementById("trufflesX");

function showtruffles(event){
    event.preventDefault();
    trufflesOrder.style.display = "grid";
    price = price + 100;
    totalPrice.textContent = "NT$" + price;
}
function closetruffles(){
    trufflesOrder.style.display = "none"
    price = price - 100;
    totalPrice.textContent = "NT$" + price;
}

truffles.onclick = showtruffles;
trufflesX.onclick = closetruffles;

//起司薯條

let cheeseFriesOrder = document.getElementById("cheeseFriesOrder");
let cheeseFries = document.getElementById("cheeseFries");
let cheeseFriesX = document.getElementById("cheeseFriesX");

function showcheeseFries(event){
    event.preventDefault();
    cheeseFriesOrder.style.display = "grid";
    price = price + 80;
    totalPrice.textContent = "NT$" + price;
}
function closecheeseFries(){
    cheeseFriesOrder.style.display = "none"
    price = price - 80;
    totalPrice.textContent = "NT$" + price;
}

cheeseFries.onclick = showcheeseFries;
cheeseFriesX.onclick = closecheeseFries;

//巧克力派

let chocolateOrder = document.getElementById("chocolateOrder");
let chocolate = document.getElementById("chocolate");
let chocolateX = document.getElementById("chocolateX");

function showchocolate(event){
    event.preventDefault();
    chocolateOrder.style.display = "grid";
    price = price + 100;
    totalPrice.textContent = "NT$" + price;
}
function closechocolate(){
    chocolateOrder.style.display = "none"
    price = price - 100;
    totalPrice.textContent = "NT$" + price;
}

chocolate.onclick = showchocolate;
chocolateX.onclick = closechocolate;

//蘋果派

let appleOrder = document.getElementById("appleOrder");
let apple = document.getElementById("apple");
let appleX = document.getElementById("appleX");

function showapple(event){
    event.preventDefault();
    appleOrder.style.display = "grid";
    price = price + 100;
    totalPrice.textContent = "NT$" + price;
}
function closeapple(){
    appleOrder.style.display = "none"
    price = price - 100;
    totalPrice.textContent = "NT$" + price;
}

apple.onclick = showapple;
appleX.onclick = closeapple;

//香蕉派

let bananaOrder = document.getElementById("bananaOrder");
let banana = document.getElementById("banana");
let bananaX = document.getElementById("bananaX");

function showbanana(event){
    event.preventDefault();
    bananaOrder.style.display = "grid";
    price = price + 100;
    totalPrice.textContent = "NT$" + price;
}
function closebanana(){
    bananaOrder.style.display = "none"
    price = price - 100;
    totalPrice.textContent = "NT$" + price;
}

banana.onclick = showbanana;
bananaX.onclick = closebanana;

//可樂

let colaOrder = document.getElementById("colaOrder");
let cola = document.getElementById("cola");
let colaX = document.getElementById("colaX");

function showcola(event){
    event.preventDefault();
    colaOrder.style.display = "grid";
    price = price + 150;
    totalPrice.textContent = "NT$" + price;
}
function closecola(){
    colaOrder.style.display = "none"
    price = price - 150;
    totalPrice.textContent = "NT$" + price;
}

cola.onclick = showcola;
colaX.onclick = closecola;

//奶茶

let milkTeaOrder = document.getElementById("milkTeaOrder");
let milkTea = document.getElementById("milkTea");
let milkTeaX = document.getElementById("milkTeaX");

function showmilkTea(event){
    event.preventDefault();
    milkTeaOrder.style.display = "grid";
    price = price + 150;
    totalPrice.textContent = "NT$" + price;
}
function closemilkTea(){
    milkTeaOrder.style.display = "none"
    price = price - 150;
    totalPrice.textContent = "NT$" + price;
}

milkTea.onclick = showmilkTea;
milkTeaX.onclick = closemilkTea;

//紅茶

let blackTeaOrder = document.getElementById("blackTeaOrder");
let blackTea = document.getElementById("blackTea");
let blackTeaX = document.getElementById("blackTeaX");

function showblackTea(event){
    event.preventDefault();
    blackTeaOrder.style.display = "grid";
    price = price + 150;
    totalPrice.textContent = "NT$" + price;
}
function closeblackTea(){
    blackTeaOrder.style.display = "none"
    price = price - 150;
    totalPrice.textContent = "NT$" + price;
}

blackTea.onclick = showblackTea;
blackTeaX.onclick = closeblackTea;

//巧克力奶昔

let chocolateShakeOrder = document.getElementById("chocolateShakeOrder");
let chocolateShake = document.getElementById("chocolateShake");
let chocolateShakeX = document.getElementById("chocolateShakeX");

function showchocolateShake(event){
    event.preventDefault();
    chocolateShakeOrder.style.display = "grid";
    price = price + 110;
    totalPrice.textContent = "NT$" + price;
}
function closechocolateShake(){
    chocolateShakeOrder.style.display = "none"
    price = price - 110;
    totalPrice.textContent = "NT$" + price;
}

chocolateShake.onclick = showchocolateShake;
chocolateShakeX.onclick = closechocolateShake;

//香草奶昔

let ShakeOrder = document.getElementById("ShakeOrder");
let Shake = document.getElementById("Shake");
let ShakeX = document.getElementById("ShakeX");

function showShake(event){
    event.preventDefault();
    ShakeOrder.style.display = "grid";
    price = price + 100;
    totalPrice.textContent = "NT$" + price;
}
function closeShake(){
    ShakeOrder.style.display = "none"
    price = price - 100;
    totalPrice.textContent = "NT$" + price;
}

Shake.onclick = showShake;
ShakeX.onclick = closeShake;

//草莓奶昔

let strawberryOrder = document.getElementById("strawberryOrder");
let strawberry = document.getElementById("strawberry");
let strawberryX = document.getElementById("strawberryX");

function showstrawberry(event){
    event.preventDefault();
    strawberryOrder.style.display = "grid";
    price = price + 110;
    totalPrice.textContent = "NT$" + price;
}
function closestrawberry(){
    strawberryOrder.style.display = "none"
    price = price - 110;
    totalPrice.textContent = "NT$" + price;
}

strawberry.onclick = showstrawberry;
strawberryX.onclick = closestrawberry;

//培根牛肉

let cheeseBaconOrder = document.getElementById("cheeseBaconOrder");
let cheeseBacon = document.getElementById("cheeseBacon");
let cheeseBaconX = document.getElementById("cheeseBaconX");

function showcheeseBacon(event){
    event.preventDefault();
    cheeseBaconOrder.style.display = "grid";
    price = price + 180;
    totalPrice.textContent = "NT$" + price;
}
function closecheeseBacon(){
    cheeseBaconOrder.style.display = "none"
    price = price - 180;
    totalPrice.textContent = "NT$" + price;
}

cheeseBacon.onclick = showcheeseBacon;
cheeseBaconX.onclick = closecheeseBacon;

//雙層培根

let doubleBaconOrder = document.getElementById("doubleBaconOrder");
let doubleBacon = document.getElementById("doubleBacon");
let doubleBaconX = document.getElementById("doubleBaconX");

function showdoubleBacon(event){
    event.preventDefault();
    doubleBaconOrder.style.display = "grid";
    price = price + 220;
    totalPrice.textContent = "NT$" + price;
}
function closedoubleBacon(){
    doubleBaconOrder.style.display = "none"
    price = price - 220;
    totalPrice.textContent = "NT$" + price;
}

doubleBacon.onclick = showdoubleBacon;
doubleBaconX.onclick = closedoubleBacon;

//南方炸雞

let southChickenOrder = document.getElementById("southChickenOrder");
let southChicken = document.getElementById("southChicken");
let southChickenX = document.getElementById("southChickenX");

function showsouthChicken(event){
    event.preventDefault();
    southChickenOrder.style.display = "grid";
    price = price + 150;
    totalPrice.textContent = "NT$" + price;
}
function closesouthChicken(){
    southChickenOrder.style.display = "none"
    price = price - 150;
    totalPrice.textContent = "NT$" + price;
}

southChicken.onclick = showsouthChicken;
southChickenX.onclick = closesouthChicken;

//雙層炸雞

let doubleChickenOrder = document.getElementById("doubleChickenOrder");
let doubleChicken = document.getElementById("doubleChicken");
let doubleChickenX = document.getElementById("doubleChickenX");

function showdoubleChicken(event){
    event.preventDefault();
    doubleChickenOrder.style.display = "grid";
    price = price + 180;
    totalPrice.textContent = "NT$" + price;
}
function closedoubleChicken(){
    doubleChickenOrder.style.display = "none"
    price = price - 180;
    totalPrice.textContent = "NT$" + price;
}

doubleChicken.onclick = showdoubleChicken;
doubleChickenX.onclick = closedoubleChicken;

//洋蔥蘑菇

let onionMushOrder = document.getElementById("onionMushOrder");
let onionMush = document.getElementById("onionMush");
let onionMushX = document.getElementById("onionMushX");

function showonionMush(event){
    event.preventDefault();
    onionMushOrder.style.display = "grid";
    price = price + 150;
    totalPrice.textContent = "NT$" + price;
}
function closeonionMush(){
    onionMushOrder.style.display = "none"
    price = price - 150;
    totalPrice.textContent = "NT$" + price;
}

onionMush.onclick = showonionMush;
onionMushX.onclick = closeonionMush;

//墨西哥牛肉

let spicyBeefOrder = document.getElementById("spicyBeefOrder");
let spicyBeef = document.getElementById("spicyBeef");
let spicyBeefX = document.getElementById("spicyBeefX");

function showspicyBeef(event){
    event.preventDefault();
    spicyBeefOrder.style.display = "grid";
    price = price + 170;
    totalPrice.textContent = "NT$" + price;
}
function closespicyBeef(){
    spicyBeefOrder.style.display = "none"
    price = price - 170;
    totalPrice.textContent = "NT$" + price;
}

spicyBeef.onclick = showspicyBeef;
spicyBeefX.onclick = closespicyBeef;