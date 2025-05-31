let smn = document.getElementById('smn');
let strt = document.getElementById('strt');
let lvl = document.getElementById('level');
let g = document.getElementById('green');
let r = document.getElementById('red');
let y = document.getElementById('yellow');
let b = document.getElementById('blue');
let ln = 1, gn = 0, a = [], ai = 0, c = [], ci = 0, fclr = [g, r, y, b], rclr = ['green', 'red', 'yellow', 'blue'];
function blink() {
    fclr[gn].style.backgroundColor = "white";
    smn.style.color = rclr[gn];
    setTimeout(crst, 300);
}
function game() {
    lvl.style.color = "white";
    lvl.innerText = `Level ${ln}`;
    gn = Math.floor(Math.random() * 4);
    a[ai++] = gn;
    setTimeout(blink, 300);
}
function crst() {
    fclr[gn].style.backgroundColor = rclr[gn];
    if (ai < ln) {
        setTimeout(game, 300);
    } else {
        smn.style.color = "white";
    }
}
function reset() {
    a.length = 0;
    ai = 0;
    c.length = 0;
    ci = 0;
}
function dw() {
    lvl.style.color = "transparent";
    setTimeout(db, 300);
}
function db() {
    lvl.style.color = "white";
    setTimeout(dwd, 300);
}
function dwd() {
    lvl.style.color = "transparent";
    setTimeout(dbd, 300);
}
function dbd() {
    lvl.style.color = "white";
    setTimeout(fnl, 1000);
}
function fnl() {
    lvl.innerText = `Level ${ln}`;
    setTimeout(game, 1000);
}
function check() {
    if (a[ci - 1] !== c[ci - 1]) {
        lvl.innerText = `GAME OVER! Your Score: ${ln - 1}`;
        strt.innerText = "start";
        lvl.style.color = "red";
        ln = 1;
        reset();
    } else {
        if (ci === ln) {
            lvl.innerText = `Level ${ln} Complete`;
            ln++;
            reset();
            setTimeout(dw, 300);
        }
    }
}
strt.addEventListener('click', function () {
    if (lvl.innerText[0] !== "L") {
        game();
    }
});

for (let i = 0; i < 4; i++) {
    fclr[i].addEventListener('click', function () {
        if (smn.style.color === "white" && lvl.innerText[0] !== "G" && lvl.innerText[lvl.innerText.length - 1] !== "e") {
            c[ci++] = i;
            check();
        }
    });
}

