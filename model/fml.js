const AV = require('../utils/av-weapp-min.js');

class FML extends AV.Object {
  // It allows to read local data
  get story() {
    return this.get('story');
  }

  get upvote() {
    return this.get('upvote');
  }
  // It allows to update local data
  set upvote(value) {
    this.set('upvote', value);
  }
  // It allows to update local data
}

// Export object 
AV.Object.register(FML, 'FML');
module.exports = FML;