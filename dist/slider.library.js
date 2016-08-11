(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Slider", [], factory);
	else if(typeof exports === 'object')
		exports["Slider"] = factory();
	else
		root["Slider"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var touch_handler_1 = __webpack_require__(1);
	var ANIMATION_TIME = 300;
	var Slider = (function () {
	    function Slider(element, images) {
	        this.element = element;
	        this.images = images;
	        this.currentSlide = 0;
	        this.totalSlides = 0;
	        this.imageElements = [];
	        this.totalSlides = this.images.length;
	        this.addImageContainer();
	        this.images.map(this.addImage.bind(this));
	        // this.imageElements[this.currentSlide].style.display = 'block';
	        this.showImage(this.imageElements[this.currentSlide]);
	        this.addCounter();
	        this.addArrows();
	        this.setupTouchListeners();
	    }
	    /**
	     * go to next image
	     */
	    Slider.prototype.next = function () {
	        this.gotoImage(this.currentSlide + 1);
	    };
	    /**
	     * go to previous image
	     */
	    Slider.prototype.prev = function () {
	        this.gotoImage(this.currentSlide - 1);
	    };
	    Slider.prototype.showImage = function (imgEl) {
	        setTimeout(function () {
	            imgEl.style.display = 'block';
	        }, ANIMATION_TIME);
	        setTimeout(function () {
	            imgEl.style.opacity = '1';
	        }, ANIMATION_TIME) * 2;
	    };
	    Slider.prototype.hideImage = function (imgEl) {
	        imgEl.style.opacity = '0';
	        setTimeout(function () {
	            imgEl.style.display = 'none';
	        }, ANIMATION_TIME);
	    };
	    /**
	     * go to given image number
	     */
	    Slider.prototype.gotoImage = function (n) {
	        /**
	         * if given number doesnt exist goto to end/beginning of images
	         * update counter
	         */
	        this.hideImage(this.imageElements[this.currentSlide]);
	        // this.imageElements[this.currentSlide].style.display = 'none';
	        if (n > this.imageElements.length - 1) {
	            this.currentSlide = 0;
	        }
	        else if (n < 0) {
	            this.currentSlide = this.imageElements.length - 1;
	        }
	        else {
	            this.currentSlide = n;
	        }
	        // this.imageElements[this.currentSlide].style.display = 'block';
	        this.showImage(this.imageElements[this.currentSlide]);
	        this.updateCounter();
	    };
	    /**
	     * update counter element to display currently displayed image number
	     */
	    Slider.prototype.updateCounter = function () {
	        this.counterElement.innerHTML = (this.currentSlide + 1) + " / " + this.totalSlides;
	    };
	    /**
	     * add image container
	     */
	    Slider.prototype.addImageContainer = function () {
	        this.imageContainer = document.createElement('div');
	        this.imageContainer.className = 'slider-container';
	        this.element.appendChild(this.imageContainer);
	    };
	    /**
	     * add an image to the element
	     */
	    Slider.prototype.addImage = function (imageSrc) {
	        var img = new Image();
	        img.src = imageSrc;
	        var imageSlide = document.createElement('div');
	        imageSlide.className = 'slider-img';
	        imageSlide.appendChild(img);
	        imageSlide.style.opacity = '0';
	        imageSlide.style.display = 'none';
	        this.imageElements.push(imageSlide);
	        this.imageContainer.appendChild(imageSlide);
	    };
	    /**
	     * add a counter to the element
	     */
	    Slider.prototype.addCounter = function () {
	        this.counterElement = document.createElement('div');
	        this.counterElement.className = 'slider-counter';
	        this.updateCounter();
	        this.element.appendChild(this.counterElement);
	    };
	    /**
	     * add prev/next arrows
	     */
	    Slider.prototype.addArrows = function () {
	        var prevImg = '❮', nextImg = '❯';
	        var nextButton = document.createElement('a');
	        nextButton.className = 'slider-next';
	        nextButton.href = '#';
	        nextButton.innerText = nextImg;
	        nextButton.onclick = this.next.bind(this);
	        var prevButton = document.createElement('a');
	        prevButton.className = 'slider-prev';
	        prevButton.href = '#';
	        prevButton.innerText = prevImg;
	        prevButton.onclick = this.prev.bind(this);
	        this.imageContainer.appendChild(prevButton);
	        this.imageContainer.appendChild(nextButton);
	    };
	    /**
	     * setup touch event listeners
	     */
	    Slider.prototype.setupTouchListeners = function () {
	        this.touchHandler = new touch_handler_1.TouchHandler(this.imageContainer, this.prev.bind(this), this.next.bind(this));
	    };
	    return Slider;
	}());
	exports.Slider = Slider;


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var MIN_DISTANCE = 30;
	var TouchHandler = (function () {
	    function TouchHandler(element, leftHandler, rightHandler) {
	        this.element = element;
	        this.leftHandler = leftHandler;
	        this.rightHandler = rightHandler;
	        this.element.addEventListener('touchstart', this.onTouchStart.bind(this), false);
	        this.element.addEventListener('touchend', this.onTouchEnd.bind(this), false);
	    }
	    TouchHandler.prototype.onTouchStart = function (e) {
	        if (!e.pageX) {
	            return;
	        }
	        this.startX = e.pageX;
	    };
	    TouchHandler.prototype.onTouchEnd = function (e) {
	        if (!e.pageX || !this.startX) {
	            return;
	        }
	        var diff = e.pageX - this.startX;
	        if (diff > 0 && diff > MIN_DISTANCE) {
	            //left swipe
	            this.leftHandler();
	        }
	        else if (diff < 0 && diff < -30) {
	            // right swipe
	            this.rightHandler();
	        }
	        this.startX = null;
	    };
	    return TouchHandler;
	}());
	exports.TouchHandler = TouchHandler;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=slider.library.js.map