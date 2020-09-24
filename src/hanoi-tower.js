module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  let obj = {};

  obj.turns =  2 ** diskNumber - 1;
  obj.seconds =  Math.floor(obj.turns / ( turnsSpeed  / 3600 ));

  return obj;
}