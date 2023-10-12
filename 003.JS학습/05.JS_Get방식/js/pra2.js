let pm = location.href;

if(pm.indexOf('?') == -1){
    alert('지정상적인 접근');
    location.href = 'pra.html';
}

pm = pm.split('?')[1];
pm = pm.split('=')[1];

pm = decodeURIComponent(pm);

let sdata = {
    레드샵: {
        배경색: "red",
        이미지: "shop_red.jpg",
    },
    오렌지샵: {
        배경색: "orange",
        이미지: "shop_orange.jpg",
    },
    블루샵: {
        배경색: "blue",
        이미지: "shop_blue.jpg",
    },
    블랙샵: {
        배경색: "black",
        이미지: "shop_black.jpg",
    },
    그린샵: {
        배경색: "green",
        이미지: "shop_green.jpg",
    },
}; 

const title = document.querySelector('#title');
const main = document.querySelector('#main');

title.innerText = pm;
main.style.backgroundImage = `url(images/${sdata[pm].이미지})`;
title.style.backgroundColor = sdata[pm].배경색;