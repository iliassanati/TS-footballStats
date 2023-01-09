import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

enum MatchResult {
  HomeWIn = 'H',
  AwayWin = 'A',
  Draw = 'D ',
}

let manUntedWins = 0;
