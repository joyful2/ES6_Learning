function test() {
  // for(let i=1;i<3;i++){
  // 块级作用域
  //   console.log(i);
  // }
  // console.log(i);
  let a = 1;
  // let a = 2;
}

function last() {
  const PI = 3.1415926;
  const k = {
    a: 1
  };
  k.b = 3;
  console.log(PI, k);
}

// test();
last();
