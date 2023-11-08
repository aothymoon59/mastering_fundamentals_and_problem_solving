const addFunction = (...rest: number[]): number => {
  //   let sum = 0;
  //   rest.forEach((number) => {
  //     sum = sum + number;
  //   });
  const sum = rest.reduce((prev, curr) => prev + curr, 0);
  return sum;
};
console.log(addFunction(1, 2, 3, 4, 5, 6));
