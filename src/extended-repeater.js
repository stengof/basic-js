module.exports = function repeater(str, options) {
  if (options.separator === undefined) options.separator = "+";
  if (options.additionSeparator === undefined) options.additionSeparator = "|";
  if (str === null) str = "null";
  if (options.addition === null) options.addition = "null";

  let arr = [];
  let additionalArr = [];

  if (options.additionRepeatTimes === 1 || options.additionRepeatTimes === undefined) {
    additionalArr.push(options.addition);
  } else {
      for ( let i = 0; i < options.additionRepeatTimes; i++) {
        additionalArr.push(options.addition)
      }
  }

  additionalArr = additionalArr.join(options.additionSeparator);

  str = str + additionalArr;
  arr.push(str);

  for ( let i = 0; i < options.repeatTimes - 1; i++ ) {
    arr.push(str);
  }

  return arr.join(options.separator);
  };


