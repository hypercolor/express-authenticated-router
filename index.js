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
        this.myMiddleware = [];
        this.route = router.route(routePrefix);
    }
    AuthenticatedRoute.prototype.use = function (middleware) {
        this.myMiddleware.push(middleware);
        return this;
    };
    AuthenticatedRoute.prototype.get = function (controller) {
        return this.handleMethod('get', controller);
    };
    AuthenticatedRoute.prototype.post = function (controller) {
        return this.handleMethod('post', controller);
    };
    AuthenticatedRoute.prototype.put = function (controller) {
        return this.handleMethod('put', controller);
    };
    AuthenticatedRoute.prototype.patch = function (controller) {
        return this.handleMethod('patch', controller);
    };
    AuthenticatedRoute.prototype.delete = function (controller) {
        return this.handleMethod('delete', controller);
    };
    AuthenticatedRoute.prototype.all = function (controller) {
        return this.handleMethod('all', controller);
    };
    AuthenticatedRoute.prototype.options = function (controller) {
        return this.handleMethod('options', controller);
    };
    AuthenticatedRoute.prototype.head = function (controller) {
        return this.handleMethod('head', controller);
    };
    AuthenticatedRoute.prototype.handleMethod = function (name, handler) {
        var _a;
        if (this.opts.controllerBuilder) {
            // handler MUST be a Controller type
            handler = this.opts.controllerBuilder(handler);
        }
        // handler = this.opts.controllerGenerator ? this.opts.controllerGenerator(handler) : handler
        (_a = this.route)[name].apply(_a, this.buildMiddlewareArray().concat([handler]));
        return this;
    };
    AuthenticatedRoute.prototype.buildMiddlewareArray = function () {
        var handlers = [];
        if (this.opts.middleware) {
            handlers = handlers.concat(this.opts.middleware);
        }
        return handlers.concat(this.myMiddleware);
    };
    return AuthenticatedRoute;
}());

var AuthenticatedRouter = /** @class */ (function () {
    function AuthenticatedRouter(options) {
        this.options = options;
        this.router = express__WEBPACK_IMPORTED_MODULE_0__["Router"]();
        this.options = options || {};
    }
    AuthenticatedRouter.build = function (options, builder) {
        var router = new AuthenticatedRouter();
        builder(router);
        return router.router;
    };
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