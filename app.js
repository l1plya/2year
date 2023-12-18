const pageRouter = require('./routers/router');
const express = require('express');

const {port} = require('./config/config');

const app = express();

app.use('/', pageRouter)
app.use('/css', express.static('src/css'));
app.use('/png', express.static('src/png'));
app.use('/js', express.static('src/js'));

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (e) {
        console.log(e);
    }

}

start()
