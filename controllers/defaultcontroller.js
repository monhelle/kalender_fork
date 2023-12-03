const path = require('path');
const DEBUG =  process.env.DEBUG || false;

const index =  (req, res) => {
    res.render('index');
}

const getdate = (req, res, next) => {
    const day = req.params.day;
    const month = req.params.month;
    const currentDate = new Date();
    console.log('getdate', DEBUG, DEBUG == 'false');
    if(day && month) {
        if(DEBUG == 'true'|| month == 'december' && day <= currentDate.getDate()) {
            res.sendFile(path.resolve(`${__dirname}/../public/${month}/${day}/content.html`));
        } else {
            console.log('naughty naughty');
            res.redirect('/');
        }
    } else {
        next();
    }
}

const failedroute = (req,res)=>{
    res.status(404).render('404', {title: '404'});
}

module.exports = {index,getdate,failedroute};