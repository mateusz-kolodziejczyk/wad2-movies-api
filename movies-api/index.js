import './db';
import { loadUsers, loadMovies, loadPeople, loadGenres, deleteReviews, loadCast } from './seedData'
import dotenv, { load } from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import usersRouter from './api/users';
import genresRouter from './api/genres';
import peopleRouter from './api/people';
import reviewsRouter from './api/reviews';
import castRouter from './api/cast';
import protectedUsersRouter from './api/users/protected';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from './authenticate';

dotenv.config();
const errHandler = (err, req, res, next) => {
    /* if the error in development then send stack trace to display whole error,
    if it's in production then just send error message  */
    if (process.env.NODE_ENV === 'production') {
        return res.status(500).send(`Something went wrong!`);
    }
    res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};
if (process.env.SEED_DB) {
    loadUsers();
    loadMovies();
    loadPeople();
    loadGenres();
    loadCast();
    deleteReviews();
}
const app = express();

const port = process.env.PORT;
app.use(session({
    secret: 'ilikecake',
    resave: true,
    saveUninitialized: true
}));

app.use(express.static('public'));
//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(passport.initialize());


//update /api/Movie route
app.use('/api/movies', passport.authenticate('jwt', { session: false }), moviesRouter);
app.use('/api/users', usersRouter);
app.use('/api/cast', passport.authenticate('jwt', { session: false }), castRouter);
app.use('/api/reviews', passport.authenticate('jwt', { session: false }), reviewsRouter);
app.use('/api/users', passport.authenticate('jwt', { session: false }), protectedUsersRouter)
app.use('/api/genres', passport.authenticate('jwt', { session: false }), genresRouter);
app.use('/api/people', passport.authenticate('jwt', { session: false }), peopleRouter)
app.use(errHandler);

app.listen(port, () => {
    console.info(`Server running at ${port}`);
});

