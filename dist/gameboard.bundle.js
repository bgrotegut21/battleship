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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFESztJQUVMcUIsR0FBRyxFQUFIQSxHQUZLO0lBR0w0QixNQUFNLEVBQU5BO0VBSEssQ0FBUDtBQUtELENBekVEOztBQTJFQSxpRUFBZW5GLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcHJhY3RpY2FsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5pbXBvcnQgUHJhY3RpY2FsIGZyb20gJy4vcHJhY3RpY2FsLmpzJztcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG4gIGNvbnN0IHNoaXAgPSBTaGlwKCk7XG4gIGNvbnN0IHByYWN0aWNhbCA9IFByYWN0aWNhbCgpO1xuXG4gIGxldCBjdXJyZW50U2hpcHMgPSBbXTtcbiAgbGV0IGhpdHMgPSBbXTtcbiAgbGV0IG1pc3NlcyA9IFtdO1xuXG4gIGNvbnN0IHJhbmRvbWl6ZSA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICBjb25zdCByYW5kb21BeGlzID0gKCkgPT4ge1xuICAgIGNvbnN0IGF4aWVzID0gWyd4JywgJ3knXTtcbiAgICByZXR1cm4gYXhpZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXhpZXMubGVuZ3RoKV07XG4gIH07XG5cbiAgY29uc3QgcGxhY2VBbGxTaGlwcyA9IChzaGlwc0FycmF5KSA9PiB7XG4gICAgY3VycmVudFNoaXBzID0gc2hpcHNBcnJheTtcbiAgICByZXR1cm4gY3VycmVudFNoaXBzO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmVTaGlwc0FycmF5ID0gKGxhdGVzdFNoaXBzQXJyYXksIHNoaXBzKSA9PiB7XG4gICAgbGV0IHNoaXBzRG9Db2xsaWRlID0gZmFsc2U7XG4gICAgaWYgKCFzaGlwcykgcmV0dXJuIHNoaXBzRG9Db2xsaWRlO1xuXG4gICAgLy8gY29uc29sZS5sb2cobGF0ZXN0U2hpcHNBcnJheSwgJ3RoZSBjdXJyZWVudCBzaGlwcyBhcnJheScpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNoaXBzLCAndGhlIGN1cnJlbnQgc2hpcHMnKTtcblxuICAgIGxhdGVzdFNoaXBzQXJyYXkuZm9yRWFjaCgobGF0ZXN0U2hpcHMpID0+IHtcbiAgICAgIGxhdGVzdFNoaXBzLmZvckVhY2goKGJvYXQpID0+IHtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgobGF0ZXN0Qm9hdCkgPT4ge1xuICAgICAgICAgIGlmIChwb3NpdGlvbi5jb21wYXJlUG9zaXRpb24oYm9hdCwgbGF0ZXN0Qm9hdCkpIHtcbiAgICAgICAgICAgIHNoaXBzRG9Db2xsaWRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2hpcHNEb0NvbGxpZGU7XG4gIH07XG5cbiAgY29uc3QgcGxheWVyUGxhY2VTaGlwID0gKGxvY2F0aW9uLCBheGlzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEFycmF5ID0gcHJhY3RpY2FsLmNvcHlBcnJheShjdXJyZW50U2hpcHMpO1xuXG4gICAgbGV0IHNoaXBsZW5ndGggPSA1IC0gY3VycmVudEFycmF5Lmxlbmd0aDtcblxuICAgIGlmIChzaGlwbGVuZ3RoID09PSAyKSBzaGlwbGVuZ3RoID0gMztcbiAgICBpZiAoc2hpcGxlbmd0aCA9PT0gMSkgc2hpcGxlbmd0aCA9IDI7XG5cbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXAuY3JlYXRlU2hpcChsb2NhdGlvbiwgc2hpcGxlbmd0aCwgYXhpcyk7XG5cbiAgICBjb25zdCBpc0NvbGxpZGVkID0gY29tcGFyZVNoaXBzQXJyYXkoY3VycmVudEFycmF5LCBjdXJyZW50U2hpcCk7XG5cbiAgICBpZiAoY3VycmVudEFycmF5Lmxlbmd0aCA9PT0gNSB8fCAhY3VycmVudFNoaXAgfHwgaXNDb2xsaWRlZCkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRBcnJheTtcbiAgICB9XG5cbiAgICBjdXJyZW50QXJyYXkucHVzaChjdXJyZW50U2hpcCk7XG4gICAgY3VycmVudFNoaXBzID0gY3VycmVudEFycmF5O1xuICAgIHJldHVybiBjdXJyZW50QXJyYXk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VSYW5kb21TaGlwcyA9IChsZW5ndGgsIHNoaXBzQXJyYXksIHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKSA9PiB7XG4gICAgY29uc3QgbGF0ZXN0U2hpcHNBcnJheSA9IHNoaXBzQXJyYXk7XG4gICAgbGV0IGxhdGVzdExlbmd0aCA9IGxlbmd0aDtcbiAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHJhbmRvbWl6ZXIoKSwgcmFuZG9taXplcigpKTtcbiAgICBjb25zdCByYW5kb21TaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgcmFuZG9tUG9zaXRpb24sXG4gICAgICBsYXRlc3RMZW5ndGgsXG4gICAgICByYW5kb21BeGllcygpXG4gICAgKTtcblxuICAgIGlmIChyYW5kb21TaGlwKSB7XG4gICAgICBjb25zdCBzaGlwQ29sbGlkZXMgPSBjb21wYXJlU2hpcHNBcnJheShsYXRlc3RTaGlwc0FycmF5LCByYW5kb21TaGlwKTtcbiAgICAgIGlmICghc2hpcENvbGxpZGVzKSB7XG4gICAgICAgIGlmIChsYXRlc3RMZW5ndGggPiAyKSBsYXRlc3RMZW5ndGggLT0gMTtcbiAgICAgICAgaWYgKHNoaXBzQXJyYXkubGVuZ3RoIDwgNSkgbGF0ZXN0U2hpcHNBcnJheS5wdXNoKHJhbmRvbVNoaXApO1xuXG4gICAgICAgIGlmIChzaGlwc0FycmF5Lmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgIHJldHVybiBsYXRlc3RTaGlwc0FycmF5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWNlUmFuZG9tU2hpcHMoXG4gICAgICBsYXRlc3RMZW5ndGgsXG4gICAgICBsYXRlc3RTaGlwc0FycmF5LFxuICAgICAgcmFuZG9taXplcixcbiAgICAgIHJhbmRvbUF4aWVzXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXBzUmFuZG9tbHkgPSAocmFuZG9taXplciwgcmFuZG9tQXhpZXMpID0+IHtcbiAgICBjb25zdCBzaGlwc0FycmF5ID0gcGxhY2VSYW5kb21TaGlwcyg1LCBbXSwgcmFuZG9taXplciwgcmFuZG9tQXhpZXMpO1xuICAgIGN1cnJlbnRTaGlwcyA9IHNoaXBzQXJyYXk7XG5cbiAgICByZXR1cm4gc2hpcHNBcnJheTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tTaGlwID0gKGxhdGVzdFBvc2l0aW9uLCBzaGlwcywgY3VycmVudEhpdHMsIGN1cnJlbnRNaXNzZXMpID0+IHtcbiAgICBsZXQgaXNIaXQgPSBmYWxzZTtcbiAgICBjb25zdCBsYXRlc3RTaGlwc0FycmF5ID0gW107XG4gICAgY29uc3QgbGF0ZXN0SGl0cyA9IGN1cnJlbnRIaXRzO1xuICAgIGNvbnN0IGxhdGVzdE1pc3NlcyA9IGN1cnJlbnRNaXNzZXM7XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwQXJyYXkpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbnNBcnJheSA9IHByYWN0aWNhbC5jb3B5QXJyYXkoc2hpcEFycmF5KTtcbiAgICAgIGNvbnN0IGhpdCA9IHNoaXAuaGl0KHBvc2l0aW9uc0FycmF5LCBsYXRlc3RQb3NpdGlvbik7XG5cbiAgICAgIGlmIChoaXQuaGl0QXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgcG9zaXRpb25zQXJyYXkgPSBoaXQuc2hpcEFycmF5cztcbiAgICAgICAgbGF0ZXN0SGl0cy5wdXNoKGhpdC5oaXRBcnJheVswXSk7XG4gICAgICB9XG4gICAgICBsYXRlc3RTaGlwc0FycmF5LnB1c2gocG9zaXRpb25zQXJyYXkpO1xuICAgIH0pO1xuICAgIGlmICghaXNIaXQpIGxhdGVzdE1pc3Nlcy5wdXNoKGxhdGVzdFBvc2l0aW9uKTtcblxuICAgIGNvbnN0IGZpbmFsT2JqZWN0ID0ge1xuICAgICAgaXNIaXQsXG4gICAgICBsYXRlc3RTaGlwc0FycmF5LFxuICAgICAgbGF0ZXN0SGl0cyxcbiAgICAgIGxhdGVzdE1pc3NlcyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZpbmFsT2JqZWN0O1xuICB9O1xuXG4gIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAobGF0ZXN0UG9zaXRpb24pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhdHRhY2tTaGlwKGxhdGVzdFBvc2l0aW9uLCBjdXJyZW50U2hpcHMsIGhpdHMsIG1pc3Nlcyk7XG5cbiAgICBjdXJyZW50U2hpcHMgPSByZXN1bHQubGF0ZXN0U2hpcHNBcnJheTtcbiAgICBoaXRzID0gcmVzdWx0LmxhdGVzdEhpdHM7XG4gICAgbWlzc2VzID0gcmVzdWx0LmxhdGVzdE1pc3NlcztcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUmFuZG9tQ29vcmRzID0gKHJhbmRvbWl6ZXIpID0+IHtcbiAgICBsZXQgcmFuZG9tUG9zaXRpb247XG5cbiAgICBpZiAocmFuZG9taXplci5pc01vY2tSYW5kb20pIHtcbiAgICAgIHJhbmRvbVBvc2l0aW9uID0gcmFuZG9taXplci5jYWxsUmFuZG9taXplcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByYW5kb21YID0gcmFuZG9taXplcigpO1xuICAgICAgY29uc3QgcmFuZG9tWSA9IHJhbmRvbWl6ZXIoKTtcbiAgICAgIHJhbmRvbVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24ocmFuZG9tWCwgcmFuZG9tWSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmRvbVBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlckF0dGFjayA9IChhcnJheSwgY3VycmVudEF0dGFjaykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRBdHRhY2tBcnJheSA9IGFycmF5LmZpbHRlcihcbiAgICAgIChpdGVtKSA9PlxuICAgICAgICBpdGVtLnhDb29yZCA9PT0gY3VycmVudEF0dGFjay54Q29vcmQgJiZcbiAgICAgICAgaXRlbS55Q29vcmQgPT09IGN1cnJlbnRBdHRhY2sueUNvb3JkXG4gICAgKTtcblxuICAgIHJldHVybiBjdXJyZW50QXR0YWNrQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VHlwZU9mUGxhY2VkU2hpcCA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFNoaXBzLmxlbmd0aCA9PT0gNSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3Qgc2hpcFR5cGVzID0gW1xuICAgICAgeyBzaGlwVHlwZTogJ2NhcnJpZXInLCBzaGlwTGVuZ3RoOiA1IH0sXG4gICAgICB7IHNoaXBUeXBlOiAnYmF0dGxlc2hpcCcsIHNoaXBMZW5ndGg6IDQgfSxcbiAgICAgIHsgc2hpcFR5cGU6ICdkZXN0b3llcicsIHNoaXBMZW5ndGg6IDMgfSxcbiAgICAgIHsgc2hpcFR5cGU6ICdzdWJtYXJpbmUnLCBzaGlwTGVuZ3RoOiAzIH0sXG4gICAgICB7IHNoaXBUeXBlOiAnZ3VuYm9hdCcsIHNoaXBMZW5ndGg6IDIgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIHNoaXBUeXBlc1tjdXJyZW50U2hpcHMubGVuZ3RoXTtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlUmFuZG9tQXR0YWNrID0gKHJhbmRvbWl6ZXIpID0+IHtcbiAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IGNyZWF0ZVJhbmRvbUNvb3JkcyhyYW5kb21pemVyKTtcblxuICAgIGNvbnN0IGhhc0JlZW5IaXQgPSBmaWx0ZXJBdHRhY2soaGl0cywgcmFuZG9tUG9zaXRpb24pO1xuICAgIGNvbnN0IGhhc0JlZW5NaXNzID0gZmlsdGVyQXR0YWNrKG1pc3NlcywgcmFuZG9tUG9zaXRpb24pO1xuXG4gICAgaWYgKGhhc0JlZW5IaXQubGVuZ3RoID4gMCB8fCBoYXNCZWVuTWlzcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gcmVjaWV2ZVJhbmRvbUF0dGFjayhyYW5kb21pemVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlY2lldmVBdHRhY2socmFuZG9tUG9zaXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IGlzQWxsU3VuayA9ICgpID0+IHtcbiAgICBsZXQgaGFzU3Vua2VkID0gdHJ1ZTtcbiAgICBjdXJyZW50U2hpcHMuZm9yRWFjaCgoc2hpcHMpID0+IHtcbiAgICAgIGlmICghc2hpcC5pc1N1bmsoc2hpcHMpKSB7XG4gICAgICAgIGhhc1N1bmtlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhhc1N1bmtlZDtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZXMgPSAoKSA9PiAoe1xuICAgIGN1cnJlbnRTaGlwcyxcbiAgICBoaXRzLFxuICAgIG1pc3NlcyxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhdHRhY2tTaGlwLFxuICAgIHJlY2lldmVBdHRhY2ssXG4gICAgaXNBbGxTdW5rLFxuICAgIHBsYWNlU2hpcHNSYW5kb21seSxcbiAgICBwbGF5ZXJQbGFjZVNoaXAsXG4gICAgcGxhY2VBbGxTaGlwcyxcbiAgICByYW5kb21pemUsXG4gICAgcmVjaWV2ZVJhbmRvbUF0dGFjayxcbiAgICByYW5kb21BeGlzLFxuICAgIGdldFZhbHVlcyxcbiAgICBnZXRUeXBlT2ZQbGFjZWRTaGlwLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiY29uc3QgUG9zaXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVBvc2l0aW9uID0gKHhDb29yZCwgeUNvb3JkKSA9PiAoeyB4Q29vcmQsIHlDb29yZCB9KTtcblxuICBjb25zdCBjaGVja091dE9mQm91bmNlID0gKG5ld1Bvc2l0aW9uKSA9PiB7XG4gICAgaWYgKG5ld1Bvc2l0aW9uLnhDb29yZCA+IDkgfHwgbmV3UG9zaXRpb24ueUNvb3JkID4gOSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKG5ld1Bvc2l0aW9uLnhDb29yZCA8IDAgfHwgbmV3UG9zaXRpb24ueUNvb3JkIDwgMCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGFkZFBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMSA9PT0gZmFsc2UgfHwgcG9zaXRpb24yID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBjcmVhdGVQb3NpdGlvbihwb3NpdGlvbjEueENvb3JkLCBwb3NpdGlvbjEueUNvb3JkKTtcbiAgICBuZXdQb3NpdGlvbi54Q29vcmQgKz0gcG9zaXRpb24yLnhDb29yZDtcbiAgICBuZXdQb3NpdGlvbi55Q29vcmQgKz0gcG9zaXRpb24yLnlDb29yZDtcblxuICAgIGlmIChjaGVja091dE9mQm91bmNlKG5ld1Bvc2l0aW9uKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IG11bHRpcGx5UG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAocG9zaXRpb24xID09PSBmYWxzZSB8fCBwb3NpdGlvbjIgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGNyZWF0ZVBvc2l0aW9uKHBvc2l0aW9uMS54Q29vcmQsIHBvc2l0aW9uMS55Q29vcmQpO1xuICAgIG5ld1Bvc2l0aW9uLnhDb29yZCAqPSBwb3NpdGlvbjIueENvb3JkO1xuICAgIG5ld1Bvc2l0aW9uLnlDb29yZCAqPSBwb3NpdGlvbjIueUNvb3JkO1xuXG4gICAgaWYgKGNoZWNrT3V0T2ZCb3VuY2UobmV3UG9zaXRpb24pKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbmV3UG9zaXRpb247XG4gIH07XG5cbiAgY29uc3QgY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbCA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgYXhpcykgPT4ge1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSArIDEpIHJldHVybiB0cnVlO1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHBvc2l0aW9uMVtheGlzXSA9PT0gcG9zaXRpb24yW2F4aXNdIC0gMSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmVQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmICghY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgJ3hDb29yZCcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghY29tcGFyaW5nUG9zaXRpb25Db25kaXRpb25hbChwb3NpdGlvbjEsIHBvc2l0aW9uMiwgJ3lDb29yZCcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlUG9zaXRpb24sXG4gICAgYWRkUG9zaXRpb24sXG4gICAgbXVsdGlwbHlQb3NpdGlvbixcbiAgICBjb21wYXJlUG9zaXRpb24sXG4gICAgY2hlY2tPdXRPZkJvdW5jZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc2l0aW9uO1xuIiwiY29uc3QgUHJhY3RpY2FsID0gKCkgPT4ge1xuICBjb25zdCBjb3B5QXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgICBjb25zdCBuZXdBcnJheSA9IFtdO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgbmV3QXJyYXkucHVzaChpdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdBcnJheTtcbiAgfTtcblxuICBjb25zdCBpc09iamVjdCA9IChjdXJyZW50T2JqZWN0KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50T2JqZWN0ID09PSAnb2JqZWN0JyAmJiBjdXJyZW50T2JqZWN0ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrT2JqZWN0ID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBzZWNvbmRJbmRleCA9IDA7XG5cbiAgICBsZXQgb2JqZWN0SXNFcXVhbCA9IHRydWU7XG5cbiAgICBjb25zdCBjdXJyZW50T2JqZWN0ID0gb2JqZWN0MTtcbiAgICBjb25zdCBjdXJyZW50T2JqZWN0MiA9IG9iamVjdDI7XG5cbiAgICBjb25zdCBjdXJyZW50T2JqZWN0VmFsdWVzID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50T2JqZWN0KTtcbiAgICBjb25zdCBjdXJyZW50T2JqZWN0MlZhbHVlcyA9IE9iamVjdC52YWx1ZXMoY3VycmVudE9iamVjdDIpO1xuXG4gICAgY29uc3Qgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKGN1cnJlbnRPYmplY3QpO1xuICAgIGNvbnN0IG9iamVjdEtleXMyID0gT2JqZWN0LmtleXMoY3VycmVudE9iamVjdDIpO1xuXG4gICAgb2JqZWN0S2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChrZXkgIT09IG9iamVjdEtleXMyW2luZGV4XSkgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgaW5kZXggKz0gMTtcbiAgICB9KTtcblxuICAgIGlmICghb2JqZWN0SXNFcXVhbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChvYmplY3RLZXlzLmxlbmd0aCAhPT0gb2JqZWN0S2V5czIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50T2JqZWN0LCAndGhlIGN1cnJlbnQgb2JqZWN0Jyk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudE9iamVjdDIsICd0aGUgY3VycmVudCBvYmplY3QyJyk7XG5cbiAgICBjdXJyZW50T2JqZWN0VmFsdWVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0yID0gY3VycmVudE9iamVjdDJWYWx1ZXNbc2Vjb25kSW5kZXhdO1xuXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkgJiYgaXNPYmplY3QoaXRlbTIpKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrT2JqZWN0Qm9vbCA9IGNoZWNrT2JqZWN0KGl0ZW0sIGl0ZW0yKTtcblxuICAgICAgICBpZiAoIWNoZWNrT2JqZWN0Qm9vbCkgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChpdGVtICE9PSBpdGVtMikge1xuICAgICAgICBvYmplY3RJc0VxdWFsID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHNlY29uZEluZGV4ICs9IDE7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqZWN0SXNFcXVhbDtcbiAgfTtcblxuICByZXR1cm4geyBjb3B5QXJyYXksIGNoZWNrT2JqZWN0IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmFjdGljYWw7XG4iLCJpbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5cbmNvbnN0IFNoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcblxuICBjb25zdCBnZXRBZGRlZFBvc2l0aW9uID0gKGF4aXMpID0+IHtcbiAgICBsZXQgYWRkZWRQb3NpdGlvbjtcblxuICAgIGlmIChheGlzID09PSAneCcpIGFkZGVkUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbigxLCAwKTtcbiAgICBlbHNlIGFkZGVkUG9zaXRpb24gPSBwb3NpdGlvbi5jcmVhdGVQb3NpdGlvbigwLCAxKTtcblxuICAgIHJldHVybiBhZGRlZFBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVNoaXAgPSAocG9zaXRpb24xLCBsZW5ndGgxLCBheGlzKSA9PiB7XG4gICAgaWYgKGxlbmd0aDEgPT09IDAgfHwgbGVuZ3RoMSA+IDUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocG9zaXRpb24uY2hlY2tPdXRPZkJvdW5jZShwb3NpdGlvbjEpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBwb3B1bGF0ZVNoaXBzID0gKGN1cnJlbnRQb3NpdGlvbiwgbGF0ZXN0TGVuZ3RoLCBsYXRlc3RBcnJheSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEFycmF5ID0gbGF0ZXN0QXJyYXk7XG4gICAgICBsZXQgbmV3UG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb247XG5cbiAgICAgIGlmIChjdXJyZW50UG9zaXRpb24gPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAobGF0ZXN0TGVuZ3RoID09PSAwKSByZXR1cm4gY3VycmVudEFycmF5O1xuICAgICAgaWYgKGxhdGVzdExlbmd0aCA9PT0gbGVuZ3RoMSkge1xuICAgICAgICBjdXJyZW50QXJyYXkucHVzaChjdXJyZW50UG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhjdXJyZW50UG9zaXRpb24sIGxhdGVzdExlbmd0aCAtIDEsIGN1cnJlbnRBcnJheSk7XG4gICAgICB9XG4gICAgICBjb25zdCBhZGRlZFBvc2l0aW9uID0gZ2V0QWRkZWRQb3NpdGlvbihheGlzKTtcbiAgICAgIG5ld1Bvc2l0aW9uID0gcG9zaXRpb24uYWRkUG9zaXRpb24obmV3UG9zaXRpb24sIGFkZGVkUG9zaXRpb24pO1xuXG4gICAgICBpZiAoIW5ld1Bvc2l0aW9uKSByZXR1cm4gbmV3UG9zaXRpb247XG4gICAgICBjdXJyZW50QXJyYXkucHVzaChuZXdQb3NpdGlvbik7XG5cbiAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gY3VycmVudEFycmF5Lmxlbmd0aCAtIDE7XG5cbiAgICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKFxuICAgICAgICBjdXJyZW50QXJyYXlbYXJyYXlMZW5ndGhdLFxuICAgICAgICBsYXRlc3RMZW5ndGggLSAxLFxuICAgICAgICBjdXJyZW50QXJyYXlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiBwb3B1bGF0ZVNoaXBzKHBvc2l0aW9uMSwgbGVuZ3RoMSwgW10sIGZhbHNlKTtcbiAgfTtcblxuXG5cbiAgY29uc3QgaXNTdW5rID0gKHNoaXBBcnJheSkgPT4ge1xuICAgIGlmIChzaGlwQXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaGl0ID0gKHBvc2l0aW9uc0FycmF5LCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGhpdEFycmF5ID0gcG9zaXRpb25zQXJyYXkuZmlsdGVyKChwb3MpID0+IHtcbiAgICAgIGlmIChwb3MueENvb3JkID09PSBwb3NpdGlvbi54Q29vcmQgJiYgcG9zLnlDb29yZCA9PT0gcG9zaXRpb24ueUNvb3JkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGNvbnN0IHNoaXBBcnJheXMgPSBwb3NpdGlvbnNBcnJheS5maWx0ZXIoKHBvcykgPT4ge1xuICAgICAgaWYgKHBvcy54Q29vcmQgPT09IHBvc2l0aW9uLnhDb29yZCAmJiBwb3MueUNvb3JkID09PSBwb3NpdGlvbi55Q29vcmQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBoaXRBcnJheSwgc2hpcEFycmF5cyB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlU2hpcCxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiJdLCJuYW1lcyI6WyJQb3NpdGlvbiIsIlNoaXAiLCJQcmFjdGljYWwiLCJHYW1lYm9hcmQiLCJwb3NpdGlvbiIsInNoaXAiLCJwcmFjdGljYWwiLCJjdXJyZW50U2hpcHMiLCJoaXRzIiwibWlzc2VzIiwicmFuZG9taXplIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQXhpcyIsImF4aWVzIiwibGVuZ3RoIiwicGxhY2VBbGxTaGlwcyIsInNoaXBzQXJyYXkiLCJjb21wYXJlU2hpcHNBcnJheSIsImxhdGVzdFNoaXBzQXJyYXkiLCJzaGlwcyIsInNoaXBzRG9Db2xsaWRlIiwiZm9yRWFjaCIsImxhdGVzdFNoaXBzIiwiYm9hdCIsImxhdGVzdEJvYXQiLCJjb21wYXJlUG9zaXRpb24iLCJwbGF5ZXJQbGFjZVNoaXAiLCJsb2NhdGlvbiIsImF4aXMiLCJjdXJyZW50QXJyYXkiLCJjb3B5QXJyYXkiLCJzaGlwbGVuZ3RoIiwiY3VycmVudFNoaXAiLCJjcmVhdGVTaGlwIiwiaXNDb2xsaWRlZCIsInB1c2giLCJwbGFjZVJhbmRvbVNoaXBzIiwicmFuZG9taXplciIsInJhbmRvbUF4aWVzIiwibGF0ZXN0TGVuZ3RoIiwicmFuZG9tUG9zaXRpb24iLCJjcmVhdGVQb3NpdGlvbiIsInJhbmRvbVNoaXAiLCJzaGlwQ29sbGlkZXMiLCJwbGFjZVNoaXBzUmFuZG9tbHkiLCJhdHRhY2tTaGlwIiwibGF0ZXN0UG9zaXRpb24iLCJjdXJyZW50SGl0cyIsImN1cnJlbnRNaXNzZXMiLCJpc0hpdCIsImxhdGVzdEhpdHMiLCJsYXRlc3RNaXNzZXMiLCJzaGlwQXJyYXkiLCJwb3NpdGlvbnNBcnJheSIsImhpdCIsImhpdEFycmF5Iiwic2hpcEFycmF5cyIsImZpbmFsT2JqZWN0IiwicmVjaWV2ZUF0dGFjayIsInJlc3VsdCIsImNyZWF0ZVJhbmRvbUNvb3JkcyIsImlzTW9ja1JhbmRvbSIsImNhbGxSYW5kb21pemVyIiwicmFuZG9tWCIsInJhbmRvbVkiLCJmaWx0ZXJBdHRhY2siLCJhcnJheSIsImN1cnJlbnRBdHRhY2siLCJjdXJyZW50QXR0YWNrQXJyYXkiLCJmaWx0ZXIiLCJpdGVtIiwieENvb3JkIiwieUNvb3JkIiwiZ2V0VHlwZU9mUGxhY2VkU2hpcCIsInNoaXBUeXBlcyIsInNoaXBUeXBlIiwic2hpcExlbmd0aCIsInJlY2lldmVSYW5kb21BdHRhY2siLCJoYXNCZWVuSGl0IiwiaGFzQmVlbk1pc3MiLCJpc0FsbFN1bmsiLCJoYXNTdW5rZWQiLCJpc1N1bmsiLCJnZXRWYWx1ZXMiLCJjaGVja091dE9mQm91bmNlIiwibmV3UG9zaXRpb24iLCJhZGRQb3NpdGlvbiIsInBvc2l0aW9uMSIsInBvc2l0aW9uMiIsIm11bHRpcGx5UG9zaXRpb24iLCJjb21wYXJpbmdQb3NpdGlvbkNvbmRpdGlvbmFsIiwibmV3QXJyYXkiLCJpc09iamVjdCIsImN1cnJlbnRPYmplY3QiLCJjaGVja09iamVjdCIsIm9iamVjdDEiLCJvYmplY3QyIiwiaW5kZXgiLCJzZWNvbmRJbmRleCIsIm9iamVjdElzRXF1YWwiLCJjdXJyZW50T2JqZWN0MiIsImN1cnJlbnRPYmplY3RWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjdXJyZW50T2JqZWN0MlZhbHVlcyIsIm9iamVjdEtleXMiLCJrZXlzIiwib2JqZWN0S2V5czIiLCJrZXkiLCJpdGVtMiIsImNoZWNrT2JqZWN0Qm9vbCIsImdldEFkZGVkUG9zaXRpb24iLCJhZGRlZFBvc2l0aW9uIiwibGVuZ3RoMSIsInBvcHVsYXRlU2hpcHMiLCJjdXJyZW50UG9zaXRpb24iLCJsYXRlc3RBcnJheSIsImFycmF5TGVuZ3RoIiwicG9zIl0sInNvdXJjZVJvb3QiOiIifQ==