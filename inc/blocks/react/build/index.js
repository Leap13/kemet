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

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./src/Blocks/logo.js":
/*!****************************!*\
  !*** ./src/Blocks/logo.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


function addLogoAttribute(settings, name) {
  if (typeof settings.attributes !== 'undefined') {
    if (name == 'core/site-logo') {
      settings.attributes = Object.assign(settings.attributes, {
        mobileLogoId: {
          type: 'number',
          default: 0
        },
        mobileLogoUrl: {
          type: 'string',
          default: ''
        }
      });
    }
  }

  return settings;
}

wp.hooks.addFilter('blocks.registerBlockType', 'kemet/logo-advanced-control', addLogoAttribute);
var logoAdvancedControls = wp.compose.createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var Fragment = wp.element.Fragment;
    var _wp$components = wp.components,
        PanelBody = _wp$components.PanelBody,
        Button = _wp$components.Button,
        ResponsiveWrapper = _wp$components.ResponsiveWrapper;
    var _wp$blockEditor = wp.blockEditor,
        InspectorControls = _wp$blockEditor.InspectorControls,
        MediaUpload = _wp$blockEditor.MediaUpload,
        MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
    var attributes = props.attributes,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;
    var __ = wp.i18n.__;

    var removeMedia = function removeMedia() {
      setAttributes({
        mobileLogoId: 0,
        mobileLogoUrl: ''
      });
    };

    var onSelectMedia = function onSelectMedia(media) {
      setAttributes({
        mobileLogoId: media.id,
        mobileLogoUrl: media.url
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), isSelected && props.name == 'core/site-logo' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Mobile logo', 'kemet'),
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "editor-post-featured-image"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSelectMedia,
      value: attributes.mobileLogoId,
      allowedTypes: ['image'],
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: attributes.mobileLogoId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
          onClick: open
        }, attributes.mobileLogoId == 0 && __('Choose an logo', 'kemet'), attributes.mobileLogoUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ResponsiveWrapper, {
          naturalWidth: 100,
          naturalHeight: 100
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          src: attributes.mobileLogoUrl
        })));
      }
    })), attributes.mobileLogoId != 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      onClick: removeMedia,
      isLink: true,
      isDestructive: true
    }, __('Remove logo', 'kemet')))))));
  };
}, 'logoAdvancedControls');
wp.hooks.addFilter('editor.BlockEdit', 'kemet/logo-advanced-control', logoAdvancedControls);

/***/ }),

