// Description:
// You are organizing a soccer tournament, so you need to build a matches table.

// The tournament is composed by 20 teams. It is a round-robin tournament (all-play-all), so it has 19 rounds, and each team plays once per round. Each team confront the others once in the tournament (each match does not repeat in the tournament).

// Your mission is to implement a function buildMatchesTable that receives the number of teams (always a positive and even number) and returns a matrix.

// Each line of the matrix represents one round. Each column of the matrix represents one match. The match is represented as an array/tuple with two teams. Each team is represented as a number, starting from 1 until the number of teams.

// Example:

// buildMatchesTable(4)
// // Should return a matrix like that:
// [
//   [[1,2], [3, 4]],  // first round:  1 vs 2, 3 vs 4
//   [[1,3], [2, 4]],  // second round: 1 vs 3, 2 vs 4
//   [[1,4], [2, 3]]   // third round:  1 vs 4, 2 vs 3
// ]
// You should not care about the order of the teams in the match, nor the order of the matches in the round. You should just care about the rules of the tournament.

// Good luck!

// Hint: you may use the preloaded function "printTable" to debug your results.

// ArraysLogicAlgorithms
// URL: https://www.codewars.com/kata/561c20edc71c01139000017c
function buildMatchesTable(numTeams) {
    let rounds = numTeams - 1;
    let halfSize = numTeams / 2; 
    let teams = Array.from({ length: numTeams }, (_, i) => i + 1); 
    let schedule = [];

    for (let round = 0; round < rounds; round++) {
        let matches = [];
        for (let i = 0; i < halfSize; i++) {
            let team1 = teams[i];
            let team2 = teams[numTeams - 1 - i];
            matches.push([team1, team2]);
        }
        schedule.push(matches);
        teams.splice(1, 0, teams.pop());
    }

    return schedule;
}