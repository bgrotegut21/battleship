"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _scripts_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/ui.js */ "./src/scripts/ui.js");


var currentUi = (0,_scripts_ui_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
currentUi.activateUi();

/***/ }),

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
      computerGridLayer: document.querySelector('.computerGridLayer'),
      restart: document.querySelector('.restart'),
      gameOverText: document.querySelector('.gameOverText'),
      gameFinishedSection: document.querySelector('.gameFinishedSection')
    };
  };

  var getPage = function getPage() {
    var content = "    <div class=\"content\">\n                            <div class=\"overlay\"></div>\n                            <div class=\"sectionScreen\">\n                              <div class=\"shipSelection\">\n\n                              <div class=\"gameFinishedSection\">\n                              <h1 class=\"gameOverText\">You Win \uD83D\uDE03</h1>\n                    \n                              <button class=\"restart\">Restart</button>\n                            </div>\n\n                                <h1 class=\"shipTitle\">BATTLESHIP</h1>\n                                <h2 class=\"shipText\">Place your Battleship</h2>\n                                <div class=\"shipLayer\">\n                                  <div class=\"shipOverlay\"></div>\n                                  <div class=\"shipGrid\"></div>\n                              </div>\n                                <div class=\"rotateButton\">\n                                  <img\n                                    class=\"rotateImage\"\n                                    src=\"".concat(_images_refreshLogo_svg__WEBPACK_IMPORTED_MODULE_0__, "\"\n                                    alt=\"Rotate Image\"\n                                  />\n                                </div>\n                              </div>\n                            </div>\n\n                            <main class=\"mainSection\">\n                              <div class=\"mainTitle\"><h1>BATTLESHIP</h1></div>\n                              <div class=\"centerSection\">\n                                <div class=\"playerBoard board\">\n                                  <h2 class=\"boardTitle\">Player Board</h2>\n                                  <div class=\"gridLayer playerGridLayer\">\n                                    <div class=\"gridOverlay\"></div>\n                                    <div class=\"playerGrid grid\"></div>\n                                  </div>\n                                  <div class=\"playerStats stats\">\n                                    <h2 class=\"playerHits hits\">Hits 0</h2>\n                                    <h2 class=\"playerMisses misses\">Misses 0</h2>\n                                  </div>\n                                </div>\n\n                                <div class=\"computerBoard board\">\n                                  <h2 class=\"boardTitle\">Computer Board</h2>\n                                  <div class=\"gridLayer computerGridLayer\">\n                                    <div class=\"gridOverlay computerGridOverlay\"></div>\n                                    <div class=\"computerGrid grid\"></div>\n                                  </div>\n                                  <div class=\"computerStats stats\">\n                                    <h2 class=\"computerHits hits\">Hits 0</h2>\n\n                                    <h2 class=\"computerMisses misses\">Misses 0</h2>\n                                  </div>\n                                </div>\n                              </div>\n                            </main>\n                            <div class=\"footer\">\n                              <h2 class=\"copyrightMessage\">\n                                Website and code are made by Brayden Grotegut\n                              </h2>\n                            </div>\n                          </div>");
    return content;
  };

  return {
    getPage: getPage,
    getElements: getElements
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);

/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _position_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position.js */ "./src/scripts/position.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/scripts/ship.js");
/* harmony import */ var _practical_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./practical.js */ "./src/scripts/practical.js");




var Gameboard = function Gameboard() {
  var position = (0,_position_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var practical = (0,_practical_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var currentShips = [];
  var hits = [];
  var misses = [];

  var randomize = function randomize() {
    return Math.floor(Math.random() * 10);
  };

  var randomAxis = function randomAxis() {
    var axies = ['x', 'y'];
    return axies[Math.floor(Math.random() * axies.length)];
  };

  var placeAllShips = function placeAllShips(shipsArray) {
    currentShips = shipsArray;
    return currentShips;
  };

  var compareShipsArray = function compareShipsArray(latestShipsArray, ships) {
    var shipsDoCollide = false;
    if (!ships) return shipsDoCollide; // console.log(latestShipsArray, 'the curreent ships array');
    // console.log(ships, 'the current ships');

    latestShipsArray.forEach(function (latestShips) {
      latestShips.forEach(function (boat) {
        ships.forEach(function (latestBoat) {
          if (position.comparePosition(boat, latestBoat)) {
            shipsDoCollide = true;
          }
        });
      });
    });
    return shipsDoCollide;
  };

  var getTypeOfPlacedShip = function getTypeOfPlacedShip(shipArray) {
    if (shipArray.length === 5) return false;
    var shipTypes = [{
      shipType: 'carrier',
      shipLength: 5
    }, {
      shipType: 'battleship',
      shipLength: 4
    }, {
      shipType: 'destoyer',
      shipLength: 3
    }, {
      shipType: 'submarine',
      shipLength: 3
    }, {
      shipType: 'gunboat',
      shipLength: 2
    }];
    return shipTypes[shipArray.length];
  };

  var playerPlaceShip = function playerPlaceShip(location, axis) {
    var currentArray = practical.copyArray(currentShips);
    var shipType = getTypeOfPlacedShip(currentArray);
    var latestShip = ship.createShip(location, shipType.shipLength, axis);
    var isCollided = compareShipsArray(currentArray, latestShip);

    if (shipType && latestShip && !isCollided) {
      currentArray.push(latestShip);
    }

    currentShips = currentArray;
    return currentArray;
  };

  var placeRandomShips = function placeRandomShips(shipsArray, randomizer, randomAxies) {
    var latestShipsArray = shipsArray;
    var randomPosition = position.createPosition(randomizer(), randomizer());
    var shipType = getTypeOfPlacedShip(latestShipsArray);

    if (!shipType) {
      // console.log(shipType);
      // console.log(latestShipsArray, 'the latest ships array');
      return latestShipsArray;
    }

    var latestLength = shipType.shipLength;
    var randomShip = ship.createShip(randomPosition, latestLength, randomAxies());
    var shipCollides = compareShipsArray(latestShipsArray, randomShip);
    if (randomShip && !shipCollides) latestShipsArray.push(randomShip);
    return placeRandomShips(latestShipsArray, randomizer, randomAxies);
  };

  var placeShipsRandomly = function placeShipsRandomly(randomizer, randomAxies) {
    var shipsArray = placeRandomShips([], randomizer, randomAxies);
    currentShips = shipsArray;
    return shipsArray;
  };

  var filterAttack = function filterAttack(array, currentAttack) {
    var currentAttackArray = array.filter(function (item) {
      return item.xCoord === currentAttack.xCoord && item.yCoord === currentAttack.yCoord;
    });
    return currentAttackArray;
  };

  var hasHitShip = function hasHitShip(hitPosition, latestHits, latestMisses) {
    var hasBeenHit = filterAttack(latestHits, hitPosition);
    var hasBeenMiss = filterAttack(latestMisses, hitPosition);
    if (hasBeenHit.length > 0 || hasBeenMiss.length > 0) return true;
    return false;
  };

  var attackShip = function attackShip(latestPosition, ships, currentHits, currentMisses) {
    var isHit = false;
    var latestShipsArray = [];
    var latestHits = currentHits;
    var latestMisses = currentMisses;
    if (!latestPosition) return false;
    if (hasHitShip(latestPosition, currentHits, currentMisses)) return false;
    ships.forEach(function (shipArray) {
      var positionsArray = practical.copyArray(shipArray);
      var hit = ship.hit(positionsArray, latestPosition);

      if (hit.hitArray.length !== 0) {
        isHit = true;
        positionsArray = hit.shipArrays;
        latestHits.push(hit.hitArray[0]);
      }

      latestShipsArray.push(positionsArray);
    });
    if (!isHit) latestMisses.push(latestPosition);
    var finalObject = {
      isHit: isHit,
      latestShipsArray: latestShipsArray,
      latestHits: latestHits,
      latestMisses: latestMisses
    };
    return finalObject;
  };

  var recieveAttack = function recieveAttack(latestPosition) {
    var result = attackShip(latestPosition, currentShips, hits, misses);
    if (!result) return false;
    currentShips = result.latestShipsArray;
    hits = result.latestHits;
    misses = result.latestMisses;
    return result;
  };

  var createRandomCoords = function createRandomCoords(randomizer) {
    var randomPosition;

    if (randomizer.isMockRandom) {
      randomPosition = randomizer.callRandomizer();
    } else {
      var randomX = randomizer();
      var randomY = randomizer();
      randomPosition = position.createPosition(randomX, randomY);
    }

    return randomPosition;
  };

  var recieveRandomAttack = function recieveRandomAttack(randomizer) {
    var randomPosition = createRandomCoords(randomizer);
    var hasHit = hasHitShip(randomPosition, hits, misses);
    if (hasHit) return recieveRandomAttack(randomizer);
    return recieveAttack(randomPosition);
  };

  var isAllSunk = function isAllSunk() {
    var hasSunked = true;
    currentShips.forEach(function (ships) {
      if (!ship.isSunk(ships)) {
        hasSunked = false;
      }
    });
    return hasSunked;
  };

  var getValues = function getValues() {
    return {
      currentShips: currentShips,
      hits: hits,
      misses: misses
    };
  };

  return {
    attackShip: attackShip,
    recieveAttack: recieveAttack,
    isAllSunk: isAllSunk,
    placeShipsRandomly: placeShipsRandomly,
    playerPlaceShip: playerPlaceShip,
    placeAllShips: placeAllShips,
    randomize: randomize,
    recieveRandomAttack: recieveRandomAttack,
    randomAxis: randomAxis,
    getValues: getValues,
    getTypeOfPlacedShip: getTypeOfPlacedShip
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game),
/* harmony export */   "activeGame": () => (/* binding */ activeGame)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/scripts/gameboard.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/scripts/ship.js");
/* harmony import */ var _position_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./position.js */ "./src/scripts/position.js");




var Game = function Game() {
  var playerBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var computerBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var playerCheckBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var position = (0,_position_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var randomizer = computerBoard.randomize;
  var randomAxies = computerBoard.randomAxis;

  var checkSetup = function checkSetup(playerCheckShips) {
    if (playerCheckShips.length === 5) return true;
    return false;
  };

  var setupGame = function setupGame() {
    var playerCheckValues = playerCheckBoard.getValues();
    if (!checkSetup(playerCheckValues.currentShips)) return false;
    playerBoard.placeAllShips(playerCheckValues.currentShips);
    computerBoard.placeShipsRandomly(randomizer, randomAxies);
    return true;
  };

  var attackBoats = function attackBoats(coords) {
    var playerCheckValues = playerCheckBoard.getValues();
    if (!checkSetup(playerCheckValues.currentShips)) return false;
    var currentAttack = computerBoard.recieveAttack(coords);
    if (!currentAttack) return false;
    playerBoard.recieveRandomAttack(randomizer);
    return true;
  };

  var setupShip = function setupShip(location, axis) {
    return playerCheckBoard.playerPlaceShip(location, axis);
  };

  var gameIsOver = function gameIsOver() {
    var playerCheckShips = playerCheckBoard.getValues().currentShips;
    if (!checkSetup(playerCheckShips)) return false;

    if (computerBoard.isAllSunk()) {
      return {
        message: 'You Won',
        gameFinished: true
      };
    }

    if (playerBoard.isAllSunk()) {
      return {
        message: 'You Lost',
        gameFinished: true
      };
    }

    return {
      gameFinished: false
    };
  };

  var arrangeBlocks = function arrangeBlocks(mousePosition, currentRotation) {
    var checkboardObjects = playerCheckBoard.getValues();
    var shipTypeObject = playerCheckBoard.getTypeOfPlacedShip(checkboardObjects.currentShips); // console.log(shipTypeObject, 'the ship type object');
    // console.log(mousePosition, 'the mouse position');
    // console.log(currentRotation, 'the current rotation');

    var currentShip = ship.createShip(mousePosition, shipTypeObject.shipLength, currentRotation); // console.log(currentShip, 'the most up to date ships');

    return currentShip;
  };

  var getGameValues = function getGameValues() {
    return {
      playerBoard: playerBoard,
      computerBoard: computerBoard,
      playerCheckBoard: playerCheckBoard
    };
  };

  return {
    checkSetup: checkSetup,
    attackBoats: attackBoats,
    setupGame: setupGame,
    gameIsOver: gameIsOver,
    setupShip: setupShip,
    getGameValues: getGameValues,
    arrangeBlocks: arrangeBlocks
  };
};

var activeGame = Game();


/***/ }),

/***/ "./src/scripts/position.js":
/*!*********************************!*\
  !*** ./src/scripts/position.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Position = function Position() {
  var createPosition = function createPosition(xCoord, yCoord) {
    return {
      xCoord: xCoord,
      yCoord: yCoord
    };
  };

  var checkOutOfBounce = function checkOutOfBounce(newPosition) {
    if (newPosition.xCoord > 9 || newPosition.yCoord > 9) return true;
    if (newPosition.xCoord < 0 || newPosition.yCoord < 0) return true;
    return false;
  };

  var addPosition = function addPosition(position1, position2) {
    if (position1 === false || position2 === false) return false;
    var newPosition = createPosition(position1.xCoord, position1.yCoord);
    newPosition.xCoord += position2.xCoord;
    newPosition.yCoord += position2.yCoord;
    if (checkOutOfBounce(newPosition)) return false;
    return newPosition;
  };

  var multiplyPosition = function multiplyPosition(position1, position2) {
    if (position1 === false || position2 === false) return false;
    var newPosition = createPosition(position1.xCoord, position1.yCoord);
    newPosition.xCoord *= position2.xCoord;
    newPosition.yCoord *= position2.yCoord;
    if (checkOutOfBounce(newPosition)) return false;
    return newPosition;
  };

  var comparingPositionConditional = function comparingPositionConditional(position1, position2, axis) {
    if (position1[axis] === position2[axis] + 1) return true;
    if (position1[axis] === position2[axis]) return true;
    if (position1[axis] === position2[axis] - 1) return true;
    return false;
  };

  var comparePosition = function comparePosition(position1, position2) {
    if (!comparingPositionConditional(position1, position2, 'xCoord')) {
      return false;
    }

    if (!comparingPositionConditional(position1, position2, 'yCoord')) {
      return false;
    }

    return true;
  };

  return {
    createPosition: createPosition,
    addPosition: addPosition,
    multiplyPosition: multiplyPosition,
    comparePosition: comparePosition,
    checkOutOfBounce: checkOutOfBounce
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Position);

/***/ }),

/***/ "./src/scripts/practical.js":
/*!**********************************!*\
  !*** ./src/scripts/practical.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var Practical = function Practical() {
  var copyArray = function copyArray(array) {
    var newArray = [];
    array.forEach(function (item) {
      newArray.push(item);
    });
    return newArray;
  };

  var isObject = function isObject(currentObject) {
    if (_typeof(currentObject) === 'object' && currentObject !== null) {
      return true;
    }

    return false;
  };

  var checkObject = function checkObject(object1, object2) {
    var index = 0;
    var secondIndex = 0;
    var objectIsEqual = true;
    var currentObject = object1;
    var currentObject2 = object2;
    var currentObjectValues = Object.values(currentObject);
    var currentObject2Values = Object.values(currentObject2);
    var objectKeys = Object.keys(currentObject);
    var objectKeys2 = Object.keys(currentObject2);
    objectKeys.forEach(function (key) {
      if (key !== objectKeys2[index]) objectIsEqual = false;
      index += 1;
    });
    if (!objectIsEqual) return false;
    if (objectKeys.length !== objectKeys2.length) return false; // console.log(currentObject, 'the current object');
    // console.log(currentObject2, 'the current object2');

    currentObjectValues.forEach(function (item) {
      var item2 = currentObject2Values[secondIndex];

      if (isObject(item) && isObject(item2)) {
        var checkObjectBool = checkObject(item, item2);
        if (!checkObjectBool) objectIsEqual = false;
      } else if (item !== item2) {
        objectIsEqual = false;
      }

      secondIndex += 1;
    });
    return objectIsEqual;
  };

  return {
    copyArray: copyArray,
    checkObject: checkObject
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Practical);

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _position_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position.js */ "./src/scripts/position.js");


