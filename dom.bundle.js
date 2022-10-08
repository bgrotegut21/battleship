"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["dom"],{

/***/ "./src/scripts/dom.js":
/*!****************************!*\
  !*** ./src/scripts/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_refreshLogo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/refreshLogo.svg */ "./src/images/refreshLogo.svg");


var Dom = function Dom() {
  var getElements = function getElements() {
    return {
      overlay: document.querySelector('.overlay'),
      sectionScreen: document.querySelector('.sectionScreen'),
      shipText: document.querySelector('.shipText'),
      shipGrid: document.querySelector('.shipGrid'),
      shipLayer: document.querySelector('.shipLayer'),
      rotateButton: document.querySelector('.rotateButton'),
      grids: Array.from(document.querySelectorAll('.grid')),
      hits: Array.from(document.querySelectorAll('.hits')),
      misses: Array.from(document.querySelectorAll('.misses')),
      playerGrid: document.querySelector('.playerGrid'),
      playerHits: document.querySelector('.playerHits'),
      playerMisses: document.querySelector('.playerMisses'),
      computerGrid: document.querySelector('.computerGrid'),
      computerHits: document.querySelector('.computerHits'),
      computerMisses: document.querySelector('.computerMisses'),
      content: document.querySelector('.content'),
      computerGridLayer: document.querySelector('.computerGridLayer')
    };
  };

  var getPage = function getPage() {
    var content = "    <div class=\"content\">\n                            <div class=\"overlay\"></div>\n                            <div class=\"sectionScreen\">\n                              <div class=\"shipSelection\">\n                                <h1 class=\"shipTitle\">BATTLESHIP</h1>\n                                <h2 class=\"shipText\">Place your Battleship</h2>\n                                <div class=\"shipLayer\">\n                                  <div class=\"shipOverlay\"></div>\n                                  <div class=\"shipGrid\"></div>\n                              </div>\n                                <div class=\"rotateButton\">\n                                  <img\n                                    class=\"rotateImage\"\n                                    src=\"".concat(_images_refreshLogo_svg__WEBPACK_IMPORTED_MODULE_0__, "\"\n                                    alt=\"Rotate Image\"\n                                  />\n                                </div>\n                              </div>\n                            </div>\n\n                            <main class=\"mainSection\">\n                              <div class=\"mainTitle\"><h1>BATTLESHIP</h1></div>\n                              <div class=\"centerSection\">\n                                <div class=\"playerBoard board\">\n                                  <h2 class=\"boardTitle\">Player Board</h2>\n                                  <div class=\"gridLayer playerGridLayer\">\n                                    <div class=\"gridOverlay\"></div>\n                                    <div class=\"playerGrid grid\"></div>\n                                  </div>\n                                  <div class=\"playerStats stats\">\n                                    <h2 class=\"playerHits hits\">Hits 0</h2>\n                                    <h2 class=\"playerMisses misses\">Misses 0</h2>\n                                  </div>\n                                </div>\n\n                                <div class=\"computerBoard board\">\n                                  <h2 class=\"boardTitle\">Computer Board</h2>\n                                  <div class=\"gridLayer computerGridLayer\">\n                                    <div class=\"gridOverlay computerGridOverlay\"></div>\n                                    <div class=\"computerGrid grid\"></div>\n                                  </div>\n                                  <div class=\"computerStats stats\">\n                                    <h2 class=\"computerHits hits\">Hits 0</h2>\n\n                                    <h2 class=\"computerMisses misses\">Misses 0</h2>\n                                  </div>\n                                </div>\n                              </div>\n                            </main>\n                            <div class=\"footer\">\n                              <h2 class=\"copyrightMessage\">\n                                Website and code are made by Brayden Grotegut\n                              </h2>\n                            </div>\n                          </div>");
    return content;
  };

  return {
    getPage: getPage,
    getElements: getElements
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);

/***/ }),

