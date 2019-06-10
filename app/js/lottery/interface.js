import $ from "jquery";
// 将所有接口都放在Interface模块export出去，这样在别处想用直接import就可以使用接口了，方便复用和维护

class Interface {
  /**
   * [getOmit 获取遗漏数据]
   * @param  {string} issue [当前期号]
   * @return {[type]}       [description]
   */
  getOmit(issue) {
    let self = this;
    return new Promise((resolve, reject) => {
      // 箭头函数的this指向是： 箭头函数定义时的指向
      $.ajax({
        url: "/get/omit",
        data: {
          issue: issue
        },
        dataType: "json",
        success: function(res) {
          // 如下使用对象继承的方式保存数据： 好处有1.数据共享可复用  2.避免回调
          self.setOmit(res.data);
          resolve.call(self, res);
        },
        error: function(err) {
          reject.call(err);
        }
      });
    });
  }
  /**
   * [getOpenCode 获取开奖号码]
   * @param  {string} issue [期号]
   * @return {[type]}       [description]
   */
  getOpenCode(issue) {
    let self = this;
    return new Promise((resolve, rejet) => {
      $.ajax({
        url: "/get/opencode",
        data: {
          issue: issue
        },
        dataType: "json",
        success: function(res) {
          self.setOpenCode(res.data);
          resolve.call(self, res);
        },
        error: function(err) {
          reject.call(err);
        }
      });
    });
  }

  /**
   * [getState 获取当前状态]
   * @param  {string} issue [当前期号]
   * @return {[type]}       [description]
   */
  getState(issue) {
    let self = this;
    return new Promise((resolve, rejet) => {
      $.ajax({
        url: "/get/state",
        data: {
          issue: issue
        },
        dataType: "json",
        success: function(res) {
          resolve.call(self, res);
        },
        error: function(err) {
          reject.call(err);
        }
      });
    });
  }
}

export default Interface;
