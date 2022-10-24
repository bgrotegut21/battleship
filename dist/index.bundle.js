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
      shipTpe: 'gunboat',
      shipLength: 2
    }];
    return shipTypes[currentShips.length];
  };

  var playerPlaceShip = function playerPlaceShip(location, axis) {
    var currentArray = practical.copyArray(currentShips);
    var shipType = getTypeOfPlacedShip(currentArray);
    var currentShip = ship.createShip(location, shipType.shipLength, axis);
    var isCollided = compareShipsArray(currentArray, currentShip);

    if (currentArray.length === 5 || !currentShip || isCollided) {
      return currentArray;
    }

    currentArray.push(currentShip);
    currentShips = currentArray;
    return currentArray;
  };

  var placeRandomShips = function placeRandomShips(shipsArray, randomizer, randomAxies) {
    var latestShipsArray = shipsArray;
    var randomPosition = position.createPosition(randomizer(), randomizer());
    var shipType = getTypeOfPlacedShip(latestShipsArray);

    if (!shipType) {
      console.log(shipType);
      console.log(latestShipsArray, 'the latest ships array');
      return latestShipsArray;
    }

    var latestLength = shipType.shipLength;
    var randomShip = ship.createShip(randomPosition, latestLength, randomAxies());

    if (randomShip.length > 0) {
      var shipCollides = compareShipsArray(latestShipsArray, randomShip);
      if (!shipCollides) latestShipsArray.push(randomShip);
    }

    2;
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





var Ui = function Ui() {
  var dom = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var position = (0,_position_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var renderSpeed = 1;
  var blockSize = 42;
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
    var gameValues = _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.getGameValues();
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
    placePlayerShip(placedShip, axis, _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame);
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
    _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.attackBoats(mouseBlockLocation);
  };

  var addGameEvents = function addGameEvents() {
    removeUiEvents();
    var element = dom.getElements();
    window.addEventListener('mousemove', changeMousePosition);
    element.computerGridLayer.addEventListener('mousemove', findMousePosition);
    element.computerGridLayer.addEventListener('click', attackShips);
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
  }; // WORK ON THIS AND FIX RANDOM LENGTH


  var renderGrids = function renderGrids(blockSize2, mousePosition) {
    var gameValues = _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.getGameValues();

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
    var gameValues = _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.getGameValues();

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
      var gameStatus = _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.gameIsOver();
      var latestBlockSize = changeBlockSize(window.matchMedia);
      renderGrids(latestBlockSize, mouseBlockLocation);
      renderStats();
      if (!gameStatus.gameFinished) renderGame(latestBlockSize);
      renderGame(latestBlockSize);
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
    _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.setupGame();
    addGameEvents();
    renderGame();
  };

  var renderSelectionGrid = function renderSelectionGrid() {
    setTimeout(function () {
      var gameValue = _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.getGameValues();
      var checkBoardShips = gameValue.playerCheckBoard.getValues().currentShips;
      changeBlockSize(window.matchMedia);
      if (_main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.checkSetup(gameValue.playerCheckBoard)) disableStarterUi();

      if (mouseBlockLocation) {
        var currentShip = _main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.arrangeBlocks(mouseBlockLocation, axis);

        if (!currentShip && placedShip) {
          currentShip = moveShipByDirection(mouseBlockLocation, placedShip, axis);
        }

        if (currentShip) placedShip = currentShip; // console.log(placedShip, 'the current placed ship');

        if (placedShip) renderPlacedShip(blockSize);
      }

      if (!_main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.checkSetup(checkBoardShips)) renderSelectionGrid();else startGame(blockSize);
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
    addUiEvents();
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --darkBlack: rgb(2, 4, 8);\n  --darkGray: rgb(22, 27, 34);\n  --missBlue: rgb(76, 84, 191);\n}\n\n/*credit to https://google-webfonts-helper.herokuapp.com/ for allowing me to import these fonts automatically*/\n/* azeret-mono-regular - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")\n      format('woff2'),\n    /* Super Modern Browsers */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg'); /* Legacy iOS */\n}\n/* azeret-mono-700 - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 700;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ")\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ")\n      format('woff2'),\n    /* Super Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ")\n      format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format('svg'); /* Legacy iOS */\n}\n\n/* roboto-300 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format('woff2'),\n    /* Super Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ")\n      format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */ url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ")\n      format('svg'); /* Legacy iOS */\n}\n/* roboto-regular - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ")\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ") format('woff2'),\n    /* Super Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ")\n      format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ") format('svg'); /* Legacy iOS */\n}\n\nhtml {\n  min-height: 100%;\n}\n\nbody {\n  min-height: 100%;\n}\n\n.content {\n  min-height: 100%;\n  font-family: 'Roboto', sans-serif;\n}\n\n.shipGrid {\n  position: relative;\n}\n\n.block {\n  background: white;\n  width: 42px;\n  height: 42px;\n  border: none;\n  position: absolute;\n}\n\n.hitBlock {\n  background: pink;\n}\n\n.cursorBlock {\n  background: blue;\n}\n\n.missBlock {\n  background: var(--missBlue);\n}\n\n.sectionScreen {\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n\n  position: fixed;\n\n  display: flex;\n\n  justify-content: center;\n  align-items: center;\n}\n\n.shipTitle {\n  font-family: 'Azeret Mono', monospace;\n}\n\n.shipText {\n  margin: 10px;\n}\n\n.shipSelection {\n  padding: 10px;\n  color: white;\n  background: var(--darkBlack);\n  display: flex;\n  width: 440px;\n  flex-direction: column;\n  align-items: center;\n}\n\n.rotateImage {\n  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(87deg)\n    brightness(100%);\n}\n\n.rotateButton:hover {\n  background: var(--darkBlack);\n  cursor: pointer;\n}\n\n.rotateButton {\n  background: var(--darkGray);\n  border: 1px solid white;\n  margin: 10px;\n  height: 50px;\n  width: 50px;\n  line-height: 50px;\n  text-align: center;\n}\n\n.shipGrid {\n  width: 420px;\n  height: 420px;\n  background: var(--darkGray);\n  border: 1px solid;\n  padding: 0;\n  margin: 0;\n}\n\n.boardTitle {\n  margin: 10px;\n}\n\n.overlay {\n  background: rgba(39, 39, 39, 0.574);\n  z-index: 2;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.content {\n  background: rgb(2, 4, 8);\n}\n\n.mainSection {\n  min-height: 90vh;\n  color: white;\n  position: relative;\n}\n\n.mainTitle {\n  text-align: center;\n  height: 10vh;\n  line-height: 10vh;\n  background: var(--darkGray);\n}\n\n.centerSection {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  justify-content: center;\n\n  align-items: center;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px;\n}\n\n.grid {\n  width: 420px;\n  height: 420px;\n  position: relative;\n  background: var(--darkGray);\n  border: 1px solid white;\n}\n.shipOverlay {\n  width: 420px;\n  height: 420px;\n  border: 1px solid blue;\n\n  position: fixed;\n}\n\n.gridLayer {\n  width: 420px;\n  height: 420px;\n  position: relative;\n}\n\n.gridOverlay {\n  width: 420px;\n  height: 420px;\n  border: 1px solid blue;\n}\n\n.shipOverlay {\n  position: fixed;\n  z-index: 3;\n}\n\n.gridOverlay {\n  position: absolute;\n\n  z-index: 1;\n}\n\n.stats {\n  display: flex;\n  width: 420px;\n  justify-content: space-around;\n  margin: 20px;\n}\n\n.footer {\n  background: var(--darkGray);\n  height: 10vh;\n  color: white;\n  word-wrap: break-word;\n  font-size: small;\n  line-height: 10vh;\n  text-align: center;\n}\n\n.mainTitle h1 {\n  font-family: 'Azeret Mono', monospace;\n}\n\n@media only screen and (max-width: 600px) {\n  .footer {\n    font-size: small;\n  }\n}\n\n@media only screen and (max-width: 960px) {\n  .grid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipGrid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipSelection {\n    width: 310px;\n  }\n\n  .footer {\n    font-size: x-small;\n  }\n\n  .block {\n    width: 30px;\n    height: 30px;\n  }\n\n  .stats {\n    width: 300px;\n  }\n}\n\n@media only screen and (max-width: 470px) {\n  .grid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipGrid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipSelection {\n    width: 220px;\n  }\n\n  .shipText {\n    font-size: medium;\n  }\n\n  .boardTitle {\n    font-size: medium;\n  }\n\n  .block {\n    width: 21px;\n    height: 21px;\n  }\n  .footer {\n    font-size: x-small;\n  }\n\n  .stats {\n    width: 210px;\n  }\n}\n\n@media only screen and (max-width: 365px) {\n  .footer {\n    font-size: xx-small;\n  }\n  .footer {\n    font-size: 8px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .grid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .footer {\n    font-size: 6px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipGrid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipSelection {\n    width: 160px;\n  }\n\n  .block {\n    width: 15px;\n    height: 15px;\n  }\n\n  .shipText {\n    font-size: small;\n  }\n\n  .shipTitle {\n    font-size: medium;\n  }\n\n  .stats {\n    width: 150px;\n    font-size: 12px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --darkBlack: rgb(2, 4, 8);\n  --darkGray: rgb(22, 27, 34);\n  --missBlue: rgb(76, 84, 191);\n}\n\n/*credit to https://google-webfonts-helper.herokuapp.com/ for allowing me to import these fonts automatically*/\n/* azeret-mono-regular - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url('../fonts/azeret-mono-v11-latin-regular.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/azeret-mono-v11-latin-regular.eot?#iefix')\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/azeret-mono-v11-latin-regular.woff2')\n      format('woff2'),\n    /* Super Modern Browsers */\n      url('../fonts/azeret-mono-v11-latin-regular.woff') format('woff'),\n    /* Modern Browsers */ url('../fonts/azeret-mono-v11-latin-regular.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url('../fonts/azeret-mono-v11-latin-regular.svg#AzeretMono') format('svg'); /* Legacy iOS */\n}\n/* azeret-mono-700 - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 700;\n  src: url('../fonts/azeret-mono-v11-latin-700.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/azeret-mono-v11-latin-700.eot?#iefix')\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/azeret-mono-v11-latin-700.woff2')\n      format('woff2'),\n    /* Super Modern Browsers */ url('../fonts/azeret-mono-v11-latin-700.woff')\n      format('woff'),\n    /* Modern Browsers */ url('../fonts/azeret-mono-v11-latin-700.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url('../fonts/azeret-mono-v11-latin-700.svg#AzeretMono') format('svg'); /* Legacy iOS */\n}\n\n/* roboto-300 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url('../fonts/roboto-v30-latin-300.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/roboto-v30-latin-300.eot?#iefix') format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/roboto-v30-latin-300.woff2') format('woff2'),\n    /* Super Modern Browsers */ url('../fonts/roboto-v30-latin-300.woff')\n      format('woff'),\n    /* Modern Browsers */ url('../fonts/roboto-v30-latin-300.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */ url('../fonts/roboto-v30-latin-300.svg#Roboto')\n      format('svg'); /* Legacy iOS */\n}\n/* roboto-regular - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url('../fonts/roboto-v30-latin-regular.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/roboto-v30-latin-regular.eot?#iefix')\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/roboto-v30-latin-regular.woff2') format('woff2'),\n    /* Super Modern Browsers */ url('../fonts/roboto-v30-latin-regular.woff')\n      format('woff'),\n    /* Modern Browsers */ url('../fonts/roboto-v30-latin-regular.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url('../fonts/roboto-v30-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */\n}\n\nhtml {\n  min-height: 100%;\n}\n\nbody {\n  min-height: 100%;\n}\n\n.content {\n  min-height: 100%;\n  font-family: 'Roboto', sans-serif;\n}\n\n.shipGrid {\n  position: relative;\n}\n\n.block {\n  background: white;\n  width: 42px;\n  height: 42px;\n  border: none;\n  position: absolute;\n}\n\n.hitBlock {\n  background: pink;\n}\n\n.cursorBlock {\n  background: blue;\n}\n\n.missBlock {\n  background: var(--missBlue);\n}\n\n.sectionScreen {\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n\n  position: fixed;\n\n  display: flex;\n\n  justify-content: center;\n  align-items: center;\n}\n\n.shipTitle {\n  font-family: 'Azeret Mono', monospace;\n}\n\n.shipText {\n  margin: 10px;\n}\n\n.shipSelection {\n  padding: 10px;\n  color: white;\n  background: var(--darkBlack);\n  display: flex;\n  width: 440px;\n  flex-direction: column;\n  align-items: center;\n}\n\n.rotateImage {\n  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(87deg)\n    brightness(100%);\n}\n\n.rotateButton:hover {\n  background: var(--darkBlack);\n  cursor: pointer;\n}\n\n.rotateButton {\n  background: var(--darkGray);\n  border: 1px solid white;\n  margin: 10px;\n  height: 50px;\n  width: 50px;\n  line-height: 50px;\n  text-align: center;\n}\n\n.shipGrid {\n  width: 420px;\n  height: 420px;\n  background: var(--darkGray);\n  border: 1px solid;\n  padding: 0;\n  margin: 0;\n}\n\n.boardTitle {\n  margin: 10px;\n}\n\n.overlay {\n  background: rgba(39, 39, 39, 0.574);\n  z-index: 2;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.content {\n  background: rgb(2, 4, 8);\n}\n\n.mainSection {\n  min-height: 90vh;\n  color: white;\n  position: relative;\n}\n\n.mainTitle {\n  text-align: center;\n  height: 10vh;\n  line-height: 10vh;\n  background: var(--darkGray);\n}\n\n.centerSection {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  justify-content: center;\n\n  align-items: center;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px;\n}\n\n.grid {\n  width: 420px;\n  height: 420px;\n  position: relative;\n  background: var(--darkGray);\n  border: 1px solid white;\n}\n.shipOverlay {\n  width: 420px;\n  height: 420px;\n  border: 1px solid blue;\n\n  position: fixed;\n}\n\n.gridLayer {\n  width: 420px;\n  height: 420px;\n  position: relative;\n}\n\n.gridOverlay {\n  width: 420px;\n  height: 420px;\n  border: 1px solid blue;\n}\n\n.shipOverlay {\n  position: fixed;\n  z-index: 3;\n}\n\n.gridOverlay {\n  position: absolute;\n\n  z-index: 1;\n}\n\n.stats {\n  display: flex;\n  width: 420px;\n  justify-content: space-around;\n  margin: 20px;\n}\n\n.footer {\n  background: var(--darkGray);\n  height: 10vh;\n  color: white;\n  word-wrap: break-word;\n  font-size: small;\n  line-height: 10vh;\n  text-align: center;\n}\n\n.mainTitle h1 {\n  font-family: 'Azeret Mono', monospace;\n}\n\n@media only screen and (max-width: 600px) {\n  .footer {\n    font-size: small;\n  }\n}\n\n@media only screen and (max-width: 960px) {\n  .grid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipGrid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipSelection {\n    width: 310px;\n  }\n\n  .footer {\n    font-size: x-small;\n  }\n\n  .block {\n    width: 30px;\n    height: 30px;\n  }\n\n  .stats {\n    width: 300px;\n  }\n}\n\n@media only screen and (max-width: 470px) {\n  .grid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipGrid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipSelection {\n    width: 220px;\n  }\n\n  .shipText {\n    font-size: medium;\n  }\n\n  .boardTitle {\n    font-size: medium;\n  }\n\n  .block {\n    width: 21px;\n    height: 21px;\n  }\n  .footer {\n    font-size: x-small;\n  }\n\n  .stats {\n    width: 210px;\n  }\n}\n\n@media only screen and (max-width: 365px) {\n  .footer {\n    font-size: xx-small;\n  }\n  .footer {\n    font-size: 8px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .grid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .footer {\n    font-size: 6px;\n  }\n\n  .shipOverlay,\n  .gridOverlay,\n  .gridLayer {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipGrid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipSelection {\n    width: 160px;\n  }\n\n  .block {\n    width: 15px;\n    height: 15px;\n  }\n\n  .shipText {\n    font-size: small;\n  }\n\n  .shipTitle {\n    font-size: medium;\n  }\n\n  .stats {\n    width: 150px;\n    font-size: 12px;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsaUJBQWlCLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLHlCQUF5QixjQUFjLGlCQUFpQixPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FB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RyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcHJhY3RpY2FsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy91aS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5jc3MnO1xuXG5pbXBvcnQgVWkgZnJvbSAnLi9zY3JpcHRzL3VpLmpzJztcblxuY29uc3QgY3VycmVudFVpID0gVWkoKTtcblxuY3VycmVudFVpLmFjdGl2YXRlVWkoKTtcbiIsImltcG9ydCByZWZyZXNoaW5nTG9nbyBmcm9tICcuLi9pbWFnZXMvcmVmcmVzaExvZ28uc3ZnJztcblxuY29uc3QgRG9tID0gKCkgPT4ge1xuICBjb25zdCBnZXRFbGVtZW50cyA9ICgpID0+ICh7XG4gICAgb3ZlcmxheTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKSxcbiAgICBzZWN0aW9uU2NyZWVuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvblNjcmVlbicpLFxuICAgIHNoaXBUZXh0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcFRleHQnKSxcbiAgICBzaGlwR3JpZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBHcmlkJyksXG4gICAgc2hpcExheWVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcExheWVyJyksXG4gICAgcm90YXRlQnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlQnV0dG9uJyksXG4gICAgZ3JpZHM6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQnKSksXG4gICAgaGl0czogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGl0cycpKSxcbiAgICBtaXNzZXM6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1pc3NlcycpKSxcbiAgICBwbGF5ZXJHcmlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyR3JpZCcpLFxuICAgIHBsYXllckhpdHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJIaXRzJyksXG4gICAgcGxheWVyTWlzc2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyTWlzc2VzJyksXG4gICAgY29tcHV0ZXJHcmlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXJHcmlkJyksXG4gICAgY29tcHV0ZXJIaXRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXJIaXRzJyksXG4gICAgY29tcHV0ZXJNaXNzZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlck1pc3NlcycpLFxuICAgIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JyksXG4gICAgY29tcHV0ZXJHcmlkTGF5ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlckdyaWRMYXllcicpLFxuICB9KTtcblxuICBjb25zdCBnZXRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBTZWxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwic2hpcFRpdGxlXCI+QkFUVExFU0hJUDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInNoaXBUZXh0XCI+UGxhY2UgeW91ciBCYXR0bGVzaGlwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBMYXllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwT3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwR3JpZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3RhdGVCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdGF0ZUltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7cmVmcmVzaGluZ0xvZ299XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlJvdGF0ZSBJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzPVwibWFpblNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluVGl0bGVcIj48aDE+QkFUVExFU0hJUDwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyQm9hcmQgYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJib2FyZFRpdGxlXCI+UGxheWVyIEJvYXJkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZExheWVyIHBsYXllckdyaWRMYXllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRPdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyR3JpZCBncmlkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllclN0YXRzIHN0YXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwbGF5ZXJIaXRzIGhpdHNcIj5IaXRzIDA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicGxheWVyTWlzc2VzIG1pc3Nlc1wiPk1pc3NlcyAwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXB1dGVyQm9hcmQgYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJib2FyZFRpdGxlXCI+Q29tcHV0ZXIgQm9hcmQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkTGF5ZXIgY29tcHV0ZXJHcmlkTGF5ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkT3ZlcmxheSBjb21wdXRlckdyaWRPdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcHV0ZXJHcmlkIGdyaWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcHV0ZXJTdGF0cyBzdGF0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY29tcHV0ZXJIaXRzIGhpdHNcIj5IaXRzIDA8L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjb21wdXRlck1pc3NlcyBtaXNzZXNcIj5NaXNzZXMgMDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvcHlyaWdodE1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Vic2l0ZSBhbmQgY29kZSBhcmUgbWFkZSBieSBCcmF5ZGVuIEdyb3RlZ3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgIHJldHVybiBjb250ZW50O1xuICB9O1xuXG4gIHJldHVybiB7IGdldFBhZ2UsIGdldEVsZW1lbnRzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb207XG4iLCJpbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IFByYWN0aWNhbCBmcm9tICcuL3ByYWN0aWNhbC5qcyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuICBjb25zdCBzaGlwID0gU2hpcCgpO1xuICBjb25zdCBwcmFjdGljYWwgPSBQcmFjdGljYWwoKTtcblxuICBsZXQgY3VycmVudFNoaXBzID0gW107XG4gIGxldCBoaXRzID0gW107XG4gIGxldCBtaXNzZXMgPSBbXTtcblxuICBjb25zdCByYW5kb21pemUgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgY29uc3QgcmFuZG9tQXhpcyA9ICgpID0+IHtcbiAgICBjb25zdCBheGllcyA9IFsneCcsICd5J107XG4gICAgcmV0dXJuIGF4aWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF4aWVzLmxlbmd0aCldO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlQWxsU2hpcHMgPSAoc2hpcHNBcnJheSkgPT4ge1xuICAgIGN1cnJlbnRTaGlwcyA9IHNoaXBzQXJyYXk7XG4gICAgcmV0dXJuIGN1cnJlbnRTaGlwcztcbiAgfTtcblxuICBjb25zdCBjb21wYXJlU2hpcHNBcnJheSA9IChsYXRlc3RTaGlwc0FycmF5LCBzaGlwcykgPT4ge1xuICAgIGxldCBzaGlwc0RvQ29sbGlkZSA9IGZhbHNlO1xuICAgIGlmICghc2hpcHMpIHJldHVybiBzaGlwc0RvQ29sbGlkZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGxhdGVzdFNoaXBzQXJyYXksICd0aGUgY3VycmVlbnQgc2hpcHMgYXJyYXknKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwcywgJ3RoZSBjdXJyZW50IHNoaXBzJyk7XG5cbiAgICBsYXRlc3RTaGlwc0FycmF5LmZvckVhY2goKGxhdGVzdFNoaXBzKSA9PiB7XG4gICAgICBsYXRlc3RTaGlwcy5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKGxhdGVzdEJvYXQpID0+IHtcbiAgICAgICAgICBpZiAocG9zaXRpb24uY29tcGFyZVBvc2l0aW9uKGJvYXQsIGxhdGVzdEJvYXQpKSB7XG4gICAgICAgICAgICBzaGlwc0RvQ29sbGlkZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBzRG9Db2xsaWRlO1xuICB9O1xuXG4gIGNvbnN0IGdldFR5cGVPZlBsYWNlZFNoaXAgPSAoc2hpcEFycmF5KSA9PiB7XG4gICAgaWYgKHNoaXBBcnJheS5sZW5ndGggPT09IDUpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHNoaXBUeXBlcyA9IFtcbiAgICAgIHsgc2hpcFR5cGU6ICdjYXJyaWVyJywgc2hpcExlbmd0aDogNSB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2JhdHRsZXNoaXAnLCBzaGlwTGVuZ3RoOiA0IH0sXG4gICAgICB7IHNoaXBUeXBlOiAnZGVzdG95ZXInLCBzaGlwTGVuZ3RoOiAzIH0sXG4gICAgICB7IHNoaXBUeXBlOiAnc3VibWFyaW5lJywgc2hpcExlbmd0aDogMyB9LFxuICAgICAgeyBzaGlwVHBlOiAnZ3VuYm9hdCcsIHNoaXBMZW5ndGg6IDIgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIHNoaXBUeXBlc1tjdXJyZW50U2hpcHMubGVuZ3RoXTtcbiAgfTtcblxuICBjb25zdCBwbGF5ZXJQbGFjZVNoaXAgPSAobG9jYXRpb24sIGF4aXMpID0+IHtcbiAgICBjb25zdCBjdXJyZW50QXJyYXkgPSBwcmFjdGljYWwuY29weUFycmF5KGN1cnJlbnRTaGlwcyk7XG5cbiAgICBjb25zdCBzaGlwVHlwZSA9IGdldFR5cGVPZlBsYWNlZFNoaXAoY3VycmVudEFycmF5KTtcblxuICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gc2hpcC5jcmVhdGVTaGlwKGxvY2F0aW9uLCBzaGlwVHlwZS5zaGlwTGVuZ3RoLCBheGlzKTtcblxuICAgIGNvbnN0IGlzQ29sbGlkZWQgPSBjb21wYXJlU2hpcHNBcnJheShjdXJyZW50QXJyYXksIGN1cnJlbnRTaGlwKTtcblxuICAgIGlmIChjdXJyZW50QXJyYXkubGVuZ3RoID09PSA1IHx8ICFjdXJyZW50U2hpcCB8fCBpc0NvbGxpZGVkKSB7XG4gICAgICByZXR1cm4gY3VycmVudEFycmF5O1xuICAgIH1cblxuICAgIGN1cnJlbnRBcnJheS5wdXNoKGN1cnJlbnRTaGlwKTtcbiAgICBjdXJyZW50U2hpcHMgPSBjdXJyZW50QXJyYXk7XG4gICAgcmV0dXJuIGN1cnJlbnRBcnJheTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVJhbmRvbVNoaXBzID0gKHNoaXBzQXJyYXksIHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKSA9PiB7XG4gICAgY29uc3QgbGF0ZXN0U2hpcHNBcnJheSA9IHNoaXBzQXJyYXk7XG4gICAgY29uc3QgcmFuZG9tUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihyYW5kb21pemVyKCksIHJhbmRvbWl6ZXIoKSk7XG4gICAgY29uc3Qgc2hpcFR5cGUgPSBnZXRUeXBlT2ZQbGFjZWRTaGlwKGxhdGVzdFNoaXBzQXJyYXkpO1xuICAgIGlmICghc2hpcFR5cGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKHNoaXBUeXBlKTtcbiAgICAgIGNvbnNvbGUubG9nKGxhdGVzdFNoaXBzQXJyYXksICd0aGUgbGF0ZXN0IHNoaXBzIGFycmF5Jyk7XG5cbiAgICAgIHJldHVybiBsYXRlc3RTaGlwc0FycmF5O1xuICAgIH1cblxuICAgIGNvbnN0IGxhdGVzdExlbmd0aCA9IHNoaXBUeXBlLnNoaXBMZW5ndGg7XG5cbiAgICBjb25zdCByYW5kb21TaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgcmFuZG9tUG9zaXRpb24sXG4gICAgICBsYXRlc3RMZW5ndGgsXG4gICAgICByYW5kb21BeGllcygpXG4gICAgKTtcblxuICAgIGlmIChyYW5kb21TaGlwLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNoaXBDb2xsaWRlcyA9IGNvbXBhcmVTaGlwc0FycmF5KGxhdGVzdFNoaXBzQXJyYXksIHJhbmRvbVNoaXApO1xuICAgICAgaWYgKCFzaGlwQ29sbGlkZXMpIGxhdGVzdFNoaXBzQXJyYXkucHVzaChyYW5kb21TaGlwKTtcbiAgICB9XG4gICAgMjtcbiAgICByZXR1cm4gcGxhY2VSYW5kb21TaGlwcyhsYXRlc3RTaGlwc0FycmF5LCByYW5kb21pemVyLCByYW5kb21BeGllcyk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwc1JhbmRvbWx5ID0gKHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKSA9PiB7XG4gICAgY29uc3Qgc2hpcHNBcnJheSA9IHBsYWNlUmFuZG9tU2hpcHMoW10sIHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKTtcbiAgICBjdXJyZW50U2hpcHMgPSBzaGlwc0FycmF5O1xuXG4gICAgcmV0dXJuIHNoaXBzQXJyYXk7XG4gIH07XG4gIGNvbnN0IGZpbHRlckF0dGFjayA9IChhcnJheSwgY3VycmVudEF0dGFjaykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRBdHRhY2tBcnJheSA9IGFycmF5LmZpbHRlcihcbiAgICAgIChpdGVtKSA9PlxuICAgICAgICBpdGVtLnhDb29yZCA9PT0gY3VycmVudEF0dGFjay54Q29vcmQgJiZcbiAgICAgICAgaXRlbS55Q29vcmQgPT09IGN1cnJlbnRBdHRhY2sueUNvb3JkXG4gICAgKTtcblxuICAgIHJldHVybiBjdXJyZW50QXR0YWNrQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgaGFzSGl0U2hpcCA9IChoaXRQb3NpdGlvbiwgbGF0ZXN0SGl0cywgbGF0ZXN0TWlzc2VzKSA9PiB7XG4gICAgY29uc3QgaGFzQmVlbkhpdCA9IGZpbHRlckF0dGFjayhsYXRlc3RIaXRzLCBoaXRQb3NpdGlvbik7XG4gICAgY29uc3QgaGFzQmVlbk1pc3MgPSBmaWx0ZXJBdHRhY2sobGF0ZXN0TWlzc2VzLCBoaXRQb3NpdGlvbik7XG5cbiAgICBpZiAoaGFzQmVlbkhpdC5sZW5ndGggPiAwIHx8IGhhc0JlZW5NaXNzLmxlbmd0aCA+IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tTaGlwID0gKGxhdGVzdFBvc2l0aW9uLCBzaGlwcywgY3VycmVudEhpdHMsIGN1cnJlbnRNaXNzZXMpID0+IHtcbiAgICBsZXQgaXNIaXQgPSBmYWxzZTtcbiAgICBjb25zdCBsYXRlc3RTaGlwc0FycmF5ID0gW107XG4gICAgY29uc3QgbGF0ZXN0SGl0cyA9IGN1cnJlbnRIaXRzO1xuICAgIGNvbnN0IGxhdGVzdE1pc3NlcyA9IGN1cnJlbnRNaXNzZXM7XG5cbiAgICBpZiAoIWxhdGVzdFBvc2l0aW9uKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGhhc0hpdFNoaXAobGF0ZXN0UG9zaXRpb24sIGN1cnJlbnRIaXRzLCBjdXJyZW50TWlzc2VzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcEFycmF5KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb25zQXJyYXkgPSBwcmFjdGljYWwuY29weUFycmF5KHNoaXBBcnJheSk7XG4gICAgICBjb25zdCBoaXQgPSBzaGlwLmhpdChwb3NpdGlvbnNBcnJheSwgbGF0ZXN0UG9zaXRpb24pO1xuXG4gICAgICBpZiAoaGl0LmhpdEFycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpc0hpdCA9IHRydWU7XG4gICAgICAgIHBvc2l0aW9uc0FycmF5ID0gaGl0LnNoaXBBcnJheXM7XG4gICAgICAgIGxhdGVzdEhpdHMucHVzaChoaXQuaGl0QXJyYXlbMF0pO1xuICAgICAgfVxuICAgICAgbGF0ZXN0U2hpcHNBcnJheS5wdXNoKHBvc2l0aW9uc0FycmF5KTtcbiAgICB9KTtcbiAgICBpZiAoIWlzSGl0KSBsYXRlc3RNaXNzZXMucHVzaChsYXRlc3RQb3NpdGlvbik7XG5cbiAgICBjb25zdCBmaW5hbE9iamVjdCA9IHtcbiAgICAgIGlzSGl0LFxuICAgICAgbGF0ZXN0U2hpcHNBcnJheSxcbiAgICAgIGxhdGVzdEhpdHMsXG4gICAgICBsYXRlc3RNaXNzZXMsXG4gICAgfTtcblxuICAgIHJldHVybiBmaW5hbE9iamVjdDtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlQXR0YWNrID0gKGxhdGVzdFBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXR0YWNrU2hpcChsYXRlc3RQb3NpdGlvbiwgY3VycmVudFNoaXBzLCBoaXRzLCBtaXNzZXMpO1xuICAgIGlmICghcmVzdWx0KSByZXR1cm4gZmFsc2U7XG5cbiAgICBjdXJyZW50U2hpcHMgPSByZXN1bHQubGF0ZXN0U2hpcHNBcnJheTtcbiAgICBoaXRzID0gcmVzdWx0LmxhdGVzdEhpdHM7XG4gICAgbWlzc2VzID0gcmVzdWx0LmxhdGVzdE1pc3NlcztcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUmFuZG9tQ29vcmRzID0gKHJhbmRvbWl6ZXIpID0+IHtcbiAgICBsZXQgcmFuZG9tUG9zaXRpb247XG5cbiAgICBpZiAocmFuZG9taXplci5pc01vY2tSYW5kb20pIHtcbiAgICAgIHJhbmRvbVBvc2l0aW9uID0gcmFuZG9taXplci5jYWxsUmFuZG9taXplcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByYW5kb21YID0gcmFuZG9taXplcigpO1xuICAgICAgY29uc3QgcmFuZG9tWSA9IHJhbmRvbWl6ZXIoKTtcbiAgICAgIHJhbmRvbVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24ocmFuZG9tWCwgcmFuZG9tWSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmRvbVBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IHJlY2lldmVSYW5kb21BdHRhY2sgPSAocmFuZG9taXplcikgPT4ge1xuICAgIGNvbnN0IHJhbmRvbVBvc2l0aW9uID0gY3JlYXRlUmFuZG9tQ29vcmRzKHJhbmRvbWl6ZXIpO1xuICAgIGNvbnN0IGhhc0hpdCA9IGhhc0hpdFNoaXAocmFuZG9tUG9zaXRpb24sIGhpdHMsIG1pc3Nlcyk7XG5cbiAgICBpZiAoaGFzSGl0KSByZXR1cm4gcmVjaWV2ZVJhbmRvbUF0dGFjayhyYW5kb21pemVyKTtcblxuICAgIHJldHVybiByZWNpZXZlQXR0YWNrKHJhbmRvbVBvc2l0aW9uKTtcbiAgfTtcblxuICBjb25zdCBpc0FsbFN1bmsgPSAoKSA9PiB7XG4gICAgbGV0IGhhc1N1bmtlZCA9IHRydWU7XG4gICAgY3VycmVudFNoaXBzLmZvckVhY2goKHNoaXBzKSA9PiB7XG4gICAgICBpZiAoIXNoaXAuaXNTdW5rKHNoaXBzKSkge1xuICAgICAgICBoYXNTdW5rZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBoYXNTdW5rZWQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsdWVzID0gKCkgPT4gKHtcbiAgICBjdXJyZW50U2hpcHMsXG4gICAgaGl0cyxcbiAgICBtaXNzZXMsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgYXR0YWNrU2hpcCxcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIGlzQWxsU3VuayxcbiAgICBwbGFjZVNoaXBzUmFuZG9tbHksXG4gICAgcGxheWVyUGxhY2VTaGlwLFxuICAgIHBsYWNlQWxsU2hpcHMsXG4gICAgcmFuZG9taXplLFxuICAgIHJlY2lldmVSYW5kb21BdHRhY2ssXG4gICAgcmFuZG9tQXhpcyxcbiAgICBnZXRWYWx1ZXMsXG4gICAgZ2V0VHlwZU9mUGxhY2VkU2hpcCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuXG5jb25zdCBHYW1lID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IHBsYXllckNoZWNrQm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG5cbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcblxuICBjb25zdCByYW5kb21pemVyID0gY29tcHV0ZXJCb2FyZC5yYW5kb21pemU7XG4gIGNvbnN0IHJhbmRvbUF4aWVzID0gY29tcHV0ZXJCb2FyZC5yYW5kb21BeGlzO1xuXG4gIGNvbnN0IGNoZWNrU2V0dXAgPSAocGxheWVyQ2hlY2tTaGlwcykgPT4ge1xuICAgIGlmIChwbGF5ZXJDaGVja1NoaXBzLmxlbmd0aCA9PT0gNSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwR2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJDaGVja1ZhbHVlcyA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCk7XG5cbiAgICBpZiAoIWNoZWNrU2V0dXAocGxheWVyQ2hlY2tWYWx1ZXMuY3VycmVudFNoaXBzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcGxheWVyQm9hcmQucGxhY2VBbGxTaGlwcyhwbGF5ZXJDaGVja1ZhbHVlcy5jdXJyZW50U2hpcHMpO1xuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tCb2F0cyA9IChjb29yZHMpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJDaGVja1ZhbHVlcyA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCk7XG5cbiAgICBpZiAoIWNoZWNrU2V0dXAocGxheWVyQ2hlY2tWYWx1ZXMuY3VycmVudFNoaXBzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgY3VycmVudEF0dGFjayA9IGNvbXB1dGVyQm9hcmQucmVjaWV2ZUF0dGFjayhjb29yZHMpO1xuICAgIGlmICghY3VycmVudEF0dGFjaykgcmV0dXJuIGZhbHNlO1xuICAgIHBsYXllckJvYXJkLnJlY2lldmVSYW5kb21BdHRhY2socmFuZG9taXplcik7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBzZXR1cFNoaXAgPSAobG9jYXRpb24sIGF4aXMpID0+XG4gICAgcGxheWVyQ2hlY2tCb2FyZC5wbGF5ZXJQbGFjZVNoaXAobG9jYXRpb24sIGF4aXMpO1xuXG4gIGNvbnN0IGdhbWVJc092ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQ2hlY2tTaGlwcyA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCkuY3VycmVudFNoaXBzO1xuICAgIGlmICghY2hlY2tTZXR1cChwbGF5ZXJDaGVja1NoaXBzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKGNvbXB1dGVyQm9hcmQuaXNBbGxTdW5rKCkpIHtcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdZb3UgV29uJywgZ2FtZUZpbmlzaGVkOiB0cnVlIH07XG4gICAgfVxuXG4gICAgaWYgKHBsYXllckJvYXJkLmlzQWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4geyBtZXNzYWdlOiAnWW91IExvc3QnLCBnYW1lRmluaXNoZWQ6IHRydWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZ2FtZUZpbmlzaGVkOiBmYWxzZSB9O1xuICB9O1xuXG4gIGNvbnN0IGFycmFuZ2VCbG9ja3MgPSAobW91c2VQb3NpdGlvbiwgY3VycmVudFJvdGF0aW9uKSA9PiB7XG4gICAgY29uc3QgY2hlY2tib2FyZE9iamVjdHMgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgY29uc3Qgc2hpcFR5cGVPYmplY3QgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFR5cGVPZlBsYWNlZFNoaXAoXG4gICAgICBjaGVja2JvYXJkT2JqZWN0cy5jdXJyZW50U2hpcHNcbiAgICApO1xuXG4gICAgLy8gY29uc29sZS5sb2coc2hpcFR5cGVPYmplY3QsICd0aGUgc2hpcCB0eXBlIG9iamVjdCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKG1vdXNlUG9zaXRpb24sICd0aGUgbW91c2UgcG9zaXRpb24nKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50Um90YXRpb24sICd0aGUgY3VycmVudCByb3RhdGlvbicpO1xuXG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAoXG4gICAgICBtb3VzZVBvc2l0aW9uLFxuICAgICAgc2hpcFR5cGVPYmplY3Quc2hpcExlbmd0aCxcbiAgICAgIGN1cnJlbnRSb3RhdGlvblxuICAgICk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFNoaXAsICd0aGUgbW9zdCB1cCB0byBkYXRlIHNoaXBzJyk7XG5cbiAgICByZXR1cm4gY3VycmVudFNoaXA7XG4gIH07XG5cbiAgY29uc3QgZ2V0R2FtZVZhbHVlcyA9ICgpID0+ICh7XG4gICAgcGxheWVyQm9hcmQsXG4gICAgY29tcHV0ZXJCb2FyZCxcbiAgICBwbGF5ZXJDaGVja0JvYXJkLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGNoZWNrU2V0dXAsXG4gICAgYXR0YWNrQm9hdHMsXG4gICAgc2V0dXBHYW1lLFxuICAgIGdhbWVJc092ZXIsXG4gICAgc2V0dXBTaGlwLFxuICAgIGdldEdhbWVWYWx1ZXMsXG4gICAgYXJyYW5nZUJsb2NrcyxcbiAgfTtcbn07XG5cbmNvbnN0IGFjdGl2ZUdhbWUgPSBHYW1lKCk7XG5cbmV4cG9ydCB7IEdhbWUsIGFjdGl2ZUdhbWUgfTtcbiIsImNvbnN0IFBvc2l0aW9uID0gKCkgPT4ge1xuICBjb25zdCBjcmVhdGVQb3NpdGlvbiA9ICh4Q29vcmQsIHlDb29yZCkgPT4gKHsgeENvb3JkLCB5Q29vcmQgfSk7XG5cbiAgY29uc3QgY2hlY2tPdXRPZkJvdW5jZSA9IChuZXdQb3NpdGlvbikgPT4ge1xuICAgIGlmIChuZXdQb3NpdGlvbi54Q29vcmQgPiA5IHx8IG5ld1Bvc2l0aW9uLnlDb29yZCA+IDkpIHJldHVybiB0cnVlO1xuICAgIGlmIChuZXdQb3NpdGlvbi54Q29vcmQgPCAwIHx8IG5ld1Bvc2l0aW9uLnlDb29yZCA8IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBhZGRQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmIChwb3NpdGlvbjEgPT09IGZhbHNlIHx8IHBvc2l0aW9uMiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gY3JlYXRlUG9zaXRpb24ocG9zaXRpb24xLnhDb29yZCwgcG9zaXRpb24xLnlDb29yZCk7XG4gICAgbmV3UG9zaXRpb24ueENvb3JkICs9IHBvc2l0aW9uMi54Q29vcmQ7XG4gICAgbmV3UG9zaXRpb24ueUNvb3JkICs9IHBvc2l0aW9uMi55Q29vcmQ7XG5cbiAgICBpZiAoY2hlY2tPdXRPZkJvdW5jZShuZXdQb3NpdGlvbikpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBtdWx0aXBseVBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMSA9PT0gZmFsc2UgfHwgcG9zaXRpb24yID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBjcmVhdGVQb3NpdGlvbihwb3NpdGlvbjEueENvb3JkLCBwb3NpdGlvbjEueUNvb3JkKTtcbiAgICBuZXdQb3NpdGlvbi54Q29vcmQgKj0gcG9zaXRpb24yLnhDb29yZDtcbiAgICBuZXdQb3NpdGlvbi55Q29vcmQgKj0gcG9zaXRpb24yLnlDb29yZDtcblxuICAgIGlmIChjaGVja091dE9mQm91bmNlKG5ld1Bvc2l0aW9uKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwgPSAocG9zaXRpb24xLCBwb3NpdGlvbjIsIGF4aXMpID0+IHtcbiAgICBpZiAocG9zaXRpb24xW2F4aXNdID09PSBwb3NpdGlvbjJbYXhpc10gKyAxKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAocG9zaXRpb24xW2F4aXNdID09PSBwb3NpdGlvbjJbYXhpc10pIHJldHVybiB0cnVlO1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSAtIDEpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjb21wYXJlUG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAoIWNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwocG9zaXRpb24xLCBwb3NpdGlvbjIsICd4Q29vcmQnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwocG9zaXRpb24xLCBwb3NpdGlvbjIsICd5Q29vcmQnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVBvc2l0aW9uLFxuICAgIGFkZFBvc2l0aW9uLFxuICAgIG11bHRpcGx5UG9zaXRpb24sXG4gICAgY29tcGFyZVBvc2l0aW9uLFxuICAgIGNoZWNrT3V0T2ZCb3VuY2UsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3NpdGlvbjtcbiIsImNvbnN0IFByYWN0aWNhbCA9ICgpID0+IHtcbiAgY29uc3QgY29weUFycmF5ID0gKGFycmF5KSA9PiB7XG4gICAgY29uc3QgbmV3QXJyYXkgPSBbXTtcblxuICAgIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIG5ld0FycmF5LnB1c2goaXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3QXJyYXk7XG4gIH07XG5cbiAgY29uc3QgaXNPYmplY3QgPSAoY3VycmVudE9iamVjdCkgPT4ge1xuICAgIGlmICh0eXBlb2YgY3VycmVudE9iamVjdCA9PT0gJ29iamVjdCcgJiYgY3VycmVudE9iamVjdCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjaGVja09iamVjdCA9IChvYmplY3QxLCBvYmplY3QyKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgc2Vjb25kSW5kZXggPSAwO1xuXG4gICAgbGV0IG9iamVjdElzRXF1YWwgPSB0cnVlO1xuXG4gICAgY29uc3QgY3VycmVudE9iamVjdCA9IG9iamVjdDE7XG4gICAgY29uc3QgY3VycmVudE9iamVjdDIgPSBvYmplY3QyO1xuXG4gICAgY29uc3QgY3VycmVudE9iamVjdFZhbHVlcyA9IE9iamVjdC52YWx1ZXMoY3VycmVudE9iamVjdCk7XG4gICAgY29uc3QgY3VycmVudE9iamVjdDJWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGN1cnJlbnRPYmplY3QyKTtcblxuICAgIGNvbnN0IG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyhjdXJyZW50T2JqZWN0KTtcbiAgICBjb25zdCBvYmplY3RLZXlzMiA9IE9iamVjdC5rZXlzKGN1cnJlbnRPYmplY3QyKTtcblxuICAgIG9iamVjdEtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoa2V5ICE9PSBvYmplY3RLZXlzMltpbmRleF0pIG9iamVjdElzRXF1YWwgPSBmYWxzZTtcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgfSk7XG5cbiAgICBpZiAoIW9iamVjdElzRXF1YWwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAob2JqZWN0S2V5cy5sZW5ndGggIT09IG9iamVjdEtleXMyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudE9iamVjdCwgJ3RoZSBjdXJyZW50IG9iamVjdCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRPYmplY3QyLCAndGhlIGN1cnJlbnQgb2JqZWN0MicpO1xuXG4gICAgY3VycmVudE9iamVjdFZhbHVlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBpdGVtMiA9IGN1cnJlbnRPYmplY3QyVmFsdWVzW3NlY29uZEluZGV4XTtcblxuICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pICYmIGlzT2JqZWN0KGl0ZW0yKSkge1xuICAgICAgICBjb25zdCBjaGVja09iamVjdEJvb2wgPSBjaGVja09iamVjdChpdGVtLCBpdGVtMik7XG5cbiAgICAgICAgaWYgKCFjaGVja09iamVjdEJvb2wpIG9iamVjdElzRXF1YWwgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbSAhPT0gaXRlbTIpIHtcbiAgICAgICAgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBzZWNvbmRJbmRleCArPSAxO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iamVjdElzRXF1YWw7XG4gIH07XG5cbiAgcmV0dXJuIHsgY29weUFycmF5LCBjaGVja09iamVjdCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJhY3RpY2FsO1xuIiwiaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuXG5jb25zdCBTaGlwID0gKCkgPT4ge1xuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG5cbiAgY29uc3QgZ2V0QWRkZWRQb3NpdGlvbiA9IChheGlzKSA9PiB7XG4gICAgbGV0IGFkZGVkUG9zaXRpb247XG5cbiAgICBpZiAoYXhpcyA9PT0gJ3gnKSBhZGRlZFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oMSwgMCk7XG4gICAgZWxzZSBhZGRlZFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oMCwgMSk7XG5cbiAgICByZXR1cm4gYWRkZWRQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVTaGlwID0gKHBvc2l0aW9uMSwgbGVuZ3RoMSwgYXhpcykgPT4ge1xuICAgIGlmIChsZW5ndGgxID09PSAwIHx8IGxlbmd0aDEgPiA1KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHBvc2l0aW9uLmNoZWNrT3V0T2ZCb3VuY2UocG9zaXRpb24xKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcG9wdWxhdGVTaGlwcyA9IChjdXJyZW50UG9zaXRpb24sIGxhdGVzdExlbmd0aCwgbGF0ZXN0QXJyYXkpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRBcnJheSA9IGxhdGVzdEFycmF5O1xuICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uO1xuXG4gICAgICBpZiAoY3VycmVudFBvc2l0aW9uID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKGxhdGVzdExlbmd0aCA9PT0gMCkgcmV0dXJuIGN1cnJlbnRBcnJheTtcbiAgICAgIGlmIChsYXRlc3RMZW5ndGggPT09IGxlbmd0aDEpIHtcbiAgICAgICAgY3VycmVudEFycmF5LnB1c2goY3VycmVudFBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIHBvcHVsYXRlU2hpcHMoY3VycmVudFBvc2l0aW9uLCBsYXRlc3RMZW5ndGggLSAxLCBjdXJyZW50QXJyYXkpO1xuICAgICAgfVxuICAgICAgY29uc3QgYWRkZWRQb3NpdGlvbiA9IGdldEFkZGVkUG9zaXRpb24oYXhpcyk7XG4gICAgICBuZXdQb3NpdGlvbiA9IHBvc2l0aW9uLmFkZFBvc2l0aW9uKG5ld1Bvc2l0aW9uLCBhZGRlZFBvc2l0aW9uKTtcblxuICAgICAgaWYgKCFuZXdQb3NpdGlvbikgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICAgICAgY3VycmVudEFycmF5LnB1c2gobmV3UG9zaXRpb24pO1xuXG4gICAgICBjb25zdCBhcnJheUxlbmd0aCA9IGN1cnJlbnRBcnJheS5sZW5ndGggLSAxO1xuXG4gICAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhcbiAgICAgICAgY3VycmVudEFycmF5W2FycmF5TGVuZ3RoXSxcbiAgICAgICAgbGF0ZXN0TGVuZ3RoIC0gMSxcbiAgICAgICAgY3VycmVudEFycmF5XG4gICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhwb3NpdGlvbjEsIGxlbmd0aDEsIFtdLCBmYWxzZSk7XG4gIH07XG5cblxuXG4gIGNvbnN0IGlzU3VuayA9IChzaGlwQXJyYXkpID0+IHtcbiAgICBpZiAoc2hpcEFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGhpdCA9IChwb3NpdGlvbnNBcnJheSwgcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBoaXRBcnJheSA9IHBvc2l0aW9uc0FycmF5LmZpbHRlcigocG9zKSA9PiB7XG4gICAgICBpZiAocG9zLnhDb29yZCA9PT0gcG9zaXRpb24ueENvb3JkICYmIHBvcy55Q29vcmQgPT09IHBvc2l0aW9uLnlDb29yZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBjb25zdCBzaGlwQXJyYXlzID0gcG9zaXRpb25zQXJyYXkuZmlsdGVyKChwb3MpID0+IHtcbiAgICAgIGlmIChwb3MueENvb3JkID09PSBwb3NpdGlvbi54Q29vcmQgJiYgcG9zLnlDb29yZCA9PT0gcG9zaXRpb24ueUNvb3JkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgaGl0QXJyYXksIHNoaXBBcnJheXMgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVNoaXAsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQgRG9tIGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5pbXBvcnQgeyBhY3RpdmVHYW1lIH0gZnJvbSAnLi9tYWluLmpzJztcblxuY29uc3QgVWkgPSAoKSA9PiB7XG4gIGNvbnN0IGRvbSA9IERvbSgpO1xuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG4gIGNvbnN0IHNoaXAgPSBTaGlwKCk7XG5cbiAgY29uc3QgcmVuZGVyU3BlZWQgPSAxO1xuXG4gIGxldCBibG9ja1NpemUgPSA0MjtcblxuICBsZXQgcGxhY2VkU2hpcCA9IGZhbHNlO1xuICBsZXQgYXhpcyA9ICd5JztcblxuICBsZXQgbW91c2VCbG9ja0xvY2F0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgY3JlYXRlRG9tRWxlbWVudCA9IChlbGVtZW50TmFtZSkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XG5cbiAgY29uc3QgZ2V0TW91c2VQb3NpdGlvbiA9IChvZmZzZXRYLCBvZmZzZXRZKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cob2Zmc2V0WCwgb2Zmc2V0WSwgJ29mZnNldCB4IGFuZCBvZmZzZXQgeScpO1xuXG4gICAgY29uc3QgeENvb3JkID0gTWF0aC5mbG9vcihvZmZzZXRYIC8gYmxvY2tTaXplKTtcbiAgICBjb25zdCB5Q29vcmQgPSBNYXRoLmZsb29yKG9mZnNldFkgLyBibG9ja1NpemUpO1xuXG4gICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHhDb29yZCwgeUNvb3JkKTtcblxuICAgIGNvbnN0IG91dE9mQm91bmNlID0gcG9zaXRpb24uY2hlY2tPdXRPZkJvdW5jZShtb3VzZVBvc2l0aW9uKTtcblxuICAgIGlmIChvdXRPZkJvdW5jZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gY29uc29sZS5sb2cobW91c2VQb3NpdGlvbiwgJ3RoZSBjdXJyZW50IG1vdXNlIHBvc2l0aW9uJyk7XG5cbiAgICByZXR1cm4gbW91c2VQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBmaW5kTW91c2VQb3NpdGlvbiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRNb3VzZVBvc2l0aW9uID0gZ2V0TW91c2VQb3NpdGlvbihldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcblxuICAgIG1vdXNlQmxvY2tMb2NhdGlvbiA9IGN1cnJlbnRNb3VzZVBvc2l0aW9uO1xuXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudE1vdXNlUG9zaXRpb24sICd0aGUgY3VycmVudCBtb3VzZSBwb3NpdGlvbicpO1xuICB9O1xuXG4gIC8vIHdvdGsgb24gdGhpcyBmdW5jdGlvblxuICBjb25zdCBmaW5kVG91Y2hQb3NpdGlvbiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgdG91Y2hPZmZzZXRYID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYIC0gcmVjdC54O1xuICAgIGNvbnN0IHRvdWNoT2Zmc2V0WSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSAtIHJlY3QueTtcblxuICAgIGNvbnN0IHRvdWNoUG9zaXRpb24gPSBnZXRNb3VzZVBvc2l0aW9uKHRvdWNoT2Zmc2V0WCwgdG91Y2hPZmZzZXRZKTtcbiAgICBtb3VzZUJsb2NrTG9jYXRpb24gPSB0b3VjaFBvc2l0aW9uO1xuXG4gICAgY29uc29sZS5sb2cobW91c2VCbG9ja0xvY2F0aW9uLCAndGhlIG1vdXNlIGJsb2NrIGxvY2F0aW9uJyk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIC8vIGJsb2NrIHNpemUgbWF0Y2hlcyB0aGUgc2l6ZSBncmlkc2l6ZSBvZiB0aGUgbWVkaWEgcXVlcnkgZGl2aWRlZCBieSAxMFxuICBjb25zdCBjaGFuZ2VCbG9ja1NpemUgPSAobWF0Y2hNZWRpYSkgPT4ge1xuICAgIGJsb2NrU2l6ZSA9IDQyO1xuICAgIGlmIChtYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA5NjBweCknKS5tYXRjaGVzKSBibG9ja1NpemUgPSAzMDtcbiAgICBpZiAobWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNDcwcHgpJykubWF0Y2hlcykgYmxvY2tTaXplID0gMjE7XG4gICAgaWYgKG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDMyMHB4KScpLm1hdGNoZXMpIGJsb2NrU2l6ZSA9IDE1O1xuICAgIHJldHVybiBibG9ja1NpemU7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhtYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAzMjBweCknKSwgJ3RoZSBjdXJyZW50IG1hdGNoIG1lZGlhJyk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQmxvY2tFbGVtZW50ID0gKGJsb2NrQ2xhc3MsIGNyZWF0ZUJsb2NrKSA9PiB7XG4gICAgbGV0IGxhdGVzdENsYXNzID0gYmxvY2tDbGFzcztcblxuICAgIGlmIChcbiAgICAgIGxhdGVzdENsYXNzICE9PSAnaGl0QmxvY2snICYmXG4gICAgICBsYXRlc3RDbGFzcyAhPT0gJ21pc3NCbG9jaycgJiZcbiAgICAgIGxhdGVzdENsYXNzICE9PSAnY3Vyc29yQmxvY2snXG4gICAgKSB7XG4gICAgICBsYXRlc3RDbGFzcyA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrRWxlbWVudCA9IGNyZWF0ZUJsb2NrKCdkaXYnKTtcbiAgICBibG9ja0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcbiAgICBpZiAobGF0ZXN0Q2xhc3MgIT09ICcnKSBibG9ja0VsZW1lbnQuY2xhc3NMaXN0LmFkZChsYXRlc3RDbGFzcyk7XG5cbiAgICByZXR1cm4gYmxvY2tFbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGRpc2FibGVTdGFydGVyVWkgPSAoKSA9PiB0cnVlO1xuXG4gIC8vIGNvbnN0IHJlbmRlclNlbGVjdGlvbkJsb2NrcyA9IChtb3VzZVBvc2l0aW9uLCBsYXRlc3RCbG9ja1NpemUpID0+IHtcbiAgLy8gICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgLy8gICBjb25zdCBjdXJyZW50U25ha2VCbG9jayA9IGNyZWF0ZUJsb2NrRWxlbWVudCgpO1xuICAvLyAgIGNvbnN0IHJlYWxQb3NpdGlvblggPSBNYXRoLmZsb29yKG1vdXNlUG9zaXRpb24ueENvb3JkICogbGF0ZXN0QmxvY2tTaXplKTtcbiAgLy8gICBjb25zdCByZWFsUG9zaXRpb25ZID0gTWF0aC5mbG9vcihtb3VzZVBvc2l0aW9uLnlDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG5cbiAgLy8gICBjb25zb2xlLmxvZyhtb3VzZVBvc2l0aW9uLCAnVEhFIENVUlJFTlQgTU9VU0UgUE9TSVRJT04nKTtcblxuICAvLyAgIGNvbnNvbGUubG9nKHJlYWxQb3NpdGlvblgsICd0aGUgcmVhbCBwb3NpdGlvbiB4Jyk7XG4gIC8vICAgY29uc29sZS5sb2cocmVhbFBvc2l0aW9uWSwgJ3RoZSByZWFsIHBvc2l0aW9uIHknKTtcblxuICAvLyAgIGN1cnJlbnRTbmFrZUJsb2NrLnN0eWxlLmxlZnQgPSBgJHtyZWFsUG9zaXRpb25YfXB4YDtcbiAgLy8gICBjdXJyZW50U25ha2VCbG9jay5zdHlsZS50b3AgPSBgJHtyZWFsUG9zaXRpb25ZfXB4YDtcblxuICAvLyAgIGVsZW1lbnQuc2hpcEdyaWQuYXBwZW5kQ2hpbGQoY3VycmVudFNuYWtlQmxvY2spO1xuICAvLyB9O1xuXG4gIGNvbnN0IGNyZWF0ZVNoaXBCbG9jayA9IChzaGlwUG9zaXRpb24sIGxhdGVzdEJsb2NrU2l6ZSwgc2hpcFR5cGUpID0+IHtcbiAgICBjb25zdCBzaGlwQmxvY2sgPSBjcmVhdGVCbG9ja0VsZW1lbnQoc2hpcFR5cGUsIGNyZWF0ZURvbUVsZW1lbnQpO1xuXG4gICAgY29uc3QgcmVhbFBvc2l0aW9uWCA9IE1hdGguZmxvb3Ioc2hpcFBvc2l0aW9uLnhDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgY29uc3QgcmVhbFBvc2l0aW9uWSA9IE1hdGguZmxvb3Ioc2hpcFBvc2l0aW9uLnlDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgc2hpcEJsb2NrLnN0eWxlLmxlZnQgPSBgJHtyZWFsUG9zaXRpb25YfXB4YDtcbiAgICBzaGlwQmxvY2suc3R5bGUudG9wID0gYCR7cmVhbFBvc2l0aW9uWX1weGA7XG5cbiAgICByZXR1cm4gc2hpcEJsb2NrO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckFscmVhZHlQbGFjZWRTaGlwcyA9IChzaGlwR3JpZCwgbGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgY29uc3QgZ2FtZVZhbHVlcyA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuICAgIGNvbnN0IGNoZWNrQm9hcmRTaGlwcyA9XG4gICAgICBnYW1lVmFsdWVzLnBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCkuY3VycmVudFNoaXBzO1xuXG4gICAgY2hlY2tCb2FyZFNoaXBzLmZvckVhY2goKHBsYXllckNoZWNrU2hpcHMpID0+IHtcbiAgICAgIHBsYXllckNoZWNrU2hpcHMuZm9yRWFjaCgoYm9hdCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwQmxvY2sgPSBjcmVhdGVTaGlwQmxvY2soYm9hdCwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQoc2hpcEJsb2NrKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclBsYWNlZFNoaXAgPSAobGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGNvbnN0IHsgc2hpcEdyaWQgfSA9IGVsZW1lbnQ7XG5cbiAgICBpZiAoIXBsYWNlZFNoaXApIHJldHVybiBwbGFjZWRTaGlwO1xuXG4gICAgc2hpcEdyaWQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBwbGFjZWRTaGlwLmZvckVhY2goKHNoaXBQb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc2hpcEJsb2NrID0gY3JlYXRlU2hpcEJsb2NrKHNoaXBQb3NpdGlvbiwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgIHNoaXBHcmlkLmFwcGVuZENoaWxkKHNoaXBCbG9jayk7XG4gICAgfSk7XG5cbiAgICByZW5kZXJBbHJlYWR5UGxhY2VkU2hpcHMoc2hpcEdyaWQsIGxhdGVzdEJsb2NrU2l6ZSk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlQXhpcyA9ICgpID0+IHtcbiAgICBpZiAoYXhpcyA9PT0gJ3knKSBheGlzID0gJ3gnO1xuICAgIGVsc2UgYXhpcyA9ICd5JztcbiAgfTtcblxuICBjb25zdCBtb3ZlU2hpcEJ5RGlyZWN0aW9uID0gKG1vdXNlTG9jYXRpb24sIGN1cnJlbnRTaGlwLCBjdXJyZW50QXhpcykgPT4ge1xuICAgIGxldCBsYXRlc3RTaGlwID0gZmFsc2U7XG5cbiAgICBpZiAocG9zaXRpb24uY2hlY2tPdXRPZkJvdW5jZShjdXJyZW50U2hpcFswXSkpIHJldHVybiBsYXRlc3RTaGlwO1xuXG4gICAgY29uc3QgbmV3WFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICBtb3VzZUxvY2F0aW9uLnhDb29yZCxcbiAgICAgIDBcbiAgICApLnhDb29yZDtcblxuICAgIGNvbnN0IG5ld1lQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKFxuICAgICAgMCxcbiAgICAgIG1vdXNlTG9jYXRpb24ueUNvb3JkXG4gICAgKS55Q29vcmQ7XG5cbiAgICBsZXQgbmV3U2hpcFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICBuZXdYUG9zaXRpb24sXG4gICAgICBjdXJyZW50U2hpcFswXS55Q29vcmRcbiAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRBeGlzID09PSAneCcpIHtcbiAgICAgIG5ld1NoaXBQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKFxuICAgICAgICBjdXJyZW50U2hpcFswXS54Q29vcmQsXG4gICAgICAgIG5ld1lQb3NpdGlvblxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsYXRlc3RTaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgbmV3U2hpcFBvc2l0aW9uLFxuICAgICAgY3VycmVudFNoaXAubGVuZ3RoLFxuICAgICAgY3VycmVudEF4aXNcbiAgICApO1xuXG4gICAgcmV0dXJuIGxhdGVzdFNoaXA7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VQbGF5ZXJTaGlwID0gKGxhdGVzdFNoaXAsIGxhdGVzdEF4aXMsIGxhdGVzdEdhbWUpID0+IHtcbiAgICBpZiAobGF0ZXN0U2hpcCkgbGF0ZXN0R2FtZS5zZXR1cFNoaXAobGF0ZXN0U2hpcFswXSwgbGF0ZXN0QXhpcyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUGxheWVyU2hpcEV2ZW50ID0gKCkgPT4ge1xuICAgIHBsYWNlUGxheWVyU2hpcChwbGFjZWRTaGlwLCBheGlzLCBhY3RpdmVHYW1lKTtcbiAgfTtcblxuICBjb25zdCBhZGRVaUV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgZWxlbWVudC5zaGlwTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZpbmRUb3VjaFBvc2l0aW9uKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcEV2ZW50KTtcblxuICAgIGVsZW1lbnQucm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQXhpcyk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVWlFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgZWxlbWVudC5zaGlwTGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZpbmRUb3VjaFBvc2l0aW9uKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcEV2ZW50KTtcblxuICAgIGVsZW1lbnQucm90YXRlQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQXhpcyk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tNb3VzZVRhcmdldCA9IChlbGVtZW50Q2xhc3MpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50Q2xhc3MsICd0aGUgZWxlbWVudCBjYWxzcycpO1xuICAgIGlmIChlbGVtZW50Q2xhc3MgIT09ICdncmlkT3ZlcmxheSBjb21wdXRlckdyaWRPdmVybGF5JykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZU1vdXNlUG9zaXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZVRhcmdldCA9IGNoZWNrTW91c2VUYXJnZXQoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSk7XG4gICAgaWYgKCFtb3VzZVRhcmdldCkgbW91c2VCbG9ja0xvY2F0aW9uID0gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrU2hpcHMgPSAoKSA9PiB7XG4gICAgYWN0aXZlR2FtZS5hdHRhY2tCb2F0cyhtb3VzZUJsb2NrTG9jYXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IGFkZEdhbWVFdmVudHMgPSAoKSA9PiB7XG4gICAgcmVtb3ZlVWlFdmVudHMoKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGNoYW5nZU1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuY29tcHV0ZXJHcmlkTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuY29tcHV0ZXJHcmlkTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhdHRhY2tTaGlwcyk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU2hpcHMgPSAoc2hpcHMsIGdyaWQsIGxhdGVzdEJsb2NrU2l6ZSkgPT4ge1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXBHcm91cCkgPT4ge1xuICAgICAgc2hpcEdyb3VwLmZvckVhY2goKGJvYXQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcEVsZW1lbnQgPSBjcmVhdGVTaGlwQmxvY2soYm9hdCwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChzaGlwRWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJIaXRzID0gKHNoaXBzLCBzaGlwVHlwZSwgZ3JpZCwgbGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcFBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzaGlwRWxlbWVudCA9IGNyZWF0ZVNoaXBCbG9jayhcbiAgICAgICAgc2hpcFBvc2l0aW9uLFxuICAgICAgICBsYXRlc3RCbG9ja1NpemUsXG4gICAgICAgIHNoaXBUeXBlXG4gICAgICApO1xuICAgICAgZ3JpZC5hcHBlbmRDaGlsZChzaGlwRWxlbWVudCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlQ3Vyc29yRWxlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbXB1dGVyR3JpZCB9ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBjb25zb2xlLmxvZyhjb21wdXRlckdyaWQuaW5uZXJIVE1MKTtcbiAgfTtcbiAgLy8gV09SSyBPTiBUSElTIEFORCBGSVggUkFORE9NIExFTkdUSFxuICBjb25zdCByZW5kZXJHcmlkcyA9IChibG9ja1NpemUyLCBtb3VzZVBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgZ2FtZVZhbHVlcyA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuXG4gICAgY29uc3QgeyBwbGF5ZXJHcmlkIH0gPSBkb20uZ2V0RWxlbWVudHMoKTtcbiAgICBjb25zdCB7IGNvbXB1dGVyR3JpZCB9ID0gZG9tLmdldEVsZW1lbnRzKCk7XG5cbiAgICBwbGF5ZXJHcmlkLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbXB1dGVyR3JpZC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IHBsYXllckJvYXJkVmFsdWVzID0gZ2FtZVZhbHVlcy5wbGF5ZXJCb2FyZC5nZXRWYWx1ZXMoKTtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkVmFsdWVzID0gZ2FtZVZhbHVlcy5jb21wdXRlckJvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyQm9hcmRWYWx1ZXMsICdwbGF5ZXJCb2FyZFZhbHVlcycpO1xuICAgIC8vIGNvbnNvbGUubG9nKGNvbXB1dGVyQm9hcmRWYWx1ZXMsICdjb21wdXRlckJvYXJkVmFsdWVzJyk7XG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyQm9hcmRWYWx1ZXMsICd0aGUgcGxheWVyIGJvYXJkIHZhbHVlcycpO1xuXG4gICAgcmVuZGVyU2hpcHMocGxheWVyQm9hcmRWYWx1ZXMuY3VycmVudFNoaXBzLCBwbGF5ZXJHcmlkLCBibG9ja1NpemUyKTtcbiAgICByZW5kZXJIaXRzKHBsYXllckJvYXJkVmFsdWVzLmhpdHMsICdoaXRCbG9jaycsIHBsYXllckdyaWQsIGJsb2NrU2l6ZTIpO1xuICAgIHJlbmRlckhpdHMocGxheWVyQm9hcmRWYWx1ZXMubWlzc2VzLCAnbWlzc0Jsb2NrJywgcGxheWVyR3JpZCwgYmxvY2tTaXplMik7XG5cbiAgICByZW5kZXJTaGlwcyhjb21wdXRlckJvYXJkVmFsdWVzLmN1cnJlbnRTaGlwcywgY29tcHV0ZXJHcmlkLCBibG9ja1NpemUyKTtcblxuICAgIHJlbmRlckhpdHMoY29tcHV0ZXJCb2FyZFZhbHVlcy5oaXRzLCAnaGl0QmxvY2snLCBjb21wdXRlckdyaWQsIGJsb2NrU2l6ZTIpO1xuICAgIHJlbmRlckhpdHMoXG4gICAgICBjb21wdXRlckJvYXJkVmFsdWVzLm1pc3NlcyxcbiAgICAgICdtaXNzQmxvY2snLFxuICAgICAgY29tcHV0ZXJHcmlkLFxuICAgICAgYmxvY2tTaXplMlxuICAgICk7XG5cbiAgICBjb25zdCBtb3VzZVNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAobW91c2VQb3NpdGlvbiwgMSwgJ3gnKTtcblxuICAgIGlmIChtb3VzZVNoaXApIHtcbiAgICAgIHJlbmRlckhpdHMobW91c2VTaGlwLCAnY3Vyc29yQmxvY2snLCBjb21wdXRlckdyaWQsIGJsb2NrU2l6ZTIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJTdGF0cyA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lVmFsdWVzID0gYWN0aXZlR2FtZS5nZXRHYW1lVmFsdWVzKCk7XG5cbiAgICBjb25zdCB7IHBsYXllckhpdHMsIHBsYXllck1pc3NlcyB9ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgY29uc3QgeyBjb21wdXRlckhpdHMsIGNvbXB1dGVyTWlzc2VzIH0gPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAgIGNvbnN0IHBsYXllckJvYXJkVmFsdWVzID0gZ2FtZVZhbHVlcy5wbGF5ZXJCb2FyZC5nZXRWYWx1ZXMoKTtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkVmFsdWVzID0gZ2FtZVZhbHVlcy5jb21wdXRlckJvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgcGxheWVySGl0cy50ZXh0Q29udGVudCA9IGBIaXRzIC0gJHtwbGF5ZXJCb2FyZFZhbHVlcy5oaXRzLmxlbmd0aH1gO1xuICAgIHBsYXllck1pc3Nlcy50ZXh0Q29udGVudCA9IGBNaXNzZXMgLSAke3BsYXllckJvYXJkVmFsdWVzLm1pc3Nlcy5sZW5ndGh9YDtcblxuICAgIGNvbXB1dGVySGl0cy50ZXh0Q29udGVudCA9IGBIaXRzIC0gJHtjb21wdXRlckJvYXJkVmFsdWVzLmhpdHMubGVuZ3RofWA7XG4gICAgY29tcHV0ZXJNaXNzZXMudGV4dENvbnRlbnQgPSBgTWlzc2VzIC0gJHtjb21wdXRlckJvYXJkVmFsdWVzLm1pc3Nlcy5sZW5ndGh9YDtcbiAgfTtcblxuICBjb25zdCByZW5kZXJHYW1lID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZ2FtZVN0YXR1cyA9IGFjdGl2ZUdhbWUuZ2FtZUlzT3ZlcigpO1xuXG4gICAgICBjb25zdCBsYXRlc3RCbG9ja1NpemUgPSBjaGFuZ2VCbG9ja1NpemUod2luZG93Lm1hdGNoTWVkaWEpO1xuICAgICAgcmVuZGVyR3JpZHMobGF0ZXN0QmxvY2tTaXplLCBtb3VzZUJsb2NrTG9jYXRpb24pO1xuICAgICAgcmVuZGVyU3RhdHMoKTtcblxuICAgICAgaWYgKCFnYW1lU3RhdHVzLmdhbWVGaW5pc2hlZCkgcmVuZGVyR2FtZShsYXRlc3RCbG9ja1NpemUpO1xuICAgICAgcmVuZGVyR2FtZShsYXRlc3RCbG9ja1NpemUpO1xuICAgIH0sIHJlbmRlclNwZWVkKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgZWxlbWVudHMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGVsZW1lbnRzLnNlY3Rpb25TY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50cy5zaGlwR3JpZC5pbm5lckhUTUwgPSAnJztcbiAgfTtcblxuICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgcmVtb3ZlU2hpcFNlY3Rpb24oKTtcblxuICAgIGFjdGl2ZUdhbWUuc2V0dXBHYW1lKCk7XG4gICAgYWRkR2FtZUV2ZW50cygpO1xuXG4gICAgcmVuZGVyR2FtZSgpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclNlbGVjdGlvbkdyaWQgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBnYW1lVmFsdWUgPSBhY3RpdmVHYW1lLmdldEdhbWVWYWx1ZXMoKTtcbiAgICAgIGNvbnN0IGNoZWNrQm9hcmRTaGlwcyA9XG4gICAgICAgIGdhbWVWYWx1ZS5wbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpLmN1cnJlbnRTaGlwcztcblxuICAgICAgY2hhbmdlQmxvY2tTaXplKHdpbmRvdy5tYXRjaE1lZGlhKTtcblxuICAgICAgaWYgKGFjdGl2ZUdhbWUuY2hlY2tTZXR1cChnYW1lVmFsdWUucGxheWVyQ2hlY2tCb2FyZCkpIGRpc2FibGVTdGFydGVyVWkoKTtcblxuICAgICAgaWYgKG1vdXNlQmxvY2tMb2NhdGlvbikge1xuICAgICAgICBsZXQgY3VycmVudFNoaXAgPSBhY3RpdmVHYW1lLmFycmFuZ2VCbG9ja3MobW91c2VCbG9ja0xvY2F0aW9uLCBheGlzKTtcbiAgICAgICAgaWYgKCFjdXJyZW50U2hpcCAmJiBwbGFjZWRTaGlwKSB7XG4gICAgICAgICAgY3VycmVudFNoaXAgPSBtb3ZlU2hpcEJ5RGlyZWN0aW9uKFxuICAgICAgICAgICAgbW91c2VCbG9ja0xvY2F0aW9uLFxuICAgICAgICAgICAgcGxhY2VkU2hpcCxcbiAgICAgICAgICAgIGF4aXNcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRTaGlwKSBwbGFjZWRTaGlwID0gY3VycmVudFNoaXA7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cocGxhY2VkU2hpcCwgJ3RoZSBjdXJyZW50IHBsYWNlZCBzaGlwJyk7XG5cbiAgICAgICAgaWYgKHBsYWNlZFNoaXApIHJlbmRlclBsYWNlZFNoaXAoYmxvY2tTaXplKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhY3RpdmVHYW1lLmNoZWNrU2V0dXAoY2hlY2tCb2FyZFNoaXBzKSkgcmVuZGVyU2VsZWN0aW9uR3JpZCgpO1xuICAgICAgZWxzZSBzdGFydEdhbWUoYmxvY2tTaXplKTtcbiAgICB9LCByZW5kZXJTcGVlZCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsdWVzID0gKCkgPT4gKHtcbiAgICBibG9ja1NpemUsXG4gICAgcGxhY2VkU2hpcCxcbiAgICBheGlzLFxuICAgIG1vdXNlQmxvY2tMb2NhdGlvbixcbiAgfSk7XG5cbiAgY29uc3QgYWN0aXZhdGVVaSA9ICgpID0+IHtcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvbS5nZXRQYWdlKCk7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBwYWdlQ29udGVudDtcblxuICAgIGFkZFVpRXZlbnRzKCk7XG4gICAgcmVuZGVyU2VsZWN0aW9uR3JpZCgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWN0aXZhdGVVaSxcbiAgICBjcmVhdGVCbG9ja0VsZW1lbnQsXG4gICAgZ2V0TW91c2VQb3NpdGlvbixcbiAgICBtb3ZlU2hpcEJ5RGlyZWN0aW9uLFxuICAgIGNoYW5nZUJsb2NrU2l6ZSxcbiAgICBjaGFuZ2VBeGlzLFxuICAgIGdldFZhbHVlcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi03MDAuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi03MDAud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi03MDAudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tMzAwLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tMzAwLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tMzAwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xN19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE5X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18sIHsgaGFzaDogXCIjQXplcmV0TW9ub1wiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fLCB7IGhhc2g6IFwiI0F6ZXJldE1vbm9cIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18sIHsgaGFzaDogXCIjUm9ib3RvXCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE5X19fLCB7IGhhc2g6IFwiI1JvYm90b1wiIH0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWRhcmtCbGFjazogcmdiKDIsIDQsIDgpO1xcbiAgLS1kYXJrR3JheTogcmdiKDIyLCAyNywgMzQpO1xcbiAgLS1taXNzQmx1ZTogcmdiKDc2LCA4NCwgMTkxKTtcXG59XFxuXFxuLypjcmVkaXQgdG8gaHR0cHM6Ly9nb29nbGUtd2ViZm9udHMtaGVscGVyLmhlcm9rdWFwcC5jb20vIGZvciBhbGxvd2luZyBtZSB0byBpbXBvcnQgdGhlc2UgZm9udHMgYXV0b21hdGljYWxseSovXFxuLyogYXplcmV0LW1vbm8tcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0F6ZXJldCBNb25vJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIHNyYzogbG9jYWwoJycpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpXFxuICAgICAgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAvKiBJRTYtSUU4ICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgIC8qIE1vZGVybiBCcm93c2VycyAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpXFxuICAgICAgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIikgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbn1cXG4vKiBhemVyZXQtbW9uby03MDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdBemVyZXQgTW9ubyc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgLyogSUU2LUlFOCAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fICsgXCIpXFxuICAgICAgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgnd29mZicpLFxcbiAgICAvKiBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gKyBcIikgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbn1cXG5cXG4vKiByb2JvdG8tMzAwIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fICsgXCIpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAvKiBJRTYtSUU4ICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE1X19fICsgXCIpXFxuICAgICAgZm9ybWF0KCd3b2ZmJyksXFxuICAgIC8qIE1vZGVybiBCcm93c2VycyAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNl9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTdfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxufVxcbi8qIHJvYm90by1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE4X19fICsgXCIpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgIC8qIElFNi1JRTggKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjFfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgLyogTW9kZXJuIEJyb3dzZXJzICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19fICsgXCIpXFxuICAgICAgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19fICsgXCIpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG59XFxuXFxuaHRtbCB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zaGlwR3JpZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ibG9jayB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHdpZHRoOiA0MnB4O1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uaGl0QmxvY2sge1xcbiAgYmFja2dyb3VuZDogcGluaztcXG59XFxuXFxuLmN1cnNvckJsb2NrIHtcXG4gIGJhY2tncm91bmQ6IGJsdWU7XFxufVxcblxcbi5taXNzQmxvY2sge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWlzc0JsdWUpO1xcbn1cXG5cXG4uc2VjdGlvblNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDI7XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2hpcFRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXplcmV0IE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbi5zaGlwVGV4dCB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5zaGlwU2VsZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrQmxhY2spO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA0NDBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm90YXRlSW1hZ2Uge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoODdkZWcpXFxuICAgIGJyaWdodG5lc3MoMTAwJSk7XFxufVxcblxcbi5yb3RhdGVCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0JsYWNrKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJvdGF0ZUJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zaGlwR3JpZCB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYm9hcmRUaXRsZSB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzksIDM5LCAzOSwgMC41NzQpO1xcbiAgei1pbmRleDogMjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGJhY2tncm91bmQ6IHJnYigyLCA0LCA4KTtcXG59XFxuXFxuLm1haW5TZWN0aW9uIHtcXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tYWluVGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgbGluZS1oZWlnaHQ6IDEwdmg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxufVxcblxcbi5jZW50ZXJTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi5zaGlwT3ZlcmxheSB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG5cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuLmdyaWRMYXllciB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZ3JpZE92ZXJsYXkge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxufVxcblxcbi5zaGlwT3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uZ3JpZE92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnN0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbiAgbGluZS1oZWlnaHQ6IDEwdmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluVGl0bGUgaDEge1xcbiAgZm9udC1mYW1pbHk6ICdBemVyZXQgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBHcmlkIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBPdmVybGF5LFxcbiAgLmdyaWRPdmVybGF5LFxcbiAgLmdyaWRMYXllciB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG5cXG4gIC5zaGlwU2VsZWN0aW9uIHtcXG4gICAgd2lkdGg6IDMxMHB4O1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gIH1cXG5cXG4gIC5ibG9jayB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICB9XFxuXFxuICAuc3RhdHMge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDcwcHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgICBoZWlnaHQ6IDIxMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBHcmlkIHtcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgICBoZWlnaHQ6IDIxMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBPdmVybGF5LFxcbiAgLmdyaWRPdmVybGF5LFxcbiAgLmdyaWRMYXllciB7XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gICAgaGVpZ2h0OiAyMTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwU2VsZWN0aW9uIHtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBUZXh0IHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICB9XFxuXFxuICAuYm9hcmRUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgfVxcblxcbiAgLmJsb2NrIHtcXG4gICAgd2lkdGg6IDIxcHg7XFxuICAgIGhlaWdodDogMjFweDtcXG4gIH1cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICB9XFxuXFxuICAuc3RhdHMge1xcbiAgICB3aWR0aDogMjEwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzY1cHgpIHtcXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcbiAgfVxcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IDZweDtcXG4gIH1cXG5cXG4gIC5zaGlwT3ZlcmxheSxcXG4gIC5ncmlkT3ZlcmxheSxcXG4gIC5ncmlkTGF5ZXIge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICB9XFxuXFxuICAuc2hpcEdyaWQge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICB9XFxuXFxuICAuc2hpcFNlbGVjdGlvbiB7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gIH1cXG5cXG4gIC5ibG9jayB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICB9XFxuXFxuICAuc2hpcFRleHQge1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgfVxcblxcbiAgLnNoaXBUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgfVxcblxcbiAgLnN0YXRzIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQSw4R0FBOEc7QUFDOUcsZ0NBQWdDO0FBQ2hDO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNENBQXNELEVBQUUscUJBQXFCO0VBQzdFOzs7Ozs7Ozs7OzJEQVU4RSxFQUFFLGVB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e1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1kYXJrQmxhY2s6IHJnYigyLCA0LCA4KTtcXG4gIC0tZGFya0dyYXk6IHJnYigyMiwgMjcsIDM0KTtcXG4gIC0tbWlzc0JsdWU6IHJnYig3NiwgODQsIDE5MSk7XFxufVxcblxcbi8qY3JlZGl0IHRvIGh0dHBzOi8vZ29vZ2xlLXdlYmZvbnRzLWhlbHBlci5oZXJva3VhcHAuY29tLyBmb3IgYWxsb3dpbmcgbWUgdG8gaW1wb3J0IHRoZXNlIGZvbnRzIGF1dG9tYXRpY2FsbHkqL1xcbi8qIGF6ZXJldC1tb25vLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdBemVyZXQgTW9ubyc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLmVvdCcpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tcmVndWxhci5lb3Q/I2llZml4JylcXG4gICAgICBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgIC8qIElFNi1JRTggKi8gdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tcmVndWxhci53b2ZmMicpXFxuICAgICAgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgLyogTW9kZXJuIEJyb3dzZXJzICovIHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIudHRmJylcXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tcmVndWxhci5zdmcjQXplcmV0TW9ubycpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG59XFxuLyogYXplcmV0LW1vbm8tNzAwIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXplcmV0IE1vbm8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHNyYzogdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLmVvdCcpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLmVvdD8jaWVmaXgnKVxcbiAgICAgIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgLyogSUU2LUlFOCAqLyB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi03MDAud29mZjInKVxcbiAgICAgIGZvcm1hdCgnd29mZjInKSxcXG4gICAgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovIHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC53b2ZmJylcXG4gICAgICBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgLyogTW9kZXJuIEJyb3dzZXJzICovIHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC50dGYnKVxcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi03MDAuc3ZnI0F6ZXJldE1vbm8nKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxufVxcblxcbi8qIHJvYm90by0zMDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHNyYzogdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC5lb3QnKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgc3JjOiBsb2NhbCgnJyksXFxuICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgLyogSUU2LUlFOCAqLyB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tMzAwLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC53b2ZmJylcXG4gICAgICBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgLyogTW9kZXJuIEJyb3dzZXJzICovIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAudHRmJylcXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAuc3ZnI1JvYm90bycpXFxuICAgICAgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbn1cXG4vKiByb2JvdG8tcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci5lb3QnKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgc3JjOiBsb2NhbCgnJyksXFxuICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLmVvdD8jaWVmaXgnKVxcbiAgICAgIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgLyogSUU2LUlFOCAqLyB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLndvZmYnKVxcbiAgICAgIGZvcm1hdCgnd29mZicpLFxcbiAgICAvKiBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIudHRmJylcXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIuc3ZnI1JvYm90bycpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG59XFxuXFxuaHRtbCB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zaGlwR3JpZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ibG9jayB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHdpZHRoOiA0MnB4O1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uaGl0QmxvY2sge1xcbiAgYmFja2dyb3VuZDogcGluaztcXG59XFxuXFxuLmN1cnNvckJsb2NrIHtcXG4gIGJhY2tncm91bmQ6IGJsdWU7XFxufVxcblxcbi5taXNzQmxvY2sge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWlzc0JsdWUpO1xcbn1cXG5cXG4uc2VjdGlvblNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDI7XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2hpcFRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXplcmV0IE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbi5zaGlwVGV4dCB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5zaGlwU2VsZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrQmxhY2spO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA0NDBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm90YXRlSW1hZ2Uge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoODdkZWcpXFxuICAgIGJyaWdodG5lc3MoMTAwJSk7XFxufVxcblxcbi5yb3RhdGVCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0JsYWNrKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJvdGF0ZUJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zaGlwR3JpZCB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYm9hcmRUaXRsZSB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzksIDM5LCAzOSwgMC41NzQpO1xcbiAgei1pbmRleDogMjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGJhY2tncm91bmQ6IHJnYigyLCA0LCA4KTtcXG59XFxuXFxuLm1haW5TZWN0aW9uIHtcXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tYWluVGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgbGluZS1oZWlnaHQ6IDEwdmg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxufVxcblxcbi5jZW50ZXJTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi5zaGlwT3ZlcmxheSB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG5cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuLmdyaWRMYXllciB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZ3JpZE92ZXJsYXkge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxufVxcblxcbi5zaGlwT3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uZ3JpZE92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnN0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbiAgbGluZS1oZWlnaHQ6IDEwdmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluVGl0bGUgaDEge1xcbiAgZm9udC1mYW1pbHk6ICdBemVyZXQgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBHcmlkIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBPdmVybGF5LFxcbiAgLmdyaWRPdmVybGF5LFxcbiAgLmdyaWRMYXllciB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG5cXG4gIC5zaGlwU2VsZWN0aW9uIHtcXG4gICAgd2lkdGg6IDMxMHB4O1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gIH1cXG5cXG4gIC5ibG9jayB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICB9XFxuXFxuICAuc3RhdHMge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDcwcHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgICBoZWlnaHQ6IDIxMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBHcmlkIHtcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgICBoZWlnaHQ6IDIxMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBPdmVybGF5LFxcbiAgLmdyaWRPdmVybGF5LFxcbiAgLmdyaWRMYXllciB7XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gICAgaGVpZ2h0OiAyMTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwU2VsZWN0aW9uIHtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBUZXh0IHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICB9XFxuXFxuICAuYm9hcmRUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgfVxcblxcbiAgLmJsb2NrIHtcXG4gICAgd2lkdGg6IDIxcHg7XFxuICAgIGhlaWdodDogMjFweDtcXG4gIH1cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICB9XFxuXFxuICAuc3RhdHMge1xcbiAgICB3aWR0aDogMjEwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzY1cHgpIHtcXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcbiAgfVxcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IDZweDtcXG4gIH1cXG5cXG4gIC5zaGlwT3ZlcmxheSxcXG4gIC5ncmlkT3ZlcmxheSxcXG4gIC5ncmlkTGF5ZXIge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICB9XFxuXFxuICAuc2hpcEdyaWQge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICB9XFxuXFxuICAuc2hpcFNlbGVjdGlvbiB7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gIH1cXG5cXG4gIC5ibG9jayB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICB9XFxuXFxuICAuc2hpcFRleHQge1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgfVxcblxcbiAgLnNoaXBUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgfVxcblxcbiAgLnN0YXRzIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJVaSIsImN1cnJlbnRVaSIsImFjdGl2YXRlVWkiLCJyZWZyZXNoaW5nTG9nbyIsIkRvbSIsImdldEVsZW1lbnRzIiwib3ZlcmxheSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlY3Rpb25TY3JlZW4iLCJzaGlwVGV4dCIsInNoaXBHcmlkIiwic2hpcExheWVyIiwicm90YXRlQnV0dG9uIiwiZ3JpZHMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGl0cyIsIm1pc3NlcyIsInBsYXllckdyaWQiLCJwbGF5ZXJIaXRzIiwicGxheWVyTWlzc2VzIiwiY29tcHV0ZXJHcmlkIiwiY29tcHV0ZXJIaXRzIiwiY29tcHV0ZXJNaXNzZXMiLCJjb250ZW50IiwiY29tcHV0ZXJHcmlkTGF5ZXIiLCJnZXRQYWdlIiwiUG9zaXRpb24iLCJTaGlwIiwiUHJhY3RpY2FsIiwiR2FtZWJvYXJkIiwicG9zaXRpb24iLCJzaGlwIiwicHJhY3RpY2FsIiwiY3VycmVudFNoaXBzIiwicmFuZG9taXplIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQXhpcyIsImF4aWVzIiwibGVuZ3RoIiwicGxhY2VBbGxTaGlwcyIsInNoaXBzQXJyYXkiLCJjb21wYXJlU2hpcHNBcnJheSIsImxhdGVzdFNoaXBzQXJyYXkiLCJzaGlwcyIsInNoaXBzRG9Db2xsaWRlIiwiZm9yRWFjaCIsImxhdGVzdFNoaXBzIiwiYm9hdCIsImxhdGVzdEJvYXQiLCJjb21wYXJlUG9zaXRpb24iLCJnZXRUeXBlT2ZQbGFjZWRTaGlwIiwic2hpcEFycmF5Iiwic2hpcFR5cGVzIiwic2hpcFR5cGUiLCJzaGlwTGVuZ3RoIiwic2hpcFRwZSIsInBsYXllclBsYWNlU2hpcCIsImxvY2F0aW9uIiwiYXhpcyIsImN1cnJlbnRBcnJheSIsImNvcHlBcnJheSIsImN1cnJlbnRTaGlwIiwiY3JlYXRlU2hpcCIsImlzQ29sbGlkZWQiLCJwdXNoIiwicGxhY2VSYW5kb21TaGlwcyIsInJhbmRvbWl6ZXIiLCJyYW5kb21BeGllcyIsInJhbmRvbVBvc2l0aW9uIiwiY3JlYXRlUG9zaXRpb24iLCJjb25zb2xlIiwibG9nIiwibGF0ZXN0TGVuZ3RoIiwicmFuZG9tU2hpcCIsInNoaXBDb2xsaWRlcyIsInBsYWNlU2hpcHNSYW5kb21seSIsImZpbHRlckF0dGFjayIsImFycmF5IiwiY3VycmVudEF0dGFjayIsImN1cnJlbnRBdHRhY2tBcnJheSIsImZpbHRlciIsIml0ZW0iLCJ4Q29vcmQiLCJ5Q29vcmQiLCJoYXNIaXRTaGlwIiwiaGl0UG9zaXRpb24iLCJsYXRlc3RIaXRzIiwibGF0ZXN0TWlzc2VzIiwiaGFzQmVlbkhpdCIsImhhc0JlZW5NaXNzIiwiYXR0YWNrU2hpcCIsImxhdGVzdFBvc2l0aW9uIiwiY3VycmVudEhpdHMiLCJjdXJyZW50TWlzc2VzIiwiaXNIaXQiLCJwb3NpdGlvbnNBcnJheSIsImhpdCIsImhpdEFycmF5Iiwic2hpcEFycmF5cyIsImZpbmFsT2JqZWN0IiwicmVjaWV2ZUF0dGFjayIsInJlc3VsdCIsImNyZWF0ZVJhbmRvbUNvb3JkcyIsImlzTW9ja1JhbmRvbSIsImNhbGxSYW5kb21pemVyIiwicmFuZG9tWCIsInJhbmRvbVkiLCJyZWNpZXZlUmFuZG9tQXR0YWNrIiwiaGFzSGl0IiwiaXNBbGxTdW5rIiwiaGFzU3Vua2VkIiwiaXNTdW5rIiwiZ2V0VmFsdWVzIiwiR2FtZSIsInBsYXllckJvYXJkIiwiY29tcHV0ZXJCb2FyZCIsInBsYXllckNoZWNrQm9hcmQiLCJjaGVja1NldHVwIiwicGxheWVyQ2hlY2tTaGlwcyIsInNldHVwR2FtZSIsInBsYXllckNoZWNrVmFsdWVzIiwiYXR0YWNrQm9hdHMiLCJjb29yZHMiLCJzZXR1cFNoaXAiLCJnYW1lSXNPdmVyIiwibWVzc2FnZSIsImdhbWVGaW5pc2hlZCIsImFycmFuZ2VCbG9ja3MiLCJtb3VzZVBvc2l0aW9uIiwiY3VycmVudFJvdGF0aW9uIiwiY2hlY2tib2FyZE9iamVjdHMiLCJzaGlwVHlwZU9iamVjdCIsImdldEdhbWVWYWx1ZXMiLCJhY3RpdmVHYW1lIiwiY2hlY2tPdXRPZkJvdW5jZSIsIm5ld1Bvc2l0aW9uIiwiYWRkUG9zaXRpb24iLCJwb3NpdGlvbjEiLCJwb3NpdGlvbjIiLCJtdWx0aXBseVBvc2l0aW9uIiwiY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbCIsIm5ld0FycmF5IiwiaXNPYmplY3QiLCJjdXJyZW50T2JqZWN0IiwiY2hlY2tPYmplY3QiLCJvYmplY3QxIiwib2JqZWN0MiIsImluZGV4Iiwic2Vjb25kSW5kZXgiLCJvYmplY3RJc0VxdWFsIiwiY3VycmVudE9iamVjdDIiLCJjdXJyZW50T2JqZWN0VmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY3VycmVudE9iamVjdDJWYWx1ZXMiLCJvYmplY3RLZXlzIiwia2V5cyIsIm9iamVjdEtleXMyIiwia2V5IiwiaXRlbTIiLCJjaGVja09iamVjdEJvb2wiLCJnZXRBZGRlZFBvc2l0aW9uIiwiYWRkZWRQb3NpdGlvbiIsImxlbmd0aDEiLCJwb3B1bGF0ZVNoaXBzIiwiY3VycmVudFBvc2l0aW9uIiwibGF0ZXN0QXJyYXkiLCJhcnJheUxlbmd0aCIsInBvcyIsImRvbSIsInJlbmRlclNwZWVkIiwiYmxvY2tTaXplIiwicGxhY2VkU2hpcCIsIm1vdXNlQmxvY2tMb2NhdGlvbiIsImNyZWF0ZURvbUVsZW1lbnQiLCJlbGVtZW50TmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJnZXRNb3VzZVBvc2l0aW9uIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJvdXRPZkJvdW5jZSIsImZpbmRNb3VzZVBvc2l0aW9uIiwiZXZlbnQiLCJjdXJyZW50TW91c2VQb3NpdGlvbiIsImZpbmRUb3VjaFBvc2l0aW9uIiwicmVjdCIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvdWNoT2Zmc2V0WCIsInRhcmdldFRvdWNoZXMiLCJjbGllbnRYIiwieCIsInRvdWNoT2Zmc2V0WSIsImNsaWVudFkiLCJ5IiwidG91Y2hQb3NpdGlvbiIsInByZXZlbnREZWZhdWx0IiwiY2hhbmdlQmxvY2tTaXplIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJjcmVhdGVCbG9ja0VsZW1lbnQiLCJibG9ja0NsYXNzIiwiY3JlYXRlQmxvY2siLCJsYXRlc3RDbGFzcyIsImJsb2NrRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRpc2FibGVTdGFydGVyVWkiLCJjcmVhdGVTaGlwQmxvY2siLCJzaGlwUG9zaXRpb24iLCJsYXRlc3RCbG9ja1NpemUiLCJzaGlwQmxvY2siLCJyZWFsUG9zaXRpb25YIiwicmVhbFBvc2l0aW9uWSIsInN0eWxlIiwibGVmdCIsInRvcCIsInJlbmRlckFscmVhZHlQbGFjZWRTaGlwcyIsImdhbWVWYWx1ZXMiLCJjaGVja0JvYXJkU2hpcHMiLCJhcHBlbmRDaGlsZCIsInJlbmRlclBsYWNlZFNoaXAiLCJlbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hhbmdlQXhpcyIsIm1vdmVTaGlwQnlEaXJlY3Rpb24iLCJtb3VzZUxvY2F0aW9uIiwiY3VycmVudEF4aXMiLCJsYXRlc3RTaGlwIiwibmV3WFBvc2l0aW9uIiwibmV3WVBvc2l0aW9uIiwibmV3U2hpcFBvc2l0aW9uIiwicGxhY2VQbGF5ZXJTaGlwIiwibGF0ZXN0QXhpcyIsImxhdGVzdEdhbWUiLCJwbGFjZVBsYXllclNoaXBFdmVudCIsImFkZFVpRXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZVVpRXZlbnRzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNoZWNrTW91c2VUYXJnZXQiLCJlbGVtZW50Q2xhc3MiLCJjaGFuZ2VNb3VzZVBvc2l0aW9uIiwibW91c2VUYXJnZXQiLCJjbGFzc05hbWUiLCJhdHRhY2tTaGlwcyIsImFkZEdhbWVFdmVudHMiLCJ3aW5kb3ciLCJyZW5kZXJTaGlwcyIsImdyaWQiLCJzaGlwR3JvdXAiLCJzaGlwRWxlbWVudCIsInJlbmRlckhpdHMiLCJyZW1vdmVDdXJzb3JFbGVtZW50IiwicmVuZGVyR3JpZHMiLCJibG9ja1NpemUyIiwicGxheWVyQm9hcmRWYWx1ZXMiLCJjb21wdXRlckJvYXJkVmFsdWVzIiwibW91c2VTaGlwIiwicmVuZGVyU3RhdHMiLCJ0ZXh0Q29udGVudCIsInJlbmRlckdhbWUiLCJzZXRUaW1lb3V0IiwiZ2FtZVN0YXR1cyIsInJlbW92ZVNoaXBTZWN0aW9uIiwiZWxlbWVudHMiLCJkaXNwbGF5Iiwic3RhcnRHYW1lIiwicmVuZGVyU2VsZWN0aW9uR3JpZCIsImdhbWVWYWx1ZSIsInBhZ2VDb250ZW50IiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=