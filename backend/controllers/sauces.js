const Sauce = require('../models/sauces');
const fs = require('fs');

// ########################################################################################################################
exports.createSauce = (req, res, next) => {
	const sauceObject = JSON.parse(req.body.sauce);
	delete sauceObject._id;
	delete sauceObject._userId;
	const sauce = new Sauce({
		...sauceObject,
		userId: req.auth.userId,
		imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
	});
	sauce.save()
	.then(() => { res.status(201).json({message: 'Objet enregistré !'})})
	.catch(error => { res.status(400).json( { error })})
};

// ########################################################################################################################
exports.getAllSauces = (req, res, next) => {
	Sauce.find()
	.then(sauces => res.status(200).json(sauces))
	.catch(error => res.status(400).json({ error }));
}

// ########################################################################################################################
exports.getOneSauce = (req, res, next) => {
	Sauce.findOne({ _id: req.params.id })
	.then(sauce => res.status(200).json(sauce))
	.catch(error => res.status(404).json({ error }));
};

// ########################################################################################################################
exports.modifySauce = (req, res, next) => {
	const sauceObject = req.file ? {
		...JSON.parse(req.body.sauce),
		imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
	} : { ...req.body };
	delete sauceObject._userId;
	Sauce.findOne({_id: req.params.id})
	.then((sauce) => {
		if (sauce.userId != req.auth.userId) {
			res.status(401).json({ message : 'Not authorized'});
		} else {
			Sauce.updateOne({ _id: req.params.id}, { ...sauceObject, _id: req.params.id})
			.then(() => res.status(200).json({message : 'Objet modifié!'}))
			.catch(error => res.status(401).json({ error }));
		}
	})
	.catch((error) => {
		res.status(400).json({ error });
	});
};

// ########################################################################################################################
exports.deleteSauce = (req, res, next) => {
	Sauce.findOne({ _id: req.params.id})
	.then(sauce => {
		if (sauce.userId != req.auth.userId) {
			res.status(401).json({message: 'Not authorized'});
		} else {
			const filename = sauce.imageUrl.split('/images/')[1];
			fs.unlink(`images/${filename}`, () => {
				Sauce.deleteOne({_id: req.params.id})
				.then(() => { res.status(200).json({message: 'Objet supprimé !'})})
				.catch(error => res.status(401).json({ error }));
			});
		}
	})
	.catch( error => {
		res.status(500).json({ error });
	});
};

// ########################################################################################################################
exports.likeDislikeSauce = (req, res, next) => {
	Sauce.findOne({ _id: req.params.id})
	.then((sauce) => {
		
		// Si like === 1
		// +1 sur likes
		// Ajouter au tableau usersLiked le req.auth.userId
	// Si like === -1
		// +1 sur dislikes
		// Ajouter au tableau usersDisliked le req.auth.userId
	// Si like === 0
		// Chercher et supprimer le req.auth.userId usersLiked
		// Chercher et supprimer le req.auth.userId usersDisliked
		// Mettre à jour les compteurs likes et dislikes

		if( req.body.like === 1){
			 usersLiked.updateOne({_id: req.params.id},
    { $inc: { likes: +1 },$push: {usersLiked: req.auth.userId} },
     ) 
			 usersLiked.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
                                }
			};

		if( req.body.dislikes === -1){
			userDisliked.updateOne({_id: req.params.id},
	{ $inc: { likes: -1 },$push: {usersDisliked: req.auth.userId} },
     ) 
			userDisliked.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
                                }
			};




		// Mettre à jour les compteurs likes et dislikes
		Sauce.udapteOne({ _id: req.params.id}),
			.then(() => res.status(200).json({message : 'Mise à jour du compteur!'}));
			.catch(error => res.status(401).json({ error }));
	})

	res.status(200).json({message: 'LIKE'});


	


})};