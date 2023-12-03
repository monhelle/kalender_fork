const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
    date: {
        type: Number,
        required: true    
    },
    epost: {
        type: String,
        required: true,
        match: [/^\w+([\.-]?\w+)*@viken.no$/, "Ikke en gyldig epost!"],
        validate: {
            //check that noone used this email to post multiple answers for the current date.
            validator: async function() {
                let docs = await this.constructor.find({date: this.date});
                let doc = docs.find(element => element.date == this.date && element.epost == this.epost);
                return !doc; //returns true if doc is 'undefined'
            },
            message: 'Svar allerede angitt for denne eposten på denne datoen!'
        }
    },
    svar: {
        type: String,
        required: true,
        minlength: 5
    },
    winner: {
        type: Boolean,
        required: true,
        default: false
    }
});

const Answer = mongoose.model('answer', answerSchema);

module.exports = Answer;