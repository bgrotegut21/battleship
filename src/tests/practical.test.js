import Practical from '../scripts/practical.js';
import randomMaterial from '../testMaterials/randomShips.js';

describe('practical', () => {
  const practical = Practical();
  const randomItem = randomMaterial();

  it('copy array', () => {
    const numbersArray = [1, 2, 3];
    expect(practical.copyArray(numbersArray)).toEqual([1, 2, 3]);
    expect(practical.copyArray([])).toEqual([]);
  });

  it('check object', () => {
    const object1 = { name: 'Greg' };
    const object2 = { name: 'Greg' };
    const object3 = { name: 'Samuel' };

    const array1 = [2, 3, 4];
    const array2 = [2, 3, 4];
    const array3 = [1, 2, 3];

    const randomShipArrayClone = [
      randomItem.randomShip1,
      randomItem.randomShip2,
      randomItem.randomShip3,
      randomItem.randomShip4,
      randomItem.randomShip5,
    ];

    const randomShipArrayClone2 = [
      randomItem.randomShip1,
      randomItem.randomShip2,
      randomItem.randomShip3,
      randomItem.randomShip4,
      randomItem.randomShip6,
    ];

    expect(practical.checkObject(object1, object2)).toBe(true);
    expect(practical.checkObject(object1, object3)).toBe(false);

    expect(practical.checkObject(array1, array2)).toBe(true);
    expect(practical.checkObject(array1, array3)).toBe(false);

    expect(
      practical.checkObject(randomItem.randomShipsArray, randomShipArrayClone)
    ).toBe(true);

    expect(
      practical.checkObject(randomItem.randomShipsArray2, randomShipArrayClone)
    ).toBe(false);

    expect(
      practical.checkObject(randomShipArrayClone, randomShipArrayClone2)
    ).toBe(false);
  });
});
