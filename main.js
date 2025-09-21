/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../resource/font/Norse-Bold.otf */ \"./src/resource/font/Norse-Bold.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face{\n    font-family: \"norse-bold\";\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n\n    --extremities-color: rgb(66, 117, 65);\n}\n\nheader,\nfooter{\n    background-color: var(--extremities-color);\n}\n\nheader{\n    --header-height: 10vh;\n\n    height: var(--header-height);\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 16px;\n}\n\nheader .logo{\n    max-height: calc(var(--header-height) - 1vh);\n}\n\n.header-title{\n    font-family: \"norse-bold\", sans-serif;\n    font-size: 4.5rem;\n    color: white;\n}\n\nfooter{\n    height: 15vh;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 32px;\n}\n\nfooter h2{\n    font-size: 3.5rem;\n    font-family: \"norse-bold\", sans-serif;\n    color: white;\n}\n\n.personal-image-link{\n    max-height: 8vh;\n    cursor: pointer;\n}\n\n.personal-image-link:hover{\n    opacity: 0.7;\n}\n\n#main{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 0 auto;\n    width: 100%;\n    max-width: 1200px;\n    height: 100%;\n\n    --overlay-color: rgba(0,0,0,0.7);\n    --game-grid-length: 40vh;\n}\n\n#games-container{\n    display: flex;\n    width: 100%;\n}\n\n.game{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.game h2{\n    text-align: center;\n    font-size: 2rem;\n    margin-bottom: 16px;\n}\n\n.game-grid\n,#selection-grid{\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    grid-auto-rows: 1fr;\n    border: 2px solid black;\n    outline: 4px solid gray;\n\n    height: var(--game-grid-length);\n    width: var(--game-grid-length);\n\n    gap: 1px;\n    padding: 1px;\n}\n\n.tile{\n    border: 1px solid black;\n}\n\n.tile:hover{\n    background-color: lightgray;\n}\n\n.tile.hit{\n    background-color: red;\n}\n\n.tile.miss{\n    background-color: lightblue;\n}\n\n.tile.starting-hover{\n    background-color: lightgreen;\n}\n\n.tile.set-color{\n    background-color: darkgreen;\n}\n\n.tile.set-color.hit{\n    background-color: red;\n}\n\n#person-wins-container{\n    background-color: var(--overlay-color);\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 2;\n\n    display: none;\n    justify-content: center;\n    align-items: center;\n}\n\n#person-wins-container.visible{\n    display: flex;\n}\n\n#win-box{\n    width: 100%;\n    max-width: 800px;\n    height: 100%;\n    max-height: 400px;\n\n    background-color: white;\n\n    border: 4px solid black;\n    border-radius: 12px;\n\n    font-size: 2.5rem;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#win-box button{\n    width: 100%;\n    max-width: 256px;\n    height: 100%;\n    max-height: 64px;\n    margin-top: 24px;\n\n    font-size: 1.5rem;\n\n    border-radius: 12px;\n\n    cursor: pointer;\n}\n\n#win-box button:hover{\n    background-color: rgb(188, 188, 243)\n}\n\n.overlay{\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 3;\n    background-color: var(--overlay-color);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.overlay.invisible{\n    display: none;\n}\n\n#player-grid-selection-container{\n    display: flex;\n    flex-direction: column;\n    justify-items: center;\n    align-items: center;\n\n    background-color: white;\n    border: 4px solid black;\n    border-radius: 12px;\n\n    font-size: 1.5rem;\n}\n\n#player-grid-selection-top{\n    display: flex;\n}\n\n#player-grid-selection{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    width: calc(var(--game-grid-length) + 5vw);\n    height: calc(var(--game-grid-length) + 10vh);\n}\n\n#start-game-button{\n    font-size: 1.5rem;\n    padding: 8px 24px;\n    margin-bottom: 24px;\n    border-radius: 12px;\n    cursor: pointer;\n    background-color: lightgreen;\n    transition: background-color 0.3s ease, color 0.3s ease;\n}\n\n#start-game-button:hover{\n    background-color: darkgreen;\n    color: white;\n}\n\n\n#player-grid-selection h2,\n#ships-title-container{\n    margin-bottom: 16px;\n}\n\n#ship-selection{\n    height: calc(var(--game-grid-length) + 10vh);\n    width: 20vw;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    padding-left: 3vw;\n}\n\n#ships-container{\n    height: var(--game-grid-length);\n    width: 100%;\n\n    border: 2px solid black;\n    outline: 4px solid gray;\n\n    padding: 8px;\n\n    display: grid;\n    gap: 8px;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(5, 1fr);\n}\n\n.ship{\n    border: 1px solid black;\n    border-radius: 12px;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-template-columns: repeat(5, 1fr);\n}\n\n.ship.done{\n    background-color: lightgreen;\n}\n\n\n.ship-dot{\n    border: 1px solid black;\n    border-radius: 50%;\n    width: 50%;\n    height: 50%;\n    background-color: red;\n}\n\n.ship-dot.empty{\n    background-color: transparent;\n    border: none;\n}\n\n.ship:hover .ship-dot:not(.empty){\n    background: lightblue;\n}\n\n#ships-title-container{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webdev-template/./src/css/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webdev-template/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://webdev-template/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webdev-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("{/* module decorator */ module = __webpack_require__.nmd(module);\n/**\n * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk\n * License: MIT - http://mrgnrdrck.mit-license.org\n *\n * https://github.com/mroderick/PubSubJS\n */\n\n(function (root, factory){\n    'use strict';\n\n    var PubSub = {};\n\n    if (root.PubSub) {\n        PubSub = root.PubSub;\n        console.warn(\"PubSub already loaded, using existing version\");\n    } else {\n        root.PubSub = PubSub;\n        factory(PubSub);\n    }\n    // CommonJS and Node.js module support\n    if (true){\n        if (module !== undefined && module.exports) {\n            exports = module.exports = PubSub; // Node.js specific `module.exports`\n        }\n        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec\n        module.exports = exports = PubSub; // CommonJS\n    }\n    // AMD support\n    /* eslint-disable no-undef */\n    else // removed by dead control flow\n{}\n\n}(( typeof window === 'object' && window ) || this || __webpack_require__.g, function (PubSub){\n    'use strict';\n\n    var messages = {},\n        lastUid = -1,\n        ALL_SUBSCRIBING_MSG = '*';\n\n    function hasKeys(obj){\n        var key;\n\n        for (key in obj){\n            if ( Object.prototype.hasOwnProperty.call(obj, key) ){\n                return true;\n            }\n        }\n        return false;\n    }\n\n    /**\n     * Returns a function that throws the passed exception, for use as argument for setTimeout\n     * @alias throwException\n     * @function\n     * @param { Object } ex An Error object\n     */\n    function throwException( ex ){\n        return function reThrowException(){\n            throw ex;\n        };\n    }\n\n    function callSubscriberWithDelayedExceptions( subscriber, message, data ){\n        try {\n            subscriber( message, data );\n        } catch( ex ){\n            setTimeout( throwException( ex ), 0);\n        }\n    }\n\n    function callSubscriberWithImmediateExceptions( subscriber, message, data ){\n        subscriber( message, data );\n    }\n\n    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){\n        var subscribers = messages[matchedMessage],\n            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,\n            s;\n\n        if ( !Object.prototype.hasOwnProperty.call( messages, matchedMessage ) ) {\n            return;\n        }\n\n        for (s in subscribers){\n            if ( Object.prototype.hasOwnProperty.call(subscribers, s)){\n                callSubscriber( subscribers[s], originalMessage, data );\n            }\n        }\n    }\n\n    function createDeliveryFunction( message, data, immediateExceptions ){\n        return function deliverNamespaced(){\n            var topic = String( message ),\n                position = topic.lastIndexOf( '.' );\n\n            // deliver the message as it is now\n            deliverMessage(message, message, data, immediateExceptions);\n\n            // trim the hierarchy and deliver message to each level\n            while( position !== -1 ){\n                topic = topic.substr( 0, position );\n                position = topic.lastIndexOf('.');\n                deliverMessage( message, topic, data, immediateExceptions );\n            }\n\n            deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);\n        };\n    }\n\n    function hasDirectSubscribersFor( message ) {\n        var topic = String( message ),\n            found = Boolean(Object.prototype.hasOwnProperty.call( messages, topic ) && hasKeys(messages[topic]));\n\n        return found;\n    }\n\n    function messageHasSubscribers( message ){\n        var topic = String( message ),\n            found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),\n            position = topic.lastIndexOf( '.' );\n\n        while ( !found && position !== -1 ){\n            topic = topic.substr( 0, position );\n            position = topic.lastIndexOf( '.' );\n            found = hasDirectSubscribersFor(topic);\n        }\n\n        return found;\n    }\n\n    function publish( message, data, sync, immediateExceptions ){\n        message = (typeof message === 'symbol') ? message.toString() : message;\n\n        var deliver = createDeliveryFunction( message, data, immediateExceptions ),\n            hasSubscribers = messageHasSubscribers( message );\n\n        if ( !hasSubscribers ){\n            return false;\n        }\n\n        if ( sync === true ){\n            deliver();\n        } else {\n            setTimeout( deliver, 0 );\n        }\n        return true;\n    }\n\n    /**\n     * Publishes the message, passing the data to it's subscribers\n     * @function\n     * @alias publish\n     * @param { String } message The message to publish\n     * @param {} data The data to pass to subscribers\n     * @return { Boolean }\n     */\n    PubSub.publish = function( message, data ){\n        return publish( message, data, false, PubSub.immediateExceptions );\n    };\n\n    /**\n     * Publishes the message synchronously, passing the data to it's subscribers\n     * @function\n     * @alias publishSync\n     * @param { String } message The message to publish\n     * @param {} data The data to pass to subscribers\n     * @return { Boolean }\n     */\n    PubSub.publishSync = function( message, data ){\n        return publish( message, data, true, PubSub.immediateExceptions );\n    };\n\n    /**\n     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe\n     * @function\n     * @alias subscribe\n     * @param { String } message The message to subscribe to\n     * @param { Function } func The function to call when a new message is published\n     * @return { String }\n     */\n    PubSub.subscribe = function( message, func ){\n        if ( typeof func !== 'function'){\n            return false;\n        }\n\n        message = (typeof message === 'symbol') ? message.toString() : message;\n\n        // message is not registered yet\n        if ( !Object.prototype.hasOwnProperty.call( messages, message ) ){\n            messages[message] = {};\n        }\n\n        // forcing token as String, to allow for future expansions without breaking usage\n        // and allow for easy use as key names for the 'messages' object\n        var token = 'uid_' + String(++lastUid);\n        messages[message][token] = func;\n\n        // return token for unsubscribing\n        return token;\n    };\n\n    PubSub.subscribeAll = function( func ){\n        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);\n    };\n\n    /**\n     * Subscribes the passed function to the passed message once\n     * @function\n     * @alias subscribeOnce\n     * @param { String } message The message to subscribe to\n     * @param { Function } func The function to call when a new message is published\n     * @return { PubSub }\n     */\n    PubSub.subscribeOnce = function( message, func ){\n        var token = PubSub.subscribe( message, function(){\n            // before func apply, unsubscribe message\n            PubSub.unsubscribe( token );\n            func.apply( this, arguments );\n        });\n        return PubSub;\n    };\n\n    /**\n     * Clears all subscriptions\n     * @function\n     * @public\n     * @alias clearAllSubscriptions\n     */\n    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){\n        messages = {};\n    };\n\n    /**\n     * Clear subscriptions by the topic\n     * @function\n     * @public\n     * @alias clearAllSubscriptions\n     * @return { int }\n     */\n    PubSub.clearSubscriptions = function clearSubscriptions(topic){\n        var m;\n        for (m in messages){\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){\n                delete messages[m];\n            }\n        }\n    };\n\n    /**\n       Count subscriptions by the topic\n     * @function\n     * @public\n     * @alias countSubscriptions\n     * @return { Array }\n    */\n    PubSub.countSubscriptions = function countSubscriptions(topic){\n        var m;\n        // eslint-disable-next-line no-unused-vars\n        var token;\n        var count = 0;\n        for (m in messages) {\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {\n                for (token in messages[m]) {\n                    count++;\n                }\n                break;\n            }\n        }\n        return count;\n    };\n\n\n    /**\n       Gets subscriptions by the topic\n     * @function\n     * @public\n     * @alias getSubscriptions\n    */\n    PubSub.getSubscriptions = function getSubscriptions(topic){\n        var m;\n        var list = [];\n        for (m in messages){\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){\n                list.push(m);\n            }\n        }\n        return list;\n    };\n\n    /**\n     * Removes subscriptions\n     *\n     * - When passed a token, removes a specific subscription.\n     *\n\t * - When passed a function, removes all subscriptions for that function\n     *\n\t * - When passed a topic, removes all subscriptions for that topic (hierarchy)\n     * @function\n     * @public\n     * @alias subscribeOnce\n     * @param { String | Function } value A token, function or topic to unsubscribe from\n     * @example // Unsubscribing with a token\n     * var token = PubSub.subscribe('mytopic', myFunc);\n     * PubSub.unsubscribe(token);\n     * @example // Unsubscribing with a function\n     * PubSub.unsubscribe(myFunc);\n     * @example // Unsubscribing from a topic\n     * PubSub.unsubscribe('mytopic');\n     */\n    PubSub.unsubscribe = function(value){\n        var descendantTopicExists = function(topic) {\n                var m;\n                for ( m in messages ){\n                    if ( Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0 ){\n                        // a descendant of the topic exists:\n                        return true;\n                    }\n                }\n\n                return false;\n            },\n            isTopic    = typeof value === 'string' && ( Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value) ),\n            isToken    = !isTopic && typeof value === 'string',\n            isFunction = typeof value === 'function',\n            result = false,\n            m, message, t;\n\n        if (isTopic){\n            PubSub.clearSubscriptions(value);\n            return;\n        }\n\n        for ( m in messages ){\n            if ( Object.prototype.hasOwnProperty.call( messages, m ) ){\n                message = messages[m];\n\n                if ( isToken && message[value] ){\n                    delete message[value];\n                    result = value;\n                    // tokens are unique, so we can just stop here\n                    break;\n                }\n\n                if (isFunction) {\n                    for ( t in message ){\n                        if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value){\n                            delete message[t];\n                            result = true;\n                        }\n                    }\n                }\n            }\n        }\n\n        return result;\n    };\n}));\n\n\n//# sourceURL=webpack://webdev-template/./node_modules/pubsub-js/src/pubsub.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webdev-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webdev-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webdev-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webdev-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webdev-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webdev-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webdev-template/./src/css/style.css?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_game_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/game-handler */ \"./src/js/game-handler.js\");\n/* harmony import */ var _js_pubsub_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/pubsub-messages */ \"./src/js/pubsub-messages.js\");\n/* harmony import */ var _js_ui_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/ui-handler */ \"./src/js/ui-handler.js\");\n\n\n\n\n\nfunction main() {\n    _js_ui_handler__WEBPACK_IMPORTED_MODULE_3__.UIHandler.init();\n    _js_game_handler__WEBPACK_IMPORTED_MODULE_1__.GameHandler.init();\n\n    PubSub.subscribe(_js_pubsub_messages__WEBPACK_IMPORTED_MODULE_2__.PubSubMessage.PLAY_AGAIN, (message, data) => {\n        _js_game_handler__WEBPACK_IMPORTED_MODULE_1__.GameHandler.reset();\n        _js_ui_handler__WEBPACK_IMPORTED_MODULE_3__.UIHandler.reset();\n\n        _js_ui_handler__WEBPACK_IMPORTED_MODULE_3__.UIHandler.init();\n    });\n}\n\nmain();\n\n\n//# sourceURL=webpack://webdev-template/./src/index.js?\n}");

/***/ }),

/***/ "./src/js/game-handler.js":
/*!********************************!*\
  !*** ./src/js/game-handler.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameHandler: () => (/* binding */ GameHandler)\n/* harmony export */ });\n/* harmony import */ var _math_support_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-support.js */ \"./src/js/math-support.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n/* harmony import */ var _pubsub_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub-messages */ \"./src/js/pubsub-messages.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship.js */ \"./src/js/ship.js\");\n\n\n\n\n\nclass GameHandler {\n    static #player = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(\"Player\", false);\n    static #computer = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(\"Computer\", true);\n    static #shipsToPlace = [\n        new _ship_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](5),\n        new _ship_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](4),\n        new _ship_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](3),\n        new _ship_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](3),\n        new _ship_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](2),\n    ];\n\n    static init() {\n        this.#addSubscribers();\n    }\n\n    static reset() {\n        //Remove win visibility\n        document\n            .getElementById(\"person-wins-container\")\n            .classList.remove(\"visible\");\n\n        //Reset ships\n        this.#shipsToPlace = [\n            new _ship_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](5),\n            new _ship_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](4),\n            new _ship_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](3),\n            new _ship_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](3),\n            new _ship_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](2),\n        ];\n\n        //Reset players\n        this.#player = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(\"Player\", false);\n        this.#computer = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(\"Computer\", true);\n\n        //Reset starting ship graphics\n        const allDone = document.querySelectorAll(`[done=\"true\"]`);\n        for (const ship of allDone) {\n            ship.setAttribute(\"done\", \"false\");\n            ship.classList.remove(\"done\");\n        }\n    }\n\n    static get player() {\n        return this.#player;\n    }\n\n    static get computer() {\n        return this.#computer;\n    }\n\n    static get players() {\n        return [this.#player, this.#computer];\n    }\n\n    static #removeShipToPlace() {\n        if (this.#shipsToPlace.length > 0) {\n            this.#shipsToPlace.shift();\n        }\n    }\n\n    static #addSubscribers() {\n        PubSub.subscribe(_pubsub_messages__WEBPACK_IMPORTED_MODULE_2__.PubSubMessage.TILE_CLICKED, (message, data) => {\n            const x = data.x;\n            const y = data.y;\n            const playerName = data.playerName;\n\n            const player = this.players.find(\n                (player) => player.name === playerName\n            );\n\n            const potentialShip = player.board.getBoardLocation({ x, y });\n            if (potentialShip === 1) return;\n\n            this.#publishTileColorChange(potentialShip, x, y, playerName);\n\n            player.board.addShot({ x, y });\n\n            if (playerName === \"Computer\") this.#computerTurn();\n        });\n\n        PubSub.subscribe(_pubsub_messages__WEBPACK_IMPORTED_MODULE_2__.PubSubMessage.START_TILE_CLICKED, (message, data) => {\n            const startingBoard = document.getElementById(\"selection-grid\");\n\n            if (this.#shipsToPlace.length > 0) {\n                const ship = this.#shipsToPlace[0];\n                const isVertical =\n                    document.getElementById(\"vertical-checkbox\").checked;\n\n                //TODO: Check for good placement: checkPlacement();\n\n                //Set tile colours to be green\n                if (isVertical) {\n                    for (let i = 0; i < ship.length; i++) {\n                        startingBoard\n                            .querySelector(\n                                `[data-x=\"${data.x}\"][data-y=\"${data.y + i}\"]`\n                            )\n                            .classList.add(\"set-color\");\n                    }\n                } else {\n                    for (let i = 0; i < ship.length; i++) {\n                        startingBoard\n                            .querySelector(\n                                `[data-x=\"${data.x + i}\"][data-y=\"${data.y}\"]`\n                            )\n                            .classList.add(\"set-color\");\n                    }\n                }\n\n                //Set tile on gameboard\n                this.#player.board.addShipToBoard(ship, isVertical, {\n                    x: data.x,\n                    y: data.y,\n                });\n\n                //Add to list of ships\n                this.#player.board.addShip(ship);\n\n                //Remove ship\n                this.#removeShipToPlace();\n\n                //TODO: move to UI-Handler\n                const allNotDone = document.querySelectorAll(`[done=\"false\"]`);\n\n                allNotDone[0].setAttribute(\"done\", \"true\");\n                allNotDone[0].classList.add(\"done\");\n            }\n        });\n\n        PubSub.subscribe(\n            _pubsub_messages__WEBPACK_IMPORTED_MODULE_2__.PubSubMessage.START_TILE_MOUSE_OVER,\n            (message, data) => {\n                if (this.#shipsToPlace.length !== 0) {\n                    const ship = GameHandler.#shipsToPlace[0];\n                    const startingBoard =\n                        document.getElementById(\"selection-grid\");\n\n                    const highlightedTiles =\n                        startingBoard.getElementsByClassName(\"starting-hover\");\n                    while (highlightedTiles.length > 0) {\n                        highlightedTiles[0].classList.remove(\"starting-hover\");\n                    }\n\n                    if (data.isVertical) {\n                        for (let i = 0; i < ship.length; i++) {\n                            const tempTile = startingBoard.querySelector(\n                                `[data-x=\"${data.x}\"][data-y=\"${data.y + i}\"]`\n                            );\n\n                            if (tempTile) {\n                                tempTile.classList.add(\"starting-hover\");\n                            }\n                        }\n                    } else {\n                        //Horizontal\n                        for (let i = 0; i < ship.length; i++) {\n                            const tempTile = startingBoard.querySelector(\n                                `[data-x=\"${data.x + i}\"][data-y=\"${data.y}\"]`\n                            );\n\n                            if (tempTile) {\n                                tempTile.classList.add(\"starting-hover\");\n                            }\n                        }\n                    }\n                }\n            }\n        );\n    }\n\n    static #computerTurn() {\n        let goodTurn = false;\n        while (!goodTurn) {\n            const coords = {\n                x: _math_support_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt(9),\n                y: _math_support_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt(9),\n            };\n\n            const playerBoardSpot = this.player.board.getBoardLocation(coords);\n\n            if (playerBoardSpot !== 1) {\n                PubSub.publish(_pubsub_messages__WEBPACK_IMPORTED_MODULE_2__.PubSubMessage.TILE_CLICKED, {\n                    x: coords.x,\n                    y: coords.y,\n                    playerName: \"Player\",\n                });\n                goodTurn = true;\n            }\n        }\n    }\n\n    static #publishTileColorChange(potentialShip, x, y, playerName) {\n        if (potentialShip === 0) {\n            // \"Water\"\n            PubSub.publish(_pubsub_messages__WEBPACK_IMPORTED_MODULE_2__.PubSubMessage.TILE_CLICKED_COLOR_CHANGE, {\n                x,\n                y,\n                hitStatus: \"MISS\",\n                playerName,\n            });\n        } else {\n            // Ship\n\n            potentialShip.hit();\n            PubSub.publish(_pubsub_messages__WEBPACK_IMPORTED_MODULE_2__.PubSubMessage.TILE_CLICKED_COLOR_CHANGE, {\n                x,\n                y,\n                hitStatus: \"HIT\",\n                playerName,\n            });\n\n            this.#checkGameWin();\n        }\n    }\n\n    static #checkGameWin() {\n        const allComputerShipsDead = this.#shipsDead(this.computer.board.ships);\n        if (allComputerShipsDead) {\n            this.#displayWin(\"Player\");\n            return;\n        }\n\n        const allPlayerShipsDead = this.#shipsDead(this.player.board.ships);\n        if (allPlayerShipsDead) {\n            this.#displayWin(\"Computer\");\n        }\n    }\n\n    static #displayWin(playerName) {\n        document.getElementById(\n            \"player-win-name\"\n        ).innerHTML = `${playerName} wins!`;\n        document\n            .getElementById(\"person-wins-container\")\n            .classList.toggle(\"visible\");\n    }\n\n    static #shipsDead(ships) {\n        for (const ship of ships) {\n            if (!ship.isSunk()) return false;\n        }\n\n        return true;\n    }\n}\n\n\n//# sourceURL=webpack://webdev-template/./src/js/game-handler.js?\n}");

