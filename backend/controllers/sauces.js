const Sauce = require('../models/sauces');
const fs = require('fs');

exports.createSauce = (req, res, next) => {
	Sauces.save()
    .then(sauces => res.status(200).json({message: 'intégration d une nouvelle sauce'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllSauces = (req, res, next) => {
	Sauces.find()
    .then(sauces => res.status(200).json({message: 'selection de toutes les sauces présente'}))
    .catch(error => res.status(400).json({ error }));
}

exports.getOneSauce = (req, res, next) => {
	Sauces.findOne({ sauces: req.body.sauces })
    .then(sauces => res.status(200).json({message: 'votre sauce à été selectionner'}))
    .catch(error => res.status(404).json({ error }));
};

exports.modifySauce = (req, res, next) => {
	Sauces.updateOne({ sauces: req.body.sauces })
    .then(sauces => res.status(200).json({message: 'votre sauce à été modifier'}))
    .catch(error => res.status(404).json({ error }));
};

exports.likeDislikeSauce = (req, res, next) => {
	Sauces.....({ sauces: req.body.sauces })
    .then(sauces => res.status(200).json({message: 'vous n appréciez pas cette sauce'}))
    .catch(error => res.status(404).json({ error }));
};