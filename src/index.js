module.exports = function towelSort (matrix) {
  let result = [];

  if (!matrix || matrix.length === 0) {
    return [];
  }  
  
  for (let i = 0; i < matrix.length; i++) {
    (i % 2 === 0) ? result.push(matrix[i]) : result.push(matrix[i].reverse());    
  }
  return result.flat();
};


