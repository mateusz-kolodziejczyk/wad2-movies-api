import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const CastMemberSchema = new Schema({
  adult: { type: String},
  gender: { type: Number },
  id: { type: Number, required: true},
  known_for_department: { type: String },
  name: { type: String },
  original_name: { type: String },
  popularity: { type: Number },
  profile_path: { type: String},
  cast_id: { type: Number },
  character: { type: String },
  credit_id: { type: String },
  order: { type: Number },
});

const CastSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  cast: [CastMemberSchema]
})

export default mongoose.model('Cast', CastSchema);


