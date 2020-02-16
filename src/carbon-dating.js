const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(num) {
  if ( typeof num !== "string" || num === undefined || num == 0 ) return false;

  num = num.replace(/\./, "X").replace(/\./g, "").replace("X", "."); // If in input "." are more than one delete others "."

  let number = Math.ceil( Math.log( MODERN_ACTIVITY / num) / ( 0.693 / HALF_LIFE_PERIOD ) );

  if ( isNaN(number) || number < 0) return false;

  return number;
};
