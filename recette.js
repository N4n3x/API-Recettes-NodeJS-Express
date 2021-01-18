const mongoose = require('mongoose');

module.exports = (db) => {
    const ingredientSchema = new mongoose.Schema({
        nom: String,
        quantite: Number,
        unite: String
    });

    const etapeSchema = new mongoose.Schema({
        nom: String,
        description: String,
        temps: Number
    });

  const commentSchema = new mongoose.Schema({
    text: String,
    autor: String
  }, {
    timestamps: true
  });

  const recetteSchema = new mongoose.Schema({
    nom: String,
    tempsPrepa: Number,
    tempsCuisson: Number,
    commentaires: [commentSchema],
    ingredients: [ingredientSchema],
    etapes: [etapeSchema],
  }, {
    timestamps: true
  });


  if(db.models.Recette) {
    return db.models.Recette;
  }else {
    return db.model('Recette', recetteSchema);
  }
}
