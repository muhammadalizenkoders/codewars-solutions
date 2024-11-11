// Description:
// Task
// You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.

// Empty positions are marked ..
// Walls are marked W.
// Start and exit positions are empty in all test cases.
// Path Finder Series:
// #1: can you reach the exit?
// #2: shortest path
// #3: the Alpinist
// #4: where are you?
// #5: there's someone here
// URL:https://www.codewars.com/kata/5765870e190b1472ec0022a2/javascript
function pathFinder(maze) {
    let mazeArray = maze.split('\n');
    let N = mazeArray.length;
    
    // Directions for moving in the maze: [rowOffset, colOffset]
    const directions = [
        [-1, 0], // North
        [1, 0],  // South
        [0, -1], // West
        [0, 1]   // East
    ];
    
    let queue = [[0, 0]];
    let visited = new Set();
    visited.add('0,0');
    
    while (queue.length > 0) {
        let [row, col] = queue.shift();
        
        if (row === N - 1 && col === N - 1) {
            return true;
        }
        
        for (let [rowOffset, colOffset] of directions) {
            let newRow = row + rowOffset;
            let newCol = col + colOffset;
            
            if (newRow >= 0 && newRow < N && newCol >= 0 && newCol < N && mazeArray[newRow][newCol] === '.') {
                let newPosition = `${newRow},${newCol}`;
                if (!visited.has(newPosition)) {
                    visited.add(newPosition);
                    queue.push([newRow, newCol]);
                }
            }
        }
    }
    

    return false;
}