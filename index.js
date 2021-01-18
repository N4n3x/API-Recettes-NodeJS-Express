const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const url = `mongodb+srv://admin:cC38T4FbgnImxSe8@db1.3hf1n.mongodb.net/tp2?authSource=admin&replicaSet=atlas-ubdsst-shard-0&readPreference=primary&ssl=true`;
mongoose.connect(url, {useNewUrlParser:  true, poolSize: 10, useUnifiedTopology: true, connectTimeoutMS: 3000, keepAlive: 1 })
    .catch(err => console.log(err.reason));
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur lors de la connexion')); 
db.once('open', function (){
    console.log("Connexion à la base OK"); 
});

const Recette = require("./recette")(db);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    if (req.method === "OPTIONS") {
      console.log("!OPTIONS");
      res.end();
    }
    next();
});

app.get("/",(req,res)=>{res.send(JSON.stringify({"Routes disponible": ["/","/"]}));});

app.route("/recette")
    .get(async (req,res)=>{
        let result = await Recette.find({}).exec();
        res.send(JSON.stringify(result));
    })
    .post((req,res)=>{
        const newRecette = new Recette(req.body);
        newRecette.save();
        console.log(req.body);
        res.send(JSON.stringify(newRecette));
    });

app.route("/recette/:id")
    .get( async (req,res)=>{
        let result = await Recette.findById(req.params.id).exec();
        res.send(JSON.stringify(result));
    })
    .put(async (req,res)=>{
        const result = await Recette.updateOne({_id: req.params.id}, req.body);
        res.send(JSON.stringify(result));
    })
    .delete(async (req,res)=>{
        const result = await Recette.deleteOne({_id: req.params.id});
        res.send(JSON.stringify(result));
    });

app.route("/recette/:id/comment")
    .post(async (req,res)=>{
        const result = await Recette.updateOne({_id: req.params.id}, req.body);
        res.send(JSON.stringify(result));
    });


app.listen(3000);
console.log("API START ON 3000");
module.exports = app;