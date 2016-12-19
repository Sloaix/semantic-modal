(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SemanticModal"] = factory();
	else
		root["SemanticModal"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var ModalType;
(function (ModalType) {
    ModalType[ModalType["NORMAL"] = 0] = "NORMAL";
    ModalType[ModalType["BASIC"] = 1] = "BASIC";
})(ModalType || (ModalType = {}));
exports.ModalType = ModalType;
var ModalSize;
(function (ModalSize) {
    ModalSize[ModalSize["NORMAL"] = 0] = "NORMAL";
    ModalSize[ModalSize["SMALL"] = 1] = "SMALL";
    ModalSize[ModalSize["LARGE"] = 2] = "LARGE";
})(ModalSize || (ModalSize = {}));
exports.ModalSize = ModalSize;
var ModalAnimation;
(function (ModalAnimation) {
    ModalAnimation[ModalAnimation["SCALE"] = 0] = "SCALE";
    ModalAnimation[ModalAnimation["FADE"] = 1] = "FADE";
    ModalAnimation[ModalAnimation["DROP"] = 2] = "DROP";
    ModalAnimation[ModalAnimation["FLY"] = 3] = "FLY";
    ModalAnimation[ModalAnimation["BROWSE"] = 4] = "BROWSE";
    ModalAnimation[ModalAnimation["SLIDE"] = 5] = "SLIDE";
    ModalAnimation[ModalAnimation["JIGGLE"] = 6] = "JIGGLE";
    ModalAnimation[ModalAnimation["FLASH"] = 7] = "FLASH";
    ModalAnimation[ModalAnimation["SHAKE"] = 8] = "SHAKE";
    ModalAnimation[ModalAnimation["PULSE"] = 9] = "PULSE";
    ModalAnimation[ModalAnimation["TADA"] = 10] = "TADA";
    ModalAnimation[ModalAnimation["BOUNCE"] = 11] = "BOUNCE";
})(ModalAnimation || (ModalAnimation = {}));
exports.ModalAnimation = ModalAnimation;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var EnumType_1 = __webpack_require__(0);
var $ = window['jquery'] || window['$'];
var Util_1 = __webpack_require__(3);
var Modal = (function () {
    function Modal() {
        this._positiveIcon = 'ok';
        this._negativeIcon = 'remove';
        this._duration = 400;
        this._animation = EnumType_1.ModalAnimation.SCALE;
        this._init = false;
        this._id = Util_1.default.guid();
    }
    Object.defineProperty(Modal.prototype, "title", {
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "content", {
        set: function (value) {
            this._content = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "positiveCallback", {
        set: function (value) {
            this._positiveCallback = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "negativeCallback", {
        set: function (value) {
            this._negativeCallback = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "positiveText", {
        set: function (value) {
            this._positiveText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "negativeText", {
        set: function (value) {
            this._negativeText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "positiveAppendClasses", {
        set: function (value) {
            this._positiveAppendClasses = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "negativeAppendClasses", {
        set: function (value) {
            this._negativeAppendClasses = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "size", {
        set: function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "closeable", {
        set: function (value) {
            this._closeable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "type", {
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "showPositiveButton", {
        set: function (value) {
            this._showPositiveButton = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "showNegativeButton", {
        set: function (value) {
            this._showNegativeButton = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "fullscreen", {
        set: function (value) {
            this._fullscreen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "showCloseButton", {
        set: function (value) {
            this._showCloseButton = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "modalAppendClasses", {
        set: function (value) {
            this._modalAppendClasses = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "positiveIcon", {
        set: function (value) {
            this._positiveIcon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "negativeIcon", {
        set: function (value) {
            this._negativeIcon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "titleIcon", {
        set: function (value) {
            this._titleIcon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "duration", {
        set: function (value) {
            this._duration = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "animation", {
        set: function (value) {
            this._animation = value;
        },
        enumerable: true,
        configurable: true
    });
    Modal.prototype.init = function () {
        if (this._init) {
            throw new Error('this modal has been initialized');
        }
        this._$modal = this.createSemanticModalInstance();
        this._init = true;
        return this;
    };
    Modal.prototype.createSemanticModalInstance = function () {
        var setting = {
            closable: this._closeable,
            duration: this._duration,
            transition: EnumType_1.ModalAnimation[this._animation].toLowerCase()
        };
        var sizeClass = '';
        switch (this._size) {
            case EnumType_1.ModalSize.SMALL: {
                sizeClass = 'small';
                break;
            }
            case EnumType_1.ModalSize.LARGE: {
                sizeClass = 'large';
                break;
            }
            case EnumType_1.ModalSize.NORMAL:
            default:
        }
        var $modal = $("<div class='ui " + sizeClass + " modal' id='" + this._id + "'></div>");
        if (this._modalAppendClasses) {
            $modal.addClass(this._modalAppendClasses);
        }
        var isBasic = false;
        if (this._type == EnumType_1.ModalType.BASIC) {
            isBasic = true;
            $modal.addClass('basic');
        }
        if (this._showCloseButton) {
            var closeButtonAppendClasses = isBasic ? 'white' : 'black';
            $modal.append("<i class='close icon " + closeButtonAppendClasses + "' style='top: 0.5rem;right: 0.5rem'></i>");
        }
        if (this._fullscreen) {
            $modal.addClass('fullscreen');
        }
        if (this._title) {
            var $header = $("<div class='ui header " + (isBasic ? 'icon' : '') + "' style='" + (isBasic ? ';text-align:center;' : '') + ";word-break: break-all;word-wrap: break-word'>" + this._title + "</div>");
            var $titleIcon = this._titleIcon ? $("<i class='icon " + this._titleIcon + "'></i>") : null;
            if ($titleIcon) {
                $header.prepend($titleIcon);
            }
            $modal.append($header);
        }
        if (this._content) {
            $modal.append("<div class='content' style='" + (isBasic ? ';text-align:center;' : '') + (!this._title ? ';margin-top:1.5rem;' : '') + "'><p style='word-break: break-all;word-wrap: break-word'>" + this._content + "</p></div>");
        }
        var $actions = $("<div class='actions' style='border: none;background:none;" + (isBasic ? 'text-align:center;' : '') + "'></div>");
        if (this._showNegativeButton) {
            if (isBasic) {
                this._negativeAppendClasses += ' red basic inverted ';
            }
            var $button = $("<div class='ui mini negative button " + this._negativeAppendClasses + "'>" + this._negativeText + "</div>");
            if (this._negativeIcon) {
                $button.prepend("<i class='" + this._negativeIcon + " icon'></i>");
            }
            $actions.append($button);
        }
        if (this._showPositiveButton) {
            if (isBasic) {
                this._positiveAppendClasses += ' green inverted ';
            }
            var $button = $("<div class='ui mini positive button " + this._positiveAppendClasses + "'>" + this._positiveText + "</div>");
            if (this._positiveIcon) {
                $button.prepend("<i class='" + this._positiveIcon + " icon'></i>");
            }
            $actions.append($button);
        }
        if ($actions.children('.ui.button').length > 0) {
            $modal.append($actions);
        }
        if (this._positiveCallback instanceof Function) {
            setting.onApprove = this._positiveCallback;
        }
        else {
            throw new Error("the positive callback must be a function,but you provide a  " + typeof this._positiveCallback + ".");
        }
        if (this._negativeCallback instanceof Function) {
            setting.onDeny = this._negativeCallback;
        }
        else {
            throw new Error("the negative callback must be a function,but you provide a " + typeof this._negativeCallback + ".");
        }
        $modal.modal(setting);
        return $modal;
    };
    Modal.prototype.show = function () {
        this.modalInvoke('show');
    };
    Modal.prototype.hide = function () {
        this.modalInvoke('hide');
    };
    Modal.prototype.toggle = function () {
        this.modalInvoke('toggle');
    };
    Modal.prototype.modalInvoke = function (method) {
        this.checkInit();
        return this._$modal.modal(method);
    };
    Modal.prototype.checkInit = function () {
        if (!this._init) {
            throw new Error("this modal has'nt been initialized");
        }
    };
    return Modal;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Modal;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var Modal_1 = __webpack_require__(1);
var EnumType_1 = __webpack_require__(0);
var ModalBuilder = (function () {
    function ModalBuilder() {
        this._positiveCallback = function () {
        };
        this._negativeCallback = function () {
        };
        this._positiveText = '确定';
        this._negativeText = '取消';
        this._positiveAppendClasses = '';
        this._negativeAppendClasses = '';
        this._positiveIcon = 'checkmark';
        this._negativeIcon = 'remove';
        this._showPositiveButton = true;
        this._showNegativeButton = true;
        this._closeable = true;
        this._fullscreen = false;
        this._showCloseButton = true;
        this._modalAppendClasses = '';
        this._titleIcon = '';
        this._size = EnumType_1.ModalSize.NORMAL;
        this._type = EnumType_1.ModalType.NORMAL;
        this._duration = 400;
        this._animation = EnumType_1.ModalAnimation.SCALE;
    }
    ModalBuilder.prototype.title = function (value) {
        this._title = value;
        return this;
    };
    ModalBuilder.prototype.content = function (value) {
        this._content = value;
        return this;
    };
    ModalBuilder.prototype.titleIcon = function (value) {
        this._titleIcon = value;
        return this;
    };
    ModalBuilder.prototype.duration = function (value) {
        this._duration = value;
        return this;
    };
    ModalBuilder.prototype.anim = function (value) {
        this._animation = value;
        return this;
    };
    ModalBuilder.prototype.size = function (value) {
        this._size = value;
        this._fullscreen = false;
        return this;
    };
    ModalBuilder.prototype.type = function (value) {
        this._type = value;
        return this;
    };
    ModalBuilder.prototype.closeable = function (value) {
        this._closeable = value;
        return this;
    };
    ModalBuilder.prototype.fullscreen = function (value) {
        this._fullscreen = value;
        this._size = null;
        return this;
    };
    ModalBuilder.prototype.positiveCallback = function (value) {
        this._positiveCallback = value;
        return this;
    };
    ModalBuilder.prototype.negativeCallback = function (value) {
        this._negativeCallback = value;
        return this;
    };
    ModalBuilder.prototype.positiveIcon = function (value) {
        this._positiveIcon = value;
        return this;
    };
    ModalBuilder.prototype.negativeIcon = function (value) {
        this._negativeIcon = value;
        return this;
    };
    ModalBuilder.prototype.positiveText = function (value) {
        this._positiveText = value;
        return this;
    };
    ModalBuilder.prototype.negativeText = function (value) {
        this._negativeText = value;
        return this;
    };
    ModalBuilder.prototype.positiveAppendClasses = function (value) {
        this._positiveAppendClasses = value;
        return this;
    };
    ModalBuilder.prototype.negativeAppendClasses = function (value) {
        this._negativeAppendClasses = value;
        return this;
    };
    ModalBuilder.prototype.showPositiveButton = function (value) {
        this._showPositiveButton = value;
        return this;
    };
    ModalBuilder.prototype.showNegativeButton = function (value) {
        this._showNegativeButton = value;
        return this;
    };
    ModalBuilder.prototype.showCloseButton = function (value) {
        this._showCloseButton = value;
        return this;
    };
    ModalBuilder.prototype.modalAppendClasses = function (value) {
        this._modalAppendClasses = value;
        return this;
    };
    ModalBuilder.prototype.build = function () {
        var modal = new Modal_1.default();
        modal.size = this._size;
        modal.type = this._type;
        modal.titleIcon = this._titleIcon;
        modal.title = this._title;
        modal.duration = this._duration;
        modal.animation = this._animation;
        modal.title = this._title;
        modal.content = this._content;
        modal.closeable = this._closeable;
        modal.fullscreen = this._fullscreen;
        modal.showCloseButton = this._showCloseButton;
        modal.modalAppendClasses = this._modalAppendClasses;
        modal.positiveAppendClasses = this._positiveAppendClasses;
        modal.showPositiveButton = this._showPositiveButton;
        modal.positiveCallback = this._positiveCallback;
        modal.positiveText = this._positiveText;
        modal.positiveIcon = this._positiveIcon;
        modal.negativeAppendClasses = this._negativeAppendClasses;
        modal.showNegativeButton = this._showNegativeButton;
        modal.negativeCallback = this._negativeCallback;
        modal.negativeText = this._negativeText;
        modal.negativeIcon = this._negativeIcon;
        return modal.init();
    };
    return ModalBuilder;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ModalBuilder;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var Util = (function () {
    function Util() {
    }
    Util.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
    return Util;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Util;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var ModalBuilder_1 = __webpack_require__(2);
exports.ModalBuilder = ModalBuilder_1.default;
var Modal_1 = __webpack_require__(1);
exports.Modal = Modal_1.default;
var EnumType_1 = __webpack_require__(0);
exports.ModalType = EnumType_1.ModalType;
exports.ModalSize = EnumType_1.ModalSize;
exports.ModalAnimation = EnumType_1.ModalAnimation;


/***/ }
/******/ ]);
});