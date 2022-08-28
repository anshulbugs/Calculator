let loader = document.querySelector(".loader");
window.addEventListener("load", () => {
    loader.classList.add("disappear");
})

let answer = document.getElementById("demo");
let ansvalue = '';
let buttons = document.querySelectorAll("button");
let c = 0;
let arr=["+","-","x","÷","^"];
for (const items of buttons) {
    items.addEventListener("click", (e) => {
        let buttontext = e.target.innerText;
        if (ansvalue == '' && arr.includes(buttontext)==true) {
            answer.value = ''
        }
        else {
            if (buttontext == "C") {
                ansvalue = '';
                answer.value = ansvalue;
            } else if (buttontext == "x") {
                ansvalue += '*';
                answer.value += "x";
                // console.log(ansvalue)
                // console.log(answer.value)
                // ansvalue = ansvalue.substring(0, ansvalue.length - 1) + "*";
                // console.log(ansvalue)

            } else if (buttontext == "÷") {
                ansvalue += '/';
                answer.value += "÷";
                // console.log(ansvalue)
                // console.log(answer.value)
                // ansvalue = ansvalue.substring(0, ansvalue.length - 1) + "/";
                // console.log(ansvalue)
            } else if (buttontext == "DEL") {
                ansvalue = ansvalue.substring(0, ansvalue.length - 1);
                answer.value = answer.value.substring(0, answer.value.length - 1);
            } else if (buttontext == "^") {
                ansvalue += "**";
                answer.value += "^";
                // ansvalue = ansvalue.substring(0, ansvalue.length - 1) + "**";
            } else if (buttontext == "=") {
                let k = eval(ansvalue);
                if (k) {
                    answer.value += `\r${k}`;
                    ansvalue = "";
                    c = c + 1;
                } else {
                    answer.value = "";
                    ansvalue = "";
                }


            } else {
                if (ansvalue == "" && c != 0) {
                    answer.value = "";
                    c = 0
                    ansvalue += buttontext;
                    answer.value += buttontext;
                } else {
                    ansvalue += buttontext;
                    answer.value += buttontext;
                }
            }
        }
    })
}