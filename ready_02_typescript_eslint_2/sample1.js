"use strict";
/*
https://www.sitepoint.com/javascript-decorators-what-they-are/
https://blog-kr.zoyi.co/channel-frontend-decorator/
https://partnerjun.tistory.com/62?category=705423
https://jaeyeophan.github.io/2018/01/09/TS-6-Decorator/
https://blog.shovelman.dev/962

Why Use Decorators?

Whilst functional composition is already possible in JavaScript,
it’s significantly more difficult — or even impossible — to apply the same techniques to other pieces of code
(e.g. classes and class properties).

The decorator proposal adds support for class and property decorators that can be used to resolve these issues,
and future JavaScript versions will probably add decorator support for other troublesome areas of code.

Decorators also allow for a cleaner syntax for applying these wrappers around your code,
resulting in something that detracts less from the actual intention of what you’re writing.

// 구글 번역
JavaScript에서는 기능 구성이 이미 가능하지만 동일한 코드를 다른 코드
(예 : 클래스 및 클래스 속성)에 적용하는 것은 훨씬 어렵거나 불가능합니다.

데코레이터 제안에는 이러한 문제를 해결하는 데 사용할 수있는 클래스 및 속성 데코레이터에 대한 지원이 추가되며,

향후 JavaScript 버전에서는 다른 문제가있는 코드 영역에 대한 데코레이터 지원이 추가 될 수 있습니다.

또한 데코레이터를 사용하면 코드에 이러한 래퍼를 적용 할 수있는 더 확실한 구문을 사용할 수 있으므로 실제로 작성중인 의도와 다소 차이가 있습니다.

Class Decorator
클래스 데코레이터는 클래스 선언 바로 직전에 선언된다.
클래스 데코레이터는 클래스 정의를 관찰, 수정 또는 바꾸는 데 사용할 수 있는 클래스 생성자에 적용된다.
클래스 데코레이터는 선언 파일이나 다른 ambient 컨텍스트 (ex. 선언 클래스)에서 사용할 수 없다.
클래스 데코레이터에 대한 표현식은 런타임에 함수로 호출되며 데코레이팅 클래스의 생성자는 대상을 유일한 인수로 호출된다.
클래스 데코레이터가 값을 반환하는 경우, 클래스 선언을 제공된 생성자 함수로 대체한다.
(새 생성자 함수를 반환하도록 선택해야 하는 경우 원본 프로토타입을 유지하도록 관리해야한다.

출처: https://blog.shovelman.dev/962 [한글로는 삽잡이, 영어로는 shovelman]
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// #1 Class Decorator
// @genderDecoratorWithParam('F')
// @nothingDecorator
// @genderDecorator
var Student = /** @class */ (function () {
    function Student(name, age) {
        this._name = name;
        this._age = age;
    }
    Student.prototype.actionGreet = function () {
        console.log('actionGreet () :>> ', "\n    \uC548\uB155\uD558\uC138\uC694. \uC800\uB294 " + this._name + " \uC785\uB2C8\uB2E4. \n    \uB098\uC774\uB294 " + this._age + " \uC785\uB2C8\uB2E4.\n    \uC131\uBCC4\uC740 " + this._gender + " \uC785\uB2C8\uB2E4.\n    ");
    };
    Student = __decorate([
        actionStudyDecorator
    ], Student);
    return Student;
}());
function nothingDecorator(constructor) {
    console.log('nothingDecorator() :>> ', constructor);
}
function genderDecorator(constructor) {
    console.log('genderDecorator() :>> ', constructor);
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._gender = 'M';
            return _this;
        }
        return class_1;
    }(constructor));
}
function genderDecoratorWithParam(gender) {
    console.log('genderDecoratorWithParam() :>> ', gender);
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_2, _super);
            function class_2() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._gender = gender;
                return _this;
            }
            return class_2;
        }(constructor));
    };
}
function actionStudyDecorator(constructor) {
    console.log('actionStudyDecorator() :>> ');
    return /** @class */ (function (_super) {
        __extends(class_3, _super);
        function class_3() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_3.prototype.actionHAHA = function () {
            console.log('actionHAHA :>> ');
        };
        return class_3;
    }(constructor));
}
var student1 = new Student('말랭', 30);
student1.actionGreet();
student1.actionHAHA();
