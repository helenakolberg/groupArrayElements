export const groupArrayElements = (array, N) => {
  if (N < 1) {
    throw new Error("Please provide a positive integer.");
  }

  const remainder = array.length % N;
  let nestedArrayLength = Math.floor(array.length / N);

  /**
   * Adjust nestedArrayLength to round up if the sum of the remaining
   * elements plus the original nestedArrayLength is greater than or
   * equal to N, or if N is greater than the size of the original array.
   */
  if (remainder + nestedArrayLength >= N || N > array.length) {
    nestedArrayLength = Math.ceil(array.length / N);
  }

  const newArray = [];
  let startIndex = 0;

  /**
   * Divide the array into nested arrays of length nestedArrayLength.
   */
  for (let i = 0; i < N; i++) {
    const endIndex = startIndex + nestedArrayLength;

    if (i < N - 1) {
      /**
       * Push a sliced portion of the array into the newArray until
       * and including the second last iteration.
       */
      newArray.push(array.slice(startIndex, endIndex));
    } else {
      /**
       * Push the last sliced portion of the array with the remainder
       * of the elements into the newArray.
       */
      newArray.push(array.slice(startIndex));
    }

    startIndex = endIndex;
  }

  return newArray;
};
