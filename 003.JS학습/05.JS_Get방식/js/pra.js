let gnb = document.querySelectorAll('#gnb a');
gnb.forEach(ele => ele.addEventListener('click', goSub));

function goSub(){
    let atxt = this.innerText;
    location.href = 'pra2.html?shop=' + encodeURIComponent(atxt);
}