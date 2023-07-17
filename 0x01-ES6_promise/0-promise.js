export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform API request or any asynchronous operation here
    // Example: Fetch data from an API
    fetch('https://api.example.com')
      .then((response) => {
        // Handle the response
        resolve(response);
      })
      .catch((error) => {
        // Handle any error that occurred during the request
        reject(error);
      });
  });
}

