// Handle the response from an API request
// The function takes a promise as input
function handleResponseFromAPI(promise) {
  // Attach handlers to the promise using `.then` and `.catch` methods
  return promise
    .then(() => {
      // If the promise resolves, return an object with status 200 and body 'Success'
      return {
        status: 200,
        body: 'Success',
      };
    })
    .catch(() => {
      // If the promise rejects, return an empty Error object
      return new Error();
    })
    .finally(() => {
      // Execute the final callback regardless of the promise's outcome
      console.log('Got a response from the API');
    });
}

// Export the handleResponseFromAPI function as the default export
export default handleResponseFromAPI;
