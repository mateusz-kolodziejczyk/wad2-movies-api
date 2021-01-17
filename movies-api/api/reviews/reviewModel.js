import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//ReviewModel contains some custom validation
const ReviewSchema = new Schema({
    author: { type: String, required: true },
    movie: {type: mongoose.Schema.Types.ObjectId, ref: 'Movies', required: true},
    content: {
        type: String,
        validate: {
            validator: function(s) {
                return s && s.length >= 20;
            },
            message: "The review content must be at least 20 characters long"
        },
    }
});

ReviewSchema.statics.findByUserAndMovieId = function (username, id) {
    return this.findOne({ movie: id, author: username  });
};

export default mongoose.model('Reviews', ReviewSchema);

