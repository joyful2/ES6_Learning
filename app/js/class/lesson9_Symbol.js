{
  // 声明
  let a1 = Symbol();
  let a2 = Symbol();
  console.log(a1 === a2);
  let a3 = Symbol.for('a3');
  // let name = "joe";
  let a4 = Symbol.for('a3');
  console.log('a1 === a2', a1 === a2);
  console.log('a3===a4', a3 === a4);
  console.log('a3', a3);
  console.log('a4', a4);
}

{
  let a1 = Symbol.for('abc');
  let obj = {
    [a1]: '123',
    abc: 345,
    c: 456
  };
  console.log('obj', obj);

  for (let [key, value] of Object.entries(obj)) {
    console.log('let of', key, value);
  }

  Object.getOwnPropertySymbols(obj).forEach(function(item) {
    console.log(obj[item]);
  });
  // Reflect.ownKeys(obj)可以拿到所有属性，比Object.keys()强大
  Reflect.ownKeys(obj).forEach(function(item) {
    console.log('ownkeys', item, obj[item]);
  });
}
