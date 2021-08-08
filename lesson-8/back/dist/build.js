/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../front/basketComp.js":
/*!******************************!*\
  !*** ../front/basketComp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component(\"basketcomp\", {\r\n  template: `<div v-if=\"basket.length > 0\">\r\n  <h2>Your cart. Total checkout: {{totalPrice}} &#8381;.</h2>\r\n    <div class=\"cart\">\r\n        <div class=\"goods-item\" v-for=\"good in basket\">\r\n          <img src=\"https://picsum.photos/110\" alt=\"img\">\r\n          <h5>{{good.id_product}}</h5>\r\n          <h3>{{good.product_name}}</h3>\r\n          <p>{{good.price}} &#8381;.</p>\r\n        </div>\r\n    </div>\r\n  </div>`,\r\n  props: [\"basket\", \"totalPrice\"],\r\n}));\n\n//# sourceURL=webpack://back/../front/basketComp.js?");

/***/ }),

/***/ "../front/catalogueComp.js":
/*!*********************************!*\
  !*** ../front/catalogueComp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component(\"catalogue\", {\r\n    template: `<div v-if=\"goods.length > 0\">\r\n    <h2>Catalogue</h2>\r\n    <div class=\"goods-list\">\r\n      <h3 v-if=\"filteredGoods.length === 0\">This good does not exist in catalogue!</h3>\r\n      <goodsitem v-for=\"good in filteredGoods\" :good=\"good\" v-bind:key=\"good.product_id\"></goodsitem>\r\n    </div>\r\n    </div>`,\r\n    props: [\"filteredGoods\", \"goods\"],\r\n  }));\n\n//# sourceURL=webpack://back/../front/catalogueComp.js?");

/***/ }),

/***/ "../front/goodsitemComp.js":
/*!*********************************!*\
  !*** ../front/goodsitemComp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API_URL = \"http://localhost:3000\";\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component(\"goodsitem\", {\r\n  template: `<div class=\"goods-item\">\r\n  <img src=\"https://picsum.photos/110\" alt=\"img\">\r\n  <h5>{{good.id_product}}</h5>\r\n  <h3>{{good.product_name}}</h3>\r\n  <p>{{good.price}} &#8381;.</p>\r\n  <button class=\"item-button-add\" type=\"button\" @click=\"addToBasket\">&#43;</button>\r\n  <button class=\"item-button-rem\" type=\"button\" @click=\"removeFromBasket\">&mdash;</button>\r\n  </div>`,\r\n  props: [\"good\"],\r\n  methods: {\r\n\r\n    async addToBasket() {\r\n\r\n      await fetch(`${API_URL}/addToBasket`, {\r\n        method: 'POST',\r\n        mode: 'cors',\r\n        headers: {\r\n          'Content-Type': 'application/json;charset=utf-8'\r\n        },\r\n        body: JSON.stringify(this.good)\r\n      });\r\n\r\n      this.$root.fetchBasket();\r\n\r\n    },\r\n\r\n    async removeFromBasket() {\r\n\r\n      await fetch(`${API_URL}/remFromBasket`, {\r\n        method: 'POST',\r\n        mode: 'cors',\r\n        headers: {\r\n          'Content-Type': 'application/json;charset=utf-8'\r\n        },\r\n        body: JSON.stringify(this.good)\r\n      });\r\n\r\n      this.$root.fetchBasket();\r\n\r\n    },\r\n\r\n  },\r\n\r\n}));\n\n//# sourceURL=webpack://back/../front/goodsitemComp.js?");

/***/ }),

/***/ "../front/script.js":
/*!**************************!*\
  !*** ../front/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _searchComp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchComp */ \"../front/searchComp.js\");\n/* harmony import */ var _catalogueComp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogueComp */ \"../front/catalogueComp.js\");\n/* harmony import */ var _goodsitemComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goodsitemComp */ \"../front/goodsitemComp.js\");\n/* harmony import */ var _basketComp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basketComp */ \"../front/basketComp.js\");\n/* harmony import */ var _serrorComp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serrorComp */ \"../front/serrorComp.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst API_URL = \"http://localhost:3000\";\r\n\r\nconst app = new Vue({\r\n\r\n  el: \"#app\",\r\n\r\n  data: {\r\n    goods: [],\r\n    filteredGoods: [],\r\n    searchLine: \"\",\r\n    basket: [],\r\n    totalPrice: 0,\r\n  },\r\n\r\n  methods: {\r\n\r\n    async fetchGoods() {\r\n      const response = await fetch(`${API_URL}/catalogData`);\r\n      if (response.ok) {\r\n        this.goods = await response.json();\r\n        this.filteredGoods = this.goods;\r\n      }\r\n    },\r\n\r\n    async fetchBasket() {\r\n      const response = await fetch(`${API_URL}/cartData`);\r\n      if (response.ok) {\r\n        this.basket = await response.json();\r\n      }\r\n      this.updatePrice();\r\n    },\r\n\r\n    filterGoods() {\r\n      this.filteredGoods = [];\r\n      this.goods.forEach(good => {\r\n\r\n        if (this.searchLine.toLowerCase() === good.product_name.toLowerCase()) {\r\n          this.filteredGoods.push(good);\r\n\r\n        } else if (this.searchLine === \"\") {\r\n          this.filteredGoods = this.goods;\r\n        }\r\n\r\n      });\r\n    },\r\n\r\n    updatePrice() {\r\n      this.totalPrice = 0;\r\n      this.basket.forEach(good => { this.totalPrice += good.price; });\r\n    }\r\n\r\n  },\r\n\r\n  mounted() {\r\n    this.fetchGoods();\r\n    this.fetchBasket();\r\n  },\r\n\r\n});\r\n\r\ndocument.querySelector(\".search-button\").addEventListener(\"click\", app.filterGoods);\n\n//# sourceURL=webpack://back/../front/script.js?");

/***/ }),

/***/ "../front/searchComp.js":
/*!******************************!*\
  !*** ../front/searchComp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component(\"search\", {\r\n    template: `<input type=\"text\" class=\"goods-search\" v-bind:value=\"searchLine\" v-on:input=\"$emit('input', $event.target.value)\">`,\r\n    props: [\"searchLine\"],\r\n  }));\n\n//# sourceURL=webpack://back/../front/searchComp.js?");

/***/ }),

/***/ "../front/serrorComp.js":
/*!******************************!*\
  !*** ../front/serrorComp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component(\"serror\", {\r\n  template: `<div v-if=\"goods.length === 0\">\r\n  <div class=\"goods-list\">\r\n    <h3>⛔ Server data error! Try to access this page later! ⛔</h3>\r\n    </div>\r\n  </div>`,\r\n  props: [\"goods\"],\r\n}));\n\n//# sourceURL=webpack://back/../front/serrorComp.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("../front/script.js");
/******/ 	
/******/ })()
;