/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _math_support_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-support.js */ \"./src/js/math-support.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ \"./src/js/ship.js\");\n\n\n\nclass Gameboard {\n    #board = [\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    ];\n\n    #ships = [];\n\n    constructor(setupBoard) {\n        if (setupBoard) {\n            this.#ships = [\n                new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](5),\n                new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](4),\n                new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3),\n                new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3),\n                new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](2),\n            ];\n            for (const ship of this.#ships) {\n                this.#attemptToAddRandomShip(ship);\n            }\n        }\n    }\n\n    #attemptToAddRandomShip(ship) {\n        let isVertical;\n        let goodLocationFound = false;\n        let randomXAxisLocation;\n        let randomYAxisLocation;\n\n        while (!goodLocationFound) {\n            isVertical = !!(0,_math_support_js__WEBPACK_IMPORTED_MODULE_0__.coinFlip)();\n            randomXAxisLocation =\n                isVertical === false\n                    ? (0,_math_support_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(this.board.length - ship.length)\n                    : (0,_math_support_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(this.board.length);\n            randomYAxisLocation = isVertical\n                ? (0,_math_support_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(this.board.length - ship.length)\n                : (0,_math_support_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(this.board.length);\n\n            if (isVertical) {\n                for (let i = 0; i < ship.length; i++) {\n                    if (\n                        !this.isValidLocation({\n                            y: randomYAxisLocation + i,\n                            x: randomXAxisLocation,\n                        })\n                    ) {\n                        break;\n                    } else if (i === ship.length - 1) {\n                        // Reached end of for loop\n                        goodLocationFound = true;\n                    }\n                }\n            } else {\n                for (let i = 0; i < ship.length; i++) {\n                    if (\n                        !this.isValidLocation({\n                            y: randomYAxisLocation,\n                            x: randomXAxisLocation + i,\n                        })\n                    ) {\n                        break;\n                    } else if (i === ship.length - 1) {\n                        // Reached end of for loop\n                        goodLocationFound = true;\n                    }\n                }\n            }\n        }\n\n        this.addShipToBoard(ship, isVertical, {\n            x: randomXAxisLocation,\n            y: randomYAxisLocation,\n        });\n    }\n\n    addShipToBoard(ship, vertical, startLocation) {\n        const shipLength = ship.length;\n\n        for (let i = 0; i < shipLength; i++) {\n            if (vertical) {\n                this.setBoardLocation(\n                    { y: startLocation.y + i, x: startLocation.x },\n                    ship\n                );\n            } else {\n                this.setBoardLocation(\n                    { y: startLocation.y, x: startLocation.x + i },\n                    ship\n                );\n            }\n        }\n    }\n\n    addShip(ship) {\n        this.#ships.push(ship);\n    }\n\n    addShot(coords) {\n        this.setBoardLocation(coords, 1);\n    }\n\n    get board() {\n        return this.#board;\n    }\n\n    get ships() {\n        return this.#ships;\n    }\n\n    getBoardLocation(coords) {\n        return this.board[coords.y][coords.x];\n    }\n\n    setBoardLocation(coords, val) {\n        this.board[coords.y][coords.x] = val;\n    }\n\n    isValidLocation(coords) {\n        return this.getBoardLocation(coords) === 0;\n    }\n}\n\n\n//# sourceURL=webpack://webdev-template/./src/js/gameboard.js?\n}");

