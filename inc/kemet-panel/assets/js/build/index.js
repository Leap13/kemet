/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/common/Card.js":
/*!****************************!*\
  !*** ./src/common/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var Card = function Card(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: props.id,
    className: "kmt-card"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "card-body"
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/common/Container.js":
/*!*********************************!*\
  !*** ./src/common/Container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var Container = function Container(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "kmt-container"
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/common/logo.js":
/*!****************************!*\
  !*** ./src/common/logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var Logo = function Logo() {
  var style = '.cls-1{fill:#2d3747;}.cls-2{fill:#fab522;}';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "198",
    height: "58.04",
    viewBox: "0 0 198 58.04"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("style", null, style)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("title", null, "kemet-logo"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-1",
    d: "M48.42,55.14h-.91l-1.79-4.76L44,55.14h-.9l-2.26-7h1.13l1.62,5.13,1.9-5.11H46l2,5.11,1.58-5.13h1.13Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-1",
    d: "M61.65,53.5a3.36,3.36,0,0,1-1.31,1.28,3.65,3.65,0,0,1-1.86.47,3.73,3.73,0,0,1-1.87-.46,3.43,3.43,0,0,1-1.3-1.29,3.82,3.82,0,0,1,0-3.67,3.36,3.36,0,0,1,1.3-1.29,3.94,3.94,0,0,1,3.73,0,3.25,3.25,0,0,1,1.31,1.29,3.61,3.61,0,0,1,.47,1.83A3.68,3.68,0,0,1,61.65,53.5Zm-.94-3.14a2.33,2.33,0,0,0-.92-.92,2.58,2.58,0,0,0-1.31-.33,2.55,2.55,0,0,0-1.32.34,2.34,2.34,0,0,0-.91.91,2.73,2.73,0,0,0,0,2.6,2.37,2.37,0,0,0,.91.92,2.64,2.64,0,0,0,1.32.33,2.58,2.58,0,0,0,1.31-.33,2.43,2.43,0,0,0,.92-.91A2.58,2.58,0,0,0,61,51.66,2.54,2.54,0,0,0,60.71,50.36Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-1",
    d: "M71.05,55.14,69.61,52.5H68.26v2.64H67.21v-7h2.63a2.27,2.27,0,0,1,1.63.62,2,2,0,0,1,.64,1.55,2.08,2.08,0,0,1-1.41,2l1.62,2.78ZM69.8,49.21H68.26v2.28H69.8a1.31,1.31,0,0,0,.91-.32,1.06,1.06,0,0,0,.34-.82,1,1,0,0,0-.35-.82A1.24,1.24,0,0,0,69.8,49.21Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-1",
    d: "M82.67,53.45a3,3,0,0,1-1.25,1.24,3.64,3.64,0,0,1-1.8.45H77.28v-7h2.34a3.71,3.71,0,0,1,1.79.44,3.2,3.2,0,0,1,1.26,1.24,3.79,3.79,0,0,1,0,3.58Zm-.94-3.06a2.27,2.27,0,0,0-.86-.88,2.58,2.58,0,0,0-1.28-.31H78.37v4.94h1.22a2.41,2.41,0,0,0,2.46-2.48A2.74,2.74,0,0,0,81.73,50.39Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-1",
    d: "M90.71,52.72H89.27v2.42h-1v-7h2.48a2.28,2.28,0,0,1,1.64.65A2.17,2.17,0,0,1,93,50.46a2.2,2.2,0,0,1-.66,1.61A2.3,2.3,0,0,1,90.71,52.72Zm0-3.5h-1.4v2.47h1.4a1.28,1.28,0,0,0,.92-.35,1.16,1.16,0,0,0,.37-.88,1.15,1.15,0,0,0-.37-.88A1.25,1.25,0,0,0,90.67,49.22Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-1",
    d: "M101.79,55.14l-1.44-2.64H99v2.64H98v-7h2.63a2.25,2.25,0,0,1,1.62.62,2,2,0,0,1,.65,1.55,2.09,2.09,0,0,1-.38,1.23,2.15,2.15,0,0,1-1,.77l1.62,2.78Zm-1.25-5.93H99v2.28h1.55a1.33,1.33,0,0,0,.91-.32,1.06,1.06,0,0,0,.34-.82,1,1,0,0,0-.35-.82A1.24,1.24,0,0,0,100.54,49.21Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-1",
    d: "M109.05,49.21v1.86h3v1h-3v2h3v1H108v-7h4.07v1Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-1",
    d: "M120.48,55a3.3,3.3,0,0,1-1.24.24,2.89,2.89,0,0,1-1.33-.3,2.18,2.18,0,0,1-.92-.86,2.37,2.37,0,0,1-.32-1.28h1.06a1.31,1.31,0,0,0,.41,1,1.51,1.51,0,0,0,1.09.38,1.57,1.57,0,0,0,1-.3.89.89,0,0,0,.39-.75.82.82,0,0,0-.1-.4.78.78,0,0,0-.26-.26.82.82,0,0,0-.22-.12l-.19-.08-.25-.07-.26-.08-.29-.06c-.46-.12-.83-.23-1.12-.33a1.63,1.63,0,0,1-1.1-1.31,1.78,1.78,0,0,1,0-.34,1.75,1.75,0,0,1,.64-1.44,2.63,2.63,0,0,1,1.73-.54,2.4,2.4,0,0,1,1.71.61,2.16,2.16,0,0,1,.63,1.65h-1a1.18,1.18,0,0,0-.37-.9,1.37,1.37,0,0,0-1-.34,1.6,1.6,0,0,0-1,.26.8.8,0,0,0-.36.66.72.72,0,0,0,.15.45,1.23,1.23,0,0,0,.41.29l.28.11A2.37,2.37,0,0,0,119,51a15.19,15.19,0,0,1,1.48.43,1.68,1.68,0,0,1,1.15,1.3,3.32,3.32,0,0,1,0,.41,2,2,0,0,1-.33,1.13A2,2,0,0,1,120.48,55Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-1",
    d: "M130.08,55a3.3,3.3,0,0,1-1.24.24,2.86,2.86,0,0,1-1.33-.3,2.13,2.13,0,0,1-.92-.86,2.37,2.37,0,0,1-.32-1.28h1.06a1.28,1.28,0,0,0,.41,1,1.48,1.48,0,0,0,1.09.38,1.59,1.59,0,0,0,1-.3.89.89,0,0,0,.39-.75.82.82,0,0,0-.1-.4.78.78,0,0,0-.26-.26.92.92,0,0,0-.23-.12l-.18-.08-.25-.07-.27-.08-.28-.06c-.46-.12-.84-.23-1.12-.33a1.62,1.62,0,0,1-1.1-1.31,1.72,1.72,0,0,1,0-.34,1.76,1.76,0,0,1,.65-1.44,2.6,2.6,0,0,1,1.72-.54,2.37,2.37,0,0,1,1.71.61,2.2,2.2,0,0,1,.64,1.65h-1a1.18,1.18,0,0,0-.36-.9,1.41,1.41,0,0,0-1-.34,1.56,1.56,0,0,0-.94.26.8.8,0,0,0-.36.66.72.72,0,0,0,.15.45,1.13,1.13,0,0,0,.41.29,1.8,1.8,0,0,0,.28.11,1.93,1.93,0,0,0,.33.09c.71.18,1.2.32,1.49.43a1.68,1.68,0,0,1,1.15,1.3,3.17,3.17,0,0,1,0,.41,2,2,0,0,1-.32,1.13A2.09,2.09,0,0,1,130.08,55Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-1",
    d: "M144.64,49.2v5.94h-1V49.2h-2v-1h5.1v1Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-1",
    d: "M155.79,55.14V52.08h-3.24v3.06H151.5v-7h1.05v2.86h3.24V48.19h1.05v7Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-1",
    d: "M163.44,49.21v1.86h3v1h-3v2h3v1h-4.05v-7h4.06v1Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-1",
    d: "M178.61,55.14l-.84-5-2.22,5h-.37l-2.22-5-.85,5H171l1.18-7h1L175.36,53l2.18-4.85h1l1.15,7Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-1",
    d: "M185.77,49.21v1.86h3v1h-3v2h3v1h-4.06v-7h4.07v1Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-2",
    d: "M1,29V45H2.59c7.46,0,12.71-7.16,14.79-20.16l.3-1.84H1v3H13.15C12,31.69,9.54,39.39,4,40.57V29Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-2",
    d: "M4,13.38A8.32,8.32,0,0,1,5.79,8.22l5.11,5.32a2.56,2.56,0,0,0,1.65,1,1.5,1.5,0,0,0,1-.39l.14-.13,5.56-5.78A8.32,8.32,0,0,1,21,13.38V14h3v-.64a11.59,11.59,0,0,0-2.72-7.46L23.9,3.15,21.64,1,19,3.82A11.43,11.43,0,0,0,6,3.82C4.54,2.22,3.4,1,3.36,1L1.1,3.15,3.72,5.92A11.59,11.59,0,0,0,1,13.38V14H4Zm8.81-8.71A8.34,8.34,0,0,1,17.1,5.85l-4.29,4.5L8.53,5.85A8.31,8.31,0,0,1,12.81,4.67Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-2",
    d: "M18,56,14.64,45.94A29.1,29.1,0,0,0,21.17,34.5,60.5,60.5,0,0,0,24,18.61L24,17H1v3H20.92c-.45,6.17-3.13,28-18.35,28H1v3H2.55a18,18,0,0,0,3.78-.4L8.14,56H1v3H24V56ZM9.64,49.58A16.43,16.43,0,0,0,12.41,48l2.67,8H11.8Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-1",
    d: "M48,21.24h1.41A2.92,2.92,0,0,0,52,20.14L60.73,8.4a3.41,3.41,0,0,1,1.36-1.16,4.63,4.63,0,0,1,1.82-.32h6.21l-11,14.23a7.06,7.06,0,0,1-2.23,2,6.4,6.4,0,0,1,1.51.87,7.32,7.32,0,0,1,1.29,1.43L71,41.61H64.6a5.3,5.3,0,0,1-1.06-.09,3.1,3.1,0,0,1-.78-.26,2.11,2.11,0,0,1-.58-.42,3.52,3.52,0,0,1-.45-.59L52.81,27.77a2.55,2.55,0,0,0-1.08-.92A4.44,4.44,0,0,0,50,26.57H48v15H40.81V6.92H48Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-1",
    d: "M81.26,12.54v8.92H92.84v5.43H81.26V36H96.14v5.61H74V6.92h22.1v5.62Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-1",
    d: "M139.75,6.92V41.61h-6.34V20.31c0-.45,0-.92,0-1.43s.07-1,.13-1.56l-9.92,18.82a2.65,2.65,0,0,1-2.51,1.55h-1a2.82,2.82,0,0,1-1.48-.39,2.79,2.79,0,0,1-1-1.16l-10-18.89c0,.56.09,1.1.12,1.61s0,1,0,1.45v21.3h-6.34V6.92h5.45l.82,0a2,2,0,0,1,.63.14,1.45,1.45,0,0,1,.5.33,2.56,2.56,0,0,1,.45.63L119,26.55c.31.56.59,1.13.85,1.72s.52,1.2.76,1.82c.24-.64.49-1.26.75-1.87s.54-1.18.85-1.74L131.88,8a2.57,2.57,0,0,1,.46-.63,1.59,1.59,0,0,1,.51-.33,2,2,0,0,1,.62-.14l.83,0Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-1",
    d: "M154.22,12.54v8.92h11.57v5.43H154.22V36h14.87v5.61H147V6.92h22.09v5.62Z",
    transform: "translate(-1 -0.98)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "cls-1",
    d: "M199,12.71H188.86v28.9h-7.19V12.71H171.53V6.92H199Z",
    transform: "translate(-1 -0.98)"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./src/common/push-history.js":
/*!************************************!*\
  !*** ./src/common/push-history.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var pushHistory = function pushHistory(tab) {
  if (tab) {
    var url = new URL(window.location);
    url.searchParams.set('tab', tab);
    window.history.pushState({}, '', url);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (pushHistory);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tabs_welcome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/welcome */ "./src/tabs/welcome.js");
