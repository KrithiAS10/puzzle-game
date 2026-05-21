// var rows = 3;
// var columns = 3
// var currTile;
// var turns = 0;
// var imgOrder = ["1", "2", "4", "5", "6", "7", "8", "9"];
// window.onload = function () {
//     for (let r = 0; r < rows; r++) {
//         for (let c = 0; c < columns; c++) {

//             let tile = this.document.createElement("img");
//             tile.id = r.toString() + "-" + c.toString();
//         }
//     }
// }
// for (let r = 0; r < 3; r++) {
//     res[r] = [];
//     for (let c = 0; c < 3; c++) {
// if (r == 0 && c == 0) {
//     res[r][c] = "1" + " ";
// }
// else if (r == 0 && c == 1) {
//     res[r][c] = "2" + " ";
// }
// else if (r == 0 && c == 2) {
//     res[r][c] = "3";
// }
// if (r == 1 && c == 0) {
//     res[r][c] = "4" + " ";
// }
// else if (r == 1 && c == 1) {
//     res[r][c] = "5" + " ";
// }
// else if (r == 1 && c == 2) {
//     res[r][c] = "6";
// }
// if (r == 2 && c == 0) {
//     res[r][c] = "7" + " ";
// }
// else if (r == 2 && c == 1) {
//     res[r][c] = "8" + " ";
// }
// else if (r == 2 && c == 2) {
//     res[r][c] = "0";
// }
//     }
// }
// console.log(res);
// res[0][0] = "1";
// res[0][1] = "2";
// res[0][2] = "3";
// res[1][0] = "4";
// res[1][1] = "5";
// res[1][2] = "6";
// res[2][0] = "7";
// res[2][1] = "8";
// res[2][2] = "0";
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// let count = 0;
// rl.question("Enter your move: ", function (move) {
//     swap(move);
//     for (let r = 0; r < 3; r++) {
//         let result = "";
//         for (let c = 0; c < 3; c++) {
//             result += res[r][c] + " ";
//         }
//         console.log(result);
//     }
// });
// const move = await rl.question("Enter your move(w/a/s/d or exit):");
// if (move.toLowerCase().trim() === "exit") {
//     `<h5>Exit</h5>`
//     break;
// }
let count = 0;
let a = 0;
let gameOver = false;
let orig = [["src/10.png", "src/2.png", "src/3.png"], ["src/4.png", "src/5.png", "src/6.png"], ["src/7.png", "src/8.png", "src/9.png"]];
let res = [["src/10.png", "src/2.png", "src/3.png"], ["src/4.png", "src/5.png", "src/6.png"], ["src/7.png", "src/8.png", "src/9.png"]];
function printB() {
    let result = "";
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {

            result += `<div class="pieces">
            <img src="${res[r][c]}">
        </div>`
        }
    }
    document.getElementById("board").innerHTML = result;
}
printB();
function dark() {
    document.body.className = "dark";
}
function light() {
    document.body.className = "light";
}
// const readline = require("readline/promises");
`<h5>Initial Board</h5>`
// printB();
// const { stdin: input, stdout: output } = require("process");
let arr = ["w", "a", "s", "d"];
let i = 0;
let j = 0;
let temp;
function swap(move) {
    if (move.toLowerCase() === "w") {
        if (i > 0) {
            temp = res[i][j];
            res[i][j] = res[i - 1][j];
            res[i - 1][j] = temp;
            i = i - 1;
            count++;
        }
    }
    else if (move.toLowerCase() === "s") {
        if (i < 2) {
            temp = res[i][j];
            res[i][j] = res[i + 1][j];
            res[i + 1][j] = temp;
            i = i + 1;
            count++;
        }
    }
    else if (move.toLowerCase() === "a") {
        if (j > 0) {
            temp = res[i][j];
            res[i][j] = res[i][j - 1];
            res[i][j - 1] = temp;
            j = j - 1;
            count++;
        }
    }
    else if (move.toLowerCase() === "d") {
        if (j < 2) {
            temp = res[i][j];
            res[i][j] = res[i][j + 1];
            res[i][j + 1] = temp;
            j = j + 1;
            count++;
        }
    }
}
function shuffle() {
    return arr[Math.floor(Math.random() * 4)]
}
function comp() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (orig[i][j] != res[i][j]) {
                return false;
            }
        }
    }
    return true;
}


function play() {
    // const rl = readline.createInterface({ input, output });
    try {
        while (a <= 50) {
            // console.log("Enter your move(w/a/s/d or exit):");
            const move = shuffle();
            // if (move.trim() === "exit") {
            //     console.log("exit")
            //     break;
            // }
            swap(move);
            // printB();
            a++;

        }
        console.log("Shuffled board");
        printB();
    }
    catch (error) {
        console.log("Error occurred!!!")
    }
}
play();
count = 0;
document.addEventListener("keydown", function (event) {
    if (gameOver) {
        return;
    }
    const move = event.key;
    swap(move);
    printB();
    document.getElementById("turns").innerText = count;
    if (comp()) {
        document.body.innerHTML += "🎉"
        document.getElementById("turns").innerText = "You Win in " + count + " moves";
        gameOver = true;
    }
})