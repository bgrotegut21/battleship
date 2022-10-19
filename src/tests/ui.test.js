import Ui from '../scripts/ui.js';
import Position from '../scripts/position.js';
import Ship from '../scripts/ship.js';

describe('ui', () => {
  const position = Position();
  const ship = Ship();

  const matchMedia = (mediaQueryText) => (text) => {
    let isMatching = false;

    if (text === mediaQueryText) isMatching = true;
    else isMatching = false;

    return { matches: isMatching };
  };

  it('changeBlockSize', () => {
    const ui = Ui();
    let index = 0;

    const medias = [
      '(max-width: 960px)',
      '(max-width: 470px)',
      '(max-width: 320px)',
      '(max-width: 1000px)',
    ];

    const values = [30, 21, 15, 42];

    medias.forEach((media) => {
      const mediaMatch = matchMedia(media);

      // console.log(mediaMatch, 'the current media match');

      ui.changeBlockSize(mediaMatch);
      const uiValues = ui.getValues();

      expect(uiValues.blockSize).toBe(values[index]);
      index += 1;
    });
  });

  it('createBlockElment', () => {
    const ui = Ui();

    const createBlock = (elementType) => {
      const blockObject = {
        elementType,
        currentBlock: '',
        classList: {
          add: (className) => {
            blockObject.currentBlock += ` ${className}`;
          },
        },
      };

      return blockObject;
    };

    const assertBlockElement = (blockClass) => {
      const blockElement = createBlock('div');

      blockElement.classList.add('block');

      if (
        blockClass === 'hitBlock' ||
        blockClass === 'missBlock' ||
        blockClass === 'cursorBlock'
      ) {
        blockElement.classList.add(blockClass);
      }

      const testResult = JSON.stringify(
        ui.createBlockElement(blockClass, createBlock)
      );

      const testEquals = JSON.stringify(blockElement);

      expect(testResult).toBe(testEquals);
    };

    assertBlockElement('block');
    assertBlockElement('fsas');
    assertBlockElement('hitBlock');
    assertBlockElement('missBlock');
    assertBlockElement('cursorBlock');
  });

  it('moveShipByDirection', () => {
    const ui = Ui();

    const assertMoveShipByDirection = (
      mouseLocation,
      currentShip,
      axis,
      result
    ) => {
      expect(ui.moveShipByDirection(mouseLocation, currentShip, axis)).toEqual(
        result
      );
    };

    assertMoveShipByDirection(
      position.createPosition(10, 10),
      ship.createShip(position.createPosition(1, 1), 5, 'x'),
      'x',
      false
    );

    assertMoveShipByDirection(
      position.createPosition(5, 8),
      ship.createShip(position.createPosition(1, 3), 5, 'y'),
      'y',
      ship.createShip(position.createPosition(5, 3), 5, 'y')
    );

    assertMoveShipByDirection(
      position.createPosition(8, 5),
      ship.createShip(position.createPosition(3, 1), 5, 'x'),
      'x',
      ship.createShip(position.createPosition(3, 5), 5, 'x')
    );

    assertMoveShipByDirection(
      position.createPosition(5, 8),
      ship.createShip(position.createPosition(1, 3), 3, 'y'),
      'y',
      ship.createShip(position.createPosition(5, 3), 3, 'y')
    );

    assertMoveShipByDirection(
      position.createPosition(8, 5),
      ship.createShip(position.createPosition(3, 1), 3, 'x'),
      'x',
      ship.createShip(position.createPosition(3, 5), 3, 'x')
    );
  });

  it('changeAxis', () => {
    const ui = Ui();

    const assertChangeAxis = (result) => {
      ui.changeAxis();
      const uiValues = ui.getValues();

      expect(uiValues.axis).toBe(result);
    };

    assertChangeAxis('x');
    assertChangeAxis('y');
  });

  it('check mouse position', () => {
    const ui = Ui();

    const position1 = position.createPosition(7, 2);
    const result1 = ui.getMousePosition(294, 84);

    const position2 = position.createPosition(8, 2);
    const outOfBounceResult = ui.getMousePosition(462, 462);

    const mediaMatch = matchMedia('(max-width: 470px)');
    ui.changeBlockSize(mediaMatch);
    const result2 = ui.getMousePosition(168, 42);

    const position3 = position.createPosition(1, 1);

    const mediaMatch2 = matchMedia('(max-width: 320px)');
    ui.changeBlockSize(mediaMatch2);
    const result3 = ui.getMousePosition(15.322, 18.423327);
    const result4 = ui.getMousePosition(-2.8989, -3.723235);

    expect(result2).toEqual(position2);
    expect(result1).toEqual(position1);
    expect(result3).toEqual(position3);
    expect(result4).toEqual(false);
    expect(outOfBounceResult).toEqual(false);
  });
});
