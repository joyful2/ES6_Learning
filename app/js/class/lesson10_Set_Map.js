{
  let list = new Set();
  list.add(5);
  list.add(7);

  console.log("size", list.size);
}

{
  let arr = [1, 2, 3, 4, 5,4,5];
  let list = new Set(arr);

  console.log("size", list.size);
}

{
  // set去重
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);

  console.log("list", list);

  let arr = [1, 2, 3, 1, "2"];
  let list2 = new Set(arr);

  console.log("unique", list2);
}

{
  let arr = ["add", "delete", "clear", "has"];
  let list = new Set(arr);

  console.log("has", list.has("add"));
  console.log("delete", list.delete("add"), list);
  list.clear();
  console.log("list", list);
}

{
  let arr = ["add", "delete", "clear", "has"];
  let list = new Set(arr);

  for (let key of list.keys()) {
    console.log("keys", key);
  }
  for (let value of list.values()) {
    console.log("value", value);
  }
  for (let [key, value] of list.entries()) {
    console.log("entries", key, value);
  }

  list.forEach(function(item) {
    console.log(item);
  });
}

{
  // 1.WeakSet的每一项只能是对象 2.存储的是对象的地址 3.不能遍历 4.没有size,clear（）等api
  let weakList = new WeakSet();

  let arg = {};

  weakList.add(arg);

  // weakList.add(2);

  console.log("weakList", weakList);
}

{
  let map = new Map();
  let arr = ["123"];

  map.set(arr, 456);

  console.log("map", map, map.get(arr));
}

{
  // 1.key可以是任意数据类型，比如对象
  let map = new Map([["a", 123], ["b", 456]]);
  console.log("map args", map);
  console.log("size", map.size);
  console.log("delete", map.delete("a"), map);
  console.log("clear", map.clear(), map);
}

{
  // 1.不能遍历 2.没有size,clear()等api
  let weakmap = new WeakMap();

  let o = {};
  weakmap.set(o, 123);
  console.log(weakmap.get(o));
}