var Ship = function Ship() {
  var position = (0,_position_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

  var getAddedPosition = function getAddedPosition(axis) {
    var addedPosition;
    if (axis === 'x') addedPosition = position.createPosition(1, 0);else addedPosition = position.createPosition(0, 1);
    return addedPosition;
  };

  var createShip = function createShip(position1, length1, axis) {
    if (length1 === 0 || length1 > 5) return false;
    if (position.checkOutOfBounce(position1)) return false;

    var populateShips = function populateShips(currentPosition, latestLength, latestArray) {
      var currentArray = latestArray;
      var newPosition = currentPosition;
      if (currentPosition === false) return false;
      if (latestLength === 0) return currentArray;

      if (latestLength === length1) {
        currentArray.push(currentPosition);
        return populateShips(currentPosition, latestLength - 1, currentArray);
      }

      var addedPosition = getAddedPosition(axis);
      newPosition = position.addPosition(newPosition, addedPosition);
      if (!newPosition) return newPosition;
      currentArray.push(newPosition);
      var arrayLength = currentArray.length - 1;
      return populateShips(currentArray[arrayLength], latestLength - 1, currentArray);
    };

    return populateShips(position1, length1, [], false);
  };

  var isSunk = function isSunk(shipArray) {
    if (shipArray.length === 0) return true;
    return false;
  };

  var hit = function hit(positionsArray, position) {
    var hitArray = positionsArray.filter(function (pos) {
      if (pos.xCoord === position.xCoord && pos.yCoord === position.yCoord) {
        return true;
      }

      return false;
    });
    var shipArrays = positionsArray.filter(function (pos) {
      if (pos.xCoord === position.xCoord && pos.yCoord === position.yCoord) {
        return false;
      }

      return true;
    });
    return {
      hitArray: hitArray,
      shipArrays: shipArrays
    };
  };

  return {
    createShip: createShip,
    hit: hit,
    isSunk: isSunk
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/scripts/ui.js":
/*!***************************!*\
  !*** ./src/scripts/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/scripts/dom.js");
/* harmony import */ var _position_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./position.js */ "./src/scripts/position.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship.js */ "./src/scripts/ship.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.js */ "./src/scripts/main.js");



 // you win  😃
// you lost 😢

var Ui = function Ui() {
  var dom = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var position = (0,_position_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var renderSpeed = 1;
  var blockSize = 42;
  var activeGame;
  var placedShip = false;
  var axis = 'y';
  var mouseBlockLocation = false;

  var createDomElement = function createDomElement(elementName) {
    return document.createElement(elementName);
  };

  var getMousePosition = function getMousePosition(offsetX, offsetY) {
    // console.log(offsetX, offsetY, 'offset x and offset y');
    var xCoord = Math.floor(offsetX / blockSize);
    var yCoord = Math.floor(offsetY / blockSize);
    var mousePosition = position.createPosition(xCoord, yCoord);
    var outOfBounce = position.checkOutOfBounce(mousePosition);
    if (outOfBounce) return false; // console.log(mousePosition, 'the current mouse position');

    return mousePosition;
  };

  var findMousePosition = function findMousePosition(event) {
    var currentMousePosition = getMousePosition(event.offsetX, event.offsetY);
    mouseBlockLocation = currentMousePosition; // console.log(currentMousePosition, 'the current mouse position');
  }; // wotk on this function


  var findTouchPosition = function findTouchPosition(event) {
    var rect = event.target.getBoundingClientRect();
    var touchOffsetX = event.targetTouches[0].clientX - rect.x;
    var touchOffsetY = event.targetTouches[0].clientY - rect.y;
    var touchPosition = getMousePosition(touchOffsetX, touchOffsetY);
    mouseBlockLocation = touchPosition;
    console.log(mouseBlockLocation, 'the mouse block location');
    event.preventDefault();
  }; // block size matches the size gridsize of the media query divided by 10


  var changeBlockSize = function changeBlockSize(matchMedia) {
    blockSize = 42;
    if (matchMedia('(max-width: 960px)').matches) blockSize = 30;
    if (matchMedia('(max-width: 470px)').matches) blockSize = 21;
    if (matchMedia('(max-width: 320px)').matches) blockSize = 15;
    return blockSize; // console.log(matchMedia('(max-width: 320px)'), 'the current match media');
  };

  var createBlockElement = function createBlockElement(blockClass, createBlock) {
    var latestClass = blockClass;

    if (latestClass !== 'hitBlock' && latestClass !== 'missBlock' && latestClass !== 'cursorBlock') {
      latestClass = '';
    }

    var blockElement = createBlock('div');
    blockElement.classList.add('block');
    if (latestClass !== '') blockElement.classList.add(latestClass);
    return blockElement;
  };

  var disableStarterUi = function disableStarterUi() {
    return true;
  }; // const renderSelectionBlocks = (mousePosition, latestBlockSize) => {
  //   const element = dom.getElements();
  //   const currentSnakeBlock = createBlockElement();
  //   const realPositionX = Math.floor(mousePosition.xCoord * latestBlockSize);
  //   const realPositionY = Math.floor(mousePosition.yCoord * latestBlockSize);
  //   console.log(mousePosition, 'THE CURRENT MOUSE POSITION');
  //   console.log(realPositionX, 'the real position x');
  //   console.log(realPositionY, 'the real position y');
  //   currentSnakeBlock.style.left = `${realPositionX}px`;
  //   currentSnakeBlock.style.top = `${realPositionY}px`;
  //   element.shipGrid.appendChild(currentSnakeBlock);
  // };


  var createShipBlock = function createShipBlock(shipPosition, latestBlockSize, shipType) {
    var shipBlock = createBlockElement(shipType, createDomElement);
    var realPositionX = Math.floor(shipPosition.xCoord * latestBlockSize);
    var realPositionY = Math.floor(shipPosition.yCoord * latestBlockSize);
    shipBlock.style.left = "".concat(realPositionX, "px");
    shipBlock.style.top = "".concat(realPositionY, "px");
    return shipBlock;
  };

  var renderAlreadyPlacedShips = function renderAlreadyPlacedShips(shipGrid, latestBlockSize) {
    var gameValues = activeGame.getGameValues();
    var checkBoardShips = gameValues.playerCheckBoard.getValues().currentShips;
    checkBoardShips.forEach(function (playerCheckShips) {
      playerCheckShips.forEach(function (boat) {
        var shipBlock = createShipBlock(boat, latestBlockSize);
        shipGrid.appendChild(shipBlock);
      });
    });
  };

  var renderPlacedShip = function renderPlacedShip(latestBlockSize) {
    var element = dom.getElements();
    var shipGrid = element.shipGrid;
    if (!placedShip) return placedShip;
    shipGrid.innerHTML = '';
    placedShip.forEach(function (shipPosition) {
      var shipBlock = createShipBlock(shipPosition, latestBlockSize);
      shipGrid.appendChild(shipBlock);
    });
    renderAlreadyPlacedShips(shipGrid, latestBlockSize);
  };

  var changeAxis = function changeAxis() {
    if (axis === 'y') axis = 'x';else axis = 'y';
  };

  var moveShipByDirection = function moveShipByDirection(mouseLocation, currentShip, currentAxis) {
    var latestShip = false;
    if (position.checkOutOfBounce(currentShip[0])) return latestShip;
    var newXPosition = position.createPosition(mouseLocation.xCoord, 0).xCoord;
    var newYPosition = position.createPosition(0, mouseLocation.yCoord).yCoord;
    var newShipPosition = position.createPosition(newXPosition, currentShip[0].yCoord);

    if (currentAxis === 'x') {
      newShipPosition = position.createPosition(currentShip[0].xCoord, newYPosition);
    }

    latestShip = ship.createShip(newShipPosition, currentShip.length, currentAxis);
    return latestShip;
  };

  var placePlayerShip = function placePlayerShip(latestShip, latestAxis, latestGame) {
    if (latestShip) latestGame.setupShip(latestShip[0], latestAxis);
    return false;
  };

  var placePlayerShipEvent = function placePlayerShipEvent() {
    placePlayerShip(placedShip, axis, activeGame);
  };

  var resetGame = function resetGame() {
    var element = dom.getElements();
    element.computerGrid.innerHTML = '';
    element.playerGrid.innerHTML = '';
    element.shipSelection.style.display = 'flex';
    element.gameFinishedSection.style.display = 'none';
    element.gameOverText.innerHTML = '';
    activateUi();
  };

  var addUiEvents = function addUiEvents() {
    var element = dom.getElements();
    element.shipLayer.addEventListener('mousemove', findMousePosition);
    element.shipLayer.addEventListener('touchmove', findTouchPosition);
    element.shipLayer.addEventListener('click', placePlayerShipEvent);
    element.rotateButton.addEventListener('click', changeAxis);
  };

  var removeUiEvents = function removeUiEvents() {
    var element = dom.getElements();
    element.shipLayer.removeEventListener('mousemove', findMousePosition);
    element.shipLayer.removeEventListener('touchmove', findTouchPosition);
    element.shipLayer.removeEventListener('click', placePlayerShipEvent);
    element.rotateButton.removeEventListener('click', changeAxis);
  };

  var addEndingEvents = function addEndingEvents() {
    var element = dom.getElements();
    element.restart.addEventListener('click', restart);
  };

  var removeEndingEvents = function removeEndingEvents() {
    var element = dom.getElements();
    element.restart.removeEventListener('click', element.restart);
  };

  var removeGameEvents = function removeGameEvents() {
    addEndingEvents();
    var element = dom.getElements();
    window.removeEventListener('mousemove', changeMousePosition);
    element.removeEventListener('touchmove', change).addEventListener('mousemove', findMousePosition);
    element.removeEventListener('click', attackShips);
  };

  var getMessage = function getMessage() {};

  var addGameEvents = function addGameEvents() {
    removeUiEvents();
    var element = dom.getElements();
    window.addEventListener('mousemove', changeMousePosition);
    element.computerGridLayer.addEventListener('mousemove', findMousePosition);
    element.computerGridLayer.addEventListener('click', attackShips);
  };

  var checkMouseTarget = function checkMouseTarget(elementClass) {
    // console.log(elementClass, 'the element calss');
    if (elementClass !== 'gridOverlay computerGridOverlay') return false;
    return true;
  };

  var changeMousePosition = function changeMousePosition(event) {
    var mouseTarget = checkMouseTarget(event.target.className);
    if (!mouseTarget) mouseBlockLocation = false;
  };

  var attackShips = function attackShips() {
    activeGame.attackBoats(mouseBlockLocation);
  };

  var renderShips = function renderShips(ships, grid, latestBlockSize) {
    ships.forEach(function (shipGroup) {
      shipGroup.forEach(function (boat) {
        var shipElement = createShipBlock(boat, latestBlockSize);
        grid.appendChild(shipElement);
      });
    });
  };

  var renderHits = function renderHits(ships, shipType, grid, latestBlockSize) {
    ships.forEach(function (shipPosition) {
      var shipElement = createShipBlock(shipPosition, latestBlockSize, shipType);
      grid.appendChild(shipElement);
    });
  };

  var removeCursorElement = function removeCursorElement() {
    var _dom$getElements = dom.getElements(),
        computerGrid = _dom$getElements.computerGrid;

    console.log(computerGrid.innerHTML);
  };

  var renderGrids = function renderGrids(blockSize2, mousePosition) {
    var gameValues = activeGame.getGameValues();

    var _dom$getElements2 = dom.getElements(),
        playerGrid = _dom$getElements2.playerGrid;

    var _dom$getElements3 = dom.getElements(),
        computerGrid = _dom$getElements3.computerGrid;

    playerGrid.innerHTML = '';
    computerGrid.innerHTML = '';
    var playerBoardValues = gameValues.playerBoard.getValues();
    var computerBoardValues = gameValues.computerBoard.getValues(); // console.log(playerBoardValues, 'playerBoardValues');
    // console.log(computerBoardValues, 'computerBoardValues');
    // console.log(playerBoardValues, 'the player board values');

    renderShips(playerBoardValues.currentShips, playerGrid, blockSize2);
    renderHits(playerBoardValues.hits, 'hitBlock', playerGrid, blockSize2);
    renderHits(playerBoardValues.misses, 'missBlock', playerGrid, blockSize2);
    renderShips(computerBoardValues.currentShips, computerGrid, blockSize2);
    renderHits(computerBoardValues.hits, 'hitBlock', computerGrid, blockSize2);
    renderHits(computerBoardValues.misses, 'missBlock', computerGrid, blockSize2);
    var mouseShip = ship.createShip(mousePosition, 1, 'x');

    if (mouseShip) {
      renderHits(mouseShip, 'cursorBlock', computerGrid, blockSize2);
    }
  };

  var renderStats = function renderStats() {
    var gameValues = activeGame.getGameValues();

    var _dom$getElements4 = dom.getElements(),
        playerHits = _dom$getElements4.playerHits,
        playerMisses = _dom$getElements4.playerMisses;

    var _dom$getElements5 = dom.getElements(),
        computerHits = _dom$getElements5.computerHits,
        computerMisses = _dom$getElements5.computerMisses;

    var playerBoardValues = gameValues.playerBoard.getValues();
    var computerBoardValues = gameValues.computerBoard.getValues();
    playerHits.textContent = "Hits - ".concat(playerBoardValues.hits.length);
    playerMisses.textContent = "Misses - ".concat(playerBoardValues.misses.length);
    computerHits.textContent = "Hits - ".concat(computerBoardValues.hits.length);
    computerMisses.textContent = "Misses - ".concat(computerBoardValues.misses.length);
  };

  var renderGame = function renderGame() {
    setTimeout(function () {
      var gameStatus = activeGame.gameIsOver();
      var latestBlockSize = changeBlockSize(window.matchMedia);
      renderGrids(latestBlockSize, mouseBlockLocation);
      renderStats();
      if (!gameStatus.gameFinished) renderGame(latestBlockSize);else renderGame();
    }, renderSpeed);
  };

  var removeShipSection = function removeShipSection() {
    var elements = dom.getElements();
    elements.overlay.style.display = 'none';
    elements.sectionScreen.style.display = 'none';
    elements.shipGrid.innerHTML = '';
  };

  var startGame = function startGame() {
    removeShipSection();
    activeGame.setupGame();
    addGameEvents();
    renderGame();
  };

  var renderSelectionGrid = function renderSelectionGrid() {
    setTimeout(function () {
      var gameValue = activeGame.getGameValues();
      var checkBoardShips = gameValue.playerCheckBoard.getValues().currentShips;
      changeBlockSize(window.matchMedia);
      if (activeGame.checkSetup(gameValue.playerCheckBoard)) disableStarterUi();

      if (mouseBlockLocation) {
        var currentShip = activeGame.arrangeBlocks(mouseBlockLocation, axis);

        if (!currentShip && placedShip) {
          currentShip = moveShipByDirection(mouseBlockLocation, placedShip, axis);
        }

        if (currentShip) placedShip = currentShip; // console.log(placedShip, 'the current placed ship');

        if (placedShip) renderPlacedShip(blockSize);
      }

      if (!activeGame.checkSetup(checkBoardShips)) renderSelectionGrid();else startGame(blockSize);
    }, renderSpeed);
  };

  var getValues = function getValues() {
    return {
      blockSize: blockSize,
      placedShip: placedShip,
      axis: axis,
      mouseBlockLocation: mouseBlockLocation
    };
  };

  var activateUi = function activateUi() {
    var pageContent = dom.getPage();
    document.body.innerHTML = pageContent;
    activeGame = (0,_main_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    addUiEvents();
    removeEndingEvents();
    renderSelectionGrid();
  };

  return {
    activateUi: activateUi,
    createBlockElement: createBlockElement,
    getMousePosition: getMousePosition,
    moveShipByDirection: moveShipByDirection,
    changeBlockSize: changeBlockSize,
    changeAxis: changeAxis,
    getValues: getValues
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ui);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/azeret-mono-v11-latin-regular.eot */ "./src/fonts/azeret-mono-v11-latin-regular.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/azeret-mono-v11-latin-regular.woff2 */ "./src/fonts/azeret-mono-v11-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/azeret-mono-v11-latin-regular.woff */ "./src/fonts/azeret-mono-v11-latin-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/azeret-mono-v11-latin-regular.ttf */ "./src/fonts/azeret-mono-v11-latin-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/azeret-mono-v11-latin-regular.svg */ "./src/fonts/azeret-mono-v11-latin-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/azeret-mono-v11-latin-700.eot */ "./src/fonts/azeret-mono-v11-latin-700.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/azeret-mono-v11-latin-700.woff2 */ "./src/fonts/azeret-mono-v11-latin-700.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/azeret-mono-v11-latin-700.woff */ "./src/fonts/azeret-mono-v11-latin-700.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/azeret-mono-v11-latin-700.ttf */ "./src/fonts/azeret-mono-v11-latin-700.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/azeret-mono-v11-latin-700.svg */ "./src/fonts/azeret-mono-v11-latin-700.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v30-latin-300.eot */ "./src/fonts/roboto-v30-latin-300.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v30-latin-300.woff2 */ "./src/fonts/roboto-v30-latin-300.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v30-latin-300.woff */ "./src/fonts/roboto-v30-latin-300.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v30-latin-300.ttf */ "./src/fonts/roboto-v30-latin-300.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v30-latin-300.svg */ "./src/fonts/roboto-v30-latin-300.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v30-latin-regular.eot */ "./src/fonts/roboto-v30-latin-regular.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v30-latin-regular.woff2 */ "./src/fonts/roboto-v30-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v30-latin-regular.woff */ "./src/fonts/roboto-v30-latin-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v30-latin-regular.ttf */ "./src/fonts/roboto-v30-latin-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v30-latin-regular.svg */ "./src/fonts/roboto-v30-latin-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___, { hash: "#AzeretMono" });
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___, { hash: "#AzeretMono" });
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___, { hash: "#Roboto" });
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___, { hash: "#Roboto" });
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --darkBlack: rgb(2, 4, 8);\n  --darkGray: rgb(22, 27, 34);\n  --missBlue: rgb(76, 84, 191);\n}\n\n/*credit to https://google-webfonts-helper.herokuapp.com/ for allowing me to import these fonts automatically*/\n/* azeret-mono-regular - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")\n      format('woff2'),\n    /* Super Modern Browsers */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg'); /* Legacy iOS */\n}\n/* azeret-mono-700 - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 700;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ")\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ")\n      format('woff2'),\n    /* Super Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ")\n      format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format('svg'); /* Legacy iOS */\n}\n\n/* roboto-300 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format('woff2'),\n    /* Super Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ")\n      format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */ url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ")\n      format('svg'); /* Legacy iOS */\n}\n/* roboto-regular - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ")\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ") format('woff2'),\n    /* Super Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ")\n      format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ") format('svg'); /* Legacy iOS */\n}\n\nhtml {\n  min-height: 100%;\n}\n\nbody {\n  min-height: 100%;\n}\n\n.content {\n  min-height: 100%;\n  font-family: 'Roboto', sans-serif;\n}\n\n.shipGrid {\n  position: relative;\n}\n\n.block {\n  background: white;\n  width: 42px;\n  height: 42px;\n  border: none;\n  position: absolute;\n}\n\n.hitBlock {\n  background: pink;\n}\n\n.cursorBlock {\n  background: blue;\n}\n\n.missBlock {\n  background: var(--missBlue);\n}\n\n.sectionScreen {\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n\n  position: fixed;\n\n  display: flex;\n\n  justify-content: center;\n  align-items: center;\n}\n\n.gameFinishedSection {\n  width: 250px;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 150px;\n  font-size: medium;\n\n  background: var(--darkBlack);\n\n  color: white;\n}\n\n.restart {\n  width: 100px;\n  height: 30px;\n  background: var(--darkGray);\n  margin-top: 12px;\n\n  border: 1px solid white;\n  color: white;\n}\n\n.shipTitle {\n  font-family: 'Azeret Mono', monospace;\n}\n\n.shipText {\n  margin: 10px;\n}\n\n.shipSelection {\n  padding: 10px;\n  color: white;\n  background: var(--darkBlack);\n  display: flex;\n  width: 440px;\n  flex-direction: column;\n  align-items: center;\n}\n\n.rotateImage {\n  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(87deg)\n    brightness(100%);\n}\n\n.rotateButton:hover,\n.restart:hover {\n  background: var(--darkBlack);\n  cursor: pointer;\n}\n\n.rotateButton {\n  background: var(--darkGray);\n  border: 1px solid white;\n  margin: 10px;\n  height: 50px;\n  width: 50px;\n  line-height: 50px;\n  text-align: center;\n}\n\n.shipGrid {\n  width: 420px;\n  height: 420px;\n  background: var(--darkGray);\n  border: 1px solid;\n  padding: 0;\n  margin: 0;\n}\n\n.boardTitle {\n  margin: 10px;\n}\n\n.overlay {\n  background: rgba(39, 39, 39, 0.574);\n  z-index: 2;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.content {\n  background: rgb(2, 4, 8);\n}\n\n.mainSection {\n  min-height: 90vh;\n  color: white;\n  position: relative;\n}\n\n.mainTitle {\n  text-align: center;\n  height: 10vh;\n  line-height: 10vh;\n  background: var(--darkGray);\n}\n\n.centerSection {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  justify-content: center;\n\n  align-items: center;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px;\n}\n\n.grid {\n  width: 420px;\n  height: 420px;\n  position: relative;\n  background: var(--darkGray);\n  border: 1px solid white;\n}\n.shipOverlay {\n  width: 420px;\n  height: 420px;\n  border: 1px solid blue;\n\n  position: fixed;\n}\n\n.gridLayer {\n  width: 420px;\n  height: 420px;\n  position: relative;\n}\n\n.gridOverlay {\n  width: 420px;\n  height: 420px;\n  border: 1px solid blue;\n}\n\n.shipOverlay {\n  position: fixed;\n  z-index: 3;\n}\n\n.gridOverlay {\n  position: absolute;\n\n  z-index: 1;\n}\n\n.stats {\n  display: flex;\n  width: 420px;\n  justify-content: space-around;\n  margin: 20px;\n}\n\n.footer {\n  background: var(--darkGray);\n  height: 10vh;\n  color: white;\n  word-wrap: break-word;\n  font-size: small;\n  line-height: 10vh;\n  text-align: center;\n}\n\n.mainTitle h1 {\n  font-family: 'Azeret Mono', monospace;\n}\n\n@media only screen and (max-width: 600px) {\n  .footer {\n    font-size: small;\n  }\n}\n\n@media only screen and (max-width: 960px) {\n  .grid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipGrid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipSelection {\n    width: 310px;\n  }\n\n  .footer {\n    font-size: x-small;\n  }\n\n  .block {\n    width: 30px;\n    height: 30px;\n  }\n\n  .stats {\n    width: 300px;\n  }\n}\n\n@media only screen and (max-width: 470px) {\n  .grid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipGrid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipSelection {\n    width: 220px;\n  }\n\n  .shipText {\n    font-size: medium;\n  }\n\n  .boardTitle {\n    font-size: medium;\n  }\n\n  .block {\n    width: 21px;\n    height: 21px;\n  }\n  .footer {\n    font-size: x-small;\n  }\n\n  .stats {\n    width: 210px;\n  }\n}\n\n@media only screen and (max-width: 365px) {\n  .footer {\n    font-size: xx-small;\n  }\n  .footer {\n    font-size: 8px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .grid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .footer {\n    font-size: 6px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipGrid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipSelection {\n    width: 160px;\n  }\n\n  .block {\n    width: 15px;\n    height: 15px;\n  }\n\n  .shipText {\n    font-size: small;\n  }\n\n  .shipTitle {\n    font-size: medium;\n  }\n\n  .stats {\n    width: 150px;\n    font-size: 12px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --darkBlack: rgb(2, 4, 8);\n  --darkGray: rgb(22, 27, 34);\n  --missBlue: rgb(76, 84, 191);\n}\n\n/*credit to https://google-webfonts-helper.herokuapp.com/ for allowing me to import these fonts automatically*/\n/* azeret-mono-regular - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url('../fonts/azeret-mono-v11-latin-regular.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/azeret-mono-v11-latin-regular.eot?#iefix')\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/azeret-mono-v11-latin-regular.woff2')\n      format('woff2'),\n    /* Super Modern Browsers */\n      url('../fonts/azeret-mono-v11-latin-regular.woff') format('woff'),\n    /* Modern Browsers */ url('../fonts/azeret-mono-v11-latin-regular.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url('../fonts/azeret-mono-v11-latin-regular.svg#AzeretMono') format('svg'); /* Legacy iOS */\n}\n/* azeret-mono-700 - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 700;\n  src: url('../fonts/azeret-mono-v11-latin-700.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/azeret-mono-v11-latin-700.eot?#iefix')\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/azeret-mono-v11-latin-700.woff2')\n      format('woff2'),\n    /* Super Modern Browsers */ url('../fonts/azeret-mono-v11-latin-700.woff')\n      format('woff'),\n    /* Modern Browsers */ url('../fonts/azeret-mono-v11-latin-700.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url('../fonts/azeret-mono-v11-latin-700.svg#AzeretMono') format('svg'); /* Legacy iOS */\n}\n\n/* roboto-300 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url('../fonts/roboto-v30-latin-300.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/roboto-v30-latin-300.eot?#iefix') format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/roboto-v30-latin-300.woff2') format('woff2'),\n    /* Super Modern Browsers */ url('../fonts/roboto-v30-latin-300.woff')\n      format('woff'),\n    /* Modern Browsers */ url('../fonts/roboto-v30-latin-300.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */ url('../fonts/roboto-v30-latin-300.svg#Roboto')\n      format('svg'); /* Legacy iOS */\n}\n/* roboto-regular - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url('../fonts/roboto-v30-latin-regular.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/roboto-v30-latin-regular.eot?#iefix')\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/roboto-v30-latin-regular.woff2') format('woff2'),\n    /* Super Modern Browsers */ url('../fonts/roboto-v30-latin-regular.woff')\n      format('woff'),\n    /* Modern Browsers */ url('../fonts/roboto-v30-latin-regular.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url('../fonts/roboto-v30-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */\n}\n\nhtml {\n  min-height: 100%;\n}\n\nbody {\n  min-height: 100%;\n}\n\n.content {\n  min-height: 100%;\n  font-family: 'Roboto', sans-serif;\n}\n\n.shipGrid {\n  position: relative;\n}\n\n.block {\n  background: white;\n  width: 42px;\n  height: 42px;\n  border: none;\n  position: absolute;\n}\n\n.hitBlock {\n  background: pink;\n}\n\n.cursorBlock {\n  background: blue;\n}\n\n.missBlock {\n  background: var(--missBlue);\n}\n\n.sectionScreen {\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n\n  position: fixed;\n\n  display: flex;\n\n  justify-content: center;\n  align-items: center;\n}\n\n.gameFinishedSection {\n  width: 250px;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 150px;\n  font-size: medium;\n\n  background: var(--darkBlack);\n\n  color: white;\n}\n\n.restart {\n  width: 100px;\n  height: 30px;\n  background: var(--darkGray);\n  margin-top: 12px;\n\n  border: 1px solid white;\n  color: white;\n}\n\n.shipTitle {\n  font-family: 'Azeret Mono', monospace;\n}\n\n.shipText {\n  margin: 10px;\n}\n\n.shipSelection {\n  padding: 10px;\n  color: white;\n  background: var(--darkBlack);\n  display: flex;\n  width: 440px;\n  flex-direction: column;\n  align-items: center;\n}\n\n.rotateImage {\n  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(87deg)\n    brightness(100%);\n}\n\n.rotateButton:hover,\n.restart:hover {\n  background: var(--darkBlack);\n  cursor: pointer;\n}\n\n.rotateButton {\n  background: var(--darkGray);\n  border: 1px solid white;\n  margin: 10px;\n  height: 50px;\n  width: 50px;\n  line-height: 50px;\n  text-align: center;\n}\n\n.shipGrid {\n  width: 420px;\n  height: 420px;\n  background: var(--darkGray);\n  border: 1px solid;\n  padding: 0;\n  margin: 0;\n}\n\n.boardTitle {\n  margin: 10px;\n}\n\n.overlay {\n  background: rgba(39, 39, 39, 0.574);\n  z-index: 2;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.content {\n  background: rgb(2, 4, 8);\n}\n\n.mainSection {\n  min-height: 90vh;\n  color: white;\n  position: relative;\n}\n\n.mainTitle {\n  text-align: center;\n  height: 10vh;\n  line-height: 10vh;\n  background: var(--darkGray);\n}\n\n.centerSection {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  justify-content: center;\n\n  align-items: center;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px;\n}\n\n.grid {\n  width: 420px;\n  height: 420px;\n  position: relative;\n  background: var(--darkGray);\n  border: 1px solid white;\n}\n.shipOverlay {\n  width: 420px;\n  height: 420px;\n  border: 1px solid blue;\n\n  position: fixed;\n}\n\n.gridLayer {\n  width: 420px;\n  height: 420px;\n  position: relative;\n}\n\n.gridOverlay {\n  width: 420px;\n  height: 420px;\n  border: 1px solid blue;\n}\n\n.shipOverlay {\n  position: fixed;\n  z-index: 3;\n}\n\n.gridOverlay {\n  position: absolute;\n\n  z-index: 1;\n}\n\n.stats {\n  display: flex;\n  width: 420px;\n  justify-content: space-around;\n  margin: 20px;\n}\n\n.footer {\n  background: var(--darkGray);\n  height: 10vh;\n  color: white;\n  word-wrap: break-word;\n  font-size: small;\n  line-height: 10vh;\n  text-align: center;\n}\n\n.mainTitle h1 {\n  font-family: 'Azeret Mono', monospace;\n}\n\n@media only screen and (max-width: 600px) {\n  .footer {\n    font-size: small;\n  }\n}\n\n@media only screen and (max-width: 960px) {\n  .grid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipGrid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipSelection {\n    width: 310px;\n  }\n\n  .footer {\n    font-size: x-small;\n  }\n\n  .block {\n    width: 30px;\n    height: 30px;\n  }\n\n  .stats {\n    width: 300px;\n  }\n}\n\n@media only screen and (max-width: 470px) {\n  .grid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipGrid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipSelection {\n    width: 220px;\n  }\n\n  .shipText {\n    font-size: medium;\n  }\n\n  .boardTitle {\n    font-size: medium;\n  }\n\n  .block {\n    width: 21px;\n    height: 21px;\n  }\n  .footer {\n    font-size: x-small;\n  }\n\n  .stats {\n    width: 210px;\n  }\n}\n\n@media only screen and (max-width: 365px) {\n  .footer {\n    font-size: xx-small;\n  }\n  .footer {\n    font-size: 8px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .grid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .footer {\n    font-size: 6px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipGrid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipSelection {\n    width: 160px;\n  }\n\n  .block {\n    width: 15px;\n    height: 15px;\n  }\n\n  .shipText {\n    font-size: small;\n  }\n\n  .shipTitle {\n    font-size: medium;\n  }\n\n  .stats {\n    width: 150px;\n    font-size: 12px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/azeret-mono-v11-latin-700.eot":
/*!*************************************************!*\
  !*** ./src/fonts/azeret-mono-v11-latin-700.eot ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c91a0c641b82c3a0a71a.eot";

/***/ }),

