# Assignment 2 - Web API.

Name: Mateusz Kolodziejczyk

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + People routes - Allows a user to access information about individual people or all people in a database.
 + User protected routes - Routes related to user favourites are restricted to an authorized user.
 + Custom validation in ReviewModel - Reviews must be at least 20 characters in length to be valid
 + Integration with my assignment 1 project - Able to access/add user favourites and movies as well as movie reviews posted by other users.
 + etc

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:

```bat
git clone http:\myrepo.git
```

Installation
You need a working mongodb install, as well as npm and node.
Then run npm install in movies-api and movies-app.
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
seedDb=true
secret=YourJWTSecret
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| -- | -- | -- | -- | -- 
| /api/users | Get all users | Register or authenticate user | ... | ...
| /api/users/favourites | Get the user's favourite movies | Add a movie to the user's favourites | ... | ...
| -- | -- | -- | -- | --
| /api/reviews/ | Get all reviews | N/A | N/A | N/A
| /api/reviews/{movieid} | Get all reviews for 1 movie | N/A | N/A | N/A
| /api/reviews/{movieid}/{username} | Get the review from the user | N/A | Insert or Update a review. | Delete a review
| -- | -- | -- | -- | --
| /api/genres | Get all genres | N/A | N/A | N/A
| -- | -- | -- | -- | --


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.
Protected routes:
    /api/movies 
    /api/users/:username/favourites  
    /api/reviews 
    /api/genres
    /api/people

## Integrating with React App

I have included the updated react app with required changes to work with my api in this repository.

I integrated a few major aspects into my movie app. One of them is getting the movies using my own api isntead of the tmdb one. Another is adding a favourite to the API which allows multiple users to track their favourites.

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

A movie id is added to the favourites. The app reflects the change

## Extra features

. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  