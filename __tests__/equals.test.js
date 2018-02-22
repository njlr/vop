import { equals } from '../src';

test('equals works for simple cases', () => {

  const xs = [
    [ 1, 1 ], 
    [ null, null ], 
    [ 'a', 'a' ], 
    [ {}, {} ], 
    [ [], [] ], 
    [ { x: 1 }, { x: 1 } ], 
    [ { x: { y: [ 7 ] } }, { x: { y: [ 7 ] } } ], 
  ];

  for (const [ a, b ] of xs) {
    expect(a |> equals(b)).toEqual(true);
  }

  const ys = [
    [ 1, 2 ], 
    [ 'a', 'b' ], 
    [ [], [ 1 ] ], 
    [ { x: 1 }, { y: 1 } ], 
    [ { x: 1 }, { x: 2 } ], 
  ];

  for (const [ a, b ] of ys) {
    expect(a |> equals(b)).toEqual(false);
  }
});
