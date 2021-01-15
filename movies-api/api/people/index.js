import express from 'express';
import personModel from './personModel';

const router = express.Router();

router.get('/', (req, res,next) => {
   personModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  personModel.findByPersonDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

export default router;