/***/ "./src/Blocks/separator.js":
/*!*********************************!*\
  !*** ./src/Blocks/separator.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





function addSeparatorAttribute(settings, name) {
  if (typeof settings.attributes !== 'undefined') {
    if (name == 'core/separator') {
      settings.attributes = Object.assign(settings.attributes, {
        style: {
          type: 'object',
          default: {}
        }
      });
    }
  }

  return settings;
}

wp.hooks.addFilter('blocks.registerBlockType', 'kemet/separator-control', addSeparatorAttribute);
var separatorAdvancedControls = wp.compose.createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var Fragment = wp.element.Fragment;
    var InspectorControls = wp.blockEditor.InspectorControls;
    var attributes = props.attributes,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;
    var _attributes$style = attributes.style,
        style = _attributes$style === void 0 ? {} : _attributes$style,
        _attributes$style2 = attributes.style;
    _attributes$style2 = _attributes$style2 === void 0 ? {} : _attributes$style2;
    var _attributes$style2$sp = _attributes$style2.spacing,
        spacing = _attributes$style2$sp === void 0 ? {} : _attributes$style2$sp;
    var __ = wp.i18n.__;
    var defaultSpacing = {
      top: null,
      left: null,
      right: null,
      bottom: null
    };

    var resetAll = function resetAll() {
      var newStyle = _objectSpread(_objectSpread({}, style), {}, {
        spacing: _objectSpread(_objectSpread({}, style === null || style === void 0 ? void 0 : style.spacing), {}, {
          padding: defaultSpacing,
          margin: defaultSpacing
        })
      });

      setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        style: Object(_utils_index__WEBPACK_IMPORTED_MODULE_3__["cleanEmptyObject"])(newStyle)
      }));
    };

    var onChangeHandler = function onChangeHandler(key, value) {
      var newStyle = _objectSpread(_objectSpread({}, style), {}, {
        spacing: _objectSpread(_objectSpread({}, style === null || style === void 0 ? void 0 : style.spacing), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, value))
      });

      setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        style: Object(_utils_index__WEBPACK_IMPORTED_MODULE_3__["cleanEmptyObject"])(newStyle)
      }));
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props), isSelected && props.name == 'core/separator' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalToolsPanel"], {
      label: __('Dimensions'),
      resetAll: resetAll
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalToolsPanelItem"], {
      hasValue: function hasValue() {
        return !!spacing.padding && Object.keys(spacing.padding).length;
      },
      label: __('Padding'),
      onDeselect: function onDeselect() {
        return onChangeHandler('padding', defaultSpacing);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalBoxControl"], {
      label: __('Padding'),
      values: spacing.padding,
      onChange: function onChange(nextValues) {
        return onChangeHandler('padding', nextValues);
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalToolsPanelItem"], {
      hasValue: function hasValue() {
        return !!spacing.margin && Object.keys(spacing.margin).length;
      },
      label: __('Margin'),
      onDeselect: function onDeselect() {
        return onChangeHandler('margin', defaultSpacing);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalBoxControl"], {
      label: __('Margin'),
      values: spacing.margin,
      onChange: function onChange(nextValues) {
        return onChangeHandler('margin', nextValues);
      }
    })))));
  };
}, 'separatorAdvancedControls');
wp.hooks.addFilter('editor.BlockEdit', 'kemet/separator-control', separatorAdvancedControls);

function separatorApplyExtraStyles(extraProps, blockType, attributes) {
  if (blockType.name === 'core/separator') {
    var style = attributes.style;

    if (style) {
      extraProps.style = _objectSpread(_objectSpread({}, Object(_utils_index__WEBPACK_IMPORTED_MODULE_3__["getInlineStyles"])(style)), extraProps.style);
    }
  }

  return extraProps;
}

wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'kemet/separator-control', separatorApplyExtraStyles); // function addBackgroundColorStyle(props) {
//     return lodash.assign(props, { style: { backgroundColor: 'red' } });
// }
// wp.hooks.addFilter(
//     'blocks.getSaveContent.extraProps',
//     'my-plugin/add-background-color-style',
//     addBackgroundColorStyle
// );

/***/ }),

/***/ "./src/Blocks/template-parts.js":
/*!**************************************!*\
  !*** ./src/Blocks/template-parts.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);






function addHeaderPartAttribute(settings, name) {
  if (typeof settings.attributes !== 'undefined') {
    if (name == 'core/template-part') {
      settings.attributes = Object.assign(settings.attributes, {
        enableStickyHeader: {
          type: 'boolean',
          default: false
        },
        enableOverlayHeader: {
          type: 'boolean',
          default: false
        },
        enableStickyFooter: {
          type: 'boolean',
          default: false
        }
      });
    }
  }

  return settings;
}

wp.hooks.addFilter('blocks.registerBlockType', 'kemet/header-part-control', addHeaderPartAttribute);
var headerPartControls = wp.compose.createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var Fragment = wp.element.Fragment;
    var _wp$components = wp.components,
        PanelBody = _wp$components.PanelBody,
        ToggleControl = _wp$components.ToggleControl;
    var InspectorControls = wp.blockEditor.InspectorControls;
    var attributes = props.attributes,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;
    var __ = wp.i18n.__;
    var templateType;

    if (props.name == 'core/template-part') {
      templateType = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(function (select) {
        if (!select('core/edit-site')) {
          return;
        }

        var _select$getCurrentThe = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__["store"]).getCurrentTheme(),
            theme = _select$getCurrentThe.template;

        var _select = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__["store"]),
            getEditedEntityRecord = _select.getEditedEntityRecord;

        var getEntityArgs = ['postType', 'wp_template_part', "".concat(theme, "//").concat(attributes.slug)];
        var entityRecord = getEditedEntityRecord.apply(void 0, getEntityArgs);
        var type = (entityRecord === null || entityRecord === void 0 ? void 0 : entityRecord.area) || (entityRecord === null || entityRecord === void 0 ? void 0 : entityRecord.slug);
        return type;
      }, [attributes]);
    }

    var onChangeHandler = function onChangeHandler(key, value) {
      setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, value));
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props), isSelected && props.name == 'core/template-part' && templateType === 'header' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Kemet Settings', 'kemet'),
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Enable Sticky Header', 'kemet'),
      checked: !!attributes.enableStickyHeader,
      onChange: function onChange(newval) {
        return onChangeHandler('enableStickyHeader', newval);
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Enable Overlay Header', 'kemet'),
      checked: !!attributes.enableOverlayHeader,
      onChange: function onChange(newval) {
        return onChangeHandler('enableOverlayHeader', newval);
      }
    }))), isSelected && props.name == 'core/template-part' && templateType === 'footer' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Kemet Settings', 'kemet'),
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
      label: __('Enable Sticky Footer', 'kemet'),
      checked: !!attributes.enableStickyFooter,
      onChange: function onChange(newval) {
        return onChangeHandler('enableStickyFooter', newval);
      }
    }))));
  };
}, 'headerPartControls');
wp.hooks.addFilter('editor.BlockEdit', 'kemet/header-part-control', headerPartControls);

/***/ }),

