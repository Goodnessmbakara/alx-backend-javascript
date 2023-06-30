import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [uploadPhotoResult, createUserResult] = results;
      console.log(`${uploadPhotoResult.body} ${createUserResult.firstName} ${createUserResult.lastName}`);
    });
  promise1.catch((error) => {
    // The photo upload failed.
    console.log('Signup system offline', error.message);
  });
  promise2.catch((error) => {
    // The user creation failed.
    console.log('Signup system offline', error.message);
  });
}
