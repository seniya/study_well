"use strict";
/*
// https://www.typescriptlang.org/docs/handbook/decorators.html
// https://itmining.tistory.com/88

A Property Decorator 은 단지 속성 선언하기 전에 선언된다. 속성 데코레이터는 선언 파일이나 다른 주변 컨텍스트
(예 : declare클래스) 에서 사용할 수 없습니다 .

속성 데코레이터의 표현식은 런타임에 다음 두 개의 인수와 함께 함수로 호출됩니다.

정적 멤버에 대한 클래스의 생성자 함수 또는 인스턴스 멤버에 대한 클래스의 프로토 타입입니다.
회원의 이름입니다.
1. 정적 멤버에 대한 클래스의 생성자 함수 또는 인스턴스 멤버에 대한 클래스의 프로토타입.
2. The name of the member.
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// #3 Property Decorators, Parameter Decorator
var Man = /** @class */ (function () {
    function Man(name, age) {
        this._name = '무말랭';
        this._name = name;
        this._age = age;
        this._gender = 'M';
    }
    Man.prototype.actionGreet = function () {
        console.log('actionGreet () :>> ', "\n    \uBC18\uAC11\uC2B5\uB2C8\uB2E4. \uC800\uB294 " + this._name + " \uC785\uB2C8\uB2E4. \n    \uB098\uC774\uB294 " + this._age + " \uC785\uB2C8\uB2E4.\n    \uC131\uBCC4\uC740 " + this._gender + " \uC785\uB2C8\uB2E4.\n    ");
    };
    Man.prototype.actionHAHA = function (someoneName) {
        console.log('actionHAHA :>> ', "Hey you " + someoneName + " HAHA");
    };
    Man.prototype.toString = function () {
        return this._name + " " + this._age + " " + this._gender;
    };
    __decorate([
        __param(0, logInfo)
    ], Man.prototype, "actionHAHA", null);
    return Man;
}());
// Property Decorators
function readOnly() {
    return function (target, propName) {
        return {
            writable: false
        };
    };
}
// Parameter Decorator
function logInfo(target, methodName, paramIdx) {
    console.log('printInfo() target :>> ', target);
    console.log('printInfo() methodName :>> ', methodName);
    console.log('printInfo() paramIdx :>> ', paramIdx);
}
var theMan1 = new Man('김말랭', 30);
// console.log('theMan1 :>> ', theMan1)
// theMan1.actionGreet()
theMan1.actionHAHA('무말랭');
