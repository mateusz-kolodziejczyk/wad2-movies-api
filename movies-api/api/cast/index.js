import express from 'express';
import castModel from './castModel';

const router = express.Router();

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
    castModel.findOne({"id": id}).then(cast=> res.status(200).send(cast)).catch(next);
});

export default router;