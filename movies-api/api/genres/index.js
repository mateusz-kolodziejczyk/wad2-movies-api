import express from 'express';
import genresModel from './genresModel';

const router = express.Router();
router.get('/', (req, res,next) => {
  genresModel.find().then(genres => res.status(200).send(genres))
  .catch((error) => next(error));
});
export default router;