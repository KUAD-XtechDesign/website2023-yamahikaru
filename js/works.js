'use strict'; // マウスストーカー

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
// ここまでスムーススクロール

window.addEventListener("scroll", function() {
    const header13 = document.querySelector(".header_works1");
    const header14 = document.querySelector(".header_profile1");
    const header15 = document.querySelector(".header_contact1");
    const header16 = document.querySelector(".title_style1");

    // 400px以上スクロールしたらヘッダーに「change_color」クラスをつける
    header13.classList.toggle("change_color1", window.scrollY > 400);
    header14.classList.toggle("change_color1", window.scrollY > 400);
    header15.classList.toggle("change_color1", window.scrollY > 400);
    header16.classList.toggle("change_color1", window.scrollY > 400);
});

// ここからホワイトボックス
// box0-------------------
const whitebox0 =
    document.getElementById('whitebox0');
// on
whitebox0.addEventListener('mouseenter', () => {
    whitebox0.style.opacity = 1;
}, false);
//OUT
whitebox0.addEventListener('mouseleave', () => {　　
    whitebox0.style.opacity = 0;
}, false);

const whitebox =
    document.getElementById('whitebox');
// on
whitebox.addEventListener('mouseenter', () => {
    whitebox.style.opacity = 1;
}, false);
//OUT
whitebox.addEventListener('mouseleave', () => {　　
    whitebox.style.opacity = 0;
}, false);

// box1--------------------
const whitebox1 =
    document.getElementById('whitebox1');
// on
whitebox1.addEventListener('mouseenter', () => {
    whitebox1.style.opacity = 1;
}, false);
//OUT
whitebox1.addEventListener('mouseleave', () => {　　
    whitebox1.style.opacity = 0;
}, false);


// box2-------------------
const whitebox2 =
    document.getElementById('whitebox2');
// on
whitebox2.addEventListener('mouseenter', () => {
    whitebox2.style.opacity = 1;
}, false);
//OUT
whitebox2.addEventListener('mouseleave', () => {　　
    whitebox2.style.opacity = 0;
}, false);

// box3-------------------
const whitebox3 =
    document.getElementById('whitebox3');
// on
whitebox3.addEventListener('mouseenter', () => {
    whitebox3.style.opacity = 1;
}, false);
//OUT
whitebox3.addEventListener('mouseleave', () => {　　
    whitebox3.style.opacity = 0;
}, false);

// box4-------------------
const whitebox4 =
    document.getElementById('whitebox4');
// on
whitebox4.addEventListener('mouseenter', () => {
    whitebox4.style.opacity = 1;
}, false);
//OUT
whitebox4.addEventListener('mouseleave', () => {　　
    whitebox4.style.opacity = 0;
}, false);

// box5-------------------
const whitebox5 =
    document.getElementById('whitebox5');
// on
whitebox5.addEventListener('mouseenter', () => {
    whitebox5.style.opacity = 1;
}, false);
//OUT
whitebox5.addEventListener('mouseleave', () => {　　
    whitebox5.style.opacity = 0;
}, false);

// box6-------------------
const whitebox6 =
    document.getElementById('whitebox6');
// on
whitebox6.addEventListener('mouseenter', () => {
    whitebox6.style.opacity = 1;
}, false);
//OUT
whitebox6.addEventListener('mouseleave', () => {　　
    whitebox6.style.opacity = 0;
}, false);

// box7-------------------
const whitebox7 =
    document.getElementById('whitebox7');
// on
whitebox7.addEventListener('mouseenter', () => {
    whitebox7.style.opacity = 1;
}, false);
//OUT
whitebox7.addEventListener('mouseleave', () => {　　
    whitebox7.style.opacity = 0;
}, false);

// box8-------------------
const whitebox8 =
    document.getElementById('whitebox8');
// on
whitebox8.addEventListener('mouseenter', () => {
    whitebox8.style.opacity = 1;
}, false);
//OUT
whitebox8.addEventListener('mouseleave', () => {　　
    whitebox8.style.opacity = 0;
}, false);

// box9-------------------
const whitebox9 =
    document.getElementById('whitebox9');
