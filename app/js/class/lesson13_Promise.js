{
  // 基本定义
  let ajax = function(callback) {
    console.log('执行');
    setTimeout(function() {
      callback && callback.call();
    }, 1000);
  };
  ajax(function() {
    console.log('timeout1');
  });
}

{
  let ajax = function() {
    console.log('执行2');
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve();
      }, 1000);
    });
  };

  ajax().then(function() {
    console.log('promise', 'timeout2');
  });
}

{
  let ajax = function() {
    console.log('执行1');
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve();
      }, 1000);
    });
  };

  ajax()
    .then(function() {
      return new Promise(function(resolve, reject) {
        console.log('执行2');
        setTimeout(function() {
          resolve();
        }, 2000);
      });
    })
    .then(function() {
      console.log('timeout3');
    });
}

{
  let ajax = function(num) {
    console.log('执行4');
    return new Promise(function(resolve, reject) {
      if (num > 5) {
        resolve();
      } else {
        throw new Error('出错了');
      }
    });
  };

  ajax(6)
    .then(function() {
      console.log('log', 6);
    })
    .catch(function(err) {
      // 当且仅当reject调用时执行
      console.log('catch', err);
    });

  ajax(3)
    .then(function() {
      console.log('log', 3);
    })
    .catch(function(err) {
      // 执行reject时的回调，只有调用reject才会执行！
      console.log('catch', err);
    });
}

{
  // 全部图片加载后再展示
  //   Promise.all: 内部所有Promise执行完才会执行Promise.all
  const LoadImg = src => {
    return new Promise((resolve, reject) => {
      const Img = document.createElement('image');
      Img.src = src;
      Img.onload = () => {
        resolve(Img);
      };
      Img.onerror = err => {
        reject(err);
      };
    });
  };

  const ShowImgList = imgList => {
    imgList.forEach(img => {
      document.body.append(img);
    });
  };

  const ShowImg = img => {
    const p = document.createElement('p');
    p.appendChild(img);
    document.body.appendChild(p);
  };

  Promise.all([
    LoadImg(src1),
    LoadImg(src2),
    LoadImg(src3),
    LoadImg(src4)
  ]).then(ShowImgList);

  // 有一张图片加载后就展示，只展示一张图片
  //   Promise.race： 内部有一个Promise执行完就会执行Promise.race

  Promise.race([
    LoadImg(src1),
    LoadImg(src2),
    LoadImg(src3),
    LoadImg(src4)
  ]).then(ShowImg);
}
