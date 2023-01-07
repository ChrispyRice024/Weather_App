const mongoose = require('mongoose')

const Favorites = new mongoose.Schema({
    lat: Number,
    lon: Number,
    city: String,
    state: String
})