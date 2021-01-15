# Assignment 1 - ReactJS app.

Name: Mateusz Kolodziejczyk

## Features.
 
 + Watchlist Page - Adding movies to watchlist on the upcoming page adds them to this page.
 + Movie page Cast List - The movie has a list of its cast members on its page, allowing users to see who acted in the movie.
 + Full Cast List - The movie cast list is shorter, as casts can be extremely large. The full cast list is in a separate page.
 + Discover Search - Added a search feature to the home page to query the API to send back movies fitting the given criteria.
 + Person Page - A page with details about a person. Also includes additional images of the person, as well as any movies they starred in.
 + The user is able to both remove a movie from their watchlist, or add it to it.
 + Top Rated Movies Page - A page showing a list of the highest rated movies on TMDB.
 + The user can add movies on both the homepage and top rated page to their favorites list.

## Setup requirements (If required).

Create your own .env file with your own TMDB API key in the root folder. 

## API Data Model.

+ https://api.themoviedb.org/3/movie/top_rated - get a list of the top rated movies.
+ https://api.themoviedb.org/3/movie/${id}/credits - get a list of credits(cast members) for a specific movie
+ https://api.themoviedb.org/3/person/${id} - get details on a specific person
+ https://api.themoviedb.org/3/person/${id}/images - get all the images of the person
+ https://api.themoviedb.org/3/person/${id}/movie_credits - gets a list of all the credits a person has, as cast or crew. 

## App Design.

### Component catalogue (If required).

![][stories]

### UI Design.

![][personDetail]
> Shows detailed information on a person, mostly actors. Clicking on "Show Other Images" shows all the other profile pictures of the actor. Clicking on "Show Movies the Person Starred in" shows all the movies the person starred or co-starred in.

![][movieDetail]
> Updated movie detail screen, shows detailed information on the movie. Clicking on Show Reviews shows extracts of the reviews on the movie. The new button Show Cast brings up 10 cast member by order of relevance.

![][movieCast]
> Shows the entire cast of the movie by order of relevance. The lead and starring actors are listed at the top. Clicking on Actor profile sends the user to the person detail page.

![][topRated]
> Shows the top rated movies on the entire database, with a minimum amount of user scores. Clicking on the add to favorites button allows the user to add the movie to the favorites view.

![][watchlist]
> Shows all the movies added to the watchlist

![][homePage]
> Updated. The table can be hidden by clickin on the Hide Discover Movies Form button. The various options allow the user to search for movies that fit their criteria. The Submit button will submit the form and send an api request changing the movie list. Reset will reset the form. Reset Movie List will reset the displayed list of movies.

## Routing.

+ /movies/:id/cast (public) - displays an abridged version of the cast list on a movie page
+ /movies/:id/full-cast (public) - displays the full cast of a movie on a separate page
+ /movies/top-rated(public) - displays a list of the top rated movies on tmdb
+ /person/:id(public) - displays information about a particular person
+ /movies/watchlist(public) - displays a list of all the movies added to the watchlist
+ /search-form?query(public) - displays a search form on the main page.


### Data hyperlinking.

![][actorProfileLink]
> Clicking 'Actor Profile' for an actor on the table will display the full profile of the actor.

![][personDetailsMovieLink]
> Clicking 'Movie Page' for a movie will display a page full of the movie's details.

![][DMFSubmit]
> Clicking on 'Submit' will send the user back to '/', however with a query string matching what the user entered.

![][DMFResetMovieList]
> Clicking on 'Reset Movie List' will send the user back to '/search-form' and reset their movie list.

![][fullCastLink]
> Clickin on 'Full Cast' will display a list of all the cast members on a separate page.


---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[stories]: ./public/storybook.png
[personDetail]: ./public/personDetail.PNG
[movieCast]: ./public/movieCast.PNG
[topRated]: ./public/topRated.PNG
[homePage]: ./public/homePage.PNG
[watchlist]: ./public/watchlist.PNG
[actorProfileLink]: ./public/actorProfileLink.PNG
[personDetailsMovieLink]: ./public/personDetailMovieLink.PNG
[DMFResetMovieList]: ./public/discoverMovieFormResetMovieList.PNG
[DMFSubmit]: ./public/discoverMovieFormSubmit.PNG
[fullCastLink]: ./public/fullCastLink.PNG

