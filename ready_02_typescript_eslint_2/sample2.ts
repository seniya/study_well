/*
// PropertyDescriptor : https://ko.javascript.info/property-descriptors

출처: https://blog.shovelman.dev/962
메서드 데코레이터는 메서드 선언 바로 직전에 선언된다.
데코레이터는 메서드의 프로퍼티 Descriptor에 적용되며, 메서드 정의를 관찰, 수정 또는 바꾸는데 사용할 수 있다.
메서드 데코레이터는 선언 파일, 오버로드 또는 기타 ambient 컨텍스트(ex. 선언 클래스)에서 사용할 수 없다.
메서드 데코레이터의 표현식은 런타임에 다음 세가지 인수와 하께 함수로 호출된다.

*/

// #2 Method Decorators

class Human {
  private _name:string
  private _age:number

  constructor (name:string, age:number) {
    this._name = name
    this._age = age
  }

  @enumerable(false)
  actionGreet () {
    console.log('actionGreet () :>> ',
    `
    반갑습니다. 저는 ${this._name} 입니다. 
    나이는 ${this._age} 입니다.
    `)
  }

  @changeAble(true)
  actionHAHA () {
    console.log('actionHAHA :>> ')
  }
}

function enumerable (value: boolean) {
  return function (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) {
    propertyDescriptor.enumerable = value
  }
}

function changeAble (writable: boolean) {
  return function (target: any, propName: string, propertyDescriptor: PropertyDescriptor) {
    propertyDescriptor.writable = writable
  }
}

const human1 = new Human('말랭', 30)
console.log('human1 :>> ', human1)

for (const key in human1) {
  console.log(`key : ${key}`)
}

human1.actionHAHA()
human1.actionHAHA = function () {
  console.log('actionHAHA NEW!! :>> ')
}
human1.actionHAHA()
