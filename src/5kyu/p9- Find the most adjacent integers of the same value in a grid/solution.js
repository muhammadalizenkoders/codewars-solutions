// Description:
// Task
// Find the size s of the largest group of adjacent integers that all have the same value v. Return these 2 results as a tuple (v, s).

// If there are several largest groups corresponding to the same size s, return the tuple with the lowest possible value of v.

// Integers in the grid are considered part of an adjacent group if they can be reached by moving through other integers of the same value horizontally or vertically, but not diagonally.

// Input:
// N x N 2D array of integers

// Output:
// Tuple with the first item being the integer with the most adjacent neighbors of the same value and the second item being the amount of that integer and its neighbors of the same value.

// Example:
// # Input:
// grid = [
//     [1,2,1],
//     [1,1,0],
//     [0,0,0],
// ]
// # Output:
// # the largest group of adjacent numbers has size 4, and value 0
// (0, 4)
// Example:
// # Input
// example_grid_2 = [
//   [7,2,5,1],
//   [7,2,5,8],
//   [7,2,5,8],
//   [7,2,5,1]
// ]
// # Output - there are 3 groups of size s=4:
// # One group uses integer value 7, one uses 2, and one uses 5.
// # Since 2 is the lowest of these values, you should return (v = 2,s = 4)
// (2, 4)
// URL:https://www.codewars.com/kata/5b258cf6d74b5b7105000035/javascript
function findMostAdjacent(grid) {
    const n = grid.length;
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    let maxSize = 0;
    let maxValue = Infinity;

    const directions = [
        [1, 0], // down
        [-1, 0], // up
        [0, 1], // right
        [0, -1] // left
    ];

    function dfs(x, y, value) {
        let stack = [[x, y]];
        let size = 0;

        while (stack.length > 0) {
            const [cx, cy] = stack.pop();
            if (visited[cx][cy]) continue;
            visited[cx][cy] = true;
            size++;

            for (const [dx, dy] of directions) {
                const nx = cx + dx;
                const ny = cy + dy;
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny] && grid[nx][ny] === value) {
                    stack.push([nx, ny]);
                }
            }
        }

        return size;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j]) {
                const currentValue = grid[i][j];
                const currentSize = dfs(i, j, currentValue);

                if (currentSize > maxSize || (currentSize === maxSize && currentValue < maxValue)) {
                    maxSize = currentSize;
                    maxValue = currentValue;
                }
            }
        }
    }

    return [maxValue, maxSize];
}