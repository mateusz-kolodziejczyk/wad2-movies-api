import React, { useContext } from "react";
import useForm from "react-hook-form";
import { withRouter } from "react-router-dom";
import { GenresContext } from "../../contexts/genresContext"

const DiscoverSearchForm = ({ history }) => {
    const { register, handleSubmit, errors, reset } = useForm({
        defaultValues: {
            sort_by: "popularity",
            sort_order: "desc",
            include_adult: false,
            year: "",
            with_genres: null,
        }
    });

    const context = useContext(GenresContext);

    const onSubmit = data => {
        const sortString = data.sort_by + "." + data.sort_order;
        const queryString = "?sort_by=" + sortString + "&include_adult=" + data.include_adult
            + (data.year !== "" ? "&primary_release_year=" + data.year : "")
            + (data.with_genres !== "0" ? "&with_genres=" + data.with_genres : "")
            + (data.vote_average !== "" ? "&vote_average.gte=" + data.vote_average : "")
            + (data.vote_count !== "" ? "&vote_count.gte=" + data.vote_count : "")
        console.log(data);
        console.log(queryString);
        history.push("/" + queryString);
    };

    return (
        <form className="form bg-dark text-light" onSubmit={handleSubmit(onSubmit)}>
            <h3>Discover new movies</h3>
            <div className="form-check">
                <input type="checkbox" class="form-check-input" name="include_adult" ref={register} />
                <label class="form-check-label" for="exampleCheck1">Include Adult Movies</label>
            </div>
            {errors.include_adult && <p className=" text-white">{errors.author.message} </p>}
            <div class="form-row">
                <div class="form-group col-sm-2">
                    <label>Sort By
                <select class="form-control" name="sort_by" ref={register}>
                            <option value="popularity">Popularity</option>
                            <option value="release_date">Release Date</option>
                            <option value="vote_average">Vote Average</option>
                        </select>
                    </label>
                    {errors.sort_by && (
                        <p className="text-white">{errors.content.message} </p>
                    )}
                </div>
                <div class="form-group col-sm-10">
                    <label>Sort Order
                <select class="form-control" id="sort-order-dropdown" name="sort_order" ref={register}>
                            <option value="desc">Descending</option>
                            <option value="asc">Ascending</option>
                        </select>
                    </label>

                    {errors.sort_by && (
                        <p className="text-white">{errors.content.message} </p>
                    )}
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label>Year
                    <input
                            type="text"
                            className="form-control"
                            placeholder="Year"
                            defaultValue={""}
                            name="year"
                            ref={register}
                        />
                    </label>
                </div>
                <div className="form-group col-md-3">
                    <label>Genre
                           <select name="with_genres" class="form-control" ref={register}>
                            {context.genres.map(genre => {
                                return (
                                    <>
                                        <option key={genre.id} value={genre.id}>
                                            {genre.name}
                                        </option>
                                    </>
                                );
                            })}
                        </select>
                    </label>
                </div>

            </div>
            <div class="form-row">
                <div className="form-group col-md-3">
                    <label>Minimum Rating
                    <input
                            type="text"
                            className="form-control"
                            placeholder="Rating"
                            defaultValue={""}
                            name="vote_average"
                            ref={register}
                        />
                    </label>
                </div>
                <div className="form-group col-md-3">
                    <label>Minimum No. of Votes
                    <input
                            type="text"
                            className="form-control"
                            placeholder="Votes"
                            defaultValue={"50"}
                            name="vote_count"
                            ref={register}
                        />
                    </label>
                </div>
            </div>
            <div class="form-row">

                <div class="form-group col-md-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                </button>
                </div>
                <div class="form-group col-md-3">
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
      
                </div>
                <div class="form-group col-md-3">
                    <button
                        type="reset"
                        className="btn btn-primary"
                        onClick={() => {
                            history.push("/search-form");
                        }}
                    >
                        Reset Movie List
      </button>
      
                </div>
            </div>
        </form>
    );
};

export default withRouter(DiscoverSearchForm);