const mongoose = require('mongoose');
const tasks = require('./models/tasks');


const DUMMY_TASKS = [


    {
        Summary:'API changes',
        Assignee:'Gaurav',
        Reporter:'Abhishek',
        Priority:'High',
        Status:'Todo'
    },
    {
        Summary:'API changes',
        Assignee:'Raj',
        Reporter:'Aarushi',
        Priority:'medium',
        Status:'Todo'
    },
    {
        Summary:'API changes',
        Assignee:'Ratan',
        Reporter:'Kamal',
        Priority:'Very High',
        Status:'Todo'
    },
    {
        Summary:'API changes',
        Assignee:'Anchal',
        Reporter:'Akshat',
        Priority:'High',
        Status:'Todo'
    },
    {
        Summary:'API changes',
        Assignee:'Gaurav',
        Reporter:'shivam',
        Priority:'High',
        Status:'Todo'
    }

]

async function seedDB() {
    await tasks.insertMany(DUMMY_TASKS);
    console.log('dummy tasks seeded');
    
}

module.exports = seedDB;

