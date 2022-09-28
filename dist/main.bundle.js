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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNsRSxNQUFKLEtBQWV0RSxRQUFRLENBQUNzRSxNQUF4QixJQUFrQ2tFLEdBQUcsQ0FBQ2pFLE1BQUosS0FBZXZFLFFBQVEsQ0FBQ3VFLE1BQTlELEVBQXNFO1FBQ3BFLE9BQU8sSUFBUDtNQUNEOztNQUNELE9BQU8sS0FBUDtJQUNELENBTGdCLENBQWpCO0lBTUEsSUFBTWhCLFVBQVUsR0FBR0gsY0FBYyxDQUFDZ0IsTUFBZixDQUFzQixVQUFDb0UsR0FBRCxFQUFTO01BQ2hELElBQUlBLEdBQUcsQ0FBQ2xFLE1BQUosS0FBZXRFLFFBQVEsQ0FBQ3NFLE1BQXhCLElBQWtDa0UsR0FBRyxDQUFDakUsTUFBSixLQUFldkUsUUFBUSxDQUFDdUUsTUFBOUQsRUFBc0U7UUFDcEUsT0FBTyxLQUFQO01BQ0Q7O01BQ0QsT0FBTyxJQUFQO0lBQ0QsQ0FMa0IsQ0FBbkI7SUFPQSxPQUFPO01BQUVqQixRQUFRLEVBQVJBLFFBQUY7TUFBWUMsVUFBVSxFQUFWQTtJQUFaLENBQVA7RUFDRCxDQWZEOztFQWlCQSxPQUFPO0lBQ0x0QixVQUFVLEVBQVZBLFVBREs7SUFFTG9CLEdBQUcsRUFBSEEsR0FGSztJQUdMNEIsTUFBTSxFQUFOQTtFQUhLLENBQVA7QUFLRCxDQXpFRDs7QUEyRUEsaUVBQWVwRixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3ByYWN0aWNhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IFByYWN0aWNhbCBmcm9tICcuL3ByYWN0aWNhbC5qcyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuICBjb25zdCBzaGlwID0gU2hpcCgpO1xuICBjb25zdCBwcmFjdGljYWwgPSBQcmFjdGljYWwoKTtcblxuICBsZXQgY3VycmVudFNoaXBzID0gW107XG4gIGxldCBoaXRzID0gW107XG4gIGxldCBtaXNzZXMgPSBbXTtcblxuICBjb25zdCByYW5kb21pemUgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgY29uc3QgcmFuZG9tQXhpcyA9ICgpID0+IHtcbiAgICBjb25zdCBheGllcyA9IFsneCcsICd5J107XG4gICAgcmV0dXJuIGF4aWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF4aWVzLmxlbmd0aCldO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlQWxsU2hpcHMgPSAoc2hpcHNBcnJheSkgPT4ge1xuICAgIGN1cnJlbnRTaGlwcyA9IHNoaXBzQXJyYXk7XG4gICAgcmV0dXJuIGN1cnJlbnRTaGlwcztcbiAgfTtcblxuICBjb25zdCBjb21wYXJlU2hpcHNBcnJheSA9IChsYXRlc3RTaGlwc0FycmF5LCBzaGlwcykgPT4ge1xuICAgIGxldCBzaGlwc0RvQ29sbGlkZSA9IGZhbHNlO1xuICAgIC8vIGNvbnNvbGUubG9nKGxhdGVzdFNoaXBzQXJyYXksICd0aGUgY3VycmVlbnQgc2hpcHMgYXJyYXknKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwcywgJ3RoZSBjdXJyZW50IHNoaXBzJyk7XG5cbiAgICBsYXRlc3RTaGlwc0FycmF5LmZvckVhY2goKGxhdGVzdFNoaXBzKSA9PiB7XG4gICAgICBsYXRlc3RTaGlwcy5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKGxhdGVzdEJvYXQpID0+IHtcbiAgICAgICAgICBpZiAocG9zaXRpb24uY29tcGFyZVBvc2l0aW9uKGJvYXQsIGxhdGVzdEJvYXQpKSB7XG4gICAgICAgICAgICBzaGlwc0RvQ29sbGlkZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBzRG9Db2xsaWRlO1xuICB9O1xuXG4gIGNvbnN0IHBsYXllclBsYWNlU2hpcCA9IChsb2NhdGlvbiwgYXhpcykgPT4ge1xuICAgIGNvbnN0IGxhdGVzdFBvc2l0aW9uID0gbG9jYXRpb247XG4gICAgY29uc3QgY3VycmVudEFycmF5ID0gcHJhY3RpY2FsLmNvcHlBcnJheShjdXJyZW50U2hpcHMpO1xuXG4gICAgbGV0IHNoaXBsZW5ndGggPSA1IC0gY3VycmVudEFycmF5Lmxlbmd0aDtcblxuICAgIGlmIChjdXJyZW50QXJyYXkubGVuZ3RoID4gMykgc2hpcGxlbmd0aCA9IDI7XG5cbiAgICBpZiAoY3VycmVudEFycmF5Lmxlbmd0aCA9PT0gNSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2hpcHNBcnJheTogY3VycmVudEFycmF5LFxuICAgICAgICBtZXNzYWdlOiAnWW91IGhhdmUgYWxyZWFkeSBwbGFjZWQgYWxsIG9mIHlvdXIgc2hpcHMnLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXAuY3JlYXRlU2hpcChsYXRlc3RQb3NpdGlvbiwgc2hpcGxlbmd0aCwgYXhpcyk7XG4gICAgaWYgKCFjdXJyZW50U2hpcCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2hpcEFycmF5OiBjdXJyZW50QXJyYXksXG4gICAgICAgIG1lc3NhZ2U6ICdZb3UgY2Fubm90IHBsYWNlIGEgc2hpcCB0aGVyZScsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGlzQ29sbGlkZWQgPSBjb21wYXJlU2hpcHNBcnJheShjdXJyZW50QXJyYXksIGN1cnJlbnRTaGlwKTtcblxuICAgIGlmICghaXNDb2xsaWRlZCkge1xuICAgICAgY3VycmVudEFycmF5LnB1c2goY3VycmVudFNoaXApO1xuICAgICAgY3VycmVudFNoaXBzID0gY3VycmVudEFycmF5O1xuICAgICAgcmV0dXJuIGN1cnJlbnRBcnJheTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2hpcEFycmF5OiBjdXJyZW50QXJyYXksXG4gICAgICBtZXNzYWdlOiBcIllvdSd2ZSBhbHJlYWR5IHBsYWNlZCBhIHNoaXAgdGhlcmVcIixcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUmFuZG9tU2hpcHMgPSAobGVuZ3RoLCBzaGlwc0FycmF5LCByYW5kb21pemVyLCByYW5kb21BeGllcykgPT4ge1xuICAgIGNvbnN0IGxhdGVzdFNoaXBzQXJyYXkgPSBzaGlwc0FycmF5O1xuICAgIGxldCBsYXRlc3RMZW5ndGggPSBsZW5ndGg7XG4gICAgY29uc3QgcmFuZG9tUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihyYW5kb21pemVyKCksIHJhbmRvbWl6ZXIoKSk7XG4gICAgY29uc3QgcmFuZG9tU2hpcCA9IHNoaXAuY3JlYXRlU2hpcChcbiAgICAgIHJhbmRvbVBvc2l0aW9uLFxuICAgICAgbGF0ZXN0TGVuZ3RoLFxuICAgICAgcmFuZG9tQXhpZXMoKVxuICAgICk7XG5cbiAgICBpZiAocmFuZG9tU2hpcCkge1xuICAgICAgY29uc3Qgc2hpcENvbGxpZGVzID0gY29tcGFyZVNoaXBzQXJyYXkobGF0ZXN0U2hpcHNBcnJheSwgcmFuZG9tU2hpcCk7XG4gICAgICBpZiAoIXNoaXBDb2xsaWRlcykge1xuICAgICAgICBpZiAobGF0ZXN0TGVuZ3RoID4gMikgbGF0ZXN0TGVuZ3RoIC09IDE7XG4gICAgICAgIGlmIChzaGlwc0FycmF5Lmxlbmd0aCA8IDUpIGxhdGVzdFNoaXBzQXJyYXkucHVzaChyYW5kb21TaGlwKTtcblxuICAgICAgICBpZiAoc2hpcHNBcnJheS5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICByZXR1cm4gbGF0ZXN0U2hpcHNBcnJheTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwbGFjZVJhbmRvbVNoaXBzKFxuICAgICAgbGF0ZXN0TGVuZ3RoLFxuICAgICAgbGF0ZXN0U2hpcHNBcnJheSxcbiAgICAgIHJhbmRvbWl6ZXIsXG4gICAgICByYW5kb21BeGllc1xuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwc1JhbmRvbWx5ID0gKHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKSA9PiB7XG4gICAgY29uc3Qgc2hpcHNBcnJheSA9IHBsYWNlUmFuZG9tU2hpcHMoNSwgW10sIHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKTtcbiAgICBjdXJyZW50U2hpcHMgPSBzaGlwc0FycmF5O1xuXG4gICAgcmV0dXJuIHNoaXBzQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrU2hpcCA9IChsYXRlc3RQb3NpdGlvbiwgc2hpcHMsIGN1cnJlbnRIaXRzLCBjdXJyZW50TWlzc2VzKSA9PiB7XG4gICAgbGV0IGlzSGl0ID0gZmFsc2U7XG4gICAgY29uc3QgbGF0ZXN0U2hpcHNBcnJheSA9IFtdO1xuICAgIGNvbnN0IGxhdGVzdEhpdHMgPSBjdXJyZW50SGl0cztcbiAgICBjb25zdCBsYXRlc3RNaXNzZXMgPSBjdXJyZW50TWlzc2VzO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcEFycmF5KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb25zQXJyYXkgPSBwcmFjdGljYWwuY29weUFycmF5KHNoaXBBcnJheSk7XG4gICAgICBjb25zdCBoaXQgPSBzaGlwLmhpdChwb3NpdGlvbnNBcnJheSwgbGF0ZXN0UG9zaXRpb24pO1xuXG4gICAgICBpZiAoaGl0LmhpdEFycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpc0hpdCA9IHRydWU7XG4gICAgICAgIHBvc2l0aW9uc0FycmF5ID0gaGl0LnNoaXBBcnJheXM7XG4gICAgICAgIGxhdGVzdEhpdHMucHVzaChoaXQuaGl0QXJyYXlbMF0pO1xuICAgICAgfVxuICAgICAgbGF0ZXN0U2hpcHNBcnJheS5wdXNoKHBvc2l0aW9uc0FycmF5KTtcbiAgICB9KTtcbiAgICBpZiAoIWlzSGl0KSBsYXRlc3RNaXNzZXMucHVzaChsYXRlc3RQb3NpdGlvbik7XG5cbiAgICBjb25zdCBmaW5hbE9iamVjdCA9IHtcbiAgICAgIGlzSGl0LFxuICAgICAgbGF0ZXN0U2hpcHNBcnJheSxcbiAgICAgIGxhdGVzdEhpdHMsXG4gICAgICBsYXRlc3RNaXNzZXMsXG4gICAgfTtcblxuICAgIHJldHVybiBmaW5hbE9iamVjdDtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlQXR0YWNrID0gKGxhdGVzdFBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXR0YWNrU2hpcChsYXRlc3RQb3NpdGlvbiwgY3VycmVudFNoaXBzLCBoaXRzLCBtaXNzZXMpO1xuXG4gICAgY3VycmVudFNoaXBzID0gcmVzdWx0LmxhdGVzdFNoaXBzQXJyYXk7XG4gICAgaGl0cyA9IHJlc3VsdC5sYXRlc3RIaXRzO1xuICAgIG1pc3NlcyA9IHJlc3VsdC5sYXRlc3RNaXNzZXM7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVJhbmRvbUNvb3JkcyA9IChyYW5kb21pemVyKSA9PiB7XG4gICAgbGV0IHJhbmRvbVBvc2l0aW9uO1xuXG4gICAgaWYgKHJhbmRvbWl6ZXIuaXNNb2NrUmFuZG9tKSB7XG4gICAgICByYW5kb21Qb3NpdGlvbiA9IHJhbmRvbWl6ZXIuY2FsbFJhbmRvbWl6ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmFuZG9tWCA9IHJhbmRvbWl6ZXIoKTtcbiAgICAgIGNvbnN0IHJhbmRvbVkgPSByYW5kb21pemVyKCk7XG4gICAgICByYW5kb21Qb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHJhbmRvbVgsIHJhbmRvbVkpO1xuICAgIH1cblxuICAgIHJldHVybiByYW5kb21Qb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJBdHRhY2sgPSAoYXJyYXksIGN1cnJlbnRBdHRhY2spID0+IHtcbiAgICBjb25zdCBjdXJyZW50QXR0YWNrQXJyYXkgPSBhcnJheS5maWx0ZXIoXG4gICAgICAoaXRlbSkgPT5cbiAgICAgICAgaXRlbS54Q29vcmQgPT09IGN1cnJlbnRBdHRhY2sueENvb3JkICYmXG4gICAgICAgIGl0ZW0ueUNvb3JkID09PSBjdXJyZW50QXR0YWNrLnlDb29yZFxuICAgICk7XG5cbiAgICByZXR1cm4gY3VycmVudEF0dGFja0FycmF5O1xuICB9O1xuXG4gIGNvbnN0IGdldFR5cGVPZlBsYWNlZFNoaXAgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRTaGlwcy5sZW5ndGggPT09IDUpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHNoaXBUeXBlcyA9IFtcbiAgICAgIHsgc2hpcFR5cGU6ICdjYXJyaWVyJywgc2hpcExlbmd0aDogNSB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2JhdHRsZXNoaXAnLCBzaGlwTGVuZ3RoOiA0IH0sXG4gICAgICB7IHNoaXBUeXBlOiAnZGVzdG95ZXInLCBzaGlwTGVuZ3RoOiAzIH0sXG4gICAgICB7IHNoaXBUeXBlOiAnc3VibWFyaW5lJywgc2hpcExlbmd0aDogMyB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2d1bmJvYXQnLCBzaGlwTGVuZ3RoOiAyIH0sXG4gICAgXTtcblxuICAgIHJldHVybiBzaGlwVHlwZXNbY3VycmVudFNoaXBzLmxlbmd0aF07XG4gIH07XG5cbiAgY29uc3QgcmVjaWV2ZVJhbmRvbUF0dGFjayA9IChyYW5kb21pemVyKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tUG9zaXRpb24gPSBjcmVhdGVSYW5kb21Db29yZHMocmFuZG9taXplcik7XG5cbiAgICBjb25zdCBoYXNCZWVuSGl0ID0gZmlsdGVyQXR0YWNrKGhpdHMsIHJhbmRvbVBvc2l0aW9uKTtcbiAgICBjb25zdCBoYXNCZWVuTWlzcyA9IGZpbHRlckF0dGFjayhtaXNzZXMsIHJhbmRvbVBvc2l0aW9uKTtcblxuICAgIGlmIChoYXNCZWVuSGl0Lmxlbmd0aCA+IDAgfHwgaGFzQmVlbk1pc3MubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHJlY2lldmVSYW5kb21BdHRhY2socmFuZG9taXplcik7XG4gICAgfVxuICAgIHJldHVybiByZWNpZXZlQXR0YWNrKHJhbmRvbVBvc2l0aW9uKTtcbiAgfTtcblxuICBjb25zdCBpc0FsbFN1bmsgPSAoKSA9PiB7XG4gICAgbGV0IGhhc1N1bmtlZCA9IHRydWU7XG4gICAgY3VycmVudFNoaXBzLmZvckVhY2goKHNoaXBzKSA9PiB7XG4gICAgICBpZiAoIXNoaXAuaXNTdW5rKHNoaXBzKSkge1xuICAgICAgICBoYXNTdW5rZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBoYXNTdW5rZWQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsdWVzID0gKCkgPT4gKHtcbiAgICBjdXJyZW50U2hpcHMsXG4gICAgaGl0cyxcbiAgICBtaXNzZXMsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgYXR0YWNrU2hpcCxcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIGlzQWxsU3VuayxcbiAgICBwbGFjZVNoaXBzUmFuZG9tbHksXG4gICAgcGxheWVyUGxhY2VTaGlwLFxuICAgIHBsYWNlQWxsU2hpcHMsXG4gICAgcmFuZG9taXplLFxuICAgIHJlY2lldmVSYW5kb21BdHRhY2ssXG4gICAgcmFuZG9tQXhpcyxcbiAgICBnZXRWYWx1ZXMsXG4gICAgZ2V0VHlwZU9mUGxhY2VkU2hpcCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuXG5jb25zdCBHYW1lID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IHBsYXllckNoZWNrQm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG5cbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcblxuICBjb25zdCByYW5kb21pemVyID0gY29tcHV0ZXJCb2FyZC5yYW5kb21pemU7XG4gIGNvbnN0IHJhbmRvbUF4aWVzID0gY29tcHV0ZXJCb2FyZC5yYW5kb21BeGlzO1xuXG4gIGNvbnN0IGNoZWNrU2V0dXAgPSAocGxheWVyQ2hlY2tTaGlwcykgPT4ge1xuICAgIGlmIChwbGF5ZXJDaGVja1NoaXBzLmxlbmd0aCA9PT0gNSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwR2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJDaGVja1ZhbHVlcyA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCk7XG5cbiAgICBpZiAoIWNoZWNrU2V0dXAocGxheWVyQ2hlY2tWYWx1ZXMuY3VycmVudFNoaXBzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcGxheWVyQm9hcmQucGxhY2VBbGxTaGlwcyhwbGF5ZXJDaGVja1ZhbHVlcy5jdXJyZW50U2hpcHMpO1xuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tCb2F0cyA9IChjb29yZHMpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJDaGVja1ZhbHVlcyA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VmFsdWVzKCk7XG5cbiAgICBpZiAoIWNoZWNrU2V0dXAocGxheWVyQ2hlY2tWYWx1ZXMuY3VycmVudFNoaXBzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5yZWNpZXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgcGxheWVyQm9hcmQucmVjaWV2ZVJhbmRvbUF0dGFjayhyYW5kb21pemVyKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwU2hpcCA9IChsb2NhdGlvbiwgYXhpcykgPT5cbiAgICBwbGF5ZXJDaGVja0JvYXJkLnBsYXllclBsYWNlU2hpcChsb2NhdGlvbiwgYXhpcyk7XG5cbiAgY29uc3QgZ2FtZUlzT3ZlciA9ICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJCb2FyZFZhbHVlcy5jdXJyZW50U2hpcHMsICd0aGUgY3VycmVudCBzaGlwcycpO1xuXG4gICAgaWYgKGNvbXB1dGVyQm9hcmQuaXNBbGxTdW5rKCkpIHtcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdZb3UgV29uJywgZ2FtZUZpbmlzaGVkOiB0cnVlIH07XG4gICAgfVxuXG4gICAgaWYgKHBsYXllckJvYXJkLmlzQWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4geyBtZXNzYWdlOiAnWW91IExvc3QnLCBnYW1lRmluaXNoZWQ6IHRydWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZ2FtZUZpbmlzaGVkOiBmYWxzZSB9O1xuICB9O1xuXG4gIGNvbnN0IGFycmFuZ2VCbG9ja3MgPSAobW91c2VQb3NpdGlvbiwgY3VycmVudFJvdGF0aW9uKSA9PiB7XG4gICAgY29uc3Qgc2hpcFR5cGVPYmplY3QgPSBwbGF5ZXJDaGVja0JvYXJkLmdldFR5cGVPZlBsYWNlZFNoaXAoKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHNoaXBUeXBlT2JqZWN0LCAndGhlIHNoaXAgdHlwZSBvYmplY3QnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhtb3VzZVBvc2l0aW9uLCAndGhlIG1vdXNlIHBvc2l0aW9uJyk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFJvdGF0aW9uLCAndGhlIGN1cnJlbnQgcm90YXRpb24nKTtcblxuICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgbW91c2VQb3NpdGlvbixcbiAgICAgIHNoaXBUeXBlT2JqZWN0LnNoaXBMZW5ndGgsXG4gICAgICBjdXJyZW50Um90YXRpb25cbiAgICApO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRTaGlwLCAndGhlIG1vc3QgdXAgdG8gZGF0ZSBzaGlwcycpO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRTaGlwO1xuICB9O1xuXG4gIGNvbnN0IGdldEdhbWVWYWx1ZXMgPSAoKSA9PiAoe1xuICAgIHBsYXllckJvYXJkLFxuICAgIGNvbXB1dGVyQm9hcmQsXG4gICAgcGxheWVyQ2hlY2tCb2FyZCxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjaGVja1NldHVwLFxuICAgIGF0dGFja0JvYXRzLFxuICAgIHNldHVwR2FtZSxcbiAgICBnYW1lSXNPdmVyLFxuICAgIHNldHVwU2hpcCxcbiAgICBnZXRHYW1lVmFsdWVzLFxuICAgIGFycmFuZ2VCbG9ja3MsXG4gIH07XG59O1xuXG5jb25zdCBhY3RpdmVHYW1lID0gR2FtZSgpO1xuXG5leHBvcnQgeyBHYW1lLCBhY3RpdmVHYW1lIH07XG4iLCJjb25zdCBQb3NpdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgY3JlYXRlUG9zaXRpb24gPSAoeENvb3JkLCB5Q29vcmQpID0+ICh7IHhDb29yZCwgeUNvb3JkIH0pO1xuXG4gIGNvbnN0IGNoZWNrT3V0T2ZCb3VuY2UgPSAobmV3UG9zaXRpb24pID0+IHtcbiAgICBpZiAobmV3UG9zaXRpb24ueENvb3JkID4gOSB8fCBuZXdQb3NpdGlvbi55Q29vcmQgPiA5KSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAobmV3UG9zaXRpb24ueENvb3JkIDwgMCB8fCBuZXdQb3NpdGlvbi55Q29vcmQgPCAwKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYWRkUG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAocG9zaXRpb24xID09PSBmYWxzZSB8fCBwb3NpdGlvbjIgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGNyZWF0ZVBvc2l0aW9uKHBvc2l0aW9uMS54Q29vcmQsIHBvc2l0aW9uMS55Q29vcmQpO1xuICAgIG5ld1Bvc2l0aW9uLnhDb29yZCArPSBwb3NpdGlvbjIueENvb3JkO1xuICAgIG5ld1Bvc2l0aW9uLnlDb29yZCArPSBwb3NpdGlvbjIueUNvb3JkO1xuXG4gICAgaWYgKGNoZWNrT3V0T2ZCb3VuY2UobmV3UG9zaXRpb24pKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbmV3UG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgbXVsdGlwbHlQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmIChwb3NpdGlvbjEgPT09IGZhbHNlIHx8IHBvc2l0aW9uMiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gY3JlYXRlUG9zaXRpb24ocG9zaXRpb24xLnhDb29yZCwgcG9zaXRpb24xLnlDb29yZCk7XG4gICAgbmV3UG9zaXRpb24ueENvb3JkICo9IHBvc2l0aW9uMi54Q29vcmQ7XG4gICAgbmV3UG9zaXRpb24ueUNvb3JkICo9IHBvc2l0aW9uMi55Q29vcmQ7XG5cbiAgICBpZiAoY2hlY2tPdXRPZkJvdW5jZShuZXdQb3NpdGlvbikpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yLCBheGlzKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMVtheGlzXSA9PT0gcG9zaXRpb24yW2F4aXNdICsgMSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHBvc2l0aW9uMVtheGlzXSA9PT0gcG9zaXRpb24yW2F4aXNdKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAocG9zaXRpb24xW2F4aXNdID09PSBwb3NpdGlvbjJbYXhpc10gLSAxKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgY29tcGFyZVBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKCFjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsKHBvc2l0aW9uMSwgcG9zaXRpb24yLCAneENvb3JkJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsKHBvc2l0aW9uMSwgcG9zaXRpb24yLCAneUNvb3JkJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVQb3NpdGlvbixcbiAgICBhZGRQb3NpdGlvbixcbiAgICBtdWx0aXBseVBvc2l0aW9uLFxuICAgIGNvbXBhcmVQb3NpdGlvbixcbiAgICBjaGVja091dE9mQm91bmNlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zaXRpb247XG4iLCJjb25zdCBQcmFjdGljYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNvcHlBcnJheSA9IChhcnJheSkgPT4ge1xuICAgIGNvbnN0IG5ld0FycmF5ID0gW107XG5cbiAgICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBuZXdBcnJheS5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9O1xuXG4gIGNvbnN0IGlzT2JqZWN0ID0gKGN1cnJlbnRPYmplY3QpID0+IHtcbiAgICBpZiAodHlwZW9mIGN1cnJlbnRPYmplY3QgPT09ICdvYmplY3QnICYmIGN1cnJlbnRPYmplY3QgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tPYmplY3QgPSAob2JqZWN0MSwgb2JqZWN0MikgPT4ge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IHNlY29uZEluZGV4ID0gMDtcblxuICAgIGxldCBvYmplY3RJc0VxdWFsID0gdHJ1ZTtcblxuICAgIGNvbnN0IGN1cnJlbnRPYmplY3QgPSBvYmplY3QxO1xuICAgIGNvbnN0IGN1cnJlbnRPYmplY3QyID0gb2JqZWN0MjtcblxuICAgIGNvbnN0IGN1cnJlbnRPYmplY3RWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGN1cnJlbnRPYmplY3QpO1xuICAgIGNvbnN0IGN1cnJlbnRPYmplY3QyVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50T2JqZWN0Mik7XG5cbiAgICBjb25zdCBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMoY3VycmVudE9iamVjdCk7XG4gICAgY29uc3Qgb2JqZWN0S2V5czIgPSBPYmplY3Qua2V5cyhjdXJyZW50T2JqZWN0Mik7XG5cbiAgICBvYmplY3RLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGtleSAhPT0gb2JqZWN0S2V5czJbaW5kZXhdKSBvYmplY3RJc0VxdWFsID0gZmFsc2U7XG4gICAgICBpbmRleCArPSAxO1xuICAgIH0pO1xuXG4gICAgaWYgKCFvYmplY3RJc0VxdWFsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG9iamVjdEtleXMubGVuZ3RoICE9PSBvYmplY3RLZXlzMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRPYmplY3QsICd0aGUgY3VycmVudCBvYmplY3QnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50T2JqZWN0MiwgJ3RoZSBjdXJyZW50IG9iamVjdDInKTtcblxuICAgIGN1cnJlbnRPYmplY3RWYWx1ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgaXRlbTIgPSBjdXJyZW50T2JqZWN0MlZhbHVlc1tzZWNvbmRJbmRleF07XG5cbiAgICAgIGlmIChpc09iamVjdChpdGVtKSAmJiBpc09iamVjdChpdGVtMikpIHtcbiAgICAgICAgY29uc3QgY2hlY2tPYmplY3RCb29sID0gY2hlY2tPYmplY3QoaXRlbSwgaXRlbTIpO1xuXG4gICAgICAgIGlmICghY2hlY2tPYmplY3RCb29sKSBvYmplY3RJc0VxdWFsID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0gIT09IGl0ZW0yKSB7XG4gICAgICAgIG9iamVjdElzRXF1YWwgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgc2Vjb25kSW5kZXggKz0gMTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmplY3RJc0VxdWFsO1xuICB9O1xuXG4gIHJldHVybiB7IGNvcHlBcnJheSwgY2hlY2tPYmplY3QgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByYWN0aWNhbDtcbiIsImltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcblxuY29uc3QgU2hpcCA9ICgpID0+IHtcbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuXG4gIGNvbnN0IGdldEFkZGVkUG9zaXRpb24gPSAoYXhpcykgPT4ge1xuICAgIGxldCBhZGRlZFBvc2l0aW9uO1xuXG4gICAgaWYgKGF4aXMgPT09ICd4JykgYWRkZWRQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKDEsIDApO1xuICAgIGVsc2UgYWRkZWRQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKDAsIDEpO1xuXG4gICAgcmV0dXJuIGFkZGVkUG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlU2hpcCA9IChwb3NpdGlvbjEsIGxlbmd0aDEsIGF4aXMpID0+IHtcbiAgICBpZiAobGVuZ3RoMSA9PT0gMCB8fCBsZW5ndGgxID4gNSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwb3NpdGlvbi5jaGVja091dE9mQm91bmNlKHBvc2l0aW9uMSkpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHBvcHVsYXRlU2hpcHMgPSAoY3VycmVudFBvc2l0aW9uLCBsYXRlc3RMZW5ndGgsIGxhdGVzdEFycmF5KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50QXJyYXkgPSBsYXRlc3RBcnJheTtcbiAgICAgIGxldCBuZXdQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbjtcblxuICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmIChsYXRlc3RMZW5ndGggPT09IDApIHJldHVybiBjdXJyZW50QXJyYXk7XG4gICAgICBpZiAobGF0ZXN0TGVuZ3RoID09PSBsZW5ndGgxKSB7XG4gICAgICAgIGN1cnJlbnRBcnJheS5wdXNoKGN1cnJlbnRQb3NpdGlvbik7XG4gICAgICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKGN1cnJlbnRQb3NpdGlvbiwgbGF0ZXN0TGVuZ3RoIC0gMSwgY3VycmVudEFycmF5KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFkZGVkUG9zaXRpb24gPSBnZXRBZGRlZFBvc2l0aW9uKGF4aXMpO1xuICAgICAgbmV3UG9zaXRpb24gPSBwb3NpdGlvbi5hZGRQb3NpdGlvbihuZXdQb3NpdGlvbiwgYWRkZWRQb3NpdGlvbik7XG5cbiAgICAgIGlmICghbmV3UG9zaXRpb24pIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgICAgIGN1cnJlbnRBcnJheS5wdXNoKG5ld1Bvc2l0aW9uKTtcblxuICAgICAgY29uc3QgYXJyYXlMZW5ndGggPSBjdXJyZW50QXJyYXkubGVuZ3RoIC0gMTtcblxuICAgICAgcmV0dXJuIHBvcHVsYXRlU2hpcHMoXG4gICAgICAgIGN1cnJlbnRBcnJheVthcnJheUxlbmd0aF0sXG4gICAgICAgIGxhdGVzdExlbmd0aCAtIDEsXG4gICAgICAgIGN1cnJlbnRBcnJheVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHBvcHVsYXRlU2hpcHMocG9zaXRpb24xLCBsZW5ndGgxLCBbXSwgZmFsc2UpO1xuICB9O1xuXG5cblxuICBjb25zdCBpc1N1bmsgPSAoc2hpcEFycmF5KSA9PiB7XG4gICAgaWYgKHNoaXBBcnJheS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBoaXQgPSAocG9zaXRpb25zQXJyYXksIHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgaGl0QXJyYXkgPSBwb3NpdGlvbnNBcnJheS5maWx0ZXIoKHBvcykgPT4ge1xuICAgICAgaWYgKHBvcy54Q29vcmQgPT09IHBvc2l0aW9uLnhDb29yZCAmJiBwb3MueUNvb3JkID09PSBwb3NpdGlvbi55Q29vcmQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgY29uc3Qgc2hpcEFycmF5cyA9IHBvc2l0aW9uc0FycmF5LmZpbHRlcigocG9zKSA9PiB7XG4gICAgICBpZiAocG9zLnhDb29yZCA9PT0gcG9zaXRpb24ueENvb3JkICYmIHBvcy55Q29vcmQgPT09IHBvc2l0aW9uLnlDb29yZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IGhpdEFycmF5LCBzaGlwQXJyYXlzIH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVTaGlwLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIl0sIm5hbWVzIjpbIlBvc2l0aW9uIiwiU2hpcCIsIlByYWN0aWNhbCIsIkdhbWVib2FyZCIsInBvc2l0aW9uIiwic2hpcCIsInByYWN0aWNhbCIsImN1cnJlbnRTaGlwcyIsImhpdHMiLCJtaXNzZXMiLCJyYW5kb21pemUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21BeGlzIiwiYXhpZXMiLCJsZW5ndGgiLCJwbGFjZUFsbFNoaXBzIiwic2hpcHNBcnJheSIsImNvbXBhcmVTaGlwc0FycmF5IiwibGF0ZXN0U2hpcHNBcnJheSIsInNoaXBzIiwic2hpcHNEb0NvbGxpZGUiLCJmb3JFYWNoIiwibGF0ZXN0U2hpcHMiLCJib2F0IiwibGF0ZXN0Qm9hdCIsImNvbXBhcmVQb3NpdGlvbiIsInBsYXllclBsYWNlU2hpcCIsImxvY2F0aW9uIiwiYXhpcyIsImxhdGVzdFBvc2l0aW9uIiwiY3VycmVudEFycmF5IiwiY29weUFycmF5Iiwic2hpcGxlbmd0aCIsIm1lc3NhZ2UiLCJjdXJyZW50U2hpcCIsImNyZWF0ZVNoaXAiLCJzaGlwQXJyYXkiLCJpc0NvbGxpZGVkIiwicHVzaCIsInBsYWNlUmFuZG9tU2hpcHMiLCJyYW5kb21pemVyIiwicmFuZG9tQXhpZXMiLCJsYXRlc3RMZW5ndGgiLCJyYW5kb21Qb3NpdGlvbiIsImNyZWF0ZVBvc2l0aW9uIiwicmFuZG9tU2hpcCIsInNoaXBDb2xsaWRlcyIsInBsYWNlU2hpcHNSYW5kb21seSIsImF0dGFja1NoaXAiLCJjdXJyZW50SGl0cyIsImN1cnJlbnRNaXNzZXMiLCJpc0hpdCIsImxhdGVzdEhpdHMiLCJsYXRlc3RNaXNzZXMiLCJwb3NpdGlvbnNBcnJheSIsImhpdCIsImhpdEFycmF5Iiwic2hpcEFycmF5cyIsImZpbmFsT2JqZWN0IiwicmVjaWV2ZUF0dGFjayIsInJlc3VsdCIsImNyZWF0ZVJhbmRvbUNvb3JkcyIsImlzTW9ja1JhbmRvbSIsImNhbGxSYW5kb21pemVyIiwicmFuZG9tWCIsInJhbmRvbVkiLCJmaWx0ZXJBdHRhY2siLCJhcnJheSIsImN1cnJlbnRBdHRhY2siLCJjdXJyZW50QXR0YWNrQXJyYXkiLCJmaWx0ZXIiLCJpdGVtIiwieENvb3JkIiwieUNvb3JkIiwiZ2V0VHlwZU9mUGxhY2VkU2hpcCIsInNoaXBUeXBlcyIsInNoaXBUeXBlIiwic2hpcExlbmd0aCIsInJlY2lldmVSYW5kb21BdHRhY2siLCJoYXNCZWVuSGl0IiwiaGFzQmVlbk1pc3MiLCJpc0FsbFN1bmsiLCJoYXNTdW5rZWQiLCJpc1N1bmsiLCJnZXRWYWx1ZXMiLCJHYW1lIiwicGxheWVyQm9hcmQiLCJjb21wdXRlckJvYXJkIiwicGxheWVyQ2hlY2tCb2FyZCIsImNoZWNrU2V0dXAiLCJwbGF5ZXJDaGVja1NoaXBzIiwic2V0dXBHYW1lIiwicGxheWVyQ2hlY2tWYWx1ZXMiLCJhdHRhY2tCb2F0cyIsImNvb3JkcyIsInNldHVwU2hpcCIsImdhbWVJc092ZXIiLCJnYW1lRmluaXNoZWQiLCJhcnJhbmdlQmxvY2tzIiwibW91c2VQb3NpdGlvbiIsImN1cnJlbnRSb3RhdGlvbiIsInNoaXBUeXBlT2JqZWN0IiwiZ2V0R2FtZVZhbHVlcyIsImFjdGl2ZUdhbWUiLCJjaGVja091dE9mQm91bmNlIiwibmV3UG9zaXRpb24iLCJhZGRQb3NpdGlvbiIsInBvc2l0aW9uMSIsInBvc2l0aW9uMiIsIm11bHRpcGx5UG9zaXRpb24iLCJjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsIiwibmV3QXJyYXkiLCJpc09iamVjdCIsImN1cnJlbnRPYmplY3QiLCJjaGVja09iamVjdCIsIm9iamVjdDEiLCJvYmplY3QyIiwiaW5kZXgiLCJzZWNvbmRJbmRleCIsIm9iamVjdElzRXF1YWwiLCJjdXJyZW50T2JqZWN0MiIsImN1cnJlbnRPYmplY3RWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjdXJyZW50T2JqZWN0MlZhbHVlcyIsIm9iamVjdEtleXMiLCJrZXlzIiwib2JqZWN0S2V5czIiLCJrZXkiLCJpdGVtMiIsImNoZWNrT2JqZWN0Qm9vbCIsImdldEFkZGVkUG9zaXRpb24iLCJhZGRlZFBvc2l0aW9uIiwibGVuZ3RoMSIsInBvcHVsYXRlU2hpcHMiLCJjdXJyZW50UG9zaXRpb24iLCJsYXRlc3RBcnJheSIsImFycmF5TGVuZ3RoIiwicG9zIl0sInNvdXJjZVJvb3QiOiIifQ==