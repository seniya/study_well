"use strict";
// https://www.typescriptlang.org/docs/handbook/basic-types.html
// [array, tuple, enum, any, void, never, interface, Optional Properties(선택적 프로퍼티) ] in Typescript
// #1 array
// Array<T> 제네릭을 사용하겠다는 의미로 꺽쇠(Angle brackets)
// T는 Type의 약자로 다른 언어에서도 제네릭을 선언할 때 관용적으로 많이 사용된다.
var testArray = [1, 2, 3];
var testArray2 = [4, 5, 6];
console.log('#1-1 array testArray :>> ', testArray);
console.log('#1-2 array testArray2 :>> ', testArray2);
// #2 tuple
var testTuple;
testTuple = ['a', 1, true];
testTuple = ['b', 2, false];
console.log('#2 tuple testTuple:>> ', testTuple);
// #3 enum
var MyColor;
(function (MyColor) {
    MyColor[MyColor["RED"] = 5] = "RED";
    MyColor[MyColor["GREEN"] = 1] = "GREEN";
    MyColor[MyColor["BLUE"] = 3] = "BLUE";
})(MyColor || (MyColor = {})); // 0,1,2
var testColor = MyColor.RED;
testColor = MyColor.BLUE;
console.log('#3 enum testColor :>> ', testColor);
// #4 any
var testAny;
testAny = 'a';
testAny = 6;
console.log('#4 testAny :>> ', testAny);
// #5 void
function testFn() {
    console.log('in testFn console');
    // return 'aaaa'
}
console.log('#5 void testFn :>> ', testFn);
// #6 never
// 어떤 다른 타입도 Never에 사용 불가능하며 오로지 exception과 같이 throw되는 함수에 주로 사용한다. never에는 undefined, null, any조차 할당이 불가능하다.
function testNever() {
    throw new Error('error');
}
console.log('#6 never testNever :>> ', testNever);
// #7-1 interface
function plusNumber(x, y) {
    return x + y;
}
console.log('#7-1 interface :>> ', plusNumber(1, 2));
function plusNumber2(param) {
    return param.x + param.y;
}
var myParam = { x: 10, y: 20 };
// console.log('#7-2 interface :>> ', plusNumber2({ x: 3, y: 20 }))
console.log('#7-2 interface :>> ', plusNumber2(myParam));
function addString(param) {
    // const returnValue = param.x + param.y + param.z
    var returnValue = param.x + param.y;
    if (param.z) {
        returnValue += param.z;
    }
    return returnValue;
}
var myParm2 = {
    x: 'a',
    y: 'b',
    z: 'c'
};
console.log('#8 Optional Properties :>> ', addString(myParm2));
