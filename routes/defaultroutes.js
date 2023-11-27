const router = require('express').Router();
const {index,getdate,failedroute} = require('../controllers/defaultcontroller');

router.get('/', index);

router.get('/:month/:day',getdate);

router.use('*', failedroute);

module.exports = router;