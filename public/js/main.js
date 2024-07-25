// script.js インターセクションオブザーバー
const observerOptions = {
    root: null, // ビューポートをルートにする
    rootMargin: '0px 0px -120px 0px', // ビューポートの底から100px上で発火
    threshold: 0.3 // 10%表示されたら発火
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // 一度だけ発火させる
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

const targetElements = document.querySelectorAll('.target');
if (targetElements.length > 0) {
    targetElements.forEach(element => {
        observer.observe(element);
    });
}

// ナビゲーションボタン
const spNav = document.querySelector('.sp-nav');
document.querySelector('.spNavBtn').addEventListener('click', function() {
    const lineTop = document.querySelector('.spNavBtnLineTop');
    const lineBtm = document.querySelector('.spNavBtnLineBtm');

    lineTop.classList.toggle('transform-to-x');
    lineBtm.classList.toggle('transform-to-x');
    spNav.classList.toggle('active');
});

const spNavAnc = document.querySelectorAll('.SpNavAnc');
console.log(spNavAnc)
spNavAnc.forEach(anc => {
    anc.addEventListener('click', function () {
        const lineTop = document.querySelector('.spNavBtnLineTop');
        const lineBtm = document.querySelector('.spNavBtnLineBtm');
        lineTop.classList.remove('transform-to-x');
        lineBtm.classList.remove('transform-to-x');
        spNav.classList.remove('active');
    });
});

//  スプライド
const options = {
    type: 'loop',
    autoplay: true,
    interval: 3000,
    speed: 1000,
    pauseOnFocus: false,
}
const mySplide = new Splide( '.splide', options);
mySplide.mount();