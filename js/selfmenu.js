//price
let sum = 0;
let num1 = 0;
let num2 = 0;
let num3 = 0;
let selfPrice = document.getElementById("selfPrice");
selfPrice.textContent = sum + num1 + num2 + num3;

//經典麵包
let classicBreadBtn = document.getElementById("classicBreadBtn");
let classicBread = document.getElementById("classicBread");
let classicBreadX = document.getElementById("classicBreadX");
function showClassicBread(){
    classicBread.classList.add('active');
    sum = 20;
    selfPrice.textContent = sum + num1 + num2 + num3;

}
function closeClassicBread(){
    classicBread.classList.remove('active');
    sum = 0;
    selfPrice.textContent = sum + num1 + num2 + num3;

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
    selfPrice.textContent = sum + num1 + num2 + num3;

}
function closeSesameBread(){
    sesameBread.classList.remove('active');
    sum = 0;
    selfPrice.textContent = sum + num1 + num2 + num3;

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
    selfPrice.textContent = sum + num1 + num2 + num3;

}
function closeMuffinBread(){
    muffinBread.classList.remove('active');
    sum = 0;
    selfPrice.textContent = sum + num1 + num2 + num3;

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
    selfPrice.textContent = sum + num1 + num2 + num3;

}
function closeDenmarkBread(){
    denmarkBread.classList.remove('active');
    sum = 0;
    selfPrice.textContent = sum + num1 + num2 + num3;

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
    selfPrice.textContent = sum + num1 + num2 + num3;

}
function closeGrainsBread(){
    grainsBread.classList.remove('active');
    sum = 0;
    selfPrice.textContent = sum + num1 + num2 + num3;

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
    selfPrice.textContent = sum + num1 + num2 + num3;

}
function closeLettuceBread(){
    lettuceBread.classList.remove('active');
    sum = 0;
    selfPrice.textContent = sum + num1 + num2 + num3;

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
        meatX.classList.remove('active');
        num1 = num1 + 80;
        selfPrice.textContent = sum + num1 + num2 + num3;

    }
}
function closeBeef(){
    beef.classList.remove('active');
    num1 = num1 - 80;
    selfPrice.textContent = sum + num1 + num2 + num3;

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
        meatX.classList.remove('active');
        num1 = num1 + 80;
        selfPrice.textContent = sum + num1 + num2 + num3;

    }
}
function closeChicken(){
    chicken.classList.remove('active');
    num1 = num1 - 80;
    selfPrice.textContent = sum + num1 + num2 + num3;

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
        meatX.classList.remove('active');
        num1 = num1 + 60;
        selfPrice.textContent = sum + num1 + num2 + num3;

    }
}
function closeBacon(){
    bacon.classList.remove('active');
    num1 = num1 - 60;
    selfPrice.textContent = sum + num1 + num2 + num3;

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
        meatX.classList.remove('active');
        num1 = num1 + 80;
        selfPrice.textContent = sum + num1 + num2 + num3;

    }
}
function closePork(){
    pork.classList.remove('active');
    num1 = num1 - 80;
    selfPrice.textContent = sum + num1 + num2 + num3;

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
        meatX.classList.remove('active');
        num1 = num1 + 60;
        selfPrice.textContent = sum + num1 + num2 + num3;

    }
}
function closeHam(){
    ham.classList.remove('active');
    num1 = num1 - 60;
    selfPrice.textContent = sum + num1 + num2 + num3;

}
hamBtn.onclick = showHam;
hamX.onclick = closeHam;

//meatX
let meatXBtn = document.getElementById("meatXBtn");
let meatX = document.getElementById("meatX");
let meatXX = document.getElementById("meatXX");
function showMeatX(){
    meatX.classList.add('active');
    beef.classList.remove('active');
    chicken.classList.remove('active');
    bacon.classList.remove('active');
    pork.classList.remove('active');
    ham.classList.remove('active');
    num1 = 0;
    selfPrice.textContent = sum + num1 + num2 + num3;

}
function closeMeatX(){
    meatX.classList.remove('active');
    selfPrice.textContent = sum + num1 + num2 + num3;

}
meatXBtn.onclick = showMeatX;
meatXX.onclick = closeMeatX;

//生菜絲
let lettuceBtn = document.getElementById("lettuceBtn");
let lettuce = document.getElementById("lettuce");
let lettuceX = document.getElementById("lettuceX");
function showLettuce(){
    if (!lettuce.classList.contains('active')) {
        lettuce.classList.add('active');
        veggieX.classList.remove('active');
        num2 = num2 + 20;
        selfPrice.textContent = sum + num1 + num2 + num3;

    }
}
function closeLettuce(){
    lettuce.classList.remove('active');
    num2 = num2 - 20;
    selfPrice.textContent = sum + num1 + num2 + num3;

}
lettuceBtn.onclick = showLettuce;
lettuceX.onclick = closeLettuce;

