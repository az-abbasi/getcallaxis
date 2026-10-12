const fs = require('fs');

const code = fs.readFileSync('script.js', 'utf8');
const lines = code.split('\n');

let openBraces = [];
let openParens = [];

lines.forEach((line, idx) => {
  const lineNo = idx + 1;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '{') openBraces.push({ lineNo, char });
    else if (char === '}') {
      if (openBraces.length === 0) console.log(`Unmatched } at line ${lineNo}`);
      else openBraces.pop();
    } else if (char === '(') openParens.push({ lineNo, char });
    else if (char === ')') {
      if (openParens.length === 0) console.log(`Unmatched ) at line ${lineNo}`);
      else openParens.pop();
    }
  }
});

console.log('Unclosed braces remaining:', openBraces.length, openBraces.slice(-5));
console.log('Unclosed parens remaining:', openParens.length, openParens.slice(-5));
