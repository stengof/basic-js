const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position != 'number' || position < 1 || position > this.chain.length){
      this.chain = [];
      throw "Error";
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let output = this.chain;
    this.chain = [];
    for ( let i = 0; i < output.length; i++ ) {
      if ( output[i] == null ) output[i] = "null";
    }
    return `( ${output.join(" )~~( ")} )`;
  }
};

module.exports = chainMaker;
