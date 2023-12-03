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
        result = await Answer.find({date});
        let winners = null;
        console.log(`date is ${date} and it has passed: ${isDatePassed(date)}`);
        if(result.length > 0 && isDatePassed(date)) {
            winners = await determineWinner(result);
        } 
        res.render('allanswers', {winners, result, date, cssList: ['/css/answers.css']})
    } catch(error){
        res.end();
    }
}
const notapproved = (req, res) => {
    res.render('notapproved', {message: req.params.errormessage});
}

const approved = (req, res) => {
    res.render('approved');
}

async function determineWinner(resultlist) {
    const listofwinners = findWinner(resultlist);
    if(listofwinners.length == 0){
        const winner = Math.floor(Math.random() * resultlist.length);
        resultlist[winner].winner = true;
        try {
            await Answer.findOneAndUpdate({_id: resultlist[winner]._id}, resultlist[winner]);
        } catch(error) {
            console.log(error.message)
        }
    }
    return listofwinners;
}

/**
 * Returns a list with all the winners in a resultlist. Returns an empty array if
 * no winner has yet been determined.
 */
function findWinner(resultList) {
    const listofwinners = [];
    resultList.forEach(result => {
        result.winner ? listofwinners.push(result) : null;
    });
    return listofwinners;
}
/**
 * Determine if the day passed as an argument has passed  within the CURRENT
 * month.
 * @param {Number} date 
 */
function isDatePassed(date){
    const today = new Date().getDate();
    console.log(`today is ${today} and date is ${date}`)
    return date < today;
}

module.exports = {postAnswer, notapproved, approved, getAllAnswers};