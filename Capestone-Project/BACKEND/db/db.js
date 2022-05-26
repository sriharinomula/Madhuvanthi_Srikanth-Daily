const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

 const dburl = "mongodb+srv://admin:root@cluster0.ciln6.mongodb.net/Capestone?retryWrites=true&w=majority"
export let mong = mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});