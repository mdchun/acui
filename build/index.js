(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(4);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(5);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(6);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LOADING = 'loading';
var NOMORE = 'noMore';
var classnames = __webpack_require__(0);

var LoadMore = function (_React$Component) {
    _inherits(LoadMore, _React$Component);

    function LoadMore(props) {
        _classCallCheck(this, LoadMore);

        var _this = _possibleConstructorReturn(this, (LoadMore.__proto__ || Object.getPrototypeOf(LoadMore)).call(this, props));

        _this.state = {
            load: LOADING
        };
        return _this;
    }

    _createClass(LoadMore, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var t = this;
            if (this.props.scrollElement) {
                // 其他定位元素滚动监听
                $(this.props.scrollElement)[0].addEventListener('scroll', this._onScroll.bind(t), false);
                $(this.props.scrollElement)[0].addEventListener('resize', this._onScroll.bind(t), false);
            }
            document.addEventListener('scroll', this._onScroll.bind(t), false);
            document.addEventListener('resize', this._onScroll.bind(t), false);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var t = this;
            if (this.props.scrollElement) {
                $(this.props.scrollElement)[0].removeEventListener('scroll', this._onScroll.bind(t), false);
                $(this.props.scrollElement)[0].removeEventListener('resize', this._onScroll.bind(t), false);
            }
            document.removeEventListener('scroll', this._onScroll.bind(t), false);
            document.removeEventListener('resize', this._onScroll.bind(t), false);
        }
    }, {
        key: 'loaded',
        value: function loaded() {
            this.setState({ load: LOADING });
            this.isLoading = false;
            this._unLock();
            // 如果 loaded 之后，也应该检测下是否 inViewPort 如果是的话，应该再触发一次加载。
            this._onScroll();
        }

        // lock

    }, {
        key: 'loading',
        value: function loading() {
            this.isLoading = true;
        }
    }, {
        key: '_canLoad',
        value: function _canLoad() {
            return !this.isLoading && this.state.load !== NOMORE;
        }
    }, {
        key: 'noMore',
        value: function noMore() {
            this.setState({ load: NOMORE });
            this._unLock();
        }
    }, {
        key: 'render',
        value: function render() {
            var _classnames;

            var t = this;

            var text = '';

            switch (t.state.load) {
                case LOADING:
                    text = t.props.loadingText;
                    break;
                case NOMORE:
                    text = t.props.noMoreText;
            }
            return _react2.default.createElement(
                'div',
                { ref: 'root', className: classnames((_classnames = {
                        'tLoadMore': true
                    }, _defineProperty(_classnames, t.props.className, !!t.props.className), _defineProperty(_classnames, t.state.load, !!t.state.load), _classnames)) },
                text
            );
        }
    }, {
        key: '_isVisible',
        value: function _isVisible(el, offset) {
            var t = this;
            offset = t.props.offset >= 50 ? t.props.offset : 50;
            // Check if the element is visible
            // https://github.com/jquery/jquery/blob/740e190223d19a114d5373758127285d14d6b71e/src/css/hiddenVisibleSelectors.js
            if (!el.offsetWidth || !el.offsetHeight) {
                return false;
            }

            var eltRect = el.getBoundingClientRect();

            return eltRect.top < document.documentElement.clientHeight + offset;
        }
    }, {
        key: '_onScroll',
        value: function _onScroll() {
            var t = this;
            var el = ReactDOM.findDOMNode(t.refs.root);

            if (!el || !t._canLoad()) {
                return;
            }
            if (t._isVisible(el, this.offset)) {
                t.loading();
                t._handleLoadEvents();
            }
        }
    }, {
        key: '_handleLoadEvents',
        value: function _handleLoadEvents() {
            this.props.onLoadMore && this.props.onLoadMore({ loadState: this.state.load });
        }
    }, {
        key: '_isLoading',
        value: function _isLoading() {
            return this.isLoading;
        }
    }, {
        key: '_unLock',
        value: function _unLock() {
            this.isLoading = false;
        }
    }]);

    return LoadMore;
}(_react2.default.Component);

LoadMore.defaultProps = {
    offset: 50,
    onLoadMore: function onLoadMore() {},
    scrollElement: '',
    loadingText: '正在加载中…',
    noMoreText: '没有啦！'
};

// http://facebook.github.io/react/docs/reusable-components.html
LoadMore.propTypes = {
    offset: _react2.default.PropTypes.number,
    onLoadMore: _react2.default.PropTypes.func,
    scrollElement: _react2.default.PropTypes.string,
    loadingText: _react2.default.PropTypes.string,
    noMoreText: _react2.default.PropTypes.string
};

module.exports = LoadMore;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(7);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Time Component for AMUI
 * @param stamp {Number} time
 * @param past {Boolean}  是否显示‘x天前’格式
 * @param maxPastDays {Number} past为true时,此项才有效
 * @param format {String}
 * @author mdc
 * 
 */
var classnames = __webpack_require__(0);

// 定义时间常量
var S = 1000;
var M = S * 60;
var H = M * 60;
var D = H * 24;

