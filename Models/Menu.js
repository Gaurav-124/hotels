const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number  // Age is optional; remove 'required: true' if not necessary
    },
    taste: {
        type: String,
        // required: true
    },
    is_drink: {
        type: Boolean,
        required: false
    },
    ingredients: {
        type: String,
        required: true,
        enum: ["spicy", "sauce", "suger"]
        
    },
   
});

// Export the model named 'Person' based on the personSchema
const menu = mongoose.model('menu', menuSchema);

module.exports = menu;