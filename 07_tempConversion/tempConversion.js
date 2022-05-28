// multiplies answers by 10, rounds, then moves decimal left
const ftoc = function(x) {
  return Math.round((x - 32) * 5/9 * 10) / 10
};

const ctof = function(y) {
  return Math.round((y * 9/5 + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
