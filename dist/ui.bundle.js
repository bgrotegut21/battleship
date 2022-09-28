"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["ui"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/ui.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0RwRSxpQkFBaEQ7SUFDQXVDLE9BQU8sQ0FBQzlNLFNBQVIsQ0FBa0IyTyxnQkFBbEIsQ0FBbUMsT0FBbkMsRUFBNENoQixvQkFBNUM7SUFFQWIsT0FBTyxDQUFDN00sWUFBUixDQUFxQjBPLGdCQUFyQixDQUFzQyxPQUF0QyxFQUErQzNCLFVBQS9DO0VBQ0QsQ0FQRDs7RUFTQSxJQUFNNEIsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0lBQzNCLElBQU05QixPQUFPLEdBQUdsRCxHQUFHLENBQUNuSyxXQUFKLEVBQWhCO0lBRUFxTixPQUFPLENBQUM5TSxTQUFSLENBQWtCNk8sbUJBQWxCLENBQXNDLFdBQXRDLEVBQW1EekUsaUJBQW5EO0lBQ0EwQyxPQUFPLENBQUM5TSxTQUFSLENBQWtCNk8sbUJBQWxCLENBQXNDLFdBQXRDLEVBQW1EdEUsaUJBQW5EO0lBQ0F1QyxPQUFPLENBQUM5TSxTQUFSLENBQWtCNk8sbUJBQWxCLENBQXNDLE9BQXRDLEVBQStDbEIsb0JBQS9DO0lBRUFiLE9BQU8sQ0FBQzdNLFlBQVIsQ0FBcUI0TyxtQkFBckIsQ0FBeUMsT0FBekMsRUFBa0Q3QixVQUFsRDtFQUNELENBUkQ7O0VBVUEsT0FBTztJQUNMdUIsVUFBVSxFQUFWQSxVQURLO0lBRUxoRCxrQkFBa0IsRUFBbEJBLGtCQUZLO0lBR0x0QixnQkFBZ0IsRUFBaEJBLGdCQUhLO0lBSUxnRCxtQkFBbUIsRUFBbkJBLG1CQUpLO0lBS0w3QixlQUFlLEVBQWZBLGVBTEs7SUFNTDRCLFVBQVUsRUFBVkEsVUFOSztJQU9MNUcsU0FBUyxFQUFUQTtFQVBLLENBQVA7QUFTRCxDQWpSRDs7QUFtUkEsaUVBQWV1RCxFQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcHJhY3RpY2FsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVmcmVzaGluZ0xvZ28gZnJvbSAnLi4vaW1hZ2VzL3JlZnJlc2hMb2dvLnN2Zyc7XG5cbmNvbnN0IERvbSA9ICgpID0+IHtcbiAgY29uc3QgZ2V0RWxlbWVudHMgPSAoKSA9PiAoe1xuICAgIG92ZXJsYXk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JyksXG4gICAgc2VjdGlvblNjcmVlbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25TY3JlZW4nKSxcbiAgICBzaGlwVGV4dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBUZXh0JyksXG4gICAgc2hpcEdyaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwR3JpZCcpLFxuICAgIHNoaXBMYXllcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBMYXllcicpLFxuICAgIHJvdGF0ZUJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZUJ1dHRvbicpLFxuICAgIGdyaWRzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkJykpLFxuICAgIGhpdHM6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpdHMnKSksXG4gICAgbWlzc2VzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5taXNzZXMnKSksXG4gICAgcGxheWVyR3JpZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckdyaWQnKSxcbiAgICBwbGF5ZXJIaXRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVySGl0cycpLFxuICAgIHBsYXllck1pc3NlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllck1pc3NlcycpLFxuICAgIGNvbXB1dGVyR3JpZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyR3JpZCcpLFxuICAgIGNvbXB1dGVySGl0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVySGl0cycpLFxuICAgIGNvbXB1dGVyTWlzc2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXJNaXNzZXMnKSxcbiAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLFxuICB9KTtcblxuICBjb25zdCBnZXRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBTZWxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwic2hpcFRpdGxlXCI+QkFUVExFU0hJUDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInNoaXBUZXh0XCI+UGxhY2UgeW91ciBCYXR0bGVzaGlwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBMYXllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwT3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwR3JpZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3RhdGVCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdGF0ZUltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7cmVmcmVzaGluZ0xvZ299XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlJvdGF0ZSBJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzPVwibWFpblNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluVGl0bGVcIj48aDE+QkFUVExFU0hJUDwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyQm9hcmQgYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJib2FyZFRpdGxlXCI+UGxheWVyIEJvYXJkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyR3JpZCBncmlkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllclN0YXRzIHN0YXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwbGF5ZXJIaXRzIGhpdHNcIj5IaXRzIDA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicGxheWVyTWlzc2VzIG1pc3Nlc1wiPk1pc3NlcyAwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXB1dGVyQm9hcmQgYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJib2FyZFRpdGxlXCI+Q29tcHV0ZXIgQm9hcmQ8L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXB1dGVyR3JpZCBncmlkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXB1dGVyU3RhdHMgc3RhdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvbXB1dGVySGl0cyBoaXRzXCI+SGl0cyAwPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY29tcHV0ZXJNaXNzZXMgbWlzc2VzXCI+TWlzc2VzIDA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjb3B5cmlnaHRNZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlYnNpdGUgYW5kIGNvZGUgYXJlIG1hZGUgYnkgQnJheWRlbiBHcm90ZWd1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfTtcblxuICByZXR1cm4geyBnZXRQYWdlLCBnZXRFbGVtZW50cyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9tO1xuIiwiaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCBQcmFjdGljYWwgZnJvbSAnLi9wcmFjdGljYWwuanMnO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcbiAgY29uc3QgcHJhY3RpY2FsID0gUHJhY3RpY2FsKCk7XG5cbiAgbGV0IGN1cnJlbnRTaGlwcyA9IFtdO1xuICBsZXQgaGl0cyA9IFtdO1xuICBsZXQgbWlzc2VzID0gW107XG5cbiAgY29uc3QgcmFuZG9taXplID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gIGNvbnN0IHJhbmRvbUF4aXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXhpZXMgPSBbJ3gnLCAneSddO1xuICAgIHJldHVybiBheGllc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBheGllcy5sZW5ndGgpXTtcbiAgfTtcblxuICBjb25zdCBwbGFjZUFsbFNoaXBzID0gKHNoaXBzQXJyYXkpID0+IHtcbiAgICBjdXJyZW50U2hpcHMgPSBzaGlwc0FycmF5O1xuICAgIHJldHVybiBjdXJyZW50U2hpcHM7XG4gIH07XG5cbiAgY29uc3QgY29tcGFyZVNoaXBzQXJyYXkgPSAobGF0ZXN0U2hpcHNBcnJheSwgc2hpcHMpID0+IHtcbiAgICBsZXQgc2hpcHNEb0NvbGxpZGUgPSBmYWxzZTtcbiAgICAvLyBjb25zb2xlLmxvZyhsYXRlc3RTaGlwc0FycmF5LCAndGhlIGN1cnJlZW50IHNoaXBzIGFycmF5Jyk7XG4gICAgLy8gY29uc29sZS5sb2coc2hpcHMsICd0aGUgY3VycmVudCBzaGlwcycpO1xuXG4gICAgbGF0ZXN0U2hpcHNBcnJheS5mb3JFYWNoKChsYXRlc3RTaGlwcykgPT4ge1xuICAgICAgbGF0ZXN0U2hpcHMuZm9yRWFjaCgoYm9hdCkgPT4ge1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChsYXRlc3RCb2F0KSA9PiB7XG4gICAgICAgICAgaWYgKHBvc2l0aW9uLmNvbXBhcmVQb3NpdGlvbihib2F0LCBsYXRlc3RCb2F0KSkge1xuICAgICAgICAgICAgc2hpcHNEb0NvbGxpZGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaGlwc0RvQ29sbGlkZTtcbiAgfTtcblxuICBjb25zdCBwbGF5ZXJQbGFjZVNoaXAgPSAobG9jYXRpb24sIGF4aXMpID0+IHtcbiAgICBjb25zdCBsYXRlc3RQb3NpdGlvbiA9IGxvY2F0aW9uO1xuICAgIGNvbnN0IGN1cnJlbnRBcnJheSA9IHByYWN0aWNhbC5jb3B5QXJyYXkoY3VycmVudFNoaXBzKTtcblxuICAgIGxldCBzaGlwbGVuZ3RoID0gNSAtIGN1cnJlbnRBcnJheS5sZW5ndGg7XG5cbiAgICBpZiAoY3VycmVudEFycmF5Lmxlbmd0aCA+IDMpIHNoaXBsZW5ndGggPSAyO1xuXG4gICAgaWYgKGN1cnJlbnRBcnJheS5sZW5ndGggPT09IDUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNoaXBzQXJyYXk6IGN1cnJlbnRBcnJheSxcbiAgICAgICAgbWVzc2FnZTogJ1lvdSBoYXZlIGFscmVhZHkgcGxhY2VkIGFsbCBvZiB5b3VyIHNoaXBzJyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAobGF0ZXN0UG9zaXRpb24sIHNoaXBsZW5ndGgsIGF4aXMpO1xuICAgIGlmICghY3VycmVudFNoaXApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNoaXBBcnJheTogY3VycmVudEFycmF5LFxuICAgICAgICBtZXNzYWdlOiAnWW91IGNhbm5vdCBwbGFjZSBhIHNoaXAgdGhlcmUnLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0NvbGxpZGVkID0gY29tcGFyZVNoaXBzQXJyYXkoY3VycmVudEFycmF5LCBjdXJyZW50U2hpcCk7XG5cbiAgICBpZiAoIWlzQ29sbGlkZWQpIHtcbiAgICAgIGN1cnJlbnRBcnJheS5wdXNoKGN1cnJlbnRTaGlwKTtcbiAgICAgIGN1cnJlbnRTaGlwcyA9IGN1cnJlbnRBcnJheTtcbiAgICAgIHJldHVybiBjdXJyZW50QXJyYXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNoaXBBcnJheTogY3VycmVudEFycmF5LFxuICAgICAgbWVzc2FnZTogXCJZb3UndmUgYWxyZWFkeSBwbGFjZWQgYSBzaGlwIHRoZXJlXCIsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVJhbmRvbVNoaXBzID0gKGxlbmd0aCwgc2hpcHNBcnJheSwgcmFuZG9taXplciwgcmFuZG9tQXhpZXMpID0+IHtcbiAgICBjb25zdCBsYXRlc3RTaGlwc0FycmF5ID0gc2hpcHNBcnJheTtcbiAgICBsZXQgbGF0ZXN0TGVuZ3RoID0gbGVuZ3RoO1xuICAgIGNvbnN0IHJhbmRvbVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24ocmFuZG9taXplcigpLCByYW5kb21pemVyKCkpO1xuICAgIGNvbnN0IHJhbmRvbVNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAoXG4gICAgICByYW5kb21Qb3NpdGlvbixcbiAgICAgIGxhdGVzdExlbmd0aCxcbiAgICAgIHJhbmRvbUF4aWVzKClcbiAgICApO1xuXG4gICAgaWYgKHJhbmRvbVNoaXApIHtcbiAgICAgIGNvbnN0IHNoaXBDb2xsaWRlcyA9IGNvbXBhcmVTaGlwc0FycmF5KGxhdGVzdFNoaXBzQXJyYXksIHJhbmRvbVNoaXApO1xuICAgICAgaWYgKCFzaGlwQ29sbGlkZXMpIHtcbiAgICAgICAgaWYgKGxhdGVzdExlbmd0aCA+IDIpIGxhdGVzdExlbmd0aCAtPSAxO1xuICAgICAgICBpZiAoc2hpcHNBcnJheS5sZW5ndGggPCA1KSBsYXRlc3RTaGlwc0FycmF5LnB1c2gocmFuZG9tU2hpcCk7XG5cbiAgICAgICAgaWYgKHNoaXBzQXJyYXkubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgcmV0dXJuIGxhdGVzdFNoaXBzQXJyYXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGxhY2VSYW5kb21TaGlwcyhcbiAgICAgIGxhdGVzdExlbmd0aCxcbiAgICAgIGxhdGVzdFNoaXBzQXJyYXksXG4gICAgICByYW5kb21pemVyLFxuICAgICAgcmFuZG9tQXhpZXNcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcHNSYW5kb21seSA9IChyYW5kb21pemVyLCByYW5kb21BeGllcykgPT4ge1xuICAgIGNvbnN0IHNoaXBzQXJyYXkgPSBwbGFjZVJhbmRvbVNoaXBzKDUsIFtdLCByYW5kb21pemVyLCByYW5kb21BeGllcyk7XG4gICAgY3VycmVudFNoaXBzID0gc2hpcHNBcnJheTtcblxuICAgIHJldHVybiBzaGlwc0FycmF5O1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja1NoaXAgPSAobGF0ZXN0UG9zaXRpb24sIHNoaXBzLCBjdXJyZW50SGl0cywgY3VycmVudE1pc3NlcykgPT4ge1xuICAgIGxldCBpc0hpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxhdGVzdFNoaXBzQXJyYXkgPSBbXTtcbiAgICBjb25zdCBsYXRlc3RIaXRzID0gY3VycmVudEhpdHM7XG4gICAgY29uc3QgbGF0ZXN0TWlzc2VzID0gY3VycmVudE1pc3NlcztcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXBBcnJheSkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uc0FycmF5ID0gcHJhY3RpY2FsLmNvcHlBcnJheShzaGlwQXJyYXkpO1xuICAgICAgY29uc3QgaGl0ID0gc2hpcC5oaXQocG9zaXRpb25zQXJyYXksIGxhdGVzdFBvc2l0aW9uKTtcblxuICAgICAgaWYgKGhpdC5oaXRBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaXNIaXQgPSB0cnVlO1xuICAgICAgICBwb3NpdGlvbnNBcnJheSA9IGhpdC5zaGlwQXJyYXlzO1xuICAgICAgICBsYXRlc3RIaXRzLnB1c2goaGl0LmhpdEFycmF5WzBdKTtcbiAgICAgIH1cbiAgICAgIGxhdGVzdFNoaXBzQXJyYXkucHVzaChwb3NpdGlvbnNBcnJheSk7XG4gICAgfSk7XG4gICAgaWYgKCFpc0hpdCkgbGF0ZXN0TWlzc2VzLnB1c2gobGF0ZXN0UG9zaXRpb24pO1xuXG4gICAgY29uc3QgZmluYWxPYmplY3QgPSB7XG4gICAgICBpc0hpdCxcbiAgICAgIGxhdGVzdFNoaXBzQXJyYXksXG4gICAgICBsYXRlc3RIaXRzLFxuICAgICAgbGF0ZXN0TWlzc2VzLFxuICAgIH07XG5cbiAgICByZXR1cm4gZmluYWxPYmplY3Q7XG4gIH07XG5cbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChsYXRlc3RQb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF0dGFja1NoaXAobGF0ZXN0UG9zaXRpb24sIGN1cnJlbnRTaGlwcywgaGl0cywgbWlzc2VzKTtcblxuICAgIGN1cnJlbnRTaGlwcyA9IHJlc3VsdC5sYXRlc3RTaGlwc0FycmF5O1xuICAgIGhpdHMgPSByZXN1bHQubGF0ZXN0SGl0cztcbiAgICBtaXNzZXMgPSByZXN1bHQubGF0ZXN0TWlzc2VzO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVSYW5kb21Db29yZHMgPSAocmFuZG9taXplcikgPT4ge1xuICAgIGxldCByYW5kb21Qb3NpdGlvbjtcblxuICAgIGlmIChyYW5kb21pemVyLmlzTW9ja1JhbmRvbSkge1xuICAgICAgcmFuZG9tUG9zaXRpb24gPSByYW5kb21pemVyLmNhbGxSYW5kb21pemVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJhbmRvbVggPSByYW5kb21pemVyKCk7XG4gICAgICBjb25zdCByYW5kb21ZID0gcmFuZG9taXplcigpO1xuICAgICAgcmFuZG9tUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihyYW5kb21YLCByYW5kb21ZKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZG9tUG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyQXR0YWNrID0gKGFycmF5LCBjdXJyZW50QXR0YWNrKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEF0dGFja0FycmF5ID0gYXJyYXkuZmlsdGVyKFxuICAgICAgKGl0ZW0pID0+XG4gICAgICAgIGl0ZW0ueENvb3JkID09PSBjdXJyZW50QXR0YWNrLnhDb29yZCAmJlxuICAgICAgICBpdGVtLnlDb29yZCA9PT0gY3VycmVudEF0dGFjay55Q29vcmRcbiAgICApO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRBdHRhY2tBcnJheTtcbiAgfTtcblxuICBjb25zdCBnZXRUeXBlT2ZQbGFjZWRTaGlwID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50U2hpcHMubGVuZ3RoID09PSA1KSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBzaGlwVHlwZXMgPSBbXG4gICAgICB7IHNoaXBUeXBlOiAnY2FycmllcicsIHNoaXBMZW5ndGg6IDUgfSxcbiAgICAgIHsgc2hpcFR5cGU6ICdiYXR0bGVzaGlwJywgc2hpcExlbmd0aDogNCB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2Rlc3RveWVyJywgc2hpcExlbmd0aDogMyB9LFxuICAgICAgeyBzaGlwVHlwZTogJ3N1Ym1hcmluZScsIHNoaXBMZW5ndGg6IDMgfSxcbiAgICAgIHsgc2hpcFR5cGU6ICdndW5ib2F0Jywgc2hpcExlbmd0aDogMiB9LFxuICAgIF07XG5cbiAgICByZXR1cm4gc2hpcFR5cGVzW2N1cnJlbnRTaGlwcy5sZW5ndGhdO1xuICB9O1xuXG4gIGNvbnN0IHJlY2lldmVSYW5kb21BdHRhY2sgPSAocmFuZG9taXplcikgPT4ge1xuICAgIGNvbnN0IHJhbmRvbVBvc2l0aW9uID0gY3JlYXRlUmFuZG9tQ29vcmRzKHJhbmRvbWl6ZXIpO1xuXG4gICAgY29uc3QgaGFzQmVlbkhpdCA9IGZpbHRlckF0dGFjayhoaXRzLCByYW5kb21Qb3NpdGlvbik7XG4gICAgY29uc3QgaGFzQmVlbk1pc3MgPSBmaWx0ZXJBdHRhY2sobWlzc2VzLCByYW5kb21Qb3NpdGlvbik7XG5cbiAgICBpZiAoaGFzQmVlbkhpdC5sZW5ndGggPiAwIHx8IGhhc0JlZW5NaXNzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiByZWNpZXZlUmFuZG9tQXR0YWNrKHJhbmRvbWl6ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVjaWV2ZUF0dGFjayhyYW5kb21Qb3NpdGlvbik7XG4gIH07XG5cbiAgY29uc3QgaXNBbGxTdW5rID0gKCkgPT4ge1xuICAgIGxldCBoYXNTdW5rZWQgPSB0cnVlO1xuICAgIGN1cnJlbnRTaGlwcy5mb3JFYWNoKChzaGlwcykgPT4ge1xuICAgICAgaWYgKCFzaGlwLmlzU3VuayhzaGlwcykpIHtcbiAgICAgICAgaGFzU3Vua2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaGFzU3Vua2VkO1xuICB9O1xuXG4gIGNvbnN0IGdldFZhbHVlcyA9ICgpID0+ICh7XG4gICAgY3VycmVudFNoaXBzLFxuICAgIGhpdHMsXG4gICAgbWlzc2VzLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGF0dGFja1NoaXAsXG4gICAgcmVjaWV2ZUF0dGFjayxcbiAgICBpc0FsbFN1bmssXG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5LFxuICAgIHBsYXllclBsYWNlU2hpcCxcbiAgICBwbGFjZUFsbFNoaXBzLFxuICAgIHJhbmRvbWl6ZSxcbiAgICByZWNpZXZlUmFuZG9tQXR0YWNrLFxuICAgIHJhbmRvbUF4aXMsXG4gICAgZ2V0VmFsdWVzLFxuICAgIGdldFR5cGVPZlBsYWNlZFNoaXAsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5cbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcblxuY29uc3QgR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBwbGF5ZXJDaGVja0JvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuXG4gIGNvbnN0IHNoaXAgPSBTaGlwKCk7XG5cbiAgY29uc3QgcmFuZG9taXplciA9IGNvbXB1dGVyQm9hcmQucmFuZG9taXplO1xuICBjb25zdCByYW5kb21BeGllcyA9IGNvbXB1dGVyQm9hcmQucmFuZG9tQXhpcztcblxuICBjb25zdCBjaGVja1NldHVwID0gKHBsYXllckNoZWNrU2hpcHMpID0+IHtcbiAgICBpZiAocGxheWVyQ2hlY2tTaGlwcy5sZW5ndGggPT09IDUpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBzZXR1cEdhbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQ2hlY2tWYWx1ZXMgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgaWYgKCFjaGVja1NldHVwKHBsYXllckNoZWNrVmFsdWVzLmN1cnJlbnRTaGlwcykpIHJldHVybiBmYWxzZTtcblxuICAgIHBsYXllckJvYXJkLnBsYWNlQWxsU2hpcHMocGxheWVyQ2hlY2tWYWx1ZXMuY3VycmVudFNoaXBzKTtcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcHNSYW5kb21seShyYW5kb21pemVyLCByYW5kb21BeGllcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrQm9hdHMgPSAoY29vcmRzKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQ2hlY2tWYWx1ZXMgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFZhbHVlcygpO1xuXG4gICAgaWYgKCFjaGVja1NldHVwKHBsYXllckNoZWNrVmFsdWVzLmN1cnJlbnRTaGlwcykpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbXB1dGVyQm9hcmQucmVjaWV2ZUF0dGFjayhjb29yZHMpO1xuICAgIHBsYXllckJvYXJkLnJlY2lldmVSYW5kb21BdHRhY2socmFuZG9taXplcik7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBzZXR1cFNoaXAgPSAobG9jYXRpb24sIGF4aXMpID0+XG4gICAgcGxheWVyQ2hlY2tCb2FyZC5wbGF5ZXJQbGFjZVNoaXAobG9jYXRpb24sIGF4aXMpO1xuXG4gIGNvbnN0IGdhbWVJc092ZXIgPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyQm9hcmRWYWx1ZXMuY3VycmVudFNoaXBzLCAndGhlIGN1cnJlbnQgc2hpcHMnKTtcblxuICAgIGlmIChjb21wdXRlckJvYXJkLmlzQWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4geyBtZXNzYWdlOiAnWW91IFdvbicsIGdhbWVGaW5pc2hlZDogdHJ1ZSB9O1xuICAgIH1cblxuICAgIGlmIChwbGF5ZXJCb2FyZC5pc0FsbFN1bmsoKSkge1xuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ1lvdSBMb3N0JywgZ2FtZUZpbmlzaGVkOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiB7IGdhbWVGaW5pc2hlZDogZmFsc2UgfTtcbiAgfTtcblxuICBjb25zdCBhcnJhbmdlQmxvY2tzID0gKG1vdXNlUG9zaXRpb24sIGN1cnJlbnRSb3RhdGlvbikgPT4ge1xuICAgIGNvbnN0IHNoaXBUeXBlT2JqZWN0ID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRUeXBlT2ZQbGFjZWRTaGlwKCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwVHlwZU9iamVjdCwgJ3RoZSBzaGlwIHR5cGUgb2JqZWN0Jyk7XG4gICAgLy8gY29uc29sZS5sb2cobW91c2VQb3NpdGlvbiwgJ3RoZSBtb3VzZSBwb3NpdGlvbicpO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRSb3RhdGlvbiwgJ3RoZSBjdXJyZW50IHJvdGF0aW9uJyk7XG5cbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXAuY3JlYXRlU2hpcChcbiAgICAgIG1vdXNlUG9zaXRpb24sXG4gICAgICBzaGlwVHlwZU9iamVjdC5zaGlwTGVuZ3RoLFxuICAgICAgY3VycmVudFJvdGF0aW9uXG4gICAgKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50U2hpcCwgJ3RoZSBtb3N0IHVwIHRvIGRhdGUgc2hpcHMnKTtcblxuICAgIHJldHVybiBjdXJyZW50U2hpcDtcbiAgfTtcblxuICBjb25zdCBnZXRHYW1lVmFsdWVzID0gKCkgPT4gKHtcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBjb21wdXRlckJvYXJkLFxuICAgIHBsYXllckNoZWNrQm9hcmQsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgY2hlY2tTZXR1cCxcbiAgICBhdHRhY2tCb2F0cyxcbiAgICBzZXR1cEdhbWUsXG4gICAgZ2FtZUlzT3ZlcixcbiAgICBzZXR1cFNoaXAsXG4gICAgZ2V0R2FtZVZhbHVlcyxcbiAgICBhcnJhbmdlQmxvY2tzLFxuICB9O1xufTtcblxuY29uc3QgYWN0aXZlR2FtZSA9IEdhbWUoKTtcblxuZXhwb3J0IHsgR2FtZSwgYWN0aXZlR2FtZSB9O1xuIiwiY29uc3QgUG9zaXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVBvc2l0aW9uID0gKHhDb29yZCwgeUNvb3JkKSA9PiAoeyB4Q29vcmQsIHlDb29yZCB9KTtcblxuICBjb25zdCBjaGVja091dE9mQm91bmNlID0gKG5ld1Bvc2l0aW9uKSA9PiB7XG4gICAgaWYgKG5ld1Bvc2l0aW9uLnhDb29yZCA+IDkgfHwgbmV3UG9zaXRpb24ueUNvb3JkID4gOSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKG5ld1Bvc2l0aW9uLnhDb29yZCA8IDAgfHwgbmV3UG9zaXRpb24ueUNvb3JkIDwgMCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGFkZFBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMSA9PT0gZmFsc2UgfHwgcG9zaXRpb24yID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBjcmVhdGVQb3NpdGlvbihwb3NpdGlvbjEueENvb3JkLCBwb3NpdGlvbjEueUNvb3JkKTtcbiAgICBuZXdQb3NpdGlvbi54Q29vcmQgKz0gcG9zaXRpb24yLnhDb29yZDtcbiAgICBuZXdQb3NpdGlvbi55Q29vcmQgKz0gcG9zaXRpb24yLnlDb29yZDtcblxuICAgIGlmIChjaGVja091dE9mQm91bmNlKG5ld1Bvc2l0aW9uKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IG11bHRpcGx5UG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAocG9zaXRpb24xID09PSBmYWxzZSB8fCBwb3NpdGlvbjIgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGNyZWF0ZVBvc2l0aW9uKHBvc2l0aW9uMS54Q29vcmQsIHBvc2l0aW9uMS55Q29vcmQpO1xuICAgIG5ld1Bvc2l0aW9uLnhDb29yZCAqPSBwb3NpdGlvbjIueENvb3JkO1xuICAgIG5ld1Bvc2l0aW9uLnlDb29yZCAqPSBwb3NpdGlvbjIueUNvb3JkO1xuXG4gICAgaWYgKGNoZWNrT3V0T2ZCb3VuY2UobmV3UG9zaXRpb24pKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbmV3UG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbCA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgYXhpcykgPT4ge1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSArIDEpIHJldHVybiB0cnVlO1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHBvc2l0aW9uMVtheGlzXSA9PT0gcG9zaXRpb24yW2F4aXNdIC0gMSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmVQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmICghY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgJ3hDb29yZCcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgJ3lDb29yZCcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlUG9zaXRpb24sXG4gICAgYWRkUG9zaXRpb24sXG4gICAgbXVsdGlwbHlQb3NpdGlvbixcbiAgICBjb21wYXJlUG9zaXRpb24sXG4gICAgY2hlY2tPdXRPZkJvdW5jZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc2l0aW9uO1xuIiwiY29uc3QgUHJhY3RpY2FsID0gKCkgPT4ge1xuICBjb25zdCBjb3B5QXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgICBjb25zdCBuZXdBcnJheSA9IFtdO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgbmV3QXJyYXkucHVzaChpdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdBcnJheTtcbiAgfTtcblxuICBjb25zdCBpc09iamVjdCA9IChjdXJyZW50T2JqZWN0KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50T2JqZWN0ID09PSAnb2JqZWN0JyAmJiBjdXJyZW50T2JqZWN0ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrT2JqZWN0ID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBzZWNvbmRJbmRleCA9IDA7XG5cbiAgICBsZXQgb2JqZWN0SXNFcXVhbCA9IHRydWU7XG5cbiAgICBjb25zdCBjdXJyZW50T2JqZWN0ID0gb2JqZWN0MTtcbiAgICBjb25zdCBjdXJyZW50T2JqZWN0MiA9IG9iamVjdDI7XG5cbiAgICBjb25zdCBjdXJyZW50T2JqZWN0VmFsdWVzID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50T2JqZWN0KTtcbiAgICBjb25zdCBjdXJyZW50T2JqZWN0MlZhbHVlcyA9IE9iamVjdC52YWx1ZXMoY3VycmVudE9iamVjdDIpO1xuXG4gICAgY29uc3Qgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKGN1cnJlbnRPYmplY3QpO1xuICAgIGNvbnN0IG9iamVjdEtleXMyID0gT2JqZWN0LmtleXMoY3VycmVudE9iamVjdDIpO1xuXG4gICAgb2JqZWN0S2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChrZXkgIT09IG9iamVjdEtleXMyW2luZGV4XSkgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgaW5kZXggKz0gMTtcbiAgICB9KTtcblxuICAgIGlmICghb2JqZWN0SXNFcXVhbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChvYmplY3RLZXlzLmxlbmd0aCAhPT0gb2JqZWN0S2V5czIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50T2JqZWN0LCAndGhlIGN1cnJlbnQgb2JqZWN0Jyk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudE9iamVjdDIsICd0aGUgY3VycmVudCBvYmplY3QyJyk7XG5cbiAgICBjdXJyZW50T2JqZWN0VmFsdWVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0yID0gY3VycmVudE9iamVjdDJWYWx1ZXNbc2Vjb25kSW5kZXhdO1xuXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkgJiYgaXNPYmplY3QoaXRlbTIpKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrT2JqZWN0Qm9vbCA9IGNoZWNrT2JqZWN0KGl0ZW0sIGl0ZW0yKTtcblxuICAgICAgICBpZiAoIWNoZWNrT2JqZWN0Qm9vbCkgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChpdGVtICE9PSBpdGVtMikge1xuICAgICAgICBvYmplY3RJc0VxdWFsID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHNlY29uZEluZGV4ICs9IDE7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqZWN0SXNFcXVhbDtcbiAgfTtcblxuICByZXR1cm4geyBjb3B5QXJyYXksIGNoZWNrT2JqZWN0IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmFjdGljYWw7XG4iLCJpbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5cbmNvbnN0IFNoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcblxuICBjb25zdCBnZXRBZGRlZFBvc2l0aW9uID0gKGF4aXMpID0+IHtcbiAgICBsZXQgYWRkZWRQb3NpdGlvbjtcblxuICAgIGlmIChheGlzID09PSAneCcpIGFkZGVkUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbigxLCAwKTtcbiAgICBlbHNlIGFkZGVkUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbigwLCAxKTtcblxuICAgIHJldHVybiBhZGRlZFBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVNoaXAgPSAocG9zaXRpb24xLCBsZW5ndGgxLCBheGlzKSA9PiB7XG4gICAgaWYgKGxlbmd0aDEgPT09IDAgfHwgbGVuZ3RoMSA+IDUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocG9zaXRpb24uY2hlY2tPdXRPZkJvdW5jZShwb3NpdGlvbjEpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBwb3B1bGF0ZVNoaXBzID0gKGN1cnJlbnRQb3NpdGlvbiwgbGF0ZXN0TGVuZ3RoLCBsYXRlc3RBcnJheSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEFycmF5ID0gbGF0ZXN0QXJyYXk7XG4gICAgICBsZXQgbmV3UG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb247XG5cbiAgICAgIGlmIChjdXJyZW50UG9zaXRpb24gPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAobGF0ZXN0TGVuZ3RoID09PSAwKSByZXR1cm4gY3VycmVudEFycmF5O1xuICAgICAgaWYgKGxhdGVzdExlbmd0aCA9PT0gbGVuZ3RoMSkge1xuICAgICAgICBjdXJyZW50QXJyYXkucHVzaChjdXJyZW50UG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhjdXJyZW50UG9zaXRpb24sIGxhdGVzdExlbmd0aCAtIDEsIGN1cnJlbnRBcnJheSk7XG4gICAgICB9XG4gICAgICBjb25zdCBhZGRlZFBvc2l0aW9uID0gZ2V0QWRkZWRQb3NpdGlvbihheGlzKTtcbiAgICAgIG5ld1Bvc2l0aW9uID0gcG9zaXRpb24uYWRkUG9zaXRpb24obmV3UG9zaXRpb24sIGFkZGVkUG9zaXRpb24pO1xuXG4gICAgICBpZiAoIW5ld1Bvc2l0aW9uKSByZXR1cm4gbmV3UG9zaXRpb247XG4gICAgICBjdXJyZW50QXJyYXkucHVzaChuZXdQb3NpdGlvbik7XG5cbiAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gY3VycmVudEFycmF5Lmxlbmd0aCAtIDE7XG5cbiAgICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKFxuICAgICAgICBjdXJyZW50QXJyYXlbYXJyYXlMZW5ndGhdLFxuICAgICAgICBsYXRlc3RMZW5ndGggLSAxLFxuICAgICAgICBjdXJyZW50QXJyYXlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKHBvc2l0aW9uMSwgbGVuZ3RoMSwgW10sIGZhbHNlKTtcbiAgfTtcblxuXG5cbiAgY29uc3QgaXNTdW5rID0gKHNoaXBBcnJheSkgPT4ge1xuICAgIGlmIChzaGlwQXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaGl0ID0gKHBvc2l0aW9uc0FycmF5LCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGhpdEFycmF5ID0gcG9zaXRpb25zQXJyYXkuZmlsdGVyKChwb3MpID0+IHtcbiAgICAgIGlmIChwb3MueENvb3JkID09PSBwb3NpdGlvbi54Q29vcmQgJiYgcG9zLnlDb29yZCA9PT0gcG9zaXRpb24ueUNvb3JkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGNvbnN0IHNoaXBBcnJheXMgPSBwb3NpdGlvbnNBcnJheS5maWx0ZXIoKHBvcykgPT4ge1xuICAgICAgaWYgKHBvcy54Q29vcmQgPT09IHBvc2l0aW9uLnhDb29yZCAmJiBwb3MueUNvb3JkID09PSBwb3NpdGlvbi55Q29vcmQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBoaXRBcnJheSwgc2hpcEFycmF5cyB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlU2hpcCxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCBEb20gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCB7IGFjdGl2ZUdhbWUgfSBmcm9tICcuL21haW4uanMnO1xuXG5jb25zdCBVaSA9ICgpID0+IHtcbiAgY29uc3QgZG9tID0gRG9tKCk7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcblxuICBjb25zdCByZW5kZXJTcGVlZCA9IDEwO1xuXG4gIGxldCBibG9ja1NpemUgPSA0MjtcblxuICBsZXQgcGxhY2VkU2hpcCA9IGZhbHNlO1xuICBsZXQgYXhpcyA9ICd5JztcblxuICBsZXQgbW91c2VCbG9ja0xvY2F0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgZ2V0TW91c2VQb3NpdGlvbiA9IChvZmZzZXRYLCBvZmZzZXRZKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cob2Zmc2V0WCwgb2Zmc2V0WSwgJ29mZnNldCB4IGFuZCBvZmZzZXQgeScpO1xuXG4gICAgY29uc3QgeENvb3JkID0gTWF0aC5mbG9vcihvZmZzZXRYIC8gYmxvY2tTaXplKTtcbiAgICBjb25zdCB5Q29vcmQgPSBNYXRoLmZsb29yKG9mZnNldFkgLyBibG9ja1NpemUpO1xuXG4gICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHhDb29yZCwgeUNvb3JkKTtcblxuICAgIGlmICh4Q29vcmQgPCAwIHx8IHlDb29yZCA8IDApIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBtb3VzZVBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGZpbmRNb3VzZVBvc2l0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY3VycmVudE1vdXNlUG9zaXRpb24gPSBnZXRNb3VzZVBvc2l0aW9uKGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuXG4gICAgbW91c2VCbG9ja0xvY2F0aW9uID0gY3VycmVudE1vdXNlUG9zaXRpb247XG5cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50TW91c2VQb3NpdGlvbiwgJ3RoZSBjdXJyZW50IG1vdXNlIHBvc2l0aW9uJyk7XG4gIH07XG5cbiAgLy8gd290ayBvbiB0aGlzIGZ1bmN0aW9uXG4gIGNvbnN0IGZpbmRUb3VjaFBvc2l0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB0b3VjaE9mZnNldFggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgIGNvbnN0IHRvdWNoT2Zmc2V0WSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSByZWN0LnRvcDtcblxuICAgIGNvbnN0IHRvdWNoUG9zaXRpb24gPSBnZXRNb3VzZVBvc2l0aW9uKHRvdWNoT2Zmc2V0WCwgdG91Y2hPZmZzZXRZKTtcbiAgICBtb3VzZUJsb2NrTG9jYXRpb24gPSB0b3VjaFBvc2l0aW9uO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICAvLyBibG9jayBzaXplIG1hdGNoZXMgdGhlIHNpemUgZ3JpZHNpemUgb2YgdGhlIG1lZGlhIHF1ZXJ5IGRpdmlkZWQgYnkgMTBcbiAgY29uc3QgY2hhbmdlQmxvY2tTaXplID0gKG1hdGNoTWVkaWEpID0+IHtcbiAgICBibG9ja1NpemUgPSA0MjtcbiAgICBpZiAobWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTYwcHgpJykubWF0Y2hlcykgYmxvY2tTaXplID0gMzA7XG4gICAgaWYgKG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDQ3MHB4KScpLm1hdGNoZXMpIGJsb2NrU2l6ZSA9IDIxO1xuICAgIGlmIChtYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAzMjBweCknKS5tYXRjaGVzKSBibG9ja1NpemUgPSAxNTtcblxuICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDMyMHB4KScpLCAndGhlIGN1cnJlbnQgbWF0Y2ggbWVkaWEnKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVCbG9ja0VsZW1lbnQgPSAoYmxvY2tDbGFzcywgY3JlYXRlQmxvY2spID0+IHtcbiAgICBsZXQgbGF0ZXN0Q2xhc3MgPSBibG9ja0NsYXNzO1xuXG4gICAgaWYgKGxhdGVzdENsYXNzICE9PSAnaGl0QmxvY2snICYmIGxhdGVzdENsYXNzICE9PSAnbWlzc0Jsb2NrJykge1xuICAgICAgbGF0ZXN0Q2xhc3MgPSAnJztcbiAgICB9XG5cbiAgICBjb25zdCBibG9ja0VsZW1lbnQgPSBjcmVhdGVCbG9jaygnZGl2Jyk7XG4gICAgYmxvY2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJyk7XG4gICAgaWYgKGxhdGVzdENsYXNzICE9PSAnJykgYmxvY2tFbGVtZW50LmNsYXNzTGlzdC5hZGQobGF0ZXN0Q2xhc3MpO1xuXG4gICAgcmV0dXJuIGJsb2NrRWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBkaXNhYmxlU3RhcnRlclVpID0gKCkgPT4gdHJ1ZTtcblxuICAvLyBjb25zdCByZW5kZXJTZWxlY3Rpb25CbG9ja3MgPSAobW91c2VQb3NpdGlvbiwgbGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gIC8vICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gIC8vICAgY29uc3QgY3VycmVudFNuYWtlQmxvY2sgPSBjcmVhdGVCbG9ja0VsZW1lbnQoKTtcbiAgLy8gICBjb25zdCByZWFsUG9zaXRpb25YID0gTWF0aC5mbG9vcihtb3VzZVBvc2l0aW9uLnhDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG4gIC8vICAgY29uc3QgcmVhbFBvc2l0aW9uWSA9IE1hdGguZmxvb3IobW91c2VQb3NpdGlvbi55Q29vcmQgKiBsYXRlc3RCbG9ja1NpemUpO1xuXG4gIC8vICAgY29uc29sZS5sb2cobW91c2VQb3NpdGlvbiwgJ1RIRSBDVVJSRU5UIE1PVVNFIFBPU0lUSU9OJyk7XG5cbiAgLy8gICBjb25zb2xlLmxvZyhyZWFsUG9zaXRpb25YLCAndGhlIHJlYWwgcG9zaXRpb24geCcpO1xuICAvLyAgIGNvbnNvbGUubG9nKHJlYWxQb3NpdGlvblksICd0aGUgcmVhbCBwb3NpdGlvbiB5Jyk7XG5cbiAgLy8gICBjdXJyZW50U25ha2VCbG9jay5zdHlsZS5sZWZ0ID0gYCR7cmVhbFBvc2l0aW9uWH1weGA7XG4gIC8vICAgY3VycmVudFNuYWtlQmxvY2suc3R5bGUudG9wID0gYCR7cmVhbFBvc2l0aW9uWX1weGA7XG5cbiAgLy8gICBlbGVtZW50LnNoaXBHcmlkLmFwcGVuZENoaWxkKGN1cnJlbnRTbmFrZUJsb2NrKTtcbiAgLy8gfTtcblxuICBjb25zdCBjcmVhdGVEb21FbGVtZW50ID0gKGVsZW1lbnROYW1lKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcblxuICBjb25zdCBjcmVhdGVTaGlwQmxvY2sgPSAoc2hpcFBvc2l0aW9uLCBsYXRlc3RCbG9ja1NpemUpID0+IHtcbiAgICBjb25zdCBzaGlwQmxvY2sgPSBjcmVhdGVCbG9ja0VsZW1lbnQoZmFsc2UsIGNyZWF0ZURvbUVsZW1lbnQpO1xuXG4gICAgY29uc3QgcmVhbFBvc2l0aW9uWCA9IE1hdGguZmxvb3Ioc2hpcFBvc2l0aW9uLnhDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgY29uc3QgcmVhbFBvc2l0aW9uWSA9IE1hdGguZmxvb3Ioc2hpcFBvc2l0aW9uLnlDb29yZCAqIGxhdGVzdEJsb2NrU2l6ZSk7XG4gICAgc2hpcEJsb2NrLnN0eWxlLmxlZnQgPSBgJHtyZWFsUG9zaXRpb25YfXB4YDtcbiAgICBzaGlwQmxvY2suc3R5bGUudG9wID0gYCR7cmVhbFBvc2l0aW9uWX1weGA7XG5cbiAgICByZXR1cm4gc2hpcEJsb2NrO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckFscmVhZHlQbGFjZWRTaGlwcyA9IChzaGlwR3JpZCwgbGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgY29uc3QgZ2FtZVZhbHVlcyA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuICAgIGNvbnN0IGNoZWNrQm9hcmRTaGlwcyA9XG4gICAgICBnYW1lVmFsdWVzLnBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCkuY3VycmVudFNoaXBzO1xuXG4gICAgY2hlY2tCb2FyZFNoaXBzLmZvckVhY2goKHBsYXllckNoZWNrU2hpcHMpID0+IHtcbiAgICAgIHBsYXllckNoZWNrU2hpcHMuZm9yRWFjaCgoYm9hdCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwQmxvY2sgPSBjcmVhdGVTaGlwQmxvY2soYm9hdCwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQoc2hpcEJsb2NrKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclBsYWNlZFNoaXAgPSAobGF0ZXN0QmxvY2tTaXplKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuICAgIGNvbnN0IHsgc2hpcEdyaWQgfSA9IGVsZW1lbnQ7XG5cbiAgICBpZiAoIXBsYWNlZFNoaXApIHJldHVybiBwbGFjZWRTaGlwO1xuXG4gICAgc2hpcEdyaWQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBwbGFjZWRTaGlwLmZvckVhY2goKHNoaXBQb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc2hpcEJsb2NrID0gY3JlYXRlU2hpcEJsb2NrKHNoaXBQb3NpdGlvbiwgbGF0ZXN0QmxvY2tTaXplKTtcbiAgICAgIHNoaXBHcmlkLmFwcGVuZENoaWxkKHNoaXBCbG9jayk7XG4gICAgfSk7XG5cbiAgICByZW5kZXJBbHJlYWR5UGxhY2VkU2hpcHMoc2hpcEdyaWQsIGxhdGVzdEJsb2NrU2l6ZSk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlQXhpcyA9ICgpID0+IHtcbiAgICBpZiAoYXhpcyA9PT0gJ3knKSBheGlzID0gJ3gnO1xuICAgIGVsc2UgYXhpcyA9ICd5JztcbiAgfTtcblxuICBjb25zdCBtb3ZlU2hpcEJ5RGlyZWN0aW9uID0gKG1vdXNlTG9jYXRpb24sIGN1cnJlbnRTaGlwLCBjdXJyZW50QXhpcykgPT4ge1xuICAgIGxldCBsYXRlc3RTaGlwID0gZmFsc2U7XG5cbiAgICBpZiAocG9zaXRpb24uY2hlY2tPdXRPZkJvdW5jZShjdXJyZW50U2hpcFswXSkpIHJldHVybiBsYXRlc3RTaGlwO1xuXG4gICAgY29uc3QgbmV3WFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICBtb3VzZUxvY2F0aW9uLnhDb29yZCxcbiAgICAgIDBcbiAgICApLnhDb29yZDtcblxuICAgIGNvbnN0IG5ld1lQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKFxuICAgICAgMCxcbiAgICAgIG1vdXNlTG9jYXRpb24ueUNvb3JkXG4gICAgKS55Q29vcmQ7XG5cbiAgICBsZXQgbmV3U2hpcFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oXG4gICAgICBuZXdYUG9zaXRpb24sXG4gICAgICBjdXJyZW50U2hpcFswXS55Q29vcmRcbiAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRBeGlzID09PSAneCcpIHtcbiAgICAgIG5ld1NoaXBQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKFxuICAgICAgICBjdXJyZW50U2hpcFswXS54Q29vcmQsXG4gICAgICAgIG5ld1lQb3NpdGlvblxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsYXRlc3RTaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgbmV3U2hpcFBvc2l0aW9uLFxuICAgICAgY3VycmVudFNoaXAubGVuZ3RoLFxuICAgICAgY3VycmVudEF4aXNcbiAgICApO1xuXG4gICAgcmV0dXJuIGxhdGVzdFNoaXA7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VQbGF5ZXJTaGlwID0gKGxhdGVzdFNoaXAsIGxhdGVzdEF4aXMsIGxhdGVzdEdhbWUpID0+IHtcbiAgICBpZiAobGF0ZXN0U2hpcCkgbGF0ZXN0R2FtZS5zZXR1cFNoaXAobGF0ZXN0U2hpcFswXSwgbGF0ZXN0QXhpcyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUGxheWVyU2hpcEV2ZW50ID0gKCkgPT4ge1xuICAgIHBsYWNlUGxheWVyU2hpcChwbGFjZWRTaGlwLCBheGlzLCBhY3RpdmVHYW1lKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJHYW1lID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge30sIHJlbmRlclNwZWVkKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwU2VsY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb20uZ2V0RWxlbWVudHMoKTtcblxuICAgIGVsZW1lbnRzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbGVtZW50cy5zZWN0aW9uU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZWxlbWVudHMuc2hpcEdyaWQuaW5uZXJIVE1MID0gJyc7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRHYW1lID0gKGdhbWVSZW5kZXIpID0+IHtcbiAgICByZW1vdmVTaGlwc1NlbGN0aW9uKCk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU2VsZWN0aW9uR3JpZCA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGdhbWVWYWx1ZSA9IGFjdGl2ZUdhbWUuZ2V0R2FtZVZhbHVlcygpO1xuICAgICAgY29uc3QgY2hlY2tCb2FyZFNoaXBzID1cbiAgICAgICAgZ2FtZVZhbHVlLnBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCkuY3VycmVudFNoaXBzO1xuXG4gICAgICBjaGFuZ2VCbG9ja1NpemUod2luZG93Lm1hdGNoTWVkaWEpO1xuXG4gICAgICBpZiAoYWN0aXZlR2FtZS5jaGVja1NldHVwKGdhbWVWYWx1ZS5wbGF5ZXJDaGVja0JvYXJkKSkgZGlzYWJsZVN0YXJ0ZXJVaSgpO1xuXG4gICAgICBpZiAobW91c2VCbG9ja0xvY2F0aW9uKSB7XG4gICAgICAgIGxldCBjdXJyZW50U2hpcCA9IGFjdGl2ZUdhbWUuYXJyYW5nZUJsb2Nrcyhtb3VzZUJsb2NrTG9jYXRpb24sIGF4aXMpO1xuICAgICAgICBpZiAoIWN1cnJlbnRTaGlwICYmIHBsYWNlZFNoaXApIHtcbiAgICAgICAgICBjdXJyZW50U2hpcCA9IG1vdmVTaGlwQnlEaXJlY3Rpb24oXG4gICAgICAgICAgICBtb3VzZUJsb2NrTG9jYXRpb24sXG4gICAgICAgICAgICBwbGFjZWRTaGlwLFxuICAgICAgICAgICAgYXhpc1xuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFNoaXApIHBsYWNlZFNoaXAgPSBjdXJyZW50U2hpcDtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGFjZWRTaGlwLCAndGhlIGN1cnJlbnQgcGxhY2VkIHNoaXAnKTtcblxuICAgICAgICBpZiAocGxhY2VkU2hpcCkgcmVuZGVyUGxhY2VkU2hpcChibG9ja1NpemUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2ZUdhbWUuY2hlY2tTZXR1cChjaGVja0JvYXJkU2hpcHMpKSByZW5kZXJTZWxlY3Rpb25HcmlkKCk7XG4gICAgfSwgcmVuZGVyU3BlZWQpO1xuICB9O1xuXG4gIGNvbnN0IGFjdGl2YXRlVWkgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb20uZ2V0UGFnZSgpO1xuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gcGFnZUNvbnRlbnQ7XG5cbiAgICBhZGRVaUV2ZW50cygpO1xuICAgIHJlbmRlclNlbGVjdGlvbkdyaWQoKTtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZXMgPSAoKSA9PiAoe1xuICAgIGJsb2NrU2l6ZSxcbiAgICBwbGFjZWRTaGlwLFxuICAgIGF4aXMsXG4gICAgbW91c2VCbG9ja0xvY2F0aW9uLFxuICB9KTtcblxuICBjb25zdCBhZGRVaUV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9tLmdldEVsZW1lbnRzKCk7XG4gICAgZWxlbWVudC5zaGlwTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZpbmRUb3VjaFBvc2l0aW9uKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcEV2ZW50KTtcblxuICAgIGVsZW1lbnQucm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQXhpcyk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVWlFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvbS5nZXRFbGVtZW50cygpO1xuXG4gICAgZWxlbWVudC5zaGlwTGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmluZE1vdXNlUG9zaXRpb24pO1xuICAgIGVsZW1lbnQuc2hpcExheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZpbmRUb3VjaFBvc2l0aW9uKTtcbiAgICBlbGVtZW50LnNoaXBMYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUGxheWVyU2hpcEV2ZW50KTtcblxuICAgIGVsZW1lbnQucm90YXRlQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQXhpcyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhY3RpdmF0ZVVpLFxuICAgIGNyZWF0ZUJsb2NrRWxlbWVudCxcbiAgICBnZXRNb3VzZVBvc2l0aW9uLFxuICAgIG1vdmVTaGlwQnlEaXJlY3Rpb24sXG4gICAgY2hhbmdlQmxvY2tTaXplLFxuICAgIGNoYW5nZUF4aXMsXG4gICAgZ2V0VmFsdWVzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVWk7XG4iXSwibmFtZXMiOlsicmVmcmVzaGluZ0xvZ28iLCJEb20iLCJnZXRFbGVtZW50cyIsIm92ZXJsYXkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWN0aW9uU2NyZWVuIiwic2hpcFRleHQiLCJzaGlwR3JpZCIsInNoaXBMYXllciIsInJvdGF0ZUJ1dHRvbiIsImdyaWRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImhpdHMiLCJtaXNzZXMiLCJwbGF5ZXJHcmlkIiwicGxheWVySGl0cyIsInBsYXllck1pc3NlcyIsImNvbXB1dGVyR3JpZCIsImNvbXB1dGVySGl0cyIsImNvbXB1dGVyTWlzc2VzIiwiY29udGVudCIsImdldFBhZ2UiLCJQb3NpdGlvbiIsIlNoaXAiLCJQcmFjdGljYWwiLCJHYW1lYm9hcmQiLCJwb3NpdGlvbiIsInNoaXAiLCJwcmFjdGljYWwiLCJjdXJyZW50U2hpcHMiLCJyYW5kb21pemUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21BeGlzIiwiYXhpZXMiLCJsZW5ndGgiLCJwbGFjZUFsbFNoaXBzIiwic2hpcHNBcnJheSIsImNvbXBhcmVTaGlwc0FycmF5IiwibGF0ZXN0U2hpcHNBcnJheSIsInNoaXBzIiwic2hpcHNEb0NvbGxpZGUiLCJmb3JFYWNoIiwibGF0ZXN0U2hpcHMiLCJib2F0IiwibGF0ZXN0Qm9hdCIsImNvbXBhcmVQb3NpdGlvbiIsInBsYXllclBsYWNlU2hpcCIsImxvY2F0aW9uIiwiYXhpcyIsImxhdGVzdFBvc2l0aW9uIiwiY3VycmVudEFycmF5IiwiY29weUFycmF5Iiwic2hpcGxlbmd0aCIsIm1lc3NhZ2UiLCJjdXJyZW50U2hpcCIsImNyZWF0ZVNoaXAiLCJzaGlwQXJyYXkiLCJpc0NvbGxpZGVkIiwicHVzaCIsInBsYWNlUmFuZG9tU2hpcHMiLCJyYW5kb21pemVyIiwicmFuZG9tQXhpZXMiLCJsYXRlc3RMZW5ndGgiLCJyYW5kb21Qb3NpdGlvbiIsImNyZWF0ZVBvc2l0aW9uIiwicmFuZG9tU2hpcCIsInNoaXBDb2xsaWRlcyIsInBsYWNlU2hpcHNSYW5kb21seSIsImF0dGFja1NoaXAiLCJjdXJyZW50SGl0cyIsImN1cnJlbnRNaXNzZXMiLCJpc0hpdCIsImxhdGVzdEhpdHMiLCJsYXRlc3RNaXNzZXMiLCJwb3NpdGlvbnNBcnJheSIsImhpdCIsImhpdEFycmF5Iiwic2hpcEFycmF5cyIsImZpbmFsT2JqZWN0IiwicmVjaWV2ZUF0dGFjayIsInJlc3VsdCIsImNyZWF0ZVJhbmRvbUNvb3JkcyIsImlzTW9ja1JhbmRvbSIsImNhbGxSYW5kb21pemVyIiwicmFuZG9tWCIsInJhbmRvbVkiLCJmaWx0ZXJBdHRhY2siLCJhcnJheSIsImN1cnJlbnRBdHRhY2siLCJjdXJyZW50QXR0YWNrQXJyYXkiLCJmaWx0ZXIiLCJpdGVtIiwieENvb3JkIiwieUNvb3JkIiwiZ2V0VHlwZU9mUGxhY2VkU2hpcCIsInNoaXBUeXBlcyIsInNoaXBUeXBlIiwic2hpcExlbmd0aCIsInJlY2lldmVSYW5kb21BdHRhY2siLCJoYXNCZWVuSGl0IiwiaGFzQmVlbk1pc3MiLCJpc0FsbFN1bmsiLCJoYXNTdW5rZWQiLCJpc1N1bmsiLCJnZXRWYWx1ZXMiLCJHYW1lIiwicGxheWVyQm9hcmQiLCJjb21wdXRlckJvYXJkIiwicGxheWVyQ2hlY2tCb2FyZCIsImNoZWNrU2V0dXAiLCJwbGF5ZXJDaGVja1NoaXBzIiwic2V0dXBHYW1lIiwicGxheWVyQ2hlY2tWYWx1ZXMiLCJhdHRhY2tCb2F0cyIsImNvb3JkcyIsInNldHVwU2hpcCIsImdhbWVJc092ZXIiLCJnYW1lRmluaXNoZWQiLCJhcnJhbmdlQmxvY2tzIiwibW91c2VQb3NpdGlvbiIsImN1cnJlbnRSb3RhdGlvbiIsInNoaXBUeXBlT2JqZWN0IiwiZ2V0R2FtZVZhbHVlcyIsImFjdGl2ZUdhbWUiLCJjaGVja091dE9mQm91bmNlIiwibmV3UG9zaXRpb24iLCJhZGRQb3NpdGlvbiIsInBvc2l0aW9uMSIsInBvc2l0aW9uMiIsIm11bHRpcGx5UG9zaXRpb24iLCJjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsIiwibmV3QXJyYXkiLCJpc09iamVjdCIsImN1cnJlbnRPYmplY3QiLCJjaGVja09iamVjdCIsIm9iamVjdDEiLCJvYmplY3QyIiwiaW5kZXgiLCJzZWNvbmRJbmRleCIsIm9iamVjdElzRXF1YWwiLCJjdXJyZW50T2JqZWN0MiIsImN1cnJlbnRPYmplY3RWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjdXJyZW50T2JqZWN0MlZhbHVlcyIsIm9iamVjdEtleXMiLCJrZXlzIiwib2JqZWN0S2V5czIiLCJrZXkiLCJpdGVtMiIsImNoZWNrT2JqZWN0Qm9vbCIsImdldEFkZGVkUG9zaXRpb24iLCJhZGRlZFBvc2l0aW9uIiwibGVuZ3RoMSIsInBvcHVsYXRlU2hpcHMiLCJjdXJyZW50UG9zaXRpb24iLCJsYXRlc3RBcnJheSIsImFycmF5TGVuZ3RoIiwicG9zIiwiVWkiLCJkb20iLCJyZW5kZXJTcGVlZCIsImJsb2NrU2l6ZSIsInBsYWNlZFNoaXAiLCJtb3VzZUJsb2NrTG9jYXRpb24iLCJnZXRNb3VzZVBvc2l0aW9uIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJmaW5kTW91c2VQb3NpdGlvbiIsImV2ZW50IiwiY3VycmVudE1vdXNlUG9zaXRpb24iLCJmaW5kVG91Y2hQb3NpdGlvbiIsInJlY3QiLCJ0YXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3VjaE9mZnNldFgiLCJ0YXJnZXRUb3VjaGVzIiwicGFnZVgiLCJsZWZ0IiwidG91Y2hPZmZzZXRZIiwicGFnZVkiLCJ0b3AiLCJ0b3VjaFBvc2l0aW9uIiwicHJldmVudERlZmF1bHQiLCJjaGFuZ2VCbG9ja1NpemUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImNyZWF0ZUJsb2NrRWxlbWVudCIsImJsb2NrQ2xhc3MiLCJjcmVhdGVCbG9jayIsImxhdGVzdENsYXNzIiwiYmxvY2tFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlzYWJsZVN0YXJ0ZXJVaSIsImNyZWF0ZURvbUVsZW1lbnQiLCJlbGVtZW50TmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVTaGlwQmxvY2siLCJzaGlwUG9zaXRpb24iLCJsYXRlc3RCbG9ja1NpemUiLCJzaGlwQmxvY2siLCJyZWFsUG9zaXRpb25YIiwicmVhbFBvc2l0aW9uWSIsInN0eWxlIiwicmVuZGVyQWxyZWFkeVBsYWNlZFNoaXBzIiwiZ2FtZVZhbHVlcyIsImNoZWNrQm9hcmRTaGlwcyIsImFwcGVuZENoaWxkIiwicmVuZGVyUGxhY2VkU2hpcCIsImVsZW1lbnQiLCJpbm5lckhUTUwiLCJjaGFuZ2VBeGlzIiwibW92ZVNoaXBCeURpcmVjdGlvbiIsIm1vdXNlTG9jYXRpb24iLCJjdXJyZW50QXhpcyIsImxhdGVzdFNoaXAiLCJuZXdYUG9zaXRpb24iLCJuZXdZUG9zaXRpb24iLCJuZXdTaGlwUG9zaXRpb24iLCJwbGFjZVBsYXllclNoaXAiLCJsYXRlc3RBeGlzIiwibGF0ZXN0R2FtZSIsInBsYWNlUGxheWVyU2hpcEV2ZW50IiwicmVuZGVyR2FtZSIsInNldFRpbWVvdXQiLCJyZW1vdmVTaGlwU2VsY3Rpb24iLCJlbGVtZW50cyIsImRpc3BsYXkiLCJzdGFydEdhbWUiLCJnYW1lUmVuZGVyIiwicmVtb3ZlU2hpcHNTZWxjdGlvbiIsInJlbmRlclNlbGVjdGlvbkdyaWQiLCJnYW1lVmFsdWUiLCJ3aW5kb3ciLCJhY3RpdmF0ZVVpIiwicGFnZUNvbnRlbnQiLCJib2R5IiwiYWRkVWlFdmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlVWlFdmVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==