var arr = new Map([['分钟', M], ['小时', H], ['天', D]]);
/*低版本安卓需要用下面方法*/
// import _ from 'lodash';
// let arr = _.map([
//     ['分钟', M],
//     ['小时', H],
//     ['天', D]
// ]);

// 年月日分隔符
var yc = '-',
    mc = '-',
    dc = '-';

var Time = function (_React$Component) {
    _inherits(Time, _React$Component);

    function Time(props) {
        _classCallCheck(this, Time);

        var _this = _possibleConstructorReturn(this, (Time.__proto__ || Object.getPrototypeOf(Time)).call(this, props));

        _this.state = {
            past: props.past,
            maxPastDays: props.maxPastDays,
            format: props.format,
            pastTime: _this._format(true),
            formatTime: _this._format(false)
        };
        return _this;
    }

    _createClass(Time, [{
        key: '_format',
        value: function _format(isPast) {
            var t = this;
            var displayTime = void 0;
            var format = t.props.format.toUpperCase();

            if (isPast) {
                /**
                 * 1天前;1小时前;1分钟前
                 */
                // 当前时间
                var nowTime = +new Date();

                // 传输入时间与当前时间的时间差
                var rangeTime = nowTime - this.props.stamp;

                var flag = false;
                arr.forEach(function (value, key) {
                    var rangeRate = Math.floor(rangeTime / value);
                    if (rangeRate >= 1) {

                        // FIXME: 中午12:00相对于昨天23:00，也会走'1小时前’的逻辑,因为一天(24小时)没到；
                        displayTime = '1' + key + '\u524D';

                        // TODO: 这里有没有更好办法
                        if (rangeRate >= t.props.maxPastDays && key === '天') {
                            flag = true;
                        } else {
                            displayTime = '' + rangeRate + key + '\u524D';
                        }
                    }
                });

                return flag ? t._normalFormat(format) : displayTime;
            } else {
                return t._normalFormat(format);
            }
        }
    }, {
        key: '_normalFormat',
        value: function _normalFormat(format) {
            var displayTime = void 0;
            var time = new Date(this.props.stamp);
            // 年,月,日,时,分,秒
            var _ref = [time.getFullYear(), time.getMonth() + 1, time.getDate(), time.getHours(), time.getMinutes(), time.getSeconds()],
                year = _ref[0],
                month = _ref[1],
                day = _ref[2],
                hour = _ref[3],
                minute = _ref[4],
                second = _ref[5];
            /**
             * 默认格式:YYYY—MM-DD
             * 支持格式如下:
             * YYYY/MM/DD; YYYY年MM月DD日; YYYY-MM-DD hh:mm:ss
             * 支持简写 eg: YY-M-D 15-1-9
             */

            if (/(Y+)/.test(format)) {
                var reg$ = RegExp.$1.length;
                if (reg$ === 2) {
                    year = String(year).slice(2, 4);
                }
                yc = format.substr(reg$, 1);
            }
            if (/(M+)/.test(format)) {
                var _reg$ = RegExp.$1.length;
                if (_reg$ === 2 && month < 10) month = '0' + month;
                mc = format.substr(format.indexOf('M') + _reg$, 1);
            }
            if (/(D+)/.test(format)) {
                var _reg$2 = RegExp.$1.length;
                if (_reg$2 === 2 && day < 10) day = '0' + day;
                dc = format.substr(format.indexOf('D') + _reg$2, 1);
            }

            displayTime = '' + year + yc + month + mc + day + dc;

            if (format == 'YYYY-MM-DD HH:MM') {
                minute = minute < 10 ? '0' + minute : minute;
                second = second < 10 ? '0' + second : second;
                displayTime += ' ' + hour + ':' + minute;
            }

            if (format.indexOf('HH:MM:SS') > -1) {
                minute = minute < 10 ? '0' + minute : minute;
                second = second < 10 ? '0' + second : second;
                displayTime += ' ' + hour + ':' + minute + ':' + second;
            }

            // 08.01
            if (format == 'MM' + mc + 'DD') {
                displayTime = '' + month + mc + day;
            }

            return displayTime;
        }
    }, {
        key: 'handleToggleFormat',
        value: function handleToggleFormat() {
            var t = this;

            // 传入的props.past为false; 不需要切换显示方式
            if (!t.props.past) return false;

            t.setState({
                past: !t.state.past
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var t = this;
            return _react2.default.createElement(
                'div',
                { className: classnames('tTime', _defineProperty({}, t.props.className, !!t.props.className)), onClick: t.handleToggleFormat.bind(t) },
                t.state.past ? t.state.pastTime : t.state.formatTime
            );
        }
    }]);

    return Time;
}(_react2.default.Component);

Time.defaultProps = {
    stamp: +new Date(),
    past: false,
    maxPastDays: 7,
    format: 'YYYY-MM-DD'
};

Time.propTypes = {
    stamp: _react2.default.PropTypes.number,
    past: _react2.default.PropTypes.bool,
    maxPastDays: _react2.default.PropTypes.number,
    format: _react2.default.PropTypes.string
};

Time.displayName = 'Time';

module.exports = Time;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LoadMore = __webpack_require__(2);
var Time = __webpack_require__(3);

module.exports = {
    LoadMore: LoadMore,
    Time: Time
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map