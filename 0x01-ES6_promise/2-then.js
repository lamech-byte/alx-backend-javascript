export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      const response = {
        status: 200,
        body: 'success',
      };
      console.log('Got a response from the API');
      return response;
    })
    .catch(() => {
      console.log('Got a response from the API');
      return new Error();
    });
}
