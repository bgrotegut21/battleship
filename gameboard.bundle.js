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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXNFO1FBQ3BFLE9BQU8sS0FBUDtNQUNEOztNQUNELE9BQU8sSUFBUDtJQUNELENBTGtCLENBQW5CO0lBT0EsT0FBTztNQUFFakIsUUFBUSxFQUFSQSxRQUFGO01BQVlDLFVBQVUsRUFBVkE7SUFBWixDQUFQO0VBQ0QsQ0FmRDs7RUFpQkEsT0FBTztJQUNMdEIsVUFBVSxFQUFWQSxVQURLO0lBRUxvQixHQUFHLEVBQUhBLEdBRks7SUFHTDRCLE1BQU0sRUFBTkE7RUFISyxDQUFQO0FBS0QsQ0F6RUQ7O0FBMkVBLGlFQUFlcEYsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3Bvc2l0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wcmFjdGljYWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCBQcmFjdGljYWwgZnJvbSAnLi9wcmFjdGljYWwuanMnO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcbiAgY29uc3Qgc2hpcCA9IFNoaXAoKTtcbiAgY29uc3QgcHJhY3RpY2FsID0gUHJhY3RpY2FsKCk7XG5cbiAgbGV0IGN1cnJlbnRTaGlwcyA9IFtdO1xuICBsZXQgaGl0cyA9IFtdO1xuICBsZXQgbWlzc2VzID0gW107XG5cbiAgY29uc3QgcmFuZG9taXplID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gIGNvbnN0IHJhbmRvbUF4aXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXhpZXMgPSBbJ3gnLCAneSddO1xuICAgIHJldHVybiBheGllc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBheGllcy5sZW5ndGgpXTtcbiAgfTtcblxuICBjb25zdCBwbGFjZUFsbFNoaXBzID0gKHNoaXBzQXJyYXkpID0+IHtcbiAgICBjdXJyZW50U2hpcHMgPSBzaGlwc0FycmF5O1xuICAgIHJldHVybiBjdXJyZW50U2hpcHM7XG4gIH07XG5cbiAgY29uc3QgY29tcGFyZVNoaXBzQXJyYXkgPSAobGF0ZXN0U2hpcHNBcnJheSwgc2hpcHMpID0+IHtcbiAgICBsZXQgc2hpcHNEb0NvbGxpZGUgPSBmYWxzZTtcbiAgICAvLyBjb25zb2xlLmxvZyhsYXRlc3RTaGlwc0FycmF5LCAndGhlIGN1cnJlZW50IHNoaXBzIGFycmF5Jyk7XG4gICAgLy8gY29uc29sZS5sb2coc2hpcHMsICd0aGUgY3VycmVudCBzaGlwcycpO1xuXG4gICAgbGF0ZXN0U2hpcHNBcnJheS5mb3JFYWNoKChsYXRlc3RTaGlwcykgPT4ge1xuICAgICAgbGF0ZXN0U2hpcHMuZm9yRWFjaCgoYm9hdCkgPT4ge1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChsYXRlc3RCb2F0KSA9PiB7XG4gICAgICAgICAgaWYgKHBvc2l0aW9uLmNvbXBhcmVQb3NpdGlvbihib2F0LCBsYXRlc3RCb2F0KSkge1xuICAgICAgICAgICAgc2hpcHNEb0NvbGxpZGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaGlwc0RvQ29sbGlkZTtcbiAgfTtcblxuICBjb25zdCBwbGF5ZXJQbGFjZVNoaXAgPSAobG9jYXRpb24sIGF4aXMpID0+IHtcbiAgICBjb25zdCBsYXRlc3RQb3NpdGlvbiA9IGxvY2F0aW9uO1xuICAgIGNvbnN0IGN1cnJlbnRBcnJheSA9IHByYWN0aWNhbC5jb3B5QXJyYXkoY3VycmVudFNoaXBzKTtcblxuICAgIGxldCBzaGlwbGVuZ3RoID0gNSAtIGN1cnJlbnRBcnJheS5sZW5ndGg7XG5cbiAgICBpZiAoY3VycmVudEFycmF5Lmxlbmd0aCA+IDMpIHNoaXBsZW5ndGggPSAyO1xuXG4gICAgaWYgKGN1cnJlbnRBcnJheS5sZW5ndGggPT09IDUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNoaXBzQXJyYXk6IGN1cnJlbnRBcnJheSxcbiAgICAgICAgbWVzc2FnZTogJ1lvdSBoYXZlIGFscmVhZHkgcGxhY2VkIGFsbCBvZiB5b3VyIHNoaXBzJyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAobGF0ZXN0UG9zaXRpb24sIHNoaXBsZW5ndGgsIGF4aXMpO1xuICAgIGlmICghY3VycmVudFNoaXApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNoaXBBcnJheTogY3VycmVudEFycmF5LFxuICAgICAgICBtZXNzYWdlOiAnWW91IGNhbm5vdCBwbGFjZSBhIHNoaXAgdGhlcmUnLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0NvbGxpZGVkID0gY29tcGFyZVNoaXBzQXJyYXkoY3VycmVudEFycmF5LCBjdXJyZW50U2hpcCk7XG5cbiAgICBpZiAoIWlzQ29sbGlkZWQpIHtcbiAgICAgIGN1cnJlbnRBcnJheS5wdXNoKGN1cnJlbnRTaGlwKTtcbiAgICAgIGN1cnJlbnRTaGlwcyA9IGN1cnJlbnRBcnJheTtcbiAgICAgIHJldHVybiBjdXJyZW50QXJyYXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNoaXBBcnJheTogY3VycmVudEFycmF5LFxuICAgICAgbWVzc2FnZTogXCJZb3UndmUgYWxyZWFkeSBwbGFjZWQgYSBzaGlwIHRoZXJlXCIsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVJhbmRvbVNoaXBzID0gKGxlbmd0aCwgc2hpcHNBcnJheSwgcmFuZG9taXplciwgcmFuZG9tQXhpZXMpID0+IHtcbiAgICBjb25zdCBsYXRlc3RTaGlwc0FycmF5ID0gc2hpcHNBcnJheTtcbiAgICBsZXQgbGF0ZXN0TGVuZ3RoID0gbGVuZ3RoO1xuICAgIGNvbnN0IHJhbmRvbVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24ocmFuZG9taXplcigpLCByYW5kb21pemVyKCkpO1xuICAgIGNvbnN0IHJhbmRvbVNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAoXG4gICAgICByYW5kb21Qb3NpdGlvbixcbiAgICAgIGxhdGVzdExlbmd0aCxcbiAgICAgIHJhbmRvbUF4aWVzKClcbiAgICApO1xuXG4gICAgaWYgKHJhbmRvbVNoaXApIHtcbiAgICAgIGNvbnN0IHNoaXBDb2xsaWRlcyA9IGNvbXBhcmVTaGlwc0FycmF5KGxhdGVzdFNoaXBzQXJyYXksIHJhbmRvbVNoaXApO1xuICAgICAgaWYgKCFzaGlwQ29sbGlkZXMpIHtcbiAgICAgICAgaWYgKGxhdGVzdExlbmd0aCA+IDIpIGxhdGVzdExlbmd0aCAtPSAxO1xuICAgICAgICBpZiAoc2hpcHNBcnJheS5sZW5ndGggPCA1KSBsYXRlc3RTaGlwc0FycmF5LnB1c2gocmFuZG9tU2hpcCk7XG5cbiAgICAgICAgaWYgKHNoaXBzQXJyYXkubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgcmV0dXJuIGxhdGVzdFNoaXBzQXJyYXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGxhY2VSYW5kb21TaGlwcyhcbiAgICAgIGxhdGVzdExlbmd0aCxcbiAgICAgIGxhdGVzdFNoaXBzQXJyYXksXG4gICAgICByYW5kb21pemVyLFxuICAgICAgcmFuZG9tQXhpZXNcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcHNSYW5kb21seSA9IChyYW5kb21pemVyLCByYW5kb21BeGllcykgPT4ge1xuICAgIGNvbnN0IHNoaXBzQXJyYXkgPSBwbGFjZVJhbmRvbVNoaXBzKDUsIFtdLCByYW5kb21pemVyLCByYW5kb21BeGllcyk7XG4gICAgY3VycmVudFNoaXBzID0gc2hpcHNBcnJheTtcblxuICAgIHJldHVybiBzaGlwc0FycmF5O1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja1NoaXAgPSAobGF0ZXN0UG9zaXRpb24sIHNoaXBzLCBjdXJyZW50SGl0cywgY3VycmVudE1pc3NlcykgPT4ge1xuICAgIGxldCBpc0hpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxhdGVzdFNoaXBzQXJyYXkgPSBbXTtcbiAgICBjb25zdCBsYXRlc3RIaXRzID0gY3VycmVudEhpdHM7XG4gICAgY29uc3QgbGF0ZXN0TWlzc2VzID0gY3VycmVudE1pc3NlcztcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXBBcnJheSkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uc0FycmF5ID0gcHJhY3RpY2FsLmNvcHlBcnJheShzaGlwQXJyYXkpO1xuICAgICAgY29uc3QgaGl0ID0gc2hpcC5oaXQocG9zaXRpb25zQXJyYXksIGxhdGVzdFBvc2l0aW9uKTtcblxuICAgICAgaWYgKGhpdC5oaXRBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaXNIaXQgPSB0cnVlO1xuICAgICAgICBwb3NpdGlvbnNBcnJheSA9IGhpdC5zaGlwQXJyYXlzO1xuICAgICAgICBsYXRlc3RIaXRzLnB1c2goaGl0LmhpdEFycmF5WzBdKTtcbiAgICAgIH1cbiAgICAgIGxhdGVzdFNoaXBzQXJyYXkucHVzaChwb3NpdGlvbnNBcnJheSk7XG4gICAgfSk7XG4gICAgaWYgKCFpc0hpdCkgbGF0ZXN0TWlzc2VzLnB1c2gobGF0ZXN0UG9zaXRpb24pO1xuXG4gICAgY29uc3QgZmluYWxPYmplY3QgPSB7XG4gICAgICBpc0hpdCxcbiAgICAgIGxhdGVzdFNoaXBzQXJyYXksXG4gICAgICBsYXRlc3RIaXRzLFxuICAgICAgbGF0ZXN0TWlzc2VzLFxuICAgIH07XG5cbiAgICByZXR1cm4gZmluYWxPYmplY3Q7XG4gIH07XG5cbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChsYXRlc3RQb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF0dGFja1NoaXAobGF0ZXN0UG9zaXRpb24sIGN1cnJlbnRTaGlwcywgaGl0cywgbWlzc2VzKTtcblxuICAgIGN1cnJlbnRTaGlwcyA9IHJlc3VsdC5sYXRlc3RTaGlwc0FycmF5O1xuICAgIGhpdHMgPSByZXN1bHQubGF0ZXN0SGl0cztcbiAgICBtaXNzZXMgPSByZXN1bHQubGF0ZXN0TWlzc2VzO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVSYW5kb21Db29yZHMgPSAocmFuZG9taXplcikgPT4ge1xuICAgIGxldCByYW5kb21Qb3NpdGlvbjtcblxuICAgIGlmIChyYW5kb21pemVyLmlzTW9ja1JhbmRvbSkge1xuICAgICAgcmFuZG9tUG9zaXRpb24gPSByYW5kb21pemVyLmNhbGxSYW5kb21pemVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJhbmRvbVggPSByYW5kb21pemVyKCk7XG4gICAgICBjb25zdCByYW5kb21ZID0gcmFuZG9taXplcigpO1xuICAgICAgcmFuZG9tUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbihyYW5kb21YLCByYW5kb21ZKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZG9tUG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyQXR0YWNrID0gKGFycmF5LCBjdXJyZW50QXR0YWNrKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEF0dGFja0FycmF5ID0gYXJyYXkuZmlsdGVyKFxuICAgICAgKGl0ZW0pID0+XG4gICAgICAgIGl0ZW0ueENvb3JkID09PSBjdXJyZW50QXR0YWNrLnhDb29yZCAmJlxuICAgICAgICBpdGVtLnlDb29yZCA9PT0gY3VycmVudEF0dGFjay55Q29vcmRcbiAgICApO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRBdHRhY2tBcnJheTtcbiAgfTtcblxuICBjb25zdCBnZXRUeXBlT2ZQbGFjZWRTaGlwID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50U2hpcHMubGVuZ3RoID09PSA1KSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBzaGlwVHlwZXMgPSBbXG4gICAgICB7IHNoaXBUeXBlOiAnY2FycmllcicsIHNoaXBMZW5ndGg6IDUgfSxcbiAgICAgIHsgc2hpcFR5cGU6ICdiYXR0bGVzaGlwJywgc2hpcExlbmd0aDogNCB9LFxuICAgICAgeyBzaGlwVHlwZTogJ2Rlc3RveWVyJywgc2hpcExlbmd0aDogMyB9LFxuICAgICAgeyBzaGlwVHlwZTogJ3N1Ym1hcmluZScsIHNoaXBMZW5ndGg6IDMgfSxcbiAgICAgIHsgc2hpcFR5cGU6ICdndW5ib2F0Jywgc2hpcExlbmd0aDogMiB9LFxuICAgIF07XG5cbiAgICByZXR1cm4gc2hpcFR5cGVzW2N1cnJlbnRTaGlwcy5sZW5ndGhdO1xuICB9O1xuXG4gIGNvbnN0IHJlY2lldmVSYW5kb21BdHRhY2sgPSAocmFuZG9taXplcikgPT4ge1xuICAgIGNvbnN0IHJhbmRvbVBvc2l0aW9uID0gY3JlYXRlUmFuZG9tQ29vcmRzKHJhbmRvbWl6ZXIpO1xuXG4gICAgY29uc3QgaGFzQmVlbkhpdCA9IGZpbHRlckF0dGFjayhoaXRzLCByYW5kb21Qb3NpdGlvbik7XG4gICAgY29uc3QgaGFzQmVlbk1pc3MgPSBmaWx0ZXJBdHRhY2sobWlzc2VzLCByYW5kb21Qb3NpdGlvbik7XG5cbiAgICBpZiAoaGFzQmVlbkhpdC5sZW5ndGggPiAwIHx8IGhhc0JlZW5NaXNzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiByZWNpZXZlUmFuZG9tQXR0YWNrKHJhbmRvbWl6ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVjaWV2ZUF0dGFjayhyYW5kb21Qb3NpdGlvbik7XG4gIH07XG5cbiAgY29uc3QgaXNBbGxTdW5rID0gKCkgPT4ge1xuICAgIGxldCBoYXNTdW5rZWQgPSB0cnVlO1xuICAgIGN1cnJlbnRTaGlwcy5mb3JFYWNoKChzaGlwcykgPT4ge1xuICAgICAgaWYgKCFzaGlwLmlzU3VuayhzaGlwcykpIHtcbiAgICAgICAgaGFzU3Vua2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaGFzU3Vua2VkO1xuICB9O1xuXG4gIGNvbnN0IGdldFZhbHVlcyA9ICgpID0+ICh7XG4gICAgY3VycmVudFNoaXBzLFxuICAgIGhpdHMsXG4gICAgbWlzc2VzLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGF0dGFja1NoaXAsXG4gICAgcmVjaWV2ZUF0dGFjayxcbiAgICBpc0FsbFN1bmssXG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5LFxuICAgIHBsYXllclBsYWNlU2hpcCxcbiAgICBwbGFjZUFsbFNoaXBzLFxuICAgIHJhbmRvbWl6ZSxcbiAgICByZWNpZXZlUmFuZG9tQXR0YWNrLFxuICAgIHJhbmRvbUF4aXMsXG4gICAgZ2V0VmFsdWVzLFxuICAgIGdldFR5cGVPZlBsYWNlZFNoaXAsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjb25zdCBQb3NpdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgY3JlYXRlUG9zaXRpb24gPSAoeENvb3JkLCB5Q29vcmQpID0+ICh7IHhDb29yZCwgeUNvb3JkIH0pO1xuXG4gIGNvbnN0IGNoZWNrT3V0T2ZCb3VuY2UgPSAobmV3UG9zaXRpb24pID0+IHtcbiAgICBpZiAobmV3UG9zaXRpb24ueENvb3JkID4gOSB8fCBuZXdQb3NpdGlvbi55Q29vcmQgPiA5KSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAobmV3UG9zaXRpb24ueENvb3JkIDwgMCB8fCBuZXdQb3NpdGlvbi55Q29vcmQgPCAwKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYWRkUG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAocG9zaXRpb24xID09PSBmYWxzZSB8fCBwb3NpdGlvbjIgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGNyZWF0ZVBvc2l0aW9uKHBvc2l0aW9uMS54Q29vcmQsIHBvc2l0aW9uMS55Q29vcmQpO1xuICAgIG5ld1Bvc2l0aW9uLnhDb29yZCArPSBwb3NpdGlvbjIueENvb3JkO1xuICAgIG5ld1Bvc2l0aW9uLnlDb29yZCArPSBwb3NpdGlvbjIueUNvb3JkO1xuXG4gICAgaWYgKGNoZWNrT3V0T2ZCb3VuY2UobmV3UG9zaXRpb24pKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbmV3UG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgbXVsdGlwbHlQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmIChwb3NpdGlvbjEgPT09IGZhbHNlIHx8IHBvc2l0aW9uMiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gY3JlYXRlUG9zaXRpb24ocG9zaXRpb24xLnhDb29yZCwgcG9zaXRpb24xLnlDb29yZCk7XG4gICAgbmV3UG9zaXRpb24ueENvb3JkICo9IHBvc2l0aW9uMi54Q29vcmQ7XG4gICAgbmV3UG9zaXRpb24ueUNvb3JkICo9IHBvc2l0aW9uMi55Q29vcmQ7XG5cbiAgICBpZiAoY2hlY2tPdXRPZkJvdW5jZShuZXdQb3NpdGlvbikpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yLCBheGlzKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMVtheGlzXSA9PT0gcG9zaXRpb24yW2F4aXNdICsgMSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHBvc2l0aW9uMVtheGlzXSA9PT0gcG9zaXRpb24yW2F4aXNdKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAocG9zaXRpb24xW2F4aXNdID09PSBwb3NpdGlvbjJbYXhpc10gLSAxKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgY29tcGFyZVBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKCFjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsKHBvc2l0aW9uMSwgcG9zaXRpb24yLCAneENvb3JkJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsKHBvc2l0aW9uMSwgcG9zaXRpb24yLCAneUNvb3JkJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVQb3NpdGlvbixcbiAgICBhZGRQb3NpdGlvbixcbiAgICBtdWx0aXBseVBvc2l0aW9uLFxuICAgIGNvbXBhcmVQb3NpdGlvbixcbiAgICBjaGVja091dE9mQm91bmNlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zaXRpb247XG4iLCJjb25zdCBQcmFjdGljYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNvcHlBcnJheSA9IChhcnJheSkgPT4ge1xuICAgIGNvbnN0IG5ld0FycmF5ID0gW107XG5cbiAgICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBuZXdBcnJheS5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9O1xuXG4gIGNvbnN0IGlzT2JqZWN0ID0gKGN1cnJlbnRPYmplY3QpID0+IHtcbiAgICBpZiAodHlwZW9mIGN1cnJlbnRPYmplY3QgPT09ICdvYmplY3QnICYmIGN1cnJlbnRPYmplY3QgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tPYmplY3QgPSAob2JqZWN0MSwgb2JqZWN0MikgPT4ge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IHNlY29uZEluZGV4ID0gMDtcblxuICAgIGxldCBvYmplY3RJc0VxdWFsID0gdHJ1ZTtcblxuICAgIGNvbnN0IGN1cnJlbnRPYmplY3QgPSBvYmplY3QxO1xuICAgIGNvbnN0IGN1cnJlbnRPYmplY3QyID0gb2JqZWN0MjtcblxuICAgIGNvbnN0IGN1cnJlbnRPYmplY3RWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGN1cnJlbnRPYmplY3QpO1xuICAgIGNvbnN0IGN1cnJlbnRPYmplY3QyVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50T2JqZWN0Mik7XG5cbiAgICBjb25zdCBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMoY3VycmVudE9iamVjdCk7XG4gICAgY29uc3Qgb2JqZWN0S2V5czIgPSBPYmplY3Qua2V5cyhjdXJyZW50T2JqZWN0Mik7XG5cbiAgICBvYmplY3RLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGtleSAhPT0gb2JqZWN0S2V5czJbaW5kZXhdKSBvYmplY3RJc0VxdWFsID0gZmFsc2U7XG4gICAgICBpbmRleCArPSAxO1xuICAgIH0pO1xuXG4gICAgaWYgKCFvYmplY3RJc0VxdWFsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG9iamVjdEtleXMubGVuZ3RoICE9PSBvYmplY3RLZXlzMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRPYmplY3QsICd0aGUgY3VycmVudCBvYmplY3QnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50T2JqZWN0MiwgJ3RoZSBjdXJyZW50IG9iamVjdDInKTtcblxuICAgIGN1cnJlbnRPYmplY3RWYWx1ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgaXRlbTIgPSBjdXJyZW50T2JqZWN0MlZhbHVlc1tzZWNvbmRJbmRleF07XG5cbiAgICAgIGlmIChpc09iamVjdChpdGVtKSAmJiBpc09iamVjdChpdGVtMikpIHtcbiAgICAgICAgY29uc3QgY2hlY2tPYmplY3RCb29sID0gY2hlY2tPYmplY3QoaXRlbSwgaXRlbTIpO1xuXG4gICAgICAgIGlmICghY2hlY2tPYmplY3RCb29sKSBvYmplY3RJc0VxdWFsID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0gIT09IGl0ZW0yKSB7XG4gICAgICAgIG9iamVjdElzRXF1YWwgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgc2Vjb25kSW5kZXggKz0gMTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmplY3RJc0VxdWFsO1xuICB9O1xuXG4gIHJldHVybiB7IGNvcHlBcnJheSwgY2hlY2tPYmplY3QgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByYWN0aWNhbDtcbiIsImltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcblxuY29uc3QgU2hpcCA9ICgpID0+IHtcbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuXG4gIGNvbnN0IGdldEFkZGVkUG9zaXRpb24gPSAoYXhpcykgPT4ge1xuICAgIGxldCBhZGRlZFBvc2l0aW9uO1xuXG4gICAgaWYgKGF4aXMgPT09ICd4JykgYWRkZWRQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKDEsIDApO1xuICAgIGVsc2UgYWRkZWRQb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKDAsIDEpO1xuXG4gICAgcmV0dXJuIGFkZGVkUG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlU2hpcCA9IChwb3NpdGlvbjEsIGxlbmd0aDEsIGF4aXMpID0+IHtcbiAgICBpZiAobGVuZ3RoMSA9PT0gMCB8fCBsZW5ndGgxID4gNSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwb3NpdGlvbi5jaGVja091dE9mQm91bmNlKHBvc2l0aW9uMSkpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHBvcHVsYXRlU2hpcHMgPSAoY3VycmVudFBvc2l0aW9uLCBsYXRlc3RMZW5ndGgsIGxhdGVzdEFycmF5KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50QXJyYXkgPSBsYXRlc3RBcnJheTtcbiAgICAgIGxldCBuZXdQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbjtcblxuICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmIChsYXRlc3RMZW5ndGggPT09IDApIHJldHVybiBjdXJyZW50QXJyYXk7XG4gICAgICBpZiAobGF0ZXN0TGVuZ3RoID09PSBsZW5ndGgxKSB7XG4gICAgICAgIGN1cnJlbnRBcnJheS5wdXNoKGN1cnJlbnRQb3NpdGlvbik7XG4gICAgICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKGN1cnJlbnRQb3NpdGlvbiwgbGF0ZXN0TGVuZ3RoIC0gMSwgY3VycmVudEFycmF5KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFkZGVkUG9zaXRpb24gPSBnZXRBZGRlZFBvc2l0aW9uKGF4aXMpO1xuICAgICAgbmV3UG9zaXRpb24gPSBwb3NpdGlvbi5hZGRQb3NpdGlvbihuZXdQb3NpdGlvbiwgYWRkZWRQb3NpdGlvbik7XG5cbiAgICAgIGlmICghbmV3UG9zaXRpb24pIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgICAgIGN1cnJlbnRBcnJheS5wdXNoKG5ld1Bvc2l0aW9uKTtcblxuICAgICAgY29uc3QgYXJyYXlMZW5ndGggPSBjdXJyZW50QXJyYXkubGVuZ3RoIC0gMTtcblxuICAgICAgcmV0dXJuIHBvcHVsYXRlU2hpcHMoXG4gICAgICAgIGN1cnJlbnRBcnJheVthcnJheUxlbmd0aF0sXG4gICAgICAgIGxhdGVzdExlbmd0aCAtIDEsXG4gICAgICAgIGN1cnJlbnRBcnJheVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHBvcHVsYXRlU2hpcHMocG9zaXRpb24xLCBsZW5ndGgxLCBbXSwgZmFsc2UpO1xuICB9O1xuXG5cblxuICBjb25zdCBpc1N1bmsgPSAoc2hpcEFycmF5KSA9PiB7XG4gICAgaWYgKHNoaXBBcnJheS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBoaXQgPSAocG9zaXRpb25zQXJyYXksIHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgaGl0QXJyYXkgPSBwb3NpdGlvbnNBcnJheS5maWx0ZXIoKHBvcykgPT4ge1xuICAgICAgaWYgKHBvcy54Q29vcmQgPT09IHBvc2l0aW9uLnhDb29yZCAmJiBwb3MueUNvb3JkID09PSBwb3NpdGlvbi55Q29vcmQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgY29uc3Qgc2hpcEFycmF5cyA9IHBvc2l0aW9uc0FycmF5LmZpbHRlcigocG9zKSA9PiB7XG4gICAgICBpZiAocG9zLnhDb29yZCA9PT0gcG9zaXRpb24ueENvb3JkICYmIHBvcy55Q29vcmQgPT09IHBvc2l0aW9uLnlDb29yZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IGhpdEFycmF5LCBzaGlwQXJyYXlzIH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVTaGlwLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIl0sIm5hbWVzIjpbIlBvc2l0aW9uIiwiU2hpcCIsIlByYWN0aWNhbCIsIkdhbWVib2FyZCIsInBvc2l0aW9uIiwic2hpcCIsInByYWN0aWNhbCIsImN1cnJlbnRTaGlwcyIsImhpdHMiLCJtaXNzZXMiLCJyYW5kb21pemUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21BeGlzIiwiYXhpZXMiLCJsZW5ndGgiLCJwbGFjZUFsbFNoaXBzIiwic2hpcHNBcnJheSIsImNvbXBhcmVTaGlwc0FycmF5IiwibGF0ZXN0U2hpcHNBcnJheSIsInNoaXBzIiwic2hpcHNEb0NvbGxpZGUiLCJmb3JFYWNoIiwibGF0ZXN0U2hpcHMiLCJib2F0IiwibGF0ZXN0Qm9hdCIsImNvbXBhcmVQb3NpdGlvbiIsInBsYXllclBsYWNlU2hpcCIsImxvY2F0aW9uIiwiYXhpcyIsImxhdGVzdFBvc2l0aW9uIiwiY3VycmVudEFycmF5IiwiY29weUFycmF5Iiwic2hpcGxlbmd0aCIsIm1lc3NhZ2UiLCJjdXJyZW50U2hpcCIsImNyZWF0ZVNoaXAiLCJzaGlwQXJyYXkiLCJpc0NvbGxpZGVkIiwicHVzaCIsInBsYWNlUmFuZG9tU2hpcHMiLCJyYW5kb21pemVyIiwicmFuZG9tQXhpZXMiLCJsYXRlc3RMZW5ndGgiLCJyYW5kb21Qb3NpdGlvbiIsImNyZWF0ZVBvc2l0aW9uIiwicmFuZG9tU2hpcCIsInNoaXBDb2xsaWRlcyIsInBsYWNlU2hpcHNSYW5kb21seSIsImF0dGFja1NoaXAiLCJjdXJyZW50SGl0cyIsImN1cnJlbnRNaXNzZXMiLCJpc0hpdCIsImxhdGVzdEhpdHMiLCJsYXRlc3RNaXNzZXMiLCJwb3NpdGlvbnNBcnJheSIsImhpdCIsImhpdEFycmF5Iiwic2hpcEFycmF5cyIsImZpbmFsT2JqZWN0IiwicmVjaWV2ZUF0dGFjayIsInJlc3VsdCIsImNyZWF0ZVJhbmRvbUNvb3JkcyIsImlzTW9ja1JhbmRvbSIsImNhbGxSYW5kb21pemVyIiwicmFuZG9tWCIsInJhbmRvbVkiLCJmaWx0ZXJBdHRhY2siLCJhcnJheSIsImN1cnJlbnRBdHRhY2siLCJjdXJyZW50QXR0YWNrQXJyYXkiLCJmaWx0ZXIiLCJpdGVtIiwieENvb3JkIiwieUNvb3JkIiwiZ2V0VHlwZU9mUGxhY2VkU2hpcCIsInNoaXBUeXBlcyIsInNoaXBUeXBlIiwic2hpcExlbmd0aCIsInJlY2lldmVSYW5kb21BdHRhY2siLCJoYXNCZWVuSGl0IiwiaGFzQmVlbk1pc3MiLCJpc0FsbFN1bmsiLCJoYXNTdW5rZWQiLCJpc1N1bmsiLCJnZXRWYWx1ZXMiLCJjaGVja091dE9mQm91bmNlIiwibmV3UG9zaXRpb24iLCJhZGRQb3NpdGlvbiIsInBvc2l0aW9uMSIsInBvc2l0aW9uMiIsIm11bHRpcGx5UG9zaXRpb24iLCJjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsIiwibmV3QXJyYXkiLCJpc09iamVjdCIsImN1cnJlbnRPYmplY3QiLCJjaGVja09iamVjdCIsIm9iamVjdDEiLCJvYmplY3QyIiwiaW5kZXgiLCJzZWNvbmRJbmRleCIsIm9iamVjdElzRXF1YWwiLCJjdXJyZW50T2JqZWN0MiIsImN1cnJlbnRPYmplY3RWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjdXJyZW50T2JqZWN0MlZhbHVlcyIsIm9iamVjdEtleXMiLCJrZXlzIiwib2JqZWN0S2V5czIiLCJrZXkiLCJpdGVtMiIsImNoZWNrT2JqZWN0Qm9vbCIsImdldEFkZGVkUG9zaXRpb24iLCJhZGRlZFBvc2l0aW9uIiwibGVuZ3RoMSIsInBvcHVsYXRlU2hpcHMiLCJjdXJyZW50UG9zaXRpb24iLCJsYXRlc3RBcnJheSIsImFycmF5TGVuZ3RoIiwicG9zIl0sInNvdXJjZVJvb3QiOiIifQ==