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
    if (shiplength === 2) shiplength = 3;
    if (shiplength === 1) shiplength = 2;
    var currentShip = ship.createShip(latestPosition, shiplength, axis);
    var isCollided = compareShipsArray(currentArray, currentShip);

    if (!isCollided && !currentArray.length === 5 && !currentShip) {
      currentArray.push(currentShip);
      currentShips = currentArray;
      return currentArray;
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0VBQ3RCLElBQU1DLFFBQVEsR0FBR0osd0RBQVEsRUFBekI7RUFDQSxJQUFNSyxJQUFJLEdBQUdKLG9EQUFJLEVBQWpCO0VBQ0EsSUFBTUssU0FBUyxHQUFHSix5REFBUyxFQUEzQjtFQUVBLElBQUlLLFlBQVksR0FBRyxFQUFuQjtFQUNBLElBQUlDLElBQUksR0FBRyxFQUFYO0VBQ0EsSUFBSUMsTUFBTSxHQUFHLEVBQWI7O0VBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7SUFBQSxPQUFNQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEVBQTNCLENBQU47RUFBQSxDQUFsQjs7RUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0lBQ3ZCLElBQU1DLEtBQUssR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQWQ7SUFDQSxPQUFPQSxLQUFLLENBQUNKLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JFLEtBQUssQ0FBQ0MsTUFBakMsQ0FBRCxDQUFaO0VBQ0QsQ0FIRDs7RUFLQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFVBQUQsRUFBZ0I7SUFDcENYLFlBQVksR0FBR1csVUFBZjtJQUNBLE9BQU9YLFlBQVA7RUFDRCxDQUhEOztFQUtBLElBQU1ZLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsZ0JBQUQsRUFBbUJDLEtBQW5CLEVBQTZCO0lBQ3JELElBQUlDLGNBQWMsR0FBRyxLQUFyQixDQURxRCxDQUVyRDtJQUNBOztJQUVBRixnQkFBZ0IsQ0FBQ0csT0FBakIsQ0FBeUIsVUFBQ0MsV0FBRCxFQUFpQjtNQUN4Q0EsV0FBVyxDQUFDRCxPQUFaLENBQW9CLFVBQUNFLElBQUQsRUFBVTtRQUM1QkosS0FBSyxDQUFDRSxPQUFOLENBQWMsVUFBQ0csVUFBRCxFQUFnQjtVQUM1QixJQUFJdEIsUUFBUSxDQUFDdUIsZUFBVCxDQUF5QkYsSUFBekIsRUFBK0JDLFVBQS9CLENBQUosRUFBZ0Q7WUFDOUNKLGNBQWMsR0FBRyxJQUFqQjtVQUNEO1FBQ0YsQ0FKRDtNQUtELENBTkQ7SUFPRCxDQVJEO0lBVUEsT0FBT0EsY0FBUDtFQUNELENBaEJEOztFQWtCQSxJQUFNTSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLFFBQUQsRUFBV0MsSUFBWCxFQUFvQjtJQUMxQyxJQUFNQyxjQUFjLEdBQUdGLFFBQXZCO0lBQ0EsSUFBTUcsWUFBWSxHQUFHMUIsU0FBUyxDQUFDMkIsU0FBVixDQUFvQjFCLFlBQXBCLENBQXJCO0lBRUEsSUFBSTJCLFVBQVUsR0FBRyxJQUFJRixZQUFZLENBQUNoQixNQUFsQztJQUVBLElBQUlrQixVQUFVLEtBQUssQ0FBbkIsRUFBc0JBLFVBQVUsR0FBRyxDQUFiO0lBQ3RCLElBQUlBLFVBQVUsS0FBSyxDQUFuQixFQUFzQkEsVUFBVSxHQUFHLENBQWI7SUFFdEIsSUFBTUMsV0FBVyxHQUFHOUIsSUFBSSxDQUFDK0IsVUFBTCxDQUFnQkwsY0FBaEIsRUFBZ0NHLFVBQWhDLEVBQTRDSixJQUE1QyxDQUFwQjtJQUVBLElBQU1PLFVBQVUsR0FBR2xCLGlCQUFpQixDQUFDYSxZQUFELEVBQWVHLFdBQWYsQ0FBcEM7O0lBRUEsSUFBSSxDQUFDRSxVQUFELElBQWUsQ0FBQ0wsWUFBWSxDQUFDaEIsTUFBZCxLQUF5QixDQUF4QyxJQUE2QyxDQUFDbUIsV0FBbEQsRUFBK0Q7TUFDN0RILFlBQVksQ0FBQ00sSUFBYixDQUFrQkgsV0FBbEI7TUFDQTVCLFlBQVksR0FBR3lCLFlBQWY7TUFDQSxPQUFPQSxZQUFQO0lBQ0Q7O0lBRUQsT0FBT0EsWUFBUDtFQUNELENBcEJEOztFQXNCQSxJQUFNTyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUN2QixNQUFELEVBQVNFLFVBQVQsRUFBcUJzQixVQUFyQixFQUFpQ0MsV0FBakMsRUFBaUQ7SUFDeEUsSUFBTXJCLGdCQUFnQixHQUFHRixVQUF6QjtJQUNBLElBQUl3QixZQUFZLEdBQUcxQixNQUFuQjtJQUNBLElBQU0yQixjQUFjLEdBQUd2QyxRQUFRLENBQUN3QyxjQUFULENBQXdCSixVQUFVLEVBQWxDLEVBQXNDQSxVQUFVLEVBQWhELENBQXZCO0lBQ0EsSUFBTUssVUFBVSxHQUFHeEMsSUFBSSxDQUFDK0IsVUFBTCxDQUNqQk8sY0FEaUIsRUFFakJELFlBRmlCLEVBR2pCRCxXQUFXLEVBSE0sQ0FBbkI7O0lBTUEsSUFBSUksVUFBSixFQUFnQjtNQUNkLElBQU1DLFlBQVksR0FBRzNCLGlCQUFpQixDQUFDQyxnQkFBRCxFQUFtQnlCLFVBQW5CLENBQXRDOztNQUNBLElBQUksQ0FBQ0MsWUFBTCxFQUFtQjtRQUNqQixJQUFJSixZQUFZLEdBQUcsQ0FBbkIsRUFBc0JBLFlBQVksSUFBSSxDQUFoQjtRQUN0QixJQUFJeEIsVUFBVSxDQUFDRixNQUFYLEdBQW9CLENBQXhCLEVBQTJCSSxnQkFBZ0IsQ0FBQ2tCLElBQWpCLENBQXNCTyxVQUF0Qjs7UUFFM0IsSUFBSTNCLFVBQVUsQ0FBQ0YsTUFBWCxLQUFzQixDQUExQixFQUE2QjtVQUMzQixPQUFPSSxnQkFBUDtRQUNEO01BQ0Y7SUFDRjs7SUFFRCxPQUFPbUIsZ0JBQWdCLENBQ3JCRyxZQURxQixFQUVyQnRCLGdCQUZxQixFQUdyQm9CLFVBSHFCLEVBSXJCQyxXQUpxQixDQUF2QjtFQU1ELENBNUJEOztFQThCQSxJQUFNTSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNQLFVBQUQsRUFBYUMsV0FBYixFQUE2QjtJQUN0RCxJQUFNdkIsVUFBVSxHQUFHcUIsZ0JBQWdCLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUUMsVUFBUixFQUFvQkMsV0FBcEIsQ0FBbkM7SUFDQWxDLFlBQVksR0FBR1csVUFBZjtJQUVBLE9BQU9BLFVBQVA7RUFDRCxDQUxEOztFQU9BLElBQU04QixVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDakIsY0FBRCxFQUFpQlYsS0FBakIsRUFBd0I0QixXQUF4QixFQUFxQ0MsYUFBckMsRUFBdUQ7SUFDeEUsSUFBSUMsS0FBSyxHQUFHLEtBQVo7SUFDQSxJQUFNL0IsZ0JBQWdCLEdBQUcsRUFBekI7SUFDQSxJQUFNZ0MsVUFBVSxHQUFHSCxXQUFuQjtJQUNBLElBQU1JLFlBQVksR0FBR0gsYUFBckI7SUFFQTdCLEtBQUssQ0FBQ0UsT0FBTixDQUFjLFVBQUMrQixTQUFELEVBQWU7TUFDM0IsSUFBSUMsY0FBYyxHQUFHakQsU0FBUyxDQUFDMkIsU0FBVixDQUFvQnFCLFNBQXBCLENBQXJCO01BQ0EsSUFBTUUsR0FBRyxHQUFHbkQsSUFBSSxDQUFDbUQsR0FBTCxDQUFTRCxjQUFULEVBQXlCeEIsY0FBekIsQ0FBWjs7TUFFQSxJQUFJeUIsR0FBRyxDQUFDQyxRQUFKLENBQWF6QyxNQUFiLEtBQXdCLENBQTVCLEVBQStCO1FBQzdCbUMsS0FBSyxHQUFHLElBQVI7UUFDQUksY0FBYyxHQUFHQyxHQUFHLENBQUNFLFVBQXJCO1FBQ0FOLFVBQVUsQ0FBQ2QsSUFBWCxDQUFnQmtCLEdBQUcsQ0FBQ0MsUUFBSixDQUFhLENBQWIsQ0FBaEI7TUFDRDs7TUFDRHJDLGdCQUFnQixDQUFDa0IsSUFBakIsQ0FBc0JpQixjQUF0QjtJQUNELENBVkQ7SUFXQSxJQUFJLENBQUNKLEtBQUwsRUFBWUUsWUFBWSxDQUFDZixJQUFiLENBQWtCUCxjQUFsQjtJQUVaLElBQU00QixXQUFXLEdBQUc7TUFDbEJSLEtBQUssRUFBTEEsS0FEa0I7TUFFbEIvQixnQkFBZ0IsRUFBaEJBLGdCQUZrQjtNQUdsQmdDLFVBQVUsRUFBVkEsVUFIa0I7TUFJbEJDLFlBQVksRUFBWkE7SUFKa0IsQ0FBcEI7SUFPQSxPQUFPTSxXQUFQO0VBQ0QsQ0EzQkQ7O0VBNkJBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQzdCLGNBQUQsRUFBb0I7SUFDeEMsSUFBTThCLE1BQU0sR0FBR2IsVUFBVSxDQUFDakIsY0FBRCxFQUFpQnhCLFlBQWpCLEVBQStCQyxJQUEvQixFQUFxQ0MsTUFBckMsQ0FBekI7SUFFQUYsWUFBWSxHQUFHc0QsTUFBTSxDQUFDekMsZ0JBQXRCO0lBQ0FaLElBQUksR0FBR3FELE1BQU0sQ0FBQ1QsVUFBZDtJQUNBM0MsTUFBTSxHQUFHb0QsTUFBTSxDQUFDUixZQUFoQjtJQUVBLE9BQU9RLE1BQVA7RUFDRCxDQVJEOztFQVVBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ3RCLFVBQUQsRUFBZ0I7SUFDekMsSUFBSUcsY0FBSjs7SUFFQSxJQUFJSCxVQUFVLENBQUN1QixZQUFmLEVBQTZCO01BQzNCcEIsY0FBYyxHQUFHSCxVQUFVLENBQUN3QixjQUFYLEVBQWpCO0lBQ0QsQ0FGRCxNQUVPO01BQ0wsSUFBTUMsT0FBTyxHQUFHekIsVUFBVSxFQUExQjtNQUNBLElBQU0wQixPQUFPLEdBQUcxQixVQUFVLEVBQTFCO01BQ0FHLGNBQWMsR0FBR3ZDLFFBQVEsQ0FBQ3dDLGNBQVQsQ0FBd0JxQixPQUF4QixFQUFpQ0MsT0FBakMsQ0FBakI7SUFDRDs7SUFFRCxPQUFPdkIsY0FBUDtFQUNELENBWkQ7O0VBY0EsSUFBTXdCLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBUUMsYUFBUixFQUEwQjtJQUM3QyxJQUFNQyxrQkFBa0IsR0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQ3pCLFVBQUNDLElBQUQ7TUFBQSxPQUNFQSxJQUFJLENBQUNDLE1BQUwsS0FBZ0JKLGFBQWEsQ0FBQ0ksTUFBOUIsSUFDQUQsSUFBSSxDQUFDRSxNQUFMLEtBQWdCTCxhQUFhLENBQUNLLE1BRmhDO0lBQUEsQ0FEeUIsQ0FBM0I7SUFNQSxPQUFPSixrQkFBUDtFQUNELENBUkQ7O0VBVUEsSUFBTUssbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0lBQ2hDLElBQUlwRSxZQUFZLENBQUNTLE1BQWIsS0FBd0IsQ0FBNUIsRUFBK0IsT0FBTyxLQUFQO0lBRS9CLElBQU00RCxTQUFTLEdBQUcsQ0FDaEI7TUFBRUMsUUFBUSxFQUFFLFNBQVo7TUFBdUJDLFVBQVUsRUFBRTtJQUFuQyxDQURnQixFQUVoQjtNQUFFRCxRQUFRLEVBQUUsWUFBWjtNQUEwQkMsVUFBVSxFQUFFO0lBQXRDLENBRmdCLEVBR2hCO01BQUVELFFBQVEsRUFBRSxVQUFaO01BQXdCQyxVQUFVLEVBQUU7SUFBcEMsQ0FIZ0IsRUFJaEI7TUFBRUQsUUFBUSxFQUFFLFdBQVo7TUFBeUJDLFVBQVUsRUFBRTtJQUFyQyxDQUpnQixFQUtoQjtNQUFFRCxRQUFRLEVBQUUsU0FBWjtNQUF1QkMsVUFBVSxFQUFFO0lBQW5DLENBTGdCLENBQWxCO0lBUUEsT0FBT0YsU0FBUyxDQUFDckUsWUFBWSxDQUFDUyxNQUFkLENBQWhCO0VBQ0QsQ0FaRDs7RUFjQSxJQUFNK0QsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDdkMsVUFBRCxFQUFnQjtJQUMxQyxJQUFNRyxjQUFjLEdBQUdtQixrQkFBa0IsQ0FBQ3RCLFVBQUQsQ0FBekM7SUFFQSxJQUFNd0MsVUFBVSxHQUFHYixZQUFZLENBQUMzRCxJQUFELEVBQU9tQyxjQUFQLENBQS9CO0lBQ0EsSUFBTXNDLFdBQVcsR0FBR2QsWUFBWSxDQUFDMUQsTUFBRCxFQUFTa0MsY0FBVCxDQUFoQzs7SUFFQSxJQUFJcUMsVUFBVSxDQUFDaEUsTUFBWCxHQUFvQixDQUFwQixJQUF5QmlFLFdBQVcsQ0FBQ2pFLE1BQVosR0FBcUIsQ0FBbEQsRUFBcUQ7TUFDbkQsT0FBTytELG1CQUFtQixDQUFDdkMsVUFBRCxDQUExQjtJQUNEOztJQUNELE9BQU9vQixhQUFhLENBQUNqQixjQUFELENBQXBCO0VBQ0QsQ0FWRDs7RUFZQSxJQUFNdUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtJQUN0QixJQUFJQyxTQUFTLEdBQUcsSUFBaEI7SUFDQTVFLFlBQVksQ0FBQ2dCLE9BQWIsQ0FBcUIsVUFBQ0YsS0FBRCxFQUFXO01BQzlCLElBQUksQ0FBQ2hCLElBQUksQ0FBQytFLE1BQUwsQ0FBWS9ELEtBQVosQ0FBTCxFQUF5QjtRQUN2QjhELFNBQVMsR0FBRyxLQUFaO01BQ0Q7SUFDRixDQUpEO0lBTUEsT0FBT0EsU0FBUDtFQUNELENBVEQ7O0VBV0EsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVk7SUFBQSxPQUFPO01BQ3ZCOUUsWUFBWSxFQUFaQSxZQUR1QjtNQUV2QkMsSUFBSSxFQUFKQSxJQUZ1QjtNQUd2QkMsTUFBTSxFQUFOQTtJQUh1QixDQUFQO0VBQUEsQ0FBbEI7O0VBTUEsT0FBTztJQUNMdUMsVUFBVSxFQUFWQSxVQURLO0lBRUxZLGFBQWEsRUFBYkEsYUFGSztJQUdMc0IsU0FBUyxFQUFUQSxTQUhLO0lBSUxuQyxrQkFBa0IsRUFBbEJBLGtCQUpLO0lBS0xuQixlQUFlLEVBQWZBLGVBTEs7SUFNTFgsYUFBYSxFQUFiQSxhQU5LO0lBT0xQLFNBQVMsRUFBVEEsU0FQSztJQVFMcUUsbUJBQW1CLEVBQW5CQSxtQkFSSztJQVNMakUsVUFBVSxFQUFWQSxVQVRLO0lBVUx1RSxTQUFTLEVBQVRBLFNBVks7SUFXTFYsbUJBQW1CLEVBQW5CQTtFQVhLLENBQVA7QUFhRCxDQXpORDs7QUEyTkEsaUVBQWV4RSxTQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTkE7QUFDQTtBQUVBOztBQUVBLElBQU1tRixJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0VBQ2pCLElBQU1DLFdBQVcsR0FBR3BGLHlEQUFTLEVBQTdCO0VBQ0EsSUFBTXFGLGFBQWEsR0FBR3JGLHlEQUFTLEVBQS9CO0VBQ0EsSUFBTXNGLGdCQUFnQixHQUFHdEYseURBQVMsRUFBbEM7RUFFQSxJQUFNQyxRQUFRLEdBQUdKLHdEQUFRLEVBQXpCO0VBRUEsSUFBTUssSUFBSSxHQUFHSixvREFBSSxFQUFqQjtFQUVBLElBQU11QyxVQUFVLEdBQUdnRCxhQUFhLENBQUM5RSxTQUFqQztFQUNBLElBQU0rQixXQUFXLEdBQUcrQyxhQUFhLENBQUMxRSxVQUFsQzs7RUFFQSxJQUFNNEUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsZ0JBQUQsRUFBc0I7SUFDdkMsSUFBSUEsZ0JBQWdCLENBQUMzRSxNQUFqQixLQUE0QixDQUFoQyxFQUFtQyxPQUFPLElBQVA7SUFDbkMsT0FBTyxLQUFQO0VBQ0QsQ0FIRDs7RUFLQSxJQUFNNEUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtJQUN0QixJQUFNQyxpQkFBaUIsR0FBR0osZ0JBQWdCLENBQUNKLFNBQWpCLEVBQTFCO0lBRUEsSUFBSSxDQUFDSyxVQUFVLENBQUNHLGlCQUFpQixDQUFDdEYsWUFBbkIsQ0FBZixFQUFpRCxPQUFPLEtBQVA7SUFFakRnRixXQUFXLENBQUN0RSxhQUFaLENBQTBCNEUsaUJBQWlCLENBQUN0RixZQUE1QztJQUNBaUYsYUFBYSxDQUFDekMsa0JBQWQsQ0FBaUNQLFVBQWpDLEVBQTZDQyxXQUE3QztJQUNBLE9BQU8sSUFBUDtFQUNELENBUkQ7O0VBVUEsSUFBTXFELFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE1BQUQsRUFBWTtJQUM5QixJQUFNRixpQkFBaUIsR0FBR0osZ0JBQWdCLENBQUNKLFNBQWpCLEVBQTFCO0lBRUEsSUFBSSxDQUFDSyxVQUFVLENBQUNHLGlCQUFpQixDQUFDdEYsWUFBbkIsQ0FBZixFQUFpRCxPQUFPLEtBQVA7SUFFakRpRixhQUFhLENBQUM1QixhQUFkLENBQTRCbUMsTUFBNUI7SUFDQVIsV0FBVyxDQUFDUixtQkFBWixDQUFnQ3ZDLFVBQWhDO0lBRUEsT0FBTyxJQUFQO0VBQ0QsQ0FURDs7RUFXQSxJQUFNd0QsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ25FLFFBQUQsRUFBV0MsSUFBWDtJQUFBLE9BQ2hCMkQsZ0JBQWdCLENBQUM3RCxlQUFqQixDQUFpQ0MsUUFBakMsRUFBMkNDLElBQTNDLENBRGdCO0VBQUEsQ0FBbEI7O0VBR0EsSUFBTW1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07SUFDdkI7SUFFQSxJQUFJVCxhQUFhLENBQUNOLFNBQWQsRUFBSixFQUErQjtNQUM3QixPQUFPO1FBQUVnQixPQUFPLEVBQUUsU0FBWDtRQUFzQkMsWUFBWSxFQUFFO01BQXBDLENBQVA7SUFDRDs7SUFFRCxJQUFJWixXQUFXLENBQUNMLFNBQVosRUFBSixFQUE2QjtNQUMzQixPQUFPO1FBQUVnQixPQUFPLEVBQUUsVUFBWDtRQUF1QkMsWUFBWSxFQUFFO01BQXJDLENBQVA7SUFDRDs7SUFDRCxPQUFPO01BQUVBLFlBQVksRUFBRTtJQUFoQixDQUFQO0VBQ0QsQ0FYRDs7RUFhQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLGFBQUQsRUFBZ0JDLGVBQWhCLEVBQW9DO0lBQ3hELElBQU1DLGNBQWMsR0FBR2QsZ0JBQWdCLENBQUNkLG1CQUFqQixFQUF2QixDQUR3RCxDQUd4RDtJQUNBO0lBQ0E7O0lBRUEsSUFBTXhDLFdBQVcsR0FBRzlCLElBQUksQ0FBQytCLFVBQUwsQ0FDbEJpRSxhQURrQixFQUVsQkUsY0FBYyxDQUFDekIsVUFGRyxFQUdsQndCLGVBSGtCLENBQXBCLENBUHdELENBWXhEOztJQUVBLE9BQU9uRSxXQUFQO0VBQ0QsQ0FmRDs7RUFpQkEsSUFBTXFFLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7SUFBQSxPQUFPO01BQzNCakIsV0FBVyxFQUFYQSxXQUQyQjtNQUUzQkMsYUFBYSxFQUFiQSxhQUYyQjtNQUczQkMsZ0JBQWdCLEVBQWhCQTtJQUgyQixDQUFQO0VBQUEsQ0FBdEI7O0VBTUEsT0FBTztJQUNMQyxVQUFVLEVBQVZBLFVBREs7SUFFTEksV0FBVyxFQUFYQSxXQUZLO0lBR0xGLFNBQVMsRUFBVEEsU0FISztJQUlMSyxVQUFVLEVBQVZBLFVBSks7SUFLTEQsU0FBUyxFQUFUQSxTQUxLO0lBTUxRLGFBQWEsRUFBYkEsYUFOSztJQU9MSixhQUFhLEVBQWJBO0VBUEssQ0FBUDtBQVNELENBdEZEOztBQXdGQSxJQUFNSyxVQUFVLEdBQUduQixJQUFJLEVBQXZCOzs7Ozs7Ozs7Ozs7Ozs7QUM3RkEsSUFBTXRGLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07RUFDckIsSUFBTTRDLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQzZCLE1BQUQsRUFBU0MsTUFBVDtJQUFBLE9BQXFCO01BQUVELE1BQU0sRUFBTkEsTUFBRjtNQUFVQyxNQUFNLEVBQU5BO0lBQVYsQ0FBckI7RUFBQSxDQUF2Qjs7RUFFQSxJQUFNZ0MsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxXQUFELEVBQWlCO0lBQ3hDLElBQUlBLFdBQVcsQ0FBQ2xDLE1BQVosR0FBcUIsQ0FBckIsSUFBMEJrQyxXQUFXLENBQUNqQyxNQUFaLEdBQXFCLENBQW5ELEVBQXNELE9BQU8sSUFBUDtJQUN0RCxJQUFJaUMsV0FBVyxDQUFDbEMsTUFBWixHQUFxQixDQUFyQixJQUEwQmtDLFdBQVcsQ0FBQ2pDLE1BQVosR0FBcUIsQ0FBbkQsRUFBc0QsT0FBTyxJQUFQO0lBQ3RELE9BQU8sS0FBUDtFQUNELENBSkQ7O0VBTUEsSUFBTWtDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFNBQUQsRUFBWUMsU0FBWixFQUEwQjtJQUM1QyxJQUFJRCxTQUFTLEtBQUssS0FBZCxJQUF1QkMsU0FBUyxLQUFLLEtBQXpDLEVBQWdELE9BQU8sS0FBUDtJQUVoRCxJQUFNSCxXQUFXLEdBQUcvRCxjQUFjLENBQUNpRSxTQUFTLENBQUNwQyxNQUFYLEVBQW1Cb0MsU0FBUyxDQUFDbkMsTUFBN0IsQ0FBbEM7SUFDQWlDLFdBQVcsQ0FBQ2xDLE1BQVosSUFBc0JxQyxTQUFTLENBQUNyQyxNQUFoQztJQUNBa0MsV0FBVyxDQUFDakMsTUFBWixJQUFzQm9DLFNBQVMsQ0FBQ3BDLE1BQWhDO0lBRUEsSUFBSWdDLGdCQUFnQixDQUFDQyxXQUFELENBQXBCLEVBQW1DLE9BQU8sS0FBUDtJQUVuQyxPQUFPQSxXQUFQO0VBQ0QsQ0FWRDs7RUFZQSxJQUFNSSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNGLFNBQUQsRUFBWUMsU0FBWixFQUEwQjtJQUNqRCxJQUFJRCxTQUFTLEtBQUssS0FBZCxJQUF1QkMsU0FBUyxLQUFLLEtBQXpDLEVBQWdELE9BQU8sS0FBUDtJQUVoRCxJQUFNSCxXQUFXLEdBQUcvRCxjQUFjLENBQUNpRSxTQUFTLENBQUNwQyxNQUFYLEVBQW1Cb0MsU0FBUyxDQUFDbkMsTUFBN0IsQ0FBbEM7SUFDQWlDLFdBQVcsQ0FBQ2xDLE1BQVosSUFBc0JxQyxTQUFTLENBQUNyQyxNQUFoQztJQUNBa0MsV0FBVyxDQUFDakMsTUFBWixJQUFzQm9DLFNBQVMsQ0FBQ3BDLE1BQWhDO0lBRUEsSUFBSWdDLGdCQUFnQixDQUFDQyxXQUFELENBQXBCLEVBQW1DLE9BQU8sS0FBUDtJQUVuQyxPQUFPQSxXQUFQO0VBQ0QsQ0FWRDs7RUFZQSxJQUFNSyw0QkFBNEIsR0FBRyxTQUEvQkEsNEJBQStCLENBQUNILFNBQUQsRUFBWUMsU0FBWixFQUF1QmhGLElBQXZCLEVBQWdDO0lBQ25FLElBQUkrRSxTQUFTLENBQUMvRSxJQUFELENBQVQsS0FBb0JnRixTQUFTLENBQUNoRixJQUFELENBQVQsR0FBa0IsQ0FBMUMsRUFBNkMsT0FBTyxJQUFQO0lBQzdDLElBQUkrRSxTQUFTLENBQUMvRSxJQUFELENBQVQsS0FBb0JnRixTQUFTLENBQUNoRixJQUFELENBQWpDLEVBQXlDLE9BQU8sSUFBUDtJQUN6QyxJQUFJK0UsU0FBUyxDQUFDL0UsSUFBRCxDQUFULEtBQW9CZ0YsU0FBUyxDQUFDaEYsSUFBRCxDQUFULEdBQWtCLENBQTFDLEVBQTZDLE9BQU8sSUFBUDtJQUM3QyxPQUFPLEtBQVA7RUFDRCxDQUxEOztFQU9BLElBQU1ILGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ2tGLFNBQUQsRUFBWUMsU0FBWixFQUEwQjtJQUNoRCxJQUFJLENBQUNFLDRCQUE0QixDQUFDSCxTQUFELEVBQVlDLFNBQVosRUFBdUIsUUFBdkIsQ0FBakMsRUFBbUU7TUFDakUsT0FBTyxLQUFQO0lBQ0Q7O0lBQ0QsSUFBSSxDQUFDRSw0QkFBNEIsQ0FBQ0gsU0FBRCxFQUFZQyxTQUFaLEVBQXVCLFFBQXZCLENBQWpDLEVBQW1FO01BQ2pFLE9BQU8sS0FBUDtJQUNEOztJQUNELE9BQU8sSUFBUDtFQUNELENBUkQ7O0VBVUEsT0FBTztJQUNMbEUsY0FBYyxFQUFkQSxjQURLO0lBRUxnRSxXQUFXLEVBQVhBLFdBRks7SUFHTEcsZ0JBQWdCLEVBQWhCQSxnQkFISztJQUlMcEYsZUFBZSxFQUFmQSxlQUpLO0lBS0wrRSxnQkFBZ0IsRUFBaEJBO0VBTEssQ0FBUDtBQU9ELENBekREOztBQTJEQSxpRUFBZTFHLFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREEsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtFQUN0QixJQUFNK0IsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ21DLEtBQUQsRUFBVztJQUMzQixJQUFNNkMsUUFBUSxHQUFHLEVBQWpCO0lBRUE3QyxLQUFLLENBQUM3QyxPQUFOLENBQWMsVUFBQ2lELElBQUQsRUFBVTtNQUN0QnlDLFFBQVEsQ0FBQzNFLElBQVQsQ0FBY2tDLElBQWQ7SUFDRCxDQUZEO0lBSUEsT0FBT3lDLFFBQVA7RUFDRCxDQVJEOztFQVVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLGFBQUQsRUFBbUI7SUFDbEMsSUFBSSxRQUFPQSxhQUFQLE1BQXlCLFFBQXpCLElBQXFDQSxhQUFhLEtBQUssSUFBM0QsRUFBaUU7TUFDL0QsT0FBTyxJQUFQO0lBQ0Q7O0lBQ0QsT0FBTyxLQUFQO0VBQ0QsQ0FMRDs7RUFPQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQVVDLE9BQVYsRUFBc0I7SUFDeEMsSUFBSUMsS0FBSyxHQUFHLENBQVo7SUFDQSxJQUFJQyxXQUFXLEdBQUcsQ0FBbEI7SUFFQSxJQUFJQyxhQUFhLEdBQUcsSUFBcEI7SUFFQSxJQUFNTixhQUFhLEdBQUdFLE9BQXRCO0lBQ0EsSUFBTUssY0FBYyxHQUFHSixPQUF2QjtJQUVBLElBQU1LLG1CQUFtQixHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1YsYUFBZCxDQUE1QjtJQUNBLElBQU1XLG9CQUFvQixHQUFHRixNQUFNLENBQUNDLE1BQVAsQ0FBY0gsY0FBZCxDQUE3QjtJQUVBLElBQU1LLFVBQVUsR0FBR0gsTUFBTSxDQUFDSSxJQUFQLENBQVliLGFBQVosQ0FBbkI7SUFDQSxJQUFNYyxXQUFXLEdBQUdMLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZTixjQUFaLENBQXBCO0lBRUFLLFVBQVUsQ0FBQ3hHLE9BQVgsQ0FBbUIsVUFBQzJHLEdBQUQsRUFBUztNQUMxQixJQUFJQSxHQUFHLEtBQUtELFdBQVcsQ0FBQ1YsS0FBRCxDQUF2QixFQUFnQ0UsYUFBYSxHQUFHLEtBQWhCO01BQ2hDRixLQUFLLElBQUksQ0FBVDtJQUNELENBSEQ7SUFLQSxJQUFJLENBQUNFLGFBQUwsRUFBb0IsT0FBTyxLQUFQO0lBQ3BCLElBQUlNLFVBQVUsQ0FBQy9HLE1BQVgsS0FBc0JpSCxXQUFXLENBQUNqSCxNQUF0QyxFQUE4QyxPQUFPLEtBQVAsQ0FyQk4sQ0F1QnhDO0lBQ0E7O0lBRUEyRyxtQkFBbUIsQ0FBQ3BHLE9BQXBCLENBQTRCLFVBQUNpRCxJQUFELEVBQVU7TUFDcEMsSUFBTTJELEtBQUssR0FBR0wsb0JBQW9CLENBQUNOLFdBQUQsQ0FBbEM7O01BRUEsSUFBSU4sUUFBUSxDQUFDMUMsSUFBRCxDQUFSLElBQWtCMEMsUUFBUSxDQUFDaUIsS0FBRCxDQUE5QixFQUF1QztRQUNyQyxJQUFNQyxlQUFlLEdBQUdoQixXQUFXLENBQUM1QyxJQUFELEVBQU8yRCxLQUFQLENBQW5DO1FBRUEsSUFBSSxDQUFDQyxlQUFMLEVBQXNCWCxhQUFhLEdBQUcsS0FBaEI7TUFDdkIsQ0FKRCxNQUlPLElBQUlqRCxJQUFJLEtBQUsyRCxLQUFiLEVBQW9CO1FBQ3pCVixhQUFhLEdBQUcsS0FBaEI7TUFDRDs7TUFFREQsV0FBVyxJQUFJLENBQWY7SUFDRCxDQVpEO0lBY0EsT0FBT0MsYUFBUDtFQUNELENBekNEOztFQTJDQSxPQUFPO0lBQUV4RixTQUFTLEVBQVRBLFNBQUY7SUFBYW1GLFdBQVcsRUFBWEE7RUFBYixDQUFQO0FBQ0QsQ0E5REQ7O0FBZ0VBLGlFQUFlbEgsU0FBZjs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBOztBQUVBLElBQU1ELElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07RUFDakIsSUFBTUcsUUFBUSxHQUFHSix3REFBUSxFQUF6Qjs7RUFFQSxJQUFNcUksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDdkcsSUFBRCxFQUFVO0lBQ2pDLElBQUl3RyxhQUFKO0lBRUEsSUFBSXhHLElBQUksS0FBSyxHQUFiLEVBQWtCd0csYUFBYSxHQUFHbEksUUFBUSxDQUFDd0MsY0FBVCxDQUF3QixDQUF4QixFQUEyQixDQUEzQixDQUFoQixDQUFsQixLQUNLMEYsYUFBYSxHQUFHbEksUUFBUSxDQUFDd0MsY0FBVCxDQUF3QixDQUF4QixFQUEyQixDQUEzQixDQUFoQjtJQUVMLE9BQU8wRixhQUFQO0VBQ0QsQ0FQRDs7RUFTQSxJQUFNbEcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ3lFLFNBQUQsRUFBWTBCLE9BQVosRUFBcUJ6RyxJQUFyQixFQUE4QjtJQUMvQyxJQUFJeUcsT0FBTyxLQUFLLENBQVosSUFBaUJBLE9BQU8sR0FBRyxDQUEvQixFQUFrQyxPQUFPLEtBQVA7SUFDbEMsSUFBSW5JLFFBQVEsQ0FBQ3NHLGdCQUFULENBQTBCRyxTQUExQixDQUFKLEVBQTBDLE9BQU8sS0FBUDs7SUFFMUMsSUFBTTJCLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsZUFBRCxFQUFrQi9GLFlBQWxCLEVBQWdDZ0csV0FBaEMsRUFBZ0Q7TUFDcEUsSUFBTTFHLFlBQVksR0FBRzBHLFdBQXJCO01BQ0EsSUFBSS9CLFdBQVcsR0FBRzhCLGVBQWxCO01BRUEsSUFBSUEsZUFBZSxLQUFLLEtBQXhCLEVBQStCLE9BQU8sS0FBUDtNQUMvQixJQUFJL0YsWUFBWSxLQUFLLENBQXJCLEVBQXdCLE9BQU9WLFlBQVA7O01BQ3hCLElBQUlVLFlBQVksS0FBSzZGLE9BQXJCLEVBQThCO1FBQzVCdkcsWUFBWSxDQUFDTSxJQUFiLENBQWtCbUcsZUFBbEI7UUFDQSxPQUFPRCxhQUFhLENBQUNDLGVBQUQsRUFBa0IvRixZQUFZLEdBQUcsQ0FBakMsRUFBb0NWLFlBQXBDLENBQXBCO01BQ0Q7O01BQ0QsSUFBTXNHLGFBQWEsR0FBR0QsZ0JBQWdCLENBQUN2RyxJQUFELENBQXRDO01BQ0E2RSxXQUFXLEdBQUd2RyxRQUFRLENBQUN3RyxXQUFULENBQXFCRCxXQUFyQixFQUFrQzJCLGFBQWxDLENBQWQ7TUFFQSxJQUFJLENBQUMzQixXQUFMLEVBQWtCLE9BQU9BLFdBQVA7TUFDbEIzRSxZQUFZLENBQUNNLElBQWIsQ0FBa0JxRSxXQUFsQjtNQUVBLElBQU1nQyxXQUFXLEdBQUczRyxZQUFZLENBQUNoQixNQUFiLEdBQXNCLENBQTFDO01BRUEsT0FBT3dILGFBQWEsQ0FDbEJ4RyxZQUFZLENBQUMyRyxXQUFELENBRE0sRUFFbEJqRyxZQUFZLEdBQUcsQ0FGRyxFQUdsQlYsWUFIa0IsQ0FBcEI7SUFLRCxDQXZCRDs7SUF5QkEsT0FBT3dHLGFBQWEsQ0FBQzNCLFNBQUQsRUFBWTBCLE9BQVosRUFBcUIsRUFBckIsRUFBeUIsS0FBekIsQ0FBcEI7RUFDRCxDQTlCRDs7RUFrQ0EsSUFBTW5ELE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUM5QixTQUFELEVBQWU7SUFDNUIsSUFBSUEsU0FBUyxDQUFDdEMsTUFBVixLQUFxQixDQUF6QixFQUE0QixPQUFPLElBQVA7SUFDNUIsT0FBTyxLQUFQO0VBQ0QsQ0FIRDs7RUFLQSxJQUFNd0MsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0QsY0FBRCxFQUFpQm5ELFFBQWpCLEVBQThCO0lBQ3hDLElBQU1xRCxRQUFRLEdBQUdGLGNBQWMsQ0FBQ2dCLE1BQWYsQ0FBc0IsVUFBQ3FFLEdBQUQsRUFBUztNQUM5QyxJQUFJQSxHQUFHLENBQUNuRSxNQUFKLEtBQWVyRSxRQUFRLENBQUNxRSxNQUF4QixJQUFrQ21FLEdBQUcsQ0FBQ2xFLE1BQUosS0FBZXRFLFFBQVEsQ0FBQ3NFLE1BQTlELEVBQXNFO1FBQ3BFLE9BQU8sSUFBUDtNQUNEOztNQUNELE9BQU8sS0FBUDtJQUNELENBTGdCLENBQWpCO0lBTUEsSUFBTWhCLFVBQVUsR0FBR0gsY0FBYyxDQUFDZ0IsTUFBZixDQUFzQixVQUFDcUUsR0FBRCxFQUFTO01BQ2hELElBQUlBLEdBQUcsQ0FBQ25FLE1BQUosS0FBZXJFLFFBQVEsQ0FBQ3FFLE1BQXhCLElBQWtDbUUsR0FBRyxDQUFDbEUsTUFBSixLQUFldEUsUUFBUSxDQUFDc0UsTUFBOUQsRUFBc0U7UUFDcEUsT0FBTyxLQUFQO01BQ0Q7O01BQ0QsT0FBTyxJQUFQO0lBQ0QsQ0FMa0IsQ0FBbkI7SUFPQSxPQUFPO01BQUVqQixRQUFRLEVBQVJBLFFBQUY7TUFBWUMsVUFBVSxFQUFWQTtJQUFaLENBQVA7RUFDRCxDQWZEOztFQWlCQSxPQUFPO0lBQ0x0QixVQUFVLEVBQVZBLFVBREs7SUFFTG9CLEdBQUcsRUFBSEEsR0FGSztJQUdMNEIsTUFBTSxFQUFOQTtFQUhLLENBQVA7QUFLRCxDQXpFRDs7QUEyRUEsaUVBQWVuRixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3ByYWN0aWNhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IFByYWN0aWNhbCBmcm9tICcuL3ByYWN0aWNhbC5qcyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbigpO1xuICBjb25zdCBzaGlwID0gU2hpcCgpO1xuICBjb25zdCBwcmFjdGljYWwgPSBQcmFjdGljYWwoKTtcblxuICBsZXQgY3VycmVudFNoaXBzID0gW107XG4gIGxldCBoaXRzID0gW107XG4gIGxldCBtaXNzZXMgPSBbXTtcblxuICBjb25zdCByYW5kb21pemUgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgY29uc3QgcmFuZG9tQXhpcyA9ICgpID0+IHtcbiAgICBjb25zdCBheGllcyA9IFsneCcsICd5J107XG4gICAgcmV0dXJuIGF4aWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF4aWVzLmxlbmd0aCldO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlQWxsU2hpcHMgPSAoc2hpcHNBcnJheSkgPT4ge1xuICAgIGN1cnJlbnRTaGlwcyA9IHNoaXBzQXJyYXk7XG4gICAgcmV0dXJuIGN1cnJlbnRTaGlwcztcbiAgfTtcblxuICBjb25zdCBjb21wYXJlU2hpcHNBcnJheSA9IChsYXRlc3RTaGlwc0FycmF5LCBzaGlwcykgPT4ge1xuICAgIGxldCBzaGlwc0RvQ29sbGlkZSA9IGZhbHNlO1xuICAgIC8vIGNvbnNvbGUubG9nKGxhdGVzdFNoaXBzQXJyYXksICd0aGUgY3VycmVlbnQgc2hpcHMgYXJyYXknKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwcywgJ3RoZSBjdXJyZW50IHNoaXBzJyk7XG5cbiAgICBsYXRlc3RTaGlwc0FycmF5LmZvckVhY2goKGxhdGVzdFNoaXBzKSA9PiB7XG4gICAgICBsYXRlc3RTaGlwcy5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKGxhdGVzdEJvYXQpID0+IHtcbiAgICAgICAgICBpZiAocG9zaXRpb24uY29tcGFyZVBvc2l0aW9uKGJvYXQsIGxhdGVzdEJvYXQpKSB7XG4gICAgICAgICAgICBzaGlwc0RvQ29sbGlkZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBzRG9Db2xsaWRlO1xuICB9O1xuXG4gIGNvbnN0IHBsYXllclBsYWNlU2hpcCA9IChsb2NhdGlvbiwgYXhpcykgPT4ge1xuICAgIGNvbnN0IGxhdGVzdFBvc2l0aW9uID0gbG9jYXRpb247XG4gICAgY29uc3QgY3VycmVudEFycmF5ID0gcHJhY3RpY2FsLmNvcHlBcnJheShjdXJyZW50U2hpcHMpO1xuXG4gICAgbGV0IHNoaXBsZW5ndGggPSA1IC0gY3VycmVudEFycmF5Lmxlbmd0aDtcblxuICAgIGlmIChzaGlwbGVuZ3RoID09PSAyKSBzaGlwbGVuZ3RoID0gMztcbiAgICBpZiAoc2hpcGxlbmd0aCA9PT0gMSkgc2hpcGxlbmd0aCA9IDI7XG5cbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXAuY3JlYXRlU2hpcChsYXRlc3RQb3NpdGlvbiwgc2hpcGxlbmd0aCwgYXhpcyk7XG5cbiAgICBjb25zdCBpc0NvbGxpZGVkID0gY29tcGFyZVNoaXBzQXJyYXkoY3VycmVudEFycmF5LCBjdXJyZW50U2hpcCk7XG5cbiAgICBpZiAoIWlzQ29sbGlkZWQgJiYgIWN1cnJlbnRBcnJheS5sZW5ndGggPT09IDUgJiYgIWN1cnJlbnRTaGlwKSB7XG4gICAgICBjdXJyZW50QXJyYXkucHVzaChjdXJyZW50U2hpcCk7XG4gICAgICBjdXJyZW50U2hpcHMgPSBjdXJyZW50QXJyYXk7XG4gICAgICByZXR1cm4gY3VycmVudEFycmF5O1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50QXJyYXk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VSYW5kb21TaGlwcyA9IChsZW5ndGgsIHNoaXBzQXJyYXksIHJhbmRvbWl6ZXIsIHJhbmRvbUF4aWVzKSA9PiB7XG4gICAgY29uc3QgbGF0ZXN0U2hpcHNBcnJheSA9IHNoaXBzQXJyYXk7XG4gICAgbGV0IGxhdGVzdExlbmd0aCA9IGxlbmd0aDtcbiAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IHBvc2l0aW9uLmNyZWF0ZVBvc2l0aW9uKHJhbmRvbWl6ZXIoKSwgcmFuZG9taXplcigpKTtcbiAgICBjb25zdCByYW5kb21TaGlwID0gc2hpcC5jcmVhdGVTaGlwKFxuICAgICAgcmFuZG9tUG9zaXRpb24sXG4gICAgICBsYXRlc3RMZW5ndGgsXG4gICAgICByYW5kb21BeGllcygpXG4gICAgKTtcblxuICAgIGlmIChyYW5kb21TaGlwKSB7XG4gICAgICBjb25zdCBzaGlwQ29sbGlkZXMgPSBjb21wYXJlU2hpcHNBcnJheShsYXRlc3RTaGlwc0FycmF5LCByYW5kb21TaGlwKTtcbiAgICAgIGlmICghc2hpcENvbGxpZGVzKSB7XG4gICAgICAgIGlmIChsYXRlc3RMZW5ndGggPiAyKSBsYXRlc3RMZW5ndGggLT0gMTtcbiAgICAgICAgaWYgKHNoaXBzQXJyYXkubGVuZ3RoIDwgNSkgbGF0ZXN0U2hpcHNBcnJheS5wdXNoKHJhbmRvbVNoaXApO1xuXG4gICAgICAgIGlmIChzaGlwc0FycmF5Lmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgIHJldHVybiBsYXRlc3RTaGlwc0FycmF5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWNlUmFuZG9tU2hpcHMoXG4gICAgICBsYXRlc3RMZW5ndGgsXG4gICAgICBsYXRlc3RTaGlwc0FycmF5LFxuICAgICAgcmFuZG9taXplcixcbiAgICAgIHJhbmRvbUF4aWVzXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXBzUmFuZG9tbHkgPSAocmFuZG9taXplciwgcmFuZG9tQXhpZXMpID0+IHtcbiAgICBjb25zdCBzaGlwc0FycmF5ID0gcGxhY2VSYW5kb21TaGlwcyg1LCBbXSwgcmFuZG9taXplciwgcmFuZG9tQXhpZXMpO1xuICAgIGN1cnJlbnRTaGlwcyA9IHNoaXBzQXJyYXk7XG5cbiAgICByZXR1cm4gc2hpcHNBcnJheTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tTaGlwID0gKGxhdGVzdFBvc2l0aW9uLCBzaGlwcywgY3VycmVudEhpdHMsIGN1cnJlbnRNaXNzZXMpID0+IHtcbiAgICBsZXQgaXNIaXQgPSBmYWxzZTtcbiAgICBjb25zdCBsYXRlc3RTaGlwc0FycmF5ID0gW107XG4gICAgY29uc3QgbGF0ZXN0SGl0cyA9IGN1cnJlbnRIaXRzO1xuICAgIGNvbnN0IGxhdGVzdE1pc3NlcyA9IGN1cnJlbnRNaXNzZXM7XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwQXJyYXkpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbnNBcnJheSA9IHByYWN0aWNhbC5jb3B5QXJyYXkoc2hpcEFycmF5KTtcbiAgICAgIGNvbnN0IGhpdCA9IHNoaXAuaGl0KHBvc2l0aW9uc0FycmF5LCBsYXRlc3RQb3NpdGlvbik7XG5cbiAgICAgIGlmIChoaXQuaGl0QXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgcG9zaXRpb25zQXJyYXkgPSBoaXQuc2hpcEFycmF5cztcbiAgICAgICAgbGF0ZXN0SGl0cy5wdXNoKGhpdC5oaXRBcnJheVswXSk7XG4gICAgICB9XG4gICAgICBsYXRlc3RTaGlwc0FycmF5LnB1c2gocG9zaXRpb25zQXJyYXkpO1xuICAgIH0pO1xuICAgIGlmICghaXNIaXQpIGxhdGVzdE1pc3Nlcy5wdXNoKGxhdGVzdFBvc2l0aW9uKTtcblxuICAgIGNvbnN0IGZpbmFsT2JqZWN0ID0ge1xuICAgICAgaXNIaXQsXG4gICAgICBsYXRlc3RTaGlwc0FycmF5LFxuICAgICAgbGF0ZXN0SGl0cyxcbiAgICAgIGxhdGVzdE1pc3NlcyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZpbmFsT2JqZWN0O1xuICB9O1xuXG4gIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAobGF0ZXN0UG9zaXRpb24pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhdHRhY2tTaGlwKGxhdGVzdFBvc2l0aW9uLCBjdXJyZW50U2hpcHMsIGhpdHMsIG1pc3Nlcyk7XG5cbiAgICBjdXJyZW50U2hpcHMgPSByZXN1bHQubGF0ZXN0U2hpcHNBcnJheTtcbiAgICBoaXRzID0gcmVzdWx0LmxhdGVzdEhpdHM7XG4gICAgbWlzc2VzID0gcmVzdWx0LmxhdGVzdE1pc3NlcztcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUmFuZG9tQ29vcmRzID0gKHJhbmRvbWl6ZXIpID0+IHtcbiAgICBsZXQgcmFuZG9tUG9zaXRpb247XG5cbiAgICBpZiAocmFuZG9taXplci5pc01vY2tSYW5kb20pIHtcbiAgICAgIHJhbmRvbVBvc2l0aW9uID0gcmFuZG9taXplci5jYWxsUmFuZG9taXplcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByYW5kb21YID0gcmFuZG9taXplcigpO1xuICAgICAgY29uc3QgcmFuZG9tWSA9IHJhbmRvbWl6ZXIoKTtcbiAgICAgIHJhbmRvbVBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24ocmFuZG9tWCwgcmFuZG9tWSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmRvbVBvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlckF0dGFjayA9IChhcnJheSwgY3VycmVudEF0dGFjaykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRBdHRhY2tBcnJheSA9IGFycmF5LmZpbHRlcihcbiAgICAgIChpdGVtKSA9PlxuICAgICAgICBpdGVtLnhDb29yZCA9PT0gY3VycmVudEF0dGFjay54Q29vcmQgJiZcbiAgICAgICAgaXRlbS55Q29vcmQgPT09IGN1cnJlbnRBdHRhY2sueUNvb3JkXG4gICAgKTtcblxuICAgIHJldHVybiBjdXJyZW50QXR0YWNrQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VHlwZU9mUGxhY2VkU2hpcCA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFNoaXBzLmxlbmd0aCA9PT0gNSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3Qgc2hpcFR5cGVzID0gW1xuICAgICAgeyBzaGlwVHlwZTogJ2NhcnJpZXInLCBzaGlwTGVuZ3RoOiA1IH0sXG4gICAgICB7IHNoaXBUeXBlOiAnYmF0dGxlc2hpcCcsIHNoaXBMZW5ndGg6IDQgfSxcbiAgICAgIHsgc2hpcFR5cGU6ICdkZXN0b3llcicsIHNoaXBMZW5ndGg6IDMgfSxcbiAgICAgIHsgc2hpcFR5cGU6ICdzdWJtYXJpbmUnLCBzaGlwTGVuZ3RoOiAzIH0sXG4gICAgICB7IHNoaXBUeXBlOiAnZ3VuYm9hdCcsIHNoaXBMZW5ndGg6IDIgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIHNoaXBUeXBlc1tjdXJyZW50U2hpcHMubGVuZ3RoXTtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlUmFuZG9tQXR0YWNrID0gKHJhbmRvbWl6ZXIpID0+IHtcbiAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IGNyZWF0ZVJhbmRvbUNvb3JkcyhyYW5kb21pemVyKTtcblxuICAgIGNvbnN0IGhhc0JlZW5IaXQgPSBmaWx0ZXJBdHRhY2soaGl0cywgcmFuZG9tUG9zaXRpb24pO1xuICAgIGNvbnN0IGhhc0JlZW5NaXNzID0gZmlsdGVyQXR0YWNrKG1pc3NlcywgcmFuZG9tUG9zaXRpb24pO1xuXG4gICAgaWYgKGhhc0JlZW5IaXQubGVuZ3RoID4gMCB8fCBoYXNCZWVuTWlzcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gcmVjaWV2ZVJhbmRvbUF0dGFjayhyYW5kb21pemVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlY2lldmVBdHRhY2socmFuZG9tUG9zaXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IGlzQWxsU3VuayA9ICgpID0+IHtcbiAgICBsZXQgaGFzU3Vua2VkID0gdHJ1ZTtcbiAgICBjdXJyZW50U2hpcHMuZm9yRWFjaCgoc2hpcHMpID0+IHtcbiAgICAgIGlmICghc2hpcC5pc1N1bmsoc2hpcHMpKSB7XG4gICAgICAgIGhhc1N1bmtlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhhc1N1bmtlZDtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZXMgPSAoKSA9PiAoe1xuICAgIGN1cnJlbnRTaGlwcyxcbiAgICBoaXRzLFxuICAgIG1pc3NlcyxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhdHRhY2tTaGlwLFxuICAgIHJlY2lldmVBdHRhY2ssXG4gICAgaXNBbGxTdW5rLFxuICAgIHBsYWNlU2hpcHNSYW5kb21seSxcbiAgICBwbGF5ZXJQbGFjZVNoaXAsXG4gICAgcGxhY2VBbGxTaGlwcyxcbiAgICByYW5kb21pemUsXG4gICAgcmVjaWV2ZVJhbmRvbUF0dGFjayxcbiAgICByYW5kb21BeGlzLFxuICAgIGdldFZhbHVlcyxcbiAgICBnZXRUeXBlT2ZQbGFjZWRTaGlwLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuXG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG5cbmNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgcGxheWVyQ2hlY2tCb2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24oKTtcblxuICBjb25zdCBzaGlwID0gU2hpcCgpO1xuXG4gIGNvbnN0IHJhbmRvbWl6ZXIgPSBjb21wdXRlckJvYXJkLnJhbmRvbWl6ZTtcbiAgY29uc3QgcmFuZG9tQXhpZXMgPSBjb21wdXRlckJvYXJkLnJhbmRvbUF4aXM7XG5cbiAgY29uc3QgY2hlY2tTZXR1cCA9IChwbGF5ZXJDaGVja1NoaXBzKSA9PiB7XG4gICAgaWYgKHBsYXllckNoZWNrU2hpcHMubGVuZ3RoID09PSA1KSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBHYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllckNoZWNrVmFsdWVzID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIGlmICghY2hlY2tTZXR1cChwbGF5ZXJDaGVja1ZhbHVlcy5jdXJyZW50U2hpcHMpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBwbGF5ZXJCb2FyZC5wbGFjZUFsbFNoaXBzKHBsYXllckNoZWNrVmFsdWVzLmN1cnJlbnRTaGlwcyk7XG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXBzUmFuZG9tbHkocmFuZG9taXplciwgcmFuZG9tQXhpZXMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja0JvYXRzID0gKGNvb3JkcykgPT4ge1xuICAgIGNvbnN0IHBsYXllckNoZWNrVmFsdWVzID0gcGxheWVyQ2hlY2tCb2FyZC5nZXRWYWx1ZXMoKTtcblxuICAgIGlmICghY2hlY2tTZXR1cChwbGF5ZXJDaGVja1ZhbHVlcy5jdXJyZW50U2hpcHMpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb21wdXRlckJvYXJkLnJlY2lldmVBdHRhY2soY29vcmRzKTtcbiAgICBwbGF5ZXJCb2FyZC5yZWNpZXZlUmFuZG9tQXR0YWNrKHJhbmRvbWl6ZXIpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBTaGlwID0gKGxvY2F0aW9uLCBheGlzKSA9PlxuICAgIHBsYXllckNoZWNrQm9hcmQucGxheWVyUGxhY2VTaGlwKGxvY2F0aW9uLCBheGlzKTtcblxuICBjb25zdCBnYW1lSXNPdmVyID0gKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHBsYXllckJvYXJkVmFsdWVzLmN1cnJlbnRTaGlwcywgJ3RoZSBjdXJyZW50IHNoaXBzJyk7XG5cbiAgICBpZiAoY29tcHV0ZXJCb2FyZC5pc0FsbFN1bmsoKSkge1xuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ1lvdSBXb24nLCBnYW1lRmluaXNoZWQ6IHRydWUgfTtcbiAgICB9XG5cbiAgICBpZiAocGxheWVyQm9hcmQuaXNBbGxTdW5rKCkpIHtcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdZb3UgTG9zdCcsIGdhbWVGaW5pc2hlZDogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4geyBnYW1lRmluaXNoZWQ6IGZhbHNlIH07XG4gIH07XG5cbiAgY29uc3QgYXJyYW5nZUJsb2NrcyA9IChtb3VzZVBvc2l0aW9uLCBjdXJyZW50Um90YXRpb24pID0+IHtcbiAgICBjb25zdCBzaGlwVHlwZU9iamVjdCA9IHBsYXllckNoZWNrQm9hcmQuZ2V0VHlwZU9mUGxhY2VkU2hpcCgpO1xuXG4gICAgLy8gY29uc29sZS5sb2coc2hpcFR5cGVPYmplY3QsICd0aGUgc2hpcCB0eXBlIG9iamVjdCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKG1vdXNlUG9zaXRpb24sICd0aGUgbW91c2UgcG9zaXRpb24nKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50Um90YXRpb24sICd0aGUgY3VycmVudCByb3RhdGlvbicpO1xuXG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwLmNyZWF0ZVNoaXAoXG4gICAgICBtb3VzZVBvc2l0aW9uLFxuICAgICAgc2hpcFR5cGVPYmplY3Quc2hpcExlbmd0aCxcbiAgICAgIGN1cnJlbnRSb3RhdGlvblxuICAgICk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFNoaXAsICd0aGUgbW9zdCB1cCB0byBkYXRlIHNoaXBzJyk7XG5cbiAgICByZXR1cm4gY3VycmVudFNoaXA7XG4gIH07XG5cbiAgY29uc3QgZ2V0R2FtZVZhbHVlcyA9ICgpID0+ICh7XG4gICAgcGxheWVyQm9hcmQsXG4gICAgY29tcHV0ZXJCb2FyZCxcbiAgICBwbGF5ZXJDaGVja0JvYXJkLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGNoZWNrU2V0dXAsXG4gICAgYXR0YWNrQm9hdHMsXG4gICAgc2V0dXBHYW1lLFxuICAgIGdhbWVJc092ZXIsXG4gICAgc2V0dXBTaGlwLFxuICAgIGdldEdhbWVWYWx1ZXMsXG4gICAgYXJyYW5nZUJsb2NrcyxcbiAgfTtcbn07XG5cbmNvbnN0IGFjdGl2ZUdhbWUgPSBHYW1lKCk7XG5cbmV4cG9ydCB7IEdhbWUsIGFjdGl2ZUdhbWUgfTtcbiIsImNvbnN0IFBvc2l0aW9uID0gKCkgPT4ge1xuICBjb25zdCBjcmVhdGVQb3NpdGlvbiA9ICh4Q29vcmQsIHlDb29yZCkgPT4gKHsgeENvb3JkLCB5Q29vcmQgfSk7XG5cbiAgY29uc3QgY2hlY2tPdXRPZkJvdW5jZSA9IChuZXdQb3NpdGlvbikgPT4ge1xuICAgIGlmIChuZXdQb3NpdGlvbi54Q29vcmQgPiA5IHx8IG5ld1Bvc2l0aW9uLnlDb29yZCA+IDkpIHJldHVybiB0cnVlO1xuICAgIGlmIChuZXdQb3NpdGlvbi54Q29vcmQgPCAwIHx8IG5ld1Bvc2l0aW9uLnlDb29yZCA8IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBhZGRQb3NpdGlvbiA9IChwb3NpdGlvbjEsIHBvc2l0aW9uMikgPT4ge1xuICAgIGlmIChwb3NpdGlvbjEgPT09IGZhbHNlIHx8IHBvc2l0aW9uMiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gY3JlYXRlUG9zaXRpb24ocG9zaXRpb24xLnhDb29yZCwgcG9zaXRpb24xLnlDb29yZCk7XG4gICAgbmV3UG9zaXRpb24ueENvb3JkICs9IHBvc2l0aW9uMi54Q29vcmQ7XG4gICAgbmV3UG9zaXRpb24ueUNvb3JkICs9IHBvc2l0aW9uMi55Q29vcmQ7XG5cbiAgICBpZiAoY2hlY2tPdXRPZkJvdW5jZShuZXdQb3NpdGlvbikpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBtdWx0aXBseVBvc2l0aW9uID0gKHBvc2l0aW9uMSwgcG9zaXRpb24yKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uMSA9PT0gZmFsc2UgfHwgcG9zaXRpb24yID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBjcmVhdGVQb3NpdGlvbihwb3NpdGlvbjEueENvb3JkLCBwb3NpdGlvbjEueUNvb3JkKTtcbiAgICBuZXdQb3NpdGlvbi54Q29vcmQgKj0gcG9zaXRpb24yLnhDb29yZDtcbiAgICBuZXdQb3NpdGlvbi55Q29vcmQgKj0gcG9zaXRpb24yLnlDb29yZDtcblxuICAgIGlmIChjaGVja091dE9mQm91bmNlKG5ld1Bvc2l0aW9uKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwgPSAocG9zaXRpb24xLCBwb3NpdGlvbjIsIGF4aXMpID0+IHtcbiAgICBpZiAocG9zaXRpb24xW2F4aXNdID09PSBwb3NpdGlvbjJbYXhpc10gKyAxKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAocG9zaXRpb24xW2F4aXNdID09PSBwb3NpdGlvbjJbYXhpc10pIHJldHVybiB0cnVlO1xuICAgIGlmIChwb3NpdGlvbjFbYXhpc10gPT09IHBvc2l0aW9uMltheGlzXSAtIDEpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjb21wYXJlUG9zaXRpb24gPSAocG9zaXRpb24xLCBwb3NpdGlvbjIpID0+IHtcbiAgICBpZiAoIWNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwocG9zaXRpb24xLCBwb3NpdGlvbjIsICd4Q29vcmQnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwocG9zaXRpb24xLCBwb3NpdGlvbjIsICd5Q29vcmQnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVBvc2l0aW9uLFxuICAgIGFkZFBvc2l0aW9uLFxuICAgIG11bHRpcGx5UG9zaXRpb24sXG4gICAgY29tcGFyZVBvc2l0aW9uLFxuICAgIGNoZWNrT3V0T2ZCb3VuY2UsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3NpdGlvbjtcbiIsImNvbnN0IFByYWN0aWNhbCA9ICgpID0+IHtcbiAgY29uc3QgY29weUFycmF5ID0gKGFycmF5KSA9PiB7XG4gICAgY29uc3QgbmV3QXJyYXkgPSBbXTtcblxuICAgIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIG5ld0FycmF5LnB1c2goaXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3QXJyYXk7XG4gIH07XG5cbiAgY29uc3QgaXNPYmplY3QgPSAoY3VycmVudE9iamVjdCkgPT4ge1xuICAgIGlmICh0eXBlb2YgY3VycmVudE9iamVjdCA9PT0gJ29iamVjdCcgJiYgY3VycmVudE9iamVjdCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjaGVja09iamVjdCA9IChvYmplY3QxLCBvYmplY3QyKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgc2Vjb25kSW5kZXggPSAwO1xuXG4gICAgbGV0IG9iamVjdElzRXF1YWwgPSB0cnVlO1xuXG4gICAgY29uc3QgY3VycmVudE9iamVjdCA9IG9iamVjdDE7XG4gICAgY29uc3QgY3VycmVudE9iamVjdDIgPSBvYmplY3QyO1xuXG4gICAgY29uc3QgY3VycmVudE9iamVjdFZhbHVlcyA9IE9iamVjdC52YWx1ZXMoY3VycmVudE9iamVjdCk7XG4gICAgY29uc3QgY3VycmVudE9iamVjdDJWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGN1cnJlbnRPYmplY3QyKTtcblxuICAgIGNvbnN0IG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyhjdXJyZW50T2JqZWN0KTtcbiAgICBjb25zdCBvYmplY3RLZXlzMiA9IE9iamVjdC5rZXlzKGN1cnJlbnRPYmplY3QyKTtcblxuICAgIG9iamVjdEtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoa2V5ICE9PSBvYmplY3RLZXlzMltpbmRleF0pIG9iamVjdElzRXF1YWwgPSBmYWxzZTtcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgfSk7XG5cbiAgICBpZiAoIW9iamVjdElzRXF1YWwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAob2JqZWN0S2V5cy5sZW5ndGggIT09IG9iamVjdEtleXMyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudE9iamVjdCwgJ3RoZSBjdXJyZW50IG9iamVjdCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRPYmplY3QyLCAndGhlIGN1cnJlbnQgb2JqZWN0MicpO1xuXG4gICAgY3VycmVudE9iamVjdFZhbHVlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBpdGVtMiA9IGN1cnJlbnRPYmplY3QyVmFsdWVzW3NlY29uZEluZGV4XTtcblxuICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pICYmIGlzT2JqZWN0KGl0ZW0yKSkge1xuICAgICAgICBjb25zdCBjaGVja09iamVjdEJvb2wgPSBjaGVja09iamVjdChpdGVtLCBpdGVtMik7XG5cbiAgICAgICAgaWYgKCFjaGVja09iamVjdEJvb2wpIG9iamVjdElzRXF1YWwgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbSAhPT0gaXRlbTIpIHtcbiAgICAgICAgb2JqZWN0SXNFcXVhbCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBzZWNvbmRJbmRleCArPSAxO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iamVjdElzRXF1YWw7XG4gIH07XG5cbiAgcmV0dXJuIHsgY29weUFycmF5LCBjaGVja09iamVjdCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJhY3RpY2FsO1xuIiwiaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24uanMnO1xuXG5jb25zdCBTaGlwID0gKCkgPT4ge1xuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uKCk7XG5cbiAgY29uc3QgZ2V0QWRkZWRQb3NpdGlvbiA9IChheGlzKSA9PiB7XG4gICAgbGV0IGFkZGVkUG9zaXRpb247XG5cbiAgICBpZiAoYXhpcyA9PT0gJ3gnKSBhZGRlZFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oMSwgMCk7XG4gICAgZWxzZSBhZGRlZFBvc2l0aW9uID0gcG9zaXRpb24uY3JlYXRlUG9zaXRpb24oMCwgMSk7XG5cbiAgICByZXR1cm4gYWRkZWRQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVTaGlwID0gKHBvc2l0aW9uMSwgbGVuZ3RoMSwgYXhpcykgPT4ge1xuICAgIGlmIChsZW5ndGgxID09PSAwIHx8IGxlbmd0aDEgPiA1KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHBvc2l0aW9uLmNoZWNrT3V0T2ZCb3VuY2UocG9zaXRpb24xKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcG9wdWxhdGVTaGlwcyA9IChjdXJyZW50UG9zaXRpb24sIGxhdGVzdExlbmd0aCwgbGF0ZXN0QXJyYXkpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRBcnJheSA9IGxhdGVzdEFycmF5O1xuICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uO1xuXG4gICAgICBpZiAoY3VycmVudFBvc2l0aW9uID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKGxhdGVzdExlbmd0aCA9PT0gMCkgcmV0dXJuIGN1cnJlbnRBcnJheTtcbiAgICAgIGlmIChsYXRlc3RMZW5ndGggPT09IGxlbmd0aDEpIHtcbiAgICAgICAgY3VycmVudEFycmF5LnB1c2goY3VycmVudFBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIHBvcHVsYXRlU2hpcHMoY3VycmVudFBvc2l0aW9uLCBsYXRlc3RMZW5ndGggLSAxLCBjdXJyZW50QXJyYXkpO1xuICAgICAgfVxuICAgICAgY29uc3QgYWRkZWRQb3NpdGlvbiA9IGdldEFkZGVkUG9zaXRpb24oYXhpcyk7XG4gICAgICBuZXdQb3NpdGlvbiA9IHBvc2l0aW9uLmFkZFBvc2l0aW9uKG5ld1Bvc2l0aW9uLCBhZGRlZFBvc2l0aW9uKTtcblxuICAgICAgaWYgKCFuZXdQb3NpdGlvbikgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICAgICAgY3VycmVudEFycmF5LnB1c2gobmV3UG9zaXRpb24pO1xuXG4gICAgICBjb25zdCBhcnJheUxlbmd0aCA9IGN1cnJlbnRBcnJheS5sZW5ndGggLSAxO1xuXG4gICAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhcbiAgICAgICAgY3VycmVudEFycmF5W2FycmF5TGVuZ3RoXSxcbiAgICAgICAgbGF0ZXN0TGVuZ3RoIC0gMSxcbiAgICAgICAgY3VycmVudEFycmF5XG4gICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gcG9wdWxhdGVTaGlwcyhwb3NpdGlvbjEsIGxlbmd0aDEsIFtdLCBmYWxzZSk7XG4gIH07XG5cblxuXG4gIGNvbnN0IGlzU3VuayA9IChzaGlwQXJyYXkpID0+IHtcbiAgICBpZiAoc2hpcEFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGhpdCA9IChwb3NpdGlvbnNBcnJheSwgcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBoaXRBcnJheSA9IHBvc2l0aW9uc0FycmF5LmZpbHRlcigocG9zKSA9PiB7XG4gICAgICBpZiAocG9zLnhDb29yZCA9PT0gcG9zaXRpb24ueENvb3JkICYmIHBvcy55Q29vcmQgPT09IHBvc2l0aW9uLnlDb29yZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBjb25zdCBzaGlwQXJyYXlzID0gcG9zaXRpb25zQXJyYXkuZmlsdGVyKChwb3MpID0+IHtcbiAgICAgIGlmIChwb3MueENvb3JkID09PSBwb3NpdGlvbi54Q29vcmQgJiYgcG9zLnlDb29yZCA9PT0gcG9zaXRpb24ueUNvb3JkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgaGl0QXJyYXksIHNoaXBBcnJheXMgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVNoaXAsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iXSwibmFtZXMiOlsiUG9zaXRpb24iLCJTaGlwIiwiUHJhY3RpY2FsIiwiR2FtZWJvYXJkIiwicG9zaXRpb24iLCJzaGlwIiwicHJhY3RpY2FsIiwiY3VycmVudFNoaXBzIiwiaGl0cyIsIm1pc3NlcyIsInJhbmRvbWl6ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbUF4aXMiLCJheGllcyIsImxlbmd0aCIsInBsYWNlQWxsU2hpcHMiLCJzaGlwc0FycmF5IiwiY29tcGFyZVNoaXBzQXJyYXkiLCJsYXRlc3RTaGlwc0FycmF5Iiwic2hpcHMiLCJzaGlwc0RvQ29sbGlkZSIsImZvckVhY2giLCJsYXRlc3RTaGlwcyIsImJvYXQiLCJsYXRlc3RCb2F0IiwiY29tcGFyZVBvc2l0aW9uIiwicGxheWVyUGxhY2VTaGlwIiwibG9jYXRpb24iLCJheGlzIiwibGF0ZXN0UG9zaXRpb24iLCJjdXJyZW50QXJyYXkiLCJjb3B5QXJyYXkiLCJzaGlwbGVuZ3RoIiwiY3VycmVudFNoaXAiLCJjcmVhdGVTaGlwIiwiaXNDb2xsaWRlZCIsInB1c2giLCJwbGFjZVJhbmRvbVNoaXBzIiwicmFuZG9taXplciIsInJhbmRvbUF4aWVzIiwibGF0ZXN0TGVuZ3RoIiwicmFuZG9tUG9zaXRpb24iLCJjcmVhdGVQb3NpdGlvbiIsInJhbmRvbVNoaXAiLCJzaGlwQ29sbGlkZXMiLCJwbGFjZVNoaXBzUmFuZG9tbHkiLCJhdHRhY2tTaGlwIiwiY3VycmVudEhpdHMiLCJjdXJyZW50TWlzc2VzIiwiaXNIaXQiLCJsYXRlc3RIaXRzIiwibGF0ZXN0TWlzc2VzIiwic2hpcEFycmF5IiwicG9zaXRpb25zQXJyYXkiLCJoaXQiLCJoaXRBcnJheSIsInNoaXBBcnJheXMiLCJmaW5hbE9iamVjdCIsInJlY2lldmVBdHRhY2siLCJyZXN1bHQiLCJjcmVhdGVSYW5kb21Db29yZHMiLCJpc01vY2tSYW5kb20iLCJjYWxsUmFuZG9taXplciIsInJhbmRvbVgiLCJyYW5kb21ZIiwiZmlsdGVyQXR0YWNrIiwiYXJyYXkiLCJjdXJyZW50QXR0YWNrIiwiY3VycmVudEF0dGFja0FycmF5IiwiZmlsdGVyIiwiaXRlbSIsInhDb29yZCIsInlDb29yZCIsImdldFR5cGVPZlBsYWNlZFNoaXAiLCJzaGlwVHlwZXMiLCJzaGlwVHlwZSIsInNoaXBMZW5ndGgiLCJyZWNpZXZlUmFuZG9tQXR0YWNrIiwiaGFzQmVlbkhpdCIsImhhc0JlZW5NaXNzIiwiaXNBbGxTdW5rIiwiaGFzU3Vua2VkIiwiaXNTdW5rIiwiZ2V0VmFsdWVzIiwiR2FtZSIsInBsYXllckJvYXJkIiwiY29tcHV0ZXJCb2FyZCIsInBsYXllckNoZWNrQm9hcmQiLCJjaGVja1NldHVwIiwicGxheWVyQ2hlY2tTaGlwcyIsInNldHVwR2FtZSIsInBsYXllckNoZWNrVmFsdWVzIiwiYXR0YWNrQm9hdHMiLCJjb29yZHMiLCJzZXR1cFNoaXAiLCJnYW1lSXNPdmVyIiwibWVzc2FnZSIsImdhbWVGaW5pc2hlZCIsImFycmFuZ2VCbG9ja3MiLCJtb3VzZVBvc2l0aW9uIiwiY3VycmVudFJvdGF0aW9uIiwic2hpcFR5cGVPYmplY3QiLCJnZXRHYW1lVmFsdWVzIiwiYWN0aXZlR2FtZSIsImNoZWNrT3V0T2ZCb3VuY2UiLCJuZXdQb3NpdGlvbiIsImFkZFBvc2l0aW9uIiwicG9zaXRpb24xIiwicG9zaXRpb24yIiwibXVsdGlwbHlQb3NpdGlvbiIsImNvbXBhcmluZ1Bvc2l0aW9uQ29uZGl0aW9uYWwiLCJuZXdBcnJheSIsImlzT2JqZWN0IiwiY3VycmVudE9iamVjdCIsImNoZWNrT2JqZWN0Iiwib2JqZWN0MSIsIm9iamVjdDIiLCJpbmRleCIsInNlY29uZEluZGV4Iiwib2JqZWN0SXNFcXVhbCIsImN1cnJlbnRPYmplY3QyIiwiY3VycmVudE9iamVjdFZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsImN1cnJlbnRPYmplY3QyVmFsdWVzIiwib2JqZWN0S2V5cyIsImtleXMiLCJvYmplY3RLZXlzMiIsImtleSIsIml0ZW0yIiwiY2hlY2tPYmplY3RCb29sIiwiZ2V0QWRkZWRQb3NpdGlvbiIsImFkZGVkUG9zaXRpb24iLCJsZW5ndGgxIiwicG9wdWxhdGVTaGlwcyIsImN1cnJlbnRQb3NpdGlvbiIsImxhdGVzdEFycmF5IiwiYXJyYXlMZW5ndGgiLCJwb3MiXSwic291cmNlUm9vdCI6IiJ9