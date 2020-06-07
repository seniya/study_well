/*
// #1 Class Decorator
// 인자로 해당 Class의 constructor ()를 받는다.

class Person {
  @writable(true)
  private name = 'Mr.kim'

  private age:number

  constructor (_name: string, @printInfo _age:number) {
    this.name = _name
    this.age = _age
    console.log('constructor() in Person Class ')
    console.log('this.name :>> ', this.name)
    console.log('this.age :>> ', this.age)
  }

  // @editable(false)
  hello () {
    console.log('Hello')
  }
}

function hello (constructorFn: any) {
  console.log('이 함수가 실행됩니다. :>> ')
  console.log('constructorFn in hello: ', constructorFn)
}

function hello2 (constructorFn: any) {
  constructorFn.prototype.hello = function () {
    console.log('Hello :>> ')
  }
}

function editable (isEditable: boolean) {
  return function (target: any, propName: string, desc: PropertyDescriptor) {
    console.log('target :>> ', target)
    console.log('propName :>> ', propName)
    console.log('desc :>> ', desc)
    desc.writable = isEditable
  }
}

function writable (isWritable:boolean) {
  return function (target:any, propName:string): any {
    console.log(target)
    console.log(propName)
    return {
      writable: isWritable
    }
  }
}

function printInfo (target:any, methodName: string, paramIdx:number) {
  console.log('target :>> ', target)
  console.log('methodName :>> ', methodName)
  console.log('paramIdx :>> ', paramIdx)
}

const man1 = new Person('kim', 33)
// console.log('man1 :>> ', man1);
// (<any>man1).hello()

man1.hello()
*/