/***/ "./src/EditorSidebar.js":
/*!******************************!*\
  !*** ./src/EditorSidebar.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_edit_site__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/edit-site */ "@wordpress/edit-site");
/* harmony import */ var _wordpress_edit_site__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_site__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/block-library */ "@wordpress/block-library");
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _readymade_templates__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./readymade-templates */ "./src/readymade-templates.js");
/* harmony import */ var _options_ImageRadio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./options/ImageRadio */ "./src/options/ImageRadio.js");


/**
* WordPress dependencies
*/














var MyPluginSidebar = function MyPluginSidebar() {
  var readymadeHeaders = _readymade_templates__WEBPACK_IMPORTED_MODULE_11__["default"].headers;

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["store"]),
      removeBlocks = _useDispatch.removeBlocks,
      insertBlocks = _useDispatch.insertBlocks,
      replaceBlocks = _useDispatch.replaceBlocks;

  var _useSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["store"]),
      getSelectedBlockClientIds = _useSelect.getSelectedBlockClientIds,
      getBlockRootClientId = _useSelect.getBlockRootClientId,
      getBlocks = _useSelect.getBlocks,
      getBlock = _useSelect.getBlock;

  var gbCodeBlockHtml = '<!-- wp:pattern {"slug":"kemet/footer"} /-->';
  var codeBlockInstance = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__["parse"])(gbCodeBlockHtml); // console.log(useDispatch(blockEditorStore));

  var test = function test(header) {
    var allBlocks = getBlocks();
    var allBlockClientIds = allBlocks.map(function (block) {
      return block.clientId;
    });

    if (allBlockClientIds.length) {
      var readymadeTemplate = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__["parse"])(header); // removeBlocks(allBlockClientIds);
      // console.log(readymadeTemplate);

      replaceBlocks(allBlockClientIds, readymadeTemplate);
    }
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_edit_site__WEBPACK_IMPORTED_MODULE_7__["PluginSidebarMoreMenuItem"], {
    target: "kemet",
    className: "kmt-sidebar",
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      className: "kmt-svg-icon",
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 23 58.04"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M1,28V44H2.59c7.46,0,12.71-7.16,14.79-20.15l.3-1.85H1v3H13.15C12,30.68,9.54,38.37,4,39.55V28Z",
      transform: "translate(-1 0.04)"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M4,12.36A8.32,8.32,0,0,1,5.79,7.2l5.11,5.32a2.56,2.56,0,0,0,1.65,1,1.5,1.5,0,0,0,1-.39l.14-.13L19.21,7.2A8.32,8.32,0,0,1,21,12.36V13h3v-.64A11.59,11.59,0,0,0,21.28,4.9L23.9,2.13,21.64,0,19,2.8A11.43,11.43,0,0,0,6,2.8C4.54,1.2,3.4,0,3.36,0L1.1,2.13,3.72,4.9A11.59,11.59,0,0,0,1,12.36V13H4Zm8.81-8.71A8.34,8.34,0,0,1,17.1,4.83L12.81,9.34,8.53,4.83A8.31,8.31,0,0,1,12.81,3.65Z",
      transform: "translate(-1 0.04)"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M18,55,14.64,44.92a29.1,29.1,0,0,0,6.53-11.44A60.5,60.5,0,0,0,24,17.59L24,16H1v3H20.92c-.45,6.17-3.13,28-18.35,28H1v3H2.55a18,18,0,0,0,3.78-.4L8.14,55H1v3H24V55ZM9.64,48.56A16.38,16.38,0,0,0,12.41,47l2.67,8H11.8Z",
      transform: "translate(-1 0.04)"
    }))
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Kemet Templates', 'kemet')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_edit_site__WEBPACK_IMPORTED_MODULE_7__["PluginSidebar"], {
    name: "kemet",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Kemet Templates'),
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      className: "kmt-svg-icon",
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 23 58.04"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M1,28V44H2.59c7.46,0,12.71-7.16,14.79-20.15l.3-1.85H1v3H13.15C12,30.68,9.54,38.37,4,39.55V28Z",
      transform: "translate(-1 0.04)"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M4,12.36A8.32,8.32,0,0,1,5.79,7.2l5.11,5.32a2.56,2.56,0,0,0,1.65,1,1.5,1.5,0,0,0,1-.39l.14-.13L19.21,7.2A8.32,8.32,0,0,1,21,12.36V13h3v-.64A11.59,11.59,0,0,0,21.28,4.9L23.9,2.13,21.64,0,19,2.8A11.43,11.43,0,0,0,6,2.8C4.54,1.2,3.4,0,3.36,0L1.1,2.13,3.72,4.9A11.59,11.59,0,0,0,1,12.36V13H4Zm8.81-8.71A8.34,8.34,0,0,1,17.1,4.83L12.81,9.34,8.53,4.83A8.31,8.31,0,0,1,12.81,3.65Z",
      transform: "translate(-1 0.04)"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M18,55,14.64,44.92a29.1,29.1,0,0,0,6.53-11.44A60.5,60.5,0,0,0,24,17.59L24,16H1v3H20.92c-.45,6.17-3.13,28-18.35,28H1v3H2.55a18,18,0,0,0,3.78-.4L8.14,55H1v3H24V55ZM9.64,48.56A16.38,16.38,0,0,0,12.41,47l2.67,8H11.8Z",
      transform: "translate(-1 0.04)"
    }))
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_options_ImageRadio__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Header Templates', 'kemet'),
    options: readymadeHeaders,
    onChange: function onChange(headerContent) {
      return test(headerContent);
    },
    getValue: getBlocks
  }))));
};

Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_6__["registerPlugin"])('kemet', {
  render: function render() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MyPluginSidebar, null);
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blocks_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blocks/logo */ "./src/Blocks/logo.js");
/* harmony import */ var _Blocks_separator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blocks/separator */ "./src/Blocks/separator.js");
/* harmony import */ var _Blocks_template_parts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Blocks/template-parts */ "./src/Blocks/template-parts.js");
/* harmony import */ var _EditorSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorSidebar */ "./src/EditorSidebar.js");



 // Test