/***/ }),

/***/ "./src/js/math-support.js":
/*!********************************!*\
  !*** ./src/js/math-support.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   coinFlip: () => (/* binding */ coinFlip),\n/* harmony export */   getRandomInt: () => (/* binding */ getRandomInt)\n/* harmony export */ });\nfunction coinFlip() {\n    return Math.random() < 0.5;\n}\n\nfunction getRandomInt(max) {\n    return Math.floor(Math.random() * (max + 1));\n}\n\n\n//# sourceURL=webpack://webdev-template/./src/js/math-support.js?\n}");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/js/gameboard.js\");\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pubsub-js */ \"./node_modules/pubsub-js/src/pubsub.js\");\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pubsub_messages_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub-messages.js */ \"./src/js/pubsub-messages.js\");\n\n\n\n\nclass Player {\n    #board;\n    #name;\n\n    constructor(name, setupBoard) {\n        this.#name = name;\n        this.#board = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](setupBoard);\n    }\n\n    get name() {\n        return this.#name;\n    }\n\n    set name(name) {\n        this.#name = name;\n    }\n\n    get board() {\n        return this.#board;\n    }\n}\n\n\n//# sourceURL=webpack://webdev-template/./src/js/player.js?\n}");

/***/ }),

/***/ "./src/js/pubsub-messages.js":
/*!***********************************!*\
  !*** ./src/js/pubsub-messages.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PubSubMessage: () => (/* binding */ PubSubMessage)\n/* harmony export */ });\nclass PubSubMessage {\n    static TILE_CLICKED = \"TILE_CLICKED\";\n    static TILE_CLICKED_COLOR_CHANGE = \"TILE_CLICKED_COLOR_CHANGE\";\n    static PLAY_AGAIN = \"PLAY_AGAIN\";\n    static START_TILE_CLICKED = \"START_TILE_CLICKED\";\n    static START_TILE_MOUSE_OVER = \"START_TILE_MOUSE_OVER\";\n    static START_TILE_CLICKED_DONE = \"START_TILE_CLICKED_DONE\";\n}\n\n\n//# sourceURL=webpack://webdev-template/./src/js/pubsub-messages.js?\n}");

