webpackHotUpdate(5,{

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/SHACKOX/Desktop/javascript/react/next-js-example/components/Prices.js';


var Prices = function (_React$Component) {
    (0, _inherits3.default)(Prices, _React$Component);

    function Prices() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Prices);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Prices.__proto__ || (0, _getPrototypeOf2.default)(Prices)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            currency: 'USD'
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Prices, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var list = '';

            if (this.state.currency === 'USD') {
                list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                }, 'Bitcoin rate for ', this.props.bpi.USD.description, ': ', _react2.default.createElement('span', { className: 'badge badge-primary', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                }, this.props.bpi.USD.code), ' ', _react2.default.createElement('strong', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                }, this.props.bpi.USD.rate));
            } else if (this.state.currency === 'GBP') {
                list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    }
                }, 'Bitcoin rate for ', this.props.bpi.GBP.description, ': ', _react2.default.createElement('span', { className: 'badge badge-primary', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    }
                }, this.props.bpi.GBP.code), ' ', _react2.default.createElement('strong', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    }
                }, this.props.bpi.GBP.rate));
            } else if (this.state.currency === 'EUR') {
                list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                }, 'Bitcoin rate for ', this.props.bpi.EUR.description, ': ', _react2.default.createElement('span', { className: 'badge badge-primary', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                }, this.props.bpi.EUR.code), ' ', _react2.default.createElement('strong', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                }, this.props.bpi.EUR.rate));
            }

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement('ul', { className: 'list-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, list), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }), _react2.default.createElement('select', { onChange: function onChange(e) {
                    return _this2.setState({ currency: e.target.value });
                }, className: 'form-control', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement('option', { value: 'USD', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, 'USD'), _react2.default.createElement('option', { value: 'GBP', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, 'GBP'), _react2.default.createElement('option', { value: 'EUR', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, 'EUR')));
        }
    }]);

    return Prices;
}(_react2.default.Component);

