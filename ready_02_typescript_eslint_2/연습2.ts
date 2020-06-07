/*
// https://www.typescriptlang.org/docs/handbook/decorators.html
// [ Decorator ] in Typescript

function ClassDecorator1 (constructor: any) {
  console.log('ClassDecorator1 constructor :>> ', constructor)

  return <any> class extends constructor {
    name = 'SM6';
    color = 'black'
  }
}

@ClassDecorator1
class Car {
  name:string;
  price:number;
  type!:string;

  constructor (name:string, price:number) {
    this.name = name
    this.price = price
  }
}

const myCar = new Car('아반테', 100)
console.log('myCar :>> ', myCar)

// #9 Decorator : 장식품 like 'java의 annotation'
// https://typescript-kr.github.io/pages/Decorators.html

function ClassDecorator2 (param: any) {
  console.log('ClassDecorator2 param:>> ', param)
  return function (constructor: any) {
    console.log(constructor)

    return <any> class extends constructor {
      someValue = param.somValue + ' world';
    }
  }
}

@ClassDecorator2({ somValue: 'hello' })
class Car2 {
  name:string;
  price:number;
  type!:string;

  constructor (name:string, price:number) {
    this.name = name
    this.price = price
  }
}

const myCar2 = new Car2('좋은차', 200)
console.log('myCar2 :>> ', myCar2)

class Container {
  private static map:{[key:string]: any} = {};

  static add (key:string, value:string): void {
    Container.map[key] = value
  }

  static get (key:string): string {
    return Container.map[key]
  }
}

Container.add('myType', '모던')
console.log('Container.get(mytype) :>> ', Container.get('myType'))

function injectionDecorator (param: string) {
  return function (target: any, propertyName: string) {
    console.log('injectionDecorator target:>> ', target)
    console.log('injectionDecorator propertyName:>> ', propertyName)
    target[propertyName] = () => Container.get(param)
  }
}

class Car3 {
  private name:string;
  private price:number;
  @injectionDecorator('myType')
  private type!:Function;

  constructor (name:string, price:number) {
    this.name = name
    this.price = price
  }

  public toString () {
    return `${this.name}, ${this.price}, ${this.type()}`
  }
}

const myCar3 = new Car3('나쁜차', 50)
console.log('myCar3 :>> ', myCar3)
console.log('myCar3.toString() :>> ', myCar3.toString())
*/
