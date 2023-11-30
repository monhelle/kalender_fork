const router = require('express').Router();
const {index, getdate,failedroute} = require('../controllers/defaultcontroller');
const {postAnswer, notapproved, approved} = require('../controllers/answercontroller');

router.get('/', index);

router.get('/:month/:day',getdate);

router.get('/godkjent', approved);

router.get('/ikke-godkjent/:day/:errormessage', notapproved);

router.post('/:month/:day', postAnswer);

router.use('*', failedroute);

module.exports = router;