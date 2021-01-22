(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("LSFPlugin", [], factory);
	else if(typeof exports === 'object')
		exports["LSFPlugin"] = factory();
	else
		root["LSFPlugin"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDeleteDao = exports.CustomerDeleteService = exports.CustomerDeletePlugin = void 0;
var index_1 = __webpack_require__(/*! ./src/index */ "./src/index.ts");
Object.defineProperty(exports, "CustomerDeletePlugin", { enumerable: true, get: function () { return index_1.CustomerDeletePlugin; } });
var index_2 = __webpack_require__(/*! ./src/service/index */ "./src/service/index.ts");
Object.defineProperty(exports, "CustomerDeleteService", { enumerable: true, get: function () { return index_2.CustomerDeleteService; } });
var index_3 = __webpack_require__(/*! ./src/dao/index */ "./src/dao/index.ts");
Object.defineProperty(exports, "CustomerDeleteDao", { enumerable: true, get: function () { return index_3.CustomerDeleteDao; } });


/***/ }),

/***/ "./src/dao/index.ts":
/*!**************************!*\
  !*** ./src/dao/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDeleteDao = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var CustomerDeleteDao = /** @class */ (function () {
    function CustomerDeleteDao(taskQueue) {
        this.taskQueue = taskQueue;
    }
    CustomerDeleteDao.prototype.deleteAccount = function (customerId, token) {
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/customer-delete/' + customerId + '?token=' + token),
            payload: {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' }
            }
        });
    };
    CustomerDeleteDao.prototype.confirmDelete = function (customerId, deleteToken) {
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/customer-delete/confirm/' + customerId + '?token=' + deleteToken),
            payload: {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' }
            }
        });
    };
    CustomerDeleteDao = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.TaskQueue)),
        __metadata("design:paramtypes", [libstorefront_1.TaskQueue])
    ], CustomerDeleteDao);
    return CustomerDeleteDao;
}());
exports.CustomerDeleteDao = CustomerDeleteDao;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDeletePlugin = void 0;
var dao_1 = __webpack_require__(/*! ./dao */ "./src/dao/index.ts");
var service_1 = __webpack_require__(/*! ./service */ "./src/service/index.ts");
/**
 * Libstorefront plugin for customer delete
 */
exports.CustomerDeletePlugin = (function (libstorefront) {
    libstorefront.getIOCContainer().bind(dao_1.CustomerDeleteDao).to(dao_1.CustomerDeleteDao);
    libstorefront.getIOCContainer().bind(service_1.CustomerDeleteService).to(service_1.CustomerDeleteService);
});


/***/ }),

/***/ "./src/service/index.ts":
/*!******************************!*\
  !*** ./src/service/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDeleteService = void 0;
var dao_1 = __webpack_require__(/*! ../dao */ "./src/dao/index.ts");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var CustomerDeleteService = /** @class */ (function () {
    function CustomerDeleteService(userService, customerDeleteDao, store) {
        this.userService = userService;
        this.customerDeleteDao = customerDeleteDao;
        this.store = store;
    }
    /**
     * Requests account delete for currently authorized user
     * @returns {Promise<void>}
     */
    CustomerDeleteService.prototype.deleteCustomer = function () {
        try {
            var customer = this.store.getState().user.current;
            var token = this.store.getState().user.token;
            if (!customer || !customer.id) {
                throw new Error('Cannot delete unauthorized user');
            }
            if (!token) {
                throw new Error('Cannot delete unauthorized user');
            }
            return this.customerDeleteDao.deleteAccount(customer.id, token)
                .then(function (response) {
                if (response.result) {
                    return;
                }
                else {
                    throw new Error('Error during delete');
                }
            });
        }
        catch (e) {
            libstorefront_1.Logger.error('Cannot delete customer: ', 'customer-delete-plugin', e.message);
        }
    };
    /**
     * Confirms user delete - customerId and deleteToken
     * are the params that should be read from email redirect url
     * @param {string} customerId
     * @param {string} deleteToken
     * @returns {Promise<void>}
     */
    CustomerDeleteService.prototype.confirmDelete = function (customerId, deleteToken) {
        var _this = this;
        try {
            if (!customerId) {
                throw new Error('Invalid customer id');
            }
            if (!deleteToken) {
                throw new Error('Invalid delete token');
            }
            return this.customerDeleteDao.confirmDelete(customerId, deleteToken)
                .then(function (response) {
                if (response.result) {
                    _this.userService.logout();
                    return;
                }
                else {
                    throw new Error('Error during delete');
                }
            });
        }
        catch (e) {
            libstorefront_1.Logger.error('Cannot delete customer: ', 'customer-delete-plugin', e.message);
        }
    };
    CustomerDeleteService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.UserService)),
        __param(1, inversify_1.inject(dao_1.CustomerDeleteDao)),
        __param(2, inversify_1.inject(libstorefront_1.AbstractStore)),
        __metadata("design:paramtypes", [libstorefront_1.UserService,
            dao_1.CustomerDeleteDao,
            libstorefront_1.AbstractStore])
    ], CustomerDeleteService);
    return CustomerDeleteService;
}());
exports.CustomerDeleteService = CustomerDeleteService;


/***/ }),

/***/ "@grupakmk/libstorefront":
/*!******************************************!*\
  !*** external "@grupakmk/libstorefront" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@grupakmk/libstorefront");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map