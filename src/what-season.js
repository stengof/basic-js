module.exports = function getSeason(input) {
  if (!input)  return 'Unable to determine the time of year!';

  if (Object.keys(input).length > 0) throw 'Error';

  let month = input.getMonth();
  let seasonOfYear = ['winter', 'spring', 'summer', 'autumn'];

  if (month === 11 || month === 0 || month === 1) return seasonOfYear[0];
  if (month === 2 || month === 3 || month === 4) return seasonOfYear[1];
  if (month === 5 || month === 6 || month === 7) return seasonOfYear[2];
  if (month === 8 || month === 9 || month === 10) return seasonOfYear[3];
};
