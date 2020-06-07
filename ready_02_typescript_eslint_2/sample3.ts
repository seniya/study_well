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

// #3 Property Decorators, Parameter Decorator

class Man {
  private _name = '무말랭'
  private _age:number
  // @readOnly()
  private _gender:string

  constructor (name:string, age:number) {
    this._name = name
    this._age = age
    this._gender = 'M'
  }

  actionGreet () {
    console.log('actionGreet () :>> ',
    `
    반갑습니다. 저는 ${this._name} 입니다. 
    나이는 ${this._age} 입니다.
    성별은 ${this._gender} 입니다.
    `)
  }

  actionHAHA (@logInfo someoneName:string) {
    console.log('actionHAHA :>> ', `Hey you ${someoneName} HAHA`)
  }

  public toString () {
    return `${this._name} ${this._age} ${this._gender}`
  }
}

// Property Decorators
function readOnly () {
  return function (target:any, propName:string): any {
    return { // description  포함
      writable: false
    }
  }
}

// Parameter Decorator
function logInfo (target:any, methodName: string, paramIdx:number) {
  console.log('printInfo() target :>> ', target)
  console.log('printInfo() methodName :>> ', methodName)
  console.log('printInfo() paramIdx :>> ', paramIdx)
}

const theMan1 = new Man('김말랭', 30)
// console.log('theMan1 :>> ', theMan1)
// theMan1.actionGreet()
theMan1.actionHAHA('무말랭')
