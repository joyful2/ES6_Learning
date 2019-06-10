{
  // 基本定义和生成实例
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
  }
  let v_parent = new Parent('v');
  console.log('构造函数和实例', v_parent);
}

{
  // 继承:extends
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
  }

  class Child extends Parent {}

  console.log('继承', new Child());
}

{
  // 继承传递参数：super(props)
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
  }

  class Child extends Parent {
    constructor(name = 'child') {
      super(name); //1.super的参数和父类constructor的参数要一致 2.super在constructor首行
      this.type = 'child';
    }
  }

  console.log('继承传递参数', new Child('hello'));
}

{
  // getter,setter
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
    // 表示： longName属性的getter
    get longName() {
      return 'mk' + this.name;
    }
    // 表示： longName属性的setter
    set longName(value) {
      this.name = value;
    }
  }

  let v = new Parent();
  console.log('getter', v.longName);
  v.longName = 'hello';
  console.log('setter', v.longName);
}

{
  // 静态方法:通过类调用，而非通过实例调用的方法
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
    // 静态方法的定义:
    static tell() {
      console.log('tell');
    }
  }

  Parent.tell();
}

{
  // 静态属性：通过类调用，而非通过实例调用的方法
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }

    static tell() {
      console.log('tell');
    }
  }
  // 静态属性的定义:
  Parent.type = 'test';

  console.log('静态属性', Parent.type);
}
