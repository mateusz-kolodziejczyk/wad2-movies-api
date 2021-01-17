import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import personModel from '../api/people/personModel';
import reviewModel from '../api/reviews/reviewModel';
import genresModel from '../api/genres/genresModel'
import {movies} from './movies.js';
import {people} from './people.js';

const genres = require('./genres.json');
const users = [
  {
    'username': 'user1',
    'password': 'test1',
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
];

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }

  // deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}
  // deletes all people documents in collection and inserts test data
  export async function loadPeople() {
    console.log('load seed data');
    console.log(people.length);
    try {
      await personModel.deleteMany();
      await personModel.collection.insertMany(people);
      console.info(`${people.length} People were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load people Data: ${err}`);
    }
  }
  // deletes all genres documents in collection and inserts test data
  export async function loadGenres() {
    console.log('load seed data');
    console.log(genres.length);
    try {
      await genresModel.deleteMany();
      await genresModel.collection.insertMany(genres);
      console.info(`${genres.length} genres were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load genre Data: ${err}`);
    }
  }
  export async function deleteReviews(){
    console.log('delete existing reviews');
    try{
      await reviewModel.deleteMany();
    }
    catch(err){
      console.error(`failed to delete reviews: ${err}`)
    }
  }

