export default function handleResponseFromAPI(promise) {
  promise.then((value) => ({
    status: 200,
    body: 'success',
  }));

  promise.catch((error) => ({}));

  promise.then((value) => {
    console.log('Got a response from the API');
  });
}