/***/ "./src/images/refreshLogo.svg":
/*!************************************!*\
  !*** ./src/images/refreshLogo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2527eb5cededc1d06632.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/dom.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07RUFDaEIsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7SUFBQSxPQUFPO01BQ3pCQyxPQUFPLEVBQUVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQURnQjtNQUV6QkMsYUFBYSxFQUFFRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBRlU7TUFHekJFLFFBQVEsRUFBRUgsUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBSGU7TUFJekJHLFFBQVEsRUFBRUosUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBSmU7TUFLekJJLFNBQVMsRUFBRUwsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBTGM7TUFNekJLLFlBQVksRUFBRU4sUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBTlc7TUFPekJNLEtBQUssRUFBRUMsS0FBSyxDQUFDQyxJQUFOLENBQVdULFFBQVEsQ0FBQ1UsZ0JBQVQsQ0FBMEIsT0FBMUIsQ0FBWCxDQVBrQjtNQVF6QkMsSUFBSSxFQUFFSCxLQUFLLENBQUNDLElBQU4sQ0FBV1QsUUFBUSxDQUFDVSxnQkFBVCxDQUEwQixPQUExQixDQUFYLENBUm1CO01BU3pCRSxNQUFNLEVBQUVKLEtBQUssQ0FBQ0MsSUFBTixDQUFXVCxRQUFRLENBQUNVLGdCQUFULENBQTBCLFNBQTFCLENBQVgsQ0FUaUI7TUFVekJHLFVBQVUsRUFBRWIsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBVmE7TUFXekJhLFVBQVUsRUFBRWQsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBWGE7TUFZekJjLFlBQVksRUFBRWYsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBWlc7TUFhekJlLFlBQVksRUFBRWhCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQWJXO01BY3pCZ0IsWUFBWSxFQUFFakIsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBZFc7TUFlekJpQixjQUFjLEVBQUVsQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBZlM7TUFnQnpCa0IsT0FBTyxFQUFFbkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBaEJnQjtNQWlCekJtQixpQkFBaUIsRUFBRXBCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQkFBdkI7SUFqQk0sQ0FBUDtFQUFBLENBQXBCOztFQW9CQSxJQUFNb0IsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtJQUNwQixJQUFNRixPQUFPLDR5QkFhMEJ2QixvREFiMUIsNHVFQUFiO0lBdURBLE9BQU91QixPQUFQO0VBQ0QsQ0F6REQ7O0VBMkRBLE9BQU87SUFBRUUsT0FBTyxFQUFQQSxPQUFGO0lBQVd2QixXQUFXLEVBQVhBO0VBQVgsQ0FBUDtBQUNELENBakZEOztBQW1GQSxpRUFBZUQsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZnJlc2hpbmdMb2dvIGZyb20gJy4uL2ltYWdlcy9yZWZyZXNoTG9nby5zdmcnO1xuXG5jb25zdCBEb20gPSAoKSA9PiB7XG4gIGNvbnN0IGdldEVsZW1lbnRzID0gKCkgPT4gKHtcbiAgICBvdmVybGF5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpLFxuICAgIHNlY3Rpb25TY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uU2NyZWVuJyksXG4gICAgc2hpcFRleHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwVGV4dCcpLFxuICAgIHNoaXBHcmlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcEdyaWQnKSxcbiAgICBzaGlwTGF5ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwTGF5ZXInKSxcbiAgICByb3RhdGVCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGVCdXR0b24nKSxcbiAgICBncmlkczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZCcpKSxcbiAgICBoaXRzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaXRzJykpLFxuICAgIG1pc3NlczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWlzc2VzJykpLFxuICAgIHBsYXllckdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJHcmlkJyksXG4gICAgcGxheWVySGl0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckhpdHMnKSxcbiAgICBwbGF5ZXJNaXNzZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJNaXNzZXMnKSxcbiAgICBjb21wdXRlckdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlckdyaWQnKSxcbiAgICBjb21wdXRlckhpdHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlckhpdHMnKSxcbiAgICBjb21wdXRlck1pc3NlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyTWlzc2VzJyksXG4gICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKSxcbiAgICBjb21wdXRlckdyaWRMYXllcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyR3JpZExheWVyJyksXG4gIH0pO1xuXG4gIGNvbnN0IGdldFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uU2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcFNlbGVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJzaGlwVGl0bGVcIj5CQVRUTEVTSElQPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwic2hpcFRleHRcIj5QbGFjZSB5b3VyIEJhdHRsZXNoaXA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcExheWVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBPdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBHcmlkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdGF0ZUJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm90YXRlSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJHtyZWZyZXNoaW5nTG9nb31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUm90YXRlIEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1haW4gY2xhc3M9XCJtYWluU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5UaXRsZVwiPjxoMT5CQVRUTEVTSElQPC9oMT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJTZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXJCb2FyZCBib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImJvYXJkVGl0bGVcIj5QbGF5ZXIgQm9hcmQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkTGF5ZXIgcGxheWVyR3JpZExheWVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZE92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXJHcmlkIGdyaWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyU3RhdHMgc3RhdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInBsYXllckhpdHMgaGl0c1wiPkhpdHMgMDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwbGF5ZXJNaXNzZXMgbWlzc2VzXCI+TWlzc2VzIDA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcHV0ZXJCb2FyZCBib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImJvYXJkVGl0bGVcIj5Db21wdXRlciBCb2FyZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRMYXllciBjb21wdXRlckdyaWRMYXllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRPdmVybGF5IGNvbXB1dGVyR3JpZE92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wdXRlckdyaWQgZ3JpZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wdXRlclN0YXRzIHN0YXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjb21wdXRlckhpdHMgaGl0c1wiPkhpdHMgMDwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvbXB1dGVyTWlzc2VzIG1pc3Nlc1wiPk1pc3NlcyAwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY29weXJpZ2h0TWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJzaXRlIGFuZCBjb2RlIGFyZSBtYWRlIGJ5IEJyYXlkZW4gR3JvdGVndXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0UGFnZSwgZ2V0RWxlbWVudHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvbTtcbiJdLCJuYW1lcyI6WyJyZWZyZXNoaW5nTG9nbyIsIkRvbSIsImdldEVsZW1lbnRzIiwib3ZlcmxheSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlY3Rpb25TY3JlZW4iLCJzaGlwVGV4dCIsInNoaXBHcmlkIiwic2hpcExheWVyIiwicm90YXRlQnV0dG9uIiwiZ3JpZHMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGl0cyIsIm1pc3NlcyIsInBsYXllckdyaWQiLCJwbGF5ZXJIaXRzIiwicGxheWVyTWlzc2VzIiwiY29tcHV0ZXJHcmlkIiwiY29tcHV0ZXJIaXRzIiwiY29tcHV0ZXJNaXNzZXMiLCJjb250ZW50IiwiY29tcHV0ZXJHcmlkTGF5ZXIiLCJnZXRQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==