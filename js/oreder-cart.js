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

let singlePrices = document.querySelectorAll(".single-price");
    let numberInputs = document.querySelectorAll(".number");
    let priceSpans = document.querySelectorAll(".price");
    let totalPriceSpan = document.getElementById("totalPrice");

    // 初始化所有訂單項目的價格
    updatePrices();

    // 監聽所有數量輸入框的變化
    numberInputs.forEach(function(input) {
        input.addEventListener("input", function() {
            updatePrices();
        });
    });

    // 更新所有訂單項目的價格
    function updatePrices() {
        let total = 0;
        numberInputs.forEach(function(input, index) {
            let number = parseFloat(input.value);
            let singlePrice = parseFloat(singlePrices[index].getAttribute("value"));
            if (!isNaN(number) && !isNaN(singlePrice)) {
                let itemPrice = singlePrice * number;
                priceSpans[index].innerText = "NT$ " + itemPrice;
                total += itemPrice;
            } else {
                priceSpans[index].innerText = "NT$ 0"; // 如果輸入無效，價格顯示為 0
            }
        });
        totalPriceSpan.innerText = "NT$ " + total; // 更新總價格
    }