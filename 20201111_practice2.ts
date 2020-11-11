//　たくさんの数式
import { timeStamp } from 'console';
import * as fs from 'fs';

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");

const num = input[0];  //入力値を数字として保持
let area = num.split(' ');
let countItr = 1;
let countArea = 0;

var a = [];
var b = [];

for (var i = 1; i<=+area[0]; i++) {
    for (var j = 0; j<+area[1]; j++) {
        a.push(input[i].charAt(j));
    }
}

for(i=0; i<+area[0]*+area[1]; i++){
    if('.' === a[i]) {
        b[i] = 0;
    } else if ('#' === a[i]) {
        b[i] = 1;
        countArea++;
    }
}

// area[0]: 行数, area[1]: 列数

// 全てのマスが黒くなるまで、白マスを黒マスに変える
while (countArea !== +area[0]*+area[1]) {

    for(i=0; i< +area[0] * +area[1]; i++){
        if(countItr === b[i]) {
            b[i]+=1;

            // TODO: ここにfor文でもう100回回さないといけない
            // b[i]が四隅のケース
            if (0 === i) {                                    // 左上のケース
                b[1] = b[i];                                  // 1マス右の更新
                b[+area[1]] = b[i];                           // 1マス下の更新
            }
            if (+area[1] - 1 === i) {                         // 右上のケース
                b[+area[1] - 2] = b[i];                       // 1マス左の更新
                b[+area[1] + +area[1]] = b[i];                // 1マス下の更新
            }
            if (+area[0] * +area[1] - +area[1] === i) {       // 左下のケース
                b[+area[0] * +area[1] - +area[1]] = b[i];     // 1マス上の更新
                b[+area[0] * +area[1] - +area[1] + 1] = b[i]; // 1マス右の更新
            }
            if (+area[0] * +area[1] - 1 === i) {              // 右下のケース
                b[+area[0] * +area[1] - +area[1]] = b[i];     // 1マス上の更新
                b[+area[0] * +area[1] - 2] = b[i];            // 1マス左の更新
            }

            // b[i]が四隅以外の一番上の行のケース
            if (0 < i && i < +area[1] - 1) { 
                b[i + +area[1]] = b[i]; // 1マス下の更新
                b[i - 1] = b[i];        // 1マス左の更新
                b[i + 1] = b[i];        // 1マス右の更新
            }

            // b[i]が四隅以外の一番下の行のケース
            if (+area[0] * +area[1] - +area[1] < i && i < +area[0] * +area[1] - 1) { 
                b[i - +area[1]] = b[i]; // 1マス上の更新
                b[i - 1] = b[i];        // 1マス左の更新
                b[i + 1] = b[i];        // 1マス右の更新
            }

            // b[i]が四隅以外の一番左の列のケース
            if (+area[0] * +area[1] - +area[1] < i && i < +area[0] * +area[1] - 1) { 
                b[i - +area[1]] = b[i]; // 1マス上の更新
                b[i - 1] = b[i];        // 1マス左の更新
                b[i + 1] = b[i];        // 1マス右の更新
            }

            // b[i]が四隅以外の一番右の列のケース

            // それ以外のケース
            b[i - +area[1]] = b[i]; // 1マス上の更新
            b[i + +area[1]] = b[i]; // 1マス下の更新
            b[i - 1] = b[i];        // 1マス左の更新
            b[i + 1] = b[i];        // 1マス右の更新

        } else {
            //何もしない
        }
    
    }

    // 現在の黒マス数を更新 (この処理を上のfor文の中に入れれば、少し計算量を削れる)
    for(i=0; i< +area[0] * +area[1]; i++){
        if(countItr+1 === b[i]){
            countArea++;
        }
    }

    countItr++;
}

// console.log(a[0]);
// console.log(a[4]);

