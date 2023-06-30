// Import necessary functions from utils.js
import { uploadPhoto, createUser } from './utils';

// Async function asyncUploadUser
export default async function asyncUploadUser() {
  try {
    // Call uploadPhoto and createUser functions concurrently using Promise.all
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);

    // Return an object with the photo and user responses
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // Return an empty object if an error occurs
    return {
      photo: null,
      user: null,
    };
  }
}
