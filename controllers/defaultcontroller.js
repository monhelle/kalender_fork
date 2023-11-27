const path = require('path');

const index =  (req, res) => {
    res.render('index');
}

const getdate = (req, res, next) => {
    const day = req.params.day;
    const month = req.params.month;
    if(day && month) {
        res.sendFile(path.resolve(`${__dirname}/../public/${month}/${day}/content.html`));
    } else {
        next();
    }
}

const failedroute = (req,res,next)=>{
    res.status(404).render('404', {title: '404'});
}

module.exports = {index,getdate,failedroute};