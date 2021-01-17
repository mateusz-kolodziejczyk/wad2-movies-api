export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getFavourites = (username) => {
    return fetch(
       `/api/users/${username}/favourites`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };
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

// Get reviews for a movie by id
export const getMovieReviews = (id) => {
    return fetch(`/api/reviews/${id}`).then(res => res.json());
}

export const getUserReview = (id, username) => {
    return fetch(`/api/reviews/${id}/${username}`).then(res => res.json());
}

export const addUserReview = (id, username, content) => {
    return fetch(`/api/reviews/${id}/${username}`, {
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': window.localStorage.getItem('token')
        },
        method: 'put',
        body: JSON.stringify({ content: content})
    }).then(res => res.json())
}
