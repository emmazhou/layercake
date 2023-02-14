export const randomInt = (range: number) => {
  // Returns a random integer from 0 to range - 1.
  return Math.floor(Math.random() * range);
};

export const randomSortedPairs = (range: number, count: number) => {
  // Generate an array of random pairs with the guarantee that reading from left to right,
  // numbers always increase (e.g. [[1, 2], [2, 3], [5, 6]])
  const numbers = Array(count * 2)
    .fill(0)
    .map(() => randomInt(range));
  return numbers
    .sort((a, b) => a - b)
    .reduce((acc, cur, i) => {
      if (i % 2 === 0) {
        acc.push([cur, -1]);
      } else {
        acc[acc.length - 1][1] = cur;
      }
      return acc;
    }, [] as [number, number][]);
};

export const expandPoints = (
  points: [number, number][],
  height: number,
  width: number
): [number, number][] => {
  // Expand pairs of [start, end] points into polygon points, e.g. [[1, 2], [5, 6]] =>
  // [[0, 0], [1, 0], [1, height], [2, height], [2, 0], [5, 0], [5, height], [6, height], [6, 0], [width, 0]]
  const expanded: [number, number][] = [[0, 0]];
  points.forEach((point) => {
    expanded.push([point[0], 0]);
    expanded.push([point[0], height]);
    expanded.push([point[1], height]);
    expanded.push([point[1], 0]);
  });
  expanded.push([width, 0]);
  return expanded;
};

export const randomColor = (): [number, number, number, number] => {
  return [Math.random(), Math.random(), Math.random(), 1];
};

// Fill the buffer with the values that define a rectangle.
export const setRectangle = (
  gl: WebGL2RenderingContext,
  x: number,
  y: number,
  width: number,
  height: number
) => {
  var x1 = x;
  var x2 = x + width;
  var y1 = y;
  var y2 = y + height;
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2]),
    gl.STATIC_DRAW
  );
};
