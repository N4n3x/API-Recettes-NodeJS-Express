# [API] Livre de recettes

Créer une api REST pour gérer un livre de recettes en utilisant Express et Mongodb.
Créer les différentes route pour la création du CRUD

recette.json en GET: Liste les recettes
recette.json en POST: Créer une nouvelle recette
recette/id.json en GET: Récupère une recette avec son id
recette/id.json en PUT: Met à jour la recette
recette/id.json en DELETE: Supprime la recette
recette/id/comment.json en POST: Ajoute un commentaire dans la recette


Une recette contient:

Nom
Temps de préparation
Temps de cuisson
Liste d'ingrédients

Nom
Quantité
Unité (g / ml etc)


Liste d'étapes

Nom
Description
Temps


Commentaires

Nom utilisateur
Commentaire




Bonus1 : Créer une nouvelle route recette/search.json pour rechercher une recette par noms ou ingrédients
Bonus2 : Créer une interface pour afficher les recette et une page pour créer des recettes en utilisant l'API