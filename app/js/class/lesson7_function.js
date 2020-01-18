{
  function test(x, y = 'world') {
    console.log('默认值', x, y);
  }
  test('hello');
  test('hello', 'kill');
}

{
  // 作用域问题：参数取值先在函数中找，再去外层作用域找
  let x = 'test';
  let a = 'test22';
  function test2(x, y = x, z = a) {
    console.log('作用域', x, y, z);
  }
  test2('kill');
}

{
  function test3(...arg) {
    console.log('arg-=-', Array.isArray(arg));

    for (let v of arg) {
      console.log('rest', v);
    }
  }
  test3(1, 2, 3, 4, 'a');

  function test34() {
    console.log('arguments', Array.isArray(arguments));
    for (let v of arguments) {
      console.log('arguments', v);
    }
  }
  test34('one', 'tow');
}

{
  console.log(...[1, 2, 4]);
  console.log('a', ...[1, 2, 4]);
}

{
  // 箭头函数的this指向是： 箭头函数定义时的指向

  let arrow = v => v * 2;
  let arrow2 = () => 5;
  console.log('arrow', arrow(3));
  console.log(arrow2());
}

{
  // 如果有函数的依赖和嵌套，要用如下的尾调用形式
  function tail(x) {
    console.log('tail', x);
  }
  function fx(x) {
    return tail(x);
  }
  fx(123);
}
