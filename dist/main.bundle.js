"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["main"],{

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

  var playerPlaceShip = function playerPlaceShip(location, axis) {
    var currentArray = practical.copyArray(currentShips);
    var shiplength = 5 - currentArray.length;
    if (shiplength === 2) shiplength = 3;
    if (shiplength === 1) shiplength = 2;
    var currentShip = ship.createShip(location, shiplength, axis);
    var isCollided = compareShipsArray(currentArray, currentShip);

    if (currentArray.length === 5 || !currentShip || isCollided) {
      return currentArray;
    }

    currentArray.push(currentShip);
    currentShips = currentArray;
    return currentArray;
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3ByYWN0aWNhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IFByYWN0aWNhbCBmcm9tICcuL3ByYWN0aWNhbC5qcyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuICBjb25zdCBzaGlwID0gU2hpcCgpO1xuICBjb25zdCBwcmFjdGljYWwgPSBQcmFjdGljYWwoKTtcblxuICBsZXQgY3VycmVudFNoaXBzID0gW107XG4gIGxldCBoaXRzID0gW107XG4gIGxldCBtaXNzZXMgPSBbXTtcblxuICBjb25zdCByYW5kb21pemUgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgY29uc3QgcmFuZG9tQXhpcyA9ICgpID0+IHtcbiAgICBjb25zdCBheGllcyA9IFsneCcsICd5J107XG4gICAgcmV0dXJuIGF4aWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF4aWVzLmxlbmd0aCldO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlQWxsU2hpcHMgPSAoc2hpcHNBcnJheSkgPT4ge1xuICAgIGN1cnJlbnRTaGlwcyA9IHNoaXBzQXJyYXk7XG4gICAgcmV0dXJuIGN1cnJlbnRTaGlwcztcbiAgfTtcblxuICBjb25zdCBjb21wYXJlU2hpcHNBcnJheSA9IChsYXRlc3RTaGlwc0FycmF5LCBzaGlwcykgPT4ge1xuICAgIGxldCBzaGlwc0RvQ29sbGlkZSA9IGZhbHNlO1xuICAgIGlmICghc2hpcHMpIHJldHVybiBzaGlwc0RvQ29sbGlkZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGxhdGVzdFNoaXBzQXJyYXksICd0aGUgY3VycmVlbnQgc2hpcHMgYXJyYXknKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwcywgJ3RoZSBjdXJyZW50IHNoaXBzJyk7XG5cbiAgICBsYXRlc3RTaGlwc0FycmF5LmZvckVhY2goKGxhdGVzdFNoaXBzKSA9PiB7XG4gICAgICBsYXRlc3RTaGlwcy5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKGxhdGVzdEJvYXQpID0+IHtcbiAgICAgICAgICBpZiAocG9zaXRpb24uY29tcGFyZVBvc2l0aW9uKGJvYXQsIGxhdGVzdEJvYXQpKSB7XG4gICAgICAgICAgICBzaGlwc0RvQ29sbGlkZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBzRG9Db2xsaWRlO1xuICB9O1xuXG4gIGNvbnN0IHBsYXllclBsYWNlU2hpcCA9IChsb2NhdGlvbiwgYXhpcykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRBcnJheSA9IHByYWN0aWNhbC5jb3B5QXJyYXkoY3VycmVudFNoaXBzKTtcblxuICAgIGxldCBzaGlwbGVuZ3RoID0gNSAtIGN1cnJlbnRBcnJheS5sZW5ndGg7XG5cbiAgICBpZiAoc2hpcGxlbmd0aCA9PT0gMikgc2hpcGxlbmd0aCA9IDM7XG4gICAgaWYgKHNoaXBsZW5ndGggPT09IDEpIHNoaXBsZW5ndGggPSAyO1xuXG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAobG9jYXRpb24sIHNoaXBsZW5ndGgsIGF4aXMpO1xuXG4gICAgY29uc3QgaXNDb2xsaWRlZCA9IGNvbXBhcmVTaGlwc0FycmF5KGN1cnJlbnRBcnJheSwgY3VycmVudFNoaXApO1xuXG4gICAgaWYgKGN1cnJlbnRBcnJheS5sZW5ndGggPT09IDUgfHwgIWN1cnJlbnRTaGlwIHx8IGlzQ29sbGlkZWQpIHtcbiAgICAgIHJldHVybiBjdXJyZW50QXJyYXk7XG4gICAgfVxuXG4gICAgY3VycmVudEFycmF5LnB1c2goY3VycmVudFNoaXApO1xuICAgIGN1cnJlbnRTaGlwcyA9IGN1cnJlbnRBcnJheTtcbiAgICByZXR1cm4gY3VycmVudEFycmF5O1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUmFuZG9tU2hpcHMgPSAobGVuZ3RoLCBzaGlwc0FycmF5LCByYW5kb21pemVyLCByYW5kb21BeGllcykgPT4ge1xuICAgIGNvbnN0IGxhdGVzdFNoaXBzQXJyYXkgPSBzaGlwc0FycmF5O1xuICAgIGxldCBsYXRlc3RMZW5ndGggPSBsZW5ndGg7XG4gICAgY29uc3QgcmFuZG9tUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihyYW5kb21pemVyKCksIHJhbmRvbWl6ZXIoKSk7XG4gICAgY29uc3QgcmFuZG9tU2hpcCA9IHNoaXAuY3JlYXRlU2hpcChcbiAgICAgIHJhbmRvbVBvc2l0aW9uLFxuICAgICAgbGF0ZXN0TGVuZ3RoLFxuICAgICAgcmFuZG9tQXhpZXMoKVxuICAgICk7XG5cbiAgICBpZiAocmFuZG9tU2hpcCkge1xuICAgICAgY29uc3Qgc2hpcENvbGxpZGVzID0gY29tcGFyZVNoaXBzQXJyYXkobGF0ZXN0U2hpcHNBcnJheSwgcmFuZG9tU2hpcCk7XG4gICAgICBpZiAoIXNoaXBDb2xsaWRlcykge1xuICAgICAgICBpZiAobGF0ZXN0TGVuZ3RoID4gMikgbGF0ZXN0TGVuZ3RoIC09IDE7XG4gICAgICAgIGlmIChzaGlwc0FycmF5Lmxlbmd0aCA8IDUpIGxhdGVzdFNoaXBzQXJyYXkucHVzaChyYW5kb21TaGlwKTtcblxuICAgICAgICBpZiAoc2hpcHNBcnJheS5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICByZXR1cm4gbGF0ZXN0U2hpcHNBcnJheTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwbGFjZVJhbmRvbVNoaXBzKFxuICAgICAgbGF0ZXN0TGVuZ3RoLFxuICAgICAgbGF0ZXN0U2hpcHNBcnJheSxcbiAgICAgIHJhbmRvbWl6ZXIsXG4gICAgICByYW5kb21BeGllc1xuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwc1JhbmRvbWx5ID0gKHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKSA9PiB7XG4gICAgY29uc3Qgc2hpcHNBcnJheSA9IHBsYWNlUmFuZG9tU2hpcHMoNSwgW10sIHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKTtcbiAgICBjdXJyZW50U2hpcHMgPSBzaGlwc0FycmF5O1xuXG4gICAgcmV0dXJuIHNoaXBzQXJyYXk7XG4gIH07XG4gIGNvbnN0IGZpbHRlckF0dGFjayA9IChhcnJheSwgY3VycmVudEF0dGFjaykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRBdHRhY2tBcnJheSA9IGFycmF5LmZpbHRlcihcbiAgICAgIChpdGVtKSA9PlxuICAgICAgICBpdGVtLnhDb29yZCA9PT0gY3VycmVudEF0dGFjay54Q29vcmQgJiZcbiAgICAgICAgaXRlbS55Q29vcmQgPT09IGN1cnJlbnRBdHRhY2sueUNvb3JkXG4gICAgKTtcblxuICAgIHJldHVybiBjdXJyZW50QXR0YWNrQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgaGFzSGl0U2hpcCA9IChoaXRQb3NpdGlvbiwgbGF0ZXN0SGl0cywgbGF0ZXN0TWlzc2VzKSA9PiB7XG4gICAgY29uc3QgaGFzQmVlbkhpdCA9IGZpbHRlckF0dGFjayhsYXRlc3RIaXRzLCBoaXRQb3NpdGlvbik7XG4gICAgY29uc3QgaGFzQmVlbk1pc3MgPSBmaWx0ZXJBdHRhY2sobGF0ZXN0TWlzc2VzLCBoaXRQb3NpdGlvbik7XG5cbiAgICBpZiAoaGFzQmVlbkhpdC5sZW5ndGggPiAwIHx8IGhhc0JlZW5NaXNzLmxlbmd0aCA+IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tTaGlwID0gKGxhdGVzdFBvc2l0aW9uLCBzaGlwcywgY3VycmVudEhpdHMsIGN1cnJlbnRNaXNzZXMpID0+IHtcbiAgICBsZXQgaXNIaXQgPSBmYWxzZTtcbiAgICBjb25zdCBsYXRlc3RTaGlwc0FycmF5ID0gW107XG4gICAgY29uc3QgbGF0ZXN0SGl0cyA9IGN1cnJlbnRIaXRzO1xuICAgIGNvbnN0IGxhdGVzdE1pc3NlcyA9IGN1cnJlbnRNaXNzZXM7XG5cbiAgICBpZiAoIWxhdGVzdFBvc2l0aW9uKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGhhc0hpdFNoaXAobGF0ZXN0UG9zaXRpb24sIGN1cnJlbnRIaXRzLCBjdXJyZW50TWlzc2VzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcEFycmF5KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb25zQXJyYXkgPSBwcmFjdGljYWwuY29weUFycmF5KHNoaXBBcnJheSk7XG4gICAgICBjb25zdCBoaXQgPSBzaGlwLmhpdChwb3NpdGlvbnNBcnJheSwgbGF0ZXN0UG9zaXRpb24pO1xuXG4gICAgICBpZiAoaGl0LmhpdEFycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpc0hpdCA9IHRydWU7XG4gICAgICAgIHBvc2l0aW9uc0FycmF5ID0gaGl0LnNoaXBBcnJheXM7XG4gICAgICAgIGxhdGVzdEhpdHMucHVzaChoaXQuaGl0QXJyYXlbMF0pO1xuICAgICAgfVxuICAgICAgbGF0ZXN0U2hpcHNBcnJheS5wdXNoKHBvc2l0aW9uc0FycmF5KTtcbiAgICB9KTtcbiAgICBpZiAoIWlzSGl0KSBsYXRlc3RNaXNzZXMucHVzaChsYXRlc3RQb3NpdGlvbik7XG5cbiAgICBjb25zdCBmaW5hbE9iamVjdCA9IHtcbiAgICAgIGlzSGl0LFxuICAgICAgbGF0ZXN0U2hpcHNBcnJheSxcbiAgICAgIGxhdGVzdEhpdHMsXG4gICAgICBsYXRlc3RNaXNzZXMsXG4gICAgfTtcblxuICAgIHJldHVybiBmaW5hbE9iamVjdDtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlQXR0YWNrID0gKGxhdGVzdFBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXR0YWNrU2hpcChsYXRlc3RQb3NpdGlvbiwgY3VycmVudFNoaXBzLCBoaXRzLCBtaXNzZXMpO1xuICAgIGlmICghcmVzdWx0KSByZXR1cm4gZmFsc2U7XG5cbiAgICBjdXJyZW50U2hpcHMgPSByZXN1bHQubGF0ZXN0U2hpcHNBcnJheTtcbiAgICBoaXRzID0gcmVzdWx0LmxhdGVzdEhpdHM7XG4gICAgbWlzc2VzID0gcmVzdWx0LmxhdGVzdE1pc3NlcztcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUmFuZG9tQ29vcmRzID0gKHJhbmRvbWl6ZXIpID0+IHtcbiAgICBsZXQgcmFuZG9tUG9zaXRpb247XG5cbiAgICBpZiAocmFuZG9taXplci5pc01vY2tSYW5kb20pIHtcbiAgICAgIHJhbmRvbVBvc2l0aW9uID0gcmFuZG9taXplci5jYWxsUmFuZG9taXplcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByYW5kb21YID0gcmFuZG9taXplcigpO1xuICAgICAgY29uc3QgcmFuZG9tWSA9IHJhbmRvbWl6ZXIoKTtcbiAgICAgIHJhbmRvbVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24ocmFuZG9tWCwgcmFuZG9tWSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmRvbVBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGdldFR5cGVPZlBsYWNlZFNoaXAgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRTaGlwcy5sZW5ndGggPT09IDUpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHNoaXBUeXBlcyA9IFtcbiAgICAgIHsgc2hpcFR5cGU6ICdjYXJyaWVyJywgc2hpcExlbmd0aDogNSB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2JhdHRsZXNoaXAnLCBzaGlwTGVuZ3RoOiA0IH0sXG4gICAgICB7IHNoaXBUeXBlOiAnZGVzdG95ZXInLCBzaGlwTGVuZ3RoOiAzIH0sXG4gICAgICB7IHNoaXBUeXBlOiAnc3VibWFyaW5lJywgc2hpcExlbmd0aDogMyB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2d1bmJvYXQnLCBzaGlwTGVuZ3RoOiAyIH0sXG4gICAgXTtcblxuICAgIHJldHVybiBzaGlwVHlwZXNbY3VycmVudFNoaXBzLmxlbmd0aF07XG4gIH07XG5cbiAgY29uc3QgcmVjaWV2ZVJhbmRvbUF0dGFjayA9IChyYW5kb21pemVyKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tUG9zaXRpb24gPSBjcmVhdGVSYW5kb21Db29yZHMocmFuZG9taXplcik7XG4gICAgY29uc3QgaGFzSGl0ID0gaGFzSGl0U2hpcChyYW5kb21Qb3NpdGlvbiwgaGl0cywgbWlzc2VzKTtcblxuICAgIGlmIChoYXNIaXQpIHJldHVybiByZWNpZXZlUmFuZG9tQXR0YWNrKHJhbmRvbWl6ZXIpO1xuXG4gICAgcmV0dXJuIHJlY2lldmVBdHRhY2socmFuZG9tUG9zaXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IGlzQWxsU3VuayA9ICgpID0+IHtcbiAgICBsZXQgaGFzU3Vua2VkID0gdHJ1ZTtcbiAgICBjdXJyZW50U2hpcHMuZm9yRWFjaCgoc2hpcHMpID0+IHtcbiAgICAgIGlmICghc2hpcC5pc1N1bmsoc2hpcHMpKSB7XG4gICAgICAgIGhhc1N1bmtlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhhc1N1bmtlZDtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZXMgPSAoKSA9PiAoe1xuICAgIGN1cnJlbnRTaGlwcyxcbiAgICBoaXRzLFxuICAgIG1pc3NlcyxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhdHRhY2tTaGlwLFxuICAgIHJlY2lldmVBdHRhY2ssXG4gICAgaXNBbGxTdW5rLFxuICAgIHBsYWNlU2hpcHNSYW5kb21seSxcbiAgICBwbGF5ZXJQbGFjZVNoaXAsXG4gICAgcGxhY2VBbGxTaGlwcyxcbiAgICByYW5kb21pemUsXG4gICAgcmVjaWV2ZVJhbmRvbUF0dGFjayxcbiAgICByYW5kb21BeGlzLFxuICAgIGdldFZhbHVlcyxcbiAgICBnZXRUeXBlT2ZQbGFjZWRTaGlwLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuXG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5cbmNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgcGxheWVyQ2hlY2tCb2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcblxuICBjb25zdCBzaGlwID0gU2hpcCgpO1xuXG4gIGNvbnN0IHJhbmRvbWl6ZXIgPSBjb21wdXRlckJvYXJkLnJhbmRvbWl6ZTtcbiAgY29uc3QgcmFuZG9tQXhpZXMgPSBjb21wdXRlckJvYXJkLnJhbmRvbUF4aXM7XG5cbiAgY29uc3QgY2hlY2tTZXR1cCA9IChwbGF5ZXJDaGVja1NoaXBzKSA9PiB7XG4gICAgaWYgKHBsYXllckNoZWNrU2hpcHMubGVuZ3RoID09PSA1KSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBHYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllckNoZWNrVmFsdWVzID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIGlmICghY2hlY2tTZXR1cChwbGF5ZXJDaGVja1ZhbHVlcy5jdXJyZW50U2hpcHMpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBwbGF5ZXJCb2FyZC5wbGFjZUFsbFNoaXBzKHBsYXllckNoZWNrVmFsdWVzLmN1cnJlbnRTaGlwcyk7XG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXBzUmFuZG9tbHkocmFuZG9taXplciwgcmFuZG9tQXhpZXMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja0JvYXRzID0gKGNvb3JkcykgPT4ge1xuICAgIGNvbnN0IHBsYXllckNoZWNrVmFsdWVzID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIGlmICghY2hlY2tTZXR1cChwbGF5ZXJDaGVja1ZhbHVlcy5jdXJyZW50U2hpcHMpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBjdXJyZW50QXR0YWNrID0gY29tcHV0ZXJCb2FyZC5yZWNpZXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgaWYgKCFjdXJyZW50QXR0YWNrKSByZXR1cm4gZmFsc2U7XG4gICAgcGxheWVyQm9hcmQucmVjaWV2ZVJhbmRvbUF0dGFjayhyYW5kb21pemVyKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwU2hpcCA9IChsb2NhdGlvbiwgYXhpcykgPT5cbiAgICBwbGF5ZXJDaGVja0JvYXJkLnBsYXllclBsYWNlU2hpcChsb2NhdGlvbiwgYXhpcyk7XG5cbiAgY29uc3QgZ2FtZUlzT3ZlciA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJDaGVja1NoaXBzID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKS5jdXJyZW50U2hpcHM7XG4gICAgaWYgKCFjaGVja1NldHVwKHBsYXllckNoZWNrU2hpcHMpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoY29tcHV0ZXJCb2FyZC5pc0FsbFN1bmsoKSkge1xuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ1lvdSBXb24nLCBnYW1lRmluaXNoZWQ6IHRydWUgfTtcbiAgICB9XG5cbiAgICBpZiAocGxheWVyQm9hcmQuaXNBbGxTdW5rKCkpIHtcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdZb3UgTG9zdCcsIGdhbWVGaW5pc2hlZDogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4geyBnYW1lRmluaXNoZWQ6IGZhbHNlIH07XG4gIH07XG5cbiAgY29uc3QgYXJyYW5nZUJsb2NrcyA9IChtb3VzZVBvc2l0aW9uLCBjdXJyZW50Um90YXRpb24pID0+IHtcbiAgICBjb25zdCBzaGlwVHlwZU9iamVjdCA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VHlwZU9mUGxhY2VkU2hpcCgpO1xuXG4gICAgLy8gY29uc29sZS5sb2coc2hpcFR5cGVPYmplY3QsICd0aGUgc2hpcCB0eXBlIG9iamVjdCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKG1vdXNlUG9zaXRpb24sICd0aGUgbW91c2UgcG9zaXRpb24nKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50Um90YXRpb24sICd0aGUgY3VycmVudCByb3RhdGlvbicpO1xuXG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAoXG4gICAgICBtb3VzZVBvc2l0aW9uLFxuICAgICAgc2hpcFR5cGVPYmplY3Quc2hpcExlbmd0aCxcbiAgICAgIGN1cnJlbnRSb3RhdGlvblxuICAgICk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFNoaXAsICd0aGUgbW9zdCB1cCB0byBkYXRlIHNoaXBzJyk7XG5cbiAgICByZXR1cm4gY3VycmVudFNoaXA7XG4gIH07XG5cbiAgY29uc3QgZ2V0R2FtZVZhbHVlcyA9ICgpID0+ICh7XG4gICAgcGxheWVyQm9hcmQsXG4gICAgY29tcHV0ZXJCb2FyZCxcbiAgICBwbGF5ZXJDaGVja0JvYXJkLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGNoZWNrU2V0dXAsXG4gICAgYXR0YWNrQm9hdHMsXG4gICAgc2V0dXBHYW1lLFxuICAgIGdhbWVJc092ZXIsXG4gICAgc2V0dXBTaGlwLFxuICAgIGdldEdhbWVWYWx1ZXMsXG4gICAgYXJyYW5nZUJsb2NrcyxcbiAgfTtcbn07XG5cbmNvbnN0IGFjdGl2ZUdhbWUgPSBHYW1lKCk7XG5cbmV4cG9ydCB7IEdhbWUsIGFjdGl2ZUdhbWUgfTtcbiIsImNvbnN0IFBvc2l0aW9uID0gKCkgPT4ge1xuICBjb25zdCBjcmVhdGVQb3NpdGlvbiA9ICh4Q29vcmQsIHlDb29yZCkgPT4gKHsgeENvb3JkLCB5Q29vcmQgfSk7XG5cbiAgY29uc3QgY2hlY2tPdXRPZkJvdW5jZSA9IChuZXdQb3NpdGlvbikgPT4ge1xuICAgIGlmIChuZXdQb3NpdGlvbi54Q29vcmQgPiA5IHx8IG5ld1Bvc2l0aW9uLnlDb29yZCA+IDkpIHJldHVybiB0cnVlO1xuICAgIGlmIChuZXdQb3NpdGlvbi54Q29vcmQgPCAwIHx8IG5ld1Bvc2l0aW9uLnlDb29yZCA8IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBhZGRQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmIChwb3NpdGlvbjEgPT09IGZhbHNlIHx8IHBvc2l0aW9uMiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gY3JlYXRlUG9zaXRpb24ocG9zaXRpb24xLnhDb29yZCwgcG9zaXRpb24xLnlDb29yZCk7XG4gICAgbmV3UG9zaXRpb24ueENvb3JkICs9IHBvc2l0aW9uMi54Q29vcmQ7XG4gICAgbmV3UG9zaXRpb24ueUNvb3JkICs9IHBvc2l0aW9uMi55Q29vcmQ7XG5cbiAgICBpZiAoY2hlY2tPdXRPZkJvdW5jZShuZXdQb3NpdGlvbikpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBtdWx0aXBseVBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMSA9PT0gZmFsc2UgfHwgcG9zaXRpb24yID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBjcmVhdGVQb3NpdGlvbihwb3NpdGlvbjEueENvb3JkLCBwb3NpdGlvbjEueUNvb3JkKTtcbiAgICBuZXdQb3NpdGlvbi54Q29vcmQgKj0gcG9zaXRpb24yLnhDb29yZDtcbiAgICBuZXdQb3NpdGlvbi55Q29vcmQgKj0gcG9zaXRpb24yLnlDb29yZDtcblxuICAgIGlmIChjaGVja091dE9mQm91bmNlKG5ld1Bvc2l0aW9uKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwgPSAocG9zaXRpb24xLCBwb3NpdGlvbjIsIGF4aXMpID0+IHtcbiAgICBpZiAocG9zaXRpb24xW2F4aXNdID09PSBwb3NpdGlvbjJbYXhpc10gKyAxKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAocG9zaXRpb24xW2F4aXNdID09PSBwb3NpdGlvbjJbYXhpc10pIHJldHVybiB0cnVlO1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSAtIDEpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjb21wYXJlUG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAoIWNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwocG9zaXRpb24xLCBwb3NpdGlvbjIsICd4Q29vcmQnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwocG9zaXRpb24xLCBwb3NpdGlvbjIsICd5Q29vcmQnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVBvc2l0aW9uLFxuICAgIGFkZFBvc2l0aW9uLFxuICAgIG11bHRpcGx5UG9zaXRpb24sXG4gICAgY29tcGFyZVBvc2l0aW9uLFxuICAgIGNoZWNrT3V0T2ZCb3VuY2UsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3NpdGlvbjtcbiIsImNvbnN0IFByYWN0aWNhbCA9ICgpID0+IHtcbiAgY29uc3QgY29weUFycmF5ID0gKGFycmF5KSA9PiB7XG4gICAgY29uc3QgbmV3QXJyYXkgPSBbXTtcblxuICAgIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIG5ld0FycmF5LnB1c2goaXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3QXJyYXk7XG4gIH07XG5cbiAgY29uc3QgaXNPYmplY3QgPSAoY3VycmVudE9iamVjdCkgPT4ge1xuICAgIGlmICh0eXBlb2YgY3VycmVudE9iamVjdCA9PT0gJ29iamVjdCcgJiYgY3VycmVudE9iamVjdCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjaGVja09iamVjdCA9IChvYmplY3QxLCBvYmplY3QyKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgc2Vjb25kSW5kZXggPSAwO1xuXG4gICAgbGV0IG9iamVjdElzRXF1YWwgPSB0cnVlO1xuXG4gICAgY29uc3QgY3VycmVudE9iamVjdCA9IG9iamVjdDE7XG4gICAgY29uc3QgY3VycmVudE9iamVjdDIgPSBvYmplY3QyO1xuXG4gICAgY29uc3QgY3VycmVudE9iamVjdFZhbHVlcyA9IE9iamVjdC52YWx1ZXMoY3VycmVudE9iamVjdCk7XG4gICAgY29uc3QgY3VycmVudE9iamVjdDJWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGN1cnJlbnRPYmplY3QyKTtcblxuICAgIGNvbnN0IG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyhjdXJyZW50T2JqZWN0KTtcbiAgICBjb25zdCBvYmplY3RLZXlzMiA9IE9iamVjdC5rZXlzKGN1cnJlbnRPYmplY3QyKTtcblxuICAgIG9iamVjdEtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoa2V5ICE9PSBvYmplY3RLZXlzMltpbmRleF0pIG9iamVjdElzRXF1YWwgPSBmYWxzZTtcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgfSk7XG5cbiAgICBpZiAoIW9iamVjdElzRXF1YWwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAob2JqZWN0S2V5cy5sZW5ndGggIT09IG9iamVjdEtleXMyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudE9iamVjdCwgJ3RoZSBjdXJyZW50IG9iamVjdCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRPYmplY3QyLCAndGhlIGN1cnJlbnQgb2JqZWN0MicpO1xuXG4gICAgY3VycmVudE9iamVjdFZhbHVlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBpdGVtMiA9IGN1cnJlbnRPYmplY3QyVmFsdWVzW3NlY29uZEluZGV4XTtcblxuICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pICYmIGlzT2JqZWN0KGl0ZW0yKSkge1xuICAgICAgICBjb25zdCBjaGVja09iamVjdEJvb2wgPSBjaGVja09iamVjdChpdGVtLCBpdGVtMik7XG5cbiAgICAgICAgaWYgKCFjaGVja09iamVjdEJvb2wpIG9iamVjdElzRXF1YWwgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbSAhPT0gaXRlbTIpIHtcbiAgICAgICAgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBzZWNvbmRJbmRleCArPSAxO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iamVjdElzRXF1YWw7XG4gIH07XG5cbiAgcmV0dXJuIHsgY29weUFycmF5LCBjaGVja09iamVjdCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJhY3RpY2FsO1xuIiwiaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuXG5jb25zdCBTaGlwID0gKCkgPT4ge1xuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG5cbiAgY29uc3QgZ2V0QWRkZWRQb3NpdGlvbiA9IChheGlzKSA9PiB7XG4gICAgbGV0IGFkZGVkUG9zaXRpb247XG5cbiAgICBpZiAoYXhpcyA9PT0gJ3gnKSBhZGRlZFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oMSwgMCk7XG4gICAgZWxzZSBhZGRlZFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oMCwgMSk7XG5cbiAgICByZXR1cm4gYWRkZWRQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVTaGlwID0gKHBvc2l0aW9uMSwgbGVuZ3RoMSwgYXhpcykgPT4ge1xuICAgIGlmIChsZW5ndGgxID09PSAwIHx8IGxlbmd0aDEgPiA1KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHBvc2l0aW9uLmNoZWNrT3V0T2ZCb3VuY2UocG9zaXRpb24xKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcG9wdWxhdGVTaGlwcyA9IChjdXJyZW50UG9zaXRpb24sIGxhdGVzdExlbmd0aCwgbGF0ZXN0QXJyYXkpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRBcnJheSA9IGxhdGVzdEFycmF5O1xuICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uO1xuXG4gICAgICBpZiAoY3VycmVudFBvc2l0aW9uID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKGxhdGVzdExlbmd0aCA9PT0gMCkgcmV0dXJuIGN1cnJlbnRBcnJheTtcbiAgICAgIGlmIChsYXRlc3RMZW5ndGggPT09IGxlbmd0aDEpIHtcbiAgICAgICAgY3VycmVudEFycmF5LnB1c2goY3VycmVudFBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIHBvcHVsYXRlU2hpcHMoY3VycmVudFBvc2l0aW9uLCBsYXRlc3RMZW5ndGggLSAxLCBjdXJyZW50QXJyYXkpO1xuICAgICAgfVxuICAgICAgY29uc3QgYWRkZWRQb3NpdGlvbiA9IGdldEFkZGVkUG9zaXRpb24oYXhpcyk7XG4gICAgICBuZXdQb3NpdGlvbiA9IHBvc2l0aW9uLmFkZFBvc2l0aW9uKG5ld1Bvc2l0aW9uLCBhZGRlZFBvc2l0aW9uKTtcblxuICAgICAgaWYgKCFuZXdQb3NpdGlvbikgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICAgICAgY3VycmVudEFycmF5LnB1c2gobmV3UG9zaXRpb24pO1xuXG4gICAgICBjb25zdCBhcnJheUxlbmd0aCA9IGN1cnJlbnRBcnJheS5sZW5ndGggLSAxO1xuXG4gICAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhcbiAgICAgICAgY3VycmVudEFycmF5W2FycmF5TGVuZ3RoXSxcbiAgICAgICAgbGF0ZXN0TGVuZ3RoIC0gMSxcbiAgICAgICAgY3VycmVudEFycmF5XG4gICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhwb3NpdGlvbjEsIGxlbmd0aDEsIFtdLCBmYWxzZSk7XG4gIH07XG5cblxuXG4gIGNvbnN0IGlzU3VuayA9IChzaGlwQXJyYXkpID0+IHtcbiAgICBpZiAoc2hpcEFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGhpdCA9IChwb3NpdGlvbnNBcnJheSwgcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBoaXRBcnJheSA9IHBvc2l0aW9uc0FycmF5LmZpbHRlcigocG9zKSA9PiB7XG4gICAgICBpZiAocG9zLnhDb29yZCA9PT0gcG9zaXRpb24ueENvb3JkICYmIHBvcy55Q29vcmQgPT09IHBvc2l0aW9uLnlDb29yZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBjb25zdCBzaGlwQXJyYXlzID0gcG9zaXRpb25zQXJyYXkuZmlsdGVyKChwb3MpID0+IHtcbiAgICAgIGlmIChwb3MueENvb3JkID09PSBwb3NpdGlvbi54Q29vcmQgJiYgcG9zLnlDb29yZCA9PT0gcG9zaXRpb24ueUNvb3JkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgaGl0QXJyYXksIHNoaXBBcnJheXMgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVNoaXAsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iXSwibmFtZXMiOlsiUG9zaXRpb24iLCJTaGlwIiwiUHJhY3RpY2FsIiwiR2FtZWJvYXJkIiwicG9zaXRpb24iLCJzaGlwIiwicHJhY3RpY2FsIiwiY3VycmVudFNoaXBzIiwiaGl0cyIsIm1pc3NlcyIsInJhbmRvbWl6ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbUF4aXMiLCJheGllcyIsImxlbmd0aCIsInBsYWNlQWxsU2hpcHMiLCJzaGlwc0FycmF5IiwiY29tcGFyZVNoaXBzQXJyYXkiLCJsYXRlc3RTaGlwc0FycmF5Iiwic2hpcHMiLCJzaGlwc0RvQ29sbGlkZSIsImZvckVhY2giLCJsYXRlc3RTaGlwcyIsImJvYXQiLCJsYXRlc3RCb2F0IiwiY29tcGFyZVBvc2l0aW9uIiwicGxheWVyUGxhY2VTaGlwIiwibG9jYXRpb24iLCJheGlzIiwiY3VycmVudEFycmF5IiwiY29weUFycmF5Iiwic2hpcGxlbmd0aCIsImN1cnJlbnRTaGlwIiwiY3JlYXRlU2hpcCIsImlzQ29sbGlkZWQiLCJwdXNoIiwicGxhY2VSYW5kb21TaGlwcyIsInJhbmRvbWl6ZXIiLCJyYW5kb21BeGllcyIsImxhdGVzdExlbmd0aCIsInJhbmRvbVBvc2l0aW9uIiwiY3JlYXRlUG9zaXRpb24iLCJyYW5kb21TaGlwIiwic2hpcENvbGxpZGVzIiwicGxhY2VTaGlwc1JhbmRvbWx5IiwiZmlsdGVyQXR0YWNrIiwiYXJyYXkiLCJjdXJyZW50QXR0YWNrIiwiY3VycmVudEF0dGFja0FycmF5IiwiZmlsdGVyIiwiaXRlbSIsInhDb29yZCIsInlDb29yZCIsImhhc0hpdFNoaXAiLCJoaXRQb3NpdGlvbiIsImxhdGVzdEhpdHMiLCJsYXRlc3RNaXNzZXMiLCJoYXNCZWVuSGl0IiwiaGFzQmVlbk1pc3MiLCJhdHRhY2tTaGlwIiwibGF0ZXN0UG9zaXRpb24iLCJjdXJyZW50SGl0cyIsImN1cnJlbnRNaXNzZXMiLCJpc0hpdCIsInNoaXBBcnJheSIsInBvc2l0aW9uc0FycmF5IiwiaGl0IiwiaGl0QXJyYXkiLCJzaGlwQXJyYXlzIiwiZmluYWxPYmplY3QiLCJyZWNpZXZlQXR0YWNrIiwicmVzdWx0IiwiY3JlYXRlUmFuZG9tQ29vcmRzIiwiaXNNb2NrUmFuZG9tIiwiY2FsbFJhbmRvbWl6ZXIiLCJyYW5kb21YIiwicmFuZG9tWSIsImdldFR5cGVPZlBsYWNlZFNoaXAiLCJzaGlwVHlwZXMiLCJzaGlwVHlwZSIsInNoaXBMZW5ndGgiLCJyZWNpZXZlUmFuZG9tQXR0YWNrIiwiaGFzSGl0IiwiaXNBbGxTdW5rIiwiaGFzU3Vua2VkIiwiaXNTdW5rIiwiZ2V0VmFsdWVzIiwiR2FtZSIsInBsYXllckJvYXJkIiwiY29tcHV0ZXJCb2FyZCIsInBsYXllckNoZWNrQm9hcmQiLCJjaGVja1NldHVwIiwicGxheWVyQ2hlY2tTaGlwcyIsInNldHVwR2FtZSIsInBsYXllckNoZWNrVmFsdWVzIiwiYXR0YWNrQm9hdHMiLCJjb29yZHMiLCJzZXR1cFNoaXAiLCJnYW1lSXNPdmVyIiwibWVzc2FnZSIsImdhbWVGaW5pc2hlZCIsImFycmFuZ2VCbG9ja3MiLCJtb3VzZVBvc2l0aW9uIiwiY3VycmVudFJvdGF0aW9uIiwic2hpcFR5cGVPYmplY3QiLCJnZXRHYW1lVmFsdWVzIiwiYWN0aXZlR2FtZSIsImNoZWNrT3V0T2ZCb3VuY2UiLCJuZXdQb3NpdGlvbiIsImFkZFBvc2l0aW9uIiwicG9zaXRpb24xIiwicG9zaXRpb24yIiwibXVsdGlwbHlQb3NpdGlvbiIsImNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwiLCJuZXdBcnJheSIsImlzT2JqZWN0IiwiY3VycmVudE9iamVjdCIsImNoZWNrT2JqZWN0Iiwib2JqZWN0MSIsIm9iamVjdDIiLCJpbmRleCIsInNlY29uZEluZGV4Iiwib2JqZWN0SXNFcXVhbCIsImN1cnJlbnRPYmplY3QyIiwiY3VycmVudE9iamVjdFZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsImN1cnJlbnRPYmplY3QyVmFsdWVzIiwib2JqZWN0S2V5cyIsImtleXMiLCJvYmplY3RLZXlzMiIsImtleSIsIml0ZW0yIiwiY2hlY2tPYmplY3RCb29sIiwiZ2V0QWRkZWRQb3NpdGlvbiIsImFkZGVkUG9zaXRpb24iLCJsZW5ndGgxIiwicG9wdWxhdGVTaGlwcyIsImN1cnJlbnRQb3NpdGlvbiIsImxhdGVzdEFycmF5IiwiYXJyYXlMZW5ndGgiLCJwb3MiXSwic291cmNlUm9vdCI6IiJ9