// import { compose } from '@wordpress/compose'
// import { withSelect, withDispatch } from '@wordpress/data'
// import { useSelect, useDispatch } from '@wordpress/data';
// import { store as coreDataStore } from '@wordpress/core-data';
// import { registerPlugin } from '@wordpress/plugins'
// import { Fragment } from 'react'
// import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-site'
// import { useState } from 'react'
// const { PanelBody, ToggleControl } = wp.components;
// const { __ } = wp.i18n;
// const Test = ({ currentStoreSettings, onChange }) => {
//     const [value, setValue] = useState(false);
//     const {
//         updateSettings
//     } = useDispatch('core/edit-site');
//     const onChangeHandler = (value) => {
//         setValue(value);
//         console.log(currentStoreSettings);
//         updateSettings({ ...currentStoreSettings, flag: !true });
//     }
//     return <PluginSidebar
//         className="kmt-post-options"
//         isPinnable={true}
//         icon={
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 23 58.04" className='kmt-sidebar-icon'><path d="M1,28V44H2.59c7.46,0,12.71-7.16,14.79-20.15l.3-1.85H1v3H13.15C12,30.68,9.54,38.37,4,39.55V28Z" transform="translate(-1 0.04)" /><path d="M4,12.36A8.32,8.32,0,0,1,5.79,7.2l5.11,5.32a2.56,2.56,0,0,0,1.65,1,1.5,1.5,0,0,0,1-.39l.14-.13L19.21,7.2A8.32,8.32,0,0,1,21,12.36V13h3v-.64A11.59,11.59,0,0,0,21.28,4.9L23.9,2.13,21.64,0,19,2.8A11.43,11.43,0,0,0,6,2.8C4.54,1.2,3.4,0,3.36,0L1.1,2.13,3.72,4.9A11.59,11.59,0,0,0,1,12.36V13H4Zm8.81-8.71A8.34,8.34,0,0,1,17.1,4.83L12.81,9.34,8.53,4.83A8.31,8.31,0,0,1,12.81,3.65Z" transform="translate(-1 0.04)" /><path d="M18,55,14.64,44.92a29.1,29.1,0,0,0,6.53-11.44A60.5,60.5,0,0,0,24,17.59L24,16H1v3H20.92c-.45,6.17-3.13,28-18.35,28H1v3H2.55a18,18,0,0,0,3.78-.4L8.14,55H1v3H24V55ZM9.64,48.56A16.38,16.38,0,0,0,12.41,47l2.67,8H11.8Z" transform="translate(-1 0.04)" /></svg>
//         }
//         name="theme-meta-panel"
//         title={__('Kemet Settings', 'kemet')}
//     >
//         <ToggleControl
//             label={__('Enable Sticky Header', 'kemet')}
//             checked={value}
//             onChange={(newval) => onChangeHandler(newval)}
//         />
//     </PluginSidebar>
// }
// const KemetOptionsComposed = compose(
//     withSelect((select) => {
//         const { getSettings } = useSelect('core/edit-site');
//         const currentStoreSettings = getSettings();
//         // console.log(select(coreDataStore).getEntityRecordEdits(), 'kemet');
//         // console.log(select('core/edit-site'));
//         const postMeta = select('core/editor').getEditedPostAttribute('meta');
//         const oldPostMeta = select('core/editor').getCurrentPostAttribute('meta');
//         return {
//             currentStoreSettings: currentStoreSettings
//         };
//     }),
//     withDispatch((dispatch) => ({
//         onChange: (currentStoreSettings) => dispatch('core/edit-site').updateSettings({
//             ...currentStoreSettings,
//             kemet: [],
//         }),
//     })),
//     // withDispatch((dispatch) => {
//     //     const { getSettings } = useSelect('core/edit-site');
//     //     const currentStoreSettings = getSettings();
//     //     console.log(getSettings());
//     //     console.log(dispatch(coreDataStore), 'kemet dispatch2');
//     //     console.log(dispatch('core/edit-site').updateSettings({
//     //         ...currentStoreSettings,
//     //         kemet: {},
//     //     }), 'kemet dispatch');
//     //     dispatch('core/edit-site').updateSettings({
//     //         ...currentStoreSettings,
//     //         styles: [],
//     //     })
//     // }),
// )(Test);
// registerPlugin('kemet', {
//     render: () => <KemetOptionsComposed name="kemet" />,
// })

