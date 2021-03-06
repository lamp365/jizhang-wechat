module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1654371344269, function(require, module, exports) {
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["scale"] = factory();
	else
		root["scale"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var mix = __webpack_require__(16);

var each = __webpack_require__(1);

var isObject = __webpack_require__(7);

var isNil = __webpack_require__(2);

var Scale =
/*#__PURE__*/
function () {
  var _proto = Scale.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'base';
    /**
     * ???????????????,??????????????????tick?????????????????????
     * @type {Function}
     */

    this.formatter = null;
    /**
     * ???????????????
     * @type {Array}
     */

    this.range = [0, 1];
    /**
     * ???????????????
     * @type {Array}
     */

    this.ticks = null;
    /**
     * ????????????????????????????????????
     * @type {Array}
     */

    this.values = [];
  };

  function Scale(cfg) {
    this._initDefaultCfg();

    mix(this, cfg);
    this.init();
  }
  /**
   * ???????????????
   * @protected
   */


  _proto.init = function init() {}
  /**
   * ??????????????????ticks,???????????????????????????
   *   - text: tick ?????????
   *   - value: ??????????????????????????????
   * <code>
   *   [
   *     {text: 0,value:0}
   *     {text: 1,value:0.2}
   *     {text: 2,value:0.4}
   *     {text: 3,value:0.6}
   *     {text: 4,value:0.8}
   *     {text: 5,value:1}
   *   ]
   * </code>
   * @param {Number} count ??????tick????????????????????????????????? 10
   * @return {Array} ?????? ticks ??????
   */
  ;

  _proto.getTicks = function getTicks() {
    var self = this;
    var ticks = self.ticks;
    var rst = [];
    each(ticks, function (tick) {
      var obj;

      if (isObject(tick)) {
        obj = tick;
      } else {
        obj = {
          text: self.getText(tick),
          tickValue: tick,
          value: self.scale(tick)
        };
      }

      rst.push(obj);
    });
    return rst;
  }
  /**
   * ???????????????????????????
   * @param  {*} value ???????????????
   * @param  {*} key ????????? key
   * @return {String} ??????????????????
   */
  ;

  _proto.getText = function getText(value, key) {
    var formatter = this.formatter;
    value = formatter ? formatter(value, key) : value;

    if (isNil(value) || !value.toString) {
      value = '';
    }

    return value.toString();
  }
  /**
   * ????????????????????????
   * @protected
   * @return {Number} ??????????????????
   */
  ;

  _proto.rangeMin = function rangeMin() {
    return this.range[0];
  }
  /**
   * ????????????????????????
   * @protected
   * @return {Number} ??????????????????
   */
  ;

  _proto.rangeMax = function rangeMax() {
    var range = this.range;
    return range[range.length - 1];
  }
  /**
   * ?????????????????????????????????????????????
   * @param  {Number} value ?????????????????????
   * @return {*} ??????????????????
   */
  ;

  _proto.invert = function invert(value) {
    return value;
  }
  /**
   * ??????????????????????????????????????????????????????????????????????????????????????????
   * @param  {*} value ????????????
   * @return {Number} ????????????
   */
  ;

  _proto.translate = function translate(value) {
    return value;
  }
  /**
   * ??????????????????
   * @param  {*} value ?????????
   * @return {Number} ???????????????????????????????????????????????????[0,1]
   */
  ;

  _proto.scale = function scale(value) {
    return value;
  }
  /**
   * ??????????????????scale,???????????????scale?????????????????????????????????
   * @return {Scale} ???????????????
   */
  ;

  _proto.clone = function clone() {
    var self = this;
    var constr = self.constructor;
    var cfg = {};
    each(self, function (v, k) {
      cfg[k] = self[k];
    });
    return new constr(cfg);
  }
  /**
   * ???????????????????????????
   * @param  {Object} info ????????????
   * @chainable
   * @return {Scale} ?????????????????????
   */
  ;

  _proto.change = function change(info) {
    this.ticks = null;
    mix(this, info);
    this.init();
    return this;
  };

  return Scale;
}();

module.exports = Scale;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);

var isArray = __webpack_require__(17);

var each = function each(elements, func) {
  if (!elements) {
    return;
  }

  var rst = void 0;

  if (isArray(elements)) {
    for (var i = 0, len = elements.length; i < len; i++) {
      rst = func(elements[i], i);

      if (rst === false) {
        break;
      }
    }
  } else if (isObject(elements)) {
    for (var k in elements) {
      if (elements.hasOwnProperty(k)) {
        rst = func(elements[k], k);

        if (rst === false) {
          break;
        }
      }
    }
  }
};

module.exports = each;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// isFinite,
var isNil = function isNil(value) {
  /**
   * isNil(null) => true
   * isNil() => true
   */
  return value === null || value === undefined;
};

module.exports = isNil;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var toString = {}.toString;

var isType = function isType(value, type) {
  return toString.call(value) === '[object ' + type + ']';
};

module.exports = isType;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * @fileOverview The measurement of linear data scale function
 * @author dxq613@gmail.com
 */
var isNil = __webpack_require__(2);

var each = __webpack_require__(1);

var Base = __webpack_require__(0);

var numberAuto = __webpack_require__(18);
/**
 * ????????????
 * @class Scale.Linear
 */


