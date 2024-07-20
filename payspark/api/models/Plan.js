const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true } // Durée en mois, par exemple
});

module.exports = mongoose.model('Plan', planSchema);
