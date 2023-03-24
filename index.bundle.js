"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.gameboard {\r\n    display: grid;\r\n    grid-template: 1fr 30px /  360px 360px;\r\n    grid-template-areas:\r\n    \"computer player\"\r\n    \"blank button\";\r\n    column-gap: 4rem;\r\n    justify-content: center;\r\n}\r\n\r\nbutton {\r\n    grid-area: button;\r\n    width: 60px;\r\n    height: 20px;\r\n    align-self: center;\r\n    justify-self: center;\r\n}\r\n\r\n.player, .computer {\r\n    display: grid;\r\n    grid-template: 4rem 1fr 2rem / 2rem 1fr;\r\n    grid-template-areas: \r\n    \"title title\"\r\n    \"y-axis board\"\r\n    \"blank x-axis\";\r\n    width: 360px;\r\n}\r\n.title {\r\n    grid-area: title;\r\n    align-self: center;\r\n    justify-self: center;\r\n    margin: 0;\r\n}\r\n.y-axis {\r\n    grid-area: y-axis;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.y-axis p {\r\n    margin: 1px 0 0 1px;\r\n    height: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.x-axis {\r\n    grid-area: x-axis;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.x-axis p {\r\n    margin: 1px 0 0 1px;\r\n    width: 30px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.board-1, .board-2 {\r\n    grid-area: board;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    width: 320px;\r\n}\r\n\r\n.box-ai, .box {\r\n    border: 1px solid;\r\n    /* margin-top: 1px;\r\n    margin-left: 1px; */\r\n    margin-right: -1px;\r\n    margin-bottom: -1px;\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n\r\n.box-hover:hover {\r\n    background-color: rgb(177, 175, 175);\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC;;kBAEc;IACd,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC;;;kBAGc;IACd,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;IACpB,SAAS;AACb;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB;uBACmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;;;AAGA;IACI,oCAAoC;AACxC","sourcesContent":["header {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.gameboard {\r\n    display: grid;\r\n    grid-template: 1fr 30px /  360px 360px;\r\n    grid-template-areas:\r\n    \"computer player\"\r\n    \"blank button\";\r\n    column-gap: 4rem;\r\n    justify-content: center;\r\n}\r\n\r\nbutton {\r\n    grid-area: button;\r\n    width: 60px;\r\n    height: 20px;\r\n    align-self: center;\r\n    justify-self: center;\r\n}\r\n\r\n.player, .computer {\r\n    display: grid;\r\n    grid-template: 4rem 1fr 2rem / 2rem 1fr;\r\n    grid-template-areas: \r\n    \"title title\"\r\n    \"y-axis board\"\r\n    \"blank x-axis\";\r\n    width: 360px;\r\n}\r\n.title {\r\n    grid-area: title;\r\n    align-self: center;\r\n    justify-self: center;\r\n    margin: 0;\r\n}\r\n.y-axis {\r\n    grid-area: y-axis;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.y-axis p {\r\n    margin: 1px 0 0 1px;\r\n    height: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.x-axis {\r\n    grid-area: x-axis;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.x-axis p {\r\n    margin: 1px 0 0 1px;\r\n    width: 30px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.board-1, .board-2 {\r\n    grid-area: board;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    width: 320px;\r\n}\r\n\r\n.box-ai, .box {\r\n    border: 1px solid;\r\n    /* margin-top: 1px;\r\n    margin-left: 1px; */\r\n    margin-right: -1px;\r\n    margin-bottom: -1px;\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n\r\n.box-hover:hover {\r\n    background-color: rgb(177, 175, 175);\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");



