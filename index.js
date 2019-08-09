(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: AuthenticatedRouter, AuthenticatedRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_AuthenticatedRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/AuthenticatedRouter */ "./src/AuthenticatedRouter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedRouter", function() { return _src_AuthenticatedRouter__WEBPACK_IMPORTED_MODULE_0__["AuthenticatedRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedRoute", function() { return _src_AuthenticatedRouter__WEBPACK_IMPORTED_MODULE_0__["AuthenticatedRoute"]; });




/***/ }),

/***/ "./src/AuthenticatedRouter.ts":
/*!************************************!*\
  !*** ./src/AuthenticatedRouter.ts ***!
  \************************************/
/*! exports provided: AuthenticatedRoute, AuthenticatedRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedRoute", function() { return AuthenticatedRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedRouter", function() { return AuthenticatedRouter; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);

var AuthenticatedRoute = /** @class */ (function () {
    function AuthenticatedRoute(routePrefix, router, opts) {
        this.opts = opts;
        this.route = router.route(routePrefix);
    }
    AuthenticatedRoute.prototype.get = function (handler) {
        handler = this.opts.controllerGenerator ? this.opts.controllerGenerator(handler) : handler;
        if (this.opts.authHandler) {
            this.route.get(this.opts.authHandler, handler);
        }
        else {
            this.route.get(handler);
        }
        return this;
    };
    AuthenticatedRoute.prototype.post = function (handler) {
        handler = this.opts.controllerGenerator ? this.opts.controllerGenerator(handler) : handler;
        if (this.opts.authHandler) {
            this.route.post(this.opts.authHandler, handler);
        }
        else {
            this.route.post(handler);
        }
        return this;
    };
    AuthenticatedRoute.prototype.put = function (handler) {
        handler = this.opts.controllerGenerator ? this.opts.controllerGenerator(handler) : handler;
        if (this.opts.authHandler) {
            this.route.put(this.opts.authHandler, handler);
        }
        else {
            this.route.put(handler);
        }
        return this;
    };
    AuthenticatedRoute.prototype.patch = function (handler) {
        handler = this.opts.controllerGenerator ? this.opts.controllerGenerator(handler) : handler;
        if (this.opts.authHandler) {
            this.route.patch(this.opts.authHandler, handler);
        }
        else {
            this.route.patch(handler);
        }
        return this;
    };
    AuthenticatedRoute.prototype.delete = function (handler) {
        handler = this.opts.controllerGenerator ? this.opts.controllerGenerator(handler) : handler;
        if (this.opts.authHandler) {
            this.route.delete(this.opts.authHandler, handler);
        }
        else {
            this.route.delete(handler);
        }
        return this;
    };
    AuthenticatedRoute.prototype.all = function (handler) {
        handler = this.opts.controllerGenerator ? this.opts.controllerGenerator(handler) : handler;
        if (this.opts.authHandler) {
            this.route.all(this.opts.authHandler, handler);
        }
        else {
            this.route.all(handler);
        }
        return this;
    };
    AuthenticatedRoute.prototype.options = function (handler) {
        handler = this.opts.controllerGenerator ? this.opts.controllerGenerator(handler) : handler;
        if (this.opts.authHandler) {
            this.route.options(this.opts.authHandler, handler);
        }
        else {
            this.route.options(handler);
        }
        return this;
    };
    AuthenticatedRoute.prototype.head = function (handler) {
        handler = this.opts.controllerGenerator ? this.opts.controllerGenerator(handler) : handler;
        if (this.opts.authHandler) {
            this.route.head(this.opts.authHandler, handler);
        }
        else {
            this.route.head(handler);
        }
        return this;
    };
    return AuthenticatedRoute;
}());

var AuthenticatedRouter = /** @class */ (function () {
    function AuthenticatedRouter(options) {
        this.options = options;
        this.router = express__WEBPACK_IMPORTED_MODULE_0__["Router"]();
        this.options = options || {};
    }
    AuthenticatedRouter.prototype.route = function (route) {
        return new AuthenticatedRoute(route, this.router, this.options);
    };
    return AuthenticatedRouter;
}());



/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./index.ts */"./index.ts");


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map