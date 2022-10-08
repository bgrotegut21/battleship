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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xFLE1BQUosS0FBZXRFLFFBQVEsQ0FBQ3NFLE1BQTlELEVBQXNFO1FBQ3BFLE9BQU8sSUFBUDtNQUNEOztNQUNELE9BQU8sS0FBUDtJQUNELENBTGdCLENBQWpCO0lBTUEsSUFBTWhCLFVBQVUsR0FBR0gsY0FBYyxDQUFDZ0IsTUFBZixDQUFzQixVQUFDcUUsR0FBRCxFQUFTO01BQ2hELElBQUlBLEdBQUcsQ0FBQ25FLE1BQUosS0FBZXJFLFFBQVEsQ0FBQ3FFLE1BQXhCLElBQWtDbUUsR0FBRyxDQUFDbEUsTUFBSixLQUFldEUsUUFBUSxDQUFDc0UsTUFBOUQsRUFBc0U7UUFDcEUsT0FBTyxLQUFQO01BQ0Q7O01BQ0QsT0FBTyxJQUFQO0lBQ0QsQ0FMa0IsQ0FBbkI7SUFPQSxPQUFPO01BQUVqQixRQUFRLEVBQVJBLFFBQUY7TUFBWUMsVUFBVSxFQUFWQTtJQUFaLENBQVA7RUFDRCxDQWZEOztFQWlCQSxPQUFPO0lBQ0x2QixVQUFVLEVBQVZBLFVBREs7SUFFTHFCLEdBQUcsRUFBSEEsR0FGSztJQUdMNEIsTUFBTSxFQUFOQTtFQUhLLENBQVA7QUFLRCxDQXpFRDs7QUEyRUEsaUVBQWVuRixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3ByYWN0aWNhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IFByYWN0aWNhbCBmcm9tICcuL3ByYWN0aWNhbC5qcyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuICBjb25zdCBzaGlwID0gU2hpcCgpO1xuICBjb25zdCBwcmFjdGljYWwgPSBQcmFjdGljYWwoKTtcblxuICBsZXQgY3VycmVudFNoaXBzID0gW107XG4gIGxldCBoaXRzID0gW107XG4gIGxldCBtaXNzZXMgPSBbXTtcblxuICBjb25zdCByYW5kb21pemUgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgY29uc3QgcmFuZG9tQXhpcyA9ICgpID0+IHtcbiAgICBjb25zdCBheGllcyA9IFsneCcsICd5J107XG4gICAgcmV0dXJuIGF4aWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF4aWVzLmxlbmd0aCldO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlQWxsU2hpcHMgPSAoc2hpcHNBcnJheSkgPT4ge1xuICAgIGN1cnJlbnRTaGlwcyA9IHNoaXBzQXJyYXk7XG4gICAgcmV0dXJuIGN1cnJlbnRTaGlwcztcbiAgfTtcblxuICBjb25zdCBjb21wYXJlU2hpcHNBcnJheSA9IChsYXRlc3RTaGlwc0FycmF5LCBzaGlwcykgPT4ge1xuICAgIGxldCBzaGlwc0RvQ29sbGlkZSA9IGZhbHNlO1xuICAgIGlmICghc2hpcHMpIHJldHVybiBzaGlwc0RvQ29sbGlkZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGxhdGVzdFNoaXBzQXJyYXksICd0aGUgY3VycmVlbnQgc2hpcHMgYXJyYXknKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwcywgJ3RoZSBjdXJyZW50IHNoaXBzJyk7XG5cbiAgICBsYXRlc3RTaGlwc0FycmF5LmZvckVhY2goKGxhdGVzdFNoaXBzKSA9PiB7XG4gICAgICBsYXRlc3RTaGlwcy5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKGxhdGVzdEJvYXQpID0+IHtcbiAgICAgICAgICBpZiAocG9zaXRpb24uY29tcGFyZVBvc2l0aW9uKGJvYXQsIGxhdGVzdEJvYXQpKSB7XG4gICAgICAgICAgICBzaGlwc0RvQ29sbGlkZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBzRG9Db2xsaWRlO1xuICB9O1xuXG4gIGNvbnN0IHBsYXllclBsYWNlU2hpcCA9IChsb2NhdGlvbiwgYXhpcykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRBcnJheSA9IHByYWN0aWNhbC5jb3B5QXJyYXkoY3VycmVudFNoaXBzKTtcblxuICAgIGxldCBzaGlwbGVuZ3RoID0gNSAtIGN1cnJlbnRBcnJheS5sZW5ndGg7XG5cbiAgICBpZiAoc2hpcGxlbmd0aCA9PT0gMikgc2hpcGxlbmd0aCA9IDM7XG4gICAgaWYgKHNoaXBsZW5ndGggPT09IDEpIHNoaXBsZW5ndGggPSAyO1xuXG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAobG9jYXRpb24sIHNoaXBsZW5ndGgsIGF4aXMpO1xuXG4gICAgY29uc3QgaXNDb2xsaWRlZCA9IGNvbXBhcmVTaGlwc0FycmF5KGN1cnJlbnRBcnJheSwgY3VycmVudFNoaXApO1xuXG4gICAgaWYgKGN1cnJlbnRBcnJheS5sZW5ndGggPT09IDUgfHwgIWN1cnJlbnRTaGlwIHx8IGlzQ29sbGlkZWQpIHtcbiAgICAgIHJldHVybiBjdXJyZW50QXJyYXk7XG4gICAgfVxuXG4gICAgY3VycmVudEFycmF5LnB1c2goY3VycmVudFNoaXApO1xuICAgIGN1cnJlbnRTaGlwcyA9IGN1cnJlbnRBcnJheTtcbiAgICByZXR1cm4gY3VycmVudEFycmF5O1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUmFuZG9tU2hpcHMgPSAobGVuZ3RoLCBzaGlwc0FycmF5LCByYW5kb21pemVyLCByYW5kb21BeGllcykgPT4ge1xuICAgIGNvbnN0IGxhdGVzdFNoaXBzQXJyYXkgPSBzaGlwc0FycmF5O1xuICAgIGxldCBsYXRlc3RMZW5ndGggPSBsZW5ndGg7XG4gICAgY29uc3QgcmFuZG9tUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihyYW5kb21pemVyKCksIHJhbmRvbWl6ZXIoKSk7XG4gICAgY29uc3QgcmFuZG9tU2hpcCA9IHNoaXAuY3JlYXRlU2hpcChcbiAgICAgIHJhbmRvbVBvc2l0aW9uLFxuICAgICAgbGF0ZXN0TGVuZ3RoLFxuICAgICAgcmFuZG9tQXhpZXMoKVxuICAgICk7XG5cbiAgICBpZiAocmFuZG9tU2hpcCkge1xuICAgICAgY29uc3Qgc2hpcENvbGxpZGVzID0gY29tcGFyZVNoaXBzQXJyYXkobGF0ZXN0U2hpcHNBcnJheSwgcmFuZG9tU2hpcCk7XG4gICAgICBpZiAoIXNoaXBDb2xsaWRlcykge1xuICAgICAgICBpZiAobGF0ZXN0TGVuZ3RoID4gMikgbGF0ZXN0TGVuZ3RoIC09IDE7XG4gICAgICAgIGlmIChzaGlwc0FycmF5Lmxlbmd0aCA8IDUpIGxhdGVzdFNoaXBzQXJyYXkucHVzaChyYW5kb21TaGlwKTtcblxuICAgICAgICBpZiAoc2hpcHNBcnJheS5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICByZXR1cm4gbGF0ZXN0U2hpcHNBcnJheTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwbGFjZVJhbmRvbVNoaXBzKFxuICAgICAgbGF0ZXN0TGVuZ3RoLFxuICAgICAgbGF0ZXN0U2hpcHNBcnJheSxcbiAgICAgIHJhbmRvbWl6ZXIsXG4gICAgICByYW5kb21BeGllc1xuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwc1JhbmRvbWx5ID0gKHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKSA9PiB7XG4gICAgY29uc3Qgc2hpcHNBcnJheSA9IHBsYWNlUmFuZG9tU2hpcHMoNSwgW10sIHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKTtcbiAgICBjdXJyZW50U2hpcHMgPSBzaGlwc0FycmF5O1xuXG4gICAgcmV0dXJuIHNoaXBzQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrU2hpcCA9IChsYXRlc3RQb3NpdGlvbiwgc2hpcHMsIGN1cnJlbnRIaXRzLCBjdXJyZW50TWlzc2VzKSA9PiB7XG4gICAgbGV0IGlzSGl0ID0gZmFsc2U7XG4gICAgY29uc3QgbGF0ZXN0U2hpcHNBcnJheSA9IFtdO1xuICAgIGNvbnN0IGxhdGVzdEhpdHMgPSBjdXJyZW50SGl0cztcbiAgICBjb25zdCBsYXRlc3RNaXNzZXMgPSBjdXJyZW50TWlzc2VzO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcEFycmF5KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb25zQXJyYXkgPSBwcmFjdGljYWwuY29weUFycmF5KHNoaXBBcnJheSk7XG4gICAgICBjb25zdCBoaXQgPSBzaGlwLmhpdChwb3NpdGlvbnNBcnJheSwgbGF0ZXN0UG9zaXRpb24pO1xuXG4gICAgICBpZiAoaGl0LmhpdEFycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpc0hpdCA9IHRydWU7XG4gICAgICAgIHBvc2l0aW9uc0FycmF5ID0gaGl0LnNoaXBBcnJheXM7XG4gICAgICAgIGxhdGVzdEhpdHMucHVzaChoaXQuaGl0QXJyYXlbMF0pO1xuICAgICAgfVxuICAgICAgbGF0ZXN0U2hpcHNBcnJheS5wdXNoKHBvc2l0aW9uc0FycmF5KTtcbiAgICB9KTtcbiAgICBpZiAoIWlzSGl0KSBsYXRlc3RNaXNzZXMucHVzaChsYXRlc3RQb3NpdGlvbik7XG5cbiAgICBjb25zdCBmaW5hbE9iamVjdCA9IHtcbiAgICAgIGlzSGl0LFxuICAgICAgbGF0ZXN0U2hpcHNBcnJheSxcbiAgICAgIGxhdGVzdEhpdHMsXG4gICAgICBsYXRlc3RNaXNzZXMsXG4gICAgfTtcblxuICAgIHJldHVybiBmaW5hbE9iamVjdDtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlQXR0YWNrID0gKGxhdGVzdFBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXR0YWNrU2hpcChsYXRlc3RQb3NpdGlvbiwgY3VycmVudFNoaXBzLCBoaXRzLCBtaXNzZXMpO1xuXG4gICAgY3VycmVudFNoaXBzID0gcmVzdWx0LmxhdGVzdFNoaXBzQXJyYXk7XG4gICAgaGl0cyA9IHJlc3VsdC5sYXRlc3RIaXRzO1xuICAgIG1pc3NlcyA9IHJlc3VsdC5sYXRlc3RNaXNzZXM7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVJhbmRvbUNvb3JkcyA9IChyYW5kb21pemVyKSA9PiB7XG4gICAgbGV0IHJhbmRvbVBvc2l0aW9uO1xuXG4gICAgaWYgKHJhbmRvbWl6ZXIuaXNNb2NrUmFuZG9tKSB7XG4gICAgICByYW5kb21Qb3NpdGlvbiA9IHJhbmRvbWl6ZXIuY2FsbFJhbmRvbWl6ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmFuZG9tWCA9IHJhbmRvbWl6ZXIoKTtcbiAgICAgIGNvbnN0IHJhbmRvbVkgPSByYW5kb21pemVyKCk7XG4gICAgICByYW5kb21Qb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHJhbmRvbVgsIHJhbmRvbVkpO1xuICAgIH1cblxuICAgIHJldHVybiByYW5kb21Qb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJBdHRhY2sgPSAoYXJyYXksIGN1cnJlbnRBdHRhY2spID0+IHtcbiAgICBjb25zdCBjdXJyZW50QXR0YWNrQXJyYXkgPSBhcnJheS5maWx0ZXIoXG4gICAgICAoaXRlbSkgPT5cbiAgICAgICAgaXRlbS54Q29vcmQgPT09IGN1cnJlbnRBdHRhY2sueENvb3JkICYmXG4gICAgICAgIGl0ZW0ueUNvb3JkID09PSBjdXJyZW50QXR0YWNrLnlDb29yZFxuICAgICk7XG5cbiAgICByZXR1cm4gY3VycmVudEF0dGFja0FycmF5O1xuICB9O1xuXG4gIGNvbnN0IGdldFR5cGVPZlBsYWNlZFNoaXAgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRTaGlwcy5sZW5ndGggPT09IDUpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHNoaXBUeXBlcyA9IFtcbiAgICAgIHsgc2hpcFR5cGU6ICdjYXJyaWVyJywgc2hpcExlbmd0aDogNSB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2JhdHRsZXNoaXAnLCBzaGlwTGVuZ3RoOiA0IH0sXG4gICAgICB7IHNoaXBUeXBlOiAnZGVzdG95ZXInLCBzaGlwTGVuZ3RoOiAzIH0sXG4gICAgICB7IHNoaXBUeXBlOiAnc3VibWFyaW5lJywgc2hpcExlbmd0aDogMyB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2d1bmJvYXQnLCBzaGlwTGVuZ3RoOiAyIH0sXG4gICAgXTtcblxuICAgIHJldHVybiBzaGlwVHlwZXNbY3VycmVudFNoaXBzLmxlbmd0aF07XG4gIH07XG5cbiAgY29uc3QgcmVjaWV2ZVJhbmRvbUF0dGFjayA9IChyYW5kb21pemVyKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tUG9zaXRpb24gPSBjcmVhdGVSYW5kb21Db29yZHMocmFuZG9taXplcik7XG5cbiAgICBjb25zdCBoYXNCZWVuSGl0ID0gZmlsdGVyQXR0YWNrKGhpdHMsIHJhbmRvbVBvc2l0aW9uKTtcbiAgICBjb25zdCBoYXNCZWVuTWlzcyA9IGZpbHRlckF0dGFjayhtaXNzZXMsIHJhbmRvbVBvc2l0aW9uKTtcblxuICAgIGlmIChoYXNCZWVuSGl0Lmxlbmd0aCA+IDAgfHwgaGFzQmVlbk1pc3MubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHJlY2lldmVSYW5kb21BdHRhY2socmFuZG9taXplcik7XG4gICAgfVxuICAgIHJldHVybiByZWNpZXZlQXR0YWNrKHJhbmRvbVBvc2l0aW9uKTtcbiAgfTtcblxuICBjb25zdCBpc0FsbFN1bmsgPSAoKSA9PiB7XG4gICAgbGV0IGhhc1N1bmtlZCA9IHRydWU7XG4gICAgY3VycmVudFNoaXBzLmZvckVhY2goKHNoaXBzKSA9PiB7XG4gICAgICBpZiAoIXNoaXAuaXNTdW5rKHNoaXBzKSkge1xuICAgICAgICBoYXNTdW5rZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBoYXNTdW5rZWQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsdWVzID0gKCkgPT4gKHtcbiAgICBjdXJyZW50U2hpcHMsXG4gICAgaGl0cyxcbiAgICBtaXNzZXMsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgYXR0YWNrU2hpcCxcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIGlzQWxsU3VuayxcbiAgICBwbGFjZVNoaXBzUmFuZG9tbHksXG4gICAgcGxheWVyUGxhY2VTaGlwLFxuICAgIHBsYWNlQWxsU2hpcHMsXG4gICAgcmFuZG9taXplLFxuICAgIHJlY2lldmVSYW5kb21BdHRhY2ssXG4gICAgcmFuZG9tQXhpcyxcbiAgICBnZXRWYWx1ZXMsXG4gICAgZ2V0VHlwZU9mUGxhY2VkU2hpcCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuXG5jb25zdCBHYW1lID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IHBsYXllckNoZWNrQm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG5cbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcblxuICBjb25zdCByYW5kb21pemVyID0gY29tcHV0ZXJCb2FyZC5yYW5kb21pemU7XG4gIGNvbnN0IHJhbmRvbUF4aWVzID0gY29tcHV0ZXJCb2FyZC5yYW5kb21BeGlzO1xuXG4gIGNvbnN0IGNoZWNrU2V0dXAgPSAocGxheWVyQ2hlY2tTaGlwcykgPT4ge1xuICAgIGlmIChwbGF5ZXJDaGVja1NoaXBzLmxlbmd0aCA9PT0gNSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwR2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJDaGVja1ZhbHVlcyA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCk7XG5cbiAgICBpZiAoIWNoZWNrU2V0dXAocGxheWVyQ2hlY2tWYWx1ZXMuY3VycmVudFNoaXBzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcGxheWVyQm9hcmQucGxhY2VBbGxTaGlwcyhwbGF5ZXJDaGVja1ZhbHVlcy5jdXJyZW50U2hpcHMpO1xuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tCb2F0cyA9IChjb29yZHMpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJDaGVja1ZhbHVlcyA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCk7XG5cbiAgICBpZiAoIWNoZWNrU2V0dXAocGxheWVyQ2hlY2tWYWx1ZXMuY3VycmVudFNoaXBzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5yZWNpZXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgcGxheWVyQm9hcmQucmVjaWV2ZVJhbmRvbUF0dGFjayhyYW5kb21pemVyKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwU2hpcCA9IChsb2NhdGlvbiwgYXhpcykgPT5cbiAgICBwbGF5ZXJDaGVja0JvYXJkLnBsYXllclBsYWNlU2hpcChsb2NhdGlvbiwgYXhpcyk7XG5cbiAgY29uc3QgZ2FtZUlzT3ZlciA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJDaGVja1NoaXBzID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKS5jdXJyZW50U2hpcHM7XG4gICAgaWYgKCFjaGVja1NldHVwKHBsYXllckNoZWNrU2hpcHMpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoY29tcHV0ZXJCb2FyZC5pc0FsbFN1bmsoKSkge1xuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ1lvdSBXb24nLCBnYW1lRmluaXNoZWQ6IHRydWUgfTtcbiAgICB9XG5cbiAgICBpZiAocGxheWVyQm9hcmQuaXNBbGxTdW5rKCkpIHtcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdZb3UgTG9zdCcsIGdhbWVGaW5pc2hlZDogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4geyBnYW1lRmluaXNoZWQ6IGZhbHNlIH07XG4gIH07XG5cbiAgY29uc3QgYXJyYW5nZUJsb2NrcyA9IChtb3VzZVBvc2l0aW9uLCBjdXJyZW50Um90YXRpb24pID0+IHtcbiAgICBjb25zdCBzaGlwVHlwZU9iamVjdCA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VHlwZU9mUGxhY2VkU2hpcCgpO1xuXG4gICAgLy8gY29uc29sZS5sb2coc2hpcFR5cGVPYmplY3QsICd0aGUgc2hpcCB0eXBlIG9iamVjdCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKG1vdXNlUG9zaXRpb24sICd0aGUgbW91c2UgcG9zaXRpb24nKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50Um90YXRpb24sICd0aGUgY3VycmVudCByb3RhdGlvbicpO1xuXG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAoXG4gICAgICBtb3VzZVBvc2l0aW9uLFxuICAgICAgc2hpcFR5cGVPYmplY3Quc2hpcExlbmd0aCxcbiAgICAgIGN1cnJlbnRSb3RhdGlvblxuICAgICk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFNoaXAsICd0aGUgbW9zdCB1cCB0byBkYXRlIHNoaXBzJyk7XG5cbiAgICByZXR1cm4gY3VycmVudFNoaXA7XG4gIH07XG5cbiAgY29uc3QgZ2V0R2FtZVZhbHVlcyA9ICgpID0+ICh7XG4gICAgcGxheWVyQm9hcmQsXG4gICAgY29tcHV0ZXJCb2FyZCxcbiAgICBwbGF5ZXJDaGVja0JvYXJkLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGNoZWNrU2V0dXAsXG4gICAgYXR0YWNrQm9hdHMsXG4gICAgc2V0dXBHYW1lLFxuICAgIGdhbWVJc092ZXIsXG4gICAgc2V0dXBTaGlwLFxuICAgIGdldEdhbWVWYWx1ZXMsXG4gICAgYXJyYW5nZUJsb2NrcyxcbiAgfTtcbn07XG5cbmNvbnN0IGFjdGl2ZUdhbWUgPSBHYW1lKCk7XG5cbmV4cG9ydCB7IEdhbWUsIGFjdGl2ZUdhbWUgfTtcbiIsImNvbnN0IFBvc2l0aW9uID0gKCkgPT4ge1xuICBjb25zdCBjcmVhdGVQb3NpdGlvbiA9ICh4Q29vcmQsIHlDb29yZCkgPT4gKHsgeENvb3JkLCB5Q29vcmQgfSk7XG5cbiAgY29uc3QgY2hlY2tPdXRPZkJvdW5jZSA9IChuZXdQb3NpdGlvbikgPT4ge1xuICAgIGlmIChuZXdQb3NpdGlvbi54Q29vcmQgPiA5IHx8IG5ld1Bvc2l0aW9uLnlDb29yZCA+IDkpIHJldHVybiB0cnVlO1xuICAgIGlmIChuZXdQb3NpdGlvbi54Q29vcmQgPCAwIHx8IG5ld1Bvc2l0aW9uLnlDb29yZCA8IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBhZGRQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmIChwb3NpdGlvbjEgPT09IGZhbHNlIHx8IHBvc2l0aW9uMiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gY3JlYXRlUG9zaXRpb24ocG9zaXRpb24xLnhDb29yZCwgcG9zaXRpb24xLnlDb29yZCk7XG4gICAgbmV3UG9zaXRpb24ueENvb3JkICs9IHBvc2l0aW9uMi54Q29vcmQ7XG4gICAgbmV3UG9zaXRpb24ueUNvb3JkICs9IHBvc2l0aW9uMi55Q29vcmQ7XG5cbiAgICBpZiAoY2hlY2tPdXRPZkJvdW5jZShuZXdQb3NpdGlvbikpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBtdWx0aXBseVBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMSA9PT0gZmFsc2UgfHwgcG9zaXRpb24yID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBjcmVhdGVQb3NpdGlvbihwb3NpdGlvbjEueENvb3JkLCBwb3NpdGlvbjEueUNvb3JkKTtcbiAgICBuZXdQb3NpdGlvbi54Q29vcmQgKj0gcG9zaXRpb24yLnhDb29yZDtcbiAgICBuZXdQb3NpdGlvbi55Q29vcmQgKj0gcG9zaXRpb24yLnlDb29yZDtcblxuICAgIGlmIChjaGVja091dE9mQm91bmNlKG5ld1Bvc2l0aW9uKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwgPSAocG9zaXRpb24xLCBwb3NpdGlvbjIsIGF4aXMpID0+IHtcbiAgICBpZiAocG9zaXRpb24xW2F4aXNdID09PSBwb3NpdGlvbjJbYXhpc10gKyAxKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAocG9zaXRpb24xW2F4aXNdID09PSBwb3NpdGlvbjJbYXhpc10pIHJldHVybiB0cnVlO1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSAtIDEpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjb21wYXJlUG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAoIWNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwocG9zaXRpb24xLCBwb3NpdGlvbjIsICd4Q29vcmQnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwocG9zaXRpb24xLCBwb3NpdGlvbjIsICd5Q29vcmQnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVBvc2l0aW9uLFxuICAgIGFkZFBvc2l0aW9uLFxuICAgIG11bHRpcGx5UG9zaXRpb24sXG4gICAgY29tcGFyZVBvc2l0aW9uLFxuICAgIGNoZWNrT3V0T2ZCb3VuY2UsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3NpdGlvbjtcbiIsImNvbnN0IFByYWN0aWNhbCA9ICgpID0+IHtcbiAgY29uc3QgY29weUFycmF5ID0gKGFycmF5KSA9PiB7XG4gICAgY29uc3QgbmV3QXJyYXkgPSBbXTtcblxuICAgIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIG5ld0FycmF5LnB1c2goaXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3QXJyYXk7XG4gIH07XG5cbiAgY29uc3QgaXNPYmplY3QgPSAoY3VycmVudE9iamVjdCkgPT4ge1xuICAgIGlmICh0eXBlb2YgY3VycmVudE9iamVjdCA9PT0gJ29iamVjdCcgJiYgY3VycmVudE9iamVjdCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjaGVja09iamVjdCA9IChvYmplY3QxLCBvYmplY3QyKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgc2Vjb25kSW5kZXggPSAwO1xuXG4gICAgbGV0IG9iamVjdElzRXF1YWwgPSB0cnVlO1xuXG4gICAgY29uc3QgY3VycmVudE9iamVjdCA9IG9iamVjdDE7XG4gICAgY29uc3QgY3VycmVudE9iamVjdDIgPSBvYmplY3QyO1xuXG4gICAgY29uc3QgY3VycmVudE9iamVjdFZhbHVlcyA9IE9iamVjdC52YWx1ZXMoY3VycmVudE9iamVjdCk7XG4gICAgY29uc3QgY3VycmVudE9iamVjdDJWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGN1cnJlbnRPYmplY3QyKTtcblxuICAgIGNvbnN0IG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyhjdXJyZW50T2JqZWN0KTtcbiAgICBjb25zdCBvYmplY3RLZXlzMiA9IE9iamVjdC5rZXlzKGN1cnJlbnRPYmplY3QyKTtcblxuICAgIG9iamVjdEtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoa2V5ICE9PSBvYmplY3RLZXlzMltpbmRleF0pIG9iamVjdElzRXF1YWwgPSBmYWxzZTtcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgfSk7XG5cbiAgICBpZiAoIW9iamVjdElzRXF1YWwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAob2JqZWN0S2V5cy5sZW5ndGggIT09IG9iamVjdEtleXMyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudE9iamVjdCwgJ3RoZSBjdXJyZW50IG9iamVjdCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRPYmplY3QyLCAndGhlIGN1cnJlbnQgb2JqZWN0MicpO1xuXG4gICAgY3VycmVudE9iamVjdFZhbHVlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBpdGVtMiA9IGN1cnJlbnRPYmplY3QyVmFsdWVzW3NlY29uZEluZGV4XTtcblxuICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pICYmIGlzT2JqZWN0KGl0ZW0yKSkge1xuICAgICAgICBjb25zdCBjaGVja09iamVjdEJvb2wgPSBjaGVja09iamVjdChpdGVtLCBpdGVtMik7XG5cbiAgICAgICAgaWYgKCFjaGVja09iamVjdEJvb2wpIG9iamVjdElzRXF1YWwgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbSAhPT0gaXRlbTIpIHtcbiAgICAgICAgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBzZWNvbmRJbmRleCArPSAxO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iamVjdElzRXF1YWw7XG4gIH07XG5cbiAgcmV0dXJuIHsgY29weUFycmF5LCBjaGVja09iamVjdCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJhY3RpY2FsO1xuIiwiaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuXG5jb25zdCBTaGlwID0gKCkgPT4ge1xuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG5cbiAgY29uc3QgZ2V0QWRkZWRQb3NpdGlvbiA9IChheGlzKSA9PiB7XG4gICAgbGV0IGFkZGVkUG9zaXRpb247XG5cbiAgICBpZiAoYXhpcyA9PT0gJ3gnKSBhZGRlZFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oMSwgMCk7XG4gICAgZWxzZSBhZGRlZFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oMCwgMSk7XG5cbiAgICByZXR1cm4gYWRkZWRQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVTaGlwID0gKHBvc2l0aW9uMSwgbGVuZ3RoMSwgYXhpcykgPT4ge1xuICAgIGlmIChsZW5ndGgxID09PSAwIHx8IGxlbmd0aDEgPiA1KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHBvc2l0aW9uLmNoZWNrT3V0T2ZCb3VuY2UocG9zaXRpb24xKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcG9wdWxhdGVTaGlwcyA9IChjdXJyZW50UG9zaXRpb24sIGxhdGVzdExlbmd0aCwgbGF0ZXN0QXJyYXkpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRBcnJheSA9IGxhdGVzdEFycmF5O1xuICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uO1xuXG4gICAgICBpZiAoY3VycmVudFBvc2l0aW9uID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKGxhdGVzdExlbmd0aCA9PT0gMCkgcmV0dXJuIGN1cnJlbnRBcnJheTtcbiAgICAgIGlmIChsYXRlc3RMZW5ndGggPT09IGxlbmd0aDEpIHtcbiAgICAgICAgY3VycmVudEFycmF5LnB1c2goY3VycmVudFBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIHBvcHVsYXRlU2hpcHMoY3VycmVudFBvc2l0aW9uLCBsYXRlc3RMZW5ndGggLSAxLCBjdXJyZW50QXJyYXkpO1xuICAgICAgfVxuICAgICAgY29uc3QgYWRkZWRQb3NpdGlvbiA9IGdldEFkZGVkUG9zaXRpb24oYXhpcyk7XG4gICAgICBuZXdQb3NpdGlvbiA9IHBvc2l0aW9uLmFkZFBvc2l0aW9uKG5ld1Bvc2l0aW9uLCBhZGRlZFBvc2l0aW9uKTtcblxuICAgICAgaWYgKCFuZXdQb3NpdGlvbikgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICAgICAgY3VycmVudEFycmF5LnB1c2gobmV3UG9zaXRpb24pO1xuXG4gICAgICBjb25zdCBhcnJheUxlbmd0aCA9IGN1cnJlbnRBcnJheS5sZW5ndGggLSAxO1xuXG4gICAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhcbiAgICAgICAgY3VycmVudEFycmF5W2FycmF5TGVuZ3RoXSxcbiAgICAgICAgbGF0ZXN0TGVuZ3RoIC0gMSxcbiAgICAgICAgY3VycmVudEFycmF5XG4gICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhwb3NpdGlvbjEsIGxlbmd0aDEsIFtdLCBmYWxzZSk7XG4gIH07XG5cblxuXG4gIGNvbnN0IGlzU3VuayA9IChzaGlwQXJyYXkpID0+IHtcbiAgICBpZiAoc2hpcEFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGhpdCA9IChwb3NpdGlvbnNBcnJheSwgcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBoaXRBcnJheSA9IHBvc2l0aW9uc0FycmF5LmZpbHRlcigocG9zKSA9PiB7XG4gICAgICBpZiAocG9zLnhDb29yZCA9PT0gcG9zaXRpb24ueENvb3JkICYmIHBvcy55Q29vcmQgPT09IHBvc2l0aW9uLnlDb29yZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBjb25zdCBzaGlwQXJyYXlzID0gcG9zaXRpb25zQXJyYXkuZmlsdGVyKChwb3MpID0+IHtcbiAgICAgIGlmIChwb3MueENvb3JkID09PSBwb3NpdGlvbi54Q29vcmQgJiYgcG9zLnlDb29yZCA9PT0gcG9zaXRpb24ueUNvb3JkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgaGl0QXJyYXksIHNoaXBBcnJheXMgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVNoaXAsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iXSwibmFtZXMiOlsiUG9zaXRpb24iLCJTaGlwIiwiUHJhY3RpY2FsIiwiR2FtZWJvYXJkIiwicG9zaXRpb24iLCJzaGlwIiwicHJhY3RpY2FsIiwiY3VycmVudFNoaXBzIiwiaGl0cyIsIm1pc3NlcyIsInJhbmRvbWl6ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbUF4aXMiLCJheGllcyIsImxlbmd0aCIsInBsYWNlQWxsU2hpcHMiLCJzaGlwc0FycmF5IiwiY29tcGFyZVNoaXBzQXJyYXkiLCJsYXRlc3RTaGlwc0FycmF5Iiwic2hpcHMiLCJzaGlwc0RvQ29sbGlkZSIsImZvckVhY2giLCJsYXRlc3RTaGlwcyIsImJvYXQiLCJsYXRlc3RCb2F0IiwiY29tcGFyZVBvc2l0aW9uIiwicGxheWVyUGxhY2VTaGlwIiwibG9jYXRpb24iLCJheGlzIiwiY3VycmVudEFycmF5IiwiY29weUFycmF5Iiwic2hpcGxlbmd0aCIsImN1cnJlbnRTaGlwIiwiY3JlYXRlU2hpcCIsImlzQ29sbGlkZWQiLCJwdXNoIiwicGxhY2VSYW5kb21TaGlwcyIsInJhbmRvbWl6ZXIiLCJyYW5kb21BeGllcyIsImxhdGVzdExlbmd0aCIsInJhbmRvbVBvc2l0aW9uIiwiY3JlYXRlUG9zaXRpb24iLCJyYW5kb21TaGlwIiwic2hpcENvbGxpZGVzIiwicGxhY2VTaGlwc1JhbmRvbWx5IiwiYXR0YWNrU2hpcCIsImxhdGVzdFBvc2l0aW9uIiwiY3VycmVudEhpdHMiLCJjdXJyZW50TWlzc2VzIiwiaXNIaXQiLCJsYXRlc3RIaXRzIiwibGF0ZXN0TWlzc2VzIiwic2hpcEFycmF5IiwicG9zaXRpb25zQXJyYXkiLCJoaXQiLCJoaXRBcnJheSIsInNoaXBBcnJheXMiLCJmaW5hbE9iamVjdCIsInJlY2lldmVBdHRhY2siLCJyZXN1bHQiLCJjcmVhdGVSYW5kb21Db29yZHMiLCJpc01vY2tSYW5kb20iLCJjYWxsUmFuZG9taXplciIsInJhbmRvbVgiLCJyYW5kb21ZIiwiZmlsdGVyQXR0YWNrIiwiYXJyYXkiLCJjdXJyZW50QXR0YWNrIiwiY3VycmVudEF0dGFja0FycmF5IiwiZmlsdGVyIiwiaXRlbSIsInhDb29yZCIsInlDb29yZCIsImdldFR5cGVPZlBsYWNlZFNoaXAiLCJzaGlwVHlwZXMiLCJzaGlwVHlwZSIsInNoaXBMZW5ndGgiLCJyZWNpZXZlUmFuZG9tQXR0YWNrIiwiaGFzQmVlbkhpdCIsImhhc0JlZW5NaXNzIiwiaXNBbGxTdW5rIiwiaGFzU3Vua2VkIiwiaXNTdW5rIiwiZ2V0VmFsdWVzIiwiR2FtZSIsInBsYXllckJvYXJkIiwiY29tcHV0ZXJCb2FyZCIsInBsYXllckNoZWNrQm9hcmQiLCJjaGVja1NldHVwIiwicGxheWVyQ2hlY2tTaGlwcyIsInNldHVwR2FtZSIsInBsYXllckNoZWNrVmFsdWVzIiwiYXR0YWNrQm9hdHMiLCJjb29yZHMiLCJzZXR1cFNoaXAiLCJnYW1lSXNPdmVyIiwibWVzc2FnZSIsImdhbWVGaW5pc2hlZCIsImFycmFuZ2VCbG9ja3MiLCJtb3VzZVBvc2l0aW9uIiwiY3VycmVudFJvdGF0aW9uIiwic2hpcFR5cGVPYmplY3QiLCJnZXRHYW1lVmFsdWVzIiwiYWN0aXZlR2FtZSIsImNoZWNrT3V0T2ZCb3VuY2UiLCJuZXdQb3NpdGlvbiIsImFkZFBvc2l0aW9uIiwicG9zaXRpb24xIiwicG9zaXRpb24yIiwibXVsdGlwbHlQb3NpdGlvbiIsImNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwiLCJuZXdBcnJheSIsImlzT2JqZWN0IiwiY3VycmVudE9iamVjdCIsImNoZWNrT2JqZWN0Iiwib2JqZWN0MSIsIm9iamVjdDIiLCJpbmRleCIsInNlY29uZEluZGV4Iiwib2JqZWN0SXNFcXVhbCIsImN1cnJlbnRPYmplY3QyIiwiY3VycmVudE9iamVjdFZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsImN1cnJlbnRPYmplY3QyVmFsdWVzIiwib2JqZWN0S2V5cyIsImtleXMiLCJvYmplY3RLZXlzMiIsImtleSIsIml0ZW0yIiwiY2hlY2tPYmplY3RCb29sIiwiZ2V0QWRkZWRQb3NpdGlvbiIsImFkZGVkUG9zaXRpb24iLCJsZW5ndGgxIiwicG9wdWxhdGVTaGlwcyIsImN1cnJlbnRQb3NpdGlvbiIsImxhdGVzdEFycmF5IiwiYXJyYXlMZW5ndGgiLCJwb3MiXSwic291cmNlUm9vdCI6IiJ9