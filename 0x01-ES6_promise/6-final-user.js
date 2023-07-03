import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const userData = await signUpUser(firstName, lastName);
    const fileData = await uploadPhoto(fileName);

    return [
      { status: 'fulfilled', value: userData },
      { status: 'fulfilled', value: fileData },
    ];
  } catch (error) {
    return [
      { status: 'rejected', value: error.message },
      { status: 'rejected', value: error.message },
    ];
  }
}