/***/ "./src/fonts/azeret-mono-v11-latin-700.svg":
/*!*************************************************!*\
  !*** ./src/fonts/azeret-mono-v11-latin-700.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2051817878041e61b07d.svg";

/***/ }),

/***/ "./src/fonts/azeret-mono-v11-latin-700.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/azeret-mono-v11-latin-700.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fc4a41cac7f074212d1.ttf";

/***/ }),

/***/ "./src/fonts/azeret-mono-v11-latin-700.woff":
/*!**************************************************!*\
  !*** ./src/fonts/azeret-mono-v11-latin-700.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7925b75636dd3b7483d4.woff";

/***/ }),

/***/ "./src/fonts/azeret-mono-v11-latin-700.woff2":
/*!***************************************************!*\
  !*** ./src/fonts/azeret-mono-v11-latin-700.woff2 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31ba6ce1cb92e6dd35ad.woff2";

/***/ }),

/***/ "./src/fonts/azeret-mono-v11-latin-regular.eot":
/*!*****************************************************!*\
  !*** ./src/fonts/azeret-mono-v11-latin-regular.eot ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e4cc7c589820783dbd4.eot";

/***/ }),

/***/ "./src/fonts/azeret-mono-v11-latin-regular.svg":
/*!*****************************************************!*\
  !*** ./src/fonts/azeret-mono-v11-latin-regular.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbd7f6f9335fe58bacbe.svg";

/***/ }),

/***/ "./src/fonts/azeret-mono-v11-latin-regular.ttf":
/*!*****************************************************!*\
  !*** ./src/fonts/azeret-mono-v11-latin-regular.ttf ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "631ef83a819cf9823d58.ttf";

/***/ }),

/***/ "./src/fonts/azeret-mono-v11-latin-regular.woff":
/*!******************************************************!*\
  !*** ./src/fonts/azeret-mono-v11-latin-regular.woff ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1321246eff360836f88.woff";

/***/ }),

/***/ "./src/fonts/azeret-mono-v11-latin-regular.woff2":
/*!*******************************************************!*\
  !*** ./src/fonts/azeret-mono-v11-latin-regular.woff2 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1f46e8be2215a5290d2.woff2";

/***/ }),

/***/ "./src/fonts/roboto-v30-latin-300.eot":
/*!********************************************!*\
  !*** ./src/fonts/roboto-v30-latin-300.eot ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76fc10943a0d75471e44.eot";

/***/ }),

/***/ "./src/fonts/roboto-v30-latin-300.svg":
/*!********************************************!*\
  !*** ./src/fonts/roboto-v30-latin-300.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "991f795de66ec216a1f8.svg";

/***/ }),

/***/ "./src/fonts/roboto-v30-latin-300.ttf":
/*!********************************************!*\
  !*** ./src/fonts/roboto-v30-latin-300.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "beded7bd0c00bf9099af.ttf";

/***/ }),

/***/ "./src/fonts/roboto-v30-latin-300.woff":
/*!*********************************************!*\
  !*** ./src/fonts/roboto-v30-latin-300.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2f7ab22cb9cbd074c3a.woff";

/***/ }),

/***/ "./src/fonts/roboto-v30-latin-300.woff2":
/*!**********************************************!*\
  !*** ./src/fonts/roboto-v30-latin-300.woff2 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c48fb6765a9fcb00b330.woff2";

/***/ }),

/***/ "./src/fonts/roboto-v30-latin-regular.eot":
/*!************************************************!*\
  !*** ./src/fonts/roboto-v30-latin-regular.eot ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2f36b803fec4bdcd1bc.eot";

/***/ }),

/***/ "./src/fonts/roboto-v30-latin-regular.svg":
/*!************************************************!*\
  !*** ./src/fonts/roboto-v30-latin-regular.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f862c8ba4ed785461ee.svg";

/***/ }),

/***/ "./src/fonts/roboto-v30-latin-regular.ttf":
/*!************************************************!*\
  !*** ./src/fonts/roboto-v30-latin-regular.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b1ef4e4ab8eafee13c1.ttf";

/***/ }),

/***/ "./src/fonts/roboto-v30-latin-regular.woff":
/*!*************************************************!*\
  !*** ./src/fonts/roboto-v30-latin-regular.woff ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1e2a76794cb86b2aa8e.woff";

/***/ }),

