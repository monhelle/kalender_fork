const Answer = require('../model/answer');

const postAnswer = async (req, res, next) => {
    const {epost, svar} = req.body;
    const date = req.params.day;
    let result;
    try {
        result = await Answer.create({date, epost, svar});
        res.status(200).redirect('/godkjent');
    } catch (error){
        res.status(409).redirect(`/ikke-godkjent/${date}/${error.message}`);
    }
}

const getAllAnswers = async (req, res, next) => {
    let result;
    const date = req.params.date;
    try {
        result = await Answer.find({date})
        result.length > 0 ? res.render('allanswers', {result}):res.render({result:false});
    } catch(error){
        console.log(error.message);
        res.end();
    }
}
const notapproved = (req, res) => {
    console.log('not approved');
    res.render('notapproved', {message: req.params.errormessage});
}

const approved = (req, res) => {
    res.render('approved');
}

module.exports = {postAnswer, notapproved, approved, getAllAnswers};