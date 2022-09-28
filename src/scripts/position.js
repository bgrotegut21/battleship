const Position = () => {
  const createPosition = (xCoord, yCoord) => ({ xCoord, yCoord });

  const checkOutOfBounce = (newPosition) => {
    if (newPosition.xCoord > 9 || newPosition.yCoord > 9) return true;
    if (newPosition.xCoord < 0 || newPosition.yCoord < 0) return true;
    return false;
  };

  const addPosition = (position1, position2) => {
    if (position1 === false || position2 === false) return false;

    const newPosition = createPosition(position1.xCoord, position1.yCoord);
    newPosition.xCoord += position2.xCoord;
    newPosition.yCoord += position2.yCoord;

    if (checkOutOfBounce(newPosition)) return false;

    return newPosition;
  };

  const multiplyPosition = (position1, position2) => {
    if (position1 === false || position2 === false) return false;

    const newPosition = createPosition(position1.xCoord, position1.yCoord);
    newPosition.xCoord *= position2.xCoord;
    newPosition.yCoord *= position2.yCoord;

    if (checkOutOfBounce(newPosition)) return false;

    return newPosition;
  };

  const comparingPositionConditional = (position1, position2, axis) => {
    if (position1[axis] === position2[axis] + 1) return true;
    if (position1[axis] === position2[axis]) return true;
    if (position1[axis] === position2[axis] - 1) return true;
    return false;
  };

  const comparePosition = (position1, position2) => {
    if (!comparingPositionConditional(position1, position2, 'xCoord')) {
      return false;
    }
    if (!comparingPositionConditional(position1, position2, 'yCoord')) {
      return false;
    }
    return true;
  };

  return {
    createPosition,
    addPosition,
    multiplyPosition,
    comparePosition,
    checkOutOfBounce,
  };
};

export default Position;