exports.default = Prices;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJpY2VzLmpzIl0sIm5hbWVzIjpbIlByaWNlcyIsInN0YXRlIiwiY3VycmVuY3kiLCJsaXN0IiwicHJvcHMiLCJicGkiLCJVU0QiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJyYXRlIiwiR0JQIiwiRVVSIiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTSxBOzs7Ozs7Ozs7Ozs7OztnTixBQUNGO3NCQUFRLEEsQUFDTTtBQUROLEFBQ0o7Ozs7O2lDQUdNO3lCQUNOOztnQkFBSSxPQUFKLEFBQVcsQUFFWDs7Z0JBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFmLEFBQTRCLE9BQU8sQUFDL0I7dUNBQU8sY0FBQSxRQUFJLFdBQUosQUFBYztrQ0FBZDtvQ0FBQTtBQUFBO2lCQUFBLEVBQW1ELDBCQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxJQUFsRSxBQUFzRSxhQUFlLHNCQUFBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO2tDQUFoQjtvQ0FBQSxBQUF3QztBQUF4Qzt3QkFBd0MsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBQTVJLEFBQXFGLEFBQTJELE9BQWMscUJBQUEsY0FBQTs7a0NBQUE7b0NBQUEsQUFBVTtBQUFWO0FBQUEsd0JBQVUsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBQTlMLEFBQU8sQUFBOEosQUFBNkIsQUFDck07QUFGRCx1QkFFVyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQWYsQUFBNEIsT0FBTyxBQUN0Qzt1Q0FBTyxjQUFBLFFBQUksV0FBSixBQUFjO2tDQUFkO29DQUFBO0FBQUE7aUJBQUEsRUFBbUQsMEJBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBQWxFLEFBQXNFLGFBQWUsc0JBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7a0NBQWhCO29DQUFBLEFBQXdDO0FBQXhDO3dCQUF3QyxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFBNUksQUFBcUYsQUFBMkQsT0FBYyxxQkFBQSxjQUFBOztrQ0FBQTtvQ0FBQSxBQUFVO0FBQVY7QUFBQSx3QkFBVSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFBOUwsQUFBTyxBQUE4SixBQUE2QixBQUNyTTtBQUZNLGFBQUEsTUFFQSxJQUFJLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBZixBQUE0QixPQUFPLEFBQ3RDO3VDQUFPLGNBQUEsUUFBSSxXQUFKLEFBQWM7a0NBQWQ7b0NBQUE7QUFBQTtpQkFBQSxFQUFtRCwwQkFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFBbEUsQUFBc0UsYUFBZSxzQkFBQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtrQ0FBaEI7b0NBQUEsQUFBd0M7QUFBeEM7d0JBQXdDLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxJQUE1SSxBQUFxRixBQUEyRCxPQUFjLHFCQUFBLGNBQUE7O2tDQUFBO29DQUFBLEFBQVU7QUFBVjtBQUFBLHdCQUFVLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxJQUE5TCxBQUFPLEFBQThKLEFBQTZCLEFBQ3JNO0FBRUQ7O21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQSxRQUFJLFdBQUosQUFBYzs4QkFBZDtnQ0FBQSxBQUNNO0FBRE47ZUFESixBQUNJLEFBR0E7OzhCQUFBO2dDQUpKLEFBSUksQUFDQTtBQURBO0FBQUEsZ0NBQ0EsY0FBQSxZQUFRLFVBQVcscUJBQUE7MkJBQUssT0FBQSxBQUFLLFNBQVMsRUFBRSxVQUFVLEVBQUEsQUFBRSxPQUFqQyxBQUFLLEFBQWMsQUFBcUI7QUFBM0QsbUJBQXNFLFdBQXRFLEFBQWdGOzhCQUFoRjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxZQUFRLE9BQVIsQUFBYzs4QkFBZDtnQ0FBQTtBQUFBO2VBREosQUFDSSxBQUNBLHdCQUFBLGNBQUEsWUFBUSxPQUFSLEFBQWM7OEJBQWQ7Z0NBQUE7QUFBQTtlQUZKLEFBRUksQUFDQSx3QkFBQSxjQUFBLFlBQVEsT0FBUixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFUWixBQUNJLEFBS0ksQUFHSSxBQUlmOzs7OztFQTdCZ0IsZ0JBQU0sQSxBQWdDM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUHJpY2VzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9TSEFDS09YL0Rlc2t0b3AvamF2YXNjcmlwdC9yZWFjdC9uZXh0LWpzLWV4YW1wbGUifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/SHACKOX/Desktop/javascript/react/next-js-example/components/Prices.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/SHACKOX/Desktop/javascript/react/next-js-example/components/Prices.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42YWMxNWQyNjNjZWMzM2ZkNWNjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QcmljZXMuanM/YjA4MThhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcmljZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBjdXJyZW5jeTogJ1VTRCdcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBsZXQgbGlzdCA9ICcnO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnVVNEJykge1xuICAgICAgICAgICAgbGlzdCA9IDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5CaXRjb2luIHJhdGUgZm9yIHsgdGhpcy5wcm9wcy5icGkuVVNELmRlc2NyaXB0aW9uIH06IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57IHRoaXMucHJvcHMuYnBpLlVTRC5jb2RlIH08L3NwYW4+IDxzdHJvbmc+eyB0aGlzLnByb3BzLmJwaS5VU0QucmF0ZSB9PC9zdHJvbmc+PC9saT5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnR0JQJykge1xuICAgICAgICAgICAgbGlzdCA9IDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5CaXRjb2luIHJhdGUgZm9yIHsgdGhpcy5wcm9wcy5icGkuR0JQLmRlc2NyaXB0aW9uIH06IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57IHRoaXMucHJvcHMuYnBpLkdCUC5jb2RlIH08L3NwYW4+IDxzdHJvbmc+eyB0aGlzLnByb3BzLmJwaS5HQlAucmF0ZSB9PC9zdHJvbmc+PC9saT5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnRVVSJykge1xuICAgICAgICAgICAgbGlzdCA9IDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5CaXRjb2luIHJhdGUgZm9yIHsgdGhpcy5wcm9wcy5icGkuRVVSLmRlc2NyaXB0aW9uIH06IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57IHRoaXMucHJvcHMuYnBpLkVVUi5jb2RlIH08L3NwYW4+IDxzdHJvbmc+eyB0aGlzLnByb3BzLmJwaS5FVVIucmF0ZSB9PC9zdHJvbmc+PC9saT5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIHsgbGlzdCB9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyBlID0+IHRoaXMuc2V0U3RhdGUoeyBjdXJyZW5jeTogZS50YXJnZXQudmFsdWUgfSkgfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVTRFwiPlVTRDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR0JQXCI+R0JQPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFVVJcIj5FVVI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUHJpY2VzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7O0FBN0JBO0FBQ0E7QUErQkE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==