var Linear =
/*#__PURE__*/
function (_Base) {
  _inheritsLoose(Linear, _Base);

  function Linear() {
    return _Base.apply(this, arguments) || this;
  }

  var _proto = Linear.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    _Base.prototype._initDefaultCfg.call(this);

    var self = this;
    self.type = 'linear';
    self.isLinear = true;
    /**
     * ?????????????????????????????????min,max???ticks?????????????????????????????????????????????ticks??????min,max???????????????(min,max)???????????????ticks
     * @type {Boolean}
     * @default false
     */

    self.nice = false;
    /**
     * min value of the scale
     * @type {Number}
     * @default null
     */

    self.min = null;
    /**
     * min value limitted of the scale
     * @type {Number}
     * @default null
     */

    self.minLimit = null;
    /**
     * max value of the scale
     * @type {Number}
     * @default null
     */

    self.max = null;
    /**
     * max value limitted of the scale
     * @type {Number}
     * @default null
     */

    self.maxLimit = null;
    /**
     * ??????????????????????????????
     * @type {Number}
     * @default null
     */

    self.tickCount = null;
    /**
     * ????????????????????????????????????????????????????????????
     * @type {Number}
     * @default null
     */

    self.tickInterval = null;
    /**
     * ??????????????????????????????????????????????????????????????????
     * @type {Number}
     * @default null
     */

    self.minTickInterval = null;
    /**
     * ???????????????????????????????????????
     * @type {Array}
     */

    self.snapArray = null;
  }
  /**
   * @protected
   * @override
   */
  ;

  _proto.init = function init() {
    var self = this;

    if (!self.ticks) {
      self.min = self.translate(self.min);
      self.max = self.translate(self.max);
      self.initTicks();
    } else {
      var ticks = self.ticks;
      var firstValue = self.translate(ticks[0]);
      var lastValue = self.translate(ticks[ticks.length - 1]);

      if (isNil(self.min) || self.min > firstValue) {
        self.min = firstValue;
      }

      if (isNil(self.max) || self.max < lastValue) {
        self.max = lastValue;
      }
    }
  }
  /**
   * ???????????????
   * @protected
   * @return {Array} ????????????????????????
   */
  ;

  _proto.calculateTicks = function calculateTicks() {
    var min = this.min,
        max = this.max,
        minLimit = this.minLimit,
        maxLimit = this.maxLimit,
        tickCount = this.tickCount,
        tickInterval = this.tickInterval,
        minTickInterval = this.minTickInterval,
        snapArray = this.snapArray;

    if (tickCount === 1) {
      throw new Error('linear scale\'tickCount should not be 1');
    }

    if (max < min) {
      throw new Error("max: " + max + " should not be less than min: " + min);
    }

    var tmp = numberAuto({
      min: min,
      max: max,
      minLimit: minLimit,
      maxLimit: maxLimit,
      minCount: tickCount,
      maxCount: tickCount,
      interval: tickInterval,
      minTickInterval: minTickInterval,
      snapArray: snapArray
    });
    return tmp.ticks;
  } // ?????????ticks
  ;

  _proto.initTicks = function initTicks() {
    var self = this;
    var calTicks = self.calculateTicks();

    if (self.nice) {
      // ???????????????????????????tick
      self.ticks = calTicks;
      self.min = calTicks[0];
      self.max = calTicks[calTicks.length - 1];
    } else {
      var ticks = [];
      each(calTicks, function (tick) {
        if (tick >= self.min && tick <= self.max) {
          ticks.push(tick);
        }
      }); // ?????? ticks ??????????????????????????????????????????

      if (!ticks.length) {
        ticks.push(self.min);
        ticks.push(self.max);
      }

      self.ticks = ticks;
    }
  }
  /**
   * @override
   */
  ;

  _proto.scale = function scale(value) {
    if (isNil(value)) {
      return NaN;
    }

    var max = this.max;
    var min = this.min;

    if (max === min) {
      return 0;
    }

    var percent = (value - min) / (max - min);
    var rangeMin = this.rangeMin();
    var rangeMax = this.rangeMax();
    return rangeMin + percent * (rangeMax - rangeMin);
  }
  /**
   * @override
   */
  ;

  _proto.invert = function invert(value) {
    var percent = (value - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
    return this.min + percent * (this.max - this.min);
  };

  return Linear;
}(Base);

Base.Linear = Linear;
module.exports = Linear;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * ??????????????????
 * @return {Boolean} ????????????
 */
var isType = __webpack_require__(3);

var isNumber = function isNumber(value) {
  return isType(value, 'Number');
};

module.exports = isNumber;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var isType = __webpack_require__(3);

var isString = function isString(str) {
  return isType(str, 'String');
};

module.exports = isString;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var isObject = function isObject(value) {
  /**
   * isObject({}) => true
   * isObject([1, 2, 3]) => true
   * isObject(Function) => true
   * isObject(null) => false
   */
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value !== null && type === 'object' || type === 'function';
};

module.exports = isObject;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * @fileOverview ????????????
 * @author dxq613@gmail.com
 */
// ??????????????????????????? 10 ?????????????????????????????????
var DECIMAL_LENGTH = 12; // ????????????

function getFactor(v) {
  var factor = 1;

  if (v === Infinity || v === -Infinity) {
    throw new Error('Not support Infinity!');
  }

  if (v < 1) {
    var count = 0;

    while (v < 1) {
      factor = factor / 10;
      v = v * 10;
      count++;
    } // ???????????????????????????


    if (factor.toString().length > DECIMAL_LENGTH) {
      factor = parseFloat(factor.toFixed(count));
    }
  } else {
    while (v > 10) {
      factor = factor * 10;
      v = v / 10;
    }
  }

  return factor;
} // ?????????????????????


function arrayFloor(values, value) {
  var length = values.length;

  if (length === 0) {
    return NaN;
  }

  var pre = values[0];

  if (value < values[0]) {
    return NaN;
  }

  if (value >= values[length - 1]) {
    return values[length - 1];
  }

  for (var i = 1; i < values.length; i++) {
    if (value < values[i]) {
      break;
    }

    pre = values[i];
  }

  return pre;
} // ???????????????????????????


function arrayCeiling(values, value) {
  var length = values.length;

  if (length === 0) {
    return NaN;
  } // var pre = values[0];


  var rst;

  if (value > values[length - 1]) {
    return NaN;
  }

  if (value < values[0]) {
    return values[0];
  }

  for (var i = 1; i < values.length; i++) {
    if (value <= values[i]) {
      rst = values[i];
      break;
    }
  }

  return rst;
}

var Util = {
  // ?????????????????????
  snapFactorTo: function snapFactorTo(v, arr, snapType) {
    // ?????? v = -512,isFloor = true
    if (isNaN(v)) {
      return NaN;
    }

    var factor = 1; // ????????????

    if (v !== 0) {
      if (v < 0) {
        factor = -1;
      }

      v = v * factor; // v = 512

      var tmpFactor = getFactor(v);
      factor = factor * tmpFactor; // factor = -100

      v = v / tmpFactor; // v = 5.12
    }

    if (snapType === 'floor') {
      v = Util.snapFloor(arr, v); // v = 5
    } else if (snapType === 'ceil') {
      v = Util.snapCeiling(arr, v); // v = 6
    } else {
      v = Util.snapTo(arr, v); // ???????????? 5
    }

    var rst = parseFloat((v * factor).toPrecision(DECIMAL_LENGTH)); // ??????????????????????????????????????????????????????
    // ??????????????????????????????????????????????????????

    if (Math.abs(factor) < 1 && rst.toString().length > DECIMAL_LENGTH) {
      var decimalVal = parseInt(1 / factor);
      var symbol = factor > 0 ? 1 : -1;
      rst = v / decimalVal * symbol;
    }

    return rst;
  },
  // ?????????????????????
  snapMultiple: function snapMultiple(v, base, snapType) {
    var div;

    if (snapType === 'ceil') {
      div = Math.ceil(v / base);
    } else if (snapType === 'floor') {
      div = Math.floor(v / base);
    } else {
      div = Math.round(v / base);
    }

    return div * base;
  },

  /**
   * ???????????????????????????????????????
   * @param  {Array} values   ????????????
   * @param  {Number} value   ??????
   * @return {Number} ????????????
   */
  snapTo: function snapTo(values, value) {
    // ????????????values???????????????
    var floorVal = arrayFloor(values, value);
    var ceilingVal = arrayCeiling(values, value);

    if (isNaN(floorVal) || isNaN(ceilingVal)) {
      if (values[0] >= value) {
        return values[0];
      }

      var last = values[values.length - 1];

      if (last <= value) {
        return last;
      }
    }

    if (Math.abs(value - floorVal) < Math.abs(ceilingVal - value)) {
      return floorVal;
    }

    return ceilingVal;
  },

  /**
   * ?????????????????????????????????????????????
   * @param  {Array} values   ????????????
   * @param  {Number} value   ??????
   * @return {Number} ??????????????????
   */
  snapFloor: function snapFloor(values, value) {
    // ????????????values???????????????
    return arrayFloor(values, value);
  },

  /**
   * ?????????????????????????????????????????????
   * @param  {Array} values   ????????????
   * @param  {Number} value   ??????
   * @return {Number} ??????????????????
   */
  snapCeiling: function snapCeiling(values, value) {
    // ????????????values???????????????
    return arrayCeiling(values, value);
  },
  fixedBase: function fixedBase(v, base) {
    var str = base.toString();
    var index = str.indexOf('.');

    if (index === -1) {
      return Math.round(v);
    }

    var length = str.substr(index + 1).length;

    if (length > 20) {
      length = 20;
    }

    return parseFloat(v.toFixed(length));
  }
};
module.exports = Util;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Base = __webpack_require__(0);

