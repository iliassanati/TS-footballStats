"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResults_1 = require("./MatchResults");
const reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResults_1.MatchResult.HomeWIn) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResults_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
