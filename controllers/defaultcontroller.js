const path = require('path');
const DEBUG =  process.env.DEBUG || false;

const index =  (req, res) => {
    res.render('index');
}

const getdate = (req, res, next) => {
    console.log('DEBUGMODE:', DEBUG)
    const day = req.params.day;
    const month = req.params.month;
    const currentDate = new Date();
    if(day && month) {
        if(DEBUG || month == 'december' && day <= currentDate.getDate()) {
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