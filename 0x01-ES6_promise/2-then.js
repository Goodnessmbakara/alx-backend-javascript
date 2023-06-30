export default function handleResponseFromAPI(promise) {
  promise.then(() => ({
    status: 200,
    body: 'success',
  }));

  promise.catch(() => ({}));

  promise.then(() => {
    console.log('Got a response from the API');
  });
}
