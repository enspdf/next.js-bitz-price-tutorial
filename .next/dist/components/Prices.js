'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

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