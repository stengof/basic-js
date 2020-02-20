module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    let count = 1;
    let depth = 0;
      for (let key of arr) {
        if ( Array.isArray(key) ) {
          count = this.calculateDepth(key);
          if (depth < count) depth = count;
        }
      }

      return ++depth;

  }
};
