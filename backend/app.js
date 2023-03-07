const express = require('express');
const mongoose = require('mongoose');

const app = express();
const Thing = require('./models/Thing');

mongoose.connect('mongodb+srv://cluster0.yiwo2kf.mongodb.net/myFirstDatabase" --apiVersion 1 --username audrickpinson',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json());

// mise en place d'un middleware general( aura un impact global sur la suite des proccedure) qui va donné acces au elements suivant(genre de clefs d'acces securise generaliser)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// dans le cadre de nouveau projet tjrs modif route post et corps requete
app.post('/api/stuff', (req, res, next) => {
	delete req.body._id;
	const thing = new Thing({
		...req.body
		});
	thing.save()
	.then(() => res.status(201).json({ message: 'objet liké !'}))
	.catch(error => res.status(400).json({ error }));
});

app.get('/api/stuff/:id', (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
});


// mise en place d'un ou des tableau(x) contenant l'info des objets
// creation de l'url visé (routes memant au tableau)
app.get('/api/stuff', (req, res, next) => {
  const stuff = [
  	// realisation de modification des tableaux dans le cadre du projet
    {
    thing.find()
	.then(things => res.status(200).json(things))
	.catch(error => res.status(400).json({ error }));
});
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 2900,
      userId: 'qsomihvqios',
    },
  ];
  res.status(200).json(stuff);
});


// app.use((req, res, next) => {
// 	console.log('requete perçu');
// 	next();
// });

// app.use((req, res, next) => {
// 	res.status(201);
// 	next();
// });

// app.use((req, res, next) => {
// 	res.json({message:'...'});
// });

// app.use((req, res) => {
// 	console.log('reponse reçu');
// });

module.exports = app;