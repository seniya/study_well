
// #1
let message1: string
// eslint-disable-next-line prefer-const
message1 = 'hellow world1'

console.log('#1 : ', message1)

// #2
const getMessage = () => 'Hello world2'
console.log('#2 : ', getMessage())

function hello () {
  console.log('World!')
}
hello()
