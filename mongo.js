const mongoose = require('mongoose');

module.exports = () => {
    
    const database = "tp2";
    const url = `mongodb+srv://admin:cC38T4FbgnImxSe8@db1.3hf1n.mongodb.net/test?authSource=admin&replicaSet=atlas-ubdsst-shard-0&readPreference=primary&ssl=true`;
    mongoose.connect(url, {useNewUrlParser:  true, poolSize: 10, useUnifiedTopology: true, connectTimeoutMS: 3000, keepAlive: 1 })
    .catch(err => console.log(err.reason));
    return mongoose.connection;
};