// on
whitebox9.addEventListener('mouseenter', () => {
    whitebox9.style.opacity = 1;
}, false);
//OUT
whitebox9.addEventListener('mouseleave', () => {　　
    whitebox9.style.opacity = 0;
}, false);

// box10-------------------
const whitebox10 =
    document.getElementById('whitebox10');
// on
whitebox10.addEventListener('mouseenter', () => {
    whitebox10.style.opacity = 1;
}, false);
//OUT
whitebox10.addEventListener('mouseleave', () => {　　
    whitebox10.style.opacity = 0;
}, false);

// box11-------------------
const whitebox11 =
    document.getElementById('whitebox11');
// on
whitebox11.addEventListener('mouseenter', () => {
    whitebox11.style.opacity = 1;
}, false);
//OUT
whitebox11.addEventListener('mouseleave', () => {　　
    whitebox11.style.opacity = 0;
}, false);

// box12-------------------
const whitebox12 =
    document.getElementById('whitebox12');
// on
whitebox12.addEventListener('mouseenter', () => {
    whitebox12.style.opacity = 1;
}, false);
//OUT
whitebox12.addEventListener('mouseleave', () => {　　
    whitebox12.style.opacity = 0;
}, false);

// box13-------------------
const whitebox13 =
    document.getElementById('whitebox13');
// on
whitebox13.addEventListener('mouseenter', () => {
    whitebox13.style.opacity = 1;
}, false);
//OUT
whitebox13.addEventListener('mouseleave', () => {　　
    whitebox13.style.opacity = 0;
}, false);

// box14-------------------
const whitebox14 =
    document.getElementById('whitebox14');
// on
whitebox14.addEventListener('mouseenter', () => {
    whitebox14.style.opacity = 1;
}, false);
//OUT
whitebox14.addEventListener('mouseleave', () => {　　
    whitebox14.style.opacity = 0;
}, false);

// box15-------------------
const whitebox15 =
    document.getElementById('whitebox15');
// on
whitebox15.addEventListener('mouseenter', () => {
    whitebox15.style.opacity = 1;
}, false);
//OUT
whitebox15.addEventListener('mouseleave', () => {　　
    whitebox15.style.opacity = 0;
}, false);

// box16-------------------
const whitebox16 =
    document.getElementById('whitebox16');
// on
whitebox16.addEventListener('mouseenter', () => {
    whitebox16.style.opacity = 1;
}, false);
//OUT
whitebox16.addEventListener('mouseleave', () => {　　
    whitebox16.style.opacity = 0;
}, false);

// box17-------------------
const whitebox17 =
    document.getElementById('whitebox17');
// on
whitebox17.addEventListener('mouseenter', () => {
    whitebox17.style.opacity = 1;
}, false);
//OUT
whitebox17.addEventListener('mouseleave', () => {　　
    whitebox17.style.opacity = 0;
}, false);

// box18-------------------
const whitebox18 =
    document.getElementById('whitebox18');
// on
whitebox18.addEventListener('mouseenter', () => {
    whitebox18.style.opacity = 1;
}, false);
//OUT
whitebox18.addEventListener('mouseleave', () => {　　
    whitebox18.style.opacity = 0;
}, false);

// box19-------------------
const whitebox19 =
    document.getElementById('whitebox19');
// on
whitebox19.addEventListener('mouseenter', () => {
    whitebox19.style.opacity = 1;
}, false);
//OUT
whitebox19.addEventListener('mouseleave', () => {　　
    whitebox19.style.opacity = 0;
}, false);

// box20-------------------
// const whitebox20 =
//     document.getElementById('whitebox20');
// // on
// whitebox20.addEventListener('mouseenter', () => {
//     whitebox20.style.opacity = 1;
// }, false);
// //OUT
// whitebox20.addEventListener('mouseleave', () => {　　
//     whitebox20.style.opacity = 0;
// }, false);

// box21-------------------
const whitebox21 =
    document.getElementById('whitebox21');
// on
whitebox21.addEventListener('mouseenter', () => {
    whitebox21.style.opacity = 1;
}, false);
//OUT
whitebox21.addEventListener('mouseleave', () => {　　
    whitebox21.style.opacity = 0;
}, false);

