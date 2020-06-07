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

// #1 Class Decorator

// @genderDecoratorWithParam('F')
// @nothingDecorator
// @genderDecorator
@actionStudyDecorator
class Student {
  private _name:string
  private _age:number
  private _gender!:string

  constructor (name:string, age:number) {
    this._name = name
    this._age = age
  }

  actionGreet () {
    console.log('actionGreet () :>> ',
    `
    안녕하세요. 저는 ${this._name} 입니다. 
    나이는 ${this._age} 입니다.
    성별은 ${this._gender} 입니다.
    `)
  }
}

function nothingDecorator (constructor: any) {
  console.log('nothingDecorator() :>> ', constructor)
}

function genderDecorator (constructor: any) {
  console.log('genderDecorator() :>> ', constructor)
  return <any> class extends constructor {
    _gender = 'M'
  }
}

function genderDecoratorWithParam (gender:string) {
  console.log('genderDecoratorWithParam() :>> ', gender)
  return function (constructor: any) {
    return <any> class extends constructor {
      _gender = gender
    }
  }
}

function actionStudyDecorator (constructor:any) {
  console.log('actionStudyDecorator() :>> ')
  return <any> class extends constructor {
    actionHAHA () {
      console.log('actionHAHA :>> ')
    }
  }
}

const student1 = new Student('말랭', 30)
student1.actionGreet();
(<any> student1).actionHAHA()
