import express from 'express';
import movieModel from '../movies/movieModel';
import reviewModel from './reviewModel';
import jwt from 'jsonwebtoken';

const router = express.Router(); // eslint-disable-line

router.put('/:movieId/:userName', async (req, res, next) => {
    try {
        const movieId = req.params.movieId;
        const userName = req.params.userName;
        const movie = await movieModel.findByMovieDBId(movieId);
        const query = { 'author': userName, 'movie': movie };
        const review = { 'author': userName, 'movie': movie, 'content': req.body.content }
        await reviewModel.findOneAndUpdate(query, review,
            {
                upsert: true,
                runValidators: true
            })
        res.status(201).json(review);
    }
    catch (err) {
        next(err)
    }
});

router.get('/:movieId/:userName', async (req, res, next) => {
    try {
        const movieId = req.params.movieId;
        const userName = req.params.userName;
        const movie = await movieModel.findByMovieDBId(movieId);
        // Populate the movie field to get its id.
        let review = await reviewModel.findByUserAndMovieId(userName, movie).populate('movie');
        if (review) {
            // Only send back the db movie id
            const sentReview = { 'author': review.author, 'movie': review.movie.id, 'content': review.content };
            res.status(201).send(sentReview);
        }
        else {
            res.status(404).json({
                code: 404,
                msg: 'No review found'
            });
        }

    }
    catch (err) {
        next(err)
    }
});
router.get('/', async (req, res, next) => {
    try{
        let reviews = await reviewModel.find().populate('movie');
        // Format the review return object
        reviews = reviews.map(review => {
            return { author: review.author, movie: review.movie.id, content: review.content }
        });
        res.status(201).send(reviews);
    }
    catch(err){
        next(err)
    }
});
//{author: review.author, movie: review.movie.id, content: review.content}
router.get('/:movieId', async (req, res, next) => {
    try {
        const movieId = req.params.movieId;
        const movie = await movieModel.findByMovieDBId(movieId);
        let reviews = await reviewModel.find({ movie: movie._id }).populate("movie");
        // Format the review return object
        reviews = reviews.map(review => {
            return { author: review.author, movie: review.movie.id, content: review.content }
        });
        res.status(201).send(reviews);
    }
    catch (err) {
        next(err)
    }

});


export default router;