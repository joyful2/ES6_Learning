// import { start } from "repl";

{
  // genertaor基本定义: genrator是一种异步解决方案， 通过next,yield控制异步（返回Iterator），比Promise更高级。
  let tell = function*() {
    console.log(1);
    yield 'a';
    console.log(2);
    yield 'b';
    console.log(3);
    return 'c';
    console.log(4);
  };

  let k = tell();
  for (let val of k) {
    console.log('val:', val);
  }
  // iterator
  console.log(111, k.next());
  console.log(222, k.next());
  console.log(k.next());
  console.log(k.next());
}

{
  // 通过generator定义iterator： 因为generator返回的就是iterator

  let obj = {};
  obj[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
  };

  for (let value of obj) {
    console.log('value', value);
  }
}

{
  // 使用generator函数处理状态机：
  let state = function*() {
    while (1) {
      yield 'A';
      yield 'B';
      yield 'C';
    }
  };
  let status = state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}

{
  // async await就是genrator函数的语法糖，实质上是一样的
  let state = async function() {
    while (1) {
      await 'A';
      await 'B';
      await 'C';
    }
  };
  let status = state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}

{
  // 业务场景模拟： 抽奖，次数用完后不能再抽奖。即使用generator函数处理状态机
  const draw = count => {
    // 抽奖逻辑在此处省略
    console.log(`剩余抽奖${count}次`);
  };

  const residue = function*(count) {
    while (count > 0) {
      count--;
      yield draw(count);
    }
  };
  // 如下的count没有使用全局变量：因为全局变量会1.污染作用域 2.很容易被人修改
  let star = residue(5);
  const btn = document.creatElement('button');
  btn.id = 'start';
  btn.textContent = '抽奖';
  document.getElementById('start').addEventListener(
    'click',
    function() {
      star.next();
    },
    false
  );
}

{
  // 业务场景模拟： 使用generator实现长轮询： generator和Promise的结合
  const ajax = function*() {
    yield new Promise(function(resolve, reject) {
      // 模拟请求：
      setTimeout(() => {
        resolve({ Code: 1 });
      }, 200);
    });
  };
  let Pull = function() {
    let generator = ajax();
    let step = generator.next();
    console.log('step:', step);
    //  这里是step.value.then而不是step.then！
    step.value.then(function(data) {
      if (data.Code !== 0) {
        setTimeout(() => {
          // 2秒后再发送请求
          Pull();
        }, 2000);
      } else {
        console.log(d);
      }
    });
  };
  Pull();
}
