webpackHotUpdate("main",{

/***/ "./src/tutorial.js":
/*!*************************!*\
  !*** ./src/tutorial.js ***!
  \*************************/
/*! exports provided: Tutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tutorial\", function() { return Tutorial; });\n/* harmony import */ var _tutorial_step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial_step */ \"./src/tutorial_step.js\");\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Multi-step tutorial using modals.\n */\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n/**\n * A multi-step tutorial for the accessible music game.\n */\n\nvar Tutorial = /*#__PURE__*/function () {\n  /**\n   * Class for a tutorial\n   * @constructor\n   */\n  function Tutorial() {\n    _classCallCheck(this, Tutorial);\n\n    this.modalId = 'tutorialModal';\n    this.steps = Tutorial.STEPS_TEXT.map(function (text) {\n      return new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"](text);\n    }, this.nextStep);\n    this.curStepIndex = 0;\n    this.curStep = this.steps[this.curStepIndex];\n  }\n\n  _createClass(Tutorial, [{\n    key: \"init\",\n    value: function init() {\n      this.createDom();\n      this.addCallbacks();\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show(this.modalId);\n      this.curStep.show();\n    }\n  }, {\n    key: \"nextStep\",\n    value: function nextStep() {\n      this.curStepIndex++;\n\n      if (this.curStepIndex < this.steps.length) {\n        this.curStep = this.steps[this.curStepIndex];\n        this.curStep.show();\n      } else {\n        this.done();\n      }\n    }\n  }, {\n    key: \"done\",\n    value: function done() {\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].close(this.modalId);\n    }\n  }, {\n    key: \"addStep\",\n    value: function addStep() {\n      this.steps.push(new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"]('Instructions'));\n    }\n  }, {\n    key: \"addCallbacks\",\n    value: function addCallbacks() {\n      var _this = this;\n\n      document.getElementById('TutorialModalBtn').addEventListener('click', function () {\n        _this.nextStep();\n      });\n    }\n    /**\n     * Creates the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\" aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\" id=\\\"tutorialCloseBtn\\\" data-micromodal-close></button>\\n        </header>\\n        <main class=\\\"modal__content\\\" id=\\\"modal-1-content\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"tutorialModalText\\\"></h2>\\n        </main>\\n        <footer class=\\\"modal__footer\\\">\\n          <button class=\\\"odal__btn modal__btn-primary\\\" aria-label=\\\"Next step\\\" id=\\\"TutorialModalBtn\\\">Next step</button>\\n        </footer>\\n      </div>\\n    </div>\";\n    }\n  }]);\n\n  return Tutorial;\n}();\nTutorial.STEPS_TEXT = ['Hit enter to move focus to the workspace', 'Enable keyboard nav by pressing Cmd+Shift+K', 'Press X to navigate to the first stack of blocks', 'Press Y to navigate to the first block', 'Press enter to mark the first block'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHV0b3JpYWwuanM/MjQzOCJdLCJuYW1lcyI6WyJUdXRvcmlhbCIsIm1vZGFsSWQiLCJzdGVwcyIsIlNURVBTX1RFWFQiLCJtYXAiLCJ0ZXh0IiwiVHV0b3JpYWxTdGVwIiwibmV4dFN0ZXAiLCJjdXJTdGVwSW5kZXgiLCJjdXJTdGVwIiwiY3JlYXRlRG9tIiwiYWRkQ2FsbGJhY2tzIiwiTWljcm9Nb2RhbCIsInNob3ciLCJsZW5ndGgiLCJkb25lIiwiY2xvc2UiLCJwdXNoIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDYTs7Ozs7Ozs7QUFFYjtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNPLElBQU1BLFFBQWI7QUFDRTtBQUNGO0FBQ0E7QUFDQTtBQUNFLHNCQUFjO0FBQUE7O0FBQ1osU0FBS0MsT0FBTCxHQUFlLGVBQWY7QUFDQSxTQUFLQyxLQUFMLEdBQWFGLFFBQVEsQ0FBQ0csVUFBVCxDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQUMsSUFBSTtBQUFBLGFBQUksSUFBSUMsMkRBQUosQ0FBaUJELElBQWpCLENBQUo7QUFBQSxLQUE1QixFQUF3RCxLQUFLRSxRQUE3RCxDQUFiO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFLUCxLQUFMLENBQVcsS0FBS00sWUFBaEIsQ0FBZjtBQUNEOztBQVZIO0FBQUE7QUFBQSwyQkFZUztBQUNMLFdBQUtFLFNBQUw7QUFDQSxXQUFLQyxZQUFMO0FBQ0FDLHdEQUFVLENBQUNDLElBQVgsQ0FBZ0IsS0FBS1osT0FBckI7QUFFQSxXQUFLUSxPQUFMLENBQWFJLElBQWI7QUFDRDtBQWxCSDtBQUFBO0FBQUEsK0JBb0JhO0FBQ1QsV0FBS0wsWUFBTDs7QUFDQSxVQUFJLEtBQUtBLFlBQUwsR0FBb0IsS0FBS04sS0FBTCxDQUFXWSxNQUFuQyxFQUEyQztBQUN6QyxhQUFLTCxPQUFMLEdBQWUsS0FBS1AsS0FBTCxDQUFXLEtBQUtNLFlBQWhCLENBQWY7QUFDQSxhQUFLQyxPQUFMLENBQWFJLElBQWI7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLRSxJQUFMO0FBQ0Q7QUFDRjtBQTVCSDtBQUFBO0FBQUEsMkJBNkJTO0FBQ0xILHdEQUFVLENBQUNJLEtBQVgsQ0FBaUIsS0FBS2YsT0FBdEI7QUFDRDtBQS9CSDtBQUFBO0FBQUEsOEJBaUNZO0FBQ1IsV0FBS0MsS0FBTCxDQUFXZSxJQUFYLENBQWdCLElBQUlYLDJEQUFKLENBQWlCLGNBQWpCLENBQWhCO0FBQ0Q7QUFuQ0g7QUFBQTtBQUFBLG1DQXFDaUI7QUFBQTs7QUFDYlksY0FBUSxDQUFDQyxjQUFULENBQXdCLGtCQUF4QixFQUE0Q0MsZ0JBQTVDLENBQTZELE9BQTdELEVBQ0UsWUFBTTtBQUNKLGFBQUksQ0FBQ2IsUUFBTDtBQUNELE9BSEg7QUFJRDtBQUNEO0FBQ0Y7QUFDQTs7QUE3Q0E7QUFBQTtBQUFBLGdDQThDYztBQUNWVyxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBS2xCLE9BQTdCLEVBQXNDb0IsU0FBdEM7QUFjRDtBQTdESDs7QUFBQTtBQUFBO0FBZ0VBckIsUUFBUSxDQUFDRyxVQUFULEdBQXNCLENBQ3BCLDBDQURvQixFQUVwQiw2Q0FGb0IsRUFHcEIsa0RBSG9CLEVBSXBCLHdDQUpvQixFQUtwQixxQ0FMb0IsQ0FBdEIiLCJmaWxlIjoiLi9zcmMvdHV0b3JpYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBNdWx0aS1zdGVwIHR1dG9yaWFsIHVzaW5nIG1vZGFscy5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge1R1dG9yaWFsU3RlcH0gZnJvbSAnLi90dXRvcmlhbF9zdGVwJztcbmltcG9ydCBNaWNyb01vZGFsIGZyb20gJ21pY3JvbW9kYWwnO1xuXG4vKipcbiAqIEEgbXVsdGktc3RlcCB0dXRvcmlhbCBmb3IgdGhlIGFjY2Vzc2libGUgbXVzaWMgZ2FtZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFR1dG9yaWFsIHtcbiAgLyoqXG4gICAqIENsYXNzIGZvciBhIHR1dG9yaWFsXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tb2RhbElkID0gJ3R1dG9yaWFsTW9kYWwnO1xuICAgIHRoaXMuc3RlcHMgPSBUdXRvcmlhbC5TVEVQU19URVhULm1hcCh0ZXh0ID0+IG5ldyBUdXRvcmlhbFN0ZXAodGV4dCksIHRoaXMubmV4dFN0ZXApO1xuICAgIHRoaXMuY3VyU3RlcEluZGV4ID0gMDtcbiAgICB0aGlzLmN1clN0ZXAgPSB0aGlzLnN0ZXBzW3RoaXMuY3VyU3RlcEluZGV4XTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVEb20oKTtcbiAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgIE1pY3JvTW9kYWwuc2hvdyh0aGlzLm1vZGFsSWQpO1xuXG4gICAgdGhpcy5jdXJTdGVwLnNob3coKTtcbiAgfVxuXG4gIG5leHRTdGVwKCkge1xuICAgIHRoaXMuY3VyU3RlcEluZGV4Kys7XG4gICAgaWYgKHRoaXMuY3VyU3RlcEluZGV4IDwgdGhpcy5zdGVwcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3VyU3RlcCA9IHRoaXMuc3RlcHNbdGhpcy5jdXJTdGVwSW5kZXhdO1xuICAgICAgdGhpcy5jdXJTdGVwLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb25lKCk7XG4gICAgfVxuICB9XG4gIGRvbmUoKSB7XG4gICAgTWljcm9Nb2RhbC5jbG9zZSh0aGlzLm1vZGFsSWQpO1xuICB9XG5cbiAgYWRkU3RlcCgpIHtcbiAgICB0aGlzLnN0ZXBzLnB1c2gobmV3IFR1dG9yaWFsU3RlcCgnSW5zdHJ1Y3Rpb25zJykpO1xuICB9XG5cbiAgYWRkQ2FsbGJhY2tzKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdUdXRvcmlhbE1vZGFsQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLm5leHRTdGVwKCk7XG4gICAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgZG9tIGZvciB0aGUgbW9kYWwuXG4gICAqL1xuICBjcmVhdGVEb20oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tb2RhbElkKS5pbm5lckhUTUwgPSBgXG4gICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fb3ZlcmxheVwiIHRhYmluZGV4PVwiLTFcIiBkYXRhLW1pY3JvbW9kYWwtY2xvc2U+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2NvbnRhaW5lclwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLTEtdGl0bGVcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cIm1vZGFsX19oZWFkZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2Nsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlIG1vZGFsXCIgaWQ9XCJ0dXRvcmlhbENsb3NlQnRuXCIgZGF0YS1taWNyb21vZGFsLWNsb3NlPjwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4gY2xhc3M9XCJtb2RhbF9fY29udGVudFwiIGlkPVwibW9kYWwtMS1jb250ZW50XCI+XG4gICAgICAgICAgPGgyIGNsYXNzPVwibW9kYWxfX3RpdGxlXCIgaWQ9XCJ0dXRvcmlhbE1vZGFsVGV4dFwiPjwvaDI+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPGZvb3RlciBjbGFzcz1cIm1vZGFsX19mb290ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib2RhbF9fYnRuIG1vZGFsX19idG4tcHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJOZXh0IHN0ZXBcIiBpZD1cIlR1dG9yaWFsTW9kYWxCdG5cIj5OZXh0IHN0ZXA8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuICB9XG59XG5cblR1dG9yaWFsLlNURVBTX1RFWFQgPSBbXG4gICdIaXQgZW50ZXIgdG8gbW92ZSBmb2N1cyB0byB0aGUgd29ya3NwYWNlJyxcbiAgJ0VuYWJsZSBrZXlib2FyZCBuYXYgYnkgcHJlc3NpbmcgQ21kK1NoaWZ0K0snLFxuICAnUHJlc3MgWCB0byBuYXZpZ2F0ZSB0byB0aGUgZmlyc3Qgc3RhY2sgb2YgYmxvY2tzJyxcbiAgJ1ByZXNzIFkgdG8gbmF2aWdhdGUgdG8gdGhlIGZpcnN0IGJsb2NrJyxcbiAgJ1ByZXNzIGVudGVyIHRvIG1hcmsgdGhlIGZpcnN0IGJsb2NrJyxcbl1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/tutorial.js\n");

/***/ })

})