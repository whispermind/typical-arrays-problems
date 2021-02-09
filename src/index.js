
exports.min = function min (array) {
  if(!array || array.length == 0) return 0
  return Math.min(...array);
}

exports.max = function max (array) {
  if(!array || array.length == 0) return 0
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if(!array || array.length == 0) return 0
  return Number(array.reduce((accumulator, current) => accumulator + current, 0)/array.length.toFixed(2));
}
