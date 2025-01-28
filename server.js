const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Configure session middleware BEFORE other middleware and routes
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true, // Changed to true for session handling
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Set up Handlebars as the template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(routes);

// Error handling middleware with more detailed logging
app.use((err, req, res, next) => {
  console.error('Error details:', {
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method
  });
  
  if (process.env.NODE_ENV === 'development') {
    res.status(500).json({
      message: err.message,
      stack: err.stack
    });
  } else {
    res.status(500).render('error', {
      message: 'Something went wrong!',
      logged_in: req.session.logged_in
    });
  }
});

// Sync sequelize models and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`\x1b[36m%s\x1b[0m`, `Server running on http://localhost:${PORT}`);
  });
});
