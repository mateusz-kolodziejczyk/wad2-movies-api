import express from 'express';
import User from './userModel';
import movieModel from '../movies/movieModel';
import jwt from 'jsonwebtoken';

const router = express.Router(); // eslint-disable-line

router.post('/:userName/favourites', async (req, res, next) => {
    try {
      const newFavourite = req.body.id;
      const userName = req.params.userName;
      const movie = await movieModel.findByMovieDBId(newFavourite);
      const user = await User.findByUserName(userName);
      if (!user.favourites.includes(movie._id)) {
        await user.favourites.push(movie._id);
        await user.save();
        res.status(201).json(user);
      }
      else {
        res.status(400).json({
          code: 400,
          msg: "Adding favourite failed. User already has it set as favourite"
        })
      }
    }
    catch (err) {
      next(err)
    }
  });
  
  router.get('/:userName/favourites', (req, res, next) => {
  
    const user = req.params.userName;
    User.findOne({ username: user }).then(
      user => res.status(201).send(user.favourites)
    ).catch(next);
  });

  export default router;