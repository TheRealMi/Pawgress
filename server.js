// Initialize sessions and server in this file
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3002;

const hbs = exphbs.create({ helpers });

// Define session & fill properties
const sess = {
    secret: 'super secret secret',
    cookie: {
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// Initialize session 
app.use(session(sess));

// Inform Express.js we are using handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Use express functions to handle data processing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

// Inform Express.js we are using the routes in controllers
app.use(routes);

// Start server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
