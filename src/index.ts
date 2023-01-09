import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');

reader.read();

enum MatchResult {
  HomeWIn = 'H',
  AwayWin = 'A',
  Draw = 'D ',
}

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWIn) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
