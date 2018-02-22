import * as se from './structural-equality/index.js';

export const structuralEquality = se;

export const equalsFromEquality = equality => {
  const { hashCode, equals } = equality;  
  if (!hashCode) {
    throw new ReferenceError('equality must implement hashCode');
  }
  if (!equals) {
    throw new ReferenceError('equality must implement equals');
  }
  return b => { 
    const bHashCode = hashCode(b);
    return a => {
      if (hashCode(a) === bHashCode) {
        return a |> equals(b);
      }
      return false;
    };
  };
};

export const equals = equalsFromEquality(structuralEquality);
