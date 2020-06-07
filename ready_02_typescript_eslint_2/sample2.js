"use strict";
/*
// PropertyDescriptor : https://ko.javascript.info/property-descriptors

출처: https://blog.shovelman.dev/962
메서드 데코레이터는 메서드 선언 바로 직전에 선언된다.
데코레이터는 메서드의 프로퍼티 Descriptor에 적용되며, 메서드 정의를 관찰, 수정 또는 바꾸는데 사용할 수 있다.
메서드 데코레이터는 선언 파일, 오버로드 또는 기타 ambient 컨텍스트(ex. 선언 클래스)에서 사용할 수 없다.
메서드 데코레이터의 표현식은 런타임에 다음 세가지 인수와 하께 함수로 호출된다.

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// #2 Method Decorators
var Human = /** @class */ (function () {
    function Human(name, age) {
        this._name = name;
        this._age = age;
    }
    Human.prototype.actionGreet = function () {
        console.log('actionGreet () :>> ', "\n    \uBC18\uAC11\uC2B5\uB2C8\uB2E4. \uC800\uB294 " + this._name + " \uC785\uB2C8\uB2E4. \n    \uB098\uC774\uB294 " + this._age + " \uC785\uB2C8\uB2E4.\n    ");
    };
    Human.prototype.actionHAHA = function () {
        console.log('actionHAHA :>> ');
    };
    __decorate([
        enumerable(false)
    ], Human.prototype, "actionGreet", null);
    __decorate([
        changeAble(true)
    ], Human.prototype, "actionHAHA", null);
    return Human;
}());
function enumerable(value) {
    return function (target, propertyKey, propertyDescriptor) {
        propertyDescriptor.enumerable = value;
    };
}
function changeAble(writable) {
    return function (target, propName, propertyDescriptor) {
        propertyDescriptor.writable = writable;
    };
}
var human1 = new Human('말랭', 30);
console.log('human1 :>> ', human1);
for (var key in human1) {
    console.log("key : " + key);
}
human1.actionHAHA();
human1.actionHAHA = function () {
    console.log('actionHAHA NEW!! :>> ');
};
human1.actionHAHA();
