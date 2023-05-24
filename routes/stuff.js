const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const multer = require('../middleware/multer-config');

const stuffCtrl = require('../controllers/stuff');

router.get('/', auth, stuffCtrl.getAllThings); //Get pour trouver tous les objets
router.post('/', auth, multer, stuffCtrl.createThing); //Route de base d'enregistrement du router
router.get('/:id', auth, stuffCtrl.getOneThing); //Partie dynamique pour trouver 1 seul objet
router.put('/:id', auth, stuffCtrl.modifyThing); //Modifier un objet
router.delete('/:id', auth, stuffCtrl.deleteThing); //Supprimer un objet

//On exporte ce router pour l'importer dans app.js(app.use('/api/stuff', stuffRoutes);)
module.exports = router;
