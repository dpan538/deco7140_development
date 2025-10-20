// js/modules/getData.js
// Reusable function to make fetch()-based GET requests, including headers

const fetchGetData = (url, headers = {}) => {
    return fetch(url, {
        method: 'GET',
        headers: headers,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Server returned an error.');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        return null;
    });
};

export { fetchGetData };