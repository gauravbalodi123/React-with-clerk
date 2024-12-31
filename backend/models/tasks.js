const mongoose = require('mongoose');



// {
//     Summary:'API changes',
//     Assignee:'Gaurav',
//     Reporter:'Abhishek',
//     Priority:'High',
//     Status:'Todo'
// },

// Summary,Assignee,Reporter,Priority,Status


const tasksSchema = new mongoose.Schema({

    Summary:{
        type:String
    },
    Assignee:{
        type:String
    },
    Reporter:{
        type:String
    },
    Priority:{
        type:String
    },
    Status:{
        type:String
    }


});


module.exports = mongoose.model('Issues',tasksSchema);




