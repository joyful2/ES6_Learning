{
  //  Iterator（遍历器）的作用有三个：1是为各种数据结构，提供一个统一的、简便的访问接口；2是使得数据结构的成员能够按某种次序排列；3是ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费。
  // 在ES6中，有些数据结构原生具备Iterator接口（比如数组），即不用任何处理，就可以被for...of循环遍历，有些就不行（比如对象）。原因在于，这些数据结构原生部署了Symbol.iterator属性（详见下文），另外一些数据结构没有。凡是部署了Symbol.iterator属性的数据结构，就称为部署了遍历器接口。调用这个接口，就会返回一个遍历器对象。
  //  在ES6中，有三类数据结构原生具备Iterator接口：数组、某些类似数组的对象、Set和Map结构。
  let arr = ["hello", "world"];
  let map = arr[Symbol.iterator]();
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
}

{
  let obj = {
    start: [1, 3, 2],
    end: [7, 9, 8],
    [Symbol.iterator]() {
      let self = this;
      let index = 0;
      let arr = self.start.concat(self.end);
      let len = arr.length;
      return {
        next() {
          if (index < len) {
            return {
              value: arr[index++],
              done: false
            };
          } else {
            return {
              value: arr[index++],
              done: true
            };
          }
        }
      };
    }
  };
  for (let key of obj) {
    console.log(key);
  }
}

{
  let arr = ["hello", "world"];
  for (let value of arr) {
    console.log("value", value);
  }
}
