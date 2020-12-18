webpackHotUpdate("main",{

/***/ "./src/music_game_controller.js":
/*!**************************************!*\
  !*** ./src/music_game_controller.js ***!
  \**************************************/
/*! exports provided: MusicGameController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MusicGameController\", function() { return MusicGameController; });\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/* harmony import */ var _music__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music */ \"./src/music.js\");\n/* harmony import */ var _help_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help_modal */ \"./src/help_modal.js\");\n/* harmony import */ var _key_press_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key_press_modal */ \"./src/key_press_modal.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\nvar MusicGameController = function MusicGameController() {\n  _classCallCheck(this, MusicGameController);\n\n  micromodal__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init({\n    onClose: function onClose() {\n      return speaker.cancel();\n    }\n  });\n  var game = new _music__WEBPACK_IMPORTED_MODULE_1__[\"Music\"]();\n  game.loadLevel(1);\n  var helpModal = new _help_modal__WEBPACK_IMPORTED_MODULE_2__[\"HelpModal\"]('modal-1', 'modalButton');\n  helpModal.init();\n  var keyPressModal = new _key_press_modal__WEBPACK_IMPORTED_MODULE_3__[\"KeyPressModal\"]();\n  keyPressModal.init();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbXVzaWNfZ2FtZV9jb250cm9sbGVyLmpzPzczYTYiXSwibmFtZXMiOlsiTXVzaWNHYW1lQ29udHJvbGxlciIsIk1pY3JvTW9kYWwiLCJpbml0Iiwib25DbG9zZSIsInNwZWFrZXIiLCJjYW5jZWwiLCJnYW1lIiwiTXVzaWMiLCJsb2FkTGV2ZWwiLCJoZWxwTW9kYWwiLCJIZWxwTW9kYWwiLCJrZXlQcmVzc01vZGFsIiwiS2V5UHJlc3NNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLG1CQUFiLEdBQ0UsK0JBQWM7QUFBQTs7QUFDWkMsb0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQjtBQUNkQyxXQUFPLEVBQUU7QUFBQSxhQUFNQyxPQUFPLENBQUNDLE1BQVIsRUFBTjtBQUFBO0FBREssR0FBaEI7QUFHQSxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsNENBQUosRUFBYjtBQUNBRCxNQUFJLENBQUNFLFNBQUwsQ0FBZSxDQUFmO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLElBQUlDLHFEQUFKLENBQWMsU0FBZCxFQUF5QixhQUF6QixDQUFsQjtBQUNBRCxXQUFTLENBQUNQLElBQVY7QUFDQSxNQUFNUyxhQUFhLEdBQUcsSUFBSUMsOERBQUosRUFBdEI7QUFDQUQsZUFBYSxDQUFDVCxJQUFkO0FBQ0QsQ0FYSCIsImZpbGUiOiIuL3NyYy9tdXNpY19nYW1lX2NvbnRyb2xsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBNaWNyb01vZGFsIGZyb20gJ21pY3JvbW9kYWwnO1xuaW1wb3J0IHtNdXNpY30gZnJvbSAnLi9tdXNpYyc7XG5pbXBvcnQge0hlbHBNb2RhbH0gZnJvbSAnLi9oZWxwX21vZGFsJztcbmltcG9ydCB7S2V5UHJlc3NNb2RhbH0gZnJvbSAnLi9rZXlfcHJlc3NfbW9kYWwnO1xuXG5cbmV4cG9ydCBjbGFzcyBNdXNpY0dhbWVDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgTWljcm9Nb2RhbC5pbml0KHtcbiAgICAgIG9uQ2xvc2U6ICgpID0+IHNwZWFrZXIuY2FuY2VsKCksXG4gICAgfSk7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBNdXNpYygpO1xuICAgIGdhbWUubG9hZExldmVsKDEpO1xuICAgIGNvbnN0IGhlbHBNb2RhbCA9IG5ldyBIZWxwTW9kYWwoJ21vZGFsLTEnLCAnbW9kYWxCdXR0b24nKTtcbiAgICBoZWxwTW9kYWwuaW5pdCgpO1xuICAgIGNvbnN0IGtleVByZXNzTW9kYWwgPSBuZXcgS2V5UHJlc3NNb2RhbCgpO1xuICAgIGtleVByZXNzTW9kYWwuaW5pdCgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/music_game_controller.js\n");

/***/ }),

