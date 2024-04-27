//-------------navbar--------------//

var hbButton = document.getElementById("hbButton");
var hbCloseButton = document.getElementById("hbCloseButton");
var hiddenNavbar = document.getElementById("hidden-nav");

function showHiddenNav(){
    var hiddenNav = document.getElementById("hidden-nav");
    hiddenNav.style.height = "100%";
}


console.log(hbCloseButton);
function hiddenNav(){
    var hiddenNav = document.getElementById("hidden-nav");
    hiddenNav.style.height = "0%";
}


hbButton.onclick = showHiddenNav;
hbCloseButton.onclick = hiddenNav;
hiddenNavbar.onclick = hiddenNav;

//---------------logo---------------//

window.addEventListener('scroll', function() {
    var logo1 = document.getElementById('logo1');
    var logo2 = document.getElementById('logo2');
    var faBars = document.getElementById("fa-bars");

    // 如果滾動位置大於 0，則顯示 logo2，否則隱藏
    if (window.scrollY > 0) {
        logo1.style.display = 'none';
        logo2.style.display = 'block';
        faBars.style.color = "#eb2222";
    } else {
        logo1.style.display = 'block';
        logo2.style.display = 'none';
        faBars.style.color = "#fff";
    }
});
    
  // 在頁面加載時，初始狀態下隱藏 logo2
document.addEventListener('DOMContentLoaded', function() {
    var logo2 = document.getElementById('logo2');
    logo2.style.display = 'none';
});

//-----------navlist------------//

var navList = document.getElementById('navList');
var hbButton = document.getElementById("hbButton");


// 定義應用樣式的函數
function applyStyles() {
    // 檢查視窗寬度以及滾動位置
    if (window.innerWidth >= 1200 && window.scrollY <= 50) {
        navList.style.display = 'flex'; // 在特定條件下顯示
        hbButton.style.display = 'none';
    } else {
        navList.style.display = 'none'; // 在其他情況下隱藏
        hbButton.style.display = 'block';
    }
}

// 首次載入頁面應用樣式
applyStyles();

// 監聽滾動和視窗大小改變事件，並在事件觸發時重新應用樣式
window.addEventListener('scroll', applyStyles);
window.addEventListener('resize', applyStyles);

//------------hidden-nav到頂部----------------//

var hiddenNav = document.getElementById("hidden-nav");

window.addEventListener('scroll', function(){
    if(this.window.scrollY === 0 && window.innerWidth >= 1200){
        hiddenNav.style.height = '0%';
    }
});

//--------------------menu----------------------//

function showContent(category) {
    // 檢查要顯示的內容是否已經是活動狀態
    var selectedContent = document.getElementById(category + 'Content');
    if (selectedContent.classList.contains('active')) {
        return; // 如果是，則不執行任何操作
    }

    // 隱藏所有內容
    var contents = document.querySelectorAll('.menu-content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    // 取消所有按鈕的活動狀態
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    // 顯示特定類別的內容
    selectedContent.classList.add('active');

    // 標記被點擊的按鈕為活動狀態
    var selectedButton = document.getElementById(category + 'Btn');
    selectedButton.classList.add('active');
}

//-------------滾動動畫------------//
// const scrollingObject = document.querySelector('.scrolling-object');

// window.addEventListener('scroll', function() {

//     // 物件滚动
//     const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
//     const containerWidth = document.querySelector('.scrolling-object-container').offsetWidth;
//     const maxScroll = containerWidth - scrollingObject.offsetWidth;
//     const scrollAmount = maxScroll * scrollPercentage * 0.5;
//     scrollingObject.style.transform = 'translateX(' + scrollAmount + 'px)';


// });

const scrollingObject = document.querySelector('.scrolling-object');
const scrollingObjectContainer = document.querySelector('.scrolling-object-container');


window.addEventListener('scroll', function() {
    // 获取滚动容器的宽度
    const containerWidth = document.querySelector('.scrolling-object-container').offsetWidth;
    const containerRect = scrollingObjectContainer.getBoundingClientRect();


    // 物件滚动
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const maxScroll = containerWidth - scrollingObject.offsetWidth;
    const scrollAmount = maxScroll * scrollPercentage ;

    // 如果滚动到一定位置，才开始横向滚动
    if (containerRect.bottom <= window.innerHeight) { // 这里可以调整滚动开始的位置
        scrollingObject.style.transform = 'translateX(' + scrollAmount + 'px)';
    }
});





