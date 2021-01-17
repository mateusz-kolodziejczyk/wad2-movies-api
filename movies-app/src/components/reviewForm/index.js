import React, {useContext, useEffect, useState } from "react";
import "./reviewForm.css";
import useForm from "react-hook-form";
import {MoviesContext} from '../../contexts/moviesContext'
import {AuthContext} from '../../contexts/authContext';
import { withRouter } from "react-router-dom";
import { addUserReview, getUserReview} from "../../api/movie-api";

const ReviewForm = ({ movie, history }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const context = useContext(AuthContext);
  const [review , setReview] = useState(null);
  useEffect(() => {
    getUserReview(movie.id, context.userName).then(review => {
      setReview(review);
    });
  }, []);
  const onSubmit = data => {
    addUserReview(movie.id, context.userName , data.content)
  };

  return (
    <>
      {review ?
          <form className="form bg-dark text-light" onSubmit={handleSubmit(onSubmit)}>
      <h3>Add your review</h3>
      <div className="form-group">
        <textarea
          rows="10"
          type="text"
          className="form-control"
          placeholder="Write your review"
          defaultValue={review.content ? review.content : ""}
          name="content"
          ref={register({
            required: "No review text",
            minLength: { value: 20, message: "Review is too short" }
          })}
        />
      </div>
      {errors.content && (
        <p className="text-white">{errors.content.message} </p>
      )}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button
        type="reset"
        className="btn btn-primary reset"
        onClick={() => {
          reset({
            author: "",
            content: ""
          });
        }}
      >
        Reset
      </button>

    </form>
    : <h3>Loading previous review</h3>}
    </>

  );
};

export default withRouter(ReviewForm);