export default function signUpUser(firstName, lastName) {
  const data = {
    firstName: `${firstName}`,
    lastName: `${lastName}`,
  };

  const promise = new Promise((resolve) => {
    resolve(data);
  });

  return promise;
}
