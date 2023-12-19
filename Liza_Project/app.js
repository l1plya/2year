const pageRouter = require('./routers/router');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { port, mongoURI } = require('./config/config'); 

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', pageRouter);
app.use('/css', express.static('src/css'));
app.use('/png', express.static('src/png'));
app.use('/js', express.static('src/js'));

const start = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    const Message = mongoose.model('Message', {
      name: String,
      email: String,
      message: String,
    });

    app.post('/submit-message', async (req, res) => {
      const { name, email, message } = req.body;
      try {
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        console.log('Message saved to database');
        res.redirect('/contact');
      } catch (error) {
        console.error(error);
        res.status(500).send('Error saving message to database');
      }
    });

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

start();
