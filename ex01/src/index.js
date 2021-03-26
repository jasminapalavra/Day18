let myArr = [];

function* multiplication(x) {
    for (i = x+1; i > 0; i--) {
        yield x;
        x *= 2;
        myArr.push(x);
    }
    return x;
}
var num = multiplication(3);

for (let multiplication of num){
    console.log(num.next().value);
    console.log(num.next().value);
    console.log(num.next().value);

}
module.exports = multiplication;
