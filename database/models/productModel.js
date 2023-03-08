const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a product name."]
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: false
    }
},
{
    timestamps: true    // use to track the date of created and updated record.
}
)

const Product = mongoose.model('Product', productSchema);
module.exports = Product;