/* harmony import */ var _tabs_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/system */ "./src/tabs/system.js");
/* harmony import */ var _tabs_support__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/support */ "./src/tabs/support.js");
/* harmony import */ var _layout_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/Header */ "./src/layout/Header.js");
/* harmony import */ var _common_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/Card */ "./src/common/Card.js");
/* harmony import */ var _common_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/Container */ "./src/common/Container.js");
/* harmony import */ var _store_panel_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/panel-store */ "./src/store/panel-store.js");
/* harmony import */ var _common_push_history__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/push-history */ "./src/common/push-history.js");











var __ = wp.i18n.__;
var _wp$components = wp.components,
    TabPanel = _wp$components.TabPanel,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody;

var RendeTabs = function RendeTabs() {
  var _useContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_panel_store__WEBPACK_IMPORTED_MODULE_8__["default"]),
      tabs = _useContext.tabs;

  var compare = function compare(a, b) {
    if (a.priority < b.priority) {
      return -1;
    }

    if (a.priority > b.priority) {
      return 1;
    }

    return 0;
  };

  var defaultTabs = [{
    name: 'welcome',
    title: __('Welcome', 'kemet'),
    className: 'welcome',
    priority: 5,
    data: {
      Component: _tabs_welcome__WEBPACK_IMPORTED_MODULE_2__["default"],
      props: {}
    }
  }, {
    name: 'support',
    title: __('Support', 'kemet'),
    className: 'support',
    priority: 25,
    data: {
      Component: _tabs_support__WEBPACK_IMPORTED_MODULE_4__["default"],
      props: {}
    }
  }, {
    name: 'system',
    title: __('System Info', 'kemet'),
    className: 'system',
    priority: 30,
    data: {
      Component: _tabs_system__WEBPACK_IMPORTED_MODULE_3__["default"],
      props: {}
    }
  }];
  var names = new Set(tabs.map(function (d) {
    return d.name;
  }));
  var mergedTabs = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(tabs), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(defaultTabs.filter(function (d) {
    return !names.has(d.name);
  })));
  tabs = mergedTabs;

  var onSelectHandler = function onSelectHandler(tabName) {
    Object(_common_push_history__WEBPACK_IMPORTED_MODULE_9__["default"])(tabName);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_layout_Header__WEBPACK_IMPORTED_MODULE_5__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TabPanel, {
    className: "kemet-dashboard-tab-panel",
    activeClass: "active-tab",
    initialTabName: KemetPanelData.kemet_redirect,
    onSelect: onSelectHandler,
    tabs: tabs.sort(compare)
  }, function (tab) {
    var _tab$data = tab.data,
        Component = _tab$data.Component,
        props = _tab$data.props;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Panel, {
      className: "tab-section ".concat(tab.name)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      opened: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Component, props)));
  }));
};

