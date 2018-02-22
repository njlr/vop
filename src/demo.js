import { equals } from './index.js';

const p = {
  x: 1, 
  y: 2,
};

console.log(p |> equals({ x: 1, y: 2}));
