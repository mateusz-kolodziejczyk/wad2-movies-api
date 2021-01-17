# Assignment 2 - Web API.

Name: Your Name

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + People routes - Allows a user to access information about individual people or all people in a database.
 + User protected routes - Routes related to user favourites are restricted to an authorized user.
 + Feature 3 = ......
 + etc
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
| movies | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| -- | -- | -- | -- | -- 
| users | -- | -- | -- | --
| /api/users | Get all users | Register or authenticate user | ... | ...
| -- | -- | -- | -- | --
| reviews | -- | -- | -- | --
| /api/reviews/ | Get all reviews | N/A | N/A | N/A
| /api/reviews/{movieid} | Get all reviews for 1 movie | N/A | N/A | N/A
| /api/reviews/{movieid}/{username} | Get the review from the user | N/A | Insert or Update a review. | N/A
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.
Protected routes:
    /api/movies 
    /api/users/:username/favourites  
    /api/reviews/ 

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

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

A movie id is added to the favourites. The app reflects the change

## Extra features

. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  