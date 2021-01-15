import React from "react";
import { addDecorator, storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieCard from "../src/components/movieCard";
import FilterControls from "../src/components/filterControls";
import MoviesHeader from "../src/components/headerMovieList";
import MovieList from "../src/components/movieList";
import MovieDetails from "../src/components/movieDetails";
import MovieHeader from "../src/components/headerMovie";
import MovieCast from "../src/components/movieCast";
import PersonDetails from "../src/components/personDetails";
import DiscoverSearchForm from "../src/components/discoverSearchForm";
import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";
import { action } from "@storybook/addon-actions";
import PersonHeader from "../src/components/personHeader";
import PersonImages from "../src/components/personImages"
import PersonMovieCredits from "../src/components/personMovieCredits";

const sample_movie_credits = require('./data/sample_credits.json')


const sample = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 28,
      name: "Action"
    }
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US"
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692
};

const sample_actor = {
  "adult": false,
  "also_known_as": [
    "Киану Ривз",
    "키아누 리브스",
    "キアヌ・リーブス",
    "เคอานู รีฟส์",
    "基努·里维斯",
    "קיאנו ריבס",
    "Keanu Charles Reeves",
    "Κιάνου Ριβς",
    "Κιάνου Τσαρλς Ριβς",
    "Кіану Рівз",
    "كاينو ريفز",
    "كيانو ريفز"
  ],
  "biography": "Keanu Charles Reeves is a Canadian actor. Reeves is known for his roles in Bill & Ted's Excellent Adventure, Speed, Point Break, and The Matrix trilogy as Neo. He has collaborated with major directors such as Stephen Frears (in the 1988 period drama Dangerous Liaisons); Gus Van Sant (in the 1991 independent film My Own Private Idaho); and Bernardo Bertolucci (in the 1993 film Little Buddha). Referring to his 1991 film releases, The New York Times' critic, Janet Maslin, praised Reeves' versatility, saying that he \"displays considerable discipline and range. He moves easily between the buttoned-down demeanor that suits a police procedural story and the loose-jointed manner of his comic roles.\" A repeated theme in roles he has portrayed is that of saving the world, including the characters of Ted Logan, Buddha, Neo, Johnny Mnemonic, John Constantine and Klaatu.696969",
  "birthday": "1964-09-02",
  "deathday": null,
  "gender": 2,
  "homepage": null,
  "id": 6384,
  "imdb_id": "nm0000206",
  "known_for_department": "Acting",
  "name": "Keanu Reeves",
  "place_of_birth": "Beirut, Lebanon",
  "popularity": 31.45,
  "profile_path": "/rRdru6REr9i3WIHv2mntpcgxnoY.jpg"
}

const sample_images = [
  {
    "aspect_ratio": 0.6666666666666666,
    "file_path": "/rRdru6REr9i3WIHv2mntpcgxnoY.jpg",
    "height": 1272,
    "iso_639_1": null,
    "vote_average": 5.984,
    "vote_count": 41,
    "width": 848
  },
  {
    "aspect_ratio": 0.6667857142857143,
    "file_path": "/qVS4Y3emBIfxqvlTFjFZOFb4kkK.jpg",
    "height": 2800,
    "iso_639_1": null,
    "vote_average": 5.282,
    "vote_count": 14,
    "width": 1867
  },
  {
    "aspect_ratio": 0.6666666666666666,
    "file_path": "/d9HyjGMCt4wgJIOxAGlaYWhKsiN.jpg",
    "height": 1800,
    "iso_639_1": null,
    "vote_average": 5.252,
    "vote_count": 44,
    "width": 1200
  },
  {
    "aspect_ratio": 0.6666666666666666,
    "file_path": "/6T7uBAjaS9gCck4yPykF6TvudCq.jpg",
    "height": 2100,
    "iso_639_1": null,
    "vote_average": 5.186,
    "vote_count": 20,
    "width": 1400
  },
  {
    "aspect_ratio": 0.6666666666666666,
    "file_path": "/kaoY9Ddm9QPc4AXuZjJ0kY2Avmd.jpg",
    "height": 3000,
    "iso_639_1": null,
    "vote_average": 5.18,
    "vote_count": 18,
    "width": 2000
  },
  {
    "aspect_ratio": 0.6666666666666666,
    "file_path": "/2pvRo9bkTOovd88XQC4BqlVGLIm.jpg",
    "height": 3000,
    "iso_639_1": null,
    "vote_average": 5.146,
    "vote_count": 10,
    "width": 2000
  },
  {
    "aspect_ratio": 0.6666666666666666,
    "file_path": "/b09UgA9Qw687ACQEZbxlSH1EF4g.jpg",
    "height": 3000,
    "iso_639_1": null,
    "vote_average": 5.146,
    "vote_count": 10,
    "width": 2000
  },
  {
    "aspect_ratio": 0.6666666666666666,
    "file_path": "/gvZa55c23VdK2Ohr0TyiOxonv0x.jpg",
    "height": 3000,
    "iso_639_1": null,
    "vote_average": 5.12,
    "vote_count": 17,
    "width": 2000
  },
  {
    "aspect_ratio": 0.6666666666666666,
    "file_path": "/3xNcgBw9THriGZ0WualllGqioAf.jpg",
    "height": 3000,
    "iso_639_1": null,
    "vote_average": 5.09,
    "vote_count": 11,
    "width": 2000
  },
  {
    "aspect_ratio": 0.6666666666666666,
    "file_path": "/2CaOkXP0Y7T8YItalMfBQRkWVX2.jpg",
    "height": 3000,
    "iso_639_1": null,
    "vote_average": 4.968,
    "vote_count": 11,
    "width": 2000
  },
  {
    "aspect_ratio": 0.6666666666666666,
    "file_path": "/bOlYWhVuOiU6azC4Bw6zlXZ5QTC.jpg",
    "height": 1500,
    "iso_639_1": null,
    "vote_average": 4.908,
    "vote_count": 51,
    "width": 1000
  }
];

storiesOf("Home Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={movie => <button className="btn w-100 btn-primary">Test</button>}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Home Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Home Page/Header", module).add("default", () => (
  <MoviesHeader title="All Movies" numMovies={10} />
));

storiesOf("Home Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Movie Details Page/MovieDetails", module).add("default", () => (
  <MovieDetails movie={sample} />
));
storiesOf("Person Details Page/PersonDetails", module).add("default", () => (
  <PersonDetails person={sample_actor} />
));
storiesOf("Movie Cast Page/MovieCast", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const cast = [sample_actor, sample_actor, sample_actor, sample_actor];
    return (
      <MovieCast cast={cast} />
    )
  });

storiesOf("Movie Details Page/MovieHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MovieHeader movie={sample} />);

storiesOf("Person Details Page/PersonHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <PersonHeader person={sample_actor} />);

storiesOf("Person Details Page/PersonImages", module)
  .add("default", ()=> <PersonImages images={sample_images} />)

  storiesOf("Person Details Page/PersonMovieCredits", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <PersonMovieCredits credits={sample_movie_credits} />)

storiesOf("Home Page/DiscoverSearchForm", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <DiscoverSearchForm />);

