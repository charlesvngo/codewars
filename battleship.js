const validateBattlefield = (field) => {
  const validShips = {
    battleship: 1,
    cruiser: 2,
    destroyer: 3,
    submarine: 4,
  };

  const validationField = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const validateX = (field, x, y) => {
    let output = "submarine";
    if (field[y + 1][x] === 1) {
      return "";
    }
    if (field[y][x + 1] === 1 && !field[y][x + 2]) {
      output = "destroyer";
    } else if (
      field[y][x + 1] === 1 &&
      field[y][x + 2] === 1 &&
      !field[y][x + 3]
    ) {
      output = "cruiser";
    } else if (
      field[y][x + 1] === 1 &&
      field[y][x + 2] === 1 &&
      field[y][x + 3] === 1 &&
      !field[y][x + 4]
    ) {
      output = "battleship";
    }
    return output;
  };

  const validateY = (field, x, y) => {
    let output = "submarine";
    if (field[y][x + 1] === 1) {
      return "";
    }

    if (field[y + 1][x] === 1 && !field[y + 2][x]) {
      output = "destroyer";
    } else if (
      field[y + 1][x] === 1 &&
      field[y + 2][x] === 1 &&
      !field[y + 3][x]
    ) {
      output = "cruiser";
    } else if (
      field[y + 1][x] === 1 &&
      field[y + 2][x] === 1 &&
      field[y + 3][x] === 1 &&
      !field[y + 4][x]
    ) {
      output = "battleship";
    }
    return output;
  };

  const checkSurrounding = (ship, direction, coords) => {
    const shipLengths = {
      battleship: 4,
      cruiser: 3,
      destroyer: 2,
      submarine: 1,
    };
    const shipLocation = [];

    if (direction === "vertical") {
      for (let i = 0; i < shipLengths[ship]; i++) {
        shipLocation.push({ x: coords.x, y: coords.y + i });
      }
    }
    if (direction === "horizontal") {
      for (let i = 0; i < shipLengths[ship]; i++) {
        shipLocation.push({ x: coords.x + i, y: coords.y });
      }
    }
    console.log(shipLocation);
    for (let i = -1; i < 1; i++) {
      for (let j = 0; j < shipLengths[ship]; j++) {
        // if (direction === "vertical") {
        // }
      }
    }
  };

  for (let y = 0; y < field.length; y++) {
    for (let x = 0; x < field[y].length; x++) {
      if (field[y][x] === 1 && validationField[y][x] === 0) {
        if (validateX(field, x, y)) {
          const ship = validateX(field, x, y);
          validShips[ship]--;
          checkSurrounding(ship, "horizontal", { x, y });
        }

        if (validateY(field, x, y)) {
          const ship = validateY(field, x, y);
          validShips[ship]--;
          checkSurrounding(ship, "vertical", { x, y });
        }
      }
    }
  }
};

const battleshipField = [
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

validateBattlefield(battleshipField);
