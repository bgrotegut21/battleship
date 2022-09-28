import Position from './position.js';

const Ship = () => {
  const position = Position();

  const getAddedPosition = (axis) => {
    let addedPosition;

    if (axis === 'x') addedPosition = position.createPosition(1, 0);
    else addedPosition = position.createPosition(0, 1);

    return addedPosition;
  };

  const createShip = (position1, length1, axis) => {
    if (length1 === 0 || length1 > 5) return false;
    if (position.checkOutOfBounce(position1)) return false;

    const populateShips = (currentPosition, latestLength, latestArray) => {
      const currentArray = latestArray;
      let newPosition = currentPosition;

      if (currentPosition === false) return false;
      if (latestLength === 0) return currentArray;
      if (latestLength === length1) {
        currentArray.push(currentPosition);
        return populateShips(currentPosition, latestLength - 1, currentArray);
      }
      const addedPosition = getAddedPosition(axis);
      newPosition = position.addPosition(newPosition, addedPosition);

      if (!newPosition) return newPosition;
      currentArray.push(newPosition);

      const arrayLength = currentArray.length - 1;

      return populateShips(
        currentArray[arrayLength],
        latestLength - 1,
        currentArray
      );
    };

    return populateShips(position1, length1, [], false);
  };



  const isSunk = (shipArray) => {
    if (shipArray.length === 0) return true;
    return false;
  };

  const hit = (positionsArray, position) => {
    const hitArray = positionsArray.filter((pos) => {
      if (pos.xCoord === position.xCoord && pos.yCoord === position.yCoord) {
        return true;
      }
      return false;
    });
    const shipArrays = positionsArray.filter((pos) => {
      if (pos.xCoord === position.xCoord && pos.yCoord === position.yCoord) {
        return false;
      }
      return true;
    });

    return { hitArray, shipArrays };
  };

  return {
    createShip,
    hit,
    isSunk,
  };
};

export default Ship;
