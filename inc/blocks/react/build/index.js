/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Blocks/logo.js":
/*!****************************!*\
  !*** ./src/Blocks/logo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
const logoAdvancedControls = wp.compose.createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      Fragment
    } = wp.element;
    const {
      PanelBody,
      Button,
      ResponsiveWrapper
    } = wp.components;
    const {
      InspectorControls,
      MediaUpload,
      MediaUploadCheck
    } = wp.blockEditor;
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    const {
      __
    } = wp.i18n;
    const removeMedia = () => {
      setAttributes({
        mobileLogoId: 0,
        mobileLogoUrl: ''
      });
    };
    const onSelectMedia = media => {
      setAttributes({
        mobileLogoId: media.id,
        mobileLogoUrl: media.url
      });
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), isSelected && props.name == 'core/site-logo' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Mobile logo', 'kemet'),
      initialOpen: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: onSelectMedia,
      value: attributes.mobileLogoId,
      allowedTypes: ['image'],
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
        className: attributes.mobileLogoId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        onClick: open
      }, attributes.mobileLogoId == 0 && __('Choose an logo', 'kemet'), attributes.mobileLogoUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveWrapper, {
        naturalWidth: 100,
        naturalHeight: 100
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: attributes.mobileLogoUrl
      })))
    })), attributes.mobileLogoId != 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
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
/***/ (() => {

function addSeparatorAttribute(settings, name) {
  if (typeof settings.attributes !== 'undefined') {
    if (name == 'core/separator') {
      var _settings$support;
      settings.supports = Object.assign((_settings$support = settings.support) !== null && _settings$support !== void 0 ? _settings$support : {}, {
        spacing: {
          margin: true,
          padding: true,
          __experimentalDefaultControls: {
            margin: false,
            padding: false
          },
          units: ["px", "em", "rem", "vh", "vw"]
        }
      });
    }
  }
  return settings;
}
wp.hooks.addFilter('blocks.registerBlockType', 'kemet/separator-control', addSeparatorAttribute);

/***/ }),

/***/ "./src/Blocks/template-parts.js":
/*!**************************************!*\
  !*** ./src/Blocks/template-parts.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);




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
const headerPartControls = wp.compose.createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      Fragment
    } = wp.element;
    const {
      PanelBody,
      ToggleControl
    } = wp.components;
    const {
      InspectorControls
    } = wp.blockEditor;
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    const {
      __
    } = wp.i18n;
    let templateType;
    if (props.name == 'core/template-part') {
      templateType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
        if (!select('core/edit-site')) {
          return;
        }
        const {
          template: theme
        } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getCurrentTheme();
        const {
          getEditedEntityRecord
        } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
        const getEntityArgs = ['postType', 'wp_template_part', `${theme}//${attributes.slug}`];
        const entityRecord = getEditedEntityRecord(...getEntityArgs);
        const type = entityRecord?.area || entityRecord?.slug;
        return type;
      }, [attributes]);
    }
    const onChangeHandler = (key, value) => {
      setAttributes({
        [key]: value
      });
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), isSelected && props.name == 'core/template-part' && templateType === 'header' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Kemet Settings', 'kemet'),
      initialOpen: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Enable Sticky Header', 'kemet'),
      checked: !!attributes.enableStickyHeader,
      onChange: newval => onChangeHandler('enableStickyHeader', newval)
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Enable Overlay Header', 'kemet'),
      checked: !!attributes.enableOverlayHeader,
      onChange: newval => onChangeHandler('enableOverlayHeader', newval)
    }))), isSelected && props.name == 'core/template-part' && templateType === 'footer' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Kemet Settings', 'kemet'),
      initialOpen: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Enable Sticky Footer', 'kemet'),
      checked: !!attributes.enableStickyFooter,
      onChange: newval => onChangeHandler('enableStickyFooter', newval)
    }))));
  };
}, 'headerPartControls');
wp.hooks.addFilter('editor.BlockEdit', 'kemet/header-part-control', headerPartControls);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blocks_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blocks/logo */ "./src/Blocks/logo.js");
/* harmony import */ var _Blocks_separator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blocks/separator */ "./src/Blocks/separator.js");
/* harmony import */ var _Blocks_separator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Blocks_separator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Blocks_template_parts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Blocks/template-parts */ "./src/Blocks/template-parts.js");




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
})();

/******/ })()
;
//# sourceMappingURL=index.js.map