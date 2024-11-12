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