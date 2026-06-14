const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongodb:27017/devopsdb');

const UserSchema = new mongoose.Schema({
    name: String
});

const User = mongoose.model('User', UserSchema);

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.post('/users', async (req, res) => {
    const user = new User({ name: req.body.name });
    await user.save();
    res.json(user);
});

app.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'deleted' });
});

app.listen(5000, () => {
    console.log('Backend running');
});
