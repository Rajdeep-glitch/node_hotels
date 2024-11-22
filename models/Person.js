const mongoose = require ('mongoose');


// define the person schema
const PersonSchema = mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    age:{
        type: Number
    },
    work:{
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required : true
    }

});
const Person = mongoose.model('Person',PersonSchema);
module.exports = Person;