/***/ }),

/***/ "./src/js/ship.js":
/*!************************!*\
  !*** ./src/js/ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n    #hits = 0;\n    #length = 0;\n\n    constructor(length) {\n        this.#length = length;\n    }\n\n    hit() {\n        if (this.isSunk()) return;\n        this.#hits++;\n    }\n\n    get hits() {\n        return this.#hits;\n    }\n\n    get length() {\n        return this.#length;\n    }\n\n    isSunk() {\n        return this.#hits === this.#length;\n    }\n}\n\n\n//# sourceURL=webpack://webdev-template/./src/js/ship.js?\n}");

/***/ }),

/***/ "./src/js/ui-handler.js":
/*!******************************!*\
  !*** ./src/js/ui-handler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UIHandler: () => (/* binding */ UIHandler)\n/* harmony export */ });\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ \"./node_modules/pubsub-js/src/pubsub.js\");\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pubsub_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub-messages */ \"./src/js/pubsub-messages.js\");\n\n\n\nclass UIHandler {\n    static init() {\n        this.#populateBoards();\n        this.#addSubscribers();\n        this.#addEventListeners();\n    }\n\n    static reset() {\n        const playerBoard = document.querySelector(\n            `[data-player-name=\"Player\"]`\n        );\n        const computerBoard = document.querySelector(\n            `[data-player-name=\"Computer\"]`\n        );\n        const startingBoard = document.getElementById(\"selection-grid\");\n\n        playerBoard.innerHTML = \"\";\n        computerBoard.innerHTML = \"\";\n        startingBoard.innerHTML = \"\";\n\n        document.querySelector(\".overlay\").classList.remove(\"invisible\");\n    }\n\n    static #populateBoards() {\n        const playerBoard = document.querySelector(\n            `[data-player-name=\"Player\"]`\n        );\n        const computerBoard = document.querySelector(\n            `[data-player-name=\"Computer\"]`\n        );\n        const startingBoard = document.getElementById(\"selection-grid\");\n\n        this.#populateBoard(playerBoard);\n        this.#populateBoard(computerBoard);\n\n        this.#populateBoard(startingBoard);\n        this.#addStartingBoardMouseOvers(startingBoard);\n    }\n\n    static #addStartingBoardMouseOvers(startingBoard) {\n        const children = startingBoard.childNodes;\n\n        for (const tile of children) {\n            tile.addEventListener(\"mouseenter\", this.#startingTileMouseEnter);\n            tile.addEventListener(\"click\", this.#startingTileClick);\n        }\n    }\n\n    static #startingTileMouseEnter(e) {\n        const tile = e.target;\n        const x = parseInt(tile.getAttribute(\"data-x\"));\n        const y = parseInt(tile.getAttribute(\"data-y\"));\n        const isVertical = document.getElementById(\"vertical-checkbox\").checked;\n\n        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_pubsub_messages__WEBPACK_IMPORTED_MODULE_1__.PubSubMessage.START_TILE_MOUSE_OVER, {\n            x: parseInt(tile.getAttribute(\"data-x\")),\n            y: parseInt(tile.getAttribute(\"data-y\")),\n            isVertical: isVertical,\n        });\n    }\n\n    static #startingTileClick(e) {\n        const tile = e.target;\n        const isVertical = document.getElementById(\"vertical-checkbox\").checked;\n\n        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_pubsub_messages__WEBPACK_IMPORTED_MODULE_1__.PubSubMessage.START_TILE_CLICKED, {\n            x: parseInt(tile.getAttribute(\"data-x\")),\n            y: parseInt(tile.getAttribute(\"data-y\")),\n            isVertical,\n        });\n    }\n\n    static #populateBoard(personGameGrid) {\n        for (let i = 0; i < 100; i++) {\n            const xCoord = i % 10;\n            const yCoord = Math.floor(i / 10);\n\n            const newTile = document.createElement(\"div\");\n            newTile.className = \"tile\";\n            newTile.innerHTML = `&nbsp;`;\n            newTile.setAttribute(\"data-x\", xCoord);\n            newTile.setAttribute(\"data-y\", yCoord);\n\n            personGameGrid.appendChild(newTile);\n        }\n    }\n\n    static #tileClicked(event) {\n        const clickedElement = event.target;\n        const gameGrid = clickedElement.parentNode;\n        const playerName = gameGrid.getAttribute(\"data-player-name\");\n\n        const x = clickedElement.getAttribute(\"data-x\");\n        const y = clickedElement.getAttribute(\"data-y\");\n\n        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_pubsub_messages__WEBPACK_IMPORTED_MODULE_1__.PubSubMessage.TILE_CLICKED, {\n            x,\n            y,\n            playerName,\n        });\n    }\n\n    static #addSubscribers() {\n        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(\n            _pubsub_messages__WEBPACK_IMPORTED_MODULE_1__.PubSubMessage.TILE_CLICKED_COLOR_CHANGE,\n            (message, data) => {\n                const x = data.x;\n                const y = data.y;\n                const playerName = data.playerName;\n                const hitStatus = data.hitStatus;\n\n                this.#changeTileColor(playerName, hitStatus, { x, y });\n            }\n        );\n    }\n\n    static #addEventListeners() {\n        const button = document.getElementById(\"button-play-again\");\n        button.addEventListener(\"click\", (event) => {\n            event.preventDefault();\n\n            pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_pubsub_messages__WEBPACK_IMPORTED_MODULE_1__.PubSubMessage.PLAY_AGAIN, {});\n        });\n\n        const computerGameGrid = document.querySelector(\n            `[data-player-name=\"Computer\"]`\n        );\n\n        const computerTiles = computerGameGrid.childNodes;\n        for (const tile of computerTiles) {\n            tile.addEventListener(\"click\", this.#tileClicked);\n        }\n\n        const startGameButton = document.getElementById(\"start-game-button\");\n        startGameButton.addEventListener(\"click\", (e) => {\n            e.preventDefault();\n            const startingGrid = document.getElementById(\"selection-grid\");\n            const children = startingGrid.children;\n\n            for (const tile of children) {\n                tile.removeEventListener(\"click\", this.#startingTileClick);\n                tile.removeEventListener(\n                    \"mouseenter\",\n                    this.#startingTileMouseEnter\n                );\n            }\n\n            document.querySelector(`[data-player-name=\"Player\"]`).innerHTML =\n                startingGrid.innerHTML;\n\n            document.querySelector(\".overlay\").classList.add(\"invisible\");\n        });\n    }\n\n    static #changeTileColor(playerName, hitStatus, coords) {\n        const personsGrid = document.querySelector(\n            `[data-player-name=\"${playerName}\"]`\n        );\n\n        const tile = personsGrid.querySelector(\n            `[data-x=\"${coords.x}\"][data-y=\"${coords.y}\"]`\n        );\n\n        if (hitStatus === \"HIT\") {\n            tile.classList.add(\"hit\");\n        } else {\n            tile.classList.add(\"miss\");\n        }\n    }\n}\n\n\n//# sourceURL=webpack://webdev-template/./src/js/ui-handler.js?\n}");

/***/ }),

/***/ "./src/resource/font/Norse-Bold.otf":
/*!******************************************!*\
  !*** ./src/resource/font/Norse-Bold.otf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"5efe60ef5042faec1224.otf\";\n\n//# sourceURL=webpack://webdev-template/./src/resource/font/Norse-Bold.otf?\n}");

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;