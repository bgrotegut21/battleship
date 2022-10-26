"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["gameboard"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/gameboard.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQVA7SUFDRCxDQUxrQixDQUFuQjtJQU9BLE9BQU87TUFBRWMsUUFBUSxFQUFSQSxRQUFGO01BQVlDLFVBQVUsRUFBVkE7SUFBWixDQUFQO0VBQ0QsQ0FmRDs7RUFpQkEsT0FBTztJQUNMbEMsVUFBVSxFQUFWQSxVQURLO0lBRUxnQyxHQUFHLEVBQUhBLEdBRks7SUFHTGUsTUFBTSxFQUFOQTtFQUhLLENBQVA7QUFLRCxDQXpFRDs7QUEyRUEsaUVBQWVyRixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3ByYWN0aWNhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IFByYWN0aWNhbCBmcm9tICcuL3ByYWN0aWNhbC5qcyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuICBjb25zdCBzaGlwID0gU2hpcCgpO1xuICBjb25zdCBwcmFjdGljYWwgPSBQcmFjdGljYWwoKTtcblxuICBsZXQgY3VycmVudFNoaXBzID0gW107XG4gIGxldCBoaXRzID0gW107XG4gIGxldCBtaXNzZXMgPSBbXTtcblxuICBjb25zdCByYW5kb21pemUgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgY29uc3QgcmFuZG9tQXhpcyA9ICgpID0+IHtcbiAgICBjb25zdCBheGllcyA9IFsneCcsICd5J107XG4gICAgcmV0dXJuIGF4aWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF4aWVzLmxlbmd0aCldO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlQWxsU2hpcHMgPSAoc2hpcHNBcnJheSkgPT4ge1xuICAgIGN1cnJlbnRTaGlwcyA9IHNoaXBzQXJyYXk7XG4gICAgcmV0dXJuIGN1cnJlbnRTaGlwcztcbiAgfTtcblxuICBjb25zdCBjb21wYXJlU2hpcHNBcnJheSA9IChsYXRlc3RTaGlwc0FycmF5LCBzaGlwcykgPT4ge1xuICAgIGxldCBzaGlwc0RvQ29sbGlkZSA9IGZhbHNlO1xuICAgIGlmICghc2hpcHMpIHJldHVybiBzaGlwc0RvQ29sbGlkZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGxhdGVzdFNoaXBzQXJyYXksICd0aGUgY3VycmVlbnQgc2hpcHMgYXJyYXknKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwcywgJ3RoZSBjdXJyZW50IHNoaXBzJyk7XG5cbiAgICBsYXRlc3RTaGlwc0FycmF5LmZvckVhY2goKGxhdGVzdFNoaXBzKSA9PiB7XG4gICAgICBsYXRlc3RTaGlwcy5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKGxhdGVzdEJvYXQpID0+IHtcbiAgICAgICAgICBpZiAocG9zaXRpb24uY29tcGFyZVBvc2l0aW9uKGJvYXQsIGxhdGVzdEJvYXQpKSB7XG4gICAgICAgICAgICBzaGlwc0RvQ29sbGlkZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBzRG9Db2xsaWRlO1xuICB9O1xuXG4gIGNvbnN0IGdldFR5cGVPZlBsYWNlZFNoaXAgPSAoc2hpcEFycmF5KSA9PiB7XG4gICAgaWYgKHNoaXBBcnJheS5sZW5ndGggPT09IDUpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHNoaXBUeXBlcyA9IFtcbiAgICAgIHsgc2hpcFR5cGU6ICdjYXJyaWVyJywgc2hpcExlbmd0aDogNSB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2JhdHRsZXNoaXAnLCBzaGlwTGVuZ3RoOiA0IH0sXG4gICAgICB7IHNoaXBUeXBlOiAnZGVzdG95ZXInLCBzaGlwTGVuZ3RoOiAzIH0sXG4gICAgICB7IHNoaXBUeXBlOiAnc3VibWFyaW5lJywgc2hpcExlbmd0aDogMyB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2d1bmJvYXQnLCBzaGlwTGVuZ3RoOiAyIH0sXG4gICAgXTtcblxuICAgIHJldHVybiBzaGlwVHlwZXNbc2hpcEFycmF5Lmxlbmd0aF07XG4gIH07XG5cbiAgY29uc3QgcGxheWVyUGxhY2VTaGlwID0gKGxvY2F0aW9uLCBheGlzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEFycmF5ID0gcHJhY3RpY2FsLmNvcHlBcnJheShjdXJyZW50U2hpcHMpO1xuXG4gICAgY29uc3Qgc2hpcFR5cGUgPSBnZXRUeXBlT2ZQbGFjZWRTaGlwKGN1cnJlbnRBcnJheSk7XG5cbiAgICBjb25zdCBsYXRlc3RTaGlwID0gc2hpcC5jcmVhdGVTaGlwKGxvY2F0aW9uLCBzaGlwVHlwZS5zaGlwTGVuZ3RoLCBheGlzKTtcblxuICAgIGNvbnN0IGlzQ29sbGlkZWQgPSBjb21wYXJlU2hpcHNBcnJheShjdXJyZW50QXJyYXksIGxhdGVzdFNoaXApO1xuXG4gICAgaWYgKHNoaXBUeXBlICYmIGxhdGVzdFNoaXAgJiYgIWlzQ29sbGlkZWQpIHtcbiAgICAgIGN1cnJlbnRBcnJheS5wdXNoKGxhdGVzdFNoaXApO1xuICAgIH1cblxuICAgIGN1cnJlbnRTaGlwcyA9IGN1cnJlbnRBcnJheTtcbiAgICByZXR1cm4gY3VycmVudEFycmF5O1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUmFuZG9tU2hpcHMgPSAoc2hpcHNBcnJheSwgcmFuZG9taXplciwgcmFuZG9tQXhpZXMpID0+IHtcbiAgICBjb25zdCBsYXRlc3RTaGlwc0FycmF5ID0gc2hpcHNBcnJheTtcbiAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHJhbmRvbWl6ZXIoKSwgcmFuZG9taXplcigpKTtcbiAgICBjb25zdCBzaGlwVHlwZSA9IGdldFR5cGVPZlBsYWNlZFNoaXAobGF0ZXN0U2hpcHNBcnJheSk7XG4gICAgaWYgKCFzaGlwVHlwZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coc2hpcFR5cGUpO1xuICAgICAgLy8gY29uc29sZS5sb2cobGF0ZXN0U2hpcHNBcnJheSwgJ3RoZSBsYXRlc3Qgc2hpcHMgYXJyYXknKTtcblxuICAgICAgcmV0dXJuIGxhdGVzdFNoaXBzQXJyYXk7XG4gICAgfVxuXG4gICAgY29uc3QgbGF0ZXN0TGVuZ3RoID0gc2hpcFR5cGUuc2hpcExlbmd0aDtcblxuICAgIGNvbnN0IHJhbmRvbVNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAoXG4gICAgICByYW5kb21Qb3NpdGlvbixcbiAgICAgIGxhdGVzdExlbmd0aCxcbiAgICAgIHJhbmRvbUF4aWVzKClcbiAgICApO1xuXG4gICAgY29uc3Qgc2hpcENvbGxpZGVzID0gY29tcGFyZVNoaXBzQXJyYXkobGF0ZXN0U2hpcHNBcnJheSwgcmFuZG9tU2hpcCk7XG4gICAgaWYgKHJhbmRvbVNoaXAgJiYgIXNoaXBDb2xsaWRlcykgbGF0ZXN0U2hpcHNBcnJheS5wdXNoKHJhbmRvbVNoaXApO1xuXG4gICAgcmV0dXJuIHBsYWNlUmFuZG9tU2hpcHMobGF0ZXN0U2hpcHNBcnJheSwgcmFuZG9taXplciwgcmFuZG9tQXhpZXMpO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcHNSYW5kb21seSA9IChyYW5kb21pemVyLCByYW5kb21BeGllcykgPT4ge1xuICAgIGNvbnN0IHNoaXBzQXJyYXkgPSBwbGFjZVJhbmRvbVNoaXBzKFtdLCByYW5kb21pemVyLCByYW5kb21BeGllcyk7XG4gICAgY3VycmVudFNoaXBzID0gc2hpcHNBcnJheTtcblxuICAgIHJldHVybiBzaGlwc0FycmF5O1xuICB9O1xuICBjb25zdCBmaWx0ZXJBdHRhY2sgPSAoYXJyYXksIGN1cnJlbnRBdHRhY2spID0+IHtcbiAgICBjb25zdCBjdXJyZW50QXR0YWNrQXJyYXkgPSBhcnJheS5maWx0ZXIoXG4gICAgICAoaXRlbSkgPT5cbiAgICAgICAgaXRlbS54Q29vcmQgPT09IGN1cnJlbnRBdHRhY2sueENvb3JkICYmXG4gICAgICAgIGl0ZW0ueUNvb3JkID09PSBjdXJyZW50QXR0YWNrLnlDb29yZFxuICAgICk7XG5cbiAgICByZXR1cm4gY3VycmVudEF0dGFja0FycmF5O1xuICB9O1xuXG4gIGNvbnN0IGhhc0hpdFNoaXAgPSAoaGl0UG9zaXRpb24sIGxhdGVzdEhpdHMsIGxhdGVzdE1pc3NlcykgPT4ge1xuICAgIGNvbnN0IGhhc0JlZW5IaXQgPSBmaWx0ZXJBdHRhY2sobGF0ZXN0SGl0cywgaGl0UG9zaXRpb24pO1xuICAgIGNvbnN0IGhhc0JlZW5NaXNzID0gZmlsdGVyQXR0YWNrKGxhdGVzdE1pc3NlcywgaGl0UG9zaXRpb24pO1xuXG4gICAgaWYgKGhhc0JlZW5IaXQubGVuZ3RoID4gMCB8fCBoYXNCZWVuTWlzcy5sZW5ndGggPiAwKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrU2hpcCA9IChsYXRlc3RQb3NpdGlvbiwgc2hpcHMsIGN1cnJlbnRIaXRzLCBjdXJyZW50TWlzc2VzKSA9PiB7XG4gICAgbGV0IGlzSGl0ID0gZmFsc2U7XG4gICAgY29uc3QgbGF0ZXN0U2hpcHNBcnJheSA9IFtdO1xuICAgIGNvbnN0IGxhdGVzdEhpdHMgPSBjdXJyZW50SGl0cztcbiAgICBjb25zdCBsYXRlc3RNaXNzZXMgPSBjdXJyZW50TWlzc2VzO1xuXG4gICAgaWYgKCFsYXRlc3RQb3NpdGlvbikgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChoYXNIaXRTaGlwKGxhdGVzdFBvc2l0aW9uLCBjdXJyZW50SGl0cywgY3VycmVudE1pc3NlcykpIHJldHVybiBmYWxzZTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXBBcnJheSkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uc0FycmF5ID0gcHJhY3RpY2FsLmNvcHlBcnJheShzaGlwQXJyYXkpO1xuICAgICAgY29uc3QgaGl0ID0gc2hpcC5oaXQocG9zaXRpb25zQXJyYXksIGxhdGVzdFBvc2l0aW9uKTtcblxuICAgICAgaWYgKGhpdC5oaXRBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaXNIaXQgPSB0cnVlO1xuICAgICAgICBwb3NpdGlvbnNBcnJheSA9IGhpdC5zaGlwQXJyYXlzO1xuICAgICAgICBsYXRlc3RIaXRzLnB1c2goaGl0LmhpdEFycmF5WzBdKTtcbiAgICAgIH1cbiAgICAgIGxhdGVzdFNoaXBzQXJyYXkucHVzaChwb3NpdGlvbnNBcnJheSk7XG4gICAgfSk7XG4gICAgaWYgKCFpc0hpdCkgbGF0ZXN0TWlzc2VzLnB1c2gobGF0ZXN0UG9zaXRpb24pO1xuXG4gICAgY29uc3QgZmluYWxPYmplY3QgPSB7XG4gICAgICBpc0hpdCxcbiAgICAgIGxhdGVzdFNoaXBzQXJyYXksXG4gICAgICBsYXRlc3RIaXRzLFxuICAgICAgbGF0ZXN0TWlzc2VzLFxuICAgIH07XG5cbiAgICByZXR1cm4gZmluYWxPYmplY3Q7XG4gIH07XG5cbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChsYXRlc3RQb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF0dGFja1NoaXAobGF0ZXN0UG9zaXRpb24sIGN1cnJlbnRTaGlwcywgaGl0cywgbWlzc2VzKTtcbiAgICBpZiAoIXJlc3VsdCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY3VycmVudFNoaXBzID0gcmVzdWx0LmxhdGVzdFNoaXBzQXJyYXk7XG4gICAgaGl0cyA9IHJlc3VsdC5sYXRlc3RIaXRzO1xuICAgIG1pc3NlcyA9IHJlc3VsdC5sYXRlc3RNaXNzZXM7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVJhbmRvbUNvb3JkcyA9IChyYW5kb21pemVyKSA9PiB7XG4gICAgbGV0IHJhbmRvbVBvc2l0aW9uO1xuXG4gICAgaWYgKHJhbmRvbWl6ZXIuaXNNb2NrUmFuZG9tKSB7XG4gICAgICByYW5kb21Qb3NpdGlvbiA9IHJhbmRvbWl6ZXIuY2FsbFJhbmRvbWl6ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmFuZG9tWCA9IHJhbmRvbWl6ZXIoKTtcbiAgICAgIGNvbnN0IHJhbmRvbVkgPSByYW5kb21pemVyKCk7XG4gICAgICByYW5kb21Qb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHJhbmRvbVgsIHJhbmRvbVkpO1xuICAgIH1cblxuICAgIHJldHVybiByYW5kb21Qb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlUmFuZG9tQXR0YWNrID0gKHJhbmRvbWl6ZXIpID0+IHtcbiAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IGNyZWF0ZVJhbmRvbUNvb3JkcyhyYW5kb21pemVyKTtcbiAgICBjb25zdCBoYXNIaXQgPSBoYXNIaXRTaGlwKHJhbmRvbVBvc2l0aW9uLCBoaXRzLCBtaXNzZXMpO1xuXG4gICAgaWYgKGhhc0hpdCkgcmV0dXJuIHJlY2lldmVSYW5kb21BdHRhY2socmFuZG9taXplcik7XG5cbiAgICByZXR1cm4gcmVjaWV2ZUF0dGFjayhyYW5kb21Qb3NpdGlvbik7XG4gIH07XG5cbiAgY29uc3QgaXNBbGxTdW5rID0gKCkgPT4ge1xuICAgIGxldCBoYXNTdW5rZWQgPSB0cnVlO1xuICAgIGN1cnJlbnRTaGlwcy5mb3JFYWNoKChzaGlwcykgPT4ge1xuICAgICAgaWYgKCFzaGlwLmlzU3VuayhzaGlwcykpIHtcbiAgICAgICAgaGFzU3Vua2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaGFzU3Vua2VkO1xuICB9O1xuXG4gIGNvbnN0IGdldFZhbHVlcyA9ICgpID0+ICh7XG4gICAgY3VycmVudFNoaXBzLFxuICAgIGhpdHMsXG4gICAgbWlzc2VzLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGF0dGFja1NoaXAsXG4gICAgcmVjaWV2ZUF0dGFjayxcbiAgICBpc0FsbFN1bmssXG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5LFxuICAgIHBsYXllclBsYWNlU2hpcCxcbiAgICBwbGFjZUFsbFNoaXBzLFxuICAgIHJhbmRvbWl6ZSxcbiAgICByZWNpZXZlUmFuZG9tQXR0YWNrLFxuICAgIHJhbmRvbUF4aXMsXG4gICAgZ2V0VmFsdWVzLFxuICAgIGdldFR5cGVPZlBsYWNlZFNoaXAsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjb25zdCBQb3NpdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgY3JlYXRlUG9zaXRpb24gPSAoeENvb3JkLCB5Q29vcmQpID0+ICh7IHhDb29yZCwgeUNvb3JkIH0pO1xuXG4gIGNvbnN0IGNoZWNrT3V0T2ZCb3VuY2UgPSAobmV3UG9zaXRpb24pID0+IHtcbiAgICBpZiAobmV3UG9zaXRpb24ueENvb3JkID4gOSB8fCBuZXdQb3NpdGlvbi55Q29vcmQgPiA5KSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAobmV3UG9zaXRpb24ueENvb3JkIDwgMCB8fCBuZXdQb3NpdGlvbi55Q29vcmQgPCAwKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYWRkUG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAocG9zaXRpb24xID09PSBmYWxzZSB8fCBwb3NpdGlvbjIgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGNyZWF0ZVBvc2l0aW9uKHBvc2l0aW9uMS54Q29vcmQsIHBvc2l0aW9uMS55Q29vcmQpO1xuICAgIG5ld1Bvc2l0aW9uLnhDb29yZCArPSBwb3NpdGlvbjIueENvb3JkO1xuICAgIG5ld1Bvc2l0aW9uLnlDb29yZCArPSBwb3NpdGlvbjIueUNvb3JkO1xuXG4gICAgaWYgKGNoZWNrT3V0T2ZCb3VuY2UobmV3UG9zaXRpb24pKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbmV3UG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgbXVsdGlwbHlQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmIChwb3NpdGlvbjEgPT09IGZhbHNlIHx8IHBvc2l0aW9uMiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gY3JlYXRlUG9zaXRpb24ocG9zaXRpb24xLnhDb29yZCwgcG9zaXRpb24xLnlDb29yZCk7XG4gICAgbmV3UG9zaXRpb24ueENvb3JkICo9IHBvc2l0aW9uMi54Q29vcmQ7XG4gICAgbmV3UG9zaXRpb24ueUNvb3JkICo9IHBvc2l0aW9uMi55Q29vcmQ7XG5cbiAgICBpZiAoY2hlY2tPdXRPZkJvdW5jZShuZXdQb3NpdGlvbikpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yLCBheGlzKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMVtheGlzXSA9PT0gcG9zaXRpb24yW2F4aXNdICsgMSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHBvc2l0aW9uMVtheGlzXSA9PT0gcG9zaXRpb24yW2F4aXNdKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAocG9zaXRpb24xW2F4aXNdID09PSBwb3NpdGlvbjJbYXhpc10gLSAxKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgY29tcGFyZVBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKCFjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsKHBvc2l0aW9uMSwgcG9zaXRpb24yLCAneENvb3JkJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsKHBvc2l0aW9uMSwgcG9zaXRpb24yLCAneUNvb3JkJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVQb3NpdGlvbixcbiAgICBhZGRQb3NpdGlvbixcbiAgICBtdWx0aXBseVBvc2l0aW9uLFxuICAgIGNvbXBhcmVQb3NpdGlvbixcbiAgICBjaGVja091dE9mQm91bmNlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zaXRpb247XG4iLCJjb25zdCBQcmFjdGljYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNvcHlBcnJheSA9IChhcnJheSkgPT4ge1xuICAgIGNvbnN0IG5ld0FycmF5ID0gW107XG5cbiAgICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBuZXdBcnJheS5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9O1xuXG4gIGNvbnN0IGlzT2JqZWN0ID0gKGN1cnJlbnRPYmplY3QpID0+IHtcbiAgICBpZiAodHlwZW9mIGN1cnJlbnRPYmplY3QgPT09ICdvYmplY3QnICYmIGN1cnJlbnRPYmplY3QgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tPYmplY3QgPSAob2JqZWN0MSwgb2JqZWN0MikgPT4ge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IHNlY29uZEluZGV4ID0gMDtcblxuICAgIGxldCBvYmplY3RJc0VxdWFsID0gdHJ1ZTtcblxuICAgIGNvbnN0IGN1cnJlbnRPYmplY3QgPSBvYmplY3QxO1xuICAgIGNvbnN0IGN1cnJlbnRPYmplY3QyID0gb2JqZWN0MjtcblxuICAgIGNvbnN0IGN1cnJlbnRPYmplY3RWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGN1cnJlbnRPYmplY3QpO1xuICAgIGNvbnN0IGN1cnJlbnRPYmplY3QyVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50T2JqZWN0Mik7XG5cbiAgICBjb25zdCBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMoY3VycmVudE9iamVjdCk7XG4gICAgY29uc3Qgb2JqZWN0S2V5czIgPSBPYmplY3Qua2V5cyhjdXJyZW50T2JqZWN0Mik7XG5cbiAgICBvYmplY3RLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGtleSAhPT0gb2JqZWN0S2V5czJbaW5kZXhdKSBvYmplY3RJc0VxdWFsID0gZmFsc2U7XG4gICAgICBpbmRleCArPSAxO1xuICAgIH0pO1xuXG4gICAgaWYgKCFvYmplY3RJc0VxdWFsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG9iamVjdEtleXMubGVuZ3RoICE9PSBvYmplY3RLZXlzMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRPYmplY3QsICd0aGUgY3VycmVudCBvYmplY3QnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50T2JqZWN0MiwgJ3RoZSBjdXJyZW50IG9iamVjdDInKTtcblxuICAgIGN1cnJlbnRPYmplY3RWYWx1ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgaXRlbTIgPSBjdXJyZW50T2JqZWN0MlZhbHVlc1tzZWNvbmRJbmRleF07XG5cbiAgICAgIGlmIChpc09iamVjdChpdGVtKSAmJiBpc09iamVjdChpdGVtMikpIHtcbiAgICAgICAgY29uc3QgY2hlY2tPYmplY3RCb29sID0gY2hlY2tPYmplY3QoaXRlbSwgaXRlbTIpO1xuXG4gICAgICAgIGlmICghY2hlY2tPYmplY3RCb29sKSBvYmplY3RJc0VxdWFsID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0gIT09IGl0ZW0yKSB7XG4gICAgICAgIG9iamVjdElzRXF1YWwgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgc2Vjb25kSW5kZXggKz0gMTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmplY3RJc0VxdWFsO1xuICB9O1xuXG4gIHJldHVybiB7IGNvcHlBcnJheSwgY2hlY2tPYmplY3QgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByYWN0aWNhbDtcbiIsImltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcblxuY29uc3QgU2hpcCA9ICgpID0+IHtcbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuXG4gIGNvbnN0IGdldEFkZGVkUG9zaXRpb24gPSAoYXhpcykgPT4ge1xuICAgIGxldCBhZGRlZFBvc2l0aW9uO1xuXG4gICAgaWYgKGF4aXMgPT09ICd4JykgYWRkZWRQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKDEsIDApO1xuICAgIGVsc2UgYWRkZWRQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKDAsIDEpO1xuXG4gICAgcmV0dXJuIGFkZGVkUG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlU2hpcCA9IChwb3NpdGlvbjEsIGxlbmd0aDEsIGF4aXMpID0+IHtcbiAgICBpZiAobGVuZ3RoMSA9PT0gMCB8fCBsZW5ndGgxID4gNSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwb3NpdGlvbi5jaGVja091dE9mQm91bmNlKHBvc2l0aW9uMSkpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHBvcHVsYXRlU2hpcHMgPSAoY3VycmVudFBvc2l0aW9uLCBsYXRlc3RMZW5ndGgsIGxhdGVzdEFycmF5KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50QXJyYXkgPSBsYXRlc3RBcnJheTtcbiAgICAgIGxldCBuZXdQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbjtcblxuICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmIChsYXRlc3RMZW5ndGggPT09IDApIHJldHVybiBjdXJyZW50QXJyYXk7XG4gICAgICBpZiAobGF0ZXN0TGVuZ3RoID09PSBsZW5ndGgxKSB7XG4gICAgICAgIGN1cnJlbnRBcnJheS5wdXNoKGN1cnJlbnRQb3NpdGlvbik7XG4gICAgICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKGN1cnJlbnRQb3NpdGlvbiwgbGF0ZXN0TGVuZ3RoIC0gMSwgY3VycmVudEFycmF5KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFkZGVkUG9zaXRpb24gPSBnZXRBZGRlZFBvc2l0aW9uKGF4aXMpO1xuICAgICAgbmV3UG9zaXRpb24gPSBwb3NpdGlvbi5hZGRQb3NpdGlvbihuZXdQb3NpdGlvbiwgYWRkZWRQb3NpdGlvbik7XG5cbiAgICAgIGlmICghbmV3UG9zaXRpb24pIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgICAgIGN1cnJlbnRBcnJheS5wdXNoKG5ld1Bvc2l0aW9uKTtcblxuICAgICAgY29uc3QgYXJyYXlMZW5ndGggPSBjdXJyZW50QXJyYXkubGVuZ3RoIC0gMTtcblxuICAgICAgcmV0dXJuIHBvcHVsYXRlU2hpcHMoXG4gICAgICAgIGN1cnJlbnRBcnJheVthcnJheUxlbmd0aF0sXG4gICAgICAgIGxhdGVzdExlbmd0aCAtIDEsXG4gICAgICAgIGN1cnJlbnRBcnJheVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHBvcHVsYXRlU2hpcHMocG9zaXRpb24xLCBsZW5ndGgxLCBbXSwgZmFsc2UpO1xuICB9O1xuXG5cblxuICBjb25zdCBpc1N1bmsgPSAoc2hpcEFycmF5KSA9PiB7XG4gICAgaWYgKHNoaXBBcnJheS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBoaXQgPSAocG9zaXRpb25zQXJyYXksIHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgaGl0QXJyYXkgPSBwb3NpdGlvbnNBcnJheS5maWx0ZXIoKHBvcykgPT4ge1xuICAgICAgaWYgKHBvcy54Q29vcmQgPT09IHBvc2l0aW9uLnhDb29yZCAmJiBwb3MueUNvb3JkID09PSBwb3NpdGlvbi55Q29vcmQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgY29uc3Qgc2hpcEFycmF5cyA9IHBvc2l0aW9uc0FycmF5LmZpbHRlcigocG9zKSA9PiB7XG4gICAgICBpZiAocG9zLnhDb29yZCA9PT0gcG9zaXRpb24ueENvb3JkICYmIHBvcy55Q29vcmQgPT09IHBvc2l0aW9uLnlDb29yZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IGhpdEFycmF5LCBzaGlwQXJyYXlzIH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVTaGlwLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIl0sIm5hbWVzIjpbIlBvc2l0aW9uIiwiU2hpcCIsIlByYWN0aWNhbCIsIkdhbWVib2FyZCIsInBvc2l0aW9uIiwic2hpcCIsInByYWN0aWNhbCIsImN1cnJlbnRTaGlwcyIsImhpdHMiLCJtaXNzZXMiLCJyYW5kb21pemUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21BeGlzIiwiYXhpZXMiLCJsZW5ndGgiLCJwbGFjZUFsbFNoaXBzIiwic2hpcHNBcnJheSIsImNvbXBhcmVTaGlwc0FycmF5IiwibGF0ZXN0U2hpcHNBcnJheSIsInNoaXBzIiwic2hpcHNEb0NvbGxpZGUiLCJmb3JFYWNoIiwibGF0ZXN0U2hpcHMiLCJib2F0IiwibGF0ZXN0Qm9hdCIsImNvbXBhcmVQb3NpdGlvbiIsImdldFR5cGVPZlBsYWNlZFNoaXAiLCJzaGlwQXJyYXkiLCJzaGlwVHlwZXMiLCJzaGlwVHlwZSIsInNoaXBMZW5ndGgiLCJwbGF5ZXJQbGFjZVNoaXAiLCJsb2NhdGlvbiIsImF4aXMiLCJjdXJyZW50QXJyYXkiLCJjb3B5QXJyYXkiLCJsYXRlc3RTaGlwIiwiY3JlYXRlU2hpcCIsImlzQ29sbGlkZWQiLCJwdXNoIiwicGxhY2VSYW5kb21TaGlwcyIsInJhbmRvbWl6ZXIiLCJyYW5kb21BeGllcyIsInJhbmRvbVBvc2l0aW9uIiwiY3JlYXRlUG9zaXRpb24iLCJsYXRlc3RMZW5ndGgiLCJyYW5kb21TaGlwIiwic2hpcENvbGxpZGVzIiwicGxhY2VTaGlwc1JhbmRvbWx5IiwiZmlsdGVyQXR0YWNrIiwiYXJyYXkiLCJjdXJyZW50QXR0YWNrIiwiY3VycmVudEF0dGFja0FycmF5IiwiZmlsdGVyIiwiaXRlbSIsInhDb29yZCIsInlDb29yZCIsImhhc0hpdFNoaXAiLCJoaXRQb3NpdGlvbiIsImxhdGVzdEhpdHMiLCJsYXRlc3RNaXNzZXMiLCJoYXNCZWVuSGl0IiwiaGFzQmVlbk1pc3MiLCJhdHRhY2tTaGlwIiwibGF0ZXN0UG9zaXRpb24iLCJjdXJyZW50SGl0cyIsImN1cnJlbnRNaXNzZXMiLCJpc0hpdCIsInBvc2l0aW9uc0FycmF5IiwiaGl0IiwiaGl0QXJyYXkiLCJzaGlwQXJyYXlzIiwiZmluYWxPYmplY3QiLCJyZWNpZXZlQXR0YWNrIiwicmVzdWx0IiwiY3JlYXRlUmFuZG9tQ29vcmRzIiwiaXNNb2NrUmFuZG9tIiwiY2FsbFJhbmRvbWl6ZXIiLCJyYW5kb21YIiwicmFuZG9tWSIsInJlY2lldmVSYW5kb21BdHRhY2siLCJoYXNIaXQiLCJpc0FsbFN1bmsiLCJoYXNTdW5rZWQiLCJpc1N1bmsiLCJnZXRWYWx1ZXMiLCJjaGVja091dE9mQm91bmNlIiwibmV3UG9zaXRpb24iLCJhZGRQb3NpdGlvbiIsInBvc2l0aW9uMSIsInBvc2l0aW9uMiIsIm11bHRpcGx5UG9zaXRpb24iLCJjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsIiwibmV3QXJyYXkiLCJpc09iamVjdCIsImN1cnJlbnRPYmplY3QiLCJjaGVja09iamVjdCIsIm9iamVjdDEiLCJvYmplY3QyIiwiaW5kZXgiLCJzZWNvbmRJbmRleCIsIm9iamVjdElzRXF1YWwiLCJjdXJyZW50T2JqZWN0MiIsImN1cnJlbnRPYmplY3RWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjdXJyZW50T2JqZWN0MlZhbHVlcyIsIm9iamVjdEtleXMiLCJrZXlzIiwib2JqZWN0S2V5czIiLCJrZXkiLCJpdGVtMiIsImNoZWNrT2JqZWN0Qm9vbCIsImdldEFkZGVkUG9zaXRpb24iLCJhZGRlZFBvc2l0aW9uIiwibGVuZ3RoMSIsInBvcHVsYXRlU2hpcHMiLCJjdXJyZW50UG9zaXRpb24iLCJsYXRlc3RBcnJheSIsImFycmF5TGVuZ3RoIiwicG9zIl0sInNvdXJjZVJvb3QiOiIifQ==