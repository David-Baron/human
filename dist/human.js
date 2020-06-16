var as = ["d2F0ZXI=", "cG9vbA==", "ZmFtaWx5", "Y2hpbGQ=", "aG9saWRheQ==", "c3dpbQ==", "ZGl2ZQ==", "Y3Jhd2w=", "c3Vu"];

function getStr() { return window.atob(as[Math.floor(Math.random() * as.length)]); }
var b = getStr();


function humanInit() {
    var humanForm = '<div class="human-req"> <input type="button" id="humanBtn" value="I\'m human!"><input type="button" id="humanRst" value="Reset"><canvas id="humanTxt" width="150" height="25"></canvas><img id="humanImg" class="display-none" width="150" height="25"></div><div class="human-res"><input type="text" class="display-none" id="humanRes"></div>';
    let parent = document.getElementById('human')
    parent.insertAdjacentHTML('afterbegin', humanForm);
}
humanInit();

function humanClear() {

}

function humanReset() {
    b = getStr();
}

function humanGenerate() {

}
var c = document.getElementById('humanTxt');
var r = document.getElementById('humanRes');
var imgH = document.getElementById('humanImg');
var reset = document.getElementById('humanRst');
var s = document.querySelectorAll('button[type="submit"] , input[type="submit"]');
for (let e = 0; e < s.length; e++) {
    s[e].classList.add("display-none");
}
reset.classList.add("display-none");

document.getElementById('humanBtn').addEventListener('click', () => {
    var tx = c.getContext('2d');
    tx.font = "20px Georgia";
    var gradient = tx.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    tx.fillStyle = gradient;
    tx.fillText(b, 5, 20);
    imgH.src = tx.canvas.toDataURL();
    imgH.classList.remove("display-none");
    reset.classList.remove("display-none");
    r.classList.remove("display-none");
    /* console.log(imgH.src); */
}), false;
r.addEventListener('keyup', () => {
    if (r.value === b) {
        for (let e = 0; e < s.length; e++) {
            s[e].classList.remove("display-none");
        }
    }
}), false;
var mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        /* console.log(mutation); */
    });
});
mutationObserver.observe(document.documentElement, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
});