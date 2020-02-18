module.exports = function transform(arr) {
  if ( !Array.isArray(arr) ) throw 'Error';

  let dbn = "--double-next";
  let dbp = "--double-prev";
  let dsn = "--discard-next";
  let dsp = "--discard-prev";

  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === dbp || arr[0] === dsp) arr.shift();
    if (arr[arr.length - 1] === dbn || arr[arr.length - 1] === dsn ) arr.pop();
    if (arr[i] === dbn) arr[i] = arr[i + 1];
    if (arr[i] === dbp) arr[i] = arr[i - 1];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === dbp || arr[0] === dsp) arr.shift();
    if (arr[arr.length - 1] === dbn || arr[arr.length - 1] === dsn ) arr.pop();
    if (arr[i] === dsn) arr.splice(i--, 2);
    if (arr[i] === dsp) arr.splice(--i, 2);
  }

  return arr;
};
