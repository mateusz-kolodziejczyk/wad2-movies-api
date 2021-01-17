import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const GenresSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true }
});

export default mongoose.model('Genres', GenresSchema);


