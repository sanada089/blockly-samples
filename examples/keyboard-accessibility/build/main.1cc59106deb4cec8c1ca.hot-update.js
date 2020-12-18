webpackHotUpdate("main",{

/***/ "./src/tutorial.js":
/*!*************************!*\
  !*** ./src/tutorial.js ***!
  \*************************/
/*! exports provided: Tutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tutorial\", function() { return Tutorial; });\n/* harmony import */ var _tutorial_step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial_step */ \"./src/tutorial_step.js\");\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blockly/core */ \"./node_modules/blockly/dist/core-browser.js\");\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Multi-step tutorial using modals.\n */\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n/**\n * A multi-step tutorial for the accessible music game.\n */\n\nvar Tutorial = /*#__PURE__*/function () {\n  /**\n   * Class for a tutorial.\n   * @param {Blockly.WorkspaceSvg} workspace The workspace the user\n   *     will interact with.\n   * @constructor\n   */\n  function Tutorial(workspace) {\n    var _this = this;\n\n    _classCallCheck(this, Tutorial);\n\n    /**\n     * The id of the modal.\n     * @type {string}\n     */\n    this.modalId = 'tutorialModal';\n    /**\n     * The id of the tutorial text.\n     * @type {string}\n     */\n\n    this.stepTextId = this.modalId + 'Text';\n    /**\n     * The id of the next step button.\n     * @type {string}\n     */\n\n    this.stepButtonId = this.modalId + 'StepBtn';\n    /**\n     * The id of the hide modal button.\n     * @type {string}\n     */\n\n    this.hideButtonId = this.modalId + 'HideBtn';\n    /**\n     * An array of steps in the tutorial.\n     * @type {Array<!TutorialStep>}\n     */\n\n    this.steps = Tutorial.STEP_OBJECTS.map(function (obj) {\n      return new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"](obj.text, _this.stepTextId, _this.nextStep);\n    });\n    /**\n     * The index of the currently active step.\n     * @type {number}\n     */\n\n    this.curStepIndex = 0;\n    /**\n     * The currently active step.\n     * @type {TutorialStep}\n     */\n\n    this.curStep = this.steps[this.curStepIndex];\n    /**\n     * The Blockly workspace the user will interact with.\n     * @type {Blockly.WorkspaceSvg}\n     */\n\n    this.workspace = workspace;\n    this.curNode = null;\n  }\n  /**\n   * Initialize DOM and show.\n   */\n\n\n  _createClass(Tutorial, [{\n    key: \"init\",\n    value: function init() {\n      this.createDom();\n      this.addCallbacks();\n      micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].show(this.modalId);\n      this.curStep.show();\n    }\n    /**\n     * Display the next step, or end the tutorial if there are no more steps.\n     */\n\n  }, {\n    key: \"nextStep\",\n    value: function nextStep() {\n      this.curStepIndex++;\n\n      if (this.curStepIndex < this.steps.length) {\n        this.curStep = this.steps[this.curStepIndex];\n        micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].show(this.modalId);\n        this.curStep.show();\n        this.stashCursor();\n      } else {\n        this.done();\n      }\n    }\n    /**\n     * End the tutorial.\n     */\n\n  }, {\n    key: \"done\",\n    value: function done() {\n      micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].close(this.modalId);\n    }\n  }, {\n    key: \"stepFn1\",\n    value: function stepFn1() {\n      var _this2 = this;\n\n      window.setTimeout(function () {\n        _this2.nextStep();\n      }, 2000);\n    }\n  }, {\n    key: \"enableNavFn\",\n    value: function enableNavFn() {// // Create a serialized key from the primary key and any modifiers.\n      // const enableKey = Blockly.user.keyMap.createSerializedKey(\n      //     Blockly.utils.KeyCodes.K,\n      //     [\n      //       Blockly.user.keyMap.modifierKeys.CONTROL,\n      //       Blockly.user.keyMap.modifierKeys.SHIFT,\n      //     ]);\n      // var actionEnable = new Blockly.Action('topOfStack', 'Move cursor to top of stack');\n      // Blockly.user.keyMap.setActionForKey(enableKey, actionEnable);\n    }\n  }, {\n    key: \"stashCursor\",\n    value: function stashCursor() {\n      this.curNode = this.workspace.getCursor().getCurNode();\n      blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.navigation.disableKeyboardAccessibility();\n    }\n  }, {\n    key: \"popCursor\",\n    value: function popCursor() {\n      blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.navigation.enableKeyboardAccessibility();\n\n      if (this.curNode) {\n        this.workspace.getCursor().setCurNode(this.curNode);\n      }\n    }\n    /**\n     * Add necessary handlers for any buttons on the modal.\n     */\n\n  }, {\n    key: \"addCallbacks\",\n    value: function addCallbacks() {\n      var _this3 = this;\n\n      document.getElementById(this.stepButtonId).addEventListener('click', function () {\n        _this3.nextStep();\n      });\n      document.getElementById(this.hideButtonId).addEventListener('click', function (e) {\n        micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].close(_this3.modalId);\n\n        _this3.popCursor();\n\n        Tutorial.STEP_OBJECTS[_this3.curStepIndex].onStart(_this3);\n\n        e.preventDefault();\n      });\n    }\n    /**\n     * Create the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\"\\n        aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\"\\n            id=\\\"tutorialCloseBtn\\\" data-micromodal-close></button>\\n        </header>\\n        <main class=\\\"modal__content\\\" id=\\\"modal-1-content\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"\".concat(this.stepTextId, \"\\\"></h2>\\n        </main>\\n        <footer class=\\\"modal__footer\\\">\\n          <button class=\\\"modal__btn modal__btn-primary\\\" aria-label=\\\"Hide modal\\\"\\n            id=\\\"\").concat(this.hideButtonId, \"\\\">Hide modal</button>\\n          <button class=\\\"modal__btn modal__btn-primary\\\" aria-label=\\\"Next step\\\"\\n            id=\\\"\").concat(this.stepButtonId, \"\\\">Next step</button>\\n        </footer>\\n      </div>\\n    </div>\");\n    }\n  }]);\n\n  return Tutorial;\n}();\nTutorial.STEPS_TEXT = ['Enable keyboard nav by pressing Cmd+Shift+K', 'Press X to navigate to the first stack of blocks', 'Press Y to navigate to the first block', 'Press enter to mark the first block'];\nTutorial.STEP_OBJECTS = [{\n  text: 'Hit enter to go to the workspace and hear a description of the first block.',\n  onStart: function onStart(tutorial) {\n    window.setTimeout(function () {\n      tutorial.nextStep();\n    }, 2000);\n  }\n}, {\n  text: 'Press the down arrow key to go to the first connection on the block.',\n  onStart: function onStart(tutorial) {\n    console.log('onStart');\n    console.log(tutorial);\n    window.setTimeout(function () {\n      console.log('timeout');\n      tutorial.nextStep();\n    }, 2000);\n  }\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHV0b3JpYWwuanM/MjQzOCJdLCJuYW1lcyI6WyJUdXRvcmlhbCIsIndvcmtzcGFjZSIsIm1vZGFsSWQiLCJzdGVwVGV4dElkIiwic3RlcEJ1dHRvbklkIiwiaGlkZUJ1dHRvbklkIiwic3RlcHMiLCJTVEVQX09CSkVDVFMiLCJtYXAiLCJvYmoiLCJUdXRvcmlhbFN0ZXAiLCJ0ZXh0IiwibmV4dFN0ZXAiLCJjdXJTdGVwSW5kZXgiLCJjdXJTdGVwIiwiY3VyTm9kZSIsImNyZWF0ZURvbSIsImFkZENhbGxiYWNrcyIsIk1pY3JvTW9kYWwiLCJzaG93IiwibGVuZ3RoIiwic3Rhc2hDdXJzb3IiLCJkb25lIiwiY2xvc2UiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiZ2V0Q3Vyc29yIiwiZ2V0Q3VyTm9kZSIsIkJsb2NrbHkiLCJuYXZpZ2F0aW9uIiwiZGlzYWJsZUtleWJvYXJkQWNjZXNzaWJpbGl0eSIsImVuYWJsZUtleWJvYXJkQWNjZXNzaWJpbGl0eSIsInNldEN1ck5vZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwb3BDdXJzb3IiLCJvblN0YXJ0IiwicHJldmVudERlZmF1bHQiLCJpbm5lckhUTUwiLCJTVEVQU19URVhUIiwidHV0b3JpYWwiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNhOzs7Ozs7OztBQUViO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxRQUFiO0FBQ0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Usb0JBQVlDLFNBQVosRUFBdUI7QUFBQTs7QUFBQTs7QUFDckI7QUFDSjtBQUNBO0FBQ0E7QUFDSSxTQUFLQyxPQUFMLEdBQWUsZUFBZjtBQUVBO0FBQ0o7QUFDQTtBQUNBOztBQUNJLFNBQUtDLFVBQUwsR0FBa0IsS0FBS0QsT0FBTCxHQUFlLE1BQWpDO0FBRUE7QUFDSjtBQUNBO0FBQ0E7O0FBQ0ksU0FBS0UsWUFBTCxHQUFvQixLQUFLRixPQUFMLEdBQWUsU0FBbkM7QUFFQTtBQUNKO0FBQ0E7QUFDQTs7QUFDSSxTQUFLRyxZQUFMLEdBQW9CLEtBQUtILE9BQUwsR0FBZSxTQUFuQztBQUVBO0FBQ0o7QUFDQTtBQUNBOztBQUNJLFNBQUtJLEtBQUwsR0FBYU4sUUFBUSxDQUFDTyxZQUFULENBQXNCQyxHQUF0QixDQUNULFVBQUNDLEdBQUQ7QUFBQSxhQUFTLElBQUlDLDJEQUFKLENBQWlCRCxHQUFHLENBQUNFLElBQXJCLEVBQTJCLEtBQUksQ0FBQ1IsVUFBaEMsRUFBNEMsS0FBSSxDQUFDUyxRQUFqRCxDQUFUO0FBQUEsS0FEUyxDQUFiO0FBSUE7QUFDSjtBQUNBO0FBQ0E7O0FBQ0ksU0FBS0MsWUFBTCxHQUFvQixDQUFwQjtBQUVBO0FBQ0o7QUFDQTtBQUNBOztBQUNJLFNBQUtDLE9BQUwsR0FBZSxLQUFLUixLQUFMLENBQVcsS0FBS08sWUFBaEIsQ0FBZjtBQUVBO0FBQ0o7QUFDQTtBQUNBOztBQUNJLFNBQUtaLFNBQUwsR0FBaUJBLFNBQWpCO0FBRUEsU0FBS2MsT0FBTCxHQUFlLElBQWY7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBL0RBO0FBQUE7QUFBQSwyQkFnRVM7QUFDTCxXQUFLQyxTQUFMO0FBQ0EsV0FBS0MsWUFBTDtBQUNBQyx3REFBVSxDQUFDQyxJQUFYLENBQWdCLEtBQUtqQixPQUFyQjtBQUNBLFdBQUtZLE9BQUwsQ0FBYUssSUFBYjtBQUNEO0FBRUQ7QUFDRjtBQUNBOztBQXpFQTtBQUFBO0FBQUEsK0JBMEVhO0FBQ1QsV0FBS04sWUFBTDs7QUFDQSxVQUFJLEtBQUtBLFlBQUwsR0FBb0IsS0FBS1AsS0FBTCxDQUFXYyxNQUFuQyxFQUEyQztBQUN6QyxhQUFLTixPQUFMLEdBQWUsS0FBS1IsS0FBTCxDQUFXLEtBQUtPLFlBQWhCLENBQWY7QUFDQUssMERBQVUsQ0FBQ0MsSUFBWCxDQUFnQixLQUFLakIsT0FBckI7QUFDQSxhQUFLWSxPQUFMLENBQWFLLElBQWI7QUFDQSxhQUFLRSxXQUFMO0FBQ0QsT0FMRCxNQUtPO0FBQ0wsYUFBS0MsSUFBTDtBQUNEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7O0FBeEZBO0FBQUE7QUFBQSwyQkF5RlM7QUFDTEosd0RBQVUsQ0FBQ0ssS0FBWCxDQUFpQixLQUFLckIsT0FBdEI7QUFDRDtBQTNGSDtBQUFBO0FBQUEsOEJBNkZZO0FBQUE7O0FBQ1JzQixZQUFNLENBQUNDLFVBQVAsQ0FBa0IsWUFBTTtBQUN0QixjQUFJLENBQUNiLFFBQUw7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEO0FBakdIO0FBQUE7QUFBQSxrQ0FtR2dCLENBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUE3R0g7QUFBQTtBQUFBLGtDQStHZ0I7QUFDWixXQUFLRyxPQUFMLEdBQWUsS0FBS2QsU0FBTCxDQUFleUIsU0FBZixHQUEyQkMsVUFBM0IsRUFBZjtBQUNBQyx5REFBTyxDQUFDQyxVQUFSLENBQW1CQyw0QkFBbkI7QUFDRDtBQWxISDtBQUFBO0FBQUEsZ0NBb0hjO0FBQ1ZGLHlEQUFPLENBQUNDLFVBQVIsQ0FBbUJFLDJCQUFuQjs7QUFDQSxVQUFJLEtBQUtoQixPQUFULEVBQWtCO0FBQ2hCLGFBQUtkLFNBQUwsQ0FBZXlCLFNBQWYsR0FBMkJNLFVBQTNCLENBQXNDLEtBQUtqQixPQUEzQztBQUNEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7O0FBN0hBO0FBQUE7QUFBQSxtQ0E4SGlCO0FBQUE7O0FBQ2JrQixjQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBSzlCLFlBQTdCLEVBQTJDK0IsZ0JBQTNDLENBQTRELE9BQTVELEVBQ0ksWUFBTTtBQUNKLGNBQUksQ0FBQ3ZCLFFBQUw7QUFDRCxPQUhMO0FBSUFxQixjQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBSzdCLFlBQTdCLEVBQTJDOEIsZ0JBQTNDLENBQTRELE9BQTVELEVBQ0ksVUFBQ0MsQ0FBRCxFQUFPO0FBQ0xsQiwwREFBVSxDQUFDSyxLQUFYLENBQWlCLE1BQUksQ0FBQ3JCLE9BQXRCOztBQUNBLGNBQUksQ0FBQ21DLFNBQUw7O0FBQ0FyQyxnQkFBUSxDQUFDTyxZQUFULENBQXNCLE1BQUksQ0FBQ00sWUFBM0IsRUFBeUN5QixPQUF6QyxDQUFpRCxNQUFqRDs7QUFDQUYsU0FBQyxDQUFDRyxjQUFGO0FBQ0QsT0FOTDtBQU9EO0FBRUQ7QUFDRjtBQUNBOztBQTlJQTtBQUFBO0FBQUEsZ0NBK0ljO0FBQ1ZOLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFLaEMsT0FBN0IsRUFBc0NzQyxTQUF0QyxrZ0JBU3FDLEtBQUtyQyxVQVQxQyx3TEFhYyxLQUFLRSxZQWJuQiwwSUFlYyxLQUFLRCxZQWZuQjtBQW1CRDtBQW5LSDs7QUFBQTtBQUFBO0FBc0tBSixRQUFRLENBQUN5QyxVQUFULEdBQXNCLENBQ3BCLDZDQURvQixFQUVwQixrREFGb0IsRUFHcEIsd0NBSG9CLEVBSXBCLHFDQUpvQixDQUF0QjtBQU9BekMsUUFBUSxDQUFDTyxZQUFULEdBQXdCLENBQ3RCO0FBQ0VJLE1BQUksRUFDRiw2RUFGSjtBQUdFMkIsU0FBTyxFQUFFLGlCQUFTSSxRQUFULEVBQW1CO0FBQzFCbEIsVUFBTSxDQUFDQyxVQUFQLENBQWtCLFlBQU07QUFDdEJpQixjQUFRLENBQUM5QixRQUFUO0FBQ0QsS0FGRCxFQUVHLElBRkg7QUFHRDtBQVBILENBRHNCLEVBVXRCO0FBQ0VELE1BQUksRUFDRixzRUFGSjtBQUdFMkIsU0FBTyxFQUFFLGlCQUFVSSxRQUFWLEVBQW9CO0FBQzNCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FELFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0FsQixVQUFNLENBQUNDLFVBQVAsQ0FBa0IsWUFBTTtBQUN0QmtCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFFQUYsY0FBUSxDQUFDOUIsUUFBVDtBQUNELEtBSkQsRUFJRyxJQUpIO0FBS0Q7QUFYSCxDQVZzQixDQUF4QiIsImZpbGUiOiIuL3NyYy90dXRvcmlhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IE11bHRpLXN0ZXAgdHV0b3JpYWwgdXNpbmcgbW9kYWxzLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7VHV0b3JpYWxTdGVwfSBmcm9tICcuL3R1dG9yaWFsX3N0ZXAnO1xuaW1wb3J0IEJsb2NrbHkgZnJvbSAnYmxvY2tseS9jb3JlJztcbmltcG9ydCBNaWNyb01vZGFsIGZyb20gJ21pY3JvbW9kYWwnO1xuXG4vKipcbiAqIEEgbXVsdGktc3RlcCB0dXRvcmlhbCBmb3IgdGhlIGFjY2Vzc2libGUgbXVzaWMgZ2FtZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFR1dG9yaWFsIHtcbiAgLyoqXG4gICAqIENsYXNzIGZvciBhIHR1dG9yaWFsLlxuICAgKiBAcGFyYW0ge0Jsb2NrbHkuV29ya3NwYWNlU3ZnfSB3b3Jrc3BhY2UgVGhlIHdvcmtzcGFjZSB0aGUgdXNlclxuICAgKiAgICAgd2lsbCBpbnRlcmFjdCB3aXRoLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKHdvcmtzcGFjZSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBpZCBvZiB0aGUgbW9kYWwuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZGFsSWQgPSAndHV0b3JpYWxNb2RhbCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWQgb2YgdGhlIHR1dG9yaWFsIHRleHQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN0ZXBUZXh0SWQgPSB0aGlzLm1vZGFsSWQgKyAnVGV4dCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWQgb2YgdGhlIG5leHQgc3RlcCBidXR0b24uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN0ZXBCdXR0b25JZCA9IHRoaXMubW9kYWxJZCArICdTdGVwQnRuJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpZCBvZiB0aGUgaGlkZSBtb2RhbCBidXR0b24uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmhpZGVCdXR0b25JZCA9IHRoaXMubW9kYWxJZCArICdIaWRlQnRuJztcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHN0ZXBzIGluIHRoZSB0dXRvcmlhbC5cbiAgICAgKiBAdHlwZSB7QXJyYXk8IVR1dG9yaWFsU3RlcD59XG4gICAgICovXG4gICAgdGhpcy5zdGVwcyA9IFR1dG9yaWFsLlNURVBfT0JKRUNUUy5tYXAoXG4gICAgICAgIChvYmopID0+IG5ldyBUdXRvcmlhbFN0ZXAob2JqLnRleHQsIHRoaXMuc3RlcFRleHRJZCwgdGhpcy5uZXh0U3RlcClcbiAgICApO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIHN0ZXAuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmN1clN0ZXBJbmRleCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBzdGVwLlxuICAgICAqIEB0eXBlIHtUdXRvcmlhbFN0ZXB9XG4gICAgICovXG4gICAgdGhpcy5jdXJTdGVwID0gdGhpcy5zdGVwc1t0aGlzLmN1clN0ZXBJbmRleF07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgQmxvY2tseSB3b3Jrc3BhY2UgdGhlIHVzZXIgd2lsbCBpbnRlcmFjdCB3aXRoLlxuICAgICAqIEB0eXBlIHtCbG9ja2x5LldvcmtzcGFjZVN2Z31cbiAgICAgKi9cbiAgICB0aGlzLndvcmtzcGFjZSA9IHdvcmtzcGFjZTtcblxuICAgIHRoaXMuY3VyTm9kZSA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET00gYW5kIHNob3cuXG4gICAqL1xuICBpbml0KCkge1xuICAgIHRoaXMuY3JlYXRlRG9tKCk7XG4gICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICBNaWNyb01vZGFsLnNob3codGhpcy5tb2RhbElkKTtcbiAgICB0aGlzLmN1clN0ZXAuc2hvdygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXkgdGhlIG5leHQgc3RlcCwgb3IgZW5kIHRoZSB0dXRvcmlhbCBpZiB0aGVyZSBhcmUgbm8gbW9yZSBzdGVwcy5cbiAgICovXG4gIG5leHRTdGVwKCkge1xuICAgIHRoaXMuY3VyU3RlcEluZGV4Kys7XG4gICAgaWYgKHRoaXMuY3VyU3RlcEluZGV4IDwgdGhpcy5zdGVwcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3VyU3RlcCA9IHRoaXMuc3RlcHNbdGhpcy5jdXJTdGVwSW5kZXhdO1xuICAgICAgTWljcm9Nb2RhbC5zaG93KHRoaXMubW9kYWxJZCk7XG4gICAgICB0aGlzLmN1clN0ZXAuc2hvdygpO1xuICAgICAgdGhpcy5zdGFzaEN1cnNvcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5kIHRoZSB0dXRvcmlhbC5cbiAgICovXG4gIGRvbmUoKSB7XG4gICAgTWljcm9Nb2RhbC5jbG9zZSh0aGlzLm1vZGFsSWQpO1xuICB9XG5cbiAgc3RlcEZuMSgpIHtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm5leHRTdGVwKCk7XG4gICAgfSwgMjAwMCk7XG4gIH1cblxuICBlbmFibGVOYXZGbigpIHtcbiAgICAvLyAvLyBDcmVhdGUgYSBzZXJpYWxpemVkIGtleSBmcm9tIHRoZSBwcmltYXJ5IGtleSBhbmQgYW55IG1vZGlmaWVycy5cbiAgICAvLyBjb25zdCBlbmFibGVLZXkgPSBCbG9ja2x5LnVzZXIua2V5TWFwLmNyZWF0ZVNlcmlhbGl6ZWRLZXkoXG4gICAgLy8gICAgIEJsb2NrbHkudXRpbHMuS2V5Q29kZXMuSyxcbiAgICAvLyAgICAgW1xuICAgIC8vICAgICAgIEJsb2NrbHkudXNlci5rZXlNYXAubW9kaWZpZXJLZXlzLkNPTlRST0wsXG4gICAgLy8gICAgICAgQmxvY2tseS51c2VyLmtleU1hcC5tb2RpZmllcktleXMuU0hJRlQsXG4gICAgLy8gICAgIF0pO1xuICAgIC8vIHZhciBhY3Rpb25FbmFibGUgPSBuZXcgQmxvY2tseS5BY3Rpb24oJ3RvcE9mU3RhY2snLCAnTW92ZSBjdXJzb3IgdG8gdG9wIG9mIHN0YWNrJyk7XG4gICAgLy8gQmxvY2tseS51c2VyLmtleU1hcC5zZXRBY3Rpb25Gb3JLZXkoZW5hYmxlS2V5LCBhY3Rpb25FbmFibGUpO1xuICB9XG5cbiAgc3Rhc2hDdXJzb3IoKSB7XG4gICAgdGhpcy5jdXJOb2RlID0gdGhpcy53b3Jrc3BhY2UuZ2V0Q3Vyc29yKCkuZ2V0Q3VyTm9kZSgpO1xuICAgIEJsb2NrbHkubmF2aWdhdGlvbi5kaXNhYmxlS2V5Ym9hcmRBY2Nlc3NpYmlsaXR5KCk7XG4gIH1cblxuICBwb3BDdXJzb3IoKSB7XG4gICAgQmxvY2tseS5uYXZpZ2F0aW9uLmVuYWJsZUtleWJvYXJkQWNjZXNzaWJpbGl0eSgpO1xuICAgIGlmICh0aGlzLmN1ck5vZGUpIHtcbiAgICAgIHRoaXMud29ya3NwYWNlLmdldEN1cnNvcigpLnNldEN1ck5vZGUodGhpcy5jdXJOb2RlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIG5lY2Vzc2FyeSBoYW5kbGVycyBmb3IgYW55IGJ1dHRvbnMgb24gdGhlIG1vZGFsLlxuICAgKi9cbiAgYWRkQ2FsbGJhY2tzKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc3RlcEJ1dHRvbklkKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLm5leHRTdGVwKCk7XG4gICAgICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaGlkZUJ1dHRvbklkKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgTWljcm9Nb2RhbC5jbG9zZSh0aGlzLm1vZGFsSWQpO1xuICAgICAgICAgIHRoaXMucG9wQ3Vyc29yKCk7XG4gICAgICAgICAgVHV0b3JpYWwuU1RFUF9PQkpFQ1RTW3RoaXMuY3VyU3RlcEluZGV4XS5vblN0YXJ0KHRoaXMpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBkb20gZm9yIHRoZSBtb2RhbC5cbiAgICovXG4gIGNyZWF0ZURvbSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1vZGFsSWQpLmlubmVySFRNTCA9IGBcbiAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19vdmVybGF5XCIgdGFiaW5kZXg9XCItMVwiIGRhdGEtbWljcm9tb2RhbC1jbG9zZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fY29udGFpbmVyXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbW9kYWw9XCJ0cnVlXCJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtMS10aXRsZVwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwibW9kYWxfX2hlYWRlclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2UgbW9kYWxcIlxuICAgICAgICAgICAgaWQ9XCJ0dXRvcmlhbENsb3NlQnRuXCIgZGF0YS1taWNyb21vZGFsLWNsb3NlPjwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4gY2xhc3M9XCJtb2RhbF9fY29udGVudFwiIGlkPVwibW9kYWwtMS1jb250ZW50XCI+XG4gICAgICAgICAgPGgyIGNsYXNzPVwibW9kYWxfX3RpdGxlXCIgaWQ9XCIke3RoaXMuc3RlcFRleHRJZH1cIj48L2gyPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJtb2RhbF9fZm9vdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19idG4gbW9kYWxfX2J0bi1wcmltYXJ5XCIgYXJpYS1sYWJlbD1cIkhpZGUgbW9kYWxcIlxuICAgICAgICAgICAgaWQ9XCIke3RoaXMuaGlkZUJ1dHRvbklkfVwiPkhpZGUgbW9kYWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2J0biBtb2RhbF9fYnRuLXByaW1hcnlcIiBhcmlhLWxhYmVsPVwiTmV4dCBzdGVwXCJcbiAgICAgICAgICAgIGlkPVwiJHt0aGlzLnN0ZXBCdXR0b25JZH1cIj5OZXh0IHN0ZXA8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuICB9XG59XG5cblR1dG9yaWFsLlNURVBTX1RFWFQgPSBbXG4gICdFbmFibGUga2V5Ym9hcmQgbmF2IGJ5IHByZXNzaW5nIENtZCtTaGlmdCtLJyxcbiAgJ1ByZXNzIFggdG8gbmF2aWdhdGUgdG8gdGhlIGZpcnN0IHN0YWNrIG9mIGJsb2NrcycsXG4gICdQcmVzcyBZIHRvIG5hdmlnYXRlIHRvIHRoZSBmaXJzdCBibG9jaycsXG4gICdQcmVzcyBlbnRlciB0byBtYXJrIHRoZSBmaXJzdCBibG9jaycsXG5dO1xuXG5UdXRvcmlhbC5TVEVQX09CSkVDVFMgPSBbXG4gIHtcbiAgICB0ZXh0OlxuICAgICAgJ0hpdCBlbnRlciB0byBnbyB0byB0aGUgd29ya3NwYWNlIGFuZCBoZWFyIGEgZGVzY3JpcHRpb24gb2YgdGhlIGZpcnN0IGJsb2NrLicsXG4gICAgb25TdGFydDogZnVuY3Rpb24odHV0b3JpYWwpIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdHV0b3JpYWwubmV4dFN0ZXAoKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH1cbiAgfSxcbiAge1xuICAgIHRleHQ6XG4gICAgICAnUHJlc3MgdGhlIGRvd24gYXJyb3cga2V5IHRvIGdvIHRvIHRoZSBmaXJzdCBjb25uZWN0aW9uIG9uIHRoZSBibG9jay4nLFxuICAgIG9uU3RhcnQ6IGZ1bmN0aW9uICh0dXRvcmlhbCkge1xuICAgICAgY29uc29sZS5sb2coJ29uU3RhcnQnKTtcbiAgICAgIGNvbnNvbGUubG9nKHR1dG9yaWFsKTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RpbWVvdXQnKTtcblxuICAgICAgICB0dXRvcmlhbC5uZXh0U3RlcCgpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfVxuICB9XG5dXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/tutorial.js\n");

/***/ })

})