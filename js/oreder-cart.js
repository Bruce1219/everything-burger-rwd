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