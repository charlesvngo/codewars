const dirReduc = (arr) => {
  let output = [];
  let recursionFlag = false;
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
      (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||
      (arr[i] === "EAST" && arr[i + 1] === "WEST") ||
      (arr[i] === "WEST" && arr[i + 1] === "EAST")
    ) {
      i++;
      recursionFlag = true;
    } else {
      output.push(arr[i]);
    }
  }
  return recursionFlag ? dirReduc(output) : output;
};
