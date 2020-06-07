"use strict";
// 사용하고자 하는 선언 데이터 옆에 ": 타입"을 서술한다.
/*
기본 자료형 (Primitive) 인 여섯가지 데이터 타입
Boolean
Null
Undefined
Number
String
Symbol (ECMAScript 6 에 추가됨)
별도로 Object 도 있음 (array, function, object)
*/
// #1 기본형 boolean
var message1;
message1 = true;
console.log('#1 >> ', message1, typeof (message1));
// #2 기본형 number
var number1;
number1 = 55;
console.log('#2 >> ', number1, typeof (number1));
// #3 기본형 string
var message2;
message2 = "hellow world1";
console.log('#3 >> ', message2, typeof (message2));
// #4 기본형 null
var nullType;
nullType = null;
console.log('#4 >> ', nullType, typeof (nullType)); // "object" (하위호환 유지를 위해 "null"이 아님)
// #5 기본형 Undefined
var undefinedType;
undefinedType = undefined;
console.log('#5 >> ', undefinedType, typeof (undefinedType));
// #6 객체타입 array
var numberArray;
numberArray = [1, 2, 3];
var stringArray;
stringArray = ['a', 'b', 'c'];
console.log('#6-1 >> ', numberArray, typeof (numberArray));
console.log('#6-2 >> ', stringArray, typeof (stringArray));
// #7 객체타입 function
var testfunction;
testfunction = function () { };
console.log('#7 :>> ', testfunction, typeof (testfunction));
// #8 객체타입 object
var testObject;
testObject = 8;
console.log('#8 :>> ', testObject, typeof (testObject));
// 
var getMessage = function () { return 'Hello world2'; };
console.log('#2 : ', getMessage());
