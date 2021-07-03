const express = require('express');
const router = express.Router();

const mediasControllers = require('../controllers/medias.controllers');

router.get('/medias', mediasControllers.getAllMedia);
router.get('/medias/:mediaid', mediasControllers.getSingleMedia);
router.get('/medias/title/:title', mediasControllers.getSingleMediaByTitle);
router.post('/medias', mediasControllers.createMedia);
router.put('/medias/:mediaid', mediasControllers.updateSingleMedia);
router.delete('/medias/:mediaid', mediasControllers.removeSingleMedia);

module.exports = router;