const Game = () => {


    const _printBoard = () => {
        _addAxis();

        const board1 = document.querySelector('.board-1');
        const board2 = document.querySelector('.board-2');
        
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const box = document.createElement('div');
                box.setAttribute('class',`box-ai`)
                box.setAttribute('id',`board2:x${i}y${j}`)
                box.style.backgroundColor = 'white';

                board2.append(box);
            }
        }
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const box = document.createElement('div');
                box.setAttribute('class',`box`)
                box.setAttribute('id',`board1:x${i}y${j}`)
                board1.append(box);
            }
        }
    }

    const _checkEndGame = (board, name) => {
        if (board.allShipSank()) {
            alert(`${name} WON!`);
            playGame();

        }

    }

    const _addAxis = () => {
        const yaxis = document.querySelectorAll('.y-axis');
        const xaxis = document.querySelectorAll('.x-axis');
        const alphabeth = ['A','B','C','D','E','F','G','H','I','J']

        for (let i = 0; i < 10; i++) {
            const number = document.createElement('p');
            const number2 = document.createElement('p');
            number2.innerHTML = i+1;
            number.innerHTML = i+1;
            yaxis[0].append(number);
            yaxis[1].append(number2);

            const letter = document.createElement('p');
            const letter2 = document.createElement('p');
            letter.innerHTML = alphabeth[i];
            letter2.innerHTML = alphabeth[i];
            xaxis[0].append(letter);
            xaxis[1].append(letter2);
        }
        
 

    }

    const _enableBoard = (playerBoard, computerBoard) => {
        const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])('player1');
        const computer = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])('computer');

        let turn = 0;

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const box = document.getElementById(`board1:x${j}y${i}`);
                box.setAttribute('class','box box-hover')
                box.addEventListener('click', (e) => {
                    if (turn == 0) {
                        if (player1.attack(i, j, computerBoard) != null) {
                            //players move
                            box.style.backgroundColor = computerBoard.getColor(i,j);
                            _checkEndGame(computerBoard, 'player1');

                            //computers move
                            const computerMove = computer.aiAttack(playerBoard);
                            const compBox = document.getElementById(`board2:x${computerMove.charAt(11)}y${computerMove.charAt(15)}`)
                            compBox.style.backgroundColor = playerBoard.getColor(computerMove.charAt(15),computerMove.charAt(11));
                            _checkEndGame(playerBoard, 'computer');

                        } else {
                            console.log('invalid move')
                        }
                    }
                });


            }
        }
    }

    const _placeShips = (playerBoard, computerBoard) => {
        const shipLengths = [5,4,3,3,2];
        let shipIndex = 0;
        let direction = 'x';
        const directionButton = document.createElement('button');
        directionButton.innerHTML = 'x';
        directionButton.addEventListener('click', () => {
            direction = direction == 'x' ? 'y' : 'x';
            directionButton.innerHTML = direction == 'x' ? 'x' : 'y';
        })
        document.querySelector('.gameboard').append(directionButton);

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const box = document.getElementById(`board2:x${i}y${j}`);

                box.addEventListener('click', () => {
                    if (shipIndex < 5) {
                        while (true) {
                            let randomX = Math.floor(Math.random()*11);
                            let randomY = Math.floor(Math.random()*11);
                            if(computerBoard.placeShip(randomX, randomY, shipLengths[shipIndex], _randomDirection()) != null ) break;
                        }
                        if (playerBoard.placeShip(i,j,shipLengths[shipIndex], direction) != null) {
                            _colorShips(i,j,shipLengths[shipIndex], direction);
                            shipIndex++;
                            if (shipIndex == 5) _enableBoard(playerBoard, computerBoard);
                        } 
                    }
                });
            }
        }
    }

    const _colorShips = (x,y, length, direction) => {
        for (let i = 0; i < length; i++) {
            if (direction == 'x') {
                const box = document.getElementById(`board2:x${x}y${y+i}`);
                box.style.backgroundColor = '#fcd34d';
            } else {
                const box = document.getElementById(`board2:x${x+i}y${y}`);
                box.style.backgroundColor = '#fcd34d';
            }
            
        }
    }

    const _randomDirection = () => {
        let randomDirection = Math.floor(Math.random()*3);
        return randomDirection == 1 ? 'x' : 'y';
    }

    const _removeBoard = () => {
        document.querySelector('.computer').remove();
        document.querySelector('.player').remove();
        

        const computer = document.createElement('div');
        const player = document.createElement('div');
        computer.setAttribute('class','computer');
        player.setAttribute('class','player');
        
        const board2 = document.createElement('div');
        const board1 = document.createElement('div');
        board1.setAttribute('class','board-1');
        board2.setAttribute('class','board-2');

        const yaxis = document.createElement('div');
        const xaxis = document.createElement('div');
        yaxis.setAttribute('class','y-axis');
        xaxis.setAttribute('class','x-axis');

        const yaxis2 = document.createElement('div');
        const xaxis2 = document.createElement('div');
        yaxis2.setAttribute('class','y-axis');
        xaxis2.setAttribute('class','x-axis');

        const title = document.createElement('h2');
        const title2 = document.createElement('h2');
        title.setAttribute('class','title');
        title2.setAttribute('class','title');
        title.innerHTML = 'Computer';
        title2.innerHTML = 'Player';

        computer.append(title,board1, yaxis, xaxis);
        player.append(title2, board2, yaxis2, xaxis2);

        document.querySelector('.gameboard').append(computer, player);
    }

    const playGame = () => {
        _removeBoard();
        const playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
        const computerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
        _printBoard(playerBoard, computerBoard);
        _placeShips(playerBoard, computerBoard);
        
    }

    return {playGame}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");