document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('kmt-dashboard')) {
    var sidebar = document.getElementById("adminmenuwrap"),
        sidebarHeight = sidebar.offsetHeight + 'px';
    document.getElementById("wpbody").style.minHeight = sidebarHeight;
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_store_panel_store__WEBPACK_IMPORTED_MODULE_8__["PanelProvider"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RendeTabs, null)), document.getElementById('kmt-dashboard'));
  }
});
window.KmtAdminComponents = {
  Card: _common_Card__WEBPACK_IMPORTED_MODULE_6__["default"],
  Container: _common_Container__WEBPACK_IMPORTED_MODULE_7__["default"]
};

/***/ }),

/***/ "./src/layout/Header.js":
/*!******************************!*\
  !*** ./src/layout/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/logo */ "./src/common/logo.js");


var __ = wp.i18n.__;

var Header = function Header() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "kmt-panel-header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "logo"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_common_logo__WEBPACK_IMPORTED_MODULE_1__["default"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "https://kemet.io/docs/",
    className: "docs kmt-button secondary",
    target: "_blank"
  }, __('Theme Documentation', 'kemet')));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/store/panel-store.js":
/*!**********************************!*\
  !*** ./src/store/panel-store.js ***!
  \**********************************/
/*! exports provided: PanelProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelProvider", function() { return PanelProvider; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var PanelContext = React.createContext({
  tabs: []
});
var PanelProvider = function PanelProvider(props) {
  var tabs = [];
  var tabsContext = {
    tabs: tabs
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelContext.Provider, {
    value: tabsContext
  }, props.children);
};
/* harmony default export */ __webpack_exports__["default"] = (PanelContext);

