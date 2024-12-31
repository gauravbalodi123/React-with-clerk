const router = require('express').Router();
// const Quotes = require('../models/qoutes');
const Issues = require('../models/tasks');


router.get('/alltasks', async (req, res) => {
    
    try {
        const allTasks = await Issues.find({});
        res.status(200).json(allTasks);
    }
    catch (e) {
        res.status(400).json({ msg: 'Something Went Wrong!!!' });
    }
});


router.post('/addTasks', async (req, res) => {
    
    const { Summary,Assignee,Reporter,Priority,Status } = req.body;
    await Issues.create({ Summary,Assignee,Reporter,Priority,Status });
    res.status(200).json({ msg: 'New Task Created Successfully' });
});


router.get('/tasks/:id', async(req, res) => {
    const issue = await Issues.findById(req.params.id);
    res.status(200).json(issue);
})


router.delete('/tasks/:id', async (req, res) => {
    try {
        const deletedTask = await Issues.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ msg: 'task not found.' });
        }
        res.status(200).json({ msg: 'task deleted successfully.' });
    } catch (error) {
        res.status(400).json({ msg: 'Something went wrong!' });
        console.error(error);
    }
});


router.patch('/tasks/:id', async (req, res) => {
    try {
        const { Summary,Assignee,Reporter,Priority,Status } = req.body;
        const updatedFields = { Summary,Assignee,Reporter,Priority,Status };

        if (Summary) updatedFields.Summary = Summary;
        if (Assignee) updatedFields.Assignee = Assignee;
        if (Reporter) updatedFields.Reporter = Reporter;
        if (Priority) updatedFields.Priority = Priority;
        if (Status) updatedFields.Status = Status;
        
        const updatedTask = await Issues.findByIdAndUpdate(req.params.id, updatedFields, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ msg: 'Task not found.' });
        }
        res.status(200).json({ msg: 'Task updated successfully.', updatedTask });
    } catch (error) {
        res.status(400).json({ msg: 'Something went wrong!' });
        console.error(error);
    }
});



module.exports = router;