/***/ }),

/***/ "./src/options/ImageRadio.js":
/*!***********************************!*\
  !*** ./src/options/ImageRadio.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageRadio_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageRadio.scss */ "./src/options/ImageRadio.scss");
/* harmony import */ var _ImageRadio_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ImageRadio_scss__WEBPACK_IMPORTED_MODULE_2__);




var ImageRadio = function ImageRadio(props) {
  var options = props.options,
      title = props.title,
      onChange = props.onChange,
      getValue = props.getValue;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "kmt-control kmt-image-radio-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    className: "kmt-control-title"
  }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "kmt-control-content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["__experimentalGrid"], {
    columns: 1,
    gap: 1
  }, Object.keys(options).map(function (optionKey) {
    var optionData = options[optionKey];
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "kmt-radio-option",
      onClick: function onClick(e) {
        var parent = e.target.closest('.kmt-control-content');
        parent.querySelectorAll('.kmt-radio-option').forEach(function (e) {
          e.classList.remove('active');
        });
        e.target.parentNode.classList.add('active');
        onChange(optionData.content);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: optionData.image,
      alt: optionData.title
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageRadio);

/***/ }),

/***/ "./src/options/ImageRadio.scss":
/*!*************************************!*\
  !*** ./src/options/ImageRadio.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/readymade-templates.js":
/*!************************************!*\
  !*** ./src/readymade-templates.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

var readymadeTemplates = {
  headers: {
    header1: {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Header 1', 'kemet'),
      image: "".concat(KemetBlocksSettingsData.themeUrl, "assets/headers/header-layout-01.svg"),
      content: '<!-- wp:pattern {"slug":"kemet/header"} /-->'
    },
    header2: {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Header 2', 'kemet'),
      image: "".concat(KemetBlocksSettingsData.themeUrl, "assets/headers/header-layout-02.svg"),
      content: '<!-- wp:pattern {"slug":"kemet/header-with-top-bar"} /-->'
    },
    header3: {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Header 3', 'kemet'),
      image: "".concat(KemetBlocksSettingsData.themeUrl, "assets/headers/header-layout-03.svg"),
      content: '<!-- wp:pattern {"slug":"kemet/footer"} /-->'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (readymadeTemplates);

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: cleanEmptyObject, getInlineStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanEmptyObject", function() { return cleanEmptyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInlineStyles", function() { return getInlineStyles; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External dependencies
 */


