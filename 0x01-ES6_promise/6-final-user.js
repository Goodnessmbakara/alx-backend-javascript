import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const [userResult, photoResult] = results;

      console.log(`User Result - Status: ${userResult.status}, Value: ${userResult.value}`);
      console.log(`Photo Result - Status: ${photoResult.status}, Value: ${photoResult.value}`);

      return { userResult, photoResult };
    });
}
