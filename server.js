import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors());
app.use(express.static('public'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

mongoose.connect('mongodb://localhost:27017/myapp');
const db = mongoose.connection;

// Check MongoDB connection
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    type: String,
    feedback:String
});

const User = mongoose.model('User', userSchema);

//SIGNUP
app.post('/feedback', (req, res) => {
    const { name, email, type, feedback } = req.body;

    // Create new user document
    const newUser = new User({
        name,
        email,
        type,
        feedback
    });

    // Save new user to database
    newUser.save()
        .then(feedback => {
            console.log('Feedback saved successfully:', feedback);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error saving feedback to database');
        });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});