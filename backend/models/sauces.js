const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
	/*
		// Exemple :

	  title: { type: String, required: true },
	  description: { type: String, required: true },
	  imageUrl: { type: String, required: true },
	  userId: { type: String, required: true },
	  price: { type: Number, required: true },
  */

	
		// Ce qu'on veut à la fin :

		userId: { type: String, required: true },
	name: { type: String, required: true },
	manufacturer: { type: String, required: true },
	description: { type: String, required: true },
	mainPepper: { type: String, required: true },
	imageUrl: { type: String, required: true },
	heat: { type: Number, required: true },
	likes: { type: Number, required: true },
	dislikes: { type: Number, required: true },
	userLiked: { type: Number, required: true },
	userDisliked: { type: Number, required: true },

});

module.exports = mongoose.model('Sauce', sauceSchema);