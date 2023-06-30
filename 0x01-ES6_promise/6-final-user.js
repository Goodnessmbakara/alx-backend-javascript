import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'

export default handleProfileSignup(firstName,lastName,fileName){
	return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(results => {
[photoResult,userResult] = results;

console.log(`User Result - Status: ${userResult.status}, Value: ${userResult.value}`);

      // Accessing status and value of photoResult
      console.log(`Photo Result - Status: ${photoResult.status}, Value: ${photoResult.value}`);

	    return [photoResult,userResult];

    {
     ` status: ${Promise.status}`,
     ` value: ${results}`
    },
  ]
    };
}
