const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('ADHD Support Backend is running');
});

// Example endpoint for to-do items
app.post('/todo', (req, res) => {
    const todoItem = req.body.item;
    // Logic to save the to-do item
    res.status(201).send(`To-Do item "${todoItem}" added.`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
