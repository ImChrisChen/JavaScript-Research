'use strict';

var _desc, _value, _class;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** * Created by WebStorm. * User: chrischen * Date: 2020/7/13 * Time: 9:06 下午 */

// 装饰器实现
var Circle = function () {
  function Circle() {
    _classCallCheck(this, Circle);
  }

  _createClass(Circle, [{
    key: 'draw',
    value: function draw() {
      console.log('画一个圆');
    }
  }]);

  return Circle;
}();

function run(target, name, descriptor) {
  // Dectorator {} draw {
  //   value: [Function: draw],
  //   writable: true,
  //   enumerable: false,
  //   configurable: true
  // }
  console.log('target:', target, 'name:', name, 'descriptor:', descriptor);

  console.log('run');
}

var Dectorator = (_class = function () {
  function Dectorator(circle) {
    _classCallCheck(this, Dectorator);

    this.circle = circle;
  }

  _createClass(Dectorator, [{
    key: 'draw',
    value: function draw() {
      this.circle.draw();
      this.setBorder(this.circle);
    }
  }, {
    key: 'setBorder',
    value: function setBorder(circle) {
      console.log('设置线条');
    }
  }]);

  return Dectorator;
}(), (_applyDecoratedDescriptor(_class.prototype, 'draw', [run], Object.getOwnPropertyDescriptor(_class.prototype, 'draw'), _class.prototype)), _class);


var circle = new Circle();
var dectorator = new Dectorator(circle);

dectorator.draw();
