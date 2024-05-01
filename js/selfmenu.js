//price
let sum = 0;
let num = 0
let selfPrice = document.getElementById("selfPrice");
selfPrice.textContent = sum + num;

//經典麵包
let classicBreadBtn = document.getElementById("classicBreadBtn");
let classicBread = document.getElementById("classicBread");
let classicBreadX = document.getElementById("classicBreadX");
function showClassicBread(){
    classicBread.classList.add('active');
    sum = 20;
    selfPrice.textContent = sum;
}
function closeClassicBread(){
    classicBread.classList.remove('active');
    sum = 0;
    selfPrice.textContent = sum;
}
classicBreadBtn.onclick = function(){
    closeSesameBread();
    closeMuffinBread();
    closeDenmarkBread();
    closeGrainsBread();
    closeLettuceBread();
    showClassicBread();

}
classicBreadX.onclick = closeClassicBread;

//芝麻麵包
let sesameBreadBtn = document.getElementById("sesameBreadBtn");
let sesameBread = document.getElementById("sesameBread");
let sesameBreadX = document.getElementById("sesameBreadX");
function showSesameBread(){
    sesameBread.classList.add('active');
    sum = 25;
    selfPrice.textContent = sum;
}
function closeSesameBread(){
    sesameBread.classList.remove('active');
    sum = 0;
    selfPrice.textContent = sum;
}
sesameBreadBtn.onclick = function(){
    closeClassicBread();
    closeMuffinBread();
    closeDenmarkBread();
    closeGrainsBread();
    closeLettuceBread();
    showSesameBread();
};
sesameBreadX.onclick = closeSesameBread;

//馬芬麵包
let muffinBreadBtn = document.getElementById("muffinBreadBtn");
let muffinBread = document.getElementById("muffinBread");
let muffinBreadX = document.getElementById("muffinBreadX");
function showMuffinBread(){
    muffinBread.classList.add('active');
    sum = 30;
    selfPrice.textContent = sum;
}
function closeMuffinBread(){
    muffinBread.classList.remove('active');
    sum = 0;
    selfPrice.textContent = sum;
}
muffinBreadBtn.onclick = function(){
    closeClassicBread();
    closeSesameBread();
    closeDenmarkBread();
    closeGrainsBread();
    closeLettuceBread();
    showMuffinBread();


};
muffinBreadX.onclick = closeMuffinBread;

//丹麥麵包
let denmarkBreadBtn = document.getElementById("denmarkBreadBtn");
let denmarkBread = document.getElementById("denmarkBread");
let denmarkBreadX = document.getElementById("denmarkBreadX");
function showDenmarkBread(){
    denmarkBread.classList.add('active');
    sum = 35;
    selfPrice.textContent = sum;
}
function closeDenmarkBread(){
    denmarkBread.classList.remove('active');
    sum = 0;
    selfPrice.textContent = sum;
}
denmarkBreadBtn.onclick = function(){
    closeClassicBread();
    closeSesameBread();
    closeMuffinBread();
    closeGrainsBread();
    closeLettuceBread();
    showDenmarkBread();

};
denmarkBreadX.onclick = closeDenmarkBread;

//雜糧麵包
let grainsBreadBtn = document.getElementById("grainsBreadBtn");
let grainsBread = document.getElementById("grainsBread");
let grainsBreadX = document.getElementById("grainsBreadX");
function showGrainsBread(){
    grainsBread.classList.add('active');
    sum = 35;
    selfPrice.textContent = sum;
}
function closeGrainsBread(){
    grainsBread.classList.remove('active');
    sum = 0;
    selfPrice.textContent = sum;
}
grainsBreadBtn.onclick = function(){
    closeClassicBread();
    closeSesameBread();
    closeMuffinBread();
    closeDenmarkBread();
    closeLettuceBread();
    showGrainsBread();

};
grainsBreadX.onclick = closeGrainsBread;

//生菜
let lettuceBreadBtn = document.getElementById("lettuceBreadBtn");
let lettuceBread = document.getElementById("lettuceBread");
let lettuceBreadX = document.getElementById("lettuceBreadX");
function showLettuceBread(){
    lettuceBread.classList.add('active');
    sum = 20;
    selfPrice.textContent = sum;
}
function closeLettuceBread(){
    lettuceBread.classList.remove('active');
    sum = 0;
    selfPrice.textContent = sum;
}
lettuceBreadBtn.onclick = function(){
    closeClassicBread();
    closeSesameBread();
    closeMuffinBread();
    closeDenmarkBread();
    closeGrainsBread();
    showLettuceBread();

};
lettuceBreadX.onclick = closeLettuceBread;

//牛肉
let beefBtn = document.getElementById("beefBtn");
let beef = document.getElementById("beef");
let beefX = document.getElementById("beefX");
function showBeef(){
    if (!beef.classList.contains('active')) {
        beef.classList.add('active');
        num = num + 80;
        selfPrice.textContent = sum + num;
    }
}
function closeBeef(){
    beef.classList.remove('active');
    num = num - 80;
    selfPrice.textContent = sum + num;
}
beefBtn.onclick = showBeef;
beefX.onclick = closeBeef;

//炸雞
let chickenBtn = document.getElementById("chickenBtn");
let chicken = document.getElementById("chicken");
let chickenX = document.getElementById("chickenX");
function showChicken(){
    if (!chicken.classList.contains('active')) {
        chicken.classList.add('active');
        num = num + 80;
        selfPrice.textContent = sum + num;
    }
}
function closeChicken(){
    chicken.classList.remove('active');
    num = num - 80;
    selfPrice.textContent = sum + num;
}
chickenBtn.onclick = showChicken;
chickenX.onclick = closeChicken;

//培根
let baconBtn = document.getElementById("baconBtn");
let bacon = document.getElementById("bacon");
let baconX = document.getElementById("baconX");
function showBacon(){
    if (!bacon.classList.contains('active')) {
        bacon.classList.add('active');
        num = num + 60;
        selfPrice.textContent = sum + num;
    }
}
function closeBacon(){
    bacon.classList.remove('active');
    num = num - 60;
    selfPrice.textContent = sum + num;
}
baconBtn.onclick = showBacon;
baconX.onclick = closeBacon;

//豬肉
let porkBtn = document.getElementById("porkBtn");
let pork = document.getElementById("pork");
let porkX = document.getElementById("porkX");
function showPork(){
    if (!pork.classList.contains('active')) {
        pork.classList.add('active');
        num = num + 80;
        selfPrice.textContent = sum + num;
    }
}
function closePork(){
    pork.classList.remove('active');
    num = num - 80;
    selfPrice.textContent = sum + num;
}
porkBtn.onclick = showPork;
porkX.onclick = closePork;

//火腿
let hamBtn = document.getElementById("hamBtn");
let ham = document.getElementById("ham");
let hamX = document.getElementById("hamX");
function showHam(){
    if (!ham.classList.contains('active')) {
        ham.classList.add('active');
        num = num + 60;
        selfPrice.textContent = sum + num;
    }
}
function closeHam(){
    ham.classList.remove('active');
    num = num - 60;
    selfPrice.textContent = sum + num;
}
hamBtn.onclick = showHam;
hamX.onclick = closeHam;