//番茄
let tomatoBtn = document.getElementById("tomatoBtn");
let tomato = document.getElementById("tomato");
let tomatoX = document.getElementById("tomatoX");
function showTomato(){
    if (!tomato.classList.contains('active')) {
        tomato.classList.add('active');
        veggieX.classList.remove('active');
        num2 = num2 + 20;
        selfPrice.textContent = sum + num1 + num2 + num3;

    }
}
function closeTomato(){
    tomato.classList.remove('active');
    num2 = num2 - 20;
    selfPrice.textContent = sum + num1 + num2 + num3;

}
tomatoBtn.onclick = showTomato;
tomatoX.onclick = closeTomato;

//洋蔥
let onionBtn = document.getElementById("onionBtn");
let onion = document.getElementById("onion");
let onionX = document.getElementById("onionX");
function showOnion(){
    if (!onion.classList.contains('active')) {
        onion.classList.add('active');
        veggieX.classList.remove('active');
        num2 = num2 + 20;
        selfPrice.textContent = sum + num1 + num2 + num3;

    }
}
function closeOnion(){
    onion.classList.remove('active');
    num2 = num2 - 20;
    selfPrice.textContent = sum + num1 + num2 + num3;

}
onionBtn.onclick = showOnion;
onionX.onclick = closeOnion;

//醃黃瓜
let picklesBtn = document.getElementById("picklesBtn");
let pickles = document.getElementById("pickles");
let picklesX = document.getElementById("picklesX");
function showPickles(){
    if (!pickles.classList.contains('active')) {
        pickles.classList.add('active');
        veggieX.classList.remove('active');
        num2 = num2 + 20;
        selfPrice.textContent = sum + num1 + num2 + num3;

    }
}
function closePickles(){
    pickles.classList.remove('active');
    num2 = num2 - 20;
    selfPrice.textContent = sum + num1 + num2 + num3;

}
picklesBtn.onclick = showPickles;
picklesX.onclick = closePickles;

//醃辣椒
let chiliBtn = document.getElementById("chiliBtn");
let chili = document.getElementById("chili");
let chiliX = document.getElementById("chiliX");
function showChili(){
    if (!chili.classList.contains('active')) {
        chili.classList.add('active');
        veggieX.classList.remove('active');
        num2 = num2 + 20;
        selfPrice.textContent = sum + num1 + num2 + num3;

    }
}
function closeChili(){
    chili.classList.remove('active');
    num2 = num2 - 20;
    selfPrice.textContent = sum + num1 + num2 + num3;

}
chiliBtn.onclick = showChili;
chiliX.onclick = closeChili;

//veggieX
let veggieXBtn = document.getElementById("veggieXBtn");
let veggieX = document.getElementById("veggieX");
let veggieXX = document.getElementById("veggieXX");
function showVeggieX(){
    veggieX.classList.add('active');
    lettuce.classList.remove('active');
    tomato.classList.remove('active');
    onion.classList.remove('active');
    pickles.classList.remove('active');
    chili.classList.remove('active');
    num2 = 0;
    selfPrice.textContent = sum + num1 + num2 + num3;

}
function closeVeggieX(){
    veggieX.classList.remove('active');
    selfPrice.textContent = sum + num1 + num2 + num3;

}
veggieXBtn.onclick = showVeggieX;
veggieXX.onclick = closeVeggieX;

//巧達
let cheddarBtn = document.getElementById("cheddarBtn");
let cheddar = document.getElementById("cheddar");
let cheddarX = document.getElementById("cheddarX");
function showCheddar(){
    if (!cheddar.classList.contains('active')) {
        cheddar.classList.add('active');
        toppingX.classList.remove('active');
        num3 = num3 + 20;
        selfPrice.textContent = sum + num1 + num2 + num3;
    }
}
function closeCheddar(){
    cheddar.classList.remove('active');
    num3 = num3 - 20;
    selfPrice.textContent = sum + num1 + num2 + num3;
}
cheddarBtn.onclick = showCheddar;
cheddarX.onclick = closeCheddar;

