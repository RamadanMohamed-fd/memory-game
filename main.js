document.querySelector(".lay button").onclick = (() => {
    let playerName = prompt("Pleas Enter Your Name");
    if (playerName === null || playerName === "") {

        document.querySelector("header span").innerHTML = "Unkown";
    } else {
        document.querySelector("header span").innerHTML = playerName;
    }
    document.querySelector(".lay").remove();
    setTimeout(() => {
        document.querySelectorAll(".game-block").forEach((el) => {
            el.classList.add("roted");
        });
    }, 0);
    setTimeout(() => {
        document.querySelectorAll(".game-block").forEach((el) => {
            el.classList.remove("roted");
        });
    }, 2000);
});
let blockArray = Array.from(document.querySelectorAll("section .game-block"));
function randomOreder() {
    let randomArray = [];
    for (let i = 0; i < blockArray.length; i++) {
        let y = Math.floor(Math.random() * blockArray.length);
        if (randomArray.includes(y)) {
            i--;
        }
        else {
            randomArray.push(y);
        }
    }
    return randomArray;
}
randomOreder().forEach((el, index) => {
    blockArray[index].style.order = el;
});
function addroted() {
    let coun = [];
    blockArray.forEach((el, index) => {
        el.onclick = _ => {
            el.classList.add("roted");
            coun.push(index);
            chack(coun);

        };

    });
}
let cwn = 0;
let cwnn = 0;
function chack(coun) {

    if (coun.length % 2 === 0) {
        if (blockArray[coun[coun.length - 2]].dataset.technology === blockArray[coun[coun.length - 1]].dataset.technology) {
            cwnn++;
            if (cwnn === 10) {
                document.querySelector(".lay1").style.display = "block";
            }
        } else {
            cwn++;
            setTimeout(() => {
                blockArray[coun[coun.length - 2]].classList.remove("roted");
                blockArray[coun[coun.length - 1]].classList.remove("roted");
                document.querySelector("section").classList.add("noclick");
            }, 500);
            setTimeout(() => {
                document.querySelector("section").classList.remove("noclick");
            }, 500);
        }
    }
    numberOfWrong(cwn);
}
function numberOfWrong(cwn) {
    document.querySelector(".tries span").innerHTML = cwn;
}
addroted();

