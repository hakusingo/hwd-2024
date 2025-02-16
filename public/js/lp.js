//  スプライド
const options = {
    type: 'loop',          // ループモード
    autoplay: true,        // 自動再生を有効化
    interval: 3000,        // スライド間の時間 (ミリ秒)
    speed: 1800,           // スライドのアニメーション速度 (ミリ秒)
    pauseOnHover: false,   // ホバー時に停止しない
    pauseOnFocus: false,   // フォーカス時に停止しない
    gap: 16,  
}
const mySplide = new Splide( '.splide', options);
mySplide.mount();


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