//莫札
let mozzBtn = document.getElementById("mozzBtn");
let mozz = document.getElementById("mozz");
let mozzX = document.getElementById("mozzX");
function showMozz(){
    if (!mozz.classList.contains('active')) {
        mozz.classList.add('active');
        toppingX.classList.remove('active');
        num3 = num3 + 20;
        selfPrice.textContent = sum + num1 + num2 + num3;
    }
}
function closeMozz(){
    mozz.classList.remove('active');
    num3 = num3 - 20;
    selfPrice.textContent = sum + num1 + num2 + num3;
}
mozzBtn.onclick = showMozz;
mozzX.onclick = closeMozz;

//英式
let britishBtn = document.getElementById("britishBtn");
let british = document.getElementById("british");
let britishX = document.getElementById("britishX");
function showBritish(){
    if (!british.classList.contains('active')) {
        british.classList.add('active');
        toppingX.classList.remove('active');
        num3 = num3 + 20;
        selfPrice.textContent = sum + num1 + num2 + num3;
    }
}
function closeBritish(){
    british.classList.remove('active');
    num3 = num3 - 20;
    selfPrice.textContent = sum + num1 + num2 + num3;
}
britishBtn.onclick = showBritish;
britishX.onclick = closeBritish;

//toppingX
let toppingXBtn = document.getElementById("toppingXBtn");
let toppingX = document.getElementById("toppingX");
let toppingXX = document.getElementById("toppingXX");
function showToppingX(){
    toppingX.classList.add('active');
    cheddar.classList.remove('active');
    mozz.classList.remove('active');
    british.classList.remove('active');
    num3 = 0;
    selfPrice.textContent = sum + num1 + num2 + num3;
}
function closeToppingX(){
    toppingX.classList.remove('active');
    selfPrice.textContent = sum + num1 + num2 + num3;
}
toppingXBtn.onclick = showToppingX;
toppingXX.onclick = closeToppingX;

//番茄醬
let ketchupBtn = document.getElementById("ketchupBtn");
let ketchup = document.getElementById("ketchup");
let ketchupX = document.getElementById("ketchupX");
function showKetchup(){
    if (!ketchup.classList.contains('active')) {
        ketchup.classList.add('active');
        sauceX.classList.remove('active');
    }
}
function closeKetchup(){
    ketchup.classList.remove('active');
}
ketchupBtn.onclick = showKetchup;
ketchupX.onclick = closeKetchup;

//芥末醬
let mustardBtn = document.getElementById("mustardBtn");
let mustard = document.getElementById("mustard");
let mustardX = document.getElementById("mustardX");
function showMustard(){
    if (!mustard.classList.contains('active')) {
        mustard.classList.add('active');
        sauceX.classList.remove('active');
    }
}
function closeMustard(){
    mustard.classList.remove('active');
}
mustardBtn.onclick = showMustard;
mustardX.onclick = closeMustard;

//辣醬
let spicyBtn = document.getElementById("spicyBtn");
let spicy = document.getElementById("spicy");
let spicyX = document.getElementById("spicyX");
function showSpicy(){
    if (!spicy.classList.contains('active')) {
        spicy.classList.add('active');
        sauceX.classList.remove('active');
    }
}
function closeSpicy(){
    spicy.classList.remove('active');
}
spicyBtn.onclick = showSpicy;
spicyX.onclick = closeSpicy;

//蜂蜜
let honeyBtn = document.getElementById("honeyBtn");
let honey = document.getElementById("honey");
let honeyX = document.getElementById("honeyX");
function showHoney(){
    if (!honey.classList.contains('active')) {
        honey.classList.add('active');
        sauceX.classList.remove('active');
    }
}
function closeHoney(){
    honey.classList.remove('active');
}
honeyBtn.onclick = showHoney;
honeyX.onclick = closeHoney;

//BBQ
let bbqBtn = document.getElementById("bbqBtn");
let bbq = document.getElementById("bbq");
let bbqX = document.getElementById("bbqX");
function showBbq(){
    if (!bbq.classList.contains('active')) {
        bbq.classList.add('active');
        sauceX.classList.remove('active');
    }
}
function closeBbq(){
    bbq.classList.remove('active');
}
bbqBtn.onclick = showBbq;
bbqX.onclick = closeBbq;

//sauceX
let sauceXBtn = document.getElementById("sauceXBtn");
let sauceX = document.getElementById("sauceX");
let sauceXX = document.getElementById("sauceXX");
function showSauceX(){
    sauceX.classList.add('active');
    ketchup.classList.remove('active');
    mustard.classList.remove('active');
    spicy.classList.remove('active');
    honey.classList.remove('active');
    bbq.classList.remove('active');
}
function closeSauceX(){
    sauceX.classList.remove('active');
}
sauceXBtn.onclick = showSauceX;
sauceXX.onclick = closeSauceX;