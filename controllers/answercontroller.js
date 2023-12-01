const Answer = require('../model/answer');

const postAnswer = async (req, res, next) => {
    const {epost, svar} = req.body;
    console.log(req.body)
    const date = req.params.day;
    let result;
    try {
        result = await Answer.create({date, epost, svar});
        res.status(200).redirect('/godkjent');
    } catch (error){
        res.status(409).redirect(`/ikke-godkjent/${date}/${error.message}`);
    }
}

const notapproved = (req, res) => {
    console.log('not approved');
    res.render('notapproved', {message: req.params.errormessage});
}

const approved = (req, res) => {
    res.render('approved');
}

module.exports = {postAnswer, notapproved, approved};