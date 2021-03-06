/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,i,e){if("undefined"==typeof e)throw"[Zoomage.js Error] You must use Zoomage.js in a browser environment, missing key object [document]."; true?module.exports=i():"function"==typeof define&&define.amd?define(i):global.Zoomage=i()}(this,function(){var t=function(t){if(!t||!t.container)throw"[Zoomage.js Error] Zoomage constructor: missing arguments [container].";this.container=t.container,this.canvas=document.createElement("canvas"),this.container.appendChild(this.canvas),this.context=this.canvas.getContext("2d"),this.onZoom=t.onZoom||null,this.onRotate=t.onRotate||null,this.onDrag=t.onDrag||null,this.context.save(),this.dbclickZoomThreshold=Math.abs(t.dbclickZoomThreshold)||.1,this.maxZoom=Math.abs(t.maxZoom)||2,this.minZoom=Math.abs(t.minZoom)||.2,this.enableGestureRotate=t.enableGestureRotate||!1,this.enableDesktop=t.enableDesktop||!1,this.imgTexture=new Image,this.isImgLoaded=!1,this.isFirstTimeLoad=!0,this.lastZoomScale=null,this.lastX=null,this.lastY=null,this.zoomD=1,this.mdown=!1,this.lastTouchEndTimestamp=null,this.lastTouchEndObject=null,this.animateHandle=null,this.dbclickZoomToggle=!0,this._checkRequestAnimationFrame(),this.enableGestureRotate?("transform"in document.body.style?this.prefixedTransform="transform":"webkitTransform"in document.body.style&&(this.prefixedTransform="webkitTransform"),this._setEventListeners_Transform(),requestAnimationFrame(this._animate_Transform.bind(this))):(this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.width=this.canvas.clientWidth,this.canvas.height=this.canvas.clientHeight,this._setEventListeners_Canvas(),requestAnimationFrame(this._animate_Canvas.bind(this)))};return t.prototype={_animate_Transform:function(){this.zoomD>this.maxZoom?this.zoomD=this.maxZoom:this.zoomD<this.minZoom&&(this.zoomD=this.minZoom),this.isImgLoaded&&(this.canvas.style[this.prefixedTransform]="translate("+this.moveXD+"px,"+this.moveYD+"px) translateZ(0) scale("+this.zoomD+") rotate("+this.rotate.angle+"deg)"),this.isFirstTimeLoad&&this.isImgLoaded&&(this.context.drawImage(this.imgTexture,this.position.x,this.position.y,this.scale.x*this.imgTexture.width,this.scale.y*this.imgTexture.height),this.isFirstTimeLoad=!1),requestAnimationFrame(this._animate_Transform.bind(this))},_animate_Canvas:function(){null!==this.imgTexture.src&&(this.isOnTouching||this.mdown?this.context.clearRect(0,0,this.canvas.width,this.canvas.height):(this.context.restore(),this.context.save()),(this.isOnTouching||this.isFirstTimeLoad||this.mdown)&&this.isImgLoaded&&(this.context.drawImage(this.imgTexture,this.position.x,this.position.y,this.scale.x*this.imgTexture.width,this.scale.y*this.imgTexture.height),this.isFirstTimeLoad=!1),requestAnimationFrame(this._animate_Canvas.bind(this)))},_gesturePinchZoom:function(t){var i=!1;if(t.length>=2){var e=t[0],s=t[1],n=Math.sqrt(Math.pow(s.pageX-e.pageX,2)+Math.pow(s.pageY-e.pageY,2));this.lastZoomScale&&(i=n-this.lastZoomScale),this.lastZoomScale=n}return i},_enableGestureRotate:function(t){var i=!1;if(t.length>=2)var e=t[0],s=t[1],n=s.pageX-e.pageX,o=s.pageY-e.pageY,h=180*Math.atan2(o,n)/Math.PI;return i={o:e,a:h}},_doZoom:function(t){if(t){var i=this.scale.x;newScale=this.scale.x+t;var e=newScale-i,s=this.imgTexture.width*e,n=this.imgTexture.height*e,o=this.position.x-s/2,h=this.position.y-n/2;return!(newScale>this.maxZoom||newScale<this.minZoom)&&(this.scale.x=newScale,this.scale.y=newScale,this.position.x=o,this.position.y=h,this.isOnTouching=!0,this.zoomD=newScale,this._runCallback("onZoom"),!0)}},_doMove:function(t,i){if(this.lastX&&this.lastY){var e=t-this.lastX,s=i-this.lastY;this.imgTexture.width*this.scale.x,this.imgTexture.height*this.scale.y;this.position.x+=e,this.position.y+=s}this.lastX=t,this.lastY=i},_doRotate:function(t){null!==this.lastTouchRotateAngle&&(this.rotate.angle=this.rotate.angle+1.5*(t.a-this.lastTouchRotateAngle),this.rotate.center=t.o),this.lastTouchRotateAngle=t.a,this._runCallback("onRotate")},_zoomInAnim_Canvas:function(){var t=this.dbclickZoomLength/10*2;if(this.dbclickZoomLength>.01){if(!this._doZoom(t))return!1;this.dbclickZoomLength=this.dbclickZoomLength-t,this.animateHandle=requestAnimationFrame(this._zoomInAnim_Canvas.bind(this))}else cancelAnimationFrame(this.animateHandle);return!0},_zoomOutAnim_Canvas:function(){var t=this.dbclickZoomLength/10*2;if(this.dbclickZoomLength>.01){if(!this._doZoom(-t))return!1;this.dbclickZoomLength=this.dbclickZoomLength-t,this.animateHandle=requestAnimationFrame(this._zoomOutAnim_Canvas.bind(this))}else cancelAnimationFrame(this.animateHandle);return!0},_zoomInAnim_Transform:function(){var t=this.dbclickZoomLength/10*2;return this.dbclickZoomLength>.01?(this.zoomD+=t,this.dbclickZoomLength=this.dbclickZoomLength-t,this.animateHandle=requestAnimationFrame(this._zoomInAnim_Transform.bind(this))):cancelAnimationFrame(this.animateHandle),!0},_zoomOutAnim_Transform:function(){var t=this.dbclickZoomLength/10*2;return this.dbclickZoomLength>.01?(this.zoomD-=t,this.dbclickZoomLength=this.dbclickZoomLength-t,this.animateHandle=requestAnimationFrame(this._zoomOutAnim_Transform.bind(this))):cancelAnimationFrame(this.animateHandle),!0},_gestureDbClick:function(t,i){var e=t.changedTouches[0];if(null===this.lastTouchEndTimestamp||null===this.lastTouchEndObject)this.lastTouchEndTimestamp=Math.round((new Date).getTime()),this.lastTouchEndObject=e;else{var s=Math.round((new Date).getTime());s-this.lastTouchEndTimestamp<300&&Math.abs(this.lastTouchEndObject.pageX-e.pageX)<20&&Math.abs(this.lastTouchEndObject.pageY-e.pageY<20)&&i&&i(),this.lastTouchEndTimestamp=s,this.lastTouchEndObject=e}},_runCallback:function(t,i){switch(t){case"onDrag":"function"===this._type(this.onDrag)&&this.onDrag.call(this,{x:this.lastX.toFixed(3),y:this.lastY.toFixed(3)});break;case"onRotate":"function"===this._type(this.onRotate)&&this.onRotate.call(this,{rotate:(this.rotate.angle%360).toFixed(3)});break;case"onZoom":"function"===this._type(this.onZoom)&&this.onZoom.call(this,{zoom:this.zoomD.toFixed(3),scale:{width:(this.zoomD*this.imgTexture.width).toFixed(3),height:(this.zoomD*this.imgTexture.height).toFixed(3)}})}},_setEventListeners_Transform:function(){this.container.addEventListener("touchend",function(t){this.lastZoomScale=null,this.lastTouchRotateAngle=null,this.enableDesktop||this._gestureDbClick(t,function(){this.dbclickZoomLength=this.dbclickZoomThreshold,this.dbclickZoomToggle?this._zoomInAnim_Transform()||this._zoomOutAnim_Transform():this._zoomOutAnim_Transform()||this._zoomInAnim_Transform(),this.dbclickZoomToggle=!this.dbclickZoomToggle}.bind(this))}.bind(this)),this.container.addEventListener("touchstart",function(t){this.lastX=null,this.lastY=null}.bind(this)),this.container.addEventListener("touchmove",function(t){t.preventDefault(),2==t.touches.length?(this.zoomD=this.zoomD+this._gesturePinchZoom(t.touches)/100,this._runCallback("onZoom"),this._doRotate(this._enableGestureRotate(t.touches))):1==t.touches.length&&(null!==this.lastX&&null!==this.lastY&&(this.moveXD+=t.touches[0].pageX-this.lastX,this.moveYD+=t.touches[0].pageY-this.lastY),this.lastX=t.touches[0].pageX,this.lastY=t.touches[0].pageY,this._runCallback("onDrag"))}.bind(this)),this.imgTexture.addEventListener("load",function(t){this.moveXD=0,this.moveYD=0,this.zoomD=1,this.lastTouchRotateAngle=null,this.rotate={center:{},angle:0},this.canvas.width=this.imgTexture.width,this.canvas.height=this.imgTexture.height,this.canvas.setAttribute("width",this.imgTexture.width+"px"),this.canvas.setAttribute("height",this.imgTexture.height+"px"),this.imgTexture.width>this.imgTexture.height?this.canvas.parentNode.clientWidth<this.imgTexture.width?(this.zoomD=this.canvas.parentNode.clientWidth/this.imgTexture.width,this.moveYD=(this.canvas.parentNode.clientHeight-this.zoomD*this.imgTexture.height)/2-this.imgTexture.height*(1-this.zoomD)/2,this.moveXD=-this.imgTexture.width*(1-this.zoomD)/2):(this.moveXD=(this.canvas.parentNode.clientWidth-this.imgTexture.width)/2,this.moveYD=(this.canvas.parentNode.clientHeight-this.imgTexture.height)/2):this.canvas.parentNode.clientWidth<this.imgTexture.width?(this.zoomD=this.canvas.parentNode.clientHeight/this.imgTexture.height,this.moveXD=(this.canvas.parentNode.clientWidth-this.zoomD*this.imgTexture.width)/2-this.imgTexture.width*(1-this.zoomD)/2,this.moveYD=-this.imgTexture.height*(1-this.zoomD)/2):(this.moveXD=(this.canvas.parentNode.clientWidth-this.imgTexture.width)/2,this.moveYD=(this.canvas.parentNode.clientHeight-this.imgTexture.height)/2),this.isImgLoaded=!0}.bind(this)),this.enableDesktop&&(window.addEventListener("keyup",function(t){187==t.keyCode?this.zoomD+=.1:189==t.keyCode&&(this.zoomD-=.1),187!=t.keyCode&&189!=t.keyCode||this._runCallback("onZoom")}.bind(this)),window.addEventListener("mousedown",function(t){this.mdown=!0,this.lastX=null,this.lastY=null}.bind(this)),window.addEventListener("mouseup",function(t){this.mdown=!1}.bind(this)),window.addEventListener("mousemove",function(t){this.mdown&&(null!==this.lastX&&null!==this.lastY&&(this.moveXD+=t.pageX-this.lastX,this.moveYD+=t.pageY-this.lastY),this.lastX=t.pageX,this.lastY=t.pageY,this._runCallback("onDrag"))}.bind(this)),window.addEventListener("dblclick",function(t){this.dbclickZoomLength=this.dbclickZoomThreshold,this.dbclickZoomToggle?this._zoomInAnim_Transform()||this._zoomOutAnim_Transform():this._zoomOutAnim_Transform()||this._zoomInAnim_Transform(),this.dbclickZoomToggle=!this.dbclickZoomToggle}.bind(this)))},_setEventListeners_Canvas:function(){this.canvas.addEventListener("touchend",function(t){this.isOnTouching=!1,this.lastZoomScale=null,this.enableDesktop||this._gestureDbClick(t,function(){this.dbclickZoomLength=this.dbclickZoomThreshold,this.dbclickZoomToggle?this._zoomInAnim_Canvas()||this._zoomOutAnim_Canvas():this._zoomOutAnim_Canvas()||this._zoomInAnim_Canvas(),this.dbclickZoomToggle=!this.dbclickZoomToggle}.bind(this))}.bind(this)),this.canvas.addEventListener("touchstart",function(t){this.isOnTouching=!0,this.lastX=null,this.lastY=null}.bind(this)),this.canvas.addEventListener("touchmove",function(t){if(t.preventDefault(),2==t.targetTouches.length)this._doZoom(this._gesturePinchZoom(t.targetTouches)/100);else if(1==t.targetTouches.length){var i=t.targetTouches[0].pageX-this.canvas.getBoundingClientRect().left,e=t.targetTouches[0].pageY-this.canvas.getBoundingClientRect().top;this._doMove(i,e),this._runCallback("onDrag")}}.bind(this)),this.imgTexture.addEventListener("load",function(t){if(this.isOnTouching=!1,this.lastTouchEndTimestamp=null,this.lastTouchEndObject=null,this.dbclickZoomLength=0,this.imgTexture.width&&this.imgTexture.height){var i=1;this.imgTexture.width>this.imgTexture.height?this.canvas.clientWidth<this.imgTexture.width?(i=this.canvas.clientWidth/this.imgTexture.width,this.position.y=(this.canvas.clientHeight-i*this.imgTexture.height)/2):(this.position.x=(this.canvas.clientWidth-this.imgTexture.width)/2,this.position.y=(this.canvas.clientHeight-this.imgTexture.height)/2):this.canvas.clientWidth<this.imgTexture.width?(i=this.canvas.clientHeight/this.imgTexture.height,this.position.x=(this.canvas.clientWidth-i*this.imgTexture.width)/2):(this.position.x=(this.canvas.clientWidth-this.imgTexture.width)/2,this.position.y=(this.canvas.clientHeight-this.imgTexture.height)/2),this.scale.x=i,this.scale.y=i}this.isImgLoaded=!0}.bind(this)),this.enableDesktop&&(window.addEventListener("keyup",function(t){187==t.keyCode?this._doZoom(.05):189==t.keyCode&&this._doZoom(-.05)}.bind(this)),window.addEventListener("mousedown",function(t){this.mdown=!0,this.lastX=null,this.lastY=null}.bind(this)),window.addEventListener("mouseup",function(t){this.mdown=!1}.bind(this)),window.addEventListener("mousemove",function(t){var i=t.pageX-this.canvas.getBoundingClientRect().left,e=t.pageY-this.canvas.getBoundingClientRect().top;t.target==this.canvas&&this.mdown&&this._doMove(i,e),(i<=0||i>=this.canvas.clientWidth||e<=0||e>=this.canvas.clientHeight)&&(this.mdown=!1),this._runCallback("onDrag")}.bind(this)),window.addEventListener("dblclick",function(t){this.dbclickZoomLength=this.dbclickZoomThreshold,this.dbclickZoomToggle?this._zoomInAnim_Canvas()||this._zoomOutAnim_Canvas():this._zoomOutAnim_Canvas()||this._zoomInAnim_Canvas(),this.dbclickZoomToggle=!this.dbclickZoomToggle}.bind(this)))},_type:function(t){var i={},e=i.toString;return i["[object Function]"]="function",null==t?t+"":"object"==typeof t||"function"==typeof t?i[e.call(t)]||"object":typeof t},_checkRequestAnimationFrame:function(){for(var t=0,i=["ms","moz","webkit","o"],e=0;e<i.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[i[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[e]+"CancelAnimationFrame"]||window[i[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i,e){var s=(new Date).getTime(),n=Math.max(0,16-(s-t)),o=window.setTimeout(function(){i(s+n)},n);return t=s+n,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})},zoom:function(t){this.dbclickZoomLength=Math.abs(t),this.enableGestureRotate?t>0?this._zoomInAnim_Transform():this._zoomOutAnim_Transform():t>0?this._zoomInAnim_Canvas():this._zoomOutAnim_Canvas()},load:function(t){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.position={x:0,y:0},this.scale={x:1,y:1},this.isImgLoaded=!1,this.isFirstTimeLoad=!0,this.lastZoomScale=null,this.lastX=null,this.lastY=null,this.mdown=!1,this.lastTouchEndTimestamp=null,this.lastTouchEndObject=null,this.imgTexture.src=t}},t},window.document);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Zoomage = __webpack_require__(0);

// Initialize the Zoomage.js
var zoomage = new Zoomage({
    container: document.getElementById('container'),
    maxZoom: 3,
    minZoom: 0.1,
    enableGestureRotate: true,
    enableDesktop: true,
    dbclickZoomThreshold: 0.2,
    onDrag: function(data) {
        console.log("[Drag Position X] " + data.x, "[Drag Position Y] " + data.y);
    },
    onZoom: function(data) {
        console.log("[Zoom Scale] " + data.zoom, "\n[Image Width] " + data.scale.width, "\n[Image Height] " + data.scale.height);
    },
    onRotate: function(data) {
        console.log("[Rotate Degree] " + data.rotate);
    }
});

// Load and display the image
zoomage.load("./scenery_image.jpg");

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map