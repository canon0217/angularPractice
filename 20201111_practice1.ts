//　たくさんの数式
import { timeStamp } from 'console';
import * as fs from 'fs';

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");

var a = [];
var b = [];
var count = 0;

for (var i = 0; i<10; i++) {
    for (var j = 0; j<10; j++) {
        a.push(input[i].charAt(i));
    }
}

for(i=0;i<100;i++){
    if(a[i] === 'o'){
        count++;
    }
}




if(a[0] === 'o') {
    if(a[1] === 'o' || a[10] === 'o') { } else {
        b[count] = 0;
        count++;
    }

}


console.log(a[0]);
console.log(a[11]);
console.log(a[99]);