function modifyEverySecondElement(arr) {
  return arr.map((element, i) => {
    return i % 2 === 0 ? element : element++;
  });
}
