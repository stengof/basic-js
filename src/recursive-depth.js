module.exports = class DepthCalculator {
  count = 0;
  depth = 0;
  calculateDepth( arr ) {
      for (let key of arr) {
        if ( Array.isArray(key) ) {
          this.count++;
          this.calculateDepth(key);
        }
      }
      if (this.depth < this.count) this.depth = this.count;
      this.count = 0;

      return this.depth + 1;

  }
};
