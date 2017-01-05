const mongoose = require('mongoose');

const likeSchema = mongoose.Schema({
    count: { type: Number, default: 0 }
});

likeSchema.methods.increase = function () {
  this.count += 1
  this.save()
}

const Like = mongoose.model('Like', likeSchema);

module.exports = Like