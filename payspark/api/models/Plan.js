const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({

    name: {type: String,required: true,unique: true},
    description: {type: String,required: true},
    price: {type: Number,required: true},
    features: [String]});
  
  
  module.exports = mongoose.model('Plan', PlanSchema);