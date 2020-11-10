import { timeStamp } from 'console';
import * as fs from 'fs';

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");

const num = +input[0];  //入力値を数字として保持
var sNum = num.toString();   //入力値を文字列として保持
var a = [];
var totalSum = 0; //総和をいれる箱
var tempNum: number; //temporary数値をいれる箱
for (var i = 0, len = sNum.length; i<len; i++) {
    // a[]に文字列を分割して代入
    a.push(sNum.charAt(i));
}
const totNumCalc = Math.pow(2, len-1);  //全計算回数

//　各桁の数、*1倍、*10倍、*100倍...されたのが何回足されるのかを考える

for (var i=len-1; i>=0; i--){
    for (var j=0; j<=len-i-1; j++){
        tempNum = Math.pow(2, len-1-j) * Math.pow(10, j) * (+a[i]);
        totalSum += tempNum;
        console.log(i, j, +a[i], tempNum, totalSum);
    }
}

// console.log(totNumCalc);