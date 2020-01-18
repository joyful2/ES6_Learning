{
  // Decorator修饰器(装饰器)： Decorator是一种修饰类的行为的函数： 1.Decorator是函数 2.是对类的修改 3.使用时babel需要transform-decorators-legacy插件
  let readonly = function(target, name, descriptor) {
    // 1.target:要修改的类本身 2.name：属性名称 3.descriptor：描述对象
    descriptor.writable = false;
    return descriptor;
  };

  class Test {
    @readonly
    time() {
      return '2017-03-11';
    }
  }

  let test = new Test();

  test.time = function() {
    console.log('reset time');
  };

  console.log(test.time());
}

{
  let typename = function(target, name, descriptor) {
    target.myname = 'hello';
  };

  @typename
  class Test {}

  console.log('类修饰符', Test.myname); //静态属性只能通过类本身访问，实例无法访问
  // 第三方库修饰器的js库：core-decorators; npm install core-decorators： 许多修饰器已实现，拿来直接用
}

{
  // 业务场景模拟： 使用Decorator装饰器提高代码可复用性和可维护性： 将埋点逻辑和业务逻辑解耦
  let Log = type => {
    return function(target, name, descriptor) {
      const src_method = descriptor.value; //descriptor.value获取原函数
      descriptor.value = (...arg) => {
        src_method.apply(target, arg);
        if (type === 'show') {
          // 广告展示的埋点： 记录广告展示次数之类的信息，此处省略
          console.log('广告展示的埋点');
        } else if (type === 'click') {
          // 广告点击的埋点： 记录广告点击次数之类的信息，此处省略
          console.log('广告点击的埋点');
        }
      };
    };
  };

  class Add {
    @Log('show')
    show() {
      console.log('广告展示的业务逻辑,此处省略');
    }

    @Log('click')
    click() {
      console.log('广告点击的业务逻辑,此处省略');
    }
  }
  let add = new Add();
  add.show();
  add.click();
}