/***/ "./src/fonts/roboto-v30-latin-regular.woff2":
/*!**************************************************!*\
  !*** ./src/fonts/roboto-v30-latin-regular.woff2 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b009a76ad6afe4ebd301.woff2";

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sT0FBTyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sT0FBTyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFL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QUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3Bvc2l0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wcmFjdGljYWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3VpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLmNzcyc7XG5cbmltcG9ydCBVaSBmcm9tICcuL3NjcmlwdHMvdWkuanMnO1xuXG5jb25zdCBjdXJyZW50VWkgPSBVaSgpO1xuXG5jdXJyZW50VWkuYWN0aXZhdGVVaSgpO1xuIiwiaW1wb3J0IHJlZnJlc2hpbmdMb2dvIGZyb20gJy4uL2ltYWdlcy9yZWZyZXNoTG9nby5zdmcnO1xuXG5jb25zdCBEb20gPSAoKSA9PiB7XG4gIGNvbnN0IGdldEVsZW1lbnRzID0gKCkgPT4gKHtcbiAgICBvdmVybGF5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpLFxuICAgIHNlY3Rpb25TY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uU2NyZWVuJyksXG4gICAgc2hpcFRleHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwVGV4dCcpLFxuICAgIHNoaXBHcmlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcEdyaWQnKSxcbiAgICBzaGlwTGF5ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwTGF5ZXInKSxcbiAgICByb3RhdGVCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGVCdXR0b24nKSxcbiAgICBncmlkczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZCcpKSxcbiAgICBoaXRzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaXRzJykpLFxuICAgIG1pc3NlczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWlzc2VzJykpLFxuICAgIHBsYXllckdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJHcmlkJyksXG4gICAgcGxheWVySGl0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckhpdHMnKSxcbiAgICBwbGF5ZXJNaXNzZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJNaXNzZXMnKSxcbiAgICBjb21wdXRlckdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlckdyaWQnKSxcbiAgICBjb21wdXRlckhpdHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlckhpdHMnKSxcbiAgICBjb21wdXRlck1pc3NlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyTWlzc2VzJyksXG4gICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKSxcbiAgICBjb21wdXRlckdyaWRMYXllcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyR3JpZExheWVyJyksXG4gICAgcmVzdGFydDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQnKSxcbiAgICBnYW1lT3ZlclRleHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lT3ZlclRleHQnKSxcbiAgICBnYW1lRmluaXNoZWRTZWN0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZUZpbmlzaGVkU2VjdGlvbicpLFxuICB9KTtcblxuICBjb25zdCBnZXRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBTZWxlY3Rpb25cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWVGaW5pc2hlZFNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImdhbWVPdmVyVGV4dFwiPllvdSBXaW4g8J+YgzwvaDE+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlc3RhcnRcIj5SZXN0YXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwic2hpcFRpdGxlXCI+QkFUVExFU0hJUDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInNoaXBUZXh0XCI+UGxhY2UgeW91ciBCYXR0bGVzaGlwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBMYXllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwT3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwR3JpZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3RhdGVCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdGF0ZUltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7cmVmcmVzaGluZ0xvZ299XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlJvdGF0ZSBJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzPVwibWFpblNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluVGl0bGVcIj48aDE+QkFUVExFU0hJUDwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyQm9hcmQgYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJib2FyZFRpdGxlXCI+UGxheWVyIEJvYXJkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZExheWVyIHBsYXllckdyaWRMYXllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRPdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyR3JpZCBncmlkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllclN0YXRzIHN0YXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwbGF5ZXJIaXRzIGhpdHNcIj5IaXRzIDA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicGxheWVyTWlzc2VzIG1pc3Nlc1wiPk1pc3NlcyAwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXB1dGVyQm9hcmQgYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJib2FyZFRpdGxlXCI+Q29tcHV0ZXIgQm9hcmQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkTGF5ZXIgY29tcHV0ZXJHcmlkTGF5ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkT3ZlcmxheSBjb21wdXRlckdyaWRPdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcHV0ZXJHcmlkIGdyaWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcHV0ZXJTdGF0cyBzdGF0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY29tcHV0ZXJIaXRzIGhpdHNcIj5IaXRzIDA8L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjb21wdXRlck1pc3NlcyBtaXNzZXNcIj5NaXNzZXMgMDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvcHlyaWdodE1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Vic2l0ZSBhbmQgY29kZSBhcmUgbWFkZSBieSBCcmF5ZGVuIEdyb3RlZ3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgIHJldHVybiBjb250ZW50O1xuICB9O1xuXG4gIHJldHVybiB7IGdldFBhZ2UsIGdldEVsZW1lbnRzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb207XG4iLCJpbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IFByYWN0aWNhbCBmcm9tICcuL3ByYWN0aWNhbC5qcyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuICBjb25zdCBzaGlwID0gU2hpcCgpO1xuICBjb25zdCBwcmFjdGljYWwgPSBQcmFjdGljYWwoKTtcblxuICBsZXQgY3VycmVudFNoaXBzID0gW107XG4gIGxldCBoaXRzID0gW107XG4gIGxldCBtaXNzZXMgPSBbXTtcblxuICBjb25zdCByYW5kb21pemUgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgY29uc3QgcmFuZG9tQXhpcyA9ICgpID0+IHtcbiAgICBjb25zdCBheGllcyA9IFsneCcsICd5J107XG4gICAgcmV0dXJuIGF4aWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF4aWVzLmxlbmd0aCldO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlQWxsU2hpcHMgPSAoc2hpcHNBcnJheSkgPT4ge1xuICAgIGN1cnJlbnRTaGlwcyA9IHNoaXBzQXJyYXk7XG4gICAgcmV0dXJuIGN1cnJlbnRTaGlwcztcbiAgfTtcblxuICBjb25zdCBjb21wYXJlU2hpcHNBcnJheSA9IChsYXRlc3RTaGlwc0FycmF5LCBzaGlwcykgPT4ge1xuICAgIGxldCBzaGlwc0RvQ29sbGlkZSA9IGZhbHNlO1xuICAgIGlmICghc2hpcHMpIHJldHVybiBzaGlwc0RvQ29sbGlkZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGxhdGVzdFNoaXBzQXJyYXksICd0aGUgY3VycmVlbnQgc2hpcHMgYXJyYXknKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwcywgJ3RoZSBjdXJyZW50IHNoaXBzJyk7XG5cbiAgICBsYXRlc3RTaGlwc0FycmF5LmZvckVhY2goKGxhdGVzdFNoaXBzKSA9PiB7XG4gICAgICBsYXRlc3RTaGlwcy5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKGxhdGVzdEJvYXQpID0+IHtcbiAgICAgICAgICBpZiAocG9zaXRpb24uY29tcGFyZVBvc2l0aW9uKGJvYXQsIGxhdGVzdEJvYXQpKSB7XG4gICAgICAgICAgICBzaGlwc0RvQ29sbGlkZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBzRG9Db2xsaWRlO1xuICB9O1xuXG4gIGNvbnN0IGdldFR5cGVPZlBsYWNlZFNoaXAgPSAoc2hpcEFycmF5KSA9PiB7XG4gICAgaWYgKHNoaXBBcnJheS5sZW5ndGggPT09IDUpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHNoaXBUeXBlcyA9IFtcbiAgICAgIHsgc2hpcFR5cGU6ICdjYXJyaWVyJywgc2hpcExlbmd0aDogNSB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2JhdHRsZXNoaXAnLCBzaGlwTGVuZ3RoOiA0IH0sXG4gICAgICB7IHNoaXBUeXBlOiAnZGVzdG95ZXInLCBzaGlwTGVuZ3RoOiAzIH0sXG4gICAgICB7IHNoaXBUeXBlOiAnc3VibWFyaW5lJywgc2hpcExlbmd0aDogMyB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2d1bmJvYXQnLCBzaGlwTGVuZ3RoOiAyIH0sXG4gICAgXTtcblxuICAgIHJldHVybiBzaGlwVHlwZXNbc2hpcEFycmF5Lmxlbmd0aF07XG4gIH07XG5cbiAgY29uc3QgcGxheWVyUGxhY2VTaGlwID0gKGxvY2F0aW9uLCBheGlzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEFycmF5ID0gcHJhY3RpY2FsLmNvcHlBcnJheShjdXJyZW50U2hpcHMpO1xuXG4gICAgY29uc3Qgc2hpcFR5cGUgPSBnZXRUeXBlT2ZQbGFjZWRTaGlwKGN1cnJlbnRBcnJheSk7XG5cbiAgICBjb25zdCBsYXRlc3RTaGlwID0gc2hpcC5jcmVhdGVTaGlwKGxvY2F0aW9uLCBzaGlwVHlwZS5zaGlwTGVuZ3RoLCBheGlzKTtcblxuICAgIGNvbnN0IGlzQ29sbGlkZWQgPSBjb21wYXJlU2hpcHNBcnJheShjdXJyZW50QXJyYXksIGxhdGVzdFNoaXApO1xuXG4gICAgaWYgKHNoaXBUeXBlICYmIGxhdGVzdFNoaXAgJiYgIWlzQ29sbGlkZWQpIHtcbiAgICAgIGN1cnJlbnRBcnJheS5wdXNoKGxhdGVzdFNoaXApO1xuICAgIH1cblxuICAgIGN1cnJlbnRTaGlwcyA9IGN1cnJlbnRBcnJheTtcbiAgICByZXR1cm4gY3VycmVudEFycmF5O1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUmFuZG9tU2hpcHMgPSAoc2hpcHNBcnJheSwgcmFuZG9taXplciwgcmFuZG9tQXhpZXMpID0+IHtcbiAgICBjb25zdCBsYXRlc3RTaGlwc0FycmF5ID0gc2hpcHNBcnJheTtcbiAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHJhbmRvbWl6ZXIoKSwgcmFuZG9taXplcigpKTtcbiAgICBjb25zdCBzaGlwVHlwZSA9IGdldFR5cGVPZlBsYWNlZFNoaXAobGF0ZXN0U2hpcHNBcnJheSk7XG4gICAgaWYgKCFzaGlwVHlwZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coc2hpcFR5cGUpO1xuICAgICAgLy8gY29uc29sZS5sb2cobGF0ZXN0U2hpcHNBcnJheSwgJ3RoZSBsYXRlc3Qgc2hpcHMgYXJyYXknKTtcblxuICAgICAgcmV0dXJuIGxhdGVzdFNoaXBzQXJyYXk7XG4gICAgfVxuXG4gICAgY29uc3QgbGF0ZXN0TGVuZ3RoID0gc2hpcFR5cGUuc2hpcExlbmd0aDtcblxuICAgIGNvbnN0IHJhbmRvbVNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAoXG4gICAgICByYW5kb21Qb3NpdGlvbixcbiAgICAgIGxhdGVzdExlbmd0aCxcbiAgICAgIHJhbmRvbUF4aWVzKClcbiAgICApO1xuXG4gICAgY29uc3Qgc2hpcENvbGxpZGVzID0gY29tcGFyZVNoaXBzQXJyYXkobGF0ZXN0U2hpcHNBcnJheSwgcmFuZG9tU2hpcCk7XG4gICAgaWYgKHJhbmRvbVNoaXAgJiYgIXNoaXBDb2xsaWRlcykgbGF0ZXN0U2hpcHNBcnJheS5wdXNoKHJhbmRvbVNoaXApO1xuXG4gICAgcmV0dXJuIHBsYWNlUmFuZG9tU2hpcHMobGF0ZXN0U2hpcHNBcnJheSwgcmFuZG9taXplciwgcmFuZG9tQXhpZXMpO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcHNSYW5kb21seSA9IChyYW5kb21pemVyLCByYW5kb21BeGllcykgPT4ge1xuICAgIGNvbnN0IHNoaXBzQXJyYXkgPSBwbGFjZVJhbmRvbVNoaXBzKFtdLCByYW5kb21pemVyLCByYW5kb21BeGllcyk7XG4gICAgY3VycmVudFNoaXBzID0gc2hpcHNBcnJheTtcblxuICAgIHJldHVybiBzaGlwc0FycmF5O1xuICB9O1xuICBjb25zdCBmaWx0ZXJBdHRhY2sgPSAoYXJyYXksIGN1cnJlbnRBdHRhY2spID0+IHtcbiAgICBjb25zdCBjdXJyZW50QXR0YWNrQXJyYXkgPSBhcnJheS5maWx0ZXIoXG4gICAgICAoaXRlbSkgPT5cbiAgICAgICAgaXRlbS54Q29vcmQgPT09IGN1cnJlbnRBdHRhY2sueENvb3JkICYmXG4gICAgICAgIGl0ZW0ueUNvb3JkID09PSBjdXJyZW50QXR0YWNrLnlDb29yZFxuICAgICk7XG5cbiAgICByZXR1cm4gY3VycmVudEF0dGFja0FycmF5O1xuICB9O1xuXG4gIGNvbnN0IGhhc0hpdFNoaXAgPSAoaGl0UG9zaXRpb24sIGxhdGVzdEhpdHMsIGxhdGVzdE1pc3NlcykgPT4ge1xuICAgIGNvbnN0IGhhc0JlZW5IaXQgPSBmaWx0ZXJBdHRhY2sobGF0ZXN0SGl0cywgaGl0UG9zaXRpb24pO1xuICAgIGNvbnN0IGhhc0JlZW5NaXNzID0gZmlsdGVyQXR0YWNrKGxhdGVzdE1pc3NlcywgaGl0UG9zaXRpb24pO1xuXG4gICAgaWYgKGhhc0JlZW5IaXQubGVuZ3RoID4gMCB8fCBoYXNCZWVuTWlzcy5sZW5ndGggPiAwKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrU2hpcCA9IChsYXRlc3RQb3NpdGlvbiwgc2hpcHMsIGN1cnJlbnRIaXRzLCBjdXJyZW50TWlzc2VzKSA9PiB7XG4gICAgbGV0IGlzSGl0ID0gZmFsc2U7XG4gICAgY29uc3QgbGF0ZXN0U2hpcHNBcnJheSA9IFtdO1xuICAgIGNvbnN0IGxhdGVzdEhpdHMgPSBjdXJyZW50SGl0cztcbiAgICBjb25zdCBsYXRlc3RNaXNzZXMgPSBjdXJyZW50TWlzc2VzO1xuXG4gICAgaWYgKCFsYXRlc3RQb3NpdGlvbikgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChoYXNIaXRTaGlwKGxhdGVzdFBvc2l0aW9uLCBjdXJyZW50SGl0cywgY3VycmVudE1pc3NlcykpIHJldHVybiBmYWxzZTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXBBcnJheSkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uc0FycmF5ID0gcHJhY3RpY2FsLmNvcHlBcnJheShzaGlwQXJyYXkpO1xuICAgICAgY29uc3QgaGl0ID0gc2hpcC5oaXQocG9zaXRpb25zQXJyYXksIGxhdGVzdFBvc2l0aW9uKTtcblxuICAgICAgaWYgKGhpdC5oaXRBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaXNIaXQgPSB0cnVlO1xuICAgICAgICBwb3NpdGlvbnNBcnJheSA9IGhpdC5zaGlwQXJyYXlzO1xuICAgICAgICBsYXRlc3RIaXRzLnB1c2goaGl0LmhpdEFycmF5WzBdKTtcbiAgICAgIH1cbiAgICAgIGxhdGVzdFNoaXBzQXJyYXkucHVzaChwb3NpdGlvbnNBcnJheSk7XG4gICAgfSk7XG4gICAgaWYgKCFpc0hpdCkgbGF0ZXN0TWlzc2VzLnB1c2gobGF0ZXN0UG9zaXRpb24pO1xuXG4gICAgY29uc3QgZmluYWxPYmplY3QgPSB7XG4gICAgICBpc0hpdCxcbiAgICAgIGxhdGVzdFNoaXBzQXJyYXksXG4gICAgICBsYXRlc3RIaXRzLFxuICAgICAgbGF0ZXN0TWlzc2VzLFxuICAgIH07XG5cbiAgICByZXR1cm4gZmluYWxPYmplY3Q7XG4gIH07XG5cbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChsYXRlc3RQb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF0dGFja1NoaXAobGF0ZXN0UG9zaXRpb24sIGN1cnJlbnRTaGlwcywgaGl0cywgbWlzc2VzKTtcbiAgICBpZiAoIXJlc3VsdCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY3VycmVudFNoaXBzID0gcmVzdWx0LmxhdGVzdFNoaXBzQXJyYXk7XG4gICAgaGl0cyA9IHJlc3VsdC5sYXRlc3RIaXRzO1xuICAgIG1pc3NlcyA9IHJlc3VsdC5sYXRlc3RNaXNzZXM7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVJhbmRvbUNvb3JkcyA9IChyYW5kb21pemVyKSA9PiB7XG4gICAgbGV0IHJhbmRvbVBvc2l0aW9uO1xuXG4gICAgaWYgKHJhbmRvbWl6ZXIuaXNNb2NrUmFuZG9tKSB7XG4gICAgICByYW5kb21Qb3NpdGlvbiA9IHJhbmRvbWl6ZXIuY2FsbFJhbmRvbWl6ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmFuZG9tWCA9IHJhbmRvbWl6ZXIoKTtcbiAgICAgIGNvbnN0IHJhbmRvbVkgPSByYW5kb21pemVyKCk7XG4gICAgICByYW5kb21Qb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHJhbmRvbVgsIHJhbmRvbVkpO1xuICAgIH1cblxuICAgIHJldHVybiByYW5kb21Qb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlUmFuZG9tQXR0YWNrID0gKHJhbmRvbWl6ZXIpID0+IHtcbiAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IGNyZWF0ZVJhbmRvbUNvb3JkcyhyYW5kb21pemVyKTtcbiAgICBjb25zdCBoYXNIaXQgPSBoYXNIaXRTaGlwKHJhbmRvbVBvc2l0aW9uLCBoaXRzLCBtaXNzZXMpO1xuXG4gICAgaWYgKGhhc0hpdCkgcmV0dXJuIHJlY2lldmVSYW5kb21BdHRhY2socmFuZG9taXplcik7XG5cbiAgICByZXR1cm4gcmVjaWV2ZUF0dGFjayhyYW5kb21Qb3NpdGlvbik7XG4gIH07XG5cbiAgY29uc3QgaXNBbGxTdW5rID0gKCkgPT4ge1xuICAgIGxldCBoYXNTdW5rZWQgPSB0cnVlO1xuICAgIGN1cnJlbnRTaGlwcy5mb3JFYWNoKChzaGlwcykgPT4ge1xuICAgICAgaWYgKCFzaGlwLmlzU3VuayhzaGlwcykpIHtcbiAgICAgICAgaGFzU3Vua2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaGFzU3Vua2VkO1xuICB9O1xuXG4gIGNvbnN0IGdldFZhbHVlcyA9ICgpID0+ICh7XG4gICAgY3VycmVudFNoaXBzLFxuICAgIGhpdHMsXG4gICAgbWlzc2VzLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGF0dGFja1NoaXAsXG4gICAgcmVjaWV2ZUF0dGFjayxcbiAgICBpc0FsbFN1bmssXG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5LFxuICAgIHBsYXllclBsYWNlU2hpcCxcbiAgICBwbGFjZUFsbFNoaXBzLFxuICAgIHJhbmRvbWl6ZSxcbiAgICByZWNpZXZlUmFuZG9tQXR0YWNrLFxuICAgIHJhbmRvbUF4aXMsXG4gICAgZ2V0VmFsdWVzLFxuICAgIGdldFR5cGVPZlBsYWNlZFNoaXAsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5cbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcblxuY29uc3QgR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBwbGF5ZXJDaGVja0JvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuXG4gIGNvbnN0IHNoaXAgPSBTaGlwKCk7XG5cbiAgY29uc3QgcmFuZG9taXplciA9IGNvbXB1dGVyQm9hcmQucmFuZG9taXplO1xuICBjb25zdCByYW5kb21BeGllcyA9IGNvbXB1dGVyQm9hcmQucmFuZG9tQXhpcztcblxuICBjb25zdCBjaGVja1NldHVwID0gKHBsYXllckNoZWNrU2hpcHMpID0+IHtcbiAgICBpZiAocGxheWVyQ2hlY2tTaGlwcy5sZW5ndGggPT09IDUpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBzZXR1cEdhbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQ2hlY2tWYWx1ZXMgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgaWYgKCFjaGVja1NldHVwKHBsYXllckNoZWNrVmFsdWVzLmN1cnJlbnRTaGlwcykpIHJldHVybiBmYWxzZTtcblxuICAgIHBsYXllckJvYXJkLnBsYWNlQWxsU2hpcHMocGxheWVyQ2hlY2tWYWx1ZXMuY3VycmVudFNoaXBzKTtcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcHNSYW5kb21seShyYW5kb21pemVyLCByYW5kb21BeGllcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrQm9hdHMgPSAoY29vcmRzKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQ2hlY2tWYWx1ZXMgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgaWYgKCFjaGVja1NldHVwKHBsYXllckNoZWNrVmFsdWVzLmN1cnJlbnRTaGlwcykpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IGN1cnJlbnRBdHRhY2sgPSBjb21wdXRlckJvYXJkLnJlY2lldmVBdHRhY2soY29vcmRzKTtcbiAgICBpZiAoIWN1cnJlbnRBdHRhY2spIHJldHVybiBmYWxzZTtcbiAgICBwbGF5ZXJCb2FyZC5yZWNpZXZlUmFuZG9tQXR0YWNrKHJhbmRvbWl6ZXIpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBTaGlwID0gKGxvY2F0aW9uLCBheGlzKSA9PlxuICAgIHBsYXllckNoZWNrQm9hcmQucGxheWVyUGxhY2VTaGlwKGxvY2F0aW9uLCBheGlzKTtcblxuICBjb25zdCBnYW1lSXNPdmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllckNoZWNrU2hpcHMgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpLmN1cnJlbnRTaGlwcztcbiAgICBpZiAoIWNoZWNrU2V0dXAocGxheWVyQ2hlY2tTaGlwcykpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChjb21wdXRlckJvYXJkLmlzQWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4geyBtZXNzYWdlOiAnWW91IFdvbicsIGdhbWVGaW5pc2hlZDogdHJ1ZSB9O1xuICAgIH1cblxuICAgIGlmIChwbGF5ZXJCb2FyZC5pc0FsbFN1bmsoKSkge1xuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ1lvdSBMb3N0JywgZ2FtZUZpbmlzaGVkOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiB7IGdhbWVGaW5pc2hlZDogZmFsc2UgfTtcbiAgfTtcblxuICBjb25zdCBhcnJhbmdlQmxvY2tzID0gKG1vdXNlUG9zaXRpb24sIGN1cnJlbnRSb3RhdGlvbikgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm9hcmRPYmplY3RzID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIGNvbnN0IHNoaXBUeXBlT2JqZWN0ID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRUeXBlT2ZQbGFjZWRTaGlwKFxuICAgICAgY2hlY2tib2FyZE9iamVjdHMuY3VycmVudFNoaXBzXG4gICAgKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHNoaXBUeXBlT2JqZWN0LCAndGhlIHNoaXAgdHlwZSBvYmplY3QnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhtb3VzZVBvc2l0aW9uLCAndGhlIG1vdXNlIHBvc2l0aW9uJyk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFJvdGF0aW9uLCAndGhlIGN1cnJlbnQgcm90YXRpb24nKTtcblxuICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgbW91c2VQb3NpdGlvbixcbiAgICAgIHNoaXBUeXBlT2JqZWN0LnNoaXBMZW5ndGgsXG4gICAgICBjdXJyZW50Um90YXRpb25cbiAgICApO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRTaGlwLCAndGhlIG1vc3QgdXAgdG8gZGF0ZSBzaGlwcycpO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRTaGlwO1xuICB9O1xuXG4gIGNvbnN0IGdldEdhbWVWYWx1ZXMgPSAoKSA9PiAoe1xuICAgIHBsYXllckJvYXJkLFxuICAgIGNvbXB1dGVyQm9hcmQsXG4gICAgcGxheWVyQ2hlY2tCb2FyZCxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjaGVja1NldHVwLFxuICAgIGF0dGFja0JvYXRzLFxuICAgIHNldHVwR2FtZSxcbiAgICBnYW1lSXNPdmVyLFxuICAgIHNldHVwU2hpcCxcbiAgICBnZXRHYW1lVmFsdWVzLFxuICAgIGFycmFuZ2VCbG9ja3MsXG4gIH07XG59O1xuXG5jb25zdCBhY3RpdmVHYW1lID0gR2FtZSgpO1xuXG5leHBvcnQgeyBHYW1lLCBhY3RpdmVHYW1lIH07XG4iLCJjb25zdCBQb3NpdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgY3JlYXRlUG9zaXRpb24gPSAoeENvb3JkLCB5Q29vcmQpID0+ICh7IHhDb29yZCwgeUNvb3JkIH0pO1xuXG4gIGNvbnN0IGNoZWNrT3V0T2ZCb3VuY2UgPSAobmV3UG9zaXRpb24pID0+IHtcbiAgICBpZiAobmV3UG9zaXRpb24ueENvb3JkID4gOSB8fCBuZXdQb3NpdGlvbi55Q29vcmQgPiA5KSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAobmV3UG9zaXRpb24ueENvb3JkIDwgMCB8fCBuZXdQb3NpdGlvbi55Q29vcmQgPCAwKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYWRkUG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAocG9zaXRpb24xID09PSBmYWxzZSB8fCBwb3NpdGlvbjIgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGNyZWF0ZVBvc2l0aW9uKHBvc2l0aW9uMS54Q29vcmQsIHBvc2l0aW9uMS55Q29vcmQpO1xuICAgIG5ld1Bvc2l0aW9uLnhDb29yZCArPSBwb3NpdGlvbjIueENvb3JkO1xuICAgIG5ld1Bvc2l0aW9uLnlDb29yZCArPSBwb3NpdGlvbjIueUNvb3JkO1xuXG4gICAgaWYgKGNoZWNrT3V0T2ZCb3VuY2UobmV3UG9zaXRpb24pKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbmV3UG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgbXVsdGlwbHlQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmIChwb3NpdGlvbjEgPT09IGZhbHNlIHx8IHBvc2l0aW9uMiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gY3JlYXRlUG9zaXRpb24ocG9zaXRpb24xLnhDb29yZCwgcG9zaXRpb24xLnlDb29yZCk7XG4gICAgbmV3UG9zaXRpb24ueENvb3JkICo9IHBvc2l0aW9uMi54Q29vcmQ7XG4gICAgbmV3UG9zaXRpb24ueUNvb3JkICo9IHBvc2l0aW9uMi55Q29vcmQ7XG5cbiAgICBpZiAoY2hlY2tPdXRPZkJvdW5jZShuZXdQb3NpdGlvbikpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yLCBheGlzKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMVtheGlzXSA9PT0gcG9zaXRpb24yW2F4aXNdICsgMSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHBvc2l0aW9uMVtheGlzXSA9PT0gcG9zaXRpb24yW2F4aXNdKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAocG9zaXRpb24xW2F4aXNdID09PSBwb3NpdGlvbjJbYXhpc10gLSAxKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgY29tcGFyZVBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKCFjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsKHBvc2l0aW9uMSwgcG9zaXRpb24yLCAneENvb3JkJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsKHBvc2l0aW9uMSwgcG9zaXRpb24yLCAneUNvb3JkJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVQb3NpdGlvbixcbiAgICBhZGRQb3NpdGlvbixcbiAgICBtdWx0aXBseVBvc2l0aW9uLFxuICAgIGNvbXBhcmVQb3NpdGlvbixcbiAgICBjaGVja091dE9mQm91bmNlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zaXRpb247XG4iLCJjb25zdCBQcmFjdGljYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNvcHlBcnJheSA9IChhcnJheSkgPT4ge1xuICAgIGNvbnN0IG5ld0FycmF5ID0gW107XG5cbiAgICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBuZXdBcnJheS5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9O1xuXG4gIGNvbnN0IGlzT2JqZWN0ID0gKGN1cnJlbnRPYmplY3QpID0+IHtcbiAgICBpZiAodHlwZW9mIGN1cnJlbnRPYmplY3QgPT09ICdvYmplY3QnICYmIGN1cnJlbnRPYmplY3QgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tPYmplY3QgPSAob2JqZWN0MSwgb2JqZWN0MikgPT4ge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IHNlY29uZEluZGV4ID0gMDtcblxuICAgIGxldCBvYmplY3RJc0VxdWFsID0gdHJ1ZTtcblxuICAgIGNvbnN0IGN1cnJlbnRPYmplY3QgPSBvYmplY3QxO1xuICAgIGNvbnN0IGN1cnJlbnRPYmplY3QyID0gb2JqZWN0MjtcblxuICAgIGNvbnN0IGN1cnJlbnRPYmplY3RWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGN1cnJlbnRPYmplY3QpO1xuICAgIGNvbnN0IGN1cnJlbnRPYmplY3QyVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50T2JqZWN0Mik7XG5cbiAgICBjb25zdCBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMoY3VycmVudE9iamVjdCk7XG4gICAgY29uc3Qgb2JqZWN0S2V5czIgPSBPYmplY3Qua2V5cyhjdXJyZW50T2JqZWN0Mik7XG5cbiAgICBvYmplY3RLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGtleSAhPT0gb2JqZWN0S2V5czJbaW5kZXhdKSBvYmplY3RJc0VxdWFsID0gZmFsc2U7XG4gICAgICBpbmRleCArPSAxO1xuICAgIH0pO1xuXG4gICAgaWYgKCFvYmplY3RJc0VxdWFsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG9iamVjdEtleXMubGVuZ3RoICE9PSBvYmplY3RLZXlzMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRPYmplY3QsICd0aGUgY3VycmVudCBvYmplY3QnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50T2JqZWN0MiwgJ3RoZSBjdXJyZW50IG9iamVjdDInKTtcblxuICAgIGN1cnJlbnRPYmplY3RWYWx1ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgaXRlbTIgPSBjdXJyZW50T2JqZWN0MlZhbHVlc1tzZWNvbmRJbmRleF07XG5cbiAgICAgIGlmIChpc09iamVjdChpdGVtKSAmJiBpc09iamVjdChpdGVtMikpIHtcbiAgICAgICAgY29uc3QgY2hlY2tPYmplY3RCb29sID0gY2hlY2tPYmplY3QoaXRlbSwgaXRlbTIpO1xuXG4gICAgICAgIGlmICghY2hlY2tPYmplY3RCb29sKSBvYmplY3RJc0VxdWFsID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0gIT09IGl0ZW0yKSB7XG4gICAgICAgIG9iamVjdElzRXF1YWwgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgc2Vjb25kSW5kZXggKz0gMTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmplY3RJc0VxdWFsO1xuICB9O1xuXG4gIHJldHVybiB7IGNvcHlBcnJheSwgY2hlY2tPYmplY3QgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByYWN0aWNhbDtcbiIsImltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcblxuY29uc3QgU2hpcCA9ICgpID0+IHtcbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuXG4gIGNvbnN0IGdldEFkZGVkUG9zaXRpb24gPSAoYXhpcykgPT4ge1xuICAgIGxldCBhZGRlZFBvc2l0aW9uO1xuXG4gICAgaWYgKGF4aXMgPT09ICd4JykgYWRkZWRQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKDEsIDApO1xuICAgIGVsc2UgYWRkZWRQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKDAsIDEpO1xuXG4gICAgcmV0dXJuIGFkZGVkUG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlU2hpcCA9IChwb3NpdGlvbjEsIGxlbmd0aDEsIGF4aXMpID0+IHtcbiAgICBpZiAobGVuZ3RoMSA9PT0gMCB8fCBsZW5ndGgxID4gNSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwb3NpdGlvbi5jaGVja091dE9mQm91bmNlKHBvc2l0aW9uMSkpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHBvcHVsYXRlU2hpcHMgPSAoY3VycmVudFBvc2l0aW9uLCBsYXRlc3RMZW5ndGgsIGxhdGVzdEFycmF5KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50QXJyYXkgPSBsYXRlc3RBcnJheTtcbiAgICAgIGxldCBuZXdQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbjtcblxuICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmIChsYXRlc3RMZW5ndGggPT09IDApIHJldHVybiBjdXJyZW50QXJyYXk7XG4gICAgICBpZiAobGF0ZXN0TGVuZ3RoID09PSBsZW5ndGgxKSB7XG4gICAgICAgIGN1cnJlbnRBcnJheS5wdXNoKGN1cnJlbnRQb3NpdGlvbik7XG4gICAgICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKGN1cnJlbnRQb3NpdGlvbiwgbGF0ZXN0TGVuZ3RoIC0gMSwgY3VycmVudEFycmF5KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFkZGVkUG9zaXRpb24gPSBnZXRBZGRlZFBvc2l0aW9uKGF4aXMpO1xuICAgICAgbmV3UG9zaXRpb24gPSBwb3NpdGlvbi5hZGRQb3NpdGlvbihuZXdQb3NpdGlvbiwgYWRkZWRQb3NpdGlvbik7XG5cbiAgICAgIGlmICghbmV3UG9zaXRpb24pIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgICAgIGN1cnJlbnRBcnJheS5wdXNoKG5ld1Bvc2l0aW9uKTtcblxuICAgICAgY29uc3QgYXJyYXlMZW5ndGggPSBjdXJyZW50QXJyYXkubGVuZ3RoIC0gMTtcblxuICAgICAgcmV0dXJuIHBvcHVsYXRlU2hpcHMoXG4gICAgICAgIGN1cnJlbnRBcnJheVthcnJheUxlbmd0aF0sXG4gICAgICAgIGxhdGVzdExlbmd0aCAtIDEsXG4gICAgICAgIGN1cnJlbnRBcnJheVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHBvcHVsYXRlU2hpcHMocG9zaXRpb24xLCBsZW5ndGgxLCBbXSwgZmFsc2UpO1xuICB9O1xuXG5cblxuICBjb25zdCBpc1N1bmsgPSAoc2hpcEFycmF5KSA9PiB7XG4gICAgaWYgKHNoaXBBcnJheS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBoaXQgPSAocG9zaXRpb25zQXJyYXksIHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgaGl0QXJyYXkgPSBwb3NpdGlvbnNBcnJheS5maWx0ZXIoKHBvcykgPT4ge1xuICAgICAgaWYgKHBvcy54Q29vcmQgPT09IHBvc2l0aW9uLnhDb29yZCAmJiBwb3MueUNvb3JkID09PSBwb3NpdGlvbi55Q29vcmQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgY29uc3Qgc2hpcEFycmF5cyA9IHBvc2l0aW9uc0FycmF5LmZpbHRlcigocG9zKSA9PiB7XG4gICAgICBpZiAocG9zLnhDb29yZCA9PT0gcG9zaXRpb24ueENvb3JkICYmIHBvcy55Q29vcmQgPT09IHBvc2l0aW9uLnlDb29yZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IGhpdEFycmF5LCBzaGlwQXJyYXlzIH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVTaGlwLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0IERvbSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9tYWluLmpzJztcbi8vIHlvdSB3aW4gIPCfmINcblxuLy8geW91IGxvc3Qg8J+YolxuXG5jb25zdCBVaSA9ICgpID0+IHtcbiAgY29uc3QgZG9tID0gRG9tKCk7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcblxuICBjb25zdCByZW5kZXJTcGVlZCA9IDE7XG5cbiAgbGV0IGJsb2NrU2l6ZSA9IDQyO1xuXG4gIGxldCBhY3RpdmVHYW1lO1xuXG4gIGxldCBwbGFjZWRTaGlwID0gZmFsc2U7XG4gIGxldCBheGlzID0gJ3knO1xuXG4gIGxldCBtb3VzZUJsb2NrTG9jYXRpb24gPSBmYWxzZTtcblxuICBjb25zdCBjcmVhdGVEb21FbGVtZW50ID0gKGVsZW1lbnROYW1lKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcblxuICBjb25zdCBnZXRNb3VzZVBvc2l0aW9uID0gKG9mZnNldFgsIG9mZnNldFkpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhvZmZzZXRYLCBvZmZzZXRZLCAnb2Zmc2V0IHggYW5kIG9mZnNldCB5Jyk7XG5cbiAgICBjb25zdCB4Q29vcmQgPSBNYXRoLmZsb29yKG9mZnNldFggLyBibG9ja1NpemUpO1xuICAgIGNvbnN0IHlDb29yZCA9IE1hdGguZmxvb3Iob2Zmc2V0WSAvIGJsb2NrU2l6ZSk7XG5cbiAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oeENvb3JkLCB5Q29vcmQpO1xuXG4gICAgY29uc3Qgb3V0T2ZCb3VuY2UgPSBwb3NpdGlvbi5jaGVja091dE9mQm91bmNlKG1vdXNlUG9zaXRpb24pO1xuXG4gICAgaWYgKG91dE9mQm91bmNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhtb3VzZVBvc2l0aW9uLCAndGhlIGN1cnJlbnQgbW91c2UgcG9zaXRpb24nKTtcblxuICAgIHJldHVybiBtb3VzZVBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGZpbmRNb3VzZVBvc2l0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY3VycmVudE1vdXNlUG9zaXRpb24gPSBnZXRNb3VzZVBvc2l0aW9uKGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuXG4gICAgbW91c2VCbG9ja0xvY2F0aW9uID0gY3VycmVudE1vdXNlUG9zaXRpb247XG5cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50TW91c2VQb3NpdGlvbiwgJ3RoZSBjdXJyZW50IG1vdXNlIHBvc2l0aW9uJyk7XG4gIH07XG5cbiAgLy8gd290ayBvbiB0aGlzIGZ1bmN0aW9uXG4gIGNvbnN0IGZpbmRUb3VjaFBvc2l0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB0b3VjaE9mZnNldFggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFggLSByZWN0Lng7XG4gICAgY29uc3QgdG91Y2hPZmZzZXRZID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZIC0gcmVjdC55O1xuXG4gICAgY29uc3QgdG91Y2hQb3NpdGlvbiA9IGdldE1vdXNlUG9zaXRpb24odG91Y2hPZmZzZXRYLCB0b3VjaE9mZnNldFkpO1xuICAgIG1vdXNlQmxvY2tMb2NhdGlvbiA9IHRvdWNoUG9zaXRpb247XG5cbiAgICBjb25zb2xlLmxvZyhtb3VzZUJsb2NrTG9jYXRpb24sICd0aGUgbW91c2UgYmxvY2sgbG9jYXRpb24nKTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgLy8gYmxvY2sgc2l6ZSBtYXRjaGVzIHRoZSBzaXplIGdyaWRzaXplIG9mIHRoZSBtZWRpYSBxdWVyeSBkaXZpZGVkIGJ5IDEwXG4gIGNvbnN0IGNoYW5nZUJsb2NrU2l6ZSA9IChtYXRjaE1lZGlhKSA9PiB7XG4gICAgYmxvY2tTaXplID0gNDI7XG4gICAgaWYgKG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDk2MHB4KScpLm1hdGNoZXMpIGJsb2NrU2l6ZSA9IDMwO1xuICAgIGlmIChtYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA0NzBweCknKS5tYXRjaGVzKSBibG9ja1NpemUgPSAyMTtcbiAgICBpZiAobWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMzIwcHgpJykubWF0Y2hlcykgYmxvY2tTaXplID0gMTU7XG4gICAgcmV0dXJuIGJsb2NrU2l6ZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDMyMHB4KScpLCAndGhlIGN1cnJlbnQgbWF0Y2ggbWVkaWEnKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVCbG9ja0VsZW1lbnQgPSAoYmxvY2tDbGFzcywgY3JlYXRlQmxvY2spID0+IHtcbiAgICBsZXQgbGF0ZXN0Q2xhc3MgPSBibG9ja0NsYXNzO1xuXG4gICAgaWYgKFxuICAgICAgbGF0ZXN0Q2xhc3MgIT09ICdoaXRCbG9jaycgJiZcbiAgICAgIGxhdGVzdENsYXNzICE9PSAnbWlzc0Jsb2NrJyAmJlxuICAgICAgbGF0ZXN0Q2xhc3MgIT09ICdjdXJzb3JCbG9jaydcbiAgICApIHtcbiAgICAgIGxhdGVzdENsYXNzID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2tFbGVtZW50ID0gY3JlYXRlQmxvY2soJ2RpdicpO1xuICAgIGJsb2NrRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdibG9jaycpO1xuICAgIGlmIChsYXRlc3RDbGFzcyAhPT0gJycpIGJsb2NrRWxlbWVudC5jbGFzc0xpc3QuYWRkKGxhdGVzdENsYXNzKTtcblxuICAgIHJldHVybiBibG9ja0VsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgZGlzYWJsZVN0YXJ0ZXJVaSA9ICgpID0+IHRydWU7XG5cbiAgLy8gY29uc3QgcmVuZGVyU2VsZWN0aW9uQmxvY2tzID0gKG1vdXNlUG9zaXRpb24sIGxhdGVzdEJsb2NrU2l6ZSkgPT4ge1xuICAvLyAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAvLyAgIGNvbnN0IGN1cnJlbnRTbmFrZUJsb2NrID0gY3JlYXRlQmxvY2tFbGVtZW50KCk7XG4gIC8vICAgY29uc3QgcmVhbFBvc2l0aW9uWCA9IE1hdGguZmxvb3IobW91c2VQb3NpdGlvbi54Q29vcmQgKiBsYXRlc3RCbG9ja1NpemUpO1xuICAvLyAgIGNvbnN0IHJlYWxQb3NpdGlvblkgPSBNYXRoLmZsb29yKG1vdXNlUG9zaXRpb24ueUNvb3JkICogbGF0ZXN0QmxvY2tTaXplKTtcblxuICAvLyAgIGNvbnNvbGUubG9nKG1vdXNlUG9zaXRpb24sICdUSEUgQ1VSUkVOVCBNT1VTRSBQT1NJVElPTicpO1xuXG4gIC8vICAgY29uc29sZS5sb2cocmVhbFBvc2l0aW9uWCwgJ3RoZSByZWFsIHBvc2l0aW9uIHgnKTtcbiAgLy8gICBjb25zb2xlLmxvZyhyZWFsUG9zaXRpb25ZLCAndGhlIHJlYWwgcG9zaXRpb24geScpO1xuXG4gIC8vICAgY3VycmVudFNuYWtlQmxvY2suc3R5bGUubGVmdCA9IGAke3JlYWxQb3NpdGlvblh9cHhgO1xuICAvLyAgIGN1cnJlbnRTbmFrZUJsb2NrLnN0eWxlLnRvcCA9IGAke3JlYWxQb3NpdGlvbll9cHhgO1xuXG4gIC8vICAgZWxlbWVudC5zaGlwR3JpZC5hcHBlbmRDaGlsZChjdXJyZW50U25ha2VCbG9jayk7XG4gIC8vIH07XG5cbiAgY29uc3QgY3JlYXRlU2hpcEJsb2NrID0gKHNoaXBQb3NpdGlvbiwgbGF0ZXN0QmxvY2tTaXplLCBzaGlwVHlwZSkgPT4ge1xuICAgIGNvbnN0IHNoaXBCbG9jayA9IGNyZWF0ZUJsb2NrRWxlbWVudChzaGlwVHlwZSwgY3JlYXRlRG9tRWxlbWVudCk7XG5cbiAgICBjb25zdCByZWFsUG9zaXRpb25YID0gTWF0aC5mbG9vcihzaGlwUG9zaXRpb24ueENvb3JkICogbGF0ZXN0QmxvY2tTaXplKTtcbiAgICBjb25zdCByZWFsUG9zaXRpb25ZID0gTWF0aC5mbG9vcihzaGlwUG9zaXRpb24ueUNvb3JkICogbGF0ZXN0QmxvY2tTaXplKTtcbiAgICBzaGlwQmxvY2suc3R5bGUubGVmdCA9IGAke3JlYWxQb3NpdGlvblh9cHhgO1xuICAgIHNoaXBCbG9jay5zdHlsZS50b3AgPSBgJHtyZWFsUG9zaXRpb25ZfXB4YDtcblxuICAgIHJldHVybiBzaGlwQmxvY2s7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQWxyZWFkeVBsYWNlZFNoaXBzID0gKHNoaXBHcmlkLCBsYXRlc3RCbG9ja1NpemUpID0+IHtcbiAgICBjb25zdCBnYW1lVmFsdWVzID0gYWN0aXZlR2FtZS5nZXRHYW1lVmFsdWVzKCk7XG4gICAgY29uc3QgY2hlY2tCb2FyZFNoaXBzID1cbiAgICAgIGdhbWVWYWx1ZXMucGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKS5jdXJyZW50U2hpcHM7XG5cbiAgICBjaGVja0JvYXJkU2hpcHMuZm9yRWFjaCgocGxheWVyQ2hlY2tTaGlwcykgPT4ge1xuICAgICAgcGxheWVyQ2hlY2tTaGlwcy5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBCbG9jayA9IGNyZWF0ZVNoaXBCbG9jayhib2F0LCBsYXRlc3RCbG9ja1NpemUpO1xuICAgICAgICBzaGlwR3JpZC5hcHBlbmRDaGlsZChzaGlwQmxvY2spO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUGxhY2VkU2hpcCA9IChsYXRlc3RCbG9ja1NpemUpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgY29uc3QgeyBzaGlwR3JpZCB9ID0gZWxlbWVudDtcblxuICAgIGlmICghcGxhY2VkU2hpcCkgcmV0dXJuIHBsYWNlZFNoaXA7XG5cbiAgICBzaGlwR3JpZC5pbm5lckhUTUwgPSAnJztcblxuICAgIHBsYWNlZFNoaXAuZm9yRWFjaCgoc2hpcFBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzaGlwQmxvY2sgPSBjcmVhdGVTaGlwQmxvY2soc2hpcFBvc2l0aW9uLCBsYXRlc3RCbG9ja1NpemUpO1xuICAgICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQoc2hpcEJsb2NrKTtcbiAgICB9KTtcblxuICAgIHJlbmRlckFscmVhZHlQbGFjZWRTaGlwcyhzaGlwR3JpZCwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VBeGlzID0gKCkgPT4ge1xuICAgIGlmIChheGlzID09PSAneScpIGF4aXMgPSAneCc7XG4gICAgZWxzZSBheGlzID0gJ3knO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVTaGlwQnlEaXJlY3Rpb24gPSAobW91c2VMb2NhdGlvbiwgY3VycmVudFNoaXAsIGN1cnJlbnRBeGlzKSA9PiB7XG4gICAgbGV0IGxhdGVzdFNoaXAgPSBmYWxzZTtcblxuICAgIGlmIChwb3NpdGlvbi5jaGVja091dE9mQm91bmNlKGN1cnJlbnRTaGlwWzBdKSkgcmV0dXJuIGxhdGVzdFNoaXA7XG5cbiAgICBjb25zdCBuZXdYUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihcbiAgICAgIG1vdXNlTG9jYXRpb24ueENvb3JkLFxuICAgICAgMFxuICAgICkueENvb3JkO1xuXG4gICAgY29uc3QgbmV3WVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICAwLFxuICAgICAgbW91c2VMb2NhdGlvbi55Q29vcmRcbiAgICApLnlDb29yZDtcblxuICAgIGxldCBuZXdTaGlwUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihcbiAgICAgIG5ld1hQb3NpdGlvbixcbiAgICAgIGN1cnJlbnRTaGlwWzBdLnlDb29yZFxuICAgICk7XG5cbiAgICBpZiAoY3VycmVudEF4aXMgPT09ICd4Jykge1xuICAgICAgbmV3U2hpcFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICAgIGN1cnJlbnRTaGlwWzBdLnhDb29yZCxcbiAgICAgICAgbmV3WVBvc2l0aW9uXG4gICAgICApO1xuICAgIH1cblxuICAgIGxhdGVzdFNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAoXG4gICAgICBuZXdTaGlwUG9zaXRpb24sXG4gICAgICBjdXJyZW50U2hpcC5sZW5ndGgsXG4gICAgICBjdXJyZW50QXhpc1xuICAgICk7XG5cbiAgICByZXR1cm4gbGF0ZXN0U2hpcDtcbiAgfTtcblxuICBjb25zdCBwbGFjZVBsYXllclNoaXAgPSAobGF0ZXN0U2hpcCwgbGF0ZXN0QXhpcywgbGF0ZXN0R2FtZSkgPT4ge1xuICAgIGlmIChsYXRlc3RTaGlwKSBsYXRlc3RHYW1lLnNldHVwU2hpcChsYXRlc3RTaGlwWzBdLCBsYXRlc3RBeGlzKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VQbGF5ZXJTaGlwRXZlbnQgPSAoKSA9PiB7XG4gICAgcGxhY2VQbGF5ZXJTaGlwKHBsYWNlZFNoaXAsIGF4aXMsIGFjdGl2ZUdhbWUpO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBlbGVtZW50LmNvbXB1dGVyR3JpZC5pbm5lckhUTUwgPSAnJztcbiAgICBlbGVtZW50LnBsYXllckdyaWQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBlbGVtZW50LnNoaXBTZWxlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBlbGVtZW50LmdhbWVGaW5pc2hlZFNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50LmdhbWVPdmVyVGV4dC5pbm5lckhUTUwgPSAnJztcblxuICAgIGFjdGl2YXRlVWkoKTtcbiAgfTtcblxuICBjb25zdCBhZGRVaUV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgZWxlbWVudC5zaGlwTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZpbmRUb3VjaFBvc2l0aW9uKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcEV2ZW50KTtcblxuICAgIGVsZW1lbnQucm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQXhpcyk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVWlFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgZWxlbWVudC5zaGlwTGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZpbmRUb3VjaFBvc2l0aW9uKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcEV2ZW50KTtcblxuICAgIGVsZW1lbnQucm90YXRlQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQXhpcyk7XG4gIH07XG5cbiAgY29uc3QgYWRkRW5kaW5nRXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICBlbGVtZW50LnJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVFbmRpbmdFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGVsZW1lbnQucmVzdGFydC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGVsZW1lbnQucmVzdGFydCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlR2FtZUV2ZW50cyA9ICgpID0+IHtcbiAgICBhZGRFbmRpbmdFdmVudHMoKTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgY2hhbmdlTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudFxuICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGNoYW5nZSlcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmaW5kTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGF0dGFja1NoaXBzKTtcbiAgfTtcblxuICBjb25zdCBnZXRNZXNzYWdlID0gKCkgPT4ge307XG5cbiAgY29uc3QgYWRkR2FtZUV2ZW50cyA9ICgpID0+IHtcbiAgICByZW1vdmVVaUV2ZW50cygpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgY2hhbmdlTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5jb21wdXRlckdyaWRMYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmaW5kTW91c2VQb3NpdGlvbik7XG4gICAgZWxlbWVudC5jb21wdXRlckdyaWRMYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGF0dGFja1NoaXBzKTtcbiAgfTtcblxuICBjb25zdCBjaGVja01vdXNlVGFyZ2V0ID0gKGVsZW1lbnRDbGFzcykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnRDbGFzcywgJ3RoZSBlbGVtZW50IGNhbHNzJyk7XG4gICAgaWYgKGVsZW1lbnRDbGFzcyAhPT0gJ2dyaWRPdmVybGF5IGNvbXB1dGVyR3JpZE92ZXJsYXknKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlTW91c2VQb3NpdGlvbiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlVGFyZ2V0ID0gY2hlY2tNb3VzZVRhcmdldChldmVudC50YXJnZXQuY2xhc3NOYW1lKTtcbiAgICBpZiAoIW1vdXNlVGFyZ2V0KSBtb3VzZUJsb2NrTG9jYXRpb24gPSBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tTaGlwcyA9ICgpID0+IHtcbiAgICBhY3RpdmVHYW1lLmF0dGFja0JvYXRzKG1vdXNlQmxvY2tMb2NhdGlvbik7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU2hpcHMgPSAoc2hpcHMsIGdyaWQsIGxhdGVzdEJsb2NrU2l6ZSkgPT4ge1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXBHcm91cCkgPT4ge1xuICAgICAgc2hpcEdyb3VwLmZvckVhY2goKGJvYXQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcEVsZW1lbnQgPSBjcmVhdGVTaGlwQmxvY2soYm9hdCwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChzaGlwRWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJIaXRzID0gKHNoaXBzLCBzaGlwVHlwZSwgZ3JpZCwgbGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcFBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzaGlwRWxlbWVudCA9IGNyZWF0ZVNoaXBCbG9jayhcbiAgICAgICAgc2hpcFBvc2l0aW9uLFxuICAgICAgICBsYXRlc3RCbG9ja1NpemUsXG4gICAgICAgIHNoaXBUeXBlXG4gICAgICApO1xuICAgICAgZ3JpZC5hcHBlbmRDaGlsZChzaGlwRWxlbWVudCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlQ3Vyc29yRWxlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbXB1dGVyR3JpZCB9ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBjb25zb2xlLmxvZyhjb21wdXRlckdyaWQuaW5uZXJIVE1MKTtcbiAgfTtcbiAgY29uc3QgcmVuZGVyR3JpZHMgPSAoYmxvY2tTaXplMiwgbW91c2VQb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGdhbWVWYWx1ZXMgPSBhY3RpdmVHYW1lLmdldEdhbWVWYWx1ZXMoKTtcblxuICAgIGNvbnN0IHsgcGxheWVyR3JpZCB9ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgY29uc3QgeyBjb21wdXRlckdyaWQgfSA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgcGxheWVyR3JpZC5pbm5lckhUTUwgPSAnJztcbiAgICBjb21wdXRlckdyaWQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBwbGF5ZXJCb2FyZFZhbHVlcyA9IGdhbWVWYWx1ZXMucGxheWVyQm9hcmQuZ2V0VmFsdWVzKCk7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZFZhbHVlcyA9IGdhbWVWYWx1ZXMuY29tcHV0ZXJCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHBsYXllckJvYXJkVmFsdWVzLCAncGxheWVyQm9hcmRWYWx1ZXMnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjb21wdXRlckJvYXJkVmFsdWVzLCAnY29tcHV0ZXJCb2FyZFZhbHVlcycpO1xuICAgIC8vIGNvbnNvbGUubG9nKHBsYXllckJvYXJkVmFsdWVzLCAndGhlIHBsYXllciBib2FyZCB2YWx1ZXMnKTtcblxuICAgIHJlbmRlclNoaXBzKHBsYXllckJvYXJkVmFsdWVzLmN1cnJlbnRTaGlwcywgcGxheWVyR3JpZCwgYmxvY2tTaXplMik7XG4gICAgcmVuZGVySGl0cyhwbGF5ZXJCb2FyZFZhbHVlcy5oaXRzLCAnaGl0QmxvY2snLCBwbGF5ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgICByZW5kZXJIaXRzKHBsYXllckJvYXJkVmFsdWVzLm1pc3NlcywgJ21pc3NCbG9jaycsIHBsYXllckdyaWQsIGJsb2NrU2l6ZTIpO1xuXG4gICAgcmVuZGVyU2hpcHMoY29tcHV0ZXJCb2FyZFZhbHVlcy5jdXJyZW50U2hpcHMsIGNvbXB1dGVyR3JpZCwgYmxvY2tTaXplMik7XG5cbiAgICByZW5kZXJIaXRzKGNvbXB1dGVyQm9hcmRWYWx1ZXMuaGl0cywgJ2hpdEJsb2NrJywgY29tcHV0ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgICByZW5kZXJIaXRzKFxuICAgICAgY29tcHV0ZXJCb2FyZFZhbHVlcy5taXNzZXMsXG4gICAgICAnbWlzc0Jsb2NrJyxcbiAgICAgIGNvbXB1dGVyR3JpZCxcbiAgICAgIGJsb2NrU2l6ZTJcbiAgICApO1xuXG4gICAgY29uc3QgbW91c2VTaGlwID0gc2hpcC5jcmVhdGVTaGlwKG1vdXNlUG9zaXRpb24sIDEsICd4Jyk7XG5cbiAgICBpZiAobW91c2VTaGlwKSB7XG4gICAgICByZW5kZXJIaXRzKG1vdXNlU2hpcCwgJ2N1cnNvckJsb2NrJywgY29tcHV0ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU3RhdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2FtZVZhbHVlcyA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuXG4gICAgY29uc3QgeyBwbGF5ZXJIaXRzLCBwbGF5ZXJNaXNzZXMgfSA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGNvbnN0IHsgY29tcHV0ZXJIaXRzLCBjb21wdXRlck1pc3NlcyB9ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBjb25zdCBwbGF5ZXJCb2FyZFZhbHVlcyA9IGdhbWVWYWx1ZXMucGxheWVyQm9hcmQuZ2V0VmFsdWVzKCk7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZFZhbHVlcyA9IGdhbWVWYWx1ZXMuY29tcHV0ZXJCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIHBsYXllckhpdHMudGV4dENvbnRlbnQgPSBgSGl0cyAtICR7cGxheWVyQm9hcmRWYWx1ZXMuaGl0cy5sZW5ndGh9YDtcbiAgICBwbGF5ZXJNaXNzZXMudGV4dENvbnRlbnQgPSBgTWlzc2VzIC0gJHtwbGF5ZXJCb2FyZFZhbHVlcy5taXNzZXMubGVuZ3RofWA7XG5cbiAgICBjb21wdXRlckhpdHMudGV4dENvbnRlbnQgPSBgSGl0cyAtICR7Y29tcHV0ZXJCb2FyZFZhbHVlcy5oaXRzLmxlbmd0aH1gO1xuICAgIGNvbXB1dGVyTWlzc2VzLnRleHRDb250ZW50ID0gYE1pc3NlcyAtICR7Y29tcHV0ZXJCb2FyZFZhbHVlcy5taXNzZXMubGVuZ3RofWA7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyR2FtZSA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGdhbWVTdGF0dXMgPSBhY3RpdmVHYW1lLmdhbWVJc092ZXIoKTtcblxuICAgICAgY29uc3QgbGF0ZXN0QmxvY2tTaXplID0gY2hhbmdlQmxvY2tTaXplKHdpbmRvdy5tYXRjaE1lZGlhKTtcbiAgICAgIHJlbmRlckdyaWRzKGxhdGVzdEJsb2NrU2l6ZSwgbW91c2VCbG9ja0xvY2F0aW9uKTtcbiAgICAgIHJlbmRlclN0YXRzKCk7XG5cbiAgICAgIGlmICghZ2FtZVN0YXR1cy5nYW1lRmluaXNoZWQpIHJlbmRlckdhbWUobGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgIGVsc2UgcmVuZGVyR2FtZSgpO1xuICAgIH0sIHJlbmRlclNwZWVkKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgZWxlbWVudHMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGVsZW1lbnRzLnNlY3Rpb25TY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50cy5zaGlwR3JpZC5pbm5lckhUTUwgPSAnJztcbiAgfTtcblxuICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgcmVtb3ZlU2hpcFNlY3Rpb24oKTtcblxuICAgIGFjdGl2ZUdhbWUuc2V0dXBHYW1lKCk7XG4gICAgYWRkR2FtZUV2ZW50cygpO1xuXG4gICAgcmVuZGVyR2FtZSgpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclNlbGVjdGlvbkdyaWQgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBnYW1lVmFsdWUgPSBhY3RpdmVHYW1lLmdldEdhbWVWYWx1ZXMoKTtcbiAgICAgIGNvbnN0IGNoZWNrQm9hcmRTaGlwcyA9XG4gICAgICAgIGdhbWVWYWx1ZS5wbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpLmN1cnJlbnRTaGlwcztcblxuICAgICAgY2hhbmdlQmxvY2tTaXplKHdpbmRvdy5tYXRjaE1lZGlhKTtcblxuICAgICAgaWYgKGFjdGl2ZUdhbWUuY2hlY2tTZXR1cChnYW1lVmFsdWUucGxheWVyQ2hlY2tCb2FyZCkpIGRpc2FibGVTdGFydGVyVWkoKTtcblxuICAgICAgaWYgKG1vdXNlQmxvY2tMb2NhdGlvbikge1xuICAgICAgICBsZXQgY3VycmVudFNoaXAgPSBhY3RpdmVHYW1lLmFycmFuZ2VCbG9ja3MobW91c2VCbG9ja0xvY2F0aW9uLCBheGlzKTtcbiAgICAgICAgaWYgKCFjdXJyZW50U2hpcCAmJiBwbGFjZWRTaGlwKSB7XG4gICAgICAgICAgY3VycmVudFNoaXAgPSBtb3ZlU2hpcEJ5RGlyZWN0aW9uKFxuICAgICAgICAgICAgbW91c2VCbG9ja0xvY2F0aW9uLFxuICAgICAgICAgICAgcGxhY2VkU2hpcCxcbiAgICAgICAgICAgIGF4aXNcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRTaGlwKSBwbGFjZWRTaGlwID0gY3VycmVudFNoaXA7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cocGxhY2VkU2hpcCwgJ3RoZSBjdXJyZW50IHBsYWNlZCBzaGlwJyk7XG5cbiAgICAgICAgaWYgKHBsYWNlZFNoaXApIHJlbmRlclBsYWNlZFNoaXAoYmxvY2tTaXplKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhY3RpdmVHYW1lLmNoZWNrU2V0dXAoY2hlY2tCb2FyZFNoaXBzKSkgcmVuZGVyU2VsZWN0aW9uR3JpZCgpO1xuICAgICAgZWxzZSBzdGFydEdhbWUoYmxvY2tTaXplKTtcbiAgICB9LCByZW5kZXJTcGVlZCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsdWVzID0gKCkgPT4gKHtcbiAgICBibG9ja1NpemUsXG4gICAgcGxhY2VkU2hpcCxcbiAgICBheGlzLFxuICAgIG1vdXNlQmxvY2tMb2NhdGlvbixcbiAgfSk7XG5cbiAgY29uc3QgYWN0aXZhdGVVaSA9ICgpID0+IHtcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvbS5nZXRQYWdlKCk7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBwYWdlQ29udGVudDtcbiAgICBhY3RpdmVHYW1lID0gR2FtZSgpO1xuICAgIGFkZFVpRXZlbnRzKCk7XG4gICAgcmVtb3ZlRW5kaW5nRXZlbnRzKCk7XG4gICAgcmVuZGVyU2VsZWN0aW9uR3JpZCgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWN0aXZhdGVVaSxcbiAgICBjcmVhdGVCbG9ja0VsZW1lbnQsXG4gICAgZ2V0TW91c2VQb3NpdGlvbixcbiAgICBtb3ZlU2hpcEJ5RGlyZWN0aW9uLFxuICAgIGNoYW5nZUJsb2NrU2l6ZSxcbiAgICBjaGFuZ2VBeGlzLFxuICAgIGdldFZhbHVlcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi03MDAuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi03MDAud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi03MDAudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tMzAwLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tMzAwLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tMzAwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xN19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE5X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18sIHsgaGFzaDogXCIjQXplcmV0TW9ub1wiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fLCB7IGhhc2g6IFwiI0F6ZXJldE1vbm9cIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18sIHsgaGFzaDogXCIjUm9ib3RvXCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE5X19fLCB7IGhhc2g6IFwiI1JvYm90b1wiIH0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWRhcmtCbGFjazogcmdiKDIsIDQsIDgpO1xcbiAgLS1kYXJrR3JheTogcmdiKDIyLCAyNywgMzQpO1xcbiAgLS1taXNzQmx1ZTogcmdiKDc2LCA4NCwgMTkxKTtcXG59XFxuXFxuLypjcmVkaXQgdG8gaHR0cHM6Ly9nb29nbGUtd2ViZm9udHMtaGVscGVyLmhlcm9rdWFwcC5jb20vIGZvciBhbGxvd2luZyBtZSB0byBpbXBvcnQgdGhlc2UgZm9udHMgYXV0b21hdGljYWxseSovXFxuLyogYXplcmV0LW1vbm8tcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0F6ZXJldCBNb25vJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIHNyYzogbG9jYWwoJycpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpXFxuICAgICAgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAvKiBJRTYtSUU4ICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgIC8qIE1vZGVybiBCcm93c2VycyAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpXFxuICAgICAgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIikgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbn1cXG4vKiBhemVyZXQtbW9uby03MDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdBemVyZXQgTW9ubyc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgLyogSUU2LUlFOCAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fICsgXCIpXFxuICAgICAgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgnd29mZicpLFxcbiAgICAvKiBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gKyBcIikgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbn1cXG5cXG4vKiByb2JvdG8tMzAwIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fICsgXCIpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAvKiBJRTYtSUU4ICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE1X19fICsgXCIpXFxuICAgICAgZm9ybWF0KCd3b2ZmJyksXFxuICAgIC8qIE1vZGVybiBCcm93c2VycyAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNl9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTdfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxufVxcbi8qIHJvYm90by1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE4X19fICsgXCIpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgIC8qIElFNi1JRTggKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjFfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgLyogTW9kZXJuIEJyb3dzZXJzICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19fICsgXCIpXFxuICAgICAgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19fICsgXCIpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG59XFxuXFxuaHRtbCB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zaGlwR3JpZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ibG9jayB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHdpZHRoOiA0MnB4O1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uaGl0QmxvY2sge1xcbiAgYmFja2dyb3VuZDogcGluaztcXG59XFxuXFxuLmN1cnNvckJsb2NrIHtcXG4gIGJhY2tncm91bmQ6IGJsdWU7XFxufVxcblxcbi5taXNzQmxvY2sge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWlzc0JsdWUpO1xcbn1cXG5cXG4uc2VjdGlvblNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDI7XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZUZpbmlzaGVkU2VjdGlvbiB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG5cXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtCbGFjayk7XFxuXFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5yZXN0YXJ0IHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtHcmF5KTtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNoaXBUaXRsZSB7XFxuICBmb250LWZhbWlseTogJ0F6ZXJldCBNb25vJywgbW9ub3NwYWNlO1xcbn1cXG5cXG4uc2hpcFRleHQge1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uc2hpcFNlbGVjdGlvbiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0JsYWNrKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNDQwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJvdGF0ZUltYWdlIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDg3ZGVnKVxcbiAgICBicmlnaHRuZXNzKDEwMCUpO1xcbn1cXG5cXG4ucm90YXRlQnV0dG9uOmhvdmVyLFxcbi5yZXN0YXJ0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtCbGFjayk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yb3RhdGVCdXR0b24ge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBtYXJnaW46IDEwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2hpcEdyaWQge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtHcmF5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmJvYXJkVGl0bGUge1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDM5LCAzOSwgMzksIDAuNTc0KTtcXG4gIHotaW5kZXg6IDI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMiwgNCwgOCk7XFxufVxcblxcbi5tYWluU2VjdGlvbiB7XFxuICBtaW4taGVpZ2h0OiA5MHZoO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubWFpblRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGxpbmUtaGVpZ2h0OiAxMHZoO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbn1cXG5cXG4uY2VudGVyU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmdyaWQge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtHcmF5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uc2hpcE92ZXJsYXkge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi5ncmlkTGF5ZXIge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmdyaWRPdmVybGF5IHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogNDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbn1cXG5cXG4uc2hpcE92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuLmdyaWRPdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5zdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG4gIGxpbmUtaGVpZ2h0OiAxMHZoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWFpblRpdGxlIGgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXplcmV0IE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG5cXG4gIC5zaGlwR3JpZCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG5cXG4gIC5zaGlwT3ZlcmxheSxcXG4gIC5ncmlkT3ZlcmxheSxcXG4gIC5ncmlkTGF5ZXIge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICB9XFxuXFxuICAuc2hpcFNlbGVjdGlvbiB7XFxuICAgIHdpZHRoOiAzMTBweDtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICB9XFxuXFxuICAuYmxvY2sge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgfVxcblxcbiAgLnN0YXRzIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3MHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gICAgaGVpZ2h0OiAyMTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwR3JpZCB7XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gICAgaGVpZ2h0OiAyMTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwT3ZlcmxheSxcXG4gIC5ncmlkT3ZlcmxheSxcXG4gIC5ncmlkTGF5ZXIge1xcbiAgICB3aWR0aDogMjEwcHg7XFxuICAgIGhlaWdodDogMjEwcHg7XFxuICB9XFxuXFxuICAuc2hpcFNlbGVjdGlvbiB7XFxuICAgIHdpZHRoOiAyMjBweDtcXG4gIH1cXG5cXG4gIC5zaGlwVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgfVxcblxcbiAgLmJvYXJkVGl0bGUge1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gIH1cXG5cXG4gIC5ibG9jayB7XFxuICAgIHdpZHRoOiAyMXB4O1xcbiAgICBoZWlnaHQ6IDIxcHg7XFxuICB9XFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgfVxcblxcbiAgLnN0YXRzIHtcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2NXB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gIH1cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IDhweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xcbiAgLmdyaWQge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiA2cHg7XFxuICB9XFxuXFxuICAuc2hpcE92ZXJsYXksXFxuICAuZ3JpZE92ZXJsYXksXFxuICAuZ3JpZExheWVyIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgfVxcblxcbiAgLnNoaXBHcmlkIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgfVxcblxcbiAgLnNoaXBTZWxlY3Rpb24ge1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICB9XFxuXFxuICAuYmxvY2sge1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgfVxcblxcbiAgLnNoaXBUZXh0IHtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG4gIH1cXG5cXG4gIC5zaGlwVGl0bGUge1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gIH1cXG5cXG4gIC5zdGF0cyB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBRUEsOEdBQThHO0FBQzlHLGdDQUFnQztBQUNoQztFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRDQUFzRCxFQUFFLHFCQUFxQjtFQUM3RTs7Ozs7Ozs7OzsyREFVOEUsRUFBRSxlQUFlO0FBQ2pHO0FBQ0EsNEJBQTRCO0FBQzVCO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNENBQWtELEVBQUUscUJBQXFCO0VBQ3pFOzs7Ozs7Ozs7OzREQVUwRSxFQUFFLGVBQWU7QUFDN0Y7O0FBRUEsdUJB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O0VBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1kYXJrQmxhY2s6IHJnYigyLCA0LCA4KTtcXG4gIC0tZGFya0dyYXk6IHJnYigyMiwgMjcsIDM0KTtcXG4gIC0tbWlzc0JsdWU6IHJnYig3NiwgODQsIDE5MSk7XFxufVxcblxcbi8qY3JlZGl0IHRvIGh0dHBzOi8vZ29vZ2xlLXdlYmZvbnRzLWhlbHBlci5oZXJva3VhcHAuY29tLyBmb3IgYWxsb3dpbmcgbWUgdG8gaW1wb3J0IHRoZXNlIGZvbnRzIGF1dG9tYXRpY2FsbHkqL1xcbi8qIGF6ZXJldC1tb25vLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdBemVyZXQgTW9ubyc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLmVvdCcpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tcmVndWxhci5lb3Q/I2llZml4JylcXG4gICAgICBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgIC8qIElFNi1JRTggKi8gdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tcmVndWxhci53b2ZmMicpXFxuICAgICAgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgLyogTW9kZXJuIEJyb3dzZXJzICovIHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIudHRmJylcXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tcmVndWxhci5zdmcjQXplcmV0TW9ubycpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG59XFxuLyogYXplcmV0LW1vbm8tNzAwIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXplcmV0IE1vbm8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHNyYzogdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLmVvdCcpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLmVvdD8jaWVmaXgnKVxcbiAgICAgIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgLyogSUU2LUlFOCAqLyB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi03MDAud29mZjInKVxcbiAgICAgIGZvcm1hdCgnd29mZjInKSxcXG4gICAgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovIHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC53b2ZmJylcXG4gICAgICBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgLyogTW9kZXJuIEJyb3dzZXJzICovIHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC50dGYnKVxcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi03MDAuc3ZnI0F6ZXJldE1vbm8nKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxufVxcblxcbi8qIHJvYm90by0zMDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHNyYzogdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC5lb3QnKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgc3JjOiBsb2NhbCgnJyksXFxuICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgLyogSUU2LUlFOCAqLyB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tMzAwLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC53b2ZmJylcXG4gICAgICBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgLyogTW9kZXJuIEJyb3dzZXJzICovIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAudHRmJylcXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAuc3ZnI1JvYm90bycpXFxuICAgICAgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbn1cXG4vKiByb2JvdG8tcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci5lb3QnKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgc3JjOiBsb2NhbCgnJyksXFxuICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLmVvdD8jaWVmaXgnKVxcbiAgICAgIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgLyogSUU2LUlFOCAqLyB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLndvZmYnKVxcbiAgICAgIGZvcm1hdCgnd29mZicpLFxcbiAgICAvKiBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIudHRmJylcXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIuc3ZnI1JvYm90bycpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG59XFxuXFxuaHRtbCB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zaGlwR3JpZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ibG9jayB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHdpZHRoOiA0MnB4O1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uaGl0QmxvY2sge1xcbiAgYmFja2dyb3VuZDogcGluaztcXG59XFxuXFxuLmN1cnNvckJsb2NrIHtcXG4gIGJhY2tncm91bmQ6IGJsdWU7XFxufVxcblxcbi5taXNzQmxvY2sge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWlzc0JsdWUpO1xcbn1cXG5cXG4uc2VjdGlvblNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDI7XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZUZpbmlzaGVkU2VjdGlvbiB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG5cXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtCbGFjayk7XFxuXFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5yZXN0YXJ0IHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtHcmF5KTtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNoaXBUaXRsZSB7XFxuICBmb250LWZhbWlseTogJ0F6ZXJldCBNb25vJywgbW9ub3NwYWNlO1xcbn1cXG5cXG4uc2hpcFRleHQge1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uc2hpcFNlbGVjdGlvbiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0JsYWNrKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNDQwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJvdGF0ZUltYWdlIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDg3ZGVnKVxcbiAgICBicmlnaHRuZXNzKDEwMCUpO1xcbn1cXG5cXG4ucm90YXRlQnV0dG9uOmhvdmVyLFxcbi5yZXN0YXJ0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtCbGFjayk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yb3RhdGVCdXR0b24ge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBtYXJnaW46IDEwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2hpcEdyaWQge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtHcmF5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmJvYXJkVGl0bGUge1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDM5LCAzOSwgMzksIDAuNTc0KTtcXG4gIHotaW5kZXg6IDI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMiwgNCwgOCk7XFxufVxcblxcbi5tYWluU2VjdGlvbiB7XFxuICBtaW4taGVpZ2h0OiA5MHZoO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubWFpblRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGxpbmUtaGVpZ2h0OiAxMHZoO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbn1cXG5cXG4uY2VudGVyU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmdyaWQge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtHcmF5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uc2hpcE92ZXJsYXkge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi5ncmlkTGF5ZXIge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmdyaWRPdmVybGF5IHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogNDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbn1cXG5cXG4uc2hpcE92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuLmdyaWRPdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5zdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG4gIGxpbmUtaGVpZ2h0OiAxMHZoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWFpblRpdGxlIGgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXplcmV0IE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG5cXG4gIC5zaGlwR3JpZCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG5cXG4gIC5zaGlwT3ZlcmxheSxcXG4gIC5ncmlkT3ZlcmxheSxcXG4gIC5ncmlkTGF5ZXIge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICB9XFxuXFxuICAuc2hpcFNlbGVjdGlvbiB7XFxuICAgIHdpZHRoOiAzMTBweDtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICB9XFxuXFxuICAuYmxvY2sge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgfVxcblxcbiAgLnN0YXRzIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3MHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gICAgaGVpZ2h0OiAyMTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwR3JpZCB7XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gICAgaGVpZ2h0OiAyMTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwT3ZlcmxheSxcXG4gIC5ncmlkT3ZlcmxheSxcXG4gIC5ncmlkTGF5ZXIge1xcbiAgICB3aWR0aDogMjEwcHg7XFxuICAgIGhlaWdodDogMjEwcHg7XFxuICB9XFxuXFxuICAuc2hpcFNlbGVjdGlvbiB7XFxuICAgIHdpZHRoOiAyMjBweDtcXG4gIH1cXG5cXG4gIC5zaGlwVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgfVxcblxcbiAgLmJvYXJkVGl0bGUge1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gIH1cXG5cXG4gIC5ibG9jayB7XFxuICAgIHdpZHRoOiAyMXB4O1xcbiAgICBoZWlnaHQ6IDIxcHg7XFxuICB9XFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgfVxcblxcbiAgLnN0YXRzIHtcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2NXB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gIH1cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IDhweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xcbiAgLmdyaWQge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiA2cHg7XFxuICB9XFxuXFxuICAuc2hpcE92ZXJsYXksXFxuICAuZ3JpZE92ZXJsYXksXFxuICAuZ3JpZExheWVyIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgfVxcblxcbiAgLnNoaXBHcmlkIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgfVxcblxcbiAgLnNoaXBTZWxlY3Rpb24ge1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICB9XFxuXFxuICAuYmxvY2sge1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgfVxcblxcbiAgLnNoaXBUZXh0IHtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG4gIH1cXG5cXG4gIC5zaGlwVGl0bGUge1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gIH1cXG5cXG4gIC5zdGF0cyB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiVWkiLCJjdXJyZW50VWkiLCJhY3RpdmF0ZVVpIiwicmVmcmVzaGluZ0xvZ28iLCJEb20iLCJnZXRFbGVtZW50cyIsIm92ZXJsYXkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWN0aW9uU2NyZWVuIiwic2hpcFRleHQiLCJzaGlwR3JpZCIsInNoaXBMYXllciIsInJvdGF0ZUJ1dHRvbiIsImdyaWRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImhpdHMiLCJtaXNzZXMiLCJwbGF5ZXJHcmlkIiwicGxheWVySGl0cyIsInBsYXllck1pc3NlcyIsImNvbXB1dGVyR3JpZCIsImNvbXB1dGVySGl0cyIsImNvbXB1dGVyTWlzc2VzIiwiY29udGVudCIsImNvbXB1dGVyR3JpZExheWVyIiwicmVzdGFydCIsImdhbWVPdmVyVGV4dCIsImdhbWVGaW5pc2hlZFNlY3Rpb24iLCJnZXRQYWdlIiwiUG9zaXRpb24iLCJTaGlwIiwiUHJhY3RpY2FsIiwiR2FtZWJvYXJkIiwicG9zaXRpb24iLCJzaGlwIiwicHJhY3RpY2FsIiwiY3VycmVudFNoaXBzIiwicmFuZG9taXplIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQXhpcyIsImF4aWVzIiwibGVuZ3RoIiwicGxhY2VBbGxTaGlwcyIsInNoaXBzQXJyYXkiLCJjb21wYXJlU2hpcHNBcnJheSIsImxhdGVzdFNoaXBzQXJyYXkiLCJzaGlwcyIsInNoaXBzRG9Db2xsaWRlIiwiZm9yRWFjaCIsImxhdGVzdFNoaXBzIiwiYm9hdCIsImxhdGVzdEJvYXQiLCJjb21wYXJlUG9zaXRpb24iLCJnZXRUeXBlT2ZQbGFjZWRTaGlwIiwic2hpcEFycmF5Iiwic2hpcFR5cGVzIiwic2hpcFR5cGUiLCJzaGlwTGVuZ3RoIiwicGxheWVyUGxhY2VTaGlwIiwibG9jYXRpb24iLCJheGlzIiwiY3VycmVudEFycmF5IiwiY29weUFycmF5IiwibGF0ZXN0U2hpcCIsImNyZWF0ZVNoaXAiLCJpc0NvbGxpZGVkIiwicHVzaCIsInBsYWNlUmFuZG9tU2hpcHMiLCJyYW5kb21pemVyIiwicmFuZG9tQXhpZXMiLCJyYW5kb21Qb3NpdGlvbiIsImNyZWF0ZVBvc2l0aW9uIiwibGF0ZXN0TGVuZ3RoIiwicmFuZG9tU2hpcCIsInNoaXBDb2xsaWRlcyIsInBsYWNlU2hpcHNSYW5kb21seSIsImZpbHRlckF0dGFjayIsImFycmF5IiwiY3VycmVudEF0dGFjayIsImN1cnJlbnRBdHRhY2tBcnJheSIsImZpbHRlciIsIml0ZW0iLCJ4Q29vcmQiLCJ5Q29vcmQiLCJoYXNIaXRTaGlwIiwiaGl0UG9zaXRpb24iLCJsYXRlc3RIaXRzIiwibGF0ZXN0TWlzc2VzIiwiaGFzQmVlbkhpdCIsImhhc0JlZW5NaXNzIiwiYXR0YWNrU2hpcCIsImxhdGVzdFBvc2l0aW9uIiwiY3VycmVudEhpdHMiLCJjdXJyZW50TWlzc2VzIiwiaXNIaXQiLCJwb3NpdGlvbnNBcnJheSIsImhpdCIsImhpdEFycmF5Iiwic2hpcEFycmF5cyIsImZpbmFsT2JqZWN0IiwicmVjaWV2ZUF0dGFjayIsInJlc3VsdCIsImNyZWF0ZVJhbmRvbUNvb3JkcyIsImlzTW9ja1JhbmRvbSIsImNhbGxSYW5kb21pemVyIiwicmFuZG9tWCIsInJhbmRvbVkiLCJyZWNpZXZlUmFuZG9tQXR0YWNrIiwiaGFzSGl0IiwiaXNBbGxTdW5rIiwiaGFzU3Vua2VkIiwiaXNTdW5rIiwiZ2V0VmFsdWVzIiwiR2FtZSIsInBsYXllckJvYXJkIiwiY29tcHV0ZXJCb2FyZCIsInBsYXllckNoZWNrQm9hcmQiLCJjaGVja1NldHVwIiwicGxheWVyQ2hlY2tTaGlwcyIsInNldHVwR2FtZSIsInBsYXllckNoZWNrVmFsdWVzIiwiYXR0YWNrQm9hdHMiLCJjb29yZHMiLCJzZXR1cFNoaXAiLCJnYW1lSXNPdmVyIiwibWVzc2FnZSIsImdhbWVGaW5pc2hlZCIsImFycmFuZ2VCbG9ja3MiLCJtb3VzZVBvc2l0aW9uIiwiY3VycmVudFJvdGF0aW9uIiwiY2hlY2tib2FyZE9iamVjdHMiLCJzaGlwVHlwZU9iamVjdCIsImN1cnJlbnRTaGlwIiwiZ2V0R2FtZVZhbHVlcyIsImFjdGl2ZUdhbWUiLCJjaGVja091dE9mQm91bmNlIiwibmV3UG9zaXRpb24iLCJhZGRQb3NpdGlvbiIsInBvc2l0aW9uMSIsInBvc2l0aW9uMiIsIm11bHRpcGx5UG9zaXRpb24iLCJjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsIiwibmV3QXJyYXkiLCJpc09iamVjdCIsImN1cnJlbnRPYmplY3QiLCJjaGVja09iamVjdCIsIm9iamVjdDEiLCJvYmplY3QyIiwiaW5kZXgiLCJzZWNvbmRJbmRleCIsIm9iamVjdElzRXF1YWwiLCJjdXJyZW50T2JqZWN0MiIsImN1cnJlbnRPYmplY3RWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjdXJyZW50T2JqZWN0MlZhbHVlcyIsIm9iamVjdEtleXMiLCJrZXlzIiwib2JqZWN0S2V5czIiLCJrZXkiLCJpdGVtMiIsImNoZWNrT2JqZWN0Qm9vbCIsImdldEFkZGVkUG9zaXRpb24iLCJhZGRlZFBvc2l0aW9uIiwibGVuZ3RoMSIsInBvcHVsYXRlU2hpcHMiLCJjdXJyZW50UG9zaXRpb24iLCJsYXRlc3RBcnJheSIsImFycmF5TGVuZ3RoIiwicG9zIiwiZG9tIiwicmVuZGVyU3BlZWQiLCJibG9ja1NpemUiLCJwbGFjZWRTaGlwIiwibW91c2VCbG9ja0xvY2F0aW9uIiwiY3JlYXRlRG9tRWxlbWVudCIsImVsZW1lbnROYW1lIiwiY3JlYXRlRWxlbWVudCIsImdldE1vdXNlUG9zaXRpb24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsIm91dE9mQm91bmNlIiwiZmluZE1vdXNlUG9zaXRpb24iLCJldmVudCIsImN1cnJlbnRNb3VzZVBvc2l0aW9uIiwiZmluZFRvdWNoUG9zaXRpb24iLCJyZWN0IiwidGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG91Y2hPZmZzZXRYIiwidGFyZ2V0VG91Y2hlcyIsImNsaWVudFgiLCJ4IiwidG91Y2hPZmZzZXRZIiwiY2xpZW50WSIsInkiLCJ0b3VjaFBvc2l0aW9uIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiY2hhbmdlQmxvY2tTaXplIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJjcmVhdGVCbG9ja0VsZW1lbnQiLCJibG9ja0NsYXNzIiwiY3JlYXRlQmxvY2siLCJsYXRlc3RDbGFzcyIsImJsb2NrRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRpc2FibGVTdGFydGVyVWkiLCJjcmVhdGVTaGlwQmxvY2siLCJzaGlwUG9zaXRpb24iLCJsYXRlc3RCbG9ja1NpemUiLCJzaGlwQmxvY2siLCJyZWFsUG9zaXRpb25YIiwicmVhbFBvc2l0aW9uWSIsInN0eWxlIiwibGVmdCIsInRvcCIsInJlbmRlckFscmVhZHlQbGFjZWRTaGlwcyIsImdhbWVWYWx1ZXMiLCJjaGVja0JvYXJkU2hpcHMiLCJhcHBlbmRDaGlsZCIsInJlbmRlclBsYWNlZFNoaXAiLCJlbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hhbmdlQXhpcyIsIm1vdmVTaGlwQnlEaXJlY3Rpb24iLCJtb3VzZUxvY2F0aW9uIiwiY3VycmVudEF4aXMiLCJuZXdYUG9zaXRpb24iLCJuZXdZUG9zaXRpb24iLCJuZXdTaGlwUG9zaXRpb24iLCJwbGFjZVBsYXllclNoaXAiLCJsYXRlc3RBeGlzIiwibGF0ZXN0R2FtZSIsInBsYWNlUGxheWVyU2hpcEV2ZW50IiwicmVzZXRHYW1lIiwic2hpcFNlbGVjdGlvbiIsImRpc3BsYXkiLCJhZGRVaUV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVVaUV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFbmRpbmdFdmVudHMiLCJyZW1vdmVFbmRpbmdFdmVudHMiLCJyZW1vdmVHYW1lRXZlbnRzIiwid2luZG93IiwiY2hhbmdlTW91c2VQb3NpdGlvbiIsImNoYW5nZSIsImF0dGFja1NoaXBzIiwiZ2V0TWVzc2FnZSIsImFkZEdhbWVFdmVudHMiLCJjaGVja01vdXNlVGFyZ2V0IiwiZWxlbWVudENsYXNzIiwibW91c2VUYXJnZXQiLCJjbGFzc05hbWUiLCJyZW5kZXJTaGlwcyIsImdyaWQiLCJzaGlwR3JvdXAiLCJzaGlwRWxlbWVudCIsInJlbmRlckhpdHMiLCJyZW1vdmVDdXJzb3JFbGVtZW50IiwicmVuZGVyR3JpZHMiLCJibG9ja1NpemUyIiwicGxheWVyQm9hcmRWYWx1ZXMiLCJjb21wdXRlckJvYXJkVmFsdWVzIiwibW91c2VTaGlwIiwicmVuZGVyU3RhdHMiLCJ0ZXh0Q29udGVudCIsInJlbmRlckdhbWUiLCJzZXRUaW1lb3V0IiwiZ2FtZVN0YXR1cyIsInJlbW92ZVNoaXBTZWN0aW9uIiwiZWxlbWVudHMiLCJzdGFydEdhbWUiLCJyZW5kZXJTZWxlY3Rpb25HcmlkIiwiZ2FtZVZhbHVlIiwicGFnZUNvbnRlbnQiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==