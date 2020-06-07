
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
let message1: boolean
message1 = true
message1 = false
console.log('#1 :>> ', message1, typeof (message1))

// #2 기본형 number
let number1: number
number1 = 55
number1 = 77
console.log('#2 :>> ', number1, typeof (number1))

// #3 기본형 string
const message2 = 'hellow world1'
console.log('#3 :>> ', message2, typeof (message2))

// #4 기본형 null
const nullType = null
console.log('#4 :>> ', nullType, typeof (nullType)) // "object" (하위호환 유지를 위해 "null"이 아님)

// #5 기본형 Undefined
const undefinedType = undefined
console.log('#5 >> ', undefinedType, typeof (undefinedType))

// #6 객체타입 array
const numberArray = [1, 2, 3]
const stringArray = ['a', 'b', 'c']
console.log('#6-1 ;>> ', numberArray, typeof (numberArray))
console.log('#6-2 :>> ', stringArray, typeof (stringArray))

// #7 객체타입 function
const testfunction = function () { return 'ttt' }
console.log('#7 :>> ', testfunction, typeof (testfunction))

// #8 객체타입 object --> like any...
const testObject = {}
console.log('#8 :>> ', testObject, typeof (testObject))