/**
 * Removed falsy values from nested object.
 *
 * @param {*} object
 * @return {*} Object cleaned from falsy values
 */

var cleanEmptyObject = function cleanEmptyObject(object) {
  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isObject"])(object) || Array.isArray(object)) {
    return object;
  }

  var cleanedNestedObjects = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["pickBy"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["mapValues"])(object, cleanEmptyObject), lodash__WEBPACK_IMPORTED_MODULE_1__["identity"]);
  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(cleanedNestedObjects) ? undefined : cleanedNestedObjects;
};
var VARIABLE_REFERENCE_PREFIX = 'var:';
var VARIABLE_PATH_SEPARATOR_TOKEN_ATTRIBUTE = '|';
var VARIABLE_PATH_SEPARATOR_TOKEN_STYLE = '--';

function compileStyleValue(uncompiledValue) {
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["startsWith"])(uncompiledValue, VARIABLE_REFERENCE_PREFIX)) {
    var variable = uncompiledValue.slice(VARIABLE_REFERENCE_PREFIX.length).split(VARIABLE_PATH_SEPARATOR_TOKEN_ATTRIBUTE).join(VARIABLE_PATH_SEPARATOR_TOKEN_STYLE);
    return "var(--wp--".concat(variable, ")");
  }

  return uncompiledValue;
}
/**
 * Returns the inline styles to add depending on the style object
 *
 * @param {Object} styles Styles configuration.
 *
 * @return {Object} Flattened CSS variables declaration.
 */


function getInlineStyles() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var output = {};
  Object.keys(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["__EXPERIMENTAL_STYLE_PROPERTY"]).forEach(function (propKey) {
    var path = _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["__EXPERIMENTAL_STYLE_PROPERTY"][propKey].value;
    var subPaths = _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["__EXPERIMENTAL_STYLE_PROPERTY"][propKey].properties; // Ignore styles on elements because they are handled on the server.

    if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["has"])(styles, path) && 'elements' !== Object(lodash__WEBPACK_IMPORTED_MODULE_1__["first"])(path)) {
      // Checking if style value is a string allows for shorthand css
      // option and backwards compatibility for border radius support.
      var styleValue = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(styles, path);

      if (!!subPaths && !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isString"])(styleValue)) {
        Object.entries(subPaths).forEach(function (entry) {
          var _entry = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(entry, 2),
              name = _entry[0],
              subPath = _entry[1];

          var value = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(styleValue, [subPath]);

          if (value) {
            output[name] = compileStyleValue(value);
          }
        });
      } else {
        output[propKey] = compileStyleValue(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(styles, path));
      }
    }
  });
  return output;
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/block-library":
/*!**************************************!*\
  !*** external ["wp","blockLibrary"] ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockLibrary"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["coreData"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/edit-site":
/*!**********************************!*\
  !*** external ["wp","editSite"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["editSite"]; }());

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

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["plugins"]; }());

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map