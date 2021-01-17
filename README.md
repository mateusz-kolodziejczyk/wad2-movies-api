# Assignment 2 - Web API.

Name: Mateusz Kolodziejczyk

## Features.
 
 + People routes - Allows a user to access information about individual people or all people in a database.
 + User protected routes - Routes related to user favourites are restricted to an authorized user.
 + Custom validation in ReviewModel - Reviews must be at least 20 characters in length to be valid
 + Integration with my assignment 1 project - Able to access/add user favourites and movies as well as movie reviews posted by other users.
 + Review routes - Allows a user to access reviews on a particular movie, as well as add/modify/delete their own review of it.
 + Cast routes - Allows a user to access the cast list of a specific movie.
 + Reworked Genres routes - No longer relies on tmdb

## Installation Requirements

You need a working mongodb install, as well as npm and node.

To get this repository on your computer you need to clone it as shown below. To do this you will require a working install of git on your machine.

```bat
git clone http:\myrepo.git
```

Installation

Run npm install to be able to start the app.
```bat
npm install
```

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

```bat
NODE_ENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
SEED_DB=true
secret=YourJWTSecret
```


## API Design
|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| -- | -- | -- | -- | -- 
| /api/users | Get all users | Register or authenticate user | N/A | N/A
| /api/users/{id} | N/A | N/A | Update a user | N/A
| /api/users/{username}/favourites | Get the user's favourite movies | Add a movie to the user's favourites | N/A | N/A
| -- | -- | -- | -- | --
| /api/reviews/ | Get all reviews | N/A | N/A | N/A
| /api/reviews/{movieid} | Get all reviews for 1 movie | N/A | N/A | N/A
| /api/reviews/{movieid}/{username} | Get the review from the user | N/A | Insert or Update a review. | Delete a review
| -- | -- | -- | -- | --
| /api/genres | Get all genres | N/A | N/A | N/A
| -- | -- | -- | -- | --
| /api/cast/{movieid} | Get all cast members for a movie | N/A | N/A | N/A
| -- | -- | -- | -- | --
| /api/people | Get all people | N/A | N/A | N/A
| /api/people/{personid} | Get person details | N/A | N/A | N/A
## Security and Authentication
Uses jwt tokens and passport for authenticating users. No sessions are used.

Protected routes:
+ /api/movies 
+ /api/users/:username/favourites  
+ /api/reviews 
+ /api/genres
+ /api/people
+ /api/cast

## Integrating with React App
The amount of documents I have is much smaller than tmdb, so only some data was included just to show that the integration works.

I have included the updated react app with required changes to work with my api in this repository.

I integrated a few major aspects into my movie app. One of them is getting the movies using my own api isntead of the tmdb one. Another is adding a favourite to the API which allows multiple users to track their favourites.

Below is an example of an api call. All the api calls in my app are included in the movies-app/src/api/movie-api.js file.
~~~Javascript
export const addFavourite = (username, id) => {
    return fetch(`/api/users/${username}/favourites`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': window.localStorage.getItem('token')
        },
        method: 'post',
        body: JSON.stringify({ id: id})
    }).then(res => res.json())
};
~~~

I also integrated the review code from my react app with my review api routes.
A movie id is added to the favourites. The app reflects the change.
The app also gets the cast for a movie from my api instead of through tmdb.
The app gets its genres from my api.
It also gets any people using my api.
