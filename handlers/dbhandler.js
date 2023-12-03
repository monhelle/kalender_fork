const mongoose = require('mongoose');

const connectToDB =async (dbstring, dbname) => {  
    console.log('trying to connect to: ', dbname)
    try {
        const result = await mongoose.connect(dbstring, {dbname})
        result.connections.forEach(connection => {
                console.log(`connected to DB: ${connection.name}`)
        });
    } catch (err) {
        console.log('error connecting to db\n', err.message, '\n',err);
    }

}

const closeConnection = async () => {
    await mongoose.disconnect();
    console.log('\n-\ndb disconnected!')
}

module.exports = {connectToDB, closeConnection};