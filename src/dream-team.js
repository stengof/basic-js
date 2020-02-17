module.exports = function createDreamTeam(arr) {
  if ( !Array.isArray(arr) ) return false;

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if ( typeof arr[i] === "string") {
      newArr.push( arr[i].match(/\b./)[0].toUpperCase() )
    }
  }

  return newArr.sort().join('');
};