/***/ "./test/index.js":
/*!***********************!*\
  !*** ./test/index.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly/core */ \"./node_modules/blockly/dist/core-browser.js\");\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/speaker */ \"./src/speaker.js\");\n/* harmony import */ var _src_note_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/note_player */ \"./src/note_player.js\");\n/* harmony import */ var _src_music__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/music */ \"./src/music.js\");\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/* harmony import */ var _src_help_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/help_modal */ \"./src/help_modal.js\");\n/* harmony import */ var _src_key_press_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/key_press_modal */ \"./src/key_press_modal.js\");\n/* harmony import */ var _src_music_game_controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/music_game_controller */ \"./src/music_game_controller.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Plugin test.\n */\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  // MicroModal.init({\n  //   onClose: () => speaker.cancel(),\n  // });\n  // const game = new Music();\n  // game.loadLevel(1);\n  // const helpModal = new HelpModal('modal-1', 'modalButton');\n  // helpModal.init();\n  // const keyPressModal = new KeyPressModal();\n  // keyPressModal.init();\n  var controller = new _src_music_game_controller__WEBPACK_IMPORTED_MODULE_7__[\"MusicGameController\"]();\n  document.getElementById('playNote').addEventListener('click', function () {\n    _src_note_player__WEBPACK_IMPORTED_MODULE_2__[\"notePlayer\"].playNote('C4', '8n');\n  });\n  document.getElementById('playText').addEventListener('click', function () {\n    var textContent = document.getElementById('textInput').value;\n    _src_speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].speak(textContent);\n  });\n  document.getElementById('playNoteAndText').addEventListener('click', function () {\n    _src_speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].speak('C4', false, function () {\n      _src_note_player__WEBPACK_IMPORTED_MODULE_2__[\"notePlayer\"].playNote('C4', '8n');\n    });\n  });\n  document.getElementById('setLevel').addEventListener('input', function (event) {\n    game.loadLevel(this.value);\n  });\n  document.addEventListener('visibilitychange', function (event) {\n    if (document.visibilityState === 'visible') {\n      console.log('tab is activate');\n    } else {\n      _src_speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].cancel();\n    }\n  });\n  document.getElementById('setLevel').addEventListener('input', function (event) {\n    game.loadLevel(this.value);\n  });\n  document.getElementById('logGeneratedCode').addEventListener('click', function (event) {\n    game.logGeneratedCode();\n  });\n\n  var registerArrowKeys = function registerArrowKeys(register) {\n    var keyCodeMappings = [[blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.utils.KeyCodes.UP, blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.navigation.actionNames.PREVIOUS], [blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.utils.KeyCodes.DOWN, blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.navigation.actionNames.NEXT], [blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.utils.KeyCodes.RIGHT, blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.navigation.actionNames.IN], [blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.utils.KeyCodes.LEFT, blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.navigation.actionNames.OUT]];\n    keyCodeMappings.forEach(function (mapping) {\n      if (register) {\n        var _Blockly$ShortcutRegi;\n\n        (_Blockly$ShortcutRegi = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ShortcutRegistry.registry).addKeyMapping.apply(_Blockly$ShortcutRegi, _toConsumableArray(mapping));\n      } else {\n        var _Blockly$ShortcutRegi2;\n\n        (_Blockly$ShortcutRegi2 = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ShortcutRegistry.registry).removeKeyMapping.apply(_Blockly$ShortcutRegi2, _toConsumableArray(mapping));\n      }\n    });\n  }; // Initial state has arrow keys turned on.\n\n\n  registerArrowKeys(true);\n  document.getElementById('enableArrowKeys').addEventListener('click', function (event) {\n    registerArrowKeys(event.currentTarget.checked);\n  });\n  document.getElementById('modalButton').addEventListener('click', function () {\n    _src_speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].modalToText(document.getElementById('modal-1'));\n  });\n  document.getElementById('modalButton').addEventListener('focus', function (e) {\n    _src_speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].speak('Hit enter to open the help menu');\n  });\n  document.getElementById('replayButton').addEventListener('click', function () {\n    _src_speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].modalToText(document.getElementById('modal-1'));\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L2luZGV4LmpzPzA0NDEiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29udHJvbGxlciIsIk11c2ljR2FtZUNvbnRyb2xsZXIiLCJnZXRFbGVtZW50QnlJZCIsIm5vdGVQbGF5ZXIiLCJwbGF5Tm90ZSIsInRleHRDb250ZW50IiwidmFsdWUiLCJzcGVha2VyIiwic3BlYWsiLCJldmVudCIsImdhbWUiLCJsb2FkTGV2ZWwiLCJ2aXNpYmlsaXR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY2FuY2VsIiwibG9nR2VuZXJhdGVkQ29kZSIsInJlZ2lzdGVyQXJyb3dLZXlzIiwicmVnaXN0ZXIiLCJrZXlDb2RlTWFwcGluZ3MiLCJCbG9ja2x5IiwidXRpbHMiLCJLZXlDb2RlcyIsIlVQIiwibmF2aWdhdGlvbiIsImFjdGlvbk5hbWVzIiwiUFJFVklPVVMiLCJET1dOIiwiTkVYVCIsIlJJR0hUIiwiSU4iLCJMRUZUIiwiT1VUIiwiZm9yRWFjaCIsIm1hcHBpbmciLCJTaG9ydGN1dFJlZ2lzdHJ5IiwicmVnaXN0cnkiLCJhZGRLZXlNYXBwaW5nIiwicmVtb3ZlS2V5TWFwcGluZyIsImN1cnJlbnRUYXJnZXQiLCJjaGVja2VkIiwibW9kYWxUb1RleHQiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVc7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLElBQUlDLDhFQUFKLEVBQW5CO0FBRUFILFVBQVEsQ0FBQ0ksY0FBVCxDQUF3QixVQUF4QixFQUFvQ0gsZ0JBQXBDLENBQ0ksT0FESixF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O0FBQ0FqQixtQkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0FuQixVQUFRLENBQUNJLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDSCxnQkFBM0MsQ0FBNEQsT0FBNUQsRUFDSSxVQUFDVSxLQUFELEVBQVc7QUFDVFEscUJBQWlCLENBQUNSLEtBQUssQ0FBQzhCLGFBQU4sQ0FBb0JDLE9BQXJCLENBQWpCO0FBQ0QsR0FITDtBQUlBMUMsVUFBUSxDQUFDSSxjQUFULENBQXdCLGFBQXhCLEVBQXVDSCxnQkFBdkMsQ0FBd0QsT0FBeEQsRUFDSSxZQUFXO0FBQ1RRLHdEQUFPLENBQUNrQyxXQUFSLENBQW9CM0MsUUFBUSxDQUFDSSxjQUFULENBQXdCLFNBQXhCLENBQXBCO0FBQ0QsR0FITDtBQUtBSixVQUFRLENBQUNJLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUNILGdCQUF2QyxDQUF3RCxPQUF4RCxFQUNJLFVBQVMyQyxDQUFULEVBQVk7QUFDVm5DLHdEQUFPLENBQUNDLEtBQVIsQ0FBYyxpQ0FBZDtBQUNELEdBSEw7QUFJQVYsVUFBUSxDQUFDSSxjQUFULENBQXdCLGNBQXhCLEVBQXdDSCxnQkFBeEMsQ0FBeUQsT0FBekQsRUFDSSxZQUFXO0FBQ1RRLHdEQUFPLENBQUNrQyxXQUFSLENBQW9CM0MsUUFBUSxDQUFDSSxjQUFULENBQXdCLFNBQXhCLENBQXBCO0FBQ0QsR0FITDtBQUlELENBbEZEIiwiZmlsZSI6Ii4vdGVzdC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFBsdWdpbiB0ZXN0LlxuICovXG5cbmltcG9ydCBCbG9ja2x5IGZyb20gJ2Jsb2NrbHkvY29yZSc7XG5pbXBvcnQge3NwZWFrZXJ9IGZyb20gJy4uL3NyYy9zcGVha2VyJztcbmltcG9ydCB7bm90ZVBsYXllcn0gZnJvbSAnLi4vc3JjL25vdGVfcGxheWVyJztcbmltcG9ydCB7TXVzaWN9IGZyb20gJy4uL3NyYy9tdXNpYyc7XG5pbXBvcnQgTWljcm9Nb2RhbCBmcm9tICdtaWNyb21vZGFsJztcbmltcG9ydCB7SGVscE1vZGFsfSBmcm9tICcuLi9zcmMvaGVscF9tb2RhbCc7XG5pbXBvcnQge0tleVByZXNzTW9kYWx9IGZyb20gJy4uL3NyYy9rZXlfcHJlc3NfbW9kYWwnO1xuaW1wb3J0IHtNdXNpY0dhbWVDb250cm9sbGVyfSBmcm9tICcuLi9zcmMvbXVzaWNfZ2FtZV9jb250cm9sbGVyJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAvLyBNaWNyb01vZGFsLmluaXQoe1xuICAvLyAgIG9uQ2xvc2U6ICgpID0+IHNwZWFrZXIuY2FuY2VsKCksXG4gIC8vIH0pO1xuICAvLyBjb25zdCBnYW1lID0gbmV3IE11c2ljKCk7XG4gIC8vIGdhbWUubG9hZExldmVsKDEpO1xuICAvLyBjb25zdCBoZWxwTW9kYWwgPSBuZXcgSGVscE1vZGFsKCdtb2RhbC0xJywgJ21vZGFsQnV0dG9uJyk7XG4gIC8vIGhlbHBNb2RhbC5pbml0KCk7XG4gIC8vIGNvbnN0IGtleVByZXNzTW9kYWwgPSBuZXcgS2V5UHJlc3NNb2RhbCgpO1xuICAvLyBrZXlQcmVzc01vZGFsLmluaXQoKTtcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBNdXNpY0dhbWVDb250cm9sbGVyKCk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXlOb3RlJykuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBub3RlUGxheWVyLnBsYXlOb3RlKCdDNCcsICc4bicpO1xuICAgICAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5VGV4dCcpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dElucHV0JykudmFsdWU7XG4gICAgICAgIHNwZWFrZXIuc3BlYWsodGV4dENvbnRlbnQpO1xuICAgICAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5Tm90ZUFuZFRleHQnKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNwZWFrZXIuc3BlYWsoJ0M0JywgZmFsc2UsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIG5vdGVQbGF5ZXIucGxheU5vdGUoJ0M0JywgJzhuJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXRMZXZlbCcpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnaW5wdXQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBnYW1lLmxvYWRMZXZlbCh0aGlzLnZhbHVlKTtcbiAgICAgIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAndmlzaWJsZScpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0YWIgaXMgYWN0aXZhdGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3BlYWtlci5jYW5jZWwoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXRMZXZlbCcpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnaW5wdXQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBnYW1lLmxvYWRMZXZlbCh0aGlzLnZhbHVlKTtcbiAgICAgIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nR2VuZXJhdGVkQ29kZScpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBnYW1lLmxvZ0dlbmVyYXRlZENvZGUoKTtcbiAgICAgIH0pO1xuXG4gIGNvbnN0IHJlZ2lzdGVyQXJyb3dLZXlzID0gZnVuY3Rpb24ocmVnaXN0ZXIpIHtcbiAgICBjb25zdCBrZXlDb2RlTWFwcGluZ3MgPSBbXG4gICAgICBbQmxvY2tseS51dGlscy5LZXlDb2Rlcy5VUCwgQmxvY2tseS5uYXZpZ2F0aW9uLmFjdGlvbk5hbWVzLlBSRVZJT1VTXSxcbiAgICAgIFtCbG9ja2x5LnV0aWxzLktleUNvZGVzLkRPV04sIEJsb2NrbHkubmF2aWdhdGlvbi5hY3Rpb25OYW1lcy5ORVhUXSxcbiAgICAgIFtCbG9ja2x5LnV0aWxzLktleUNvZGVzLlJJR0hULCBCbG9ja2x5Lm5hdmlnYXRpb24uYWN0aW9uTmFtZXMuSU5dLFxuICAgICAgW0Jsb2NrbHkudXRpbHMuS2V5Q29kZXMuTEVGVCwgQmxvY2tseS5uYXZpZ2F0aW9uLmFjdGlvbk5hbWVzLk9VVF1dO1xuICAgIGtleUNvZGVNYXBwaW5ncy5mb3JFYWNoKChtYXBwaW5nKSA9PiB7XG4gICAgICBpZiAocmVnaXN0ZXIpIHtcbiAgICAgICAgQmxvY2tseS5TaG9ydGN1dFJlZ2lzdHJ5LnJlZ2lzdHJ5LmFkZEtleU1hcHBpbmcoLi4ubWFwcGluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBCbG9ja2x5LlNob3J0Y3V0UmVnaXN0cnkucmVnaXN0cnkucmVtb3ZlS2V5TWFwcGluZyguLi5tYXBwaW5nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgLy8gSW5pdGlhbCBzdGF0ZSBoYXMgYXJyb3cga2V5cyB0dXJuZWQgb24uXG4gIHJlZ2lzdGVyQXJyb3dLZXlzKHRydWUpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5hYmxlQXJyb3dLZXlzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIHJlZ2lzdGVyQXJyb3dLZXlzKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCk7XG4gICAgICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNwZWFrZXIubW9kYWxUb1RleHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLTEnKSk7XG4gICAgICB9KTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsXG4gICAgICBmdW5jdGlvbihlKSB7XG4gICAgICAgIHNwZWFrZXIuc3BlYWsoJ0hpdCBlbnRlciB0byBvcGVuIHRoZSBoZWxwIG1lbnUnKTtcbiAgICAgIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVwbGF5QnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNwZWFrZXIubW9kYWxUb1RleHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLTEnKSk7XG4gICAgICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./test/index.js\n");

/***/ })

})