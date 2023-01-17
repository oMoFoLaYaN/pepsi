const pepsi = [{
    name: "Pepsi Diet",
    amount: "350 cl",
    amountPer: "8.6%",
    fat: "0g",
    fatPer: "0%",
    sodium: "310mg",
    sodiumPer: "1%",
    carbohydrate: "48g",
    carbohydratePer: "15.3%",
    protein: "0g",
    proteinPer: "0%",
    ml: "250 ml",
    poster1: "img/1 Pespi white.png",
    poster2: "img/1 Pespi blue.png",
    mainPoster: "img/pepsi diet.png",
},
{
    name: "Pepsi Classic",
    amount: "330 cl",
    amountPer: "7.5%",
    fat: "0g",
    fatPer: "0%",
    sodium: "30mg",
    sodiumPer: "1%",
    carbohydrate: "41g",
    carbohydratePer: "14%",
    protein: "0g",
    proteinPer: "0%",
    ml: "330 ml",
    poster1: "img/2 can white.png",
    poster2: "img/2 can blue.png",
    mainPoster: "img/can.png",
},
{
    name: "Pepsi 500 ML",
    amount: "350 cl",
    amountPer: "12.9%",
    fat: "0g",
    fatPer: "0%",
    sodium: "40mg",
    sodiumPer: "2%",
    carbohydrate: "52g",
    carbohydratePer: "21.7%",
    protein: "0g",
    proteinPer: "0%",
    ml: "500 ml",
    poster1: "img/3 Pepsi white.png",
    poster2: "img/3 Pepsi blue.png",
    mainPoster: "img/pepsi .5ltr.png",
},
{
    name: "Pepsi 1 LTR",
    amount: "510 cl",
    amountPer: "16.3%",
    fat: "0g",
    fatPer: "0%",
    sodium: "49mg",
    sodiumPer: "2%",
    carbohydrate: "61g",
    carbohydratePer: "27.4%",
    protein: "0g",
    proteinPer: "0%",
    ml: "1 Ltr",
    poster1: "img/4 Pepsi white.png",
    poster2: "img/4 Pepsi blue.png",
    mainPoster: "img/pepsi 1ltr.png",
},
{
    name: "Pepsi 1.5 LTR",
    amount: "625 cl",
    amountPer: "19.4%",
    fat: "0g",
    fatPer: "0%",
    sodium: "50mg",
    sodiumPer: "3%",
    carbohydrate: "66g",
    carbohydratePer: "30.8%",
    protein: "0g",
    proteinPer: "0%",
    ml: "1.5 Ltr",
    poster1: "img/5 Pepsi white.png",
    poster2: "img/5 Pepsi blue.png",
    mainPoster: "img/pepsi 1.5ltr.png",
},
{
    name: "Pepsi 2 LTR",
    amount: "729 cl",
    amountPer: "37.2%",
    fat: "0g",
    fatPer: "0%",
    sodium: "60mg",
    sodiumPer: "4%",
    carbohydrate: "60g",
    carbohydratePer: "33.2%",
    protein: "0g",
    proteinPer: "0%",
    ml: "2 Ltr",
    poster1: "img/6 Pepsi white.png",
    poster2: "img/6 Pepsi blue.png",
    mainPoster: "img/pepsi 2ltr.png",
}
]


Array.from(document.getElementsByClassName('card-pepsi')).forEach((ele, i) => {
    ele.addEventListener('mouseover', () => {
        document.getElementsByClassName('pepsi-hover-img')[i].src = pepsi[i].poster1;
    })
    ele.addEventListener('mouseout', () => {
        document.getElementsByClassName('pepsi-hover-img')[i].src = pepsi[i].poster2;
    })
})


Array.from(document.getElementsByClassName('card-pepsi')).forEach((ele, i) => {
    ele.addEventListener('click', () => {
            document.getElementById('main-bottle').src = pepsi[i].mainPoster;
            document.getElementById('main-title').innerText = pepsi[i].name;
            document.getElementById('ml-title').innerText = pepsi[i].ml;
            document.getElementById('cl').innerText = pepsi[i].amount;
            document.getElementById('cl1').innerText = pepsi[i].amountPer;
            document.getElementById('fat').innerText = pepsi[i].fat;
            document.getElementById('fat1').innerText = pepsi[i].fatPer;
            document.getElementById('sodium').innerText = pepsi[i].sodium;
            document.getElementById('sodium1').innerText = pepsi[i].sodiumPer;
            document.getElementById('carbohydrate').innerText = pepsi[i].carbohydrate;
            document.getElementById('carbohydrate1').innerText = pepsi[i].carbohydratePer;
            document.getElementById('protein').innerText = pepsi[i].protein;
            document.getElementById('protein1').innerText = pepsi[i].proteinPer;
    })
})

let index = 1;

document.getElementById('left-btn').addEventListener('click', () => {
    index -= 1;
    if (index < 0) {
        index = pepsi.length;
    }
    document.getElementById('main-bottle').src = pepsi[index].mainPoster;
    document.getElementById('main-title').innerText = pepsi[index].name;
    document.getElementById('ml-title').innerText = pepsi[index].ml;
    document.getElementById('cl').innerText = pepsi[index].amount;
    document.getElementById('cl1').innerText = pepsi[index].amountPer;
    document.getElementById('fat').innerText = pepsi[index].fat;
    document.getElementById('fat1').innerText = pepsi[index].fatPer;
    document.getElementById('sodium').innerText = pepsi[index].sodium;
    document.getElementById('sodium1').innerText = pepsi[index].sodiumPer;
    document.getElementById('carbohydrate').innerText = pepsi[index].carbohydrate;
    document.getElementById('carbohydrate1').innerText = pepsi[index].carbohydratePer;
    document.getElementById('protein').innerText = pepsi[index].protein;
    document.getElementById('protein1').innerText = pepsi[index].proteinPer;
})

    document.getElementById('right-btn').addEventListener('click', () => {
        index ++;
        if (index > pepsi.length) {
            index = 0;
        }
    document.getElementById('main-bottle').src = pepsi[index].mainPoster;
    document.getElementById('main-title').innerText = pepsi[index].name;
    document.getElementById('ml-title').innerText = pepsi[index].ml;
    document.getElementById('cl').innerText = pepsi[index].amount;
    document.getElementById('cl1').innerText = pepsi[index].amountPer;
    document.getElementById('fat').innerText = pepsi[index].fat;
    document.getElementById('fat1').innerText = pepsi[index].fatPer;
    document.getElementById('sodium').innerText = pepsi[index].sodium;
    document.getElementById('sodium1').innerText = pepsi[index].sodiumPer;
    document.getElementById('carbohydrate').innerText = pepsi[index].carbohydrate;
    document.getElementById('carbohydrate1').innerText = pepsi[index].carbohydratePer;
    document.getElementById('protein').innerText = pepsi[index].protein;
    document.getElementById('protein1').innerText = pepsi[index].proteinPer;
})
    