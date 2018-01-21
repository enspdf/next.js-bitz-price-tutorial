'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Prices = require('../components/Prices');

var _Prices2 = _interopRequireDefault(_Prices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/SHACKOX/Desktop/javascript/react/next-js-example/pages/index.js?entry';


var Index = function Index(props) {
    return _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, 'Welcome to BitzPrice'), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, 'Check current Bitcoin rate'), _react2.default.createElement(_Prices2.default, { bpi: props.bpi, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    })));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

                case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.json();

                case 5:
                    data = _context.sent;
                    return _context.abrupt('return', {
                        bpi: data.bpi
                    });

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZldGNoIiwiTGF5b3V0IiwiUHJpY2VzIiwiSW5kZXgiLCJwcm9wcyIsImJwaSIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFFbkIsSUFBTSxRQUFRLFNBQVIsQUFBUSxNQUFBLEFBQUMsT0FBRDsyQkFDVixBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQURKLEFBQ0ksQUFDQSx5Q0FBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FGSixBQUVJLEFBQ0EsK0NBQUEsQUFBQyxrQ0FBTyxLQUFNLE1BQWQsQUFBb0I7c0JBQXBCO3dCQUxFLEFBQ1YsQUFDSSxBQUdJO0FBQUE7O0FBTFo7O0FBVUEsTUFBQSxBQUFNLDJGQUFrQixtQkFBQTthQUFBO2tFQUFBO2tCQUFBOzZDQUFBO3FCQUFBO29DQUFBOzJCQUNGLE1BREUsQUFDRixBQUFNOztxQkFBbEI7QUFEYyxtQ0FBQTtvQ0FBQTsyQkFFRCxJQUZDLEFBRUQsQUFBSTs7cUJBQWpCO0FBRmMsb0NBQUE7OzZCQUtYLEtBTFcsQUFJYixBQUNPO0FBRFAsQUFDSDs7cUJBTGdCO3FCQUFBO29DQUFBOztBQUFBO2dCQUFBO0FBQXhCLEFBU0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL1NIQUNLT1gvRGVza3RvcC9qYXZhc2NyaXB0L3JlYWN0L25leHQtanMtZXhhbXBsZSJ9