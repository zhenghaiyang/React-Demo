webpackJsonp([1],{

/***/ 1180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(79);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(109);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _antd = __webpack_require__(325);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SubMenu = _antd.Menu.SubMenu;
	var MenuItemGroup = _antd.Menu.ItemGroup;

	var MyMenu = function (_React$Component) {
	  _inherits(MyMenu, _React$Component);

	  function MyMenu(props) {
	    _classCallCheck(this, MyMenu);

	    var _this = _possibleConstructorReturn(this, (MyMenu.__proto__ || Object.getPrototypeOf(MyMenu)).call(this, props));

	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  _createClass(MyMenu, [{
	    key: 'handleClick',
	    value: function handleClick(e) {
	      console.log(e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _antd.Menu,
	        {
	          onClick: this.handleClick,
	          style: { width: 240 },
	          defaultSelectedKeys: ['1'],
	          defaultOpenKeys: ['sub1'],
	          mode: 'inline'
	        },
	        _react2.default.createElement(
	          SubMenu,
	          { key: 'sub1', title: _react2.default.createElement(
	              'span',
	              null,
	              _react2.default.createElement(_antd.Icon, { type: 'mail' }),
	              _react2.default.createElement(
	                'span',
	                null,
	                'Navigation One'
	              )
	            ) },
	          _react2.default.createElement(
	            MenuItemGroup,
	            { key: 'g1', title: 'Item 1' },
	            _react2.default.createElement(
	              _antd.Menu.Item,
	              { key: '1' },
	              'Option 1'
	            ),
	            _react2.default.createElement(
	              _antd.Menu.Item,
	              { key: '2' },
	              'Option 2'
	            )
	          ),
	          _react2.default.createElement(
	            MenuItemGroup,
	            { key: 'g2', title: 'Item 2' },
	            _react2.default.createElement(
	              _antd.Menu.Item,
	              { key: '3' },
	              'Option 3'
	            ),
	            _react2.default.createElement(
	              _antd.Menu.Item,
	              { key: '4' },
	              'Option 4'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          SubMenu,
	          { key: 'sub2', title: _react2.default.createElement(
	              'span',
	              null,
	              _react2.default.createElement(_antd.Icon, { type: 'appstore' }),
	              _react2.default.createElement(
	                'span',
	                null,
	                'Navigation Two'
	              )
	            ) },
	          _react2.default.createElement(
	            _antd.Menu.Item,
	            { key: '5' },
	            'Option 5'
	          ),
	          _react2.default.createElement(
	            _antd.Menu.Item,
	            { key: '6' },
	            'Option 6'
	          ),
	          _react2.default.createElement(
	            SubMenu,
	            { key: 'sub3', title: 'Submenu' },
	            _react2.default.createElement(
	              _antd.Menu.Item,
	              { key: '7' },
	              'Option 7'
	            ),
	            _react2.default.createElement(
	              _antd.Menu.Item,
	              { key: '8' },
	              'Option 8'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          SubMenu,
	          { key: 'sub4', title: _react2.default.createElement(
	              'span',
	              null,
	              _react2.default.createElement(_antd.Icon, { type: 'setting' }),
	              _react2.default.createElement(
	                'span',
	                null,
	                'Navigation Three'
	              )
	            ) },
	          _react2.default.createElement(
	            _antd.Menu.Item,
	            { key: '9' },
	            'Option 9'
	          ),
	          _react2.default.createElement(
	            _antd.Menu.Item,
	            { key: '10' },
	            'Option 10'
	          ),
	          _react2.default.createElement(
	            _antd.Menu.Item,
	            { key: '11' },
	            'Option 11'
	          ),
	          _react2.default.createElement(
	            _antd.Menu.Item,
	            { key: '12' },
	            'Option 12'
	          )
	        )
	      );
	    }
	  }]);

	  return MyMenu;
	}(_react2.default.Component);
	// export default MyMenu;

/***/ }

});