var catAuto = __webpack_require__(10);

var each = __webpack_require__(1);

var isNumber = __webpack_require__(5);

var isString = __webpack_require__(6);

var Category =
/*#__PURE__*/
function (_Base) {
  _inheritsLoose(Category, _Base);

  function Category() {
    return _Base.apply(this, arguments) || this;
  }

  var _proto = Category.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    _Base.prototype._initDefaultCfg.call(this);

    this.type = 'cat';
    /**
     * ??????????????????
     * @type {Boolean}
     */

    this.isCategory = true;
    this.isRounding = true; // ????????????????????????
  }
  /**
   * @override
   */
  ;

  _proto.init = function init() {
    var self = this;
    var values = self.values;
    var tickCount = self.tickCount;
    each(values, function (v, i) {
      values[i] = v.toString();
    });

    if (!self.ticks) {
      var ticks = values;

      if (tickCount) {
        var temp = catAuto({
          maxCount: tickCount,
          data: values,
          isRounding: self.isRounding
        });
        ticks = temp.ticks;
      }

      this.ticks = ticks;
    }
  }
  /**
   * @override
   */
  ;

  _proto.getText = function getText(value) {
    if (this.values.indexOf(value) === -1 && isNumber(value)) {
      value = this.values[Math.round(value)];
    }

    return _Base.prototype.getText.call(this, value);
  }
  /**
   * @override
   */
  ;

  _proto.translate = function translate(value) {
    var index = this.values.indexOf(value);

    if (index === -1 && isNumber(value)) {
      index = value;
    } else if (index === -1) {
      index = NaN;
    }

    return index;
  }
  /**
   * @override
   */
  ;

  _proto.scale = function scale(value) {
    var rangeMin = this.rangeMin();
    var rangeMax = this.rangeMax();
    var percent;

    if (isString(value) || this.values.indexOf(value) !== -1) {
      value = this.translate(value);
    }

    if (this.values.length > 1) {
      percent = value / (this.values.length - 1);
    } else {
      percent = value;
    }

    return rangeMin + percent * (rangeMax - rangeMin);
  }
  /**
   * @override
   */
  ;

  _proto.invert = function invert(value) {
    if (isString(value)) {
      // ????????????????????????
      return value;
    }

    var min = this.rangeMin();
    var max = this.rangeMax(); // ????????? ?????????

    if (value < min) {
      value = min;
    }

    if (value > max) {
      value = max;
    }

    var percent = (value - min) / (max - min);
    var index = Math.round(percent * (this.values.length - 1)) % this.values.length;
    index = index || 0;
    return this.values[index];
  };

  return Category;
}(Base);

Base.Cat = Category;
module.exports = Category;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview ???????????????????????????
 * @author dxq613@gmail.com
 */
var each = __webpack_require__(1);

var MAX_COUNT = 8;
var SUB_COUNT = 4; // ????????????????????????

function getSimpleArray(data) {
  var arr = [];
  each(data, function (sub) {
    arr = arr.concat(sub);
  });
  return arr;
}

function getGreatestFactor(count, number) {
  var i;

  for (i = number; i > 0; i--) {
    if (count % i === 0) {
      break;
    }
  } // ?????????????????????????????????????????????


  if (i === 1) {
    for (i = number; i > 0; i--) {
      if ((count - 1) % i === 0) {
        break;
      }
    }
  }

  return i;
}

