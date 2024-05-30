const mongoose = require('mongoose');

const categorySchema = mongoose.Schema([
    name
])

exports.Category = mongoose.model('Category', categorySchema)