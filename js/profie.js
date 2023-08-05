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


window.addEventListener("scroll", function() {
    const header13 = document.querySelector(".header_works1");
    const header14 = document.querySelector(".header_profile1");
    const header15 = document.querySelector(".header_contact1");
    const header16 = document.querySelector(".title_style1");

    // 900px以上スクロールしたらヘッダーに「change_color」クラスをつける
    header13.classList.toggle("change_color1", window.scrollY > 400);
    header14.classList.toggle("change_color1", window.scrollY > 400);
    header15.classList.toggle("change_color1", window.scrollY > 400);
    header16.classList.toggle("change_color1", window.scrollY > 400);
});