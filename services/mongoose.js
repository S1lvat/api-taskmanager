const mongoose = require('mongoose')

const mongoConnect = (uri) => mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology:true})

module.exports = mongoConnect
