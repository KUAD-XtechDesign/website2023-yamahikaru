'use strict';

// マウスストーカー

const stalker = document.getElementById('stalker');
document.addEventListener('mousemove', function(e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});


// ここからロード
window.onload = () => {
        const loader = document.getElementById('loding');
        loader.classList.add('loaded');
    }
    // ロードここまで
    // ここからプログレスバー
const progressBar = document.querySelector('.progress__bar');

window.addEventListener('scroll', () => {
    const windowYPos = window.pageYOffset;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (windowYPos / height) * 100;
    progressBar.style.width = scrolled + "%";
});
// ここまでプログレスバー

// スムーススクロール
const page_top = document.querySelector('#page_top');
page_top.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



// ここからスクロールで色変更
window.addEventListener("scroll", function() {
    // 要素を変数の中に格納する
    const header1 = document.querySelector(".header_works");
    const header2 = document.querySelector(".header_profile");
    const header3 = document.querySelector(".header_contact");
    const header4 = document.querySelector(".title_style");


    // SNSロゴ
    const header5 = document.querySelector(".twitter");
    const header6 = document.querySelector(".instagram");

    // 花火フェードイン
    const header7 = document.querySelector(".hanabi1_wrap");
    const header8 = document.querySelector(".hanabi_wrap");

    // 棒線フェードイン
    const header9 = document.querySelector(".stick1");
    const header10 = document.querySelector(".stick2");
    const header11 = document.querySelector(".stick3");

    // 上ボタン
    const header12 = document.querySelector("#page_top");

    // ワークスフェードイン
    const header13 = document.querySelector(".main_works_title");
    const header14 = document.querySelector(".main_works_text");
    const header15 = document.querySelector(".main_works_img");
    const header16 = document.querySelector(".button01");
    const header17 = document.querySelector(".main_works_subtitle");
    const header18 = document.querySelector(".main_works_subtitle_text");

    // 900px以上スクロールしたらヘッダーに「change_color」クラスをつける
    header1.classList.toggle("change_color", window.scrollY > 900);
    header2.classList.toggle("change_color", window.scrollY > 900);
    header3.classList.toggle("change_color", window.scrollY > 900);
    header4.classList.toggle("change_color", window.scrollY > 900);


    // SNSロゴ
    header5.classList.toggle("change_color_logo", window.scrollY > 100);
    header6.classList.toggle("change_color_logo", window.scrollY > 90);
    header5.classList.toggle("over_logo", window.scrollY > 2000);
    header6.classList.toggle("over_logo", window.scrollY > 2100);

    // 花火フェードイン
    header7.classList.toggle("hanabi1_fade", window.scrollY > 800);
    header8.classList.toggle("hanabi1_fade", window.scrollY > 800);

    // 棒線フェードイン
    header9.classList.toggle("stick1_fade", window.scrollY > 1200);
    header10.classList.toggle("stick2_fade", window.scrollY > 1300);
    header11.classList.toggle("stick3_fade", window.scrollY > 1400);

    // 上ボタン
    header12.classList.toggle("page_top_fade", window.scrollY > 2150);

    // ワークスフェードイン
    header13.classList.toggle("scroll-in", window.scrollY > 2300); //タイトル
    header14.classList.toggle("scroll-in", window.scrollY > 2350); //テキスト
    header15.classList.toggle("scroll-in", window.scrollY > 2200); //画像
    header16.classList.toggle("scroll-in", window.scrollY > 2200); //ボタン
    header17.classList.toggle("scroll-in", window.scrollY > 2200); //サブタイトル
    header18.classList.toggle("scroll-in", window.scrollY > 2200); //サブテキスト


});

// ここまでスクロールで色変更

let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    for (let i = 0; i < fadeInTarget.length; i++) {
        const rect = fadeInTarget[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight; // 現在のブラウザの高さ
        if (scroll > offset - windowHeight + 150) {
            fadeInTarget[i].classList.add('scroll-in');
        }
    }
});