/***/ }),

/***/ "./src/tabs/support.js":
/*!*****************************!*\
  !*** ./src/tabs/support.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Card */ "./src/common/Card.js");
/* harmony import */ var _common_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Container */ "./src/common/Container.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




var __ = wp.i18n.__;
var Dashicon = wp.components.Dashicon;

var Support = function Support() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_common_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    className: "kmt-section-title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
    icon: "sos"
  })), __('Have a Question?', 'kemet-addons')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalGrid"], {
    columns: 3,
    gap: 8,
    className: "kmt-support"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_common_Card__WEBPACK_IMPORTED_MODULE_1__["default"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "kmt-card-title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    width: 40,
    height: 40,
    viewBox: "0 0 512 512"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M205.5,308.5l3.1,13.9h94.6l3.1-13.9c2.1-9.4,6.6-18.3,13.6-24.9c18.4-17.4,29.1-41.8,29.1-67.5c0-51.3-41.7-92.8-93-92.9\r c-51.3,0-93,41.6-93,92.9c0,25.7,10.7,50,29,67.5C198.9,290.3,203.4,299.1,205.5,308.5z M213,342.4l6.3,28.3\r c2.4,10.6,11.8,18.2,22.7,18.2h27.8c10.9,0,20.3-7.6,22.7-18.2l6.3-28.3H213z"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, __('Knowledge Base', 'kemet'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "kmt-card-body"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('Kemet Theme documentation library will guide you to build your next Kemet website easily without any need to touch a single line of code.', 'kemet'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "kmt-card-action"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    className: "kmt-button primary",
    target: "_blank",
    href: "#"
  }, __('Documentation', 'kemet')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_common_Card__WEBPACK_IMPORTED_MODULE_1__["default"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "kmt-card-title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    width: 40,
    height: 40,
    viewBox: "0 0 512 512"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    class: "st0",
    d: "M252.8,123.7c-64.4,0-102.9,36-102.9,96.3v23.4c-8.3,6.2-13.3,15.8-13.3,26.4c0,15.6,10.9,28.8,25.5,32.3\r c13.2,52.5,47.7,87.2,87.4,87.2c5.5,0,10-4.5,10-10s-4.5-10-10-10c-31.2,0-59.8-32.3-69.5-78.4c-1-4.6-5-7.9-9.7-7.9\r c-0.2,0-0.5,0-0.8,0c-7.1-0.2-12.9-6.1-12.9-13.3c0-5.1,2.9-9.6,7.6-11.8c3.5-1.7,5.7-5.2,5.7-9V231c25.6-6.7,41.6-20.4,50.2-29.9\r c10.9,6.6,32.4,15.5,69.3,15.5c14.3,0,26.6-1.3,36.5-2.9c1.6,4.7,3.3,11.5,3.3,19.5v66.4c0,16.6-13.3,29.9-29.9,29.9h-12.2\r c-3.8-8.1-12-13.3-21-13.3c-12.8,0-23.2,10.4-23.2,23.2c0,12.8,10.4,23.2,23.2,23.2c9,0,17.1-5.2,21-13.3h12.2\r c26.3,0,47.9-20.6,49.6-46.5h0.2c14.7,0,26.6-11.9,26.6-26.6v-13.3c0-14.7-11.9-26.6-26.6-26.6V233c0-9.7-1.9-18.3-3.9-24.5\r c3.9-2.2,7-5.5,8.8-9.6c2.4-5.4,2.3-11.5-0.2-16.8C336,145.1,299.2,123.7,252.8,123.7z M216.3,256.5c-7.3,0-13.3,5.9-13.3,13.3\r s5.9,13.3,13.3,13.3c7.3,0,13.3-5.9,13.3-13.3S223.7,256.5,216.3,256.5z M282.7,256.5c-7.3,0-13.3,6-13.2,13.3\r c0,7.1,5.6,12.9,12.7,13.2c0.2,0,0.4,0,0.6,0c7.3,0,13.3-5.9,13.3-13.3S290.1,256.5,282.7,256.5z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M252.6,123.2c-64.4,0-102.9,36-102.9,96.3v23.4c-8.3,6.2-13.3,15.8-13.3,26.4c0,15.6,10.9,28.8,25.5,32.3\r c13.2,52.5,47.7,87.2,87.4,87.2c5.5,0,10-4.5,10-10s-4.5-10-10-10c-31.2,0-59.8-32.3-69.5-78.4c-1-4.6-5-7.9-9.7-7.9\r c-0.2,0-0.5,0-0.8,0c-7.1-0.2-12.9-6.1-12.9-13.3c0-5.1,2.9-9.6,7.6-11.8c3.5-1.7,5.7-5.2,5.7-9v-17.9c25.6-6.7,41.6-20.4,50.2-29.9\r c10.9,6.6,32.4,15.5,69.3,15.5c14.3,0,26.6-1.3,36.5-2.9c1.6,4.7,3.3,11.5,3.3,19.5v66.4c0,16.6-13.3,29.9-29.9,29.9h-12.2\r c-3.8-8.1-12-13.3-21-13.3c-12.8,0-23.2,10.4-23.2,23.2s10.4,23.2,23.2,23.2c9,0,17.1-5.2,21-13.3h12.2c26.3,0,47.9-20.6,49.6-46.5\r h0.2c14.7,0,26.6-11.9,26.6-26.6v-13.3c0-14.7-11.9-26.6-26.6-26.6v-3.3c0-9.7-1.9-18.3-3.9-24.5c3.9-2.2,7-5.5,8.8-9.6\r c2.4-5.4,2.3-11.5-0.2-16.8C335.8,144.6,299,123.2,252.6,123.2z M216.1,256c-7.3,0-13.3,5.9-13.3,13.3s5.9,13.3,13.3,13.3\r c7.3,0,13.3-5.9,13.3-13.3S223.5,256,216.1,256z M282.5,256c-7.3,0-13.3,6-13.2,13.3c0,7.1,5.6,12.9,12.7,13.2c0.2,0,0.4,0,0.6,0\r c7.3,0,13.3-5.9,13.3-13.3S289.9,256,282.5,256z"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, __('Need Help?', 'kemet'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "kmt-card-body"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('Have a question? Kemet support team is here to help you by answering your questions and handling your issues within 24-48 hours.', 'kemet'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "kmt-card-action"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    className: "kmt-button primary",
    target: "_blank",
    href: "#"
  }, __('Submit a Ticket', 'kemet')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_common_Card__WEBPACK_IMPORTED_MODULE_1__["default"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "kmt-card-title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    width: 40,
    height: 40,
    viewBox: "0 0 512 512"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    id: "svgexport-28_2_",
    d: "M163.1,222.8c-18.3,0-33.2,14.9-33.2,33.2s14.9,33.2,33.2,33.2s33.2-14.9,33.2-33.2\r S181.4,222.8,163.1,222.8z M256,222.8c-22,0-39.8,17.8-39.8,39.8s17.8,39.8,39.8,39.8s39.8-17.8,39.8-39.8S278,222.8,256,222.8z\r M206.1,311.7c-3-1.7-6.4-2.6-9.8-2.6h-66.4c-11,0-19.9,8.9-19.9,19.9v4c0,20.1,23.3,35.9,53.1,35.9c7.9,0,15.7-1.1,23.2-3.5\r c-2.2-5.2-3.3-10.8-3.3-16.4v-3.3C183,330.7,192.1,317.2,206.1,311.7z M348.9,222.8c-18.3,0-33.2,14.9-33.2,33.2\r s14.9,33.2,33.2,33.2s33.2-14.9,33.2-33.2S367.3,222.8,348.9,222.8z M382.1,309h-66.4c-3.4,0-6.8,0.9-9.8,2.6\r c13.9,5.5,23.1,18.9,23.1,33.9v3.3c0,5.6-1.1,11.2-3.3,16.4c7.5,2.4,15.4,3.6,23.2,3.5c29.8,0,53.1-15.7,53.1-35.9v-4\r C402,318,393.1,309,382.1,309z M305.8,222.8c-2.6,0-5.2-1-7-2.9l-17-17h-22.4c-12.8,0-23.2-10.4-23.2-23.2v-33.2\r c0-12.8,10.4-23.2,23.2-23.2h92.9c12.8,0,23.2,10.4,23.2,23.2v33.2c0,12.8-10.4,23.2-23.2,23.2h-22.4l-17,17\r C311,221.8,308.4,222.8,305.8,222.8z M256,388.8c-33.5,0-59.8-17.5-59.8-39.8v-3.3c0-12.8,10.4-23.2,23.2-23.2h73\r c12.8,0,23.2,10.4,23.2,23.2v3.3C315.8,371.2,289.5,388.8,256,388.8z"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, __('Follow us', 'kemet'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "kmt-card-body"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('Come and join our Facebook group! Share your thoughts, opinions, suggestions, and help others. You will always be more than welcome!', 'kemet'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "kmt-card-action"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    className: "kmt-button primary",
    target: "_blank",
    href: "#"
  }, __('Facebook Group', 'kemet'))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Support);

/***/ }),