const Gameboard = () => {
    const board = [
        [null, null, null, null, null,null, null, null, null, null],
        [null, null, null, null, null,null, null, null, null, null],
        [null, null, null, null, null,null, null, null, null, null],
        [null, null, null, null, null,null, null, null, null, null],
        [null, null, null, null, null,null, null, null, null, null],
        [null, null, null, null, null,null, null, null, null, null],
        [null, null, null, null, null,null, null, null, null, null],
        [null, null, null, null, null,null, null, null, null, null],
        [null, null, null, null, null,null, null, null, null, null],
        [null, null, null, null, null,null, null, null, null, null],
        [null, null, null, null, null,null, null, null, null, null]
    ];

    let _shipCount = 0;

    const placeShip = (y,x, length, direction) => {
        if (x < 0 || y < 0 || x >= 10 || y >= 10 || isNaN(x) || isNaN(y)) return null;
        if (y+length > 10 || x+length > 10) return null
        for (let i = 0; i < length; i++) {
            if (direction == 'x') {
                if(board[y][x+i] != null) return null;
            } else {
                if(board[y+i][x] != null) return null;
            }
        }

        const ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(length);
        _shipCount += length;
        if (direction == 'y') {
            for (let i = 0; i < length; i ++) {
                board[y][x] = ship;
                y++;
                
            }
            return 1;
        } else if (direction == 'x') {
            for (let i = 0; i < length; i ++) {
                board[y][x] = ship;
                x++;
                
            }
            return 1;
        } else return null;
    }

    const receiveAttack = (x,y) => {
        if(x < 0 || y < 0 || x >= 10 || y >= 10 || isNaN(x) || isNaN(y)) return null;
        if (board[x][y] == 'hit' || board[x][y] == 'miss') return null
        
        if (typeof(board[x][y]) != 'object' || board[x][y] == null) {
            board[x][y] = 'miss';
            return 'Miss!';
        } else {
            board[x][y].hit();
            board[x][y] = 'hit';
            _shipCount --;
            return 'Hit!'
        }
    }

    const allShipSank = () => { 
        if (_shipCount == 0) return true;
        return false
    }

    const getColor = (y,x) => {
        if (board[x][y] == 'miss') return '#94a3b8';
        else if (board[x][y] == 'hit') return '#ef4444';
        else return '#f8fafc';
    }

    return {board, placeShip, receiveAttack, allShipSank, getColor}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");



const game = (0,_game__WEBPACK_IMPORTED_MODULE_1__["default"])();
game.playGame();


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


const Player = (name) => {

    const getName = () => {
        return name;
    }

    const attack = (y, x, board) => {
        if(!isLegalMove(x,y,board)) return null;
        board.receiveAttack(x,y);
        return `${name} x:${x} y:${y}`
    }

    const aiAttack = (board) => {
        let randomX = Math.floor(Math.random()*11);
        let randomY = Math.floor(Math.random()*11);
        while (!isLegalMove(randomX, randomY, board)) {
            randomX = Math.floor(Math.random()*11);
            randomY = Math.floor(Math.random()*11);
        }
        board.receiveAttack(randomX, randomY);  
        return `${name} x:${randomX} y:${randomY}`;
        
    }

    const mockAiAttack = (board) => {
        let randomX = Math.floor(Math.random()*11);
        let randomY = Math.floor(Math.random()*11);
        while (!isLegalMove(randomX, randomY, board)) {
            randomX = Math.floor(Math.random()*11);
            randomY = Math.floor(Math.random()*11);
        }
        return isLegalMove(randomX, randomY, board);
        board.receiveAttack(randomX, randomY);  
        
    }

    const isLegalMove = (x, y, board) => {
        if(x < 0 || y < 0 || x >= 10 || y >= 10 || isNaN(x) || isNaN(y)) return false;
        if (board.board[x][y] == 'hit' || board.board[x][y] == 'miss') return false;
        return true;
    }

    return {getName, attack, isLegalMove, aiAttack, mockAiAttack}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (length) => {
    if (isNaN(length) || length < 1) return null;
    let hits = 0;

    const hit = () => {
        if (length == hits) return 'cannot hit a sunk ship'
        hits += 1;
    };

    const getHits = () => {
        return hits;
    }

    const isSunk = () => {
        return length == hits ? true : false;
    }

    return {length, getHits, hit, isSunk}
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7OztBQzlFSDtBQUNLO0FBQzFCO0FBQ0EsYUFBYSxpREFBSTtBQUNqQjs7Ozs7Ozs7Ozs7Ozs7OztBQ0pvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixNQUFNLElBQUksR0FBRyxJQUFJLEVBQUU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsTUFBTSxJQUFJLFNBQVMsSUFBSSxRQUFRO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUMvQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMzBweCAvICAzNjBweCAzNjBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImNvbXB1dGVyIHBsYXllclxcXCJcXHJcXG4gICAgXFxcImJsYW5rIGJ1dHRvblxcXCI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDRyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBncmlkLWFyZWE6IGJ1dHRvbjtcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllciwgLmNvbXB1dGVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNHJlbSAxZnIgMnJlbSAvIDJyZW0gMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcInRpdGxlIHRpdGxlXFxcIlxcclxcbiAgICBcXFwieS1heGlzIGJvYXJkXFxcIlxcclxcbiAgICBcXFwiYmxhbmsgeC1heGlzXFxcIjtcXHJcXG4gICAgd2lkdGg6IDM2MHB4O1xcclxcbn1cXHJcXG4udGl0bGUge1xcclxcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi55LWF4aXMge1xcclxcbiAgICBncmlkLWFyZWE6IHktYXhpcztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnktYXhpcyBwIHtcXHJcXG4gICAgbWFyZ2luOiAxcHggMCAwIDFweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ueC1heGlzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB4LWF4aXM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi54LWF4aXMgcCB7XFxyXFxuICAgIG1hcmdpbjogMXB4IDAgMCAxcHg7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLTEsIC5ib2FyZC0yIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBib2FyZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICB3aWR0aDogMzIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3gtYWksIC5ib3gge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gICAgLyogbWFyZ2luLXRvcDogMXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXB4OyAqL1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5ib3gtaG92ZXI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAxNzUsIDE3NSk7XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0Qzs7a0JBRWM7SUFDZCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkM7OztrQkFHYztJQUNkLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCO3VCQUNtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLG9DQUFvQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJoZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAzMHB4IC8gIDM2MHB4IDM2MHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiY29tcHV0ZXIgcGxheWVyXFxcIlxcclxcbiAgICBcXFwiYmxhbmsgYnV0dG9uXFxcIjtcXHJcXG4gICAgY29sdW1uLWdhcDogNHJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGdyaWQtYXJlYTogYnV0dG9uO1xcclxcbiAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyLCAuY29tcHV0ZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiA0cmVtIDFmciAycmVtIC8gMnJlbSAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICBcXFwidGl0bGUgdGl0bGVcXFwiXFxyXFxuICAgIFxcXCJ5LWF4aXMgYm9hcmRcXFwiXFxyXFxuICAgIFxcXCJibGFuayB4LWF4aXNcXFwiO1xcclxcbiAgICB3aWR0aDogMzYwcHg7XFxyXFxufVxcclxcbi50aXRsZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLnktYXhpcyB7XFxyXFxuICAgIGdyaWQtYXJlYTogeS1heGlzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ueS1heGlzIHAge1xcclxcbiAgICBtYXJnaW46IDFweCAwIDAgMXB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi54LWF4aXMge1xcclxcbiAgICBncmlkLWFyZWE6IHgtYXhpcztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLngtYXhpcyBwIHtcXHJcXG4gICAgbWFyZ2luOiAxcHggMCAwIDFweDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtMSwgLmJvYXJkLTIge1xcclxcbiAgICBncmlkLWFyZWE6IGJvYXJkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIHdpZHRoOiAzMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveC1haSwgLmJveCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgICAvKiBtYXJnaW4tdG9wOiAxcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcHg7ICovXFxyXFxuICAgIG1hcmdpbi1yaWdodDogLTFweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJveC1ob3Zlcjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDE3NSwgMTc1KTtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcblxyXG5jb25zdCBHYW1lID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgICBjb25zdCBfcHJpbnRCb2FyZCA9ICgpID0+IHtcclxuICAgICAgICBfYWRkQXhpcygpO1xyXG5cclxuICAgICAgICBjb25zdCBib2FyZDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtMScpO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC0yJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBib3guc2V0QXR0cmlidXRlKCdjbGFzcycsYGJveC1haWApXHJcbiAgICAgICAgICAgICAgICBib3guc2V0QXR0cmlidXRlKCdpZCcsYGJvYXJkMjp4JHtpfXkke2p9YClcclxuICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xyXG5cclxuICAgICAgICAgICAgICAgIGJvYXJkMi5hcHBlbmQoYm94KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJyxgYm94YClcclxuICAgICAgICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2lkJyxgYm9hcmQxOngke2l9eSR7an1gKVxyXG4gICAgICAgICAgICAgICAgYm9hcmQxLmFwcGVuZChib3gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9jaGVja0VuZEdhbWUgPSAoYm9hcmQsIG5hbWUpID0+IHtcclxuICAgICAgICBpZiAoYm9hcmQuYWxsU2hpcFNhbmsoKSkge1xyXG4gICAgICAgICAgICBhbGVydChgJHtuYW1lfSBXT04hYCk7XHJcbiAgICAgICAgICAgIHBsYXlHYW1lKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2FkZEF4aXMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeWF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueS1heGlzJyk7XHJcbiAgICAgICAgY29uc3QgeGF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueC1heGlzJyk7XHJcbiAgICAgICAgY29uc3QgYWxwaGFiZXRoID0gWydBJywnQicsJ0MnLCdEJywnRScsJ0YnLCdHJywnSCcsJ0knLCdKJ11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgY29uc3QgbnVtYmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgbnVtYmVyMi5pbm5lckhUTUwgPSBpKzE7XHJcbiAgICAgICAgICAgIG51bWJlci5pbm5lckhUTUwgPSBpKzE7XHJcbiAgICAgICAgICAgIHlheGlzWzBdLmFwcGVuZChudW1iZXIpO1xyXG4gICAgICAgICAgICB5YXhpc1sxXS5hcHBlbmQobnVtYmVyMik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsZXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxldHRlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGxldHRlci5pbm5lckhUTUwgPSBhbHBoYWJldGhbaV07XHJcbiAgICAgICAgICAgIGxldHRlcjIuaW5uZXJIVE1MID0gYWxwaGFiZXRoW2ldO1xyXG4gICAgICAgICAgICB4YXhpc1swXS5hcHBlbmQobGV0dGVyKTtcclxuICAgICAgICAgICAgeGF4aXNbMV0uYXBwZW5kKGxldHRlcjIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfZW5hYmxlQm9hcmQgPSAocGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmQpID0+IHtcclxuICAgICAgICBjb25zdCBwbGF5ZXIxID0gUGxheWVyKCdwbGF5ZXIxJyk7XHJcbiAgICAgICAgY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoJ2NvbXB1dGVyJyk7XHJcblxyXG4gICAgICAgIGxldCB0dXJuID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGJvYXJkMTp4JHtqfXkke2l9YCk7XHJcbiAgICAgICAgICAgICAgICBib3guc2V0QXR0cmlidXRlKCdjbGFzcycsJ2JveCBib3gtaG92ZXInKVxyXG4gICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHVybiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIxLmF0dGFjayhpLCBqLCBjb21wdXRlckJvYXJkKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYXllcnMgbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbXB1dGVyQm9hcmQuZ2V0Q29sb3IoaSxqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jaGVja0VuZEdhbWUoY29tcHV0ZXJCb2FyZCwgJ3BsYXllcjEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbXB1dGVycyBtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlck1vdmUgPSBjb21wdXRlci5haUF0dGFjayhwbGF5ZXJCb2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGJvYXJkMjp4JHtjb21wdXRlck1vdmUuY2hhckF0KDExKX15JHtjb21wdXRlck1vdmUuY2hhckF0KDE1KX1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcEJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwbGF5ZXJCb2FyZC5nZXRDb2xvcihjb21wdXRlck1vdmUuY2hhckF0KDE1KSxjb21wdXRlck1vdmUuY2hhckF0KDExKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY2hlY2tFbmRHYW1lKHBsYXllckJvYXJkLCAnY29tcHV0ZXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCBtb3ZlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX3BsYWNlU2hpcHMgPSAocGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmQpID0+IHtcclxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFs1LDQsMywzLDJdO1xyXG4gICAgICAgIGxldCBzaGlwSW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSAneCc7XHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZGlyZWN0aW9uQnV0dG9uLmlubmVySFRNTCA9ICd4JztcclxuICAgICAgICBkaXJlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PSAneCcgPyAneScgOiAneCc7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbkJ1dHRvbi5pbm5lckhUTUwgPSBkaXJlY3Rpb24gPT0gJ3gnID8gJ3gnIDogJ3knO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZCcpLmFwcGVuZChkaXJlY3Rpb25CdXR0b24pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYm9hcmQyOngke2l9eSR7an1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBJbmRleCA8IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjExKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjExKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKHJhbmRvbVgsIHJhbmRvbVksIHNoaXBMZW5ndGhzW3NoaXBJbmRleF0sIF9yYW5kb21EaXJlY3Rpb24oKSkgIT0gbnVsbCApIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoaSxqLHNoaXBMZW5ndGhzW3NoaXBJbmRleF0sIGRpcmVjdGlvbikgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbG9yU2hpcHMoaSxqLHNoaXBMZW5ndGhzW3NoaXBJbmRleF0sIGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwSW5kZXggPT0gNSkgX2VuYWJsZUJvYXJkKHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfY29sb3JTaGlwcyA9ICh4LHksIGxlbmd0aCwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09ICd4Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGJvYXJkMjp4JHt4fXkke3kraX1gKTtcclxuICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZjZDM0ZCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYm9hcmQyOngke3graX15JHt5fWApO1xyXG4gICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmNkMzRkJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX3JhbmRvbURpcmVjdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcmFuZG9tRGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjMpO1xyXG4gICAgICAgIHJldHVybiByYW5kb21EaXJlY3Rpb24gPT0gMSA/ICd4JyA6ICd5JztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfcmVtb3ZlQm9hcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyJykucmVtb3ZlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcicpLnJlbW92ZSgpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjb25zdCBjb21wdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbXB1dGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjb21wdXRlcicpO1xyXG4gICAgICAgIHBsYXllci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncGxheWVyJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYm9hcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgYm9hcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYm9hcmQxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdib2FyZC0xJyk7XHJcbiAgICAgICAgYm9hcmQyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdib2FyZC0yJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHlheGlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgeGF4aXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB5YXhpcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywneS1heGlzJyk7XHJcbiAgICAgICAgeGF4aXMuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3gtYXhpcycpO1xyXG5cclxuICAgICAgICBjb25zdCB5YXhpczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB4YXhpczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB5YXhpczIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3ktYXhpcycpO1xyXG4gICAgICAgIHhheGlzMi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywneC1heGlzJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBjb25zdCB0aXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0aXRsZScpO1xyXG4gICAgICAgIHRpdGxlMi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndGl0bGUnKTtcclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSAnQ29tcHV0ZXInO1xyXG4gICAgICAgIHRpdGxlMi5pbm5lckhUTUwgPSAnUGxheWVyJztcclxuXHJcbiAgICAgICAgY29tcHV0ZXIuYXBwZW5kKHRpdGxlLGJvYXJkMSwgeWF4aXMsIHhheGlzKTtcclxuICAgICAgICBwbGF5ZXIuYXBwZW5kKHRpdGxlMiwgYm9hcmQyLCB5YXhpczIsIHhheGlzMik7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQnKS5hcHBlbmQoY29tcHV0ZXIsIHBsYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGxheUdhbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgX3JlbW92ZUJvYXJkKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcclxuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XHJcbiAgICAgICAgX3ByaW50Qm9hcmQocGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmQpO1xyXG4gICAgICAgIF9wbGFjZVNoaXBzKHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3BsYXlHYW1lfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xyXG5cclxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9hcmQgPSBbXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF1cclxuICAgIF07XHJcblxyXG4gICAgbGV0IF9zaGlwQ291bnQgPSAwO1xyXG5cclxuICAgIGNvbnN0IHBsYWNlU2hpcCA9ICh5LHgsIGxlbmd0aCwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKHggPCAwIHx8IHkgPCAwIHx8IHggPj0gMTAgfHwgeSA+PSAxMCB8fCBpc05hTih4KSB8fCBpc05hTih5KSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgaWYgKHkrbGVuZ3RoID4gMTAgfHwgeCtsZW5ndGggPiAxMCkgcmV0dXJuIG51bGxcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gJ3gnKSB7XHJcbiAgICAgICAgICAgICAgICBpZihib2FyZFt5XVt4K2ldICE9IG51bGwpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoYm9hcmRbeStpXVt4XSAhPSBudWxsKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAobGVuZ3RoKTtcclxuICAgICAgICBfc2hpcENvdW50ICs9IGxlbmd0aDtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09ICd5Jykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICAgICAgYm9hcmRbeV1beF0gPSBzaGlwO1xyXG4gICAgICAgICAgICAgICAgeSsrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gJ3gnKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgICAgICAgICAgICBib2FyZFt5XVt4XSA9IHNoaXA7XHJcbiAgICAgICAgICAgICAgICB4Kys7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9IGVsc2UgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LHkpID0+IHtcclxuICAgICAgICBpZih4IDwgMCB8fCB5IDwgMCB8fCB4ID49IDEwIHx8IHkgPj0gMTAgfHwgaXNOYU4oeCkgfHwgaXNOYU4oeSkpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmIChib2FyZFt4XVt5XSA9PSAnaGl0JyB8fCBib2FyZFt4XVt5XSA9PSAnbWlzcycpIHJldHVybiBudWxsXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHR5cGVvZihib2FyZFt4XVt5XSkgIT0gJ29iamVjdCcgfHwgYm9hcmRbeF1beV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBib2FyZFt4XVt5XSA9ICdtaXNzJztcclxuICAgICAgICAgICAgcmV0dXJuICdNaXNzISc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYm9hcmRbeF1beV0uaGl0KCk7XHJcbiAgICAgICAgICAgIGJvYXJkW3hdW3ldID0gJ2hpdCc7XHJcbiAgICAgICAgICAgIF9zaGlwQ291bnQgLS07XHJcbiAgICAgICAgICAgIHJldHVybiAnSGl0ISdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWxsU2hpcFNhbmsgPSAoKSA9PiB7IFxyXG4gICAgICAgIGlmIChfc2hpcENvdW50ID09IDApIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldENvbG9yID0gKHkseCkgPT4ge1xyXG4gICAgICAgIGlmIChib2FyZFt4XVt5XSA9PSAnbWlzcycpIHJldHVybiAnIzk0YTNiOCc7XHJcbiAgICAgICAgZWxzZSBpZiAoYm9hcmRbeF1beV0gPT0gJ2hpdCcpIHJldHVybiAnI2VmNDQ0NCc7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gJyNmOGZhZmMnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Ym9hcmQsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU2hpcFNhbmssIGdldENvbG9yfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xyXG5cclxuY29uc3QgZ2FtZSA9IEdhbWUoKTtcclxuZ2FtZS5wbGF5R2FtZSgpO1xyXG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5cclxuY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcclxuXHJcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGF0dGFjayA9ICh5LCB4LCBib2FyZCkgPT4ge1xyXG4gICAgICAgIGlmKCFpc0xlZ2FsTW92ZSh4LHksYm9hcmQpKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKHgseSk7XHJcbiAgICAgICAgcmV0dXJuIGAke25hbWV9IHg6JHt4fSB5OiR7eX1gXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWlBdHRhY2sgPSAoYm9hcmQpID0+IHtcclxuICAgICAgICBsZXQgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMSk7XHJcbiAgICAgICAgbGV0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTEpO1xyXG4gICAgICAgIHdoaWxlICghaXNMZWdhbE1vdmUocmFuZG9tWCwgcmFuZG9tWSwgYm9hcmQpKSB7XHJcbiAgICAgICAgICAgIHJhbmRvbVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTEpO1xyXG4gICAgICAgICAgICByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjExKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21YLCByYW5kb21ZKTsgIFxyXG4gICAgICAgIHJldHVybiBgJHtuYW1lfSB4OiR7cmFuZG9tWH0geToke3JhbmRvbVl9YDtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb2NrQWlBdHRhY2sgPSAoYm9hcmQpID0+IHtcclxuICAgICAgICBsZXQgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMSk7XHJcbiAgICAgICAgbGV0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTEpO1xyXG4gICAgICAgIHdoaWxlICghaXNMZWdhbE1vdmUocmFuZG9tWCwgcmFuZG9tWSwgYm9hcmQpKSB7XHJcbiAgICAgICAgICAgIHJhbmRvbVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTEpO1xyXG4gICAgICAgICAgICByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjExKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzTGVnYWxNb3ZlKHJhbmRvbVgsIHJhbmRvbVksIGJvYXJkKTtcclxuICAgICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbVgsIHJhbmRvbVkpOyAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXNMZWdhbE1vdmUgPSAoeCwgeSwgYm9hcmQpID0+IHtcclxuICAgICAgICBpZih4IDwgMCB8fCB5IDwgMCB8fCB4ID49IDEwIHx8IHkgPj0gMTAgfHwgaXNOYU4oeCkgfHwgaXNOYU4oeSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoYm9hcmQuYm9hcmRbeF1beV0gPT0gJ2hpdCcgfHwgYm9hcmQuYm9hcmRbeF1beV0gPT0gJ21pc3MnKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZXROYW1lLCBhdHRhY2ssIGlzTGVnYWxNb3ZlLCBhaUF0dGFjaywgbW9ja0FpQXR0YWNrfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcclxuICAgIGlmIChpc05hTihsZW5ndGgpIHx8IGxlbmd0aCA8IDEpIHJldHVybiBudWxsO1xyXG4gICAgbGV0IGhpdHMgPSAwO1xyXG5cclxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcclxuICAgICAgICBpZiAobGVuZ3RoID09IGhpdHMpIHJldHVybiAnY2Fubm90IGhpdCBhIHN1bmsgc2hpcCdcclxuICAgICAgICBoaXRzICs9IDE7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldEhpdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGhpdHM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBsZW5ndGggPT0gaGl0cyA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2xlbmd0aCwgZ2V0SGl0cywgaGl0LCBpc1N1bmt9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=