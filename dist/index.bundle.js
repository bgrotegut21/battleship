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
      content: document.querySelector('.content')
    };
  };

  var getPage = function getPage() {
    var content = "    <div class=\"content\">\n                            <div class=\"overlay\"></div>\n                            <div class=\"sectionScreen\">\n                              <div class=\"shipSelection\">\n                                <h1 class=\"shipTitle\">BATTLESHIP</h1>\n                                <h2 class=\"shipText\">Place your Battleship</h2>\n                                <div class=\"shipLayer\">\n                                  <div class=\"shipOverlay\"></div>\n                                  <div class=\"shipGrid\"></div>\n                              </div>\n                                <div class=\"rotateButton\">\n                                  <img\n                                    class=\"rotateImage\"\n                                    src=\"".concat(_images_refreshLogo_svg__WEBPACK_IMPORTED_MODULE_0__, "\"\n                                    alt=\"Rotate Image\"\n                                  />\n                                </div>\n                              </div>\n                            </div>\n\n                            <main class=\"mainSection\">\n                              <div class=\"mainTitle\"><h1>BATTLESHIP</h1></div>\n                              <div class=\"centerSection\">\n                                <div class=\"playerBoard board\">\n                                  <h2 class=\"boardTitle\">Player Board</h2>\n                                  <div class=\"playerGrid grid\"></div>\n                                  <div class=\"playerStats stats\">\n                                    <h2 class=\"playerHits hits\">Hits 0</h2>\n                                    <h2 class=\"playerMisses misses\">Misses 0</h2>\n                                  </div>\n                                </div>\n\n                                <div class=\"computerBoard board\">\n                                  <h2 class=\"boardTitle\">Computer Board</h2>\n\n                                  <div class=\"computerGrid grid\"></div>\n                                  <div class=\"computerStats stats\">\n                                    <h2 class=\"computerHits hits\">Hits 0</h2>\n\n                                    <h2 class=\"computerMisses misses\">Misses 0</h2>\n                                  </div>\n                                </div>\n                              </div>\n                            </main>\n                            <div class=\"footer\">\n                              <h2 class=\"copyrightMessage\">\n                                Website and code are made by Brayden Grotegut\n                              </h2>\n                            </div>\n                          </div>");
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
    var shipsDoCollide = false; // console.log(latestShipsArray, 'the curreent ships array');
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

  var playerPlaceShip = function playerPlaceShip(location, axis) {
    var latestPosition = location;
    var currentArray = practical.copyArray(currentShips);
    var shiplength = 5 - currentArray.length;
    if (currentArray.length > 3) shiplength = 2;

    if (currentArray.length === 5) {
      return {
        shipsArray: currentArray,
        message: 'You have already placed all of your ships'
      };
    }

    var currentShip = ship.createShip(latestPosition, shiplength, axis);

    if (!currentShip) {
      return {
        shipArray: currentArray,
        message: 'You cannot place a ship there'
      };
    }

    var isCollided = compareShipsArray(currentArray, currentShip);

    if (!isCollided) {
      currentArray.push(currentShip);
      currentShips = currentArray;
      return currentArray;
    }

    return {
      shipArray: currentArray,
      message: "You've already placed a ship there"
    };
  };

  var placeRandomShips = function placeRandomShips(length, shipsArray, randomizer, randomAxies) {
    var latestShipsArray = shipsArray;
    var latestLength = length;
    var randomPosition = position.createPosition(randomizer(), randomizer());
    var randomShip = ship.createShip(randomPosition, latestLength, randomAxies());

    if (randomShip) {
      var shipCollides = compareShipsArray(latestShipsArray, randomShip);

      if (!shipCollides) {
        if (latestLength > 2) latestLength -= 1;
        if (shipsArray.length < 5) latestShipsArray.push(randomShip);

        if (shipsArray.length === 5) {
          return latestShipsArray;
        }
      }
    }

    return placeRandomShips(latestLength, latestShipsArray, randomizer, randomAxies);
  };

  var placeShipsRandomly = function placeShipsRandomly(randomizer, randomAxies) {
    var shipsArray = placeRandomShips(5, [], randomizer, randomAxies);
    currentShips = shipsArray;
    return shipsArray;
  };

  var attackShip = function attackShip(latestPosition, ships, currentHits, currentMisses) {
    var isHit = false;
    var latestShipsArray = [];
    var latestHits = currentHits;
    var latestMisses = currentMisses;
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

  var filterAttack = function filterAttack(array, currentAttack) {
    var currentAttackArray = array.filter(function (item) {
      return item.xCoord === currentAttack.xCoord && item.yCoord === currentAttack.yCoord;
    });
    return currentAttackArray;
  };

  var getTypeOfPlacedShip = function getTypeOfPlacedShip() {
    if (currentShips.length === 5) return false;
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
    return shipTypes[currentShips.length];
  };

  var recieveRandomAttack = function recieveRandomAttack(randomizer) {
    var randomPosition = createRandomCoords(randomizer);
    var hasBeenHit = filterAttack(hits, randomPosition);
    var hasBeenMiss = filterAttack(misses, randomPosition);

    if (hasBeenHit.length > 0 || hasBeenMiss.length > 0) {
      return recieveRandomAttack(randomizer);
    }

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
    computerBoard.recieveAttack(coords);
    playerBoard.recieveRandomAttack(randomizer);
    return true;
  };

  var setupShip = function setupShip(location, axis) {
    return playerCheckBoard.playerPlaceShip(location, axis);
  };

  var gameIsOver = function gameIsOver() {
    // console.log(playerBoardValues.currentShips, 'the current ships');
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
    var shipTypeObject = playerCheckBoard.getTypeOfPlacedShip(); // console.log(shipTypeObject, 'the ship type object');
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
  var renderSpeed = 10;
  var blockSize = 42;
  var placedShip = false;
  var axis = 'y';
  var mouseBlockLocation = false;

  var getMousePosition = function getMousePosition(offsetX, offsetY) {
    // console.log(offsetX, offsetY, 'offset x and offset y');
    var xCoord = Math.floor(offsetX / blockSize);
    var yCoord = Math.floor(offsetY / blockSize);
    var mousePosition = position.createPosition(xCoord, yCoord);
    if (xCoord < 0 || yCoord < 0) return false;
    return mousePosition;
  };

  var findMousePosition = function findMousePosition(event) {
    var currentMousePosition = getMousePosition(event.offsetX, event.offsetY);
    mouseBlockLocation = currentMousePosition; // console.log(currentMousePosition, 'the current mouse position');
  }; // wotk on this function


  var findTouchPosition = function findTouchPosition(event) {
    var rect = event.target.getBoundingClientRect();
    var touchOffsetX = event.targetTouches[0].pageX - rect.left;
    var touchOffsetY = event.targetTouches[0].pageY - rect.top;
    var touchPosition = getMousePosition(touchOffsetX, touchOffsetY);
    mouseBlockLocation = touchPosition;
    event.preventDefault();
  }; // block size matches the size gridsize of the media query divided by 10


  var changeBlockSize = function changeBlockSize(matchMedia) {
    blockSize = 42;
    if (matchMedia('(max-width: 960px)').matches) blockSize = 30;
    if (matchMedia('(max-width: 470px)').matches) blockSize = 21;
    if (matchMedia('(max-width: 320px)').matches) blockSize = 15; // console.log(matchMedia('(max-width: 320px)'), 'the current match media');
  };

  var createBlockElement = function createBlockElement(blockClass, createBlock) {
    var latestClass = blockClass;

    if (latestClass !== 'hitBlock' && latestClass !== 'missBlock') {
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


  var createDomElement = function createDomElement(elementName) {
    return document.createElement(elementName);
  };

  var createShipBlock = function createShipBlock(shipPosition, latestBlockSize) {
    var shipBlock = createBlockElement(false, createDomElement);
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

  var renderGame = function renderGame() {
    setTimeout(function () {}, renderSpeed);
  };

  var removeShipSelction = function removeShipSelction() {
    var elements = dom.getElements();
    elements.overlay.style.display = 'none';
    elements.sectionScreen.style.display = 'none';
    elements.shipGrid.innerHTML = '';
  };

  var startGame = function startGame(gameRender) {
    removeShipsSelction();
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

      if (!_main_js__WEBPACK_IMPORTED_MODULE_3__.activeGame.checkSetup(checkBoardShips)) renderSelectionGrid();
    }, renderSpeed);
  };

  var activateUi = function activateUi() {
    var pageContent = dom.getPage();
    document.body.innerHTML = pageContent;
    addUiEvents();
    renderSelectionGrid();
  };

  var getValues = function getValues() {
    return {
      blockSize: blockSize,
      placedShip: placedShip,
      axis: axis,
      mouseBlockLocation: mouseBlockLocation
    };
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --darkBlack: rgb(2, 4, 8);\n  --darkGray: rgb(22, 27, 34);\n  --missBlue: rgb(76, 84, 191);\n}\n\n/*credit to https://google-webfonts-helper.herokuapp.com/ for allowing me to import these fonts automatically*/\n/* azeret-mono-regular - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")\n      format('woff2'),\n    /* Super Modern Browsers */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg'); /* Legacy iOS */\n}\n/* azeret-mono-700 - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 700;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ")\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ")\n      format('woff2'),\n    /* Super Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ")\n      format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format('svg'); /* Legacy iOS */\n}\n\n/* roboto-300 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format('woff2'),\n    /* Super Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ")\n      format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */ url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ")\n      format('svg'); /* Legacy iOS */\n}\n/* roboto-regular - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + "); /* IE9 Compat Modes */\n  src: local(''),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ")\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ") format('woff2'),\n    /* Super Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ")\n      format('woff'),\n    /* Modern Browsers */ url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ")\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ") format('svg'); /* Legacy iOS */\n}\n\nhtml {\n  min-height: 100%;\n}\n\nbody {\n  min-height: 100%;\n}\n\n.content {\n  min-height: 100%;\n  font-family: 'Roboto', sans-serif;\n}\n\n.shipGrid {\n  position: relative;\n}\n\n.block {\n  background: white;\n  width: 42px;\n  height: 42px;\n  border: none;\n  position: absolute;\n}\n\n.hitBlock {\n  background: pink;\n}\n\n.cursotBlock {\n  background: green;\n}\n\n.missBlock {\n  background: var(--missBlue);\n}\n\n.sectionScreen {\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n\n  position: fixed;\n\n  display: flex;\n\n  justify-content: center;\n  align-items: center;\n}\n\n.shipTitle {\n  font-family: 'Azeret Mono', monospace;\n}\n\n.shipText {\n  margin: 10px;\n}\n\n.shipSelection {\n  padding: 10px;\n  color: white;\n  background: var(--darkBlack);\n  display: flex;\n  width: 440px;\n  flex-direction: column;\n  align-items: center;\n}\n\n.rotateImage {\n  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(87deg)\n    brightness(100%);\n}\n\n.rotateButton:hover {\n  background: var(--darkBlack);\n  cursor: pointer;\n}\n\n.rotateButton {\n  background: var(--darkGray);\n  border: 1px solid white;\n  margin: 10px;\n  height: 50px;\n  width: 50px;\n  line-height: 50px;\n  text-align: center;\n}\n\n.shipGrid {\n  width: 420px;\n  height: 420px;\n  background: var(--darkGray);\n  border: 1px solid;\n  padding: 0;\n  margin: 0;\n}\n\n.overlay {\n  background: rgba(39, 39, 39, 0.574);\n  z-index: 1;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n}\n\n.content {\n  background: rgb(2, 4, 8);\n}\n\n.mainSection {\n  min-height: 90vh;\n  color: white;\n  position: relative;\n}\n\n.mainTitle {\n  text-align: center;\n  height: 10vh;\n  line-height: 10vh;\n  background: var(--darkGray);\n}\n\n.centerSection {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  justify-content: center;\n\n  align-items: center;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px;\n}\n\n.grid {\n  width: 420px;\n  height: 420px;\n  position: relative;\n  background: var(--darkGray);\n  border: 1px solid white;\n}\n.shipOverlay {\n  width: 420px;\n  height: 420px;\n\n  border: 1px solid blue;\n\n  position: fixed;\n  z-index: 3;\n}\n\n.stats {\n  display: flex;\n  width: 420px;\n  justify-content: space-around;\n  margin: 20px;\n}\n\n.footer {\n  background: var(--darkGray);\n  height: 10vh;\n  color: white;\n  word-wrap: break-word;\n  font-size: small;\n  line-height: 10vh;\n  text-align: center;\n}\n\n.mainTitle h1 {\n  font-family: 'Azeret Mono', monospace;\n}\n\n@media only screen and (max-width: 600px) {\n  .footer {\n    font-size: small;\n  }\n}\n\n@media only screen and (max-width: 960px) {\n  .grid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipGrid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipOverlay {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipSelection {\n    width: 310px;\n  }\n\n  .footer {\n    font-size: x-small;\n  }\n\n  .block {\n    width: 30px;\n    height: 30px;\n  }\n\n  .stats {\n    width: 300px;\n  }\n}\n\n@media only screen and (max-width: 470px) {\n  .grid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipGrid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipOverlay {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipSelection {\n    width: 220px;\n  }\n\n  .shipText {\n    font-size: medium;\n  }\n\n  .boardTitle {\n    font-size: medium;\n  }\n\n  .block {\n    width: 21px;\n    height: 21px;\n  }\n  .footer {\n    font-size: x-small;\n  }\n\n  .stats {\n    width: 210px;\n  }\n}\n\n@media only screen and (max-width: 365px) {\n  .footer {\n    font-size: xx-small;\n  }\n  .footer {\n    font-size: 8px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .grid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .footer {\n    font-size: 6px;\n  }\n\n  .shipOverlay {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipGrid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipSelection {\n    width: 160px;\n  }\n\n  .block {\n    width: 15px;\n    height: 15px;\n  }\n\n  .shipText {\n    font-size: small;\n  }\n\n  .shipTitle {\n    font-size: medium;\n  }\n\n  .stats {\n    width: 150px;\n    font-size: 12px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --darkBlack: rgb(2, 4, 8);\n  --darkGray: rgb(22, 27, 34);\n  --missBlue: rgb(76, 84, 191);\n}\n\n/*credit to https://google-webfonts-helper.herokuapp.com/ for allowing me to import these fonts automatically*/\n/* azeret-mono-regular - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url('../fonts/azeret-mono-v11-latin-regular.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/azeret-mono-v11-latin-regular.eot?#iefix')\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/azeret-mono-v11-latin-regular.woff2')\n      format('woff2'),\n    /* Super Modern Browsers */\n      url('../fonts/azeret-mono-v11-latin-regular.woff') format('woff'),\n    /* Modern Browsers */ url('../fonts/azeret-mono-v11-latin-regular.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url('../fonts/azeret-mono-v11-latin-regular.svg#AzeretMono') format('svg'); /* Legacy iOS */\n}\n/* azeret-mono-700 - latin */\n@font-face {\n  font-family: 'Azeret Mono';\n  font-style: normal;\n  font-weight: 700;\n  src: url('../fonts/azeret-mono-v11-latin-700.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/azeret-mono-v11-latin-700.eot?#iefix')\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/azeret-mono-v11-latin-700.woff2')\n      format('woff2'),\n    /* Super Modern Browsers */ url('../fonts/azeret-mono-v11-latin-700.woff')\n      format('woff'),\n    /* Modern Browsers */ url('../fonts/azeret-mono-v11-latin-700.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url('../fonts/azeret-mono-v11-latin-700.svg#AzeretMono') format('svg'); /* Legacy iOS */\n}\n\n/* roboto-300 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url('../fonts/roboto-v30-latin-300.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/roboto-v30-latin-300.eot?#iefix') format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/roboto-v30-latin-300.woff2') format('woff2'),\n    /* Super Modern Browsers */ url('../fonts/roboto-v30-latin-300.woff')\n      format('woff'),\n    /* Modern Browsers */ url('../fonts/roboto-v30-latin-300.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */ url('../fonts/roboto-v30-latin-300.svg#Roboto')\n      format('svg'); /* Legacy iOS */\n}\n/* roboto-regular - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url('../fonts/roboto-v30-latin-regular.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('../fonts/roboto-v30-latin-regular.eot?#iefix')\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url('../fonts/roboto-v30-latin-regular.woff2') format('woff2'),\n    /* Super Modern Browsers */ url('../fonts/roboto-v30-latin-regular.woff')\n      format('woff'),\n    /* Modern Browsers */ url('../fonts/roboto-v30-latin-regular.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url('../fonts/roboto-v30-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */\n}\n\nhtml {\n  min-height: 100%;\n}\n\nbody {\n  min-height: 100%;\n}\n\n.content {\n  min-height: 100%;\n  font-family: 'Roboto', sans-serif;\n}\n\n.shipGrid {\n  position: relative;\n}\n\n.block {\n  background: white;\n  width: 42px;\n  height: 42px;\n  border: none;\n  position: absolute;\n}\n\n.hitBlock {\n  background: pink;\n}\n\n.cursotBlock {\n  background: green;\n}\n\n.missBlock {\n  background: var(--missBlue);\n}\n\n.sectionScreen {\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n\n  position: fixed;\n\n  display: flex;\n\n  justify-content: center;\n  align-items: center;\n}\n\n.shipTitle {\n  font-family: 'Azeret Mono', monospace;\n}\n\n.shipText {\n  margin: 10px;\n}\n\n.shipSelection {\n  padding: 10px;\n  color: white;\n  background: var(--darkBlack);\n  display: flex;\n  width: 440px;\n  flex-direction: column;\n  align-items: center;\n}\n\n.rotateImage {\n  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(87deg)\n    brightness(100%);\n}\n\n.rotateButton:hover {\n  background: var(--darkBlack);\n  cursor: pointer;\n}\n\n.rotateButton {\n  background: var(--darkGray);\n  border: 1px solid white;\n  margin: 10px;\n  height: 50px;\n  width: 50px;\n  line-height: 50px;\n  text-align: center;\n}\n\n.shipGrid {\n  width: 420px;\n  height: 420px;\n  background: var(--darkGray);\n  border: 1px solid;\n  padding: 0;\n  margin: 0;\n}\n\n.overlay {\n  background: rgba(39, 39, 39, 0.574);\n  z-index: 1;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n}\n\n.content {\n  background: rgb(2, 4, 8);\n}\n\n.mainSection {\n  min-height: 90vh;\n  color: white;\n  position: relative;\n}\n\n.mainTitle {\n  text-align: center;\n  height: 10vh;\n  line-height: 10vh;\n  background: var(--darkGray);\n}\n\n.centerSection {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  justify-content: center;\n\n  align-items: center;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px;\n}\n\n.grid {\n  width: 420px;\n  height: 420px;\n  position: relative;\n  background: var(--darkGray);\n  border: 1px solid white;\n}\n.shipOverlay {\n  width: 420px;\n  height: 420px;\n\n  border: 1px solid blue;\n\n  position: fixed;\n  z-index: 3;\n}\n\n.stats {\n  display: flex;\n  width: 420px;\n  justify-content: space-around;\n  margin: 20px;\n}\n\n.footer {\n  background: var(--darkGray);\n  height: 10vh;\n  color: white;\n  word-wrap: break-word;\n  font-size: small;\n  line-height: 10vh;\n  text-align: center;\n}\n\n.mainTitle h1 {\n  font-family: 'Azeret Mono', monospace;\n}\n\n@media only screen and (max-width: 600px) {\n  .footer {\n    font-size: small;\n  }\n}\n\n@media only screen and (max-width: 960px) {\n  .grid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipGrid {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipOverlay {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipSelection {\n    width: 310px;\n  }\n\n  .footer {\n    font-size: x-small;\n  }\n\n  .block {\n    width: 30px;\n    height: 30px;\n  }\n\n  .stats {\n    width: 300px;\n  }\n}\n\n@media only screen and (max-width: 470px) {\n  .grid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipGrid {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipOverlay {\n    width: 210px;\n    height: 210px;\n  }\n\n  .shipSelection {\n    width: 220px;\n  }\n\n  .shipText {\n    font-size: medium;\n  }\n\n  .boardTitle {\n    font-size: medium;\n  }\n\n  .block {\n    width: 21px;\n    height: 21px;\n  }\n  .footer {\n    font-size: x-small;\n  }\n\n  .stats {\n    width: 210px;\n  }\n}\n\n@media only screen and (max-width: 365px) {\n  .footer {\n    font-size: xx-small;\n  }\n  .footer {\n    font-size: 8px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .grid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .footer {\n    font-size: 6px;\n  }\n\n  .shipOverlay {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipGrid {\n    width: 150px;\n    height: 150px;\n  }\n\n  .shipSelection {\n    width: 160px;\n  }\n\n  .block {\n    width: 15px;\n    height: 15px;\n  }\n\n  .shipText {\n    font-size: small;\n  }\n\n  .shipTitle {\n    font-size: medium;\n  }\n\n  .stats {\n    width: 150px;\n    font-size: 12px;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3ByYWN0aWNhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJztcblxuaW1wb3J0IFVpIGZyb20gJy4vc2NyaXB0cy91aS5qcyc7XG5cbmNvbnN0IGN1cnJlbnRVaSA9IFVpKCk7XG5cbmN1cnJlbnRVaS5hY3RpdmF0ZVVpKCk7XG4iLCJpbXBvcnQgcmVmcmVzaGluZ0xvZ28gZnJvbSAnLi4vaW1hZ2VzL3JlZnJlc2hMb2dvLnN2Zyc7XG5cbmNvbnN0IERvbSA9ICgpID0+IHtcbiAgY29uc3QgZ2V0RWxlbWVudHMgPSAoKSA9PiAoe1xuICAgIG92ZXJsYXk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JyksXG4gICAgc2VjdGlvblNjcmVlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25TY3JlZW4nKSxcbiAgICBzaGlwVGV4dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBUZXh0JyksXG4gICAgc2hpcEdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwR3JpZCcpLFxuICAgIHNoaXBMYXllcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBMYXllcicpLFxuICAgIHJvdGF0ZUJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZUJ1dHRvbicpLFxuICAgIGdyaWRzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkJykpLFxuICAgIGhpdHM6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpdHMnKSksXG4gICAgbWlzc2VzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5taXNzZXMnKSksXG4gICAgcGxheWVyR3JpZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckdyaWQnKSxcbiAgICBwbGF5ZXJIaXRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVySGl0cycpLFxuICAgIHBsYXllck1pc3NlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllck1pc3NlcycpLFxuICAgIGNvbXB1dGVyR3JpZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyR3JpZCcpLFxuICAgIGNvbXB1dGVySGl0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVySGl0cycpLFxuICAgIGNvbXB1dGVyTWlzc2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXJNaXNzZXMnKSxcbiAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLFxuICB9KTtcblxuICBjb25zdCBnZXRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBTZWxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwic2hpcFRpdGxlXCI+QkFUVExFU0hJUDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInNoaXBUZXh0XCI+UGxhY2UgeW91ciBCYXR0bGVzaGlwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBMYXllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwT3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwR3JpZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3RhdGVCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdGF0ZUltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7cmVmcmVzaGluZ0xvZ299XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlJvdGF0ZSBJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzPVwibWFpblNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluVGl0bGVcIj48aDE+QkFUVExFU0hJUDwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyQm9hcmQgYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJib2FyZFRpdGxlXCI+UGxheWVyIEJvYXJkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyR3JpZCBncmlkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllclN0YXRzIHN0YXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwbGF5ZXJIaXRzIGhpdHNcIj5IaXRzIDA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicGxheWVyTWlzc2VzIG1pc3Nlc1wiPk1pc3NlcyAwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXB1dGVyQm9hcmQgYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJib2FyZFRpdGxlXCI+Q29tcHV0ZXIgQm9hcmQ8L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXB1dGVyR3JpZCBncmlkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXB1dGVyU3RhdHMgc3RhdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvbXB1dGVySGl0cyBoaXRzXCI+SGl0cyAwPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY29tcHV0ZXJNaXNzZXMgbWlzc2VzXCI+TWlzc2VzIDA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjb3B5cmlnaHRNZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlYnNpdGUgYW5kIGNvZGUgYXJlIG1hZGUgYnkgQnJheWRlbiBHcm90ZWd1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfTtcblxuICByZXR1cm4geyBnZXRQYWdlLCBnZXRFbGVtZW50cyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9tO1xuIiwiaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCBQcmFjdGljYWwgZnJvbSAnLi9wcmFjdGljYWwuanMnO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcbiAgY29uc3QgcHJhY3RpY2FsID0gUHJhY3RpY2FsKCk7XG5cbiAgbGV0IGN1cnJlbnRTaGlwcyA9IFtdO1xuICBsZXQgaGl0cyA9IFtdO1xuICBsZXQgbWlzc2VzID0gW107XG5cbiAgY29uc3QgcmFuZG9taXplID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gIGNvbnN0IHJhbmRvbUF4aXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXhpZXMgPSBbJ3gnLCAneSddO1xuICAgIHJldHVybiBheGllc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBheGllcy5sZW5ndGgpXTtcbiAgfTtcblxuICBjb25zdCBwbGFjZUFsbFNoaXBzID0gKHNoaXBzQXJyYXkpID0+IHtcbiAgICBjdXJyZW50U2hpcHMgPSBzaGlwc0FycmF5O1xuICAgIHJldHVybiBjdXJyZW50U2hpcHM7XG4gIH07XG5cbiAgY29uc3QgY29tcGFyZVNoaXBzQXJyYXkgPSAobGF0ZXN0U2hpcHNBcnJheSwgc2hpcHMpID0+IHtcbiAgICBsZXQgc2hpcHNEb0NvbGxpZGUgPSBmYWxzZTtcbiAgICAvLyBjb25zb2xlLmxvZyhsYXRlc3RTaGlwc0FycmF5LCAndGhlIGN1cnJlZW50IHNoaXBzIGFycmF5Jyk7XG4gICAgLy8gY29uc29sZS5sb2coc2hpcHMsICd0aGUgY3VycmVudCBzaGlwcycpO1xuXG4gICAgbGF0ZXN0U2hpcHNBcnJheS5mb3JFYWNoKChsYXRlc3RTaGlwcykgPT4ge1xuICAgICAgbGF0ZXN0U2hpcHMuZm9yRWFjaCgoYm9hdCkgPT4ge1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChsYXRlc3RCb2F0KSA9PiB7XG4gICAgICAgICAgaWYgKHBvc2l0aW9uLmNvbXBhcmVQb3NpdGlvbihib2F0LCBsYXRlc3RCb2F0KSkge1xuICAgICAgICAgICAgc2hpcHNEb0NvbGxpZGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaGlwc0RvQ29sbGlkZTtcbiAgfTtcblxuICBjb25zdCBwbGF5ZXJQbGFjZVNoaXAgPSAobG9jYXRpb24sIGF4aXMpID0+IHtcbiAgICBjb25zdCBsYXRlc3RQb3NpdGlvbiA9IGxvY2F0aW9uO1xuICAgIGNvbnN0IGN1cnJlbnRBcnJheSA9IHByYWN0aWNhbC5jb3B5QXJyYXkoY3VycmVudFNoaXBzKTtcblxuICAgIGxldCBzaGlwbGVuZ3RoID0gNSAtIGN1cnJlbnRBcnJheS5sZW5ndGg7XG5cbiAgICBpZiAoY3VycmVudEFycmF5Lmxlbmd0aCA+IDMpIHNoaXBsZW5ndGggPSAyO1xuXG4gICAgaWYgKGN1cnJlbnRBcnJheS5sZW5ndGggPT09IDUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNoaXBzQXJyYXk6IGN1cnJlbnRBcnJheSxcbiAgICAgICAgbWVzc2FnZTogJ1lvdSBoYXZlIGFscmVhZHkgcGxhY2VkIGFsbCBvZiB5b3VyIHNoaXBzJyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAobGF0ZXN0UG9zaXRpb24sIHNoaXBsZW5ndGgsIGF4aXMpO1xuICAgIGlmICghY3VycmVudFNoaXApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNoaXBBcnJheTogY3VycmVudEFycmF5LFxuICAgICAgICBtZXNzYWdlOiAnWW91IGNhbm5vdCBwbGFjZSBhIHNoaXAgdGhlcmUnLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0NvbGxpZGVkID0gY29tcGFyZVNoaXBzQXJyYXkoY3VycmVudEFycmF5LCBjdXJyZW50U2hpcCk7XG5cbiAgICBpZiAoIWlzQ29sbGlkZWQpIHtcbiAgICAgIGN1cnJlbnRBcnJheS5wdXNoKGN1cnJlbnRTaGlwKTtcbiAgICAgIGN1cnJlbnRTaGlwcyA9IGN1cnJlbnRBcnJheTtcbiAgICAgIHJldHVybiBjdXJyZW50QXJyYXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNoaXBBcnJheTogY3VycmVudEFycmF5LFxuICAgICAgbWVzc2FnZTogXCJZb3UndmUgYWxyZWFkeSBwbGFjZWQgYSBzaGlwIHRoZXJlXCIsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVJhbmRvbVNoaXBzID0gKGxlbmd0aCwgc2hpcHNBcnJheSwgcmFuZG9taXplciwgcmFuZG9tQXhpZXMpID0+IHtcbiAgICBjb25zdCBsYXRlc3RTaGlwc0FycmF5ID0gc2hpcHNBcnJheTtcbiAgICBsZXQgbGF0ZXN0TGVuZ3RoID0gbGVuZ3RoO1xuICAgIGNvbnN0IHJhbmRvbVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24ocmFuZG9taXplcigpLCByYW5kb21pemVyKCkpO1xuICAgIGNvbnN0IHJhbmRvbVNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAoXG4gICAgICByYW5kb21Qb3NpdGlvbixcbiAgICAgIGxhdGVzdExlbmd0aCxcbiAgICAgIHJhbmRvbUF4aWVzKClcbiAgICApO1xuXG4gICAgaWYgKHJhbmRvbVNoaXApIHtcbiAgICAgIGNvbnN0IHNoaXBDb2xsaWRlcyA9IGNvbXBhcmVTaGlwc0FycmF5KGxhdGVzdFNoaXBzQXJyYXksIHJhbmRvbVNoaXApO1xuICAgICAgaWYgKCFzaGlwQ29sbGlkZXMpIHtcbiAgICAgICAgaWYgKGxhdGVzdExlbmd0aCA+IDIpIGxhdGVzdExlbmd0aCAtPSAxO1xuICAgICAgICBpZiAoc2hpcHNBcnJheS5sZW5ndGggPCA1KSBsYXRlc3RTaGlwc0FycmF5LnB1c2gocmFuZG9tU2hpcCk7XG5cbiAgICAgICAgaWYgKHNoaXBzQXJyYXkubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgcmV0dXJuIGxhdGVzdFNoaXBzQXJyYXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGxhY2VSYW5kb21TaGlwcyhcbiAgICAgIGxhdGVzdExlbmd0aCxcbiAgICAgIGxhdGVzdFNoaXBzQXJyYXksXG4gICAgICByYW5kb21pemVyLFxuICAgICAgcmFuZG9tQXhpZXNcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcHNSYW5kb21seSA9IChyYW5kb21pemVyLCByYW5kb21BeGllcykgPT4ge1xuICAgIGNvbnN0IHNoaXBzQXJyYXkgPSBwbGFjZVJhbmRvbVNoaXBzKDUsIFtdLCByYW5kb21pemVyLCByYW5kb21BeGllcyk7XG4gICAgY3VycmVudFNoaXBzID0gc2hpcHNBcnJheTtcblxuICAgIHJldHVybiBzaGlwc0FycmF5O1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja1NoaXAgPSAobGF0ZXN0UG9zaXRpb24sIHNoaXBzLCBjdXJyZW50SGl0cywgY3VycmVudE1pc3NlcykgPT4ge1xuICAgIGxldCBpc0hpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxhdGVzdFNoaXBzQXJyYXkgPSBbXTtcbiAgICBjb25zdCBsYXRlc3RIaXRzID0gY3VycmVudEhpdHM7XG4gICAgY29uc3QgbGF0ZXN0TWlzc2VzID0gY3VycmVudE1pc3NlcztcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXBBcnJheSkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uc0FycmF5ID0gcHJhY3RpY2FsLmNvcHlBcnJheShzaGlwQXJyYXkpO1xuICAgICAgY29uc3QgaGl0ID0gc2hpcC5oaXQocG9zaXRpb25zQXJyYXksIGxhdGVzdFBvc2l0aW9uKTtcblxuICAgICAgaWYgKGhpdC5oaXRBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaXNIaXQgPSB0cnVlO1xuICAgICAgICBwb3NpdGlvbnNBcnJheSA9IGhpdC5zaGlwQXJyYXlzO1xuICAgICAgICBsYXRlc3RIaXRzLnB1c2goaGl0LmhpdEFycmF5WzBdKTtcbiAgICAgIH1cbiAgICAgIGxhdGVzdFNoaXBzQXJyYXkucHVzaChwb3NpdGlvbnNBcnJheSk7XG4gICAgfSk7XG4gICAgaWYgKCFpc0hpdCkgbGF0ZXN0TWlzc2VzLnB1c2gobGF0ZXN0UG9zaXRpb24pO1xuXG4gICAgY29uc3QgZmluYWxPYmplY3QgPSB7XG4gICAgICBpc0hpdCxcbiAgICAgIGxhdGVzdFNoaXBzQXJyYXksXG4gICAgICBsYXRlc3RIaXRzLFxuICAgICAgbGF0ZXN0TWlzc2VzLFxuICAgIH07XG5cbiAgICByZXR1cm4gZmluYWxPYmplY3Q7XG4gIH07XG5cbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChsYXRlc3RQb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF0dGFja1NoaXAobGF0ZXN0UG9zaXRpb24sIGN1cnJlbnRTaGlwcywgaGl0cywgbWlzc2VzKTtcblxuICAgIGN1cnJlbnRTaGlwcyA9IHJlc3VsdC5sYXRlc3RTaGlwc0FycmF5O1xuICAgIGhpdHMgPSByZXN1bHQubGF0ZXN0SGl0cztcbiAgICBtaXNzZXMgPSByZXN1bHQubGF0ZXN0TWlzc2VzO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVSYW5kb21Db29yZHMgPSAocmFuZG9taXplcikgPT4ge1xuICAgIGxldCByYW5kb21Qb3NpdGlvbjtcblxuICAgIGlmIChyYW5kb21pemVyLmlzTW9ja1JhbmRvbSkge1xuICAgICAgcmFuZG9tUG9zaXRpb24gPSByYW5kb21pemVyLmNhbGxSYW5kb21pemVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJhbmRvbVggPSByYW5kb21pemVyKCk7XG4gICAgICBjb25zdCByYW5kb21ZID0gcmFuZG9taXplcigpO1xuICAgICAgcmFuZG9tUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihyYW5kb21YLCByYW5kb21ZKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZG9tUG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyQXR0YWNrID0gKGFycmF5LCBjdXJyZW50QXR0YWNrKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEF0dGFja0FycmF5ID0gYXJyYXkuZmlsdGVyKFxuICAgICAgKGl0ZW0pID0+XG4gICAgICAgIGl0ZW0ueENvb3JkID09PSBjdXJyZW50QXR0YWNrLnhDb29yZCAmJlxuICAgICAgICBpdGVtLnlDb29yZCA9PT0gY3VycmVudEF0dGFjay55Q29vcmRcbiAgICApO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRBdHRhY2tBcnJheTtcbiAgfTtcblxuICBjb25zdCBnZXRUeXBlT2ZQbGFjZWRTaGlwID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50U2hpcHMubGVuZ3RoID09PSA1KSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBzaGlwVHlwZXMgPSBbXG4gICAgICB7IHNoaXBUeXBlOiAnY2FycmllcicsIHNoaXBMZW5ndGg6IDUgfSxcbiAgICAgIHsgc2hpcFR5cGU6ICdiYXR0bGVzaGlwJywgc2hpcExlbmd0aDogNCB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2Rlc3RveWVyJywgc2hpcExlbmd0aDogMyB9LFxuICAgICAgeyBzaGlwVHlwZTogJ3N1Ym1hcmluZScsIHNoaXBMZW5ndGg6IDMgfSxcbiAgICAgIHsgc2hpcFR5cGU6ICdndW5ib2F0Jywgc2hpcExlbmd0aDogMiB9LFxuICAgIF07XG5cbiAgICByZXR1cm4gc2hpcFR5cGVzW2N1cnJlbnRTaGlwcy5sZW5ndGhdO1xuICB9O1xuXG4gIGNvbnN0IHJlY2lldmVSYW5kb21BdHRhY2sgPSAocmFuZG9taXplcikgPT4ge1xuICAgIGNvbnN0IHJhbmRvbVBvc2l0aW9uID0gY3JlYXRlUmFuZG9tQ29vcmRzKHJhbmRvbWl6ZXIpO1xuXG4gICAgY29uc3QgaGFzQmVlbkhpdCA9IGZpbHRlckF0dGFjayhoaXRzLCByYW5kb21Qb3NpdGlvbik7XG4gICAgY29uc3QgaGFzQmVlbk1pc3MgPSBmaWx0ZXJBdHRhY2sobWlzc2VzLCByYW5kb21Qb3NpdGlvbik7XG5cbiAgICBpZiAoaGFzQmVlbkhpdC5sZW5ndGggPiAwIHx8IGhhc0JlZW5NaXNzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiByZWNpZXZlUmFuZG9tQXR0YWNrKHJhbmRvbWl6ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVjaWV2ZUF0dGFjayhyYW5kb21Qb3NpdGlvbik7XG4gIH07XG5cbiAgY29uc3QgaXNBbGxTdW5rID0gKCkgPT4ge1xuICAgIGxldCBoYXNTdW5rZWQgPSB0cnVlO1xuICAgIGN1cnJlbnRTaGlwcy5mb3JFYWNoKChzaGlwcykgPT4ge1xuICAgICAgaWYgKCFzaGlwLmlzU3VuayhzaGlwcykpIHtcbiAgICAgICAgaGFzU3Vua2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaGFzU3Vua2VkO1xuICB9O1xuXG4gIGNvbnN0IGdldFZhbHVlcyA9ICgpID0+ICh7XG4gICAgY3VycmVudFNoaXBzLFxuICAgIGhpdHMsXG4gICAgbWlzc2VzLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGF0dGFja1NoaXAsXG4gICAgcmVjaWV2ZUF0dGFjayxcbiAgICBpc0FsbFN1bmssXG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5LFxuICAgIHBsYXllclBsYWNlU2hpcCxcbiAgICBwbGFjZUFsbFNoaXBzLFxuICAgIHJhbmRvbWl6ZSxcbiAgICByZWNpZXZlUmFuZG9tQXR0YWNrLFxuICAgIHJhbmRvbUF4aXMsXG4gICAgZ2V0VmFsdWVzLFxuICAgIGdldFR5cGVPZlBsYWNlZFNoaXAsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5cbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcblxuY29uc3QgR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBwbGF5ZXJDaGVja0JvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuXG4gIGNvbnN0IHNoaXAgPSBTaGlwKCk7XG5cbiAgY29uc3QgcmFuZG9taXplciA9IGNvbXB1dGVyQm9hcmQucmFuZG9taXplO1xuICBjb25zdCByYW5kb21BeGllcyA9IGNvbXB1dGVyQm9hcmQucmFuZG9tQXhpcztcblxuICBjb25zdCBjaGVja1NldHVwID0gKHBsYXllckNoZWNrU2hpcHMpID0+IHtcbiAgICBpZiAocGxheWVyQ2hlY2tTaGlwcy5sZW5ndGggPT09IDUpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBzZXR1cEdhbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQ2hlY2tWYWx1ZXMgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgaWYgKCFjaGVja1NldHVwKHBsYXllckNoZWNrVmFsdWVzLmN1cnJlbnRTaGlwcykpIHJldHVybiBmYWxzZTtcblxuICAgIHBsYXllckJvYXJkLnBsYWNlQWxsU2hpcHMocGxheWVyQ2hlY2tWYWx1ZXMuY3VycmVudFNoaXBzKTtcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcHNSYW5kb21seShyYW5kb21pemVyLCByYW5kb21BeGllcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrQm9hdHMgPSAoY29vcmRzKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQ2hlY2tWYWx1ZXMgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgaWYgKCFjaGVja1NldHVwKHBsYXllckNoZWNrVmFsdWVzLmN1cnJlbnRTaGlwcykpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbXB1dGVyQm9hcmQucmVjaWV2ZUF0dGFjayhjb29yZHMpO1xuICAgIHBsYXllckJvYXJkLnJlY2lldmVSYW5kb21BdHRhY2socmFuZG9taXplcik7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBzZXR1cFNoaXAgPSAobG9jYXRpb24sIGF4aXMpID0+XG4gICAgcGxheWVyQ2hlY2tCb2FyZC5wbGF5ZXJQbGFjZVNoaXAobG9jYXRpb24sIGF4aXMpO1xuXG4gIGNvbnN0IGdhbWVJc092ZXIgPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyQm9hcmRWYWx1ZXMuY3VycmVudFNoaXBzLCAndGhlIGN1cnJlbnQgc2hpcHMnKTtcblxuICAgIGlmIChjb21wdXRlckJvYXJkLmlzQWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4geyBtZXNzYWdlOiAnWW91IFdvbicsIGdhbWVGaW5pc2hlZDogdHJ1ZSB9O1xuICAgIH1cblxuICAgIGlmIChwbGF5ZXJCb2FyZC5pc0FsbFN1bmsoKSkge1xuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ1lvdSBMb3N0JywgZ2FtZUZpbmlzaGVkOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiB7IGdhbWVGaW5pc2hlZDogZmFsc2UgfTtcbiAgfTtcblxuICBjb25zdCBhcnJhbmdlQmxvY2tzID0gKG1vdXNlUG9zaXRpb24sIGN1cnJlbnRSb3RhdGlvbikgPT4ge1xuICAgIGNvbnN0IHNoaXBUeXBlT2JqZWN0ID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRUeXBlT2ZQbGFjZWRTaGlwKCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwVHlwZU9iamVjdCwgJ3RoZSBzaGlwIHR5cGUgb2JqZWN0Jyk7XG4gICAgLy8gY29uc29sZS5sb2cobW91c2VQb3NpdGlvbiwgJ3RoZSBtb3VzZSBwb3NpdGlvbicpO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRSb3RhdGlvbiwgJ3RoZSBjdXJyZW50IHJvdGF0aW9uJyk7XG5cbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXAuY3JlYXRlU2hpcChcbiAgICAgIG1vdXNlUG9zaXRpb24sXG4gICAgICBzaGlwVHlwZU9iamVjdC5zaGlwTGVuZ3RoLFxuICAgICAgY3VycmVudFJvdGF0aW9uXG4gICAgKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50U2hpcCwgJ3RoZSBtb3N0IHVwIHRvIGRhdGUgc2hpcHMnKTtcblxuICAgIHJldHVybiBjdXJyZW50U2hpcDtcbiAgfTtcblxuICBjb25zdCBnZXRHYW1lVmFsdWVzID0gKCkgPT4gKHtcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBjb21wdXRlckJvYXJkLFxuICAgIHBsYXllckNoZWNrQm9hcmQsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgY2hlY2tTZXR1cCxcbiAgICBhdHRhY2tCb2F0cyxcbiAgICBzZXR1cEdhbWUsXG4gICAgZ2FtZUlzT3ZlcixcbiAgICBzZXR1cFNoaXAsXG4gICAgZ2V0R2FtZVZhbHVlcyxcbiAgICBhcnJhbmdlQmxvY2tzLFxuICB9O1xufTtcblxuY29uc3QgYWN0aXZlR2FtZSA9IEdhbWUoKTtcblxuZXhwb3J0IHsgR2FtZSwgYWN0aXZlR2FtZSB9O1xuIiwiY29uc3QgUG9zaXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVBvc2l0aW9uID0gKHhDb29yZCwgeUNvb3JkKSA9PiAoeyB4Q29vcmQsIHlDb29yZCB9KTtcblxuICBjb25zdCBjaGVja091dE9mQm91bmNlID0gKG5ld1Bvc2l0aW9uKSA9PiB7XG4gICAgaWYgKG5ld1Bvc2l0aW9uLnhDb29yZCA+IDkgfHwgbmV3UG9zaXRpb24ueUNvb3JkID4gOSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKG5ld1Bvc2l0aW9uLnhDb29yZCA8IDAgfHwgbmV3UG9zaXRpb24ueUNvb3JkIDwgMCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGFkZFBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMSA9PT0gZmFsc2UgfHwgcG9zaXRpb24yID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBjcmVhdGVQb3NpdGlvbihwb3NpdGlvbjEueENvb3JkLCBwb3NpdGlvbjEueUNvb3JkKTtcbiAgICBuZXdQb3NpdGlvbi54Q29vcmQgKz0gcG9zaXRpb24yLnhDb29yZDtcbiAgICBuZXdQb3NpdGlvbi55Q29vcmQgKz0gcG9zaXRpb24yLnlDb29yZDtcblxuICAgIGlmIChjaGVja091dE9mQm91bmNlKG5ld1Bvc2l0aW9uKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IG11bHRpcGx5UG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAocG9zaXRpb24xID09PSBmYWxzZSB8fCBwb3NpdGlvbjIgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGNyZWF0ZVBvc2l0aW9uKHBvc2l0aW9uMS54Q29vcmQsIHBvc2l0aW9uMS55Q29vcmQpO1xuICAgIG5ld1Bvc2l0aW9uLnhDb29yZCAqPSBwb3NpdGlvbjIueENvb3JkO1xuICAgIG5ld1Bvc2l0aW9uLnlDb29yZCAqPSBwb3NpdGlvbjIueUNvb3JkO1xuXG4gICAgaWYgKGNoZWNrT3V0T2ZCb3VuY2UobmV3UG9zaXRpb24pKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbmV3UG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbCA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgYXhpcykgPT4ge1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSArIDEpIHJldHVybiB0cnVlO1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHBvc2l0aW9uMVtheGlzXSA9PT0gcG9zaXRpb24yW2F4aXNdIC0gMSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmVQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmICghY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgJ3hDb29yZCcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgJ3lDb29yZCcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlUG9zaXRpb24sXG4gICAgYWRkUG9zaXRpb24sXG4gICAgbXVsdGlwbHlQb3NpdGlvbixcbiAgICBjb21wYXJlUG9zaXRpb24sXG4gICAgY2hlY2tPdXRPZkJvdW5jZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc2l0aW9uO1xuIiwiY29uc3QgUHJhY3RpY2FsID0gKCkgPT4ge1xuICBjb25zdCBjb3B5QXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgICBjb25zdCBuZXdBcnJheSA9IFtdO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgbmV3QXJyYXkucHVzaChpdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdBcnJheTtcbiAgfTtcblxuICBjb25zdCBpc09iamVjdCA9IChjdXJyZW50T2JqZWN0KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50T2JqZWN0ID09PSAnb2JqZWN0JyAmJiBjdXJyZW50T2JqZWN0ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrT2JqZWN0ID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBzZWNvbmRJbmRleCA9IDA7XG5cbiAgICBsZXQgb2JqZWN0SXNFcXVhbCA9IHRydWU7XG5cbiAgICBjb25zdCBjdXJyZW50T2JqZWN0ID0gb2JqZWN0MTtcbiAgICBjb25zdCBjdXJyZW50T2JqZWN0MiA9IG9iamVjdDI7XG5cbiAgICBjb25zdCBjdXJyZW50T2JqZWN0VmFsdWVzID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50T2JqZWN0KTtcbiAgICBjb25zdCBjdXJyZW50T2JqZWN0MlZhbHVlcyA9IE9iamVjdC52YWx1ZXMoY3VycmVudE9iamVjdDIpO1xuXG4gICAgY29uc3Qgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKGN1cnJlbnRPYmplY3QpO1xuICAgIGNvbnN0IG9iamVjdEtleXMyID0gT2JqZWN0LmtleXMoY3VycmVudE9iamVjdDIpO1xuXG4gICAgb2JqZWN0S2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChrZXkgIT09IG9iamVjdEtleXMyW2luZGV4XSkgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgaW5kZXggKz0gMTtcbiAgICB9KTtcblxuICAgIGlmICghb2JqZWN0SXNFcXVhbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChvYmplY3RLZXlzLmxlbmd0aCAhPT0gb2JqZWN0S2V5czIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50T2JqZWN0LCAndGhlIGN1cnJlbnQgb2JqZWN0Jyk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudE9iamVjdDIsICd0aGUgY3VycmVudCBvYmplY3QyJyk7XG5cbiAgICBjdXJyZW50T2JqZWN0VmFsdWVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0yID0gY3VycmVudE9iamVjdDJWYWx1ZXNbc2Vjb25kSW5kZXhdO1xuXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkgJiYgaXNPYmplY3QoaXRlbTIpKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrT2JqZWN0Qm9vbCA9IGNoZWNrT2JqZWN0KGl0ZW0sIGl0ZW0yKTtcblxuICAgICAgICBpZiAoIWNoZWNrT2JqZWN0Qm9vbCkgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChpdGVtICE9PSBpdGVtMikge1xuICAgICAgICBvYmplY3RJc0VxdWFsID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHNlY29uZEluZGV4ICs9IDE7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqZWN0SXNFcXVhbDtcbiAgfTtcblxuICByZXR1cm4geyBjb3B5QXJyYXksIGNoZWNrT2JqZWN0IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmFjdGljYWw7XG4iLCJpbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5cbmNvbnN0IFNoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcblxuICBjb25zdCBnZXRBZGRlZFBvc2l0aW9uID0gKGF4aXMpID0+IHtcbiAgICBsZXQgYWRkZWRQb3NpdGlvbjtcblxuICAgIGlmIChheGlzID09PSAneCcpIGFkZGVkUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbigxLCAwKTtcbiAgICBlbHNlIGFkZGVkUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbigwLCAxKTtcblxuICAgIHJldHVybiBhZGRlZFBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVNoaXAgPSAocG9zaXRpb24xLCBsZW5ndGgxLCBheGlzKSA9PiB7XG4gICAgaWYgKGxlbmd0aDEgPT09IDAgfHwgbGVuZ3RoMSA+IDUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocG9zaXRpb24uY2hlY2tPdXRPZkJvdW5jZShwb3NpdGlvbjEpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBwb3B1bGF0ZVNoaXBzID0gKGN1cnJlbnRQb3NpdGlvbiwgbGF0ZXN0TGVuZ3RoLCBsYXRlc3RBcnJheSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEFycmF5ID0gbGF0ZXN0QXJyYXk7XG4gICAgICBsZXQgbmV3UG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb247XG5cbiAgICAgIGlmIChjdXJyZW50UG9zaXRpb24gPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAobGF0ZXN0TGVuZ3RoID09PSAwKSByZXR1cm4gY3VycmVudEFycmF5O1xuICAgICAgaWYgKGxhdGVzdExlbmd0aCA9PT0gbGVuZ3RoMSkge1xuICAgICAgICBjdXJyZW50QXJyYXkucHVzaChjdXJyZW50UG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhjdXJyZW50UG9zaXRpb24sIGxhdGVzdExlbmd0aCAtIDEsIGN1cnJlbnRBcnJheSk7XG4gICAgICB9XG4gICAgICBjb25zdCBhZGRlZFBvc2l0aW9uID0gZ2V0QWRkZWRQb3NpdGlvbihheGlzKTtcbiAgICAgIG5ld1Bvc2l0aW9uID0gcG9zaXRpb24uYWRkUG9zaXRpb24obmV3UG9zaXRpb24sIGFkZGVkUG9zaXRpb24pO1xuXG4gICAgICBpZiAoIW5ld1Bvc2l0aW9uKSByZXR1cm4gbmV3UG9zaXRpb247XG4gICAgICBjdXJyZW50QXJyYXkucHVzaChuZXdQb3NpdGlvbik7XG5cbiAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gY3VycmVudEFycmF5Lmxlbmd0aCAtIDE7XG5cbiAgICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKFxuICAgICAgICBjdXJyZW50QXJyYXlbYXJyYXlMZW5ndGhdLFxuICAgICAgICBsYXRlc3RMZW5ndGggLSAxLFxuICAgICAgICBjdXJyZW50QXJyYXlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKHBvc2l0aW9uMSwgbGVuZ3RoMSwgW10sIGZhbHNlKTtcbiAgfTtcblxuXG5cbiAgY29uc3QgaXNTdW5rID0gKHNoaXBBcnJheSkgPT4ge1xuICAgIGlmIChzaGlwQXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaGl0ID0gKHBvc2l0aW9uc0FycmF5LCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGhpdEFycmF5ID0gcG9zaXRpb25zQXJyYXkuZmlsdGVyKChwb3MpID0+IHtcbiAgICAgIGlmIChwb3MueENvb3JkID09PSBwb3NpdGlvbi54Q29vcmQgJiYgcG9zLnlDb29yZCA9PT0gcG9zaXRpb24ueUNvb3JkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGNvbnN0IHNoaXBBcnJheXMgPSBwb3NpdGlvbnNBcnJheS5maWx0ZXIoKHBvcykgPT4ge1xuICAgICAgaWYgKHBvcy54Q29vcmQgPT09IHBvc2l0aW9uLnhDb29yZCAmJiBwb3MueUNvb3JkID09PSBwb3NpdGlvbi55Q29vcmQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBoaXRBcnJheSwgc2hpcEFycmF5cyB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlU2hpcCxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCBEb20gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCB7IGFjdGl2ZUdhbWUgfSBmcm9tICcuL21haW4uanMnO1xuXG5jb25zdCBVaSA9ICgpID0+IHtcbiAgY29uc3QgZG9tID0gRG9tKCk7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcblxuICBjb25zdCByZW5kZXJTcGVlZCA9IDEwO1xuXG4gIGxldCBibG9ja1NpemUgPSA0MjtcblxuICBsZXQgcGxhY2VkU2hpcCA9IGZhbHNlO1xuICBsZXQgYXhpcyA9ICd5JztcblxuICBsZXQgbW91c2VCbG9ja0xvY2F0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgZ2V0TW91c2VQb3NpdGlvbiA9IChvZmZzZXRYLCBvZmZzZXRZKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cob2Zmc2V0WCwgb2Zmc2V0WSwgJ29mZnNldCB4IGFuZCBvZmZzZXQgeScpO1xuXG4gICAgY29uc3QgeENvb3JkID0gTWF0aC5mbG9vcihvZmZzZXRYIC8gYmxvY2tTaXplKTtcbiAgICBjb25zdCB5Q29vcmQgPSBNYXRoLmZsb29yKG9mZnNldFkgLyBibG9ja1NpemUpO1xuXG4gICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHhDb29yZCwgeUNvb3JkKTtcblxuICAgIGlmICh4Q29vcmQgPCAwIHx8IHlDb29yZCA8IDApIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBtb3VzZVBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGZpbmRNb3VzZVBvc2l0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY3VycmVudE1vdXNlUG9zaXRpb24gPSBnZXRNb3VzZVBvc2l0aW9uKGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuXG4gICAgbW91c2VCbG9ja0xvY2F0aW9uID0gY3VycmVudE1vdXNlUG9zaXRpb247XG5cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50TW91c2VQb3NpdGlvbiwgJ3RoZSBjdXJyZW50IG1vdXNlIHBvc2l0aW9uJyk7XG4gIH07XG5cbiAgLy8gd290ayBvbiB0aGlzIGZ1bmN0aW9uXG4gIGNvbnN0IGZpbmRUb3VjaFBvc2l0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB0b3VjaE9mZnNldFggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgIGNvbnN0IHRvdWNoT2Zmc2V0WSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSByZWN0LnRvcDtcblxuICAgIGNvbnN0IHRvdWNoUG9zaXRpb24gPSBnZXRNb3VzZVBvc2l0aW9uKHRvdWNoT2Zmc2V0WCwgdG91Y2hPZmZzZXRZKTtcbiAgICBtb3VzZUJsb2NrTG9jYXRpb24gPSB0b3VjaFBvc2l0aW9uO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICAvLyBibG9jayBzaXplIG1hdGNoZXMgdGhlIHNpemUgZ3JpZHNpemUgb2YgdGhlIG1lZGlhIHF1ZXJ5IGRpdmlkZWQgYnkgMTBcbiAgY29uc3QgY2hhbmdlQmxvY2tTaXplID0gKG1hdGNoTWVkaWEpID0+IHtcbiAgICBibG9ja1NpemUgPSA0MjtcbiAgICBpZiAobWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTYwcHgpJykubWF0Y2hlcykgYmxvY2tTaXplID0gMzA7XG4gICAgaWYgKG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDQ3MHB4KScpLm1hdGNoZXMpIGJsb2NrU2l6ZSA9IDIxO1xuICAgIGlmIChtYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAzMjBweCknKS5tYXRjaGVzKSBibG9ja1NpemUgPSAxNTtcblxuICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDMyMHB4KScpLCAndGhlIGN1cnJlbnQgbWF0Y2ggbWVkaWEnKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVCbG9ja0VsZW1lbnQgPSAoYmxvY2tDbGFzcywgY3JlYXRlQmxvY2spID0+IHtcbiAgICBsZXQgbGF0ZXN0Q2xhc3MgPSBibG9ja0NsYXNzO1xuXG4gICAgaWYgKGxhdGVzdENsYXNzICE9PSAnaGl0QmxvY2snICYmIGxhdGVzdENsYXNzICE9PSAnbWlzc0Jsb2NrJykge1xuICAgICAgbGF0ZXN0Q2xhc3MgPSAnJztcbiAgICB9XG5cbiAgICBjb25zdCBibG9ja0VsZW1lbnQgPSBjcmVhdGVCbG9jaygnZGl2Jyk7XG4gICAgYmxvY2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJyk7XG4gICAgaWYgKGxhdGVzdENsYXNzICE9PSAnJykgYmxvY2tFbGVtZW50LmNsYXNzTGlzdC5hZGQobGF0ZXN0Q2xhc3MpO1xuXG4gICAgcmV0dXJuIGJsb2NrRWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBkaXNhYmxlU3RhcnRlclVpID0gKCkgPT4gdHJ1ZTtcblxuICAvLyBjb25zdCByZW5kZXJTZWxlY3Rpb25CbG9ja3MgPSAobW91c2VQb3NpdGlvbiwgbGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gIC8vICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gIC8vICAgY29uc3QgY3VycmVudFNuYWtlQmxvY2sgPSBjcmVhdGVCbG9ja0VsZW1lbnQoKTtcbiAgLy8gICBjb25zdCByZWFsUG9zaXRpb25YID0gTWF0aC5mbG9vcihtb3VzZVBvc2l0aW9uLnhDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG4gIC8vICAgY29uc3QgcmVhbFBvc2l0aW9uWSA9IE1hdGguZmxvb3IobW91c2VQb3NpdGlvbi55Q29vcmQgKiBsYXRlc3RCbG9ja1NpemUpO1xuXG4gIC8vICAgY29uc29sZS5sb2cobW91c2VQb3NpdGlvbiwgJ1RIRSBDVVJSRU5UIE1PVVNFIFBPU0lUSU9OJyk7XG5cbiAgLy8gICBjb25zb2xlLmxvZyhyZWFsUG9zaXRpb25YLCAndGhlIHJlYWwgcG9zaXRpb24geCcpO1xuICAvLyAgIGNvbnNvbGUubG9nKHJlYWxQb3NpdGlvblksICd0aGUgcmVhbCBwb3NpdGlvbiB5Jyk7XG5cbiAgLy8gICBjdXJyZW50U25ha2VCbG9jay5zdHlsZS5sZWZ0ID0gYCR7cmVhbFBvc2l0aW9uWH1weGA7XG4gIC8vICAgY3VycmVudFNuYWtlQmxvY2suc3R5bGUudG9wID0gYCR7cmVhbFBvc2l0aW9uWX1weGA7XG5cbiAgLy8gICBlbGVtZW50LnNoaXBHcmlkLmFwcGVuZENoaWxkKGN1cnJlbnRTbmFrZUJsb2NrKTtcbiAgLy8gfTtcblxuICBjb25zdCBjcmVhdGVEb21FbGVtZW50ID0gKGVsZW1lbnROYW1lKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcblxuICBjb25zdCBjcmVhdGVTaGlwQmxvY2sgPSAoc2hpcFBvc2l0aW9uLCBsYXRlc3RCbG9ja1NpemUpID0+IHtcbiAgICBjb25zdCBzaGlwQmxvY2sgPSBjcmVhdGVCbG9ja0VsZW1lbnQoZmFsc2UsIGNyZWF0ZURvbUVsZW1lbnQpO1xuXG4gICAgY29uc3QgcmVhbFBvc2l0aW9uWCA9IE1hdGguZmxvb3Ioc2hpcFBvc2l0aW9uLnhDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgY29uc3QgcmVhbFBvc2l0aW9uWSA9IE1hdGguZmxvb3Ioc2hpcFBvc2l0aW9uLnlDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgc2hpcEJsb2NrLnN0eWxlLmxlZnQgPSBgJHtyZWFsUG9zaXRpb25YfXB4YDtcbiAgICBzaGlwQmxvY2suc3R5bGUudG9wID0gYCR7cmVhbFBvc2l0aW9uWX1weGA7XG5cbiAgICByZXR1cm4gc2hpcEJsb2NrO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckFscmVhZHlQbGFjZWRTaGlwcyA9IChzaGlwR3JpZCwgbGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgY29uc3QgZ2FtZVZhbHVlcyA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuICAgIGNvbnN0IGNoZWNrQm9hcmRTaGlwcyA9XG4gICAgICBnYW1lVmFsdWVzLnBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCkuY3VycmVudFNoaXBzO1xuXG4gICAgY2hlY2tCb2FyZFNoaXBzLmZvckVhY2goKHBsYXllckNoZWNrU2hpcHMpID0+IHtcbiAgICAgIHBsYXllckNoZWNrU2hpcHMuZm9yRWFjaCgoYm9hdCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwQmxvY2sgPSBjcmVhdGVTaGlwQmxvY2soYm9hdCwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQoc2hpcEJsb2NrKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclBsYWNlZFNoaXAgPSAobGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGNvbnN0IHsgc2hpcEdyaWQgfSA9IGVsZW1lbnQ7XG5cbiAgICBpZiAoIXBsYWNlZFNoaXApIHJldHVybiBwbGFjZWRTaGlwO1xuXG4gICAgc2hpcEdyaWQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBwbGFjZWRTaGlwLmZvckVhY2goKHNoaXBQb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc2hpcEJsb2NrID0gY3JlYXRlU2hpcEJsb2NrKHNoaXBQb3NpdGlvbiwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgIHNoaXBHcmlkLmFwcGVuZENoaWxkKHNoaXBCbG9jayk7XG4gICAgfSk7XG5cbiAgICByZW5kZXJBbHJlYWR5UGxhY2VkU2hpcHMoc2hpcEdyaWQsIGxhdGVzdEJsb2NrU2l6ZSk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlQXhpcyA9ICgpID0+IHtcbiAgICBpZiAoYXhpcyA9PT0gJ3knKSBheGlzID0gJ3gnO1xuICAgIGVsc2UgYXhpcyA9ICd5JztcbiAgfTtcblxuICBjb25zdCBtb3ZlU2hpcEJ5RGlyZWN0aW9uID0gKG1vdXNlTG9jYXRpb24sIGN1cnJlbnRTaGlwLCBjdXJyZW50QXhpcykgPT4ge1xuICAgIGxldCBsYXRlc3RTaGlwID0gZmFsc2U7XG5cbiAgICBpZiAocG9zaXRpb24uY2hlY2tPdXRPZkJvdW5jZShjdXJyZW50U2hpcFswXSkpIHJldHVybiBsYXRlc3RTaGlwO1xuXG4gICAgY29uc3QgbmV3WFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICBtb3VzZUxvY2F0aW9uLnhDb29yZCxcbiAgICAgIDBcbiAgICApLnhDb29yZDtcblxuICAgIGNvbnN0IG5ld1lQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKFxuICAgICAgMCxcbiAgICAgIG1vdXNlTG9jYXRpb24ueUNvb3JkXG4gICAgKS55Q29vcmQ7XG5cbiAgICBsZXQgbmV3U2hpcFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICBuZXdYUG9zaXRpb24sXG4gICAgICBjdXJyZW50U2hpcFswXS55Q29vcmRcbiAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRBeGlzID09PSAneCcpIHtcbiAgICAgIG5ld1NoaXBQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKFxuICAgICAgICBjdXJyZW50U2hpcFswXS54Q29vcmQsXG4gICAgICAgIG5ld1lQb3NpdGlvblxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsYXRlc3RTaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgbmV3U2hpcFBvc2l0aW9uLFxuICAgICAgY3VycmVudFNoaXAubGVuZ3RoLFxuICAgICAgY3VycmVudEF4aXNcbiAgICApO1xuXG4gICAgcmV0dXJuIGxhdGVzdFNoaXA7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VQbGF5ZXJTaGlwID0gKGxhdGVzdFNoaXAsIGxhdGVzdEF4aXMsIGxhdGVzdEdhbWUpID0+IHtcbiAgICBpZiAobGF0ZXN0U2hpcCkgbGF0ZXN0R2FtZS5zZXR1cFNoaXAobGF0ZXN0U2hpcFswXSwgbGF0ZXN0QXhpcyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUGxheWVyU2hpcEV2ZW50ID0gKCkgPT4ge1xuICAgIHBsYWNlUGxheWVyU2hpcChwbGFjZWRTaGlwLCBheGlzLCBhY3RpdmVHYW1lKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJHYW1lID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge30sIHJlbmRlclNwZWVkKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwU2VsY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAgIGVsZW1lbnRzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50cy5zZWN0aW9uU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZWxlbWVudHMuc2hpcEdyaWQuaW5uZXJIVE1MID0gJyc7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRHYW1lID0gKGdhbWVSZW5kZXIpID0+IHtcbiAgICByZW1vdmVTaGlwc1NlbGN0aW9uKCk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU2VsZWN0aW9uR3JpZCA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGdhbWVWYWx1ZSA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuICAgICAgY29uc3QgY2hlY2tCb2FyZFNoaXBzID1cbiAgICAgICAgZ2FtZVZhbHVlLnBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCkuY3VycmVudFNoaXBzO1xuXG4gICAgICBjaGFuZ2VCbG9ja1NpemUod2luZG93Lm1hdGNoTWVkaWEpO1xuXG4gICAgICBpZiAoYWN0aXZlR2FtZS5jaGVja1NldHVwKGdhbWVWYWx1ZS5wbGF5ZXJDaGVja0JvYXJkKSkgZGlzYWJsZVN0YXJ0ZXJVaSgpO1xuXG4gICAgICBpZiAobW91c2VCbG9ja0xvY2F0aW9uKSB7XG4gICAgICAgIGxldCBjdXJyZW50U2hpcCA9IGFjdGl2ZUdhbWUuYXJyYW5nZUJsb2Nrcyhtb3VzZUJsb2NrTG9jYXRpb24sIGF4aXMpO1xuICAgICAgICBpZiAoIWN1cnJlbnRTaGlwICYmIHBsYWNlZFNoaXApIHtcbiAgICAgICAgICBjdXJyZW50U2hpcCA9IG1vdmVTaGlwQnlEaXJlY3Rpb24oXG4gICAgICAgICAgICBtb3VzZUJsb2NrTG9jYXRpb24sXG4gICAgICAgICAgICBwbGFjZWRTaGlwLFxuICAgICAgICAgICAgYXhpc1xuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFNoaXApIHBsYWNlZFNoaXAgPSBjdXJyZW50U2hpcDtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGFjZWRTaGlwLCAndGhlIGN1cnJlbnQgcGxhY2VkIHNoaXAnKTtcblxuICAgICAgICBpZiAocGxhY2VkU2hpcCkgcmVuZGVyUGxhY2VkU2hpcChibG9ja1NpemUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2ZUdhbWUuY2hlY2tTZXR1cChjaGVja0JvYXJkU2hpcHMpKSByZW5kZXJTZWxlY3Rpb25HcmlkKCk7XG4gICAgfSwgcmVuZGVyU3BlZWQpO1xuICB9O1xuXG4gIGNvbnN0IGFjdGl2YXRlVWkgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb20uZ2V0UGFnZSgpO1xuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gcGFnZUNvbnRlbnQ7XG5cbiAgICBhZGRVaUV2ZW50cygpO1xuICAgIHJlbmRlclNlbGVjdGlvbkdyaWQoKTtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZXMgPSAoKSA9PiAoe1xuICAgIGJsb2NrU2l6ZSxcbiAgICBwbGFjZWRTaGlwLFxuICAgIGF4aXMsXG4gICAgbW91c2VCbG9ja0xvY2F0aW9uLFxuICB9KTtcblxuICBjb25zdCBhZGRVaUV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgZWxlbWVudC5zaGlwTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZpbmRUb3VjaFBvc2l0aW9uKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcEV2ZW50KTtcblxuICAgIGVsZW1lbnQucm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQXhpcyk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVWlFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgZWxlbWVudC5zaGlwTGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZpbmRUb3VjaFBvc2l0aW9uKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcEV2ZW50KTtcblxuICAgIGVsZW1lbnQucm90YXRlQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQXhpcyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhY3RpdmF0ZVVpLFxuICAgIGNyZWF0ZUJsb2NrRWxlbWVudCxcbiAgICBnZXRNb3VzZVBvc2l0aW9uLFxuICAgIG1vdmVTaGlwQnlEaXJlY3Rpb24sXG4gICAgY2hhbmdlQmxvY2tTaXplLFxuICAgIGNoYW5nZUF4aXMsXG4gICAgZ2V0VmFsdWVzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVWk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tcmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXywgeyBoYXNoOiBcIiNBemVyZXRNb25vXCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18sIHsgaGFzaDogXCIjQXplcmV0TW9ub1wiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXywgeyBoYXNoOiBcIiNSb2JvdG9cIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMThfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18sIHsgaGFzaDogXCIjUm9ib3RvXCIgfSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tZGFya0JsYWNrOiByZ2IoMiwgNCwgOCk7XFxuICAtLWRhcmtHcmF5OiByZ2IoMjIsIDI3LCAzNCk7XFxuICAtLW1pc3NCbHVlOiByZ2IoNzYsIDg0LCAxOTEpO1xcbn1cXG5cXG4vKmNyZWRpdCB0byBodHRwczovL2dvb2dsZS13ZWJmb250cy1oZWxwZXIuaGVyb2t1YXBwLmNvbS8gZm9yIGFsbG93aW5nIG1lIHRvIGltcG9ydCB0aGVzZSBmb250cyBhdXRvbWF0aWNhbGx5Ki9cXG4vKiBhemVyZXQtbW9uby1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXplcmV0IE1vbm8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgc3JjOiBsb2NhbCgnJyksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgIC8qIElFNi1JRTggKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgnd29mZjInKSxcXG4gICAgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgLyogTW9kZXJuIEJyb3dzZXJzICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxufVxcbi8qIGF6ZXJldC1tb25vLTcwMCAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0F6ZXJldCBNb25vJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIHNyYzogbG9jYWwoJycpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpXFxuICAgICAgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAvKiBJRTYtSUU4ICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpXFxuICAgICAgZm9ybWF0KCd3b2ZmJyksXFxuICAgIC8qIE1vZGVybiBCcm93c2VycyAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyArIFwiKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxufVxcblxcbi8qIHJvYm90by0zMDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gKyBcIik7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIHNyYzogbG9jYWwoJycpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgIC8qIElFNi1JRTggKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgLyogTW9kZXJuIEJyb3dzZXJzICovIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19fICsgXCIpXFxuICAgICAgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG59XFxuLyogcm9ib3RvLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX18gKyBcIik7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIHNyYzogbG9jYWwoJycpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgLyogSUU2LUlFOCAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqLyB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMV9fXyArIFwiKVxcbiAgICAgIGZvcm1hdCgnd29mZicpLFxcbiAgICAvKiBNb2Rlcm4gQnJvd3NlcnMgKi8gdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjJfX18gKyBcIilcXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjNfX18gKyBcIikgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbn1cXG5cXG5odG1sIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnNoaXBHcmlkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJsb2NrIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgd2lkdGg6IDQycHg7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5oaXRCbG9jayB7XFxuICBiYWNrZ3JvdW5kOiBwaW5rO1xcbn1cXG5cXG4uY3Vyc290QmxvY2sge1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxufVxcblxcbi5taXNzQmxvY2sge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWlzc0JsdWUpO1xcbn1cXG5cXG4uc2VjdGlvblNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDI7XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2hpcFRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXplcmV0IE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbi5zaGlwVGV4dCB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5zaGlwU2VsZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrQmxhY2spO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA0NDBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm90YXRlSW1hZ2Uge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoODdkZWcpXFxuICAgIGJyaWdodG5lc3MoMTAwJSk7XFxufVxcblxcbi5yb3RhdGVCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0JsYWNrKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJvdGF0ZUJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zaGlwR3JpZCB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDM5LCAzOSwgMzksIDAuNTc0KTtcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogcmdiKDIsIDQsIDgpO1xcbn1cXG5cXG4ubWFpblNlY3Rpb24ge1xcbiAgbWluLWhlaWdodDogOTB2aDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1haW5UaXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBsaW5lLWhlaWdodDogMTB2aDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtHcmF5KTtcXG59XFxuXFxuLmNlbnRlclNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5ncmlkIHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogNDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLnNoaXBPdmVybGF5IHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogNDIwcHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcblxcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuLnN0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbiAgbGluZS1oZWlnaHQ6IDEwdmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluVGl0bGUgaDEge1xcbiAgZm9udC1mYW1pbHk6ICdBemVyZXQgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBHcmlkIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBPdmVybGF5IHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBTZWxlY3Rpb24ge1xcbiAgICB3aWR0aDogMzEwcHg7XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgfVxcblxcbiAgLmJsb2NrIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gIH1cXG5cXG4gIC5zdGF0cyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzBweCkge1xcbiAgLmdyaWQge1xcbiAgICB3aWR0aDogMjEwcHg7XFxuICAgIGhlaWdodDogMjEwcHg7XFxuICB9XFxuXFxuICAuc2hpcEdyaWQge1xcbiAgICB3aWR0aDogMjEwcHg7XFxuICAgIGhlaWdodDogMjEwcHg7XFxuICB9XFxuXFxuICAuc2hpcE92ZXJsYXkge1xcbiAgICB3aWR0aDogMjEwcHg7XFxuICAgIGhlaWdodDogMjEwcHg7XFxuICB9XFxuXFxuICAuc2hpcFNlbGVjdGlvbiB7XFxuICAgIHdpZHRoOiAyMjBweDtcXG4gIH1cXG5cXG4gIC5zaGlwVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgfVxcblxcbiAgLmJvYXJkVGl0bGUge1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gIH1cXG5cXG4gIC5ibG9jayB7XFxuICAgIHdpZHRoOiAyMXB4O1xcbiAgICBoZWlnaHQ6IDIxcHg7XFxuICB9XFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgfVxcblxcbiAgLnN0YXRzIHtcXG4gICAgd2lkdGg6IDIxMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2NXB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gIH1cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IDhweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xcbiAgLmdyaWQge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiA2cHg7XFxuICB9XFxuXFxuICAuc2hpcE92ZXJsYXkge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICB9XFxuXFxuICAuc2hpcEdyaWQge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICB9XFxuXFxuICAuc2hpcFNlbGVjdGlvbiB7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gIH1cXG5cXG4gIC5ibG9jayB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICB9XFxuXFxuICAuc2hpcFRleHQge1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgfVxcblxcbiAgLnNoaXBUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgfVxcblxcbiAgLnN0YXRzIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7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IjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tZGFya0JsYWNrOiByZ2IoMiwgNCwgOCk7XFxuICAtLWRhcmtHcmF5OiByZ2IoMjIsIDI3LCAzNCk7XFxuICAtLW1pc3NCbHVlOiByZ2IoNzYsIDg0LCAxOTEpO1xcbn1cXG5cXG4vKmNyZWRpdCB0byBodHRwczovL2dvb2dsZS13ZWJmb250cy1oZWxwZXIuaGVyb2t1YXBwLmNvbS8gZm9yIGFsbG93aW5nIG1lIHRvIGltcG9ydCB0aGVzZSBmb250cyBhdXRvbWF0aWNhbGx5Ki9cXG4vKiBhemVyZXQtbW9uby1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXplcmV0IE1vbm8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tcmVndWxhci5lb3QnKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgc3JjOiBsb2NhbCgnJyksXFxuICAgIHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIuZW90PyNpZWZpeCcpXFxuICAgICAgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAvKiBJRTYtSUU4ICovIHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIud29mZjInKVxcbiAgICAgIGZvcm1hdCgnd29mZjInKSxcXG4gICAgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tcmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgIC8qIE1vZGVybiBCcm93c2VycyAqLyB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi1yZWd1bGFyLnR0ZicpXFxuICAgICAgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgIHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLXJlZ3VsYXIuc3ZnI0F6ZXJldE1vbm8nKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxufVxcbi8qIGF6ZXJldC1tb25vLTcwMCAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0F6ZXJldCBNb25vJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC5lb3QnKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgc3JjOiBsb2NhbCgnJyksXFxuICAgIHVybCgnLi4vZm9udHMvYXplcmV0LW1vbm8tdjExLWxhdGluLTcwMC5lb3Q/I2llZml4JylcXG4gICAgICBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgIC8qIElFNi1JRTggKi8gdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLndvZmYyJylcXG4gICAgICBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqLyB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi03MDAud29mZicpXFxuICAgICAgZm9ybWF0KCd3b2ZmJyksXFxuICAgIC8qIE1vZGVybiBCcm93c2VycyAqLyB1cmwoJy4uL2ZvbnRzL2F6ZXJldC1tb25vLXYxMS1sYXRpbi03MDAudHRmJylcXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgdXJsKCcuLi9mb250cy9hemVyZXQtbW9uby12MTEtbGF0aW4tNzAwLnN2ZyNBemVyZXRNb25vJykgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbn1cXG5cXG4vKiByb2JvdG8tMzAwIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAuZW90Jyk7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIHNyYzogbG9jYWwoJycpLFxcbiAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tMzAwLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgIC8qIElFNi1JRTggKi8gdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLTMwMC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi0zMDAud29mZicpXFxuICAgICAgZm9ybWF0KCd3b2ZmJyksXFxuICAgIC8qIE1vZGVybiBCcm93c2VycyAqLyB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tMzAwLnR0ZicpXFxuICAgICAgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqLyB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tMzAwLnN2ZyNSb2JvdG8nKVxcbiAgICAgIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG59XFxuLyogcm9ib3RvLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIuZW90Jyk7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIHNyYzogbG9jYWwoJycpLFxcbiAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci5lb3Q/I2llZml4JylcXG4gICAgICBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgIC8qIElFNi1JRTggKi8gdXJsKCcuLi9mb250cy9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqLyB1cmwoJy4uL2ZvbnRzL3JvYm90by12MzAtbGF0aW4tcmVndWxhci53b2ZmJylcXG4gICAgICBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgLyogTW9kZXJuIEJyb3dzZXJzICovIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLnR0ZicpXFxuICAgICAgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLnN2ZyNSb2JvdG8nKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxufVxcblxcbmh0bWwge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc2hpcEdyaWQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYmxvY2sge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB3aWR0aDogNDJweDtcXG4gIGhlaWdodDogNDJweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmhpdEJsb2NrIHtcXG4gIGJhY2tncm91bmQ6IHBpbms7XFxufVxcblxcbi5jdXJzb3RCbG9jayB7XFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXG59XFxuXFxuLm1pc3NCbG9jayB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1taXNzQmx1ZSk7XFxufVxcblxcbi5zZWN0aW9uU2NyZWVuIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMjtcXG5cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaGlwVGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdBemVyZXQgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuLnNoaXBUZXh0IHtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnNoaXBTZWxlY3Rpb24ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtCbGFjayk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDQ0MHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3RhdGVJbWFnZSB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSg4N2RlZylcXG4gICAgYnJpZ2h0bmVzcygxMDAlKTtcXG59XFxuXFxuLnJvdGF0ZUJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrQmxhY2spO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucm90YXRlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtHcmF5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBsaW5lLWhlaWdodDogNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNoaXBHcmlkIHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogNDIwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrR3JheSk7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzksIDM5LCAzOSwgMC41NzQpO1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMiwgNCwgOCk7XFxufVxcblxcbi5tYWluU2VjdGlvbiB7XFxuICBtaW4taGVpZ2h0OiA5MHZoO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubWFpblRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGxpbmUtaGVpZ2h0OiAxMHZoO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFya0dyYXkpO1xcbn1cXG5cXG4uY2VudGVyU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmdyaWQge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtHcmF5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uc2hpcE92ZXJsYXkge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG5cXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uc3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmtHcmF5KTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBsaW5lLWhlaWdodDogMTB2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW5UaXRsZSBoMSB7XFxuICBmb250LWZhbWlseTogJ0F6ZXJldCBNb25vJywgbW9ub3NwYWNlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLmdyaWQge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICB9XFxuXFxuICAuc2hpcEdyaWQge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICB9XFxuXFxuICAuc2hpcE92ZXJsYXkge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICB9XFxuXFxuICAuc2hpcFNlbGVjdGlvbiB7XFxuICAgIHdpZHRoOiAzMTBweDtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICB9XFxuXFxuICAuYmxvY2sge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgfVxcblxcbiAgLnN0YXRzIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3MHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gICAgaGVpZ2h0OiAyMTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwR3JpZCB7XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gICAgaGVpZ2h0OiAyMTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwT3ZlcmxheSB7XFxuICAgIHdpZHRoOiAyMTBweDtcXG4gICAgaGVpZ2h0OiAyMTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwU2VsZWN0aW9uIHtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgfVxcblxcbiAgLnNoaXBUZXh0IHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICB9XFxuXFxuICAuYm9hcmRUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgfVxcblxcbiAgLmJsb2NrIHtcXG4gICAgd2lkdGg6IDIxcHg7XFxuICAgIGhlaWdodDogMjFweDtcXG4gIH1cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICB9XFxuXFxuICAuc3RhdHMge1xcbiAgICB3aWR0aDogMjEwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzY1cHgpIHtcXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcbiAgfVxcbiAgLmZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBmb250LXNpemU6IDZweDtcXG4gIH1cXG5cXG4gIC5zaGlwT3ZlcmxheSB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwR3JpZCB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gIH1cXG5cXG4gIC5zaGlwU2VsZWN0aW9uIHtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgfVxcblxcbiAgLmJsb2NrIHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gIH1cXG5cXG4gIC5zaGlwVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICB9XFxuXFxuICAuc2hpcFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICB9XFxuXFxuICAuc3RhdHMge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIlVpIiwiY3VycmVudFVpIiwiYWN0aXZhdGVVaSIsInJlZnJlc2hpbmdMb2dvIiwiRG9tIiwiZ2V0RWxlbWVudHMiLCJvdmVybGF5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VjdGlvblNjcmVlbiIsInNoaXBUZXh0Iiwic2hpcEdyaWQiLCJzaGlwTGF5ZXIiLCJyb3RhdGVCdXR0b24iLCJncmlkcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoaXRzIiwibWlzc2VzIiwicGxheWVyR3JpZCIsInBsYXllckhpdHMiLCJwbGF5ZXJNaXNzZXMiLCJjb21wdXRlckdyaWQiLCJjb21wdXRlckhpdHMiLCJjb21wdXRlck1pc3NlcyIsImNvbnRlbnQiLCJnZXRQYWdlIiwiUG9zaXRpb24iLCJTaGlwIiwiUHJhY3RpY2FsIiwiR2FtZWJvYXJkIiwicG9zaXRpb24iLCJzaGlwIiwicHJhY3RpY2FsIiwiY3VycmVudFNoaXBzIiwicmFuZG9taXplIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQXhpcyIsImF4aWVzIiwibGVuZ3RoIiwicGxhY2VBbGxTaGlwcyIsInNoaXBzQXJyYXkiLCJjb21wYXJlU2hpcHNBcnJheSIsImxhdGVzdFNoaXBzQXJyYXkiLCJzaGlwcyIsInNoaXBzRG9Db2xsaWRlIiwiZm9yRWFjaCIsImxhdGVzdFNoaXBzIiwiYm9hdCIsImxhdGVzdEJvYXQiLCJjb21wYXJlUG9zaXRpb24iLCJwbGF5ZXJQbGFjZVNoaXAiLCJsb2NhdGlvbiIsImF4aXMiLCJsYXRlc3RQb3NpdGlvbiIsImN1cnJlbnRBcnJheSIsImNvcHlBcnJheSIsInNoaXBsZW5ndGgiLCJtZXNzYWdlIiwiY3VycmVudFNoaXAiLCJjcmVhdGVTaGlwIiwic2hpcEFycmF5IiwiaXNDb2xsaWRlZCIsInB1c2giLCJwbGFjZVJhbmRvbVNoaXBzIiwicmFuZG9taXplciIsInJhbmRvbUF4aWVzIiwibGF0ZXN0TGVuZ3RoIiwicmFuZG9tUG9zaXRpb24iLCJjcmVhdGVQb3NpdGlvbiIsInJhbmRvbVNoaXAiLCJzaGlwQ29sbGlkZXMiLCJwbGFjZVNoaXBzUmFuZG9tbHkiLCJhdHRhY2tTaGlwIiwiY3VycmVudEhpdHMiLCJjdXJyZW50TWlzc2VzIiwiaXNIaXQiLCJsYXRlc3RIaXRzIiwibGF0ZXN0TWlzc2VzIiwicG9zaXRpb25zQXJyYXkiLCJoaXQiLCJoaXRBcnJheSIsInNoaXBBcnJheXMiLCJmaW5hbE9iamVjdCIsInJlY2lldmVBdHRhY2siLCJyZXN1bHQiLCJjcmVhdGVSYW5kb21Db29yZHMiLCJpc01vY2tSYW5kb20iLCJjYWxsUmFuZG9taXplciIsInJhbmRvbVgiLCJyYW5kb21ZIiwiZmlsdGVyQXR0YWNrIiwiYXJyYXkiLCJjdXJyZW50QXR0YWNrIiwiY3VycmVudEF0dGFja0FycmF5IiwiZmlsdGVyIiwiaXRlbSIsInhDb29yZCIsInlDb29yZCIsImdldFR5cGVPZlBsYWNlZFNoaXAiLCJzaGlwVHlwZXMiLCJzaGlwVHlwZSIsInNoaXBMZW5ndGgiLCJyZWNpZXZlUmFuZG9tQXR0YWNrIiwiaGFzQmVlbkhpdCIsImhhc0JlZW5NaXNzIiwiaXNBbGxTdW5rIiwiaGFzU3Vua2VkIiwiaXNTdW5rIiwiZ2V0VmFsdWVzIiwiR2FtZSIsInBsYXllckJvYXJkIiwiY29tcHV0ZXJCb2FyZCIsInBsYXllckNoZWNrQm9hcmQiLCJjaGVja1NldHVwIiwicGxheWVyQ2hlY2tTaGlwcyIsInNldHVwR2FtZSIsInBsYXllckNoZWNrVmFsdWVzIiwiYXR0YWNrQm9hdHMiLCJjb29yZHMiLCJzZXR1cFNoaXAiLCJnYW1lSXNPdmVyIiwiZ2FtZUZpbmlzaGVkIiwiYXJyYW5nZUJsb2NrcyIsIm1vdXNlUG9zaXRpb24iLCJjdXJyZW50Um90YXRpb24iLCJzaGlwVHlwZU9iamVjdCIsImdldEdhbWVWYWx1ZXMiLCJhY3RpdmVHYW1lIiwiY2hlY2tPdXRPZkJvdW5jZSIsIm5ld1Bvc2l0aW9uIiwiYWRkUG9zaXRpb24iLCJwb3NpdGlvbjEiLCJwb3NpdGlvbjIiLCJtdWx0aXBseVBvc2l0aW9uIiwiY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbCIsIm5ld0FycmF5IiwiaXNPYmplY3QiLCJjdXJyZW50T2JqZWN0IiwiY2hlY2tPYmplY3QiLCJvYmplY3QxIiwib2JqZWN0MiIsImluZGV4Iiwic2Vjb25kSW5kZXgiLCJvYmplY3RJc0VxdWFsIiwiY3VycmVudE9iamVjdDIiLCJjdXJyZW50T2JqZWN0VmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY3VycmVudE9iamVjdDJWYWx1ZXMiLCJvYmplY3RLZXlzIiwia2V5cyIsIm9iamVjdEtleXMyIiwia2V5IiwiaXRlbTIiLCJjaGVja09iamVjdEJvb2wiLCJnZXRBZGRlZFBvc2l0aW9uIiwiYWRkZWRQb3NpdGlvbiIsImxlbmd0aDEiLCJwb3B1bGF0ZVNoaXBzIiwiY3VycmVudFBvc2l0aW9uIiwibGF0ZXN0QXJyYXkiLCJhcnJheUxlbmd0aCIsInBvcyIsImRvbSIsInJlbmRlclNwZWVkIiwiYmxvY2tTaXplIiwicGxhY2VkU2hpcCIsIm1vdXNlQmxvY2tMb2NhdGlvbiIsImdldE1vdXNlUG9zaXRpb24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsImZpbmRNb3VzZVBvc2l0aW9uIiwiZXZlbnQiLCJjdXJyZW50TW91c2VQb3NpdGlvbiIsImZpbmRUb3VjaFBvc2l0aW9uIiwicmVjdCIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvdWNoT2Zmc2V0WCIsInRhcmdldFRvdWNoZXMiLCJwYWdlWCIsImxlZnQiLCJ0b3VjaE9mZnNldFkiLCJwYWdlWSIsInRvcCIsInRvdWNoUG9zaXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZUJsb2NrU2l6ZSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiY3JlYXRlQmxvY2tFbGVtZW50IiwiYmxvY2tDbGFzcyIsImNyZWF0ZUJsb2NrIiwibGF0ZXN0Q2xhc3MiLCJibG9ja0VsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNhYmxlU3RhcnRlclVpIiwiY3JlYXRlRG9tRWxlbWVudCIsImVsZW1lbnROYW1lIiwiY3JlYXRlRWxlbWVudCIsImNyZWF0ZVNoaXBCbG9jayIsInNoaXBQb3NpdGlvbiIsImxhdGVzdEJsb2NrU2l6ZSIsInNoaXBCbG9jayIsInJlYWxQb3NpdGlvblgiLCJyZWFsUG9zaXRpb25ZIiwic3R5bGUiLCJyZW5kZXJBbHJlYWR5UGxhY2VkU2hpcHMiLCJnYW1lVmFsdWVzIiwiY2hlY2tCb2FyZFNoaXBzIiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJQbGFjZWRTaGlwIiwiZWxlbWVudCIsImlubmVySFRNTCIsImNoYW5nZUF4aXMiLCJtb3ZlU2hpcEJ5RGlyZWN0aW9uIiwibW91c2VMb2NhdGlvbiIsImN1cnJlbnRBeGlzIiwibGF0ZXN0U2hpcCIsIm5ld1hQb3NpdGlvbiIsIm5ld1lQb3NpdGlvbiIsIm5ld1NoaXBQb3NpdGlvbiIsInBsYWNlUGxheWVyU2hpcCIsImxhdGVzdEF4aXMiLCJsYXRlc3RHYW1lIiwicGxhY2VQbGF5ZXJTaGlwRXZlbnQiLCJyZW5kZXJHYW1lIiwic2V0VGltZW91dCIsInJlbW92ZVNoaXBTZWxjdGlvbiIsImVsZW1lbnRzIiwiZGlzcGxheSIsInN0YXJ0R2FtZSIsImdhbWVSZW5kZXIiLCJyZW1vdmVTaGlwc1NlbGN0aW9uIiwicmVuZGVyU2VsZWN0aW9uR3JpZCIsImdhbWVWYWx1ZSIsIndpbmRvdyIsInBhZ2VDb250ZW50IiwiYm9keSIsImFkZFVpRXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZVVpRXZlbnRzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=