/***/ "./src/tabs/system.js":
/*!****************************!*\
  !*** ./src/tabs/system.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Container */ "./src/common/Container.js");




var Dashicon = wp.components.Dashicon;

var System = function System() {
  var _KemetPanelData = KemetPanelData,
      system_info = _KemetPanelData.system_info;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_common_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    className: "kmt-section-title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
    icon: "edit"
  })), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Useful Information', 'kemet-addons')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "system-info"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    className: "widefat",
    cellspacing: "0"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
    colspan: "2"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('WordPress Environment', 'kemet')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Home URL', 'kemet')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, system_info.home_url)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Site URL', 'kemet')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, system_info.site_url)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('WP Version', 'kemet')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, system_info.version)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('WP Multisite', 'kemet')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    dangerouslySetInnerHTML: {
      __html: system_info.multisite ? '&#10004;' : '&ndash;'
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('WP Memory Limit', 'kemet')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("mark", null, system_info.memory_limit_size, " ", system_info.memory_limit < 67108864 && Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('We recommend setting wp memory at least 64MB.', 'kemet')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Theme Version', 'kemet')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, system_info.theme_version)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('WP Path', 'kemet')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, system_info.wp_path)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('WP Debug Mode', 'kemet')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    dangerouslySetInnerHTML: {
      __html: system_info.debug ? '&#10004;' : '&ndash;'
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Language', 'kemet')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, system_info.lang)))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    className: "widefat",
    cellspacing: "0"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
    colspan: "2"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Server Environment', 'kemet')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Server Info', 'kemet')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, system_info.server)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('PHP Version', 'kemet')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, system_info.php_version ? system_info.php_version : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Couldn't determine PHP version because phpversion() doesn't exist.", 'kemet'))), system_info.ini_get && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('PHP Memory Limit', 'kemet')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, system_info.memory_limit)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('PHP Post Max Size', 'kemet')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, system_info.post_max_size)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('PHP Time Limit', 'kemet')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("mark", null, system_info.max_execution_time, " ", system_info.memory_limit < 60 && 0 != system_info.memory_limit && Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('We recommend setting max execution time at least 60.', 'kemet')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('PHP Max Input Vars', 'kemet')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, system_info.max_input_vars)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('SUHOSIN Installed', 'kemet')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    dangerouslySetInnerHTML: {
      __html: system_info.suhosin ? '&#10004;' : '&ndash;'
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('MySQL Version', 'kemet')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, system_info.mysql_version))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    className: "widefat",
    cellspacing: "0"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
    colspan: "2"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Active Plugins', 'kemet')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object.keys(system_info.active_plugins).length > 0 && Object.keys(system_info.active_plugins).map(function (plugin) {
    var pluginData = system_info.active_plugins[plugin];
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, pluginData.PluginURI ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: pluginData.PluginURI,
      target: "_blank",
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Visit plugin homepage', 'kemet')
    }, pluginData.name) : pluginData.name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      dangerouslySetInnerHTML: {
        __html: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('by', 'kemet') + ' - ' + pluginData.author + ' - ' + pluginData.version
      }
    }));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (System);

/***/ }),

/***/ "./src/tabs/welcome.js":
/*!*****************************!*\
  !*** ./src/tabs/welcome.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Container */ "./src/common/Container.js");


var __ = wp.i18n.__;
var Dashicon = wp.components.Dashicon;

var WelcomeTab = function WelcomeTab(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_common_Container__WEBPACK_IMPORTED_MODULE_1__["default"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "welcome-section"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    className: "kmt-section-title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
    icon: "admin-customizer"
  })), __('Welcome', 'kemet'))));
};

/* harmony default export */ __webpack_exports__["default"] = (WelcomeTab);

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map