// box22-------------------
const whitebox22 =
    document.getElementById('whitebox22');
// on
whitebox22.addEventListener('mouseenter', () => {
    whitebox22.style.opacity = 1;
}, false);
//OUT
whitebox22.addEventListener('mouseleave', () => {　　
    whitebox22.style.opacity = 0;
}, false);

// box23-------------------
const whitebox23 =
    document.getElementById('whitebox23');
// on
whitebox23.addEventListener('mouseenter', () => {
    whitebox23.style.opacity = 1;
}, false);
//OUT
whitebox23.addEventListener('mouseleave', () => {　　
    whitebox23.style.opacity = 0;
}, false);

// box24-------------------
const whitebox24 =
    document.getElementById('whitebox24');
// on
whitebox24.addEventListener('mouseenter', () => {
    whitebox24.style.opacity = 1;
}, false);
//OUT
whitebox24.addEventListener('mouseleave', () => {　　
    whitebox24.style.opacity = 0;
}, false);

// box25-------------------
const whitebox25 =
    document.getElementById('whitebox25');
// on
whitebox25.addEventListener('mouseenter', () => {
    whitebox25.style.opacity = 1;
}, false);
//OUT
whitebox25.addEventListener('mouseleave', () => {　　
    whitebox25.style.opacity = 0;
}, false);




// 成果物フェードイン
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

// スクロールアクション
window.addEventListener("scroll", function() {
    // 上戻るやつ
    const header12 = document.querySelector("#page_top");
    // snsロゴ
    const header5 = document.querySelector(".profile_twitter");
    const header6 = document.querySelector(".profile_instagram");

    // 上戻り
    header12.classList.toggle("page_top_fade", window.scrollY > 2100);
    // sneロゴ
    header5.classList.toggle("over_logo", window.scrollY > 2000);
    header6.classList.toggle("over_logo", window.scrollY > 2100);
});

const faplus =
    document.getElementById('faplus');
const works_button_wrap =
    document.getElementById('works_button_wrap');
// on
works_button_wrap.addEventListener('mouseenter', () => {
    faplus.style.transform = "rotate(" + 45 + "deg)";
}, false);
//OUT
works_button_wrap.addEventListener('mouseleave', () => {　　
    faplus.style.transform = "rotate(" + 0 + "deg)";
}, false);

const faplus1 =
    document.getElementById('faplus1');
const works_button_wrap1 =
    document.getElementById('works_button_wrap1');
// on
works_button_wrap1.addEventListener('mouseenter', () => {
    faplus1.style.transform = "rotate(" + 45 + "deg)";
}, false);
//OUT
works_button_wrap1.addEventListener('mouseleave', () => {　　
    faplus1.style.transform = "rotate(" + 0 + "deg)";
}, false);

const faplus2 =
    document.getElementById('faplus2');
const works_button_wrap2 =
    document.getElementById('works_button_wrap2');
// on
works_button_wrap2.addEventListener('mouseenter', () => {
    faplus2.style.transform = "rotate(" + 45 + "deg)";
}, false);
//OUT
works_button_wrap2.addEventListener('mouseleave', () => {　　
    faplus2.style.transform = "rotate(" + 0 + "deg)";
}, false);



// ボタンクリックで表示0
let switchBtn = document.getElementById('works_button_wrap');
let box = document.getElementById('works_school_proN_container');
let changeElement = (el) => {
    if (el.style.display == '') {
        el.style.display = 'flex';
    } else {
        el.style.display = '';
    }
}
switchBtn.addEventListener('click', () => {
    changeElement(box);
    box.classList.add.toggle('show')

}, false);


// ボタンクリックで表示1
let switchBtn1 = document.getElementById('works_button_wrap1');
let box1 = document.getElementById('works_school_proN_container1');
switchBtn1.addEventListener('click', () => {
    changeElement(box1);
}, false);

// ボタンクリックで表示2
let switchBtn2 = document.getElementById('works_button_wrap2');
let box2 = document.getElementById('works_school_proN_container2');
switchBtn2.addEventListener('click', () => {
    changeElement(box2);
}, false);