{
  let o = 1;
  let k = 2;
  let es5 = {
    o: o,
    k: k
  };
  let es6 = {
    o,
    k
  };
  console.log(es5, es6);

  // 属性的简洁表示法
  let es5_method = {
    hello: function() {
      console.log("hello");
    }
  };
  let es6_method = {
    hello() {
      console.log("hello");
    }
  };
  console.log(es5_method.hello(), es6_method.hello());
}

{
  // 属性表达式: 常用于属性是变量的情况
  let a = "b";
  let es5_obj = {
    a: "c",
    b: "c"
  };

  let es6_obj = {
    [a + "_1"]: "c"
  };

  console.log(es5_obj, es6_obj);
}

{
  // 新增API
  console.log("字符串", Object.is("abc", "abc"), "abc" === "abc");
  console.log("数组", Object.is([], []), [] === []);

  // Object.assign是浅拷贝： 1.只拷贝地址 2.只拷贝自身属性，其继承中不会拷贝
  console.log(
    "拷贝",
    Object.assign({ a: "a" }, { b: "b", c: { person: { name: "joe" } } })
  );

  let test = { k: 123, o: 456 };
  for (let [key, value] of Object.entries(test)) {
    console.log([key, value]);
  }
}

{
  // 扩展运算符
  let { a, b, ...c } = { a: "test", b: "kill", c: "ddd", d: "ccc" };
  // c = {
  //   c: "ddd",
  //   d: "ccc"
  // };
  console.log("c", c);
}
