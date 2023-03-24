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
___CSS_LOADER_EXPORT___.push([module.id, ".gameboard {\r\n    display: grid;\r\n    grid-template-columns: 360px 100px 360px;\r\n    grid-template-areas:\r\n    \"computer button player\";\r\n    gap: 2rem;\r\n}\r\n\r\nbutton {\r\n    grid-area: button;\r\n}\r\n\r\n.player, .computer {\r\n    display: grid;\r\n    grid-template: 4rem 1fr 2rem / 2rem 1fr;\r\n    grid-template-areas: \r\n    \"title title\"\r\n    \"y-axis board\"\r\n    \"blank x-axis\";\r\n    width: 360px;\r\n}\r\n.title {\r\n    grid-area: title;\r\n    align-self: center;\r\n    margin: 0;\r\n}\r\n.y-axis {\r\n    grid-area: y-axis;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.y-axis p {\r\n    margin: 1px 0 0 1px;\r\n    height: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.x-axis {\r\n    grid-area: x-axis;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.x-axis p {\r\n    margin: 1px 0 0 1px;\r\n    width: 30px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.board-1, .board-2 {\r\n    grid-area: board;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    width: 320px;\r\n}\r\n\r\n.box-ai, .box {\r\n    border: 1px solid;\r\n    /* margin-top: 1px;\r\n    margin-left: 1px; */\r\n    margin-right: -1px;\r\n    margin-bottom: -1px;\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n\r\n.box-hover:hover {\r\n    background-color: rgb(177, 175, 175);\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,wCAAwC;IACxC;4BACwB;IACxB,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC;;;kBAGc;IACd,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB;uBACmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;;;AAGA;IACI,oCAAoC;AACxC","sourcesContent":[".gameboard {\r\n    display: grid;\r\n    grid-template-columns: 360px 100px 360px;\r\n    grid-template-areas:\r\n    \"computer button player\";\r\n    gap: 2rem;\r\n}\r\n\r\nbutton {\r\n    grid-area: button;\r\n}\r\n\r\n.player, .computer {\r\n    display: grid;\r\n    grid-template: 4rem 1fr 2rem / 2rem 1fr;\r\n    grid-template-areas: \r\n    \"title title\"\r\n    \"y-axis board\"\r\n    \"blank x-axis\";\r\n    width: 360px;\r\n}\r\n.title {\r\n    grid-area: title;\r\n    align-self: center;\r\n    margin: 0;\r\n}\r\n.y-axis {\r\n    grid-area: y-axis;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.y-axis p {\r\n    margin: 1px 0 0 1px;\r\n    height: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.x-axis {\r\n    grid-area: x-axis;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.x-axis p {\r\n    margin: 1px 0 0 1px;\r\n    width: 30px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.board-1, .board-2 {\r\n    grid-area: board;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    width: 320px;\r\n}\r\n\r\n.box-ai, .box {\r\n    border: 1px solid;\r\n    /* margin-top: 1px;\r\n    margin-left: 1px; */\r\n    margin-right: -1px;\r\n    margin-bottom: -1px;\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n\r\n.box-hover:hover {\r\n    background-color: rgb(177, 175, 175);\r\n}\r\n\r\n"],"sourceRoot":""}]);
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

    const _checkEndGame = (board) => {

        //if (board.allShipSank()) console.log('Game Ended! player wins');
        //console.log(board);
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
                            _checkEndGame(computerBoard);

                            //computers move
                            const computerMove = computer.aiAttack(playerBoard);
                            const compBox = document.getElementById(`board2:x${computerMove.charAt(11)}y${computerMove.charAt(15)}`)
                            compBox.style.backgroundColor = playerBoard.getColor(computerMove.charAt(15),computerMove.charAt(11));
                            _checkEndGame(playerBoard);

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
                            if(computerBoard.placeShip(randomX, randomY, shipLengths[shipIndex], direction) != null ) break;
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
        console.log(computerBoard.board);
    }

    const _colorShips = (x,y, length, direction) => {
        console.log(direction == 'x');
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

    const playGame = () => {
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
        if (x < 0 || y < 0 || x > 10 || y > 10 || isNaN(x) || isNaN(y)) return null;
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
            if (y + length >= 10) {return null}
            for (let i = 0; i < length; i ++) {
                board[y][x] = ship;
                y+= 1;
                
            }
            return 1;
        } else if (direction == 'x') {
            if (x + length >= 10) {return null}
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
        console.log(board[x][y]);
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
        console.log(`${x} ${y}`)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLGtCQUFrQixNQUFNLElBQUksR0FBRyxJQUFJLEVBQUU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsTUFBTSxJQUFJLFNBQVMsSUFBSSxRQUFRO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUNoRHJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWVib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzYwcHggMTAwcHggMzYwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJjb21wdXRlciBidXR0b24gcGxheWVyXFxcIjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBncmlkLWFyZWE6IGJ1dHRvbjtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllciwgLmNvbXB1dGVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNHJlbSAxZnIgMnJlbSAvIDJyZW0gMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcInRpdGxlIHRpdGxlXFxcIlxcclxcbiAgICBcXFwieS1heGlzIGJvYXJkXFxcIlxcclxcbiAgICBcXFwiYmxhbmsgeC1heGlzXFxcIjtcXHJcXG4gICAgd2lkdGg6IDM2MHB4O1xcclxcbn1cXHJcXG4udGl0bGUge1xcclxcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLnktYXhpcyB7XFxyXFxuICAgIGdyaWQtYXJlYTogeS1heGlzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ueS1heGlzIHAge1xcclxcbiAgICBtYXJnaW46IDFweCAwIDAgMXB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi54LWF4aXMge1xcclxcbiAgICBncmlkLWFyZWE6IHgtYXhpcztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLngtYXhpcyBwIHtcXHJcXG4gICAgbWFyZ2luOiAxcHggMCAwIDFweDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtMSwgLmJvYXJkLTIge1xcclxcbiAgICBncmlkLWFyZWE6IGJvYXJkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIHdpZHRoOiAzMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveC1haSwgLmJveCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgICAvKiBtYXJnaW4tdG9wOiAxcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcHg7ICovXFxyXFxuICAgIG1hcmdpbi1yaWdodDogLTFweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJveC1ob3Zlcjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDE3NSwgMTc1KTtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEM7NEJBQ3dCO0lBQ3hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkM7OztrQkFHYztJQUNkLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakI7dUJBQ21CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksb0NBQW9DO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nYW1lYm9hcmQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM2MHB4IDEwMHB4IDM2MHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiY29tcHV0ZXIgYnV0dG9uIHBsYXllclxcXCI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBidXR0b247XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXIsIC5jb21wdXRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDRyZW0gMWZyIDJyZW0gLyAycmVtIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgIFxcXCJ0aXRsZSB0aXRsZVxcXCJcXHJcXG4gICAgXFxcInktYXhpcyBib2FyZFxcXCJcXHJcXG4gICAgXFxcImJsYW5rIHgtYXhpc1xcXCI7XFxyXFxuICAgIHdpZHRoOiAzNjBweDtcXHJcXG59XFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi55LWF4aXMge1xcclxcbiAgICBncmlkLWFyZWE6IHktYXhpcztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnktYXhpcyBwIHtcXHJcXG4gICAgbWFyZ2luOiAxcHggMCAwIDFweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ueC1heGlzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB4LWF4aXM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi54LWF4aXMgcCB7XFxyXFxuICAgIG1hcmdpbjogMXB4IDAgMCAxcHg7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLTEsIC5ib2FyZC0yIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBib2FyZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICB3aWR0aDogMzIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3gtYWksIC5ib3gge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gICAgLyogbWFyZ2luLXRvcDogMXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXB4OyAqL1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5ib3gtaG92ZXI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAxNzUsIDE3NSk7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5cclxuY29uc3QgR2FtZSA9ICgpID0+IHtcclxuXHJcblxyXG4gICAgY29uc3QgX3ByaW50Qm9hcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgX2FkZEF4aXMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgYm9hcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLTEnKTtcclxuICAgICAgICBjb25zdCBib2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtMicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgYm94LnNldEF0dHJpYnV0ZSgnY2xhc3MnLGBib3gtYWlgKVxyXG4gICAgICAgICAgICAgICAgYm94LnNldEF0dHJpYnV0ZSgnaWQnLGBib2FyZDI6eCR7aX15JHtqfWApXHJcblxyXG4gICAgICAgICAgICAgICAgYm9hcmQyLmFwcGVuZChib3gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgYm94LnNldEF0dHJpYnV0ZSgnY2xhc3MnLGBib3hgKVxyXG4gICAgICAgICAgICAgICAgYm94LnNldEF0dHJpYnV0ZSgnaWQnLGBib2FyZDE6eCR7aX15JHtqfWApXHJcbiAgICAgICAgICAgICAgICBib2FyZDEuYXBwZW5kKGJveCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2NoZWNrRW5kR2FtZSA9IChib2FyZCkgPT4ge1xyXG5cclxuICAgICAgICAvL2lmIChib2FyZC5hbGxTaGlwU2FuaygpKSBjb25zb2xlLmxvZygnR2FtZSBFbmRlZCEgcGxheWVyIHdpbnMnKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGJvYXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfYWRkQXhpcyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB5YXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy55LWF4aXMnKTtcclxuICAgICAgICBjb25zdCB4YXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy54LWF4aXMnKTtcclxuICAgICAgICBjb25zdCBhbHBoYWJldGggPSBbJ0EnLCdCJywnQycsJ0QnLCdFJywnRicsJ0cnLCdIJywnSScsJ0onXVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb25zdCBudW1iZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBudW1iZXIyLmlubmVySFRNTCA9IGkrMTtcclxuICAgICAgICAgICAgbnVtYmVyLmlubmVySFRNTCA9IGkrMTtcclxuICAgICAgICAgICAgeWF4aXNbMF0uYXBwZW5kKG51bWJlcik7XHJcbiAgICAgICAgICAgIHlheGlzWzFdLmFwcGVuZChudW1iZXIyKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgY29uc3QgbGV0dGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgbGV0dGVyLmlubmVySFRNTCA9IGFscGhhYmV0aFtpXTtcclxuICAgICAgICAgICAgbGV0dGVyMi5pbm5lckhUTUwgPSBhbHBoYWJldGhbaV07XHJcbiAgICAgICAgICAgIHhheGlzWzBdLmFwcGVuZChsZXR0ZXIpO1xyXG4gICAgICAgICAgICB4YXhpc1sxXS5hcHBlbmQobGV0dGVyMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9lbmFibGVCb2FyZCA9IChwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoJ3BsYXllcjEnKTtcclxuICAgICAgICBjb25zdCBjb21wdXRlciA9IFBsYXllcignY29tcHV0ZXInKTtcclxuXHJcbiAgICAgICAgbGV0IHR1cm4gPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYm9hcmQxOngke2p9eSR7aX1gKTtcclxuICAgICAgICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnYm94IGJveC1ob3ZlcicpXHJcbiAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0dXJuID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllcjEuYXR0YWNrKGksIGosIGNvbXB1dGVyQm9hcmQpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxheWVycyBtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29tcHV0ZXJCb2FyZC5nZXRDb2xvcihpLGopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NoZWNrRW5kR2FtZShjb21wdXRlckJvYXJkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbXB1dGVycyBtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlck1vdmUgPSBjb21wdXRlci5haUF0dGFjayhwbGF5ZXJCb2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGJvYXJkMjp4JHtjb21wdXRlck1vdmUuY2hhckF0KDExKX15JHtjb21wdXRlck1vdmUuY2hhckF0KDE1KX1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcEJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwbGF5ZXJCb2FyZC5nZXRDb2xvcihjb21wdXRlck1vdmUuY2hhckF0KDE1KSxjb21wdXRlck1vdmUuY2hhckF0KDExKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY2hlY2tFbmRHYW1lKHBsYXllckJvYXJkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCBtb3ZlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX3BsYWNlU2hpcHMgPSAocGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmQpID0+IHtcclxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFs1LDQsMywzLDJdO1xyXG4gICAgICAgIGxldCBzaGlwSW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSAneCc7XHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZGlyZWN0aW9uQnV0dG9uLmlubmVySFRNTCA9ICd4JztcclxuICAgICAgICBkaXJlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PSAneCcgPyAneScgOiAneCc7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbkJ1dHRvbi5pbm5lckhUTUwgPSBkaXJlY3Rpb24gPT0gJ3gnID8gJ3gnIDogJ3knO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZCcpLmFwcGVuZChkaXJlY3Rpb25CdXR0b24pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYm9hcmQyOngke2l9eSR7an1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBJbmRleCA8IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjExKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjExKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKHJhbmRvbVgsIHJhbmRvbVksIHNoaXBMZW5ndGhzW3NoaXBJbmRleF0sIGRpcmVjdGlvbikgIT0gbnVsbCApIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoaSxqLHNoaXBMZW5ndGhzW3NoaXBJbmRleF0sIGRpcmVjdGlvbikgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbG9yU2hpcHMoaSxqLHNoaXBMZW5ndGhzW3NoaXBJbmRleF0sIGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwSW5kZXggPT0gNSkgX2VuYWJsZUJvYXJkKHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhjb21wdXRlckJvYXJkLmJvYXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfY29sb3JTaGlwcyA9ICh4LHksIGxlbmd0aCwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGlyZWN0aW9uID09ICd4Jyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09ICd4Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGJvYXJkMjp4JHt4fXkke3kraX1gKTtcclxuICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZjZDM0ZCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYm9hcmQyOngke3graX15JHt5fWApO1xyXG4gICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmNkMzRkJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGxheUdhbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcclxuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XHJcbiAgICAgICAgX3ByaW50Qm9hcmQocGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmQpO1xyXG4gICAgICAgIF9wbGFjZVNoaXBzKHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3BsYXlHYW1lfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xyXG5cclxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9hcmQgPSBbXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF1cclxuICAgIF07XHJcblxyXG4gICAgbGV0IF9zaGlwQ291bnQgPSAwO1xyXG5cclxuICAgIGNvbnN0IHBsYWNlU2hpcCA9ICh5LHgsIGxlbmd0aCwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKHggPCAwIHx8IHkgPCAwIHx8IHggPiAxMCB8fCB5ID4gMTAgfHwgaXNOYU4oeCkgfHwgaXNOYU4oeSkpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAneCcpIHtcclxuICAgICAgICAgICAgICAgIGlmKGJvYXJkW3ldW3graV0gIT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZihib2FyZFt5K2ldW3hdICE9IG51bGwpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzaGlwID0gU2hpcChsZW5ndGgpO1xyXG4gICAgICAgIF9zaGlwQ291bnQgKz0gbGVuZ3RoO1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gJ3knKSB7XHJcbiAgICAgICAgICAgIGlmICh5ICsgbGVuZ3RoID49IDEwKSB7cmV0dXJuIG51bGx9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgICAgICAgICAgICBib2FyZFt5XVt4XSA9IHNoaXA7XHJcbiAgICAgICAgICAgICAgICB5Kz0gMTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09ICd4Jykge1xyXG4gICAgICAgICAgICBpZiAoeCArIGxlbmd0aCA+PSAxMCkge3JldHVybiBudWxsfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICAgICAgYm9hcmRbeV1beF0gPSBzaGlwO1xyXG4gICAgICAgICAgICAgICAgeCsrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfSBlbHNlIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCx5KSA9PiB7XHJcbiAgICAgICAgaWYoeCA8IDAgfHwgeSA8IDAgfHwgeCA+PSAxMCB8fCB5ID49IDEwIHx8IGlzTmFOKHgpIHx8IGlzTmFOKHkpKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBpZiAoYm9hcmRbeF1beV0gPT0gJ2hpdCcgfHwgYm9hcmRbeF1beV0gPT0gJ21pc3MnKSByZXR1cm4gbnVsbFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0eXBlb2YoYm9hcmRbeF1beV0pICE9ICdvYmplY3QnIHx8IGJvYXJkW3hdW3ldID09IG51bGwpIHtcclxuICAgICAgICAgICAgYm9hcmRbeF1beV0gPSAnbWlzcyc7XHJcbiAgICAgICAgICAgIHJldHVybiAnTWlzcyEnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJvYXJkW3hdW3ldLmhpdCgpO1xyXG4gICAgICAgICAgICBib2FyZFt4XVt5XSA9ICdoaXQnO1xyXG4gICAgICAgICAgICBfc2hpcENvdW50IC0tO1xyXG4gICAgICAgICAgICByZXR1cm4gJ0hpdCEnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFsbFNoaXBTYW5rID0gKCkgPT4geyBcclxuICAgICAgICBpZiAoX3NoaXBDb3VudCA9PSAwKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRDb2xvciA9ICh5LHgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhib2FyZFt4XVt5XSk7XHJcbiAgICAgICAgaWYgKGJvYXJkW3hdW3ldID09ICdtaXNzJykgcmV0dXJuICcjOTRhM2I4JztcclxuICAgICAgICBlbHNlIGlmIChib2FyZFt4XVt5XSA9PSAnaGl0JykgcmV0dXJuICcjZWY0NDQ0JztcclxuICAgICAgICBlbHNlIHJldHVybiAnI2Y4ZmFmYyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtib2FyZCwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTaGlwU2FuaywgZ2V0Q29sb3J9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XHJcblxyXG5jb25zdCBnYW1lID0gR2FtZSgpO1xyXG5nYW1lLnBsYXlHYW1lKCk7XHJcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcblxyXG5jb25zdCBQbGF5ZXIgPSAobmFtZSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXR0YWNrID0gKHksIHgsIGJvYXJkKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7eH0gJHt5fWApXHJcbiAgICAgICAgaWYoIWlzTGVnYWxNb3ZlKHgseSxib2FyZCkpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soeCx5KTtcclxuICAgICAgICByZXR1cm4gYCR7bmFtZX0geDoke3h9IHk6JHt5fWBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhaUF0dGFjayA9IChib2FyZCkgPT4ge1xyXG4gICAgICAgIGxldCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjExKTtcclxuICAgICAgICBsZXQgcmFuZG9tWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMSk7XHJcbiAgICAgICAgd2hpbGUgKCFpc0xlZ2FsTW92ZShyYW5kb21YLCByYW5kb21ZLCBib2FyZCkpIHtcclxuICAgICAgICAgICAgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMSk7XHJcbiAgICAgICAgICAgIHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbVgsIHJhbmRvbVkpOyAgXHJcbiAgICAgICAgcmV0dXJuIGAke25hbWV9IHg6JHtyYW5kb21YfSB5OiR7cmFuZG9tWX1gO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vY2tBaUF0dGFjayA9IChib2FyZCkgPT4ge1xyXG4gICAgICAgIGxldCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjExKTtcclxuICAgICAgICBsZXQgcmFuZG9tWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMSk7XHJcbiAgICAgICAgd2hpbGUgKCFpc0xlZ2FsTW92ZShyYW5kb21YLCByYW5kb21ZLCBib2FyZCkpIHtcclxuICAgICAgICAgICAgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMSk7XHJcbiAgICAgICAgICAgIHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNMZWdhbE1vdmUocmFuZG9tWCwgcmFuZG9tWSwgYm9hcmQpO1xyXG4gICAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tWCwgcmFuZG9tWSk7ICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpc0xlZ2FsTW92ZSA9ICh4LCB5LCBib2FyZCkgPT4ge1xyXG4gICAgICAgIGlmKHggPCAwIHx8IHkgPCAwIHx8IHggPj0gMTAgfHwgeSA+PSAxMCB8fCBpc05hTih4KSB8fCBpc05hTih5KSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChib2FyZC5ib2FyZFt4XVt5XSA9PSAnaGl0JyB8fCBib2FyZC5ib2FyZFt4XVt5XSA9PSAnbWlzcycpIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2dldE5hbWUsIGF0dGFjaywgaXNMZWdhbE1vdmUsIGFpQXR0YWNrLCBtb2NrQWlBdHRhY2t9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjb25zdCBTaGlwID0gKGxlbmd0aCkgPT4ge1xyXG4gICAgaWYgKGlzTmFOKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMSkgcmV0dXJuIG51bGw7XHJcbiAgICBsZXQgaGl0cyA9IDA7XHJcblxyXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChsZW5ndGggPT0gaGl0cykgcmV0dXJuICdjYW5ub3QgaGl0IGEgc3VuayBzaGlwJ1xyXG4gICAgICAgIGhpdHMgKz0gMTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gaGl0cztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGxlbmd0aCA9PSBoaXRzID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7bGVuZ3RoLCBnZXRIaXRzLCBoaXQsIGlzU3Vua31cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGlwOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==