module.exports = function (info) {
  var rst = {};
  var ticks = [];
  var isRounding = info.isRounding;
  var categories = getSimpleArray(info.data);
  var length = categories.length;
  var maxCount = info.maxCount || MAX_COUNT;
  var tickCount;

  if (isRounding) {
    // ????????????
    tickCount = getGreatestFactor(length - 1, maxCount - 1) + 1; // ?????????????????????????????????????????????????????????????????? maxCount

    if (tickCount === 2) {
      tickCount = maxCount;
    } else if (tickCount < maxCount - SUB_COUNT) {
      tickCount = maxCount - SUB_COUNT;
    }
  } else {
    tickCount = maxCount;
  }

  if (!isRounding && length <= tickCount + tickCount / 2) {
    ticks = [].concat(categories);
  } else {
    var step = parseInt(length / (tickCount - 1), 10);
    var groups = categories.map(function (e, i) {
      return i % step === 0 ? categories.slice(i, i + step) : null;
    }).filter(function (e) {
      return e;
    });

    for (var i = 1, groupLen = groups.length; i < groupLen && (isRounding ? i * step < length - step : i < tickCount - 1); i++) {
      ticks.push(groups[i][0]);
    }

    if (categories.length) {
      ticks.unshift(categories[0]);
      var last = categories[length - 1];

      if (ticks.indexOf(last) === -1) {
        ticks.push(last);
      }
    }
  }

  rst.categories = categories;
  rst.ticks = ticks;
  return rst;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function (main) {
  
  /**
   * Parse or format dates
   * @class fecha
   */

  var fecha = {};
  var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
  var twoDigits = /\d\d?/;
  var threeDigits = /\d{3}/;
  var fourDigits = /\d{4}/;
  var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
  var literal = /\[([^]*?)\]/gm;

  var noop = function () {};

  function shorten(arr, sLen) {
    var newArr = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      newArr.push(arr[i].substr(0, sLen));
    }

    return newArr;
  }

  function monthUpdate(arrName) {
    return function (d, v, i18n) {
      var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());

      if (~index) {
        d.month = index;
      }
    };
  }

  function pad(val, len) {
    val = String(val);
    len = len || 2;

    while (val.length < len) {
      val = '0' + val;
    }

    return val;
  }

  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var monthNamesShort = shorten(monthNames, 3);
  var dayNamesShort = shorten(dayNames, 3);
  fecha.i18n = {
    dayNamesShort: dayNamesShort,
    dayNames: dayNames,
    monthNamesShort: monthNamesShort,
    monthNames: monthNames,
    amPm: ['am', 'pm'],
    DoFn: function DoFn(D) {
      return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
    }
  };
  var formatFlags = {
    D: function (dateObj) {
      return dateObj.getDate();
    },
    DD: function (dateObj) {
      return pad(dateObj.getDate());
    },
    Do: function (dateObj, i18n) {
      return i18n.DoFn(dateObj.getDate());
    },
    d: function (dateObj) {
      return dateObj.getDay();
    },
    dd: function (dateObj) {
      return pad(dateObj.getDay());
    },
    ddd: function (dateObj, i18n) {
      return i18n.dayNamesShort[dateObj.getDay()];
    },
    dddd: function (dateObj, i18n) {
      return i18n.dayNames[dateObj.getDay()];
    },
    M: function (dateObj) {
      return dateObj.getMonth() + 1;
    },
    MM: function (dateObj) {
      return pad(dateObj.getMonth() + 1);
    },
    MMM: function (dateObj, i18n) {
      return i18n.monthNamesShort[dateObj.getMonth()];
    },
    MMMM: function (dateObj, i18n) {
      return i18n.monthNames[dateObj.getMonth()];
    },
    YY: function (dateObj) {
      return String(dateObj.getFullYear()).substr(2);
    },
    YYYY: function (dateObj) {
      return pad(dateObj.getFullYear(), 4);
    },
    h: function (dateObj) {
      return dateObj.getHours() % 12 || 12;
    },
    hh: function (dateObj) {
      return pad(dateObj.getHours() % 12 || 12);
    },
    H: function (dateObj) {
      return dateObj.getHours();
    },
    HH: function (dateObj) {
      return pad(dateObj.getHours());
    },
    m: function (dateObj) {
      return dateObj.getMinutes();
    },
    mm: function (dateObj) {
      return pad(dateObj.getMinutes());
    },
    s: function (dateObj) {
      return dateObj.getSeconds();
    },
    ss: function (dateObj) {
      return pad(dateObj.getSeconds());
    },
    S: function (dateObj) {
      return Math.round(dateObj.getMilliseconds() / 100);
    },
    SS: function (dateObj) {
      return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
    },
    SSS: function (dateObj) {
      return pad(dateObj.getMilliseconds(), 3);
    },
    a: function (dateObj, i18n) {
      return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
    },
    A: function (dateObj, i18n) {
      return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
    },
    ZZ: function (dateObj) {
      var o = dateObj.getTimezoneOffset();
      return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
    }
  };
  var parseFlags = {
    D: [twoDigits, function (d, v) {
      d.day = v;
    }],
    Do: [new RegExp(twoDigits.source + word.source), function (d, v) {
      d.day = parseInt(v, 10);
    }],
    M: [twoDigits, function (d, v) {
      d.month = v - 1;
    }],
    YY: [twoDigits, function (d, v) {
      var da = new Date(),
          cent = +('' + da.getFullYear()).substr(0, 2);
      d.year = '' + (v > 68 ? cent - 1 : cent) + v;
    }],
    h: [twoDigits, function (d, v) {
      d.hour = v;
    }],
    m: [twoDigits, function (d, v) {
      d.minute = v;
    }],
    s: [twoDigits, function (d, v) {
      d.second = v;
    }],
    YYYY: [fourDigits, function (d, v) {
      d.year = v;
    }],
    S: [/\d/, function (d, v) {
      d.millisecond = v * 100;
    }],
    SS: [/\d{2}/, function (d, v) {
      d.millisecond = v * 10;
    }],
    SSS: [threeDigits, function (d, v) {
      d.millisecond = v;
    }],
    d: [twoDigits, noop],
    ddd: [word, noop],
    MMM: [word, monthUpdate('monthNamesShort')],
    MMMM: [word, monthUpdate('monthNames')],
    a: [word, function (d, v, i18n) {
      var val = v.toLowerCase();

      if (val === i18n.amPm[0]) {
        d.isPm = false;
      } else if (val === i18n.amPm[1]) {
        d.isPm = true;
      }
    }],
    ZZ: [/([\+\-]\d\d:?\d\d|Z)/, function (d, v) {
      if (v === 'Z') v = '+00:00';
      var parts = (v + '').match(/([\+\-]|\d\d)/gi),
          minutes;

      if (parts) {
        minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
        d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
      }
    }]
  };
  parseFlags.dd = parseFlags.d;
  parseFlags.dddd = parseFlags.ddd;
  parseFlags.DD = parseFlags.D;
  parseFlags.mm = parseFlags.m;
  parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
  parseFlags.MM = parseFlags.M;
  parseFlags.ss = parseFlags.s;
  parseFlags.A = parseFlags.a; // Some common format strings

  fecha.masks = {
    default: 'ddd MMM DD YYYY HH:mm:ss',
    shortDate: 'M/D/YY',
    mediumDate: 'MMM D, YYYY',
    longDate: 'MMMM D, YYYY',
    fullDate: 'dddd, MMMM D, YYYY',
    shortTime: 'HH:mm',
    mediumTime: 'HH:mm:ss',
    longTime: 'HH:mm:ss.SSS'
  };
  /***
   * Format a date
   * @method format
   * @param {Date|number} dateObj
   * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
   */

  fecha.format = function (dateObj, mask, i18nSettings) {
    var i18n = i18nSettings || fecha.i18n;

    if (typeof dateObj === 'number') {
      dateObj = new Date(dateObj);
    }

    if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
      throw new Error('Invalid Date in fecha.format');
    }

    mask = fecha.masks[mask] || mask || fecha.masks['default'];
    var literals = []; // Make literals inactive by replacing them with ??

    mask = mask.replace(literal, function ($0, $1) {
      literals.push($1);
      return '??';
    }); // Apply formatting rules

    mask = mask.replace(token, function ($0) {
      return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
    }); // Inline literal values back into the formatted value

    return mask.replace(/\?\?/g, function () {
      return literals.shift();
    });
  };
  /**
   * Parse a date string into an object, changes - into /
   * @method parse
   * @param {string} dateStr Date string
   * @param {string} format Date parse format
   * @returns {Date|boolean}
   */


  fecha.parse = function (dateStr, format, i18nSettings) {
    var i18n = i18nSettings || fecha.i18n;

    if (typeof format !== 'string') {
      throw new Error('Invalid format in fecha.parse');
    }

    format = fecha.masks[format] || format; // Avoid regular expression denial of service, fail early for really long strings
    // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS

    if (dateStr.length > 1000) {
      return false;
    }

    var isValid = true;
    var dateInfo = {};
    format.replace(token, function ($0) {
      if (parseFlags[$0]) {
        var info = parseFlags[$0];
        var index = dateStr.search(info[0]);

        if (!~index) {
          isValid = false;
        } else {
          dateStr.replace(info[0], function (result) {
            info[1](dateInfo, result, i18n);
            dateStr = dateStr.substr(index + result.length);
            return result;
          });
        }
      }

      return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
    });

    if (!isValid) {
      return false;
    }

    var today = new Date();

    if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
      dateInfo.hour = +dateInfo.hour + 12;
    } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
      dateInfo.hour = 0;
    }

    var date;

    if (dateInfo.timezoneOffset != null) {
      dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
      date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
    } else {
      date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
    }

    return date;
  };
  /* istanbul ignore next */


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = fecha;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return fecha;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    main.fecha = fecha;
  }
})(this);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview ?????????????????????util??????
 * @author dxq613@gmail.com
 */
var isString = __webpack_require__(6);

var isDate = __webpack_require__(22);

module.exports = {
  toTimeStamp: function toTimeStamp(value) {
    if (isString(value)) {
      if (value.indexOf('T') > 0) {
        value = new Date(value).getTime();
      } else {
        value = new Date(value.replace(/-/ig, '/')).getTime();
      }
    }

    if (isDate(value)) {
      value = value.getTime();
    }

    return value;
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview Scale entry, used to reference all the scales
 * @author dxq613@gmail.com
 */
var lowerFirst = __webpack_require__(14);

var Base = __webpack_require__(0);

Base.Linear = __webpack_require__(4);
Base.Identity = __webpack_require__(19);
Base.Cat = __webpack_require__(9);
Base.Time = __webpack_require__(20);
Base.TimeCat = __webpack_require__(23);
Base.Log = __webpack_require__(24);
Base.Pow = __webpack_require__(25);

var _loop = function _loop(k) {
  if (Base.hasOwnProperty(k)) {
    var methodName = lowerFirst(k);

    Base[methodName] = function (cfg) {
      return new Base[k](cfg);
    };
  }
};

for (var k in Base) {
  _loop(k);
}

var CAT_ARR = ['cat', 'timeCat'];

Base.isCategory = function (type) {
  return CAT_ARR.indexOf(type) >= 0;
};

module.exports = Base;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(15);

var lowerFirst = function lowerFirst(value) {
  var str = toString(value);
  return str.charAt(0).toLowerCase() + str.substring(1);
};

module.exports = lowerFirst;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isNil = __webpack_require__(2);

function toString(value) {
  if (isNil(value)) return '';
  return value.toString();
}

module.exports = toString;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _mix(dist, obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && key !== 'constructor' && obj[key] !== undefined) {
      dist[key] = obj[key];
    }
  }
}

var mix = function mix(dist, src1, src2, src3) {
  if (src1) _mix(dist, src1);
  if (src2) _mix(dist, src2);
  if (src3) _mix(dist, src3);
  return dist;
};

module.exports = mix;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isType = __webpack_require__(3);

var isArray = Array.isArray ? Array.isArray : function (value) {
  return isType(value, 'Array');
};
module.exports = isArray;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview ???????????????????????????
 * @author dxq613@gmail.com
 */
var isNil = __webpack_require__(2);

var isNumber = __webpack_require__(5);

var AutoUtil = __webpack_require__(8);

var MIN_COUNT = 5;
var MAX_COUNT = 7;
var SNAP_COUNT_ARRAY = [0, 1, 1.2, 1.5, 1.6, 2, 2.2, 2.4, 2.5, 3, 4, 5, 6, 7.5, 8, 10];
var SNAP_ARRAY = [0, 1, 2, 4, 5, 10];

module.exports = function (info) {
  var min = info.min;
  var max = info.max;
  var interval = info.interval;
  var minTickInterval = info.minTickInterval;
  var ticks = [];
  var minCount = info.minCount || MIN_COUNT;
  var maxCount = info.maxCount || MAX_COUNT;
  var isFixedCount = minCount === maxCount; // ????????????????????????

  var minLimit = isNil(info.minLimit) ? -Infinity : info.minLimit; // ??????????????????

  var maxLimit = isNil(info.maxLimit) ? Infinity : info.maxLimit; // ???????????????

  var avgCount = (minCount + maxCount) / 2;
  var count = avgCount; // ???????????????????????????

  var snapArray = info.snapArray ? info.snapArray : isFixedCount ? SNAP_COUNT_ARRAY : SNAP_ARRAY; // ???????????????????????????????????????????????????????????????????????????????????????????????????interval ??????????????????

  if (min === minLimit && max === maxLimit && isFixedCount) {
    interval = (max - min) / (count - 1);
  }

  if (isNil(min)) {
    min = 0;
  }

  if (isNil(max)) {
    max = 0;
  }

  if (max === min) {
    if (min === 0) {
      max = 1;
    } else {
      if (min > 0) {
        min = 0;
      } else {
        max = 0;
      }
    }

    if (max - min < 5 && !interval && max - min >= 1) {
      interval = 1;
    }
  }

  if (isNil(interval)) {
    // ????????????
    var temp = (max - min) / (avgCount - 1);
    interval = AutoUtil.snapFactorTo(temp, snapArray, 'ceil');

    if (maxCount !== minCount) {
      count = parseInt((max - min) / interval, 10);

      if (count > maxCount) {
        count = maxCount;
      }

      if (count < minCount) {
        count = minCount;
      } // ?????????tick?????????????????????tick??????


      interval = AutoUtil.snapFactorTo((max - min) / (count - 1), snapArray, 'floor');
    }
  } // interval should not be less than minTickInterval


  if (isNumber(minTickInterval) && interval < minTickInterval) {
    interval = minTickInterval;
  }

  if (info.interval || maxCount !== minCount) {
    // ?????? max ??? min
    max = Math.min(AutoUtil.snapMultiple(max, interval, 'ceil'), maxLimit); // ????????????

    min = Math.max(AutoUtil.snapMultiple(min, interval, 'floor'), minLimit); // ????????????

    count = Math.round((max - min) / interval);
    min = AutoUtil.fixedBase(min, interval);
    max = AutoUtil.fixedBase(max, interval);
  } else {
    avgCount = parseInt(avgCount, 10); // ??????

    var avg = (max + min) / 2;
    var avgTick = AutoUtil.snapMultiple(avg, interval, 'ceil');
    var sideCount = Math.floor((avgCount - 2) / 2);
    var maxTick = avgTick + sideCount * interval;
    var minTick;

    if (avgCount % 2 === 0) {
      minTick = avgTick - sideCount * interval;
    } else {
      minTick = avgTick - (sideCount + 1) * interval;
    }

    while (maxTick < max) {
      // ???????????????????????????????????? maxTick ???????????????????????? max
      maxTick = AutoUtil.fixedBase(maxTick + interval, interval);
    }

    while (minTick > min) {
      // ???????????????????????????????????? minTick ???????????????????????? min
      minTick = AutoUtil.fixedBase(minTick - interval, interval); // ?????????????????????????????????
    }

    max = maxTick;
    min = minTick;
  }

  max = Math.min(max, maxLimit);
  min = Math.max(min, minLimit);
  ticks.push(min);

  for (var i = 1; i < count; i++) {
    var tickValue = AutoUtil.fixedBase(interval * i + min, interval);

    if (tickValue < max) {
      ticks.push(tickValue);
    }
  }

  if (ticks[ticks.length - 1] < max) {
    ticks.push(max);
  }

  return {
    min: min,
    max: max,
    interval: interval,
    count: count,
    ticks: ticks
  };
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Base = __webpack_require__(0);

var isNumber = __webpack_require__(5);

var Identity =
/*#__PURE__*/
function (_Base) {
  _inheritsLoose(Identity, _Base);

  function Identity() {
    return _Base.apply(this, arguments) || this;
  }

  var _proto = Identity.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    _Base.prototype._initDefaultCfg.call(this);

    this.isIdentity = true;
    this.type = 'identity';
    /**
     * ?????????
     * @type {*}
     */

    this.value = null;
  }
  /**
   * @override
   */
  ;

  _proto.getText = function getText() {
    return this.value.toString();
  }
  /**
   * @override
   */
  ;

  _proto.scale = function scale(value) {
    if (this.value !== value && isNumber(value)) {
      return value;
    }

    return this.range[0];
  }
  /**
   * @override
   */
  ;

  _proto.invert = function invert() {
    return this.value;
  };

  return Identity;
}(Base);

Base.Identity = Identity;
module.exports = Identity;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * @fileOverview The measurement of linear data scale function
 * @author dxq613@gmail.com
 */
var fecha = __webpack_require__(11);

var each = __webpack_require__(1);

var isNil = __webpack_require__(2);

var isString = __webpack_require__(6);

var Base = __webpack_require__(0);

var Linear = __webpack_require__(4);

var timeAuto = __webpack_require__(21);

var TimeUtil = __webpack_require__(12);
/**
 * ???????????????????????????
 * @class Scale.Time
 */


var Time =
/*#__PURE__*/
function (_Linear) {
  _inheritsLoose(Time, _Linear);

  function Time() {
    return _Linear.apply(this, arguments) || this;
  }

  var _proto = Time.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    _Linear.prototype._initDefaultCfg.call(this);

    this.type = 'time';
    this.mask = 'YYYY-MM-DD';
  }
  /**
   * @override
   */
  ;

  _proto.init = function init() {
    var self = this;
    var values = self.values;

    if (values && values.length) {
      // ???????????????????????????
      var timeStamps = [];
      var min = Infinity; // ?????????

      var secondMin = min; // ?????????

      var max = 0; // ???????????????????????????min,max,secondMin

      each(values, function (v) {
        var timeStamp = self._toTimeStamp(v);

        if (isNaN(timeStamp)) {
          throw new TypeError("Invalid Time: " + v);
        }

        if (min > timeStamp) {
          secondMin = min;
          min = timeStamp;
        } else if (secondMin > timeStamp) {
          secondMin = timeStamp;
        }

        if (max < timeStamp) {
          max = timeStamp;
        }

        timeStamps.push(timeStamp);
      }); // ???????????????????????????????????????

      if (values.length > 1) {
        self.minTickInterval = secondMin - min;
      }

      if (isNil(self.min) || self._toTimeStamp(self.min) > min) {
        self.min = min;
      }

      if (isNil(self.max) || self._toTimeStamp(self.max) < max) {
        self.max = max;
      }
    }

    _Linear.prototype.init.call(this);
  };

  _proto.calculateTicks = function calculateTicks() {
    var self = this;
    var min = self.min;
    var max = self.max;
    var count = self.tickCount;
    var interval = self.tickInterval;
    var tmp = timeAuto({
      min: min,
      max: max,
      minCount: count,
      maxCount: count,
      interval: interval,
      minInterval: self.minTickInterval
    });
    return tmp.ticks;
  }
  /**
   * @override
   */
  ;

  _proto.getText = function getText(value) {
    var formatter = this.formatter;
    value = this.translate(value);
    value = formatter ? formatter(value) : fecha.format(value, this.mask);
    return value;
  }
  /**
   * @override
   */
  ;

  _proto.scale = function scale(value) {
    if (isString(value)) {
      value = this.translate(value);
    }

    return _Linear.prototype.scale.call(this, value);
  }
  /**
   * @override
   */
  ;

  _proto.translate = function translate(value) {
    return this._toTimeStamp(value);
  } // ???????????????????????????
  ;

  _proto._toTimeStamp = function _toTimeStamp(value) {
    return TimeUtil.toTimeStamp(value);
  };

  return Time;
}(Linear);

Base.Time = Time;
module.exports = Time;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview ?????????????????????
 * @author dxq613@gmail.com
 */
var AutoUtil = __webpack_require__(8);

var isNil = __webpack_require__(2);

var MAX_COUNT = 6;
var SNAP_ARRAY = [1, 2, 4, 6, 8, 12];
var MINUTE_MS = 60 * 1000;
var HOUR_MS = 3600 * 1000;
var DAY_MS = 24 * 3600 * 1000;

function getYear(date) {
  return new Date(date).getFullYear();
}

function createYear(year) {
  return new Date(year, 0, 1).getTime();
}

function getMonth(date) {
  return new Date(date).getMonth();
}

function diffMonth(min, max) {
  var minYear = getYear(min);
  var maxYear = getYear(max);
  var minMonth = getMonth(min);
  var maxMonth = getMonth(max);
  return (maxYear - minYear) * 12 + (maxMonth - minMonth) % 12;
}

function creatMonth(year, month) {
  return new Date(year, month, 1).getTime();
}

function diffDay(min, max) {
  return Math.ceil((max - min) / DAY_MS);
}

function diffHour(min, max) {
  return Math.ceil((max - min) / HOUR_MS);
}

function diffMinus(min, max) {
  return Math.ceil((max - min) / (60 * 1000));
}

module.exports = function (info) {
  var minInterval = info.minInterval;
  var ticks = [];
  var min = info.min;
  var max = info.max;
  var interval = info.interval;
  var count; // ???????????????????????????????????????????????????????????????????????????

  if (max === min) {
    max = min + DAY_MS;
  } // ????????????


  if (isNil(interval)) {
    var innerTime = max - min;
    var dms = DAY_MS; // ???????????????

    var yms = 365 * dms; // ???????????????

    interval = parseInt(innerTime / (info.maxCount || MAX_COUNT), 10);

    if (minInterval && minInterval > interval) {
      interval = minInterval;
    }

    var yfactor = interval / yms;
    var minYear = getYear(min); // ????????????

    if (yfactor > 0.51) {
      var year = Math.ceil(yfactor); // interval = year * yms;

      var maxYear = getYear(max);

      for (var i = minYear; i <= maxYear + year; i = i + year) {
        ticks.push(createYear(i));
      }

      interval = null;
    } else if (yfactor > 0.0834) {
      // ???????????????
      var month = Math.ceil(yfactor / 0.0834);
      var mmMoth = getMonth(min);
      var dMonths = diffMonth(min, max);

      for (var _i = 0; _i <= dMonths + month; _i = _i + month) {
        ticks.push(creatMonth(minYear, _i + mmMoth));
      }

      interval = null;
    } else if (interval > dms * 0.5) {
      // ????????????
      var date = new Date(min);

      var _year = date.getFullYear();

      var _month = date.getMonth(min);

      var mday = date.getDate();
      var day = Math.ceil(interval / dms);
      var ddays = diffDay(min, max);
      interval = day * dms;

      for (var _i2 = 0; _i2 < ddays + day; _i2 = _i2 + day) {
        ticks.push(new Date(_year, _month, mday + _i2).getTime());
      }
    } else if (interval > HOUR_MS) {
      // ??????????????????
      var _date = new Date(min);

      var _year2 = _date.getFullYear();

      var _month2 = _date.getMonth(min);

      var _day = _date.getDate();

      var hour = _date.getHours();

      var hours = AutoUtil.snapTo(SNAP_ARRAY, Math.ceil(interval / HOUR_MS));
      var dHours = diffHour(min, max);
      interval = hours * HOUR_MS;

      for (var _i3 = 0; _i3 <= dHours + hours; _i3 = _i3 + hours) {
        ticks.push(new Date(_year2, _month2, _day, hour + _i3).getTime());
      }
    } else if (interval > MINUTE_MS) {
      // ?????????????????????
      var dMinus = diffMinus(min, max);
      var minutes = Math.ceil(interval / MINUTE_MS);
      interval = minutes * MINUTE_MS;

      for (var _i4 = 0; _i4 <= dMinus + minutes; _i4 = _i4 + minutes) {
        ticks.push(min + _i4 * MINUTE_MS);
      }
    } else {
      if (interval < 1000) {
        interval = 1000;
      }

      min = Math.floor(min / 1000) * 1000;
      var dSeconds = Math.ceil((max - min) / 1000);
      var seconds = Math.ceil(interval / 1000);
      interval = seconds * 1000;

      for (var _i5 = 0; _i5 < dSeconds + seconds; _i5 = _i5 + seconds) {
        ticks.push(min + _i5 * 1000);
      }
    }
  }

  if (!ticks.length) {
    min = Math.floor(min / 1000) * 1000;
    max = Math.ceil(max / 1000) * 1000;
    count = (max - min) / interval;

    for (var _i6 = 0; _i6 <= count; _i6++) {
      ticks.push(AutoUtil.fixedBase(interval * _i6 + min, interval));
    }
  }

  return {
    max: max,
    min: min,
    interval: interval,
    ticks: ticks,
    count: ticks.length
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isType = __webpack_require__(3);

var isDate = function isDate(value) {
  return isType(value, 'Date');
};

module.exports = isDate;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * @fileOverview ??????????????????????????????
 * @author dxq613@gmail.com
 */
var Base = __webpack_require__(0);

var Category = __webpack_require__(9);

var fecha = __webpack_require__(11);

var catAuto = __webpack_require__(10);

var TimeUtil = __webpack_require__(12);

var each = __webpack_require__(1);

var isNumber = __webpack_require__(5);

var isObject = __webpack_require__(7);

var isString = __webpack_require__(6);
/**
 * ?????????????????????
 * @class Scale.TimeCategory
 */


var TimeCategory =
/*#__PURE__*/
function (_Category) {
  _inheritsLoose(TimeCategory, _Category);

  function TimeCategory() {
    return _Category.apply(this, arguments) || this;
  }

  var _proto = TimeCategory.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    _Category.prototype._initDefaultCfg.call(this);

    this.type = 'timeCat';
    /**
     * ???????????????????????????????????????
     * @type {Boolean}
     */

    this.sortable = true;
    this.tickCount = 5;
    /**
     * ???????????????
     * @type {String}
     */

    this.mask = 'YYYY-MM-DD';
  };

  _proto.init = function init() {
    var self = this;
    var values = this.values; // ???????????????????????????????????????????????????????????????

    each(values, function (v, i) {
      values[i] = self._toTimeStamp(v);
    });

    if (this.sortable) {
      // ????????????
      values.sort(function (v1, v2) {
        return v1 - v2;
      });
    }

    if (!self.ticks) {
      self.ticks = this.calculateTicks();
    }
  }
  /**
   * ?????? ticks
   * @return {array} ?????? ticks ??????
   */
  ;

  _proto.calculateTicks = function calculateTicks() {
    var self = this;
    var count = self.tickCount;
    var ticks;

    if (count) {
      var temp = catAuto({
        maxCount: count,
        data: self.values,
        isRounding: self.isRounding
      });
      ticks = temp.ticks;
    } else {
      ticks = self.values;
    }

    return ticks;
  }
  /**
   * @override
   */
  ;

  _proto.translate = function translate(value) {
    value = this._toTimeStamp(value);
    var index = this.values.indexOf(value);

    if (index === -1) {
      if (isNumber(value) && value < this.values.length) {
        index = value;
      } else {
        index = NaN;
      }
    }

    return index;
  }
  /**
   * @override
   */
  ;

  _proto.scale = function scale(value) {
    var rangeMin = this.rangeMin();
    var rangeMax = this.rangeMax();
    var index = this.translate(value);
    var percent;

    if (this.values.length === 1 || isNaN(index)) {
      // is index is NAN should not be set as 0
      percent = index;
    } else if (index > -1) {
      percent = index / (this.values.length - 1);
    } else {
      percent = 0;
    }

    return rangeMin + percent * (rangeMax - rangeMin);
  }
  /**
   * @override
   */
  ;

  _proto.getText = function getText(value) {
    var result = '';
    var index = this.translate(value);

    if (index > -1) {
      result = this.values[index];
    } else {
      result = value;
    }

    var formatter = this.formatter;
    result = parseInt(result, 10);
    result = formatter ? formatter(result) : fecha.format(result, this.mask);
    return result;
  }
  /**
   * @override
   */
  ;

  _proto.getTicks = function getTicks() {
    var self = this;
    var ticks = this.ticks;
    var rst = [];
    each(ticks, function (tick) {
      var obj;

      if (isObject(tick)) {
        obj = tick;
      } else {
        obj = {
          text: isString(tick) ? tick : self.getText(tick),
          value: self.scale(tick),
          tickValue: tick // ???????????????????????????????????????????????????????????????

        };
      }

      rst.push(obj);
    });
    return rst;
  } // ???????????????????????????
  ;

  _proto._toTimeStamp = function _toTimeStamp(value) {
    return TimeUtil.toTimeStamp(value);
  };

  return TimeCategory;
}(Category);

Base.TimeCat = TimeCategory;
module.exports = TimeCategory;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * @fileOverview ?????????????????????log??????
 * @author dxq613@gmail.com
 */
var each = __webpack_require__(1);

var Base = __webpack_require__(0);

var Linear = __webpack_require__(4); // ??????log


function log(a, b) {
  if (a === 1) {
    return 1;
  }

  return Math.log(b) / Math.log(a);
}
/**
 * ?????????log??????
 * @class Scale.Log
 */


var Log =
/*#__PURE__*/
function (_Linear) {
  _inheritsLoose(Log, _Linear);

  function Log() {
    return _Linear.apply(this, arguments) || this;
  }

  var _proto = Log.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    _Linear.prototype._initDefaultCfg.call(this);

    this.type = 'log';
    /**
     * @override
     * log ??????????????????????????????10?????????
     * @type {Number}
     */

    this.tickCount = 10;
    /**
     * ??????log???????????????
     * @type {Number}
     */

    this.base = 2; // ?????????tick??????????????????

    this._minTick = null;
  }
  /**
   * @override
   */
  ;

  _proto.calculateTicks = function calculateTicks() {
    var self = this;
    var base = self.base;
    var minTick;

    if (self.min < 0) {
      throw new Error('The minimum value must be greater than zero!');
    }

    var maxTick = log(base, self.max);

    if (self.min > 0) {
      minTick = Math.floor(log(base, self.min));
    } else {
      var values = self.values;
      var positiveMin = self.max; // ????????????0???????????????, ???????????????0????????????1

      each(values, function (value) {
        if (value > 0 && value < positiveMin) {
          positiveMin = value;
        }
      });

      if (positiveMin === self.max) {
        positiveMin = self.max / base;
      }

      if (positiveMin > 1) {
        positiveMin = 1;
      }

      minTick = Math.floor(log(base, positiveMin));
      self._minTick = minTick;
      self.positiveMin = positiveMin;
    }

    var count = maxTick - minTick;
    var tickCount = self.tickCount;
    var avg = Math.ceil(count / tickCount);
    var ticks = [];

    for (var i = minTick; i < maxTick + avg; i = i + avg) {
      ticks.push(Math.pow(base, i));
    }

    if (self.min === 0) {
      ticks.unshift(0);
    }

    return ticks;
  } // ????????????????????????value????????????????????????
  ;

  _proto._getScalePercent = function _getScalePercent(value) {
    var max = this.max;
    var min = this.min;

    if (max === min) {
      return 0;
    } // ?????????????????????0????????????0??????


    if (value <= 0) {
      return 0;
    }

    var base = this.base;
    var positiveMin = this.positiveMin; // ??????min == 0, ????????????0????????????????????????????????????????????????????????????????????????????????????tick???????????????0???????????????

    if (positiveMin) {
      min = positiveMin * 1 / base;
    }

    var percent; // ????????????????????????????????????????????? value / ????????? ??????????????????

    if (value < positiveMin) {
      percent = value / positiveMin / (log(base, max) - log(base, min));
    } else {
      percent = (log(base, value) - log(base, min)) / (log(base, max) - log(base, min));
    }

    return percent;
  }
  /**
   * @override
   */
  ;

  _proto.scale = function scale(value) {
    var percent = this._getScalePercent(value);

    var rangeMin = this.rangeMin();
    var rangeMax = this.rangeMax();
    return rangeMin + percent * (rangeMax - rangeMin);
  }
  /**
   * @override
   */
  ;

  _proto.invert = function invert(value) {
    var base = this.base;
    var max = log(base, this.max);
    var rangeMin = this.rangeMin();
    var range = this.rangeMax() - rangeMin;
    var min;
    var positiveMin = this.positiveMin;

    if (positiveMin) {
      if (value === 0) {
        return 0;
      }

      min = log(base, positiveMin / base);
      var appendPercent = 1 / (max - min) * range; // 0 ??? positiveMin?????????

      if (value < appendPercent) {
        // ?????? 0 - positiveMin ??????
        return value / appendPercent * positiveMin;
      }
    } else {
      min = log(base, this.min);
    }

    var percent = (value - rangeMin) / range;
    var tmp = percent * (max - min) + min;
    return Math.pow(base, tmp);
  };

  return Log;
}(Linear);

Base.Log = Log;
module.exports = Log;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * @fileOverview ??????pow??????????????????
 * @author dxq613@gmail.com
 */
var Base = __webpack_require__(0);

var Linear = __webpack_require__(4); // ??????a?????????????????????b??????????????? x^^a = b;???x


function calBase(a, b) {
  var e = Math.E;
  var value = Math.pow(e, Math.log(b) / a); // ????????????????????????

  return value;
}
/**
 * ?????????Pow??????
 * @class Scale.Log
 */


var Pow =
/*#__PURE__*/
function (_Linear) {
  _inheritsLoose(Pow, _Linear);

  function Pow() {
    return _Linear.apply(this, arguments) || this;
  }

  var _proto = Pow.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    _Linear.prototype._initDefaultCfg.call(this);

    this.type = 'pow';
    /**
     * @override
     * pow ??????????????????????????????10?????????
     * @type {Number}
     */

    this.tickCount = 10;
    /**
     * ??????pow???????????????
     * @type {Number}
     */

    this.exponent = 2;
  }
  /**
   * @override
   */
  ;

  _proto.calculateTicks = function calculateTicks() {
    var self = this;
    var exponent = self.exponent;
    var min;
    var max = Math.ceil(calBase(exponent, self.max));

    if (self.min >= 0) {
      min = Math.floor(calBase(exponent, self.min));
    } else {
      min = 0;
    }

    if (min > max) {
      var tmp = max;
      max = min;
      min = tmp;
    }

    var count = max - min;
    var tickCount = self.tickCount;
    var avg = Math.ceil(count / tickCount);
    var ticks = [];

    for (var i = min; i < max + avg; i = i + avg) {
      ticks.push(Math.pow(i, exponent));
    }

    return ticks;
  } // ????????????????????????value????????????????????????
  ;

  _proto._getScalePercent = function _getScalePercent(value) {
    var max = this.max;
    var min = this.min;

    if (max === min) {
      return 0;
    }

    var exponent = this.exponent;
    var percent = (calBase(exponent, value) - calBase(exponent, min)) / (calBase(exponent, max) - calBase(exponent, min));
    return percent;
  }
  /**
   * @override
   */
  ;

  _proto.scale = function scale(value) {
    var percent = this._getScalePercent(value);

    var rangeMin = this.rangeMin();
    var rangeMax = this.rangeMax();
    return rangeMin + percent * (rangeMax - rangeMin);
  }
  /**
   * @override
   */
  ;

  _proto.invert = function invert(value) {
    var percent = (value - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
    var exponent = this.exponent;
    var max = calBase(exponent, this.max);
    var min = calBase(exponent, this.min);
    var tmp = percent * (max - min) + min;
    return Math.pow(tmp, exponent);
  };

  return Pow;
}(Linear);

Base.Pow = Pow;
module.exports = Pow;

/***/ })
/******/ ]);
});
//# sourceMappingURL=scale.js.map
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1654371344269);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map