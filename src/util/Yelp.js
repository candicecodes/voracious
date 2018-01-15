const apiKey = 'LAtMuVD9VIPbTtOWpZxj3Dbhg5NMfk8ygJpSttGQmylSkS7CZB0k6i6KY1m9tAm6Ga9v--_FlkkN39Eef7hRZjMWnFyckQsYgFdHRI9d-xEhJ3bHFKH7QDeXAuNcWnYx';

let yelp = {};

function search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: { Authorization: `Bearer ${apiKey}` }
    }).then(response => {
        return response.json();
    }).then(jsonResponse => {
        if(jsonResponse.business) {
            jsonReponse.business.map();
        }
    });
}