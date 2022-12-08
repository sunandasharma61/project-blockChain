const mongoose = require("mongoose")
const blockChainSchema = new mongoose.Schema({
    symbol: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        unique: true,
    },
    marketCapUsd: {
        type: String,
    },
    priceUsd: {
        type: String,
    },
})
module.exports = mongoose.